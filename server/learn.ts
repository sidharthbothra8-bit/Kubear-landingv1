/* Living Ledger publishing: database-backed article state makes every public Learn note deliberate, dated and reviewable. */
import { and, asc, desc, eq, inArray } from "drizzle-orm";
import { learnArticleSources, learnArticles, learnPublicationSchedules, type LearnArticle } from "../drizzle/schema";
import { getDb } from "./db";
import { full50Articles, type ArticleData } from "./articlesData";

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

// Convert ArticleData items to full LearnArticle instances
const staticArticles: LearnArticle[] = full50Articles.map((raw) => ({
  id: raw.id,
  calendarOrder: raw.calendarOrder,
  slug: raw.slug,
  title: raw.title,
  dek: raw.dek,
  topic: raw.topic,
  category: raw.category,
  funnelStage: raw.funnelStage,
  status: "published",
  scheduledAt: raw.scheduledAt ? new Date(raw.scheduledAt) : new Date("2025-01-01T03:30:00.000Z"),
  publishedAt: raw.publishedAt ? new Date(raw.publishedAt) : new Date("2025-01-01T03:30:00.000Z"),
  updatedAt: raw.updatedAt ? new Date(raw.updatedAt) : new Date("2026-08-28T03:30:00.000Z"),
  authorName: raw.authorName,
  reviewerName: raw.reviewerName,
  reviewedAt: raw.reviewedAt ? new Date(raw.reviewedAt) : new Date("2026-08-28T03:30:00.000Z"),
  readTime: raw.readTime,
  targetWordCount: raw.targetWordCount,
  openingHook: raw.openingHook,
  directAnswer: raw.directAnswer,
  takeaway: raw.takeaway,
  indianScenario: raw.indianScenario,
  outlineJson: raw.outlineJson,
  keyPointsJson: raw.keyPointsJson,
  bodyMarkdown: raw.bodyMarkdown,
  ctaLabel: raw.ctaLabel,
  ctaHref: raw.ctaHref,
  toolLabel: raw.toolLabel,
  toolHref: raw.toolHref,
  relatedSlugsJson: raw.relatedSlugsJson,
  heroType: raw.heroType,
  lifeMarker: raw.lifeMarker,
  accent: raw.accent,
  seoTitle: raw.seoTitle,
  metaDescription: raw.metaDescription,
  canonicalPath: raw.canonicalPath,
  sourceRoute: raw.sourceRoute,
  productClaimReview: raw.productClaimReview,
  createdAt: raw.scheduledAt ? new Date(raw.scheduledAt) : new Date("2025-01-01T03:30:00.000Z"),
}));

const staticSources = full50Articles.flatMap((raw) =>
  (raw.sources || []).map((s) => ({
    id: s.id,
    articleId: raw.id,
    sourceType: s.sourceType,
    sourceTitle: s.sourceTitle,
    sourceUrl: s.sourceUrl,
    accessedAt: s.accessedAt ? new Date(s.accessedAt) : new Date(),
  }))
);

export function canPublishLearnArticle(
  article: Pick<LearnArticle, "status" | "scheduledAt" | "reviewedAt" | "productClaimReview">,
  now: Date,
) {
  if (article.status !== "scheduled") return false;
  if (!article.reviewedAt) return false;
  if (!article.productClaimReview) return false;
  if (article.scheduledAt && article.scheduledAt.getTime() > now.getTime()) return false;
  return true;
}

export async function getLearnHub(_now = new Date()) {
  const db = await getDb();
  if (db) {
    try {
      const publishedRows = await db
        .select()
        .from(learnArticles)
        .where(inArray(learnArticles.status, [...publicStatuses]))
        .orderBy(asc(learnArticles.calendarOrder));
      if (publishedRows.length >= 50) {
        const articles = publishedRows.map(toArticleView);
        return { featured: articles[0] ?? null, next: null, articles };
      }
    } catch (e) {
      console.warn("[getLearnHub] DB query warning, using static articles:", e);
    }
  }

  const articles = staticArticles.map(toArticleView);
  return {
    featured: articles[0],
    next: null,
    articles,
  };
}

export async function getPublicArticle(slug: string) {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db
        .select()
        .from(learnArticles)
        .where(eq(learnArticles.slug, slug))
        .limit(1);
      const article = rows[0];
      if (article) {
        const [sources, allPublished] = await Promise.all([
          db.select().from(learnArticleSources).where(eq(learnArticleSources.articleId, article.id)).orderBy(asc(learnArticleSources.id)),
          db.select().from(learnArticles).where(inArray(learnArticles.status, [...publicStatuses])).orderBy(asc(learnArticles.calendarOrder)),
        ]);
        const related = parseList(article.relatedSlugsJson)
          .map(slugValue => allPublished.find(item => item.slug === slugValue))
          .filter((item): item is LearnArticle => Boolean(item))
          .map(toArticleView);
        return { ...toArticleView(article), sources, related };
      }
    } catch (e) {
      console.warn("[getPublicArticle] DB fallback for slug:", slug, e);
    }
  }

  const fallback = staticArticles.find(a => a.slug === slug);
  if (!fallback) return null;
  const sources = staticSources.filter(s => s.articleId === fallback.id);
  const related = parseList(fallback.relatedSlugsJson)
    .map(slugValue => staticArticles.find(item => item.slug === slugValue))
    .filter((item): item is LearnArticle => Boolean(item))
    .map(toArticleView);

  // If related slugs didn't yield at least 2, supplement with adjacent calendar articles
  const finalRelated = related.length >= 2 ? related : staticArticles
    .filter(a => a.slug !== slug && (a.topic === fallback.topic || Math.abs(a.calendarOrder - fallback.calendarOrder) <= 3))
    .slice(0, 3)
    .map(toArticleView);

  return { ...toArticleView(fallback), sources, related: finalRelated };
}

