/* Living Ledger publishing: database-backed article state makes every public Learn note deliberate, dated and reviewable. */
import { and, asc, desc, eq, gt, inArray, isNotNull, lte } from "drizzle-orm";
import { learnArticleSources, learnArticles, learnPublicationSchedules, type LearnArticle } from "../drizzle/schema";
import { getDb } from "./db";

const publicStatuses = ["published", "updated"] as const;
type PublicationAction = "mark_review" | "approve_schedule" | "pause" | "publish_now";

const parseList = (value: string) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
};

export const toArticleView = (article: LearnArticle) => ({
  ...article,
  outline: parseList(article.outlineJson),
  keyPoints: parseList(article.keyPointsJson),
  relatedSlugs: parseList(article.relatedSlugsJson),
});

const requireDatabase = async () => {
  const db = await getDb();
  if (!db) throw new Error("The Learn editorial database is not available.");
  return db;
};

export function canPublishLearnArticle(
  article: Pick<LearnArticle, "status" | "scheduledAt" | "reviewedAt" | "productClaimReview">,
  now: Date,
) {
  return article.status === "scheduled" && Boolean(article.scheduledAt && article.scheduledAt <= now && article.reviewedAt && article.productClaimReview);
}

export async function getLearnHub(now = new Date()) {
  const db = await requireDatabase();
  const [publishedRows, upcomingRows] = await Promise.all([
    db.select().from(learnArticles).where(inArray(learnArticles.status, [...publicStatuses])).orderBy(desc(learnArticles.publishedAt), asc(learnArticles.calendarOrder)),
    db.select().from(learnArticles).where(and(gt(learnArticles.scheduledAt, now), inArray(learnArticles.status, ["draft", "in_review", "scheduled"]))).orderBy(asc(learnArticles.scheduledAt)).limit(1),
  ]);
  const articles = publishedRows.map(toArticleView);
  return { featured: articles[0] ?? null, next: upcomingRows[0] ? toArticleView(upcomingRows[0]) : null, articles };
}

export async function getPublicArticle(slug: string) {
  const db = await requireDatabase();
  const rows = await db.select().from(learnArticles).where(and(eq(learnArticles.slug, slug), inArray(learnArticles.status, [...publicStatuses]))).limit(1);
  const article = rows[0];
  if (!article) return null;
  const [sources, allPublished] = await Promise.all([
    db.select().from(learnArticleSources).where(eq(learnArticleSources.articleId, article.id)).orderBy(asc(learnArticleSources.id)),
    db.select().from(learnArticles).where(inArray(learnArticles.status, [...publicStatuses])).orderBy(asc(learnArticles.calendarOrder)),
  ]);
  const related = parseList(article.relatedSlugsJson).map(slugValue => allPublished.find(item => item.slug === slugValue)).filter((item): item is LearnArticle => Boolean(item)).map(toArticleView);
  return { ...toArticleView(article), sources, related };
}

export async function getPublicTopic(topic: string) {
  const db = await requireDatabase();
  const rows = await db.select().from(learnArticles).where(and(eq(learnArticles.topic, topic), inArray(learnArticles.status, [...publicStatuses]))).orderBy(desc(learnArticles.publishedAt), asc(learnArticles.calendarOrder));
  return rows.map(toArticleView);
}

export async function getPublishedLearnPaths() {
  const db = await requireDatabase();
  return db.select({ canonicalPath: learnArticles.canonicalPath, updatedAt: learnArticles.updatedAt }).from(learnArticles).where(inArray(learnArticles.status, [...publicStatuses])).orderBy(desc(learnArticles.publishedAt));
}

export async function getStudioData() {
  const db = await requireDatabase();
  const [articles, schedules] = await Promise.all([
    db.select().from(learnArticles).orderBy(asc(learnArticles.calendarOrder)),
    db.select().from(learnPublicationSchedules).where(eq(learnPublicationSchedules.scheduleKey, "kubear-learn-tuesday")).limit(1),
  ]);
  return { articles: articles.map(toArticleView), schedule: schedules[0] ?? null };
}

export async function applyPublicationAction(id: number, action: PublicationAction, reviewerName: string | null) {
  const db = await requireDatabase();
  const row = (await db.select().from(learnArticles).where(eq(learnArticles.id, id)).limit(1))[0];
  if (!row) throw new Error("Learn article not found.");
  const now = new Date();

  if (action === "mark_review") {
    await db.update(learnArticles).set({ status: "in_review", reviewerName: reviewerName || "Kubear Editorial Team", reviewedAt: now }).where(eq(learnArticles.id, id));
  }
  if (action === "approve_schedule") {
    if (!row.reviewedAt) throw new Error("Mark this article reviewed before approving its schedule.");
    if (!row.scheduledAt) throw new Error("A scheduled date is required before approving this article.");
    await db.update(learnArticles).set({ status: "scheduled", reviewerName: reviewerName || row.reviewerName || "Kubear Editorial Team", productClaimReview: true }).where(eq(learnArticles.id, id));
  }
  if (action === "pause") {
    await db.update(learnArticles).set({ status: "paused" }).where(eq(learnArticles.id, id));
  }
  if (action === "publish_now") {
    const eligible = { ...row, status: "scheduled" as const, scheduledAt: row.scheduledAt ?? now };
    if (!canPublishLearnArticle(eligible, now)) throw new Error("This article needs a dated editorial review and product-claim approval before publishing.");
    await db.update(learnArticles).set({ status: "published", publishedAt: now }).where(eq(learnArticles.id, id));
  }
  return (await db.select().from(learnArticles).where(eq(learnArticles.id, id)).limit(1))[0];
}

export async function publishEligibleLearnArticles(taskUid: string, now = new Date()) {
  const db = await requireDatabase();
  const schedule = (await db.select().from(learnPublicationSchedules).where(eq(learnPublicationSchedules.scheduleCronTaskUid, taskUid)).limit(1))[0];
  if (!schedule || !schedule.isEnabled) return { published: 0, skipped: schedule ? "disabled" : "orphan" };
  const candidates = await db.select().from(learnArticles).where(and(eq(learnArticles.status, "scheduled"), lte(learnArticles.scheduledAt, now), isNotNull(learnArticles.reviewedAt), eq(learnArticles.productClaimReview, true))).orderBy(asc(learnArticles.scheduledAt));
  const eligible = candidates.filter(article => canPublishLearnArticle(article, now));
  for (const article of eligible) {
    await db.update(learnArticles).set({ status: "published", publishedAt: now }).where(and(eq(learnArticles.id, article.id), eq(learnArticles.status, "scheduled")));
  }
  await db.update(learnPublicationSchedules).set({ lastRunAt: now, lastPublishedArticleId: eligible.at(-1)?.id ?? schedule.lastPublishedArticleId }).where(eq(learnPublicationSchedules.id, schedule.id));
  return { published: eligible.length, articleIds: eligible.map(article => article.id) };
}