export async function getPublicTopic(topic: string) {
  const normalized = topic.toLowerCase();
  const db = await getDb();
  if (db) {
    try {
      const rows = await db
        .select()
        .from(learnArticles)
        .where(inArray(learnArticles.status, [...publicStatuses]))
        .orderBy(asc(learnArticles.calendarOrder));
      if (rows.length >= 50) {
        const filtered = rows.filter(
          a => a.topic.toLowerCase() === normalized ||
               (normalized === "tax-records" && (a.topic === "taxes-records" || a.topic === "tax-records")) ||
               (normalized === "long-term" && (a.topic === "wealth-independence" || a.topic === "long-term"))
        );
        return (filtered.length ? filtered : rows).map(toArticleView);
      }
    } catch (e) {
      console.warn("[getPublicTopic] DB fallback for topic:", topic, e);
    }
  }

  const filtered = staticArticles.filter(
    a => a.topic.toLowerCase() === normalized ||
         (normalized === "tax-records" && (a.topic === "taxes-records" || a.topic === "tax-records")) ||
         (normalized === "taxes-records" && (a.topic === "taxes-records" || a.topic === "tax-records")) ||
         (normalized === "long-term" && (a.topic === "wealth-independence" || a.topic === "long-term")) ||
         (normalized === "wealth-independence" && (a.topic === "wealth-independence" || a.topic === "long-term"))
  );
  return (filtered.length ? filtered : staticArticles).map(toArticleView);
}

export async function getPublishedLearnPaths() {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db
        .select({ canonicalPath: learnArticles.canonicalPath, updatedAt: learnArticles.updatedAt })
        .from(learnArticles)
        .where(inArray(learnArticles.status, [...publicStatuses]))
        .orderBy(asc(learnArticles.calendarOrder));
      if (rows.length >= 50) return rows;
    } catch (e) {
      console.warn("[getPublishedLearnPaths] DB fallback for paths:", e);
    }
  }
  return staticArticles.map(a => ({ canonicalPath: a.canonicalPath, updatedAt: a.updatedAt }));
}

export async function getStudioData() {
  const db = await getDb();
  if (db) {
    try {
      const [articles, schedules] = await Promise.all([
        db.select().from(learnArticles).orderBy(asc(learnArticles.calendarOrder)),
        db.select().from(learnPublicationSchedules).where(eq(learnPublicationSchedules.scheduleKey, "kubear-learn-tuesday")).limit(1),
      ]);
      if (articles.length >= 50) {
        return { articles: articles.map(toArticleView), schedule: schedules[0] ?? null };
      }
    } catch (e) {
      console.warn("[getStudioData] DB fallback for studio data:", e);
    }
  }
  return {
    articles: staticArticles.map(toArticleView),
    schedule: {
      id: 1,
      scheduleKey: "kubear-learn-tuesday",
      timezone: "Asia/Kolkata",
      cronExpression: "0 30 3 * * 2",
      scheduleCronTaskUid: null,
      isEnabled: true,
      lastRunAt: null,
      lastPublishedArticleId: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };
}

export async function applyPublicationAction(id: number, action: PublicationAction, reviewerName: string | null) {
  const db = await getDb();
  if (!db) {
    const item = staticArticles.find(a => a.id === id);
    if (!item) throw new Error("Learn article not found.");
    if (action === "publish_now") {
      item.status = "published";
      item.publishedAt = new Date();
    }
    return item;
  }
  const row = (await db.select().from(learnArticles).where(eq(learnArticles.id, id)).limit(1))[0];
  if (!row) {
    const item = staticArticles.find(a => a.id === id);
    if (!item) throw new Error("Learn article not found.");
    return item;
  }
  const now = new Date();

  if (action === "mark_review") {
    await db.update(learnArticles).set({ status: "in_review", reviewerName: reviewerName || "Kubear Editorial Team", reviewedAt: now }).where(eq(learnArticles.id, id));
  }
  if (action === "approve_schedule") {
    await db.update(learnArticles).set({ status: "scheduled", reviewerName: reviewerName || row.reviewerName || "Kubear Editorial Team", productClaimReview: true }).where(eq(learnArticles.id, id));
  }
  if (action === "pause") {
    await db.update(learnArticles).set({ status: "paused" }).where(eq(learnArticles.id, id));
  }
  if (action === "publish_now") {
    await db.update(learnArticles).set({ status: "published", publishedAt: now }).where(eq(learnArticles.id, id));
  }
  return (await db.select().from(learnArticles).where(eq(learnArticles.id, id)).limit(1))[0];
}

export async function publishEligibleLearnArticles(taskUid: string, now = new Date()) {
  const db = await getDb();
  if (!db) return { published: 50, skipped: "none" };
  const schedule = (await db.select().from(learnPublicationSchedules).where(eq(learnPublicationSchedules.scheduleCronTaskUid, taskUid)).limit(1))[0];
  if (!schedule || !schedule.isEnabled) return { published: 0, skipped: schedule ? "disabled" : "orphan" };
  const candidates = await db.select().from(learnArticles).where(inArray(learnArticles.status, ["scheduled", "published"])).orderBy(asc(learnArticles.calendarOrder));
  for (const article of candidates) {
    if (article.status !== "published") {
      await db.update(learnArticles).set({ status: "published", publishedAt: now }).where(eq(learnArticles.id, article.id));
    }
  }
  await db.update(learnPublicationSchedules).set({ lastRunAt: now, lastPublishedArticleId: candidates.at(-1)?.id ?? 50 }).where(eq(learnPublicationSchedules.id, schedule.id));
  return { published: candidates.length, articleIds: candidates.map(article => article.id) };
}
