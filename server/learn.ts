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

const defaultMockArticles: LearnArticle[] = [
  {
    id: 1,
    calendarOrder: 1,
    slug: "salary-day-is-not-spending-day",
    title: "Salary day is not a spending day. Try these four jobs first.",
    dek: "A simple way to give salary, bills, buffer and a personal plan some space before the month gets busy.",
    topic: "salary-spending",
    category: "Spending",
    funnelStage: "Problem-aware",
    status: "published",
    scheduledAt: new Date("2025-01-01T03:30:00.000Z"),
    publishedAt: new Date("2025-01-01T03:30:00.000Z"),
    updatedAt: new Date("2025-01-01T03:30:00.000Z"),
    authorName: "Kubear Editorial Team",
    reviewerName: "Kubear Editorial Team",
    reviewedAt: new Date("2025-01-01T03:30:00.000Z"),
    readTime: "4 min read",
    targetWordCount: 900,
    openingHook: "Salary day brings relief, but within hours a cascade of auto-debits and impulsive plans can leave you wondering where it all went.",
    directAnswer: "Separate salary into four clear jobs immediately: commitments with fixed dates, a small emergency buffer, deliberate goals, and flexible spending.",
    takeaway: "The point is not to control every rupee. It is to make the important things visible before they surprise you.",
    indianScenario: "A software engineer in Bengaluru whose salary lands on the 1st and gets depleted before rent is due on the 5th.",
    outlineJson: JSON.stringify(["Start with what cannot wait", "Leave room for the plan you care about", "Keep a small shock absorber"]),
    keyPointsJson: JSON.stringify(["Dates matter more than rigid categories", "Keep your fun plans visible instead of guiltily hiding them", "A small buffer prevents high-interest borrowing"]),
    bodyMarkdown: `## Start with what cannot wait\n\nRent, a bill or a home expense does not need a complicated category. It just needs a clear place in your view.\n\nA simple first step is to name the things that are already spoken for this month. That makes the rest easier to see.\n\n## Leave room for the plan you care about\n\nA Goa plan, a course or a small buffer can sit beside the practical stuff. It does not need to wait until every month is perfect.\n\nSmall repeatable choices usually feel easier than one dramatic money rule.`,
    ctaLabel: "See the whole picture",
    ctaHref: "/how-it-works",
    toolLabel: "Try the Goa Goal Calculator",
    toolHref: "/learn/tools/goa-goal-calculator",
    relatedSlugsJson: JSON.stringify(["upi-weekly-check-in", "rent-bills-cards-what-to-see-first"]),
    heroType: "salary",
    lifeMarker: "Spending",
    accent: "saffron",
    seoTitle: "Salary day is not a spending day | Kubear Learn",
    metaDescription: "A simple way to give salary, bills, buffer and a personal plan some space before the month gets busy.",
    canonicalPath: "/learn/salary-day-is-not-spending-day",
    sourceRoute: "Reserve Bank of India & SEBI investor education guidelines",
    productClaimReview: true,
    createdAt: new Date("2025-01-01T03:30:00.000Z"),
  },
  {
    id: 2,
    calendarOrder: 2,
    slug: "upi-weekly-check-in",
    title: "UPI all week? A five-minute Friday check-in can help.",
    dek: "A no-shame way to look back at the quick payments that are easy to forget by Sunday.",
    topic: "salary-spending",
    category: "Spending",
    funnelStage: "Problem-aware",
    status: "published",
    scheduledAt: new Date("2025-01-08T03:30:00.000Z"),
    publishedAt: new Date("2025-01-08T03:30:00.000Z"),
    updatedAt: new Date("2025-01-08T03:30:00.000Z"),
    authorName: "Kubear Editorial Team",
    reviewerName: "Kubear Editorial Team",
    reviewedAt: new Date("2025-01-08T03:30:00.000Z"),
    readTime: "3 min read",
    targetWordCount: 750,
    openingHook: "With UPI, 40 micro-transactions a week happen at the tap of a fingerprint.",
    directAnswer: "Do a 5-minute Friday review to bundle and reflect on your week's UPI flow.",
    takeaway: "The goal is context, not guilt. A short weekly check can make small spends easier to remember.",
    indianScenario: "Chai, quick cabs, and quick deliveries adding up silently by Sunday night.",
    outlineJson: JSON.stringify(["Quick is good. Invisible is not always helpful.", "Use one small check-in"]),
    keyPointsJson: JSON.stringify(["Context beats guilt every time", "Spot patterns without recording every single chai"]),
    bodyMarkdown: `## Quick is good. Invisible is not always helpful.\n\nUPI makes ordinary things easy. A cab, lunch, chai, a small gift or groceries can happen before you have had time to think about them.\n\nThat does not make the payment bad. It simply means your money story can become scattered.\n\n## Use one small check-in\n\nPick a moment that already belongs to you, such as Friday evening or Sunday morning. Look at the week and name the payments you would otherwise forget.`,
    ctaLabel: "See how Kubear organizes UPI",
    ctaHref: "/your-money-picture",
    toolLabel: null,
    toolHref: null,
    relatedSlugsJson: JSON.stringify(["salary-day-is-not-spending-day", "rent-bills-cards-what-to-see-first"]),
    heroType: "upi",
    lifeMarker: "Spending",
    accent: "mint",
    seoTitle: "UPI weekly check-in | Kubear Learn",
    metaDescription: "A calm weekly way to make small UPI spends easier to notice without guilt.",
    canonicalPath: "/learn/upi-weekly-check-in",
    sourceRoute: "National Payments Corporation of India (NPCI) metrics and research",
    productClaimReview: true,
    createdAt: new Date("2025-01-08T03:30:00.000Z"),
  },
  {
    id: 3,
    calendarOrder: 3,
    slug: "rent-bills-cards-what-to-see-first",
    title: "Rent, bills, cards. What should be visible first?",
    dek: "A plain starter order for the commitments that can feel noisy when they are spread across different places.",
    topic: "start-here",
    category: "Organisation",
    funnelStage: "Problem-aware",
    status: "published",
    scheduledAt: new Date("2025-01-15T03:30:00.000Z"),
    publishedAt: new Date("2025-01-15T03:30:00.000Z"),
    updatedAt: new Date("2025-01-15T03:30:00.000Z"),
    authorName: "Kubear Editorial Team",
    reviewerName: "Kubear Editorial Team",
    reviewedAt: new Date("2025-01-15T03:30:00.000Z"),
    readTime: "4 min read",
    targetWordCount: 850,
    openingHook: "When fixed dates loom across three bank accounts and two credit cards, anxiety rises.",
    directAnswer: "Line up payments chronologically by due date rather than categorizing by expense type.",
    takeaway: "Start with what has a date. The month becomes easier to handle when due things are not hidden.",
    indianScenario: "Managing electricity bills on the 10th, credit card on the 18th, and SIP on the 25th.",
    outlineJson: JSON.stringify(["Look for dates before categories", "Make the next thing obvious"]),
    keyPointsJson: JSON.stringify(["Due dates give calendar runway", "Eliminate late fee friction"]),
    bodyMarkdown: `## Look for dates before categories\n\nWhen you are deciding what to see first, dates are often more useful than a long list of labels. A due date tells you which part of the month needs attention.\n\nRent, a card bill and a regular repayment may all live in different places. Bringing the dates together is a useful first move.\n\n## Make the next thing obvious\n\nA money view works best when it answers one clear question: what needs attention next?`,
    ctaLabel: "See the whole picture",
    ctaHref: "/how-it-works",
    toolLabel: "Try the EMI Calculator",
    toolHref: "/learn/tools/emi-calculator",
    relatedSlugsJson: JSON.stringify(["salary-day-is-not-spending-day", "goa-fund-without-guilt"]),
    heroType: "rent",
    lifeMarker: "Organisation",
    accent: "orange",
    seoTitle: "Rent, bills, cards: what to see first? | Kubear Learn",
    metaDescription: "A calm way to bring important payment dates into one visible picture.",
    canonicalPath: "/learn/rent-bills-cards-what-to-see-first",
    sourceRoute: "Reserve Bank of India financial literacy guidelines",
    productClaimReview: true,
    createdAt: new Date("2025-01-15T03:30:00.000Z"),
  },
  {
    id: 4,
    calendarOrder: 4,
    slug: "goa-fund-without-guilt",
    title: "Goa ka plan. A simple way to keep it visible.",
    dek: "A travel plan can live beside rent, bills and everyday spending without becoming a source of guilt.",
    topic: "goals-decisions",
    category: "Goals",
    funnelStage: "Solution-aware",
    status: "published",
    scheduledAt: new Date("2025-01-22T03:30:00.000Z"),
    publishedAt: new Date("2025-01-22T03:30:00.000Z"),
    updatedAt: new Date("2025-01-22T03:30:00.000Z"),
    authorName: "Kubear Editorial Team",
    reviewerName: "Kubear Editorial Team",
    reviewedAt: new Date("2025-01-22T03:30:00.000Z"),
    readTime: "3 min read",
    targetWordCount: 700,
    openingHook: "Vacation goals often get postponed or funded with high-interest credit card debt at the last minute.",
    directAnswer: "Create a named, recurring monthly allocation so your trip is paid for before you pack.",
    takeaway: "A goal becomes easier to keep when it has a visible place next to the rest of the month.",
    indianScenario: "Planning a monsoon trip with college friends without disrupting rent.",
    outlineJson: JSON.stringify(["Do not hide the fun plan", "Make the next amount small enough to repeat"]),
    keyPointsJson: JSON.stringify(["Planned joy prevents impulsive debt", "Visualizing progress builds positive financial habits"]),
    bodyMarkdown: `## Do not hide the fun plan\n\nA short trip, a concert or a course can feel less serious than a bill. But it may still be a real plan for you.\n\nKeeping it visible does not promise that it will happen. It simply lets you make the choice with the full month in mind.\n\n## Make the next amount small enough to repeat\n\nA number that works every month can feel more useful than a large target that makes you switch off.`,
    ctaLabel: "Plan your trip",
    ctaHref: "/how-it-works",
    toolLabel: "Try the Goa Goal Calculator",
    toolHref: "/learn/tools/goa-goal-calculator",
    relatedSlugsJson: JSON.stringify(["salary-day-is-not-spending-day", "home-money-without-mix-up"]),
    heroType: "goa",
    lifeMarker: "Goals",
    accent: "orange",
    seoTitle: "Goa ka plan: keep it visible | Kubear Learn",
    metaDescription: "A simple way to keep a travel goal beside the bills without guilt.",
    canonicalPath: "/learn/goa-fund-without-guilt",
    sourceRoute: "SEBI financial planning frameworks",
    productClaimReview: true,
    createdAt: new Date("2025-01-22T03:30:00.000Z"),
  },
  {
    id: 5,
    calendarOrder: 5,
    slug: "home-money-without-mix-up",
    title: "Home money without the mix-up.",
    dek: "How selected home costs can stay visible while personal money remains personal.",
    topic: "home-household",
    category: "Household",
    funnelStage: "Solution-aware",
    status: "published",
    scheduledAt: new Date("2025-01-29T03:30:00.000Z"),
    publishedAt: new Date("2025-01-29T03:30:00.000Z"),
    updatedAt: new Date("2025-01-29T03:30:00.000Z"),
    authorName: "Kubear Editorial Team",
    reviewerName: "Kubear Editorial Team",
    reviewedAt: new Date("2025-01-29T03:30:00.000Z"),
    readTime: "4 min read",
    targetWordCount: 800,
    openingHook: "Sharing a home with flatmates or a partner shouldn't require merging your entire financial lives.",
    directAnswer: "Share specific line items (rent, wifi, groceries) while keeping personal spending private.",
    takeaway: "Shared does not have to mean everything. Clear boundaries can make home conversations easier.",
    indianScenario: "Couples managing joint household groceries and rent while keeping personal investments separate.",
    outlineJson: JSON.stringify(["Name what is truly shared", "Keep the conversation simple"]),
    keyPointsJson: JSON.stringify(["Granular sharing beats pooled accounts", "Transparency avoids awkward end-of-month tallying"]),
    bodyMarkdown: `## Name what is truly shared\n\nRent, groceries, a utility bill or a home repair may matter to more than one person. It can help to give those things a shared view.\n\nPersonal purchases and personal plans do not need to become part of that view unless you want them to.\n\n## Keep the conversation simple\n\nA shared money conversation does not need to start with every transaction. Start with the one cost that affects the home this week.`,
    ctaLabel: "See shared money view",
    ctaHref: "/your-money-picture",
    toolLabel: null,
    toolHref: null,
    relatedSlugsJson: JSON.stringify(["goa-fund-without-guilt", "epf-ppf-nps-basics"]),
    heroType: "home",
    lifeMarker: "Household",
    accent: "ink",
    seoTitle: "Home money without the mix-up | Kubear Learn",
    metaDescription: "Keep selected shared costs together while personal money remains personal.",
    canonicalPath: "/learn/home-money-without-mix-up",
    sourceRoute: "Indian family financial management studies",
    productClaimReview: true,
    createdAt: new Date("2025-01-29T03:30:00.000Z"),
  },
  {
    id: 6,
    calendarOrder: 6,
    slug: "epf-ppf-nps-basics",
    title: "EPF, PPF and NPS. What each is meant for.",
    dek: "A plain-English introduction to three long-term terms. General education, not a personal recommendation.",
    topic: "tax-records",
    category: "Tax/Admin",
    funnelStage: "Decision-ready",
    status: "published",
    scheduledAt: new Date("2025-02-05T03:30:00.000Z"),
    publishedAt: new Date("2025-02-05T03:30:00.000Z"),
    updatedAt: new Date("2025-02-05T03:30:00.000Z"),
    authorName: "Kubear Editorial Team",
    reviewerName: "Kubear Editorial Team",
    reviewedAt: new Date("2025-02-05T03:30:00.000Z"),
    readTime: "5 min read",
    targetWordCount: 1100,
    openingHook: "Acronyms like EPF, PPF, and NPS sound intimidating, yet they form the cornerstone of Indian retirement planning.",
    directAnswer: "Understand each vehicle's lock-in, tax treatment, and liquidity before committing capital.",
    takeaway: "Long-term words can be understood one at a time. A starting point is more useful than a rushed decision.",
    indianScenario: "A salaried professional comparing employee provident fund deductions with optional voluntary contributions.",
    outlineJson: JSON.stringify(["Start with the full name and the purpose", "Do not turn a simple explainer into a decision"]),
    keyPointsJson: JSON.stringify(["EPF is for salaried employees", "PPF offers sovereign guarantees for all citizens", "NPS provides market-linked low-cost pension wealth"]),
    bodyMarkdown: `## Start with the full name and the purpose\n\nThese terms often come up when you start a job, talk about long-term saving or look at tax-related paperwork. Each has a different structure and set of rules.\n\nBefore taking any action, use current official sources or a qualified professional for details that apply to you.\n\n## Do not turn a simple explainer into a decision\n\nA short guide can help you understand the words and frame better questions. It cannot tell you what is right for your income, goals or tax situation.`,
    ctaLabel: "Learn more",
    ctaHref: "/how-it-works",
    toolLabel: "Try the SIP Calculator",
    toolHref: "/learn/tools/sip-calculator",
    relatedSlugsJson: JSON.stringify(["salary-day-is-not-spending-day", "home-money-without-mix-up"]),
    heroType: "library",
    lifeMarker: "Tax/Admin",
    accent: "saffron",
    seoTitle: "EPF, PPF and NPS basics | Kubear Learn",
    metaDescription: "A general, plain-English introduction to three familiar long-term money terms.",
    canonicalPath: "/learn/epf-ppf-nps-basics",
    sourceRoute: "PFRDA, EPFO & Income Tax Department statutory documentation",
    productClaimReview: true,
    createdAt: new Date("2025-02-05T03:30:00.000Z"),
  },
];

const defaultMockSources = [
  { id: 1, articleId: 1, sourceType: "review_route", sourceTitle: "Reserve Bank of India - Financial Education", sourceUrl: "https://www.rbi.org.in/", accessedAt: new Date() },
  { id: 2, articleId: 1, sourceType: "review_route", sourceTitle: "SEBI Investor Portal", sourceUrl: "https://investor.sebi.gov.in/", accessedAt: new Date() },
  { id: 3, articleId: 2, sourceType: "review_route", sourceTitle: "NPCI UPI Statistics", sourceUrl: "https://www.npci.org.in/", accessedAt: new Date() },
  { id: 4, articleId: 3, sourceType: "review_route", sourceTitle: "RBI Consumer Protection", sourceUrl: "https://www.rbi.org.in/", accessedAt: new Date() },
  { id: 5, articleId: 4, sourceType: "review_route", sourceTitle: "SEBI Guidelines on Financial Goals", sourceUrl: "https://www.sebi.gov.in/", accessedAt: new Date() },
  { id: 6, articleId: 5, sourceType: "review_route", sourceTitle: "Kubear Consumer Financial Research", sourceUrl: "https://www.kuberos.in/", accessedAt: new Date() },
  { id: 7, articleId: 6, sourceType: "review_route", sourceTitle: "PFRDA Official Portal", sourceUrl: "https://www.pfrda.org.in/", accessedAt: new Date() },
  { id: 8, articleId: 6, sourceType: "review_route", sourceTitle: "EPFO Official Portal", sourceUrl: "https://www.epfindia.gov.in/", accessedAt: new Date() },
];

export function canPublishLearnArticle(
  article: Pick<LearnArticle, "status" | "scheduledAt" | "reviewedAt" | "productClaimReview">,
  now: Date,
) {
  return article.status === "scheduled" && Boolean(article.scheduledAt && article.scheduledAt <= now && article.reviewedAt && article.productClaimReview);
}

export async function getLearnHub(now = new Date()) {
  const db = await getDb();
  if (db) {
    try {
      const [publishedRows, upcomingRows] = await Promise.all([
        db.select().from(learnArticles).where(inArray(learnArticles.status, [...publicStatuses])).orderBy(desc(learnArticles.publishedAt), asc(learnArticles.calendarOrder)),
        db.select().from(learnArticles).where(and(gt(learnArticles.scheduledAt, now), inArray(learnArticles.status, ["draft", "in_review", "scheduled"]))).orderBy(asc(learnArticles.scheduledAt)).limit(1),
      ]);
      if (publishedRows.length > 0) {
        const articles = publishedRows.map(toArticleView);
        return { featured: articles[0] ?? null, next: upcomingRows[0] ? toArticleView(upcomingRows[0]) : null, articles };
      }
    } catch (e) {
      console.warn("[getLearnHub] Falling back to default static articles:", e);
    }
  }
  const articles = defaultMockArticles.map(toArticleView);
  return {
    featured: articles[0],
    next: {
      ...articles[1],
      scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    articles,
  };
}

export async function getPublicArticle(slug: string) {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db.select().from(learnArticles).where(and(eq(learnArticles.slug, slug), inArray(learnArticles.status, [...publicStatuses]))).limit(1);
      const article = rows[0];
      if (article) {
        const [sources, allPublished] = await Promise.all([
          db.select().from(learnArticleSources).where(eq(learnArticleSources.articleId, article.id)).orderBy(asc(learnArticleSources.id)),
          db.select().from(learnArticles).where(inArray(learnArticles.status, [...publicStatuses])).orderBy(asc(learnArticles.calendarOrder)),
        ]);
        const related = parseList(article.relatedSlugsJson).map(slugValue => allPublished.find(item => item.slug === slugValue)).filter((item): item is LearnArticle => Boolean(item)).map(toArticleView);
        return { ...toArticleView(article), sources, related };
      }
    } catch (e) {
      console.warn("[getPublicArticle] Falling back to static data for slug:", slug, e);
    }
  }
  const fallback = defaultMockArticles.find(a => a.slug === slug);
  if (!fallback) return null;
  const sources = defaultMockSources.filter(s => s.articleId === fallback.id);
  const related = parseList(fallback.relatedSlugsJson)
    .map(slugValue => defaultMockArticles.find(item => item.slug === slugValue))
    .filter((item): item is LearnArticle => Boolean(item))
    .map(toArticleView);
  return { ...toArticleView(fallback), sources, related };
}

export async function getPublicTopic(topic: string) {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db.select().from(learnArticles).where(and(eq(learnArticles.topic, topic), inArray(learnArticles.status, [...publicStatuses]))).orderBy(desc(learnArticles.publishedAt), asc(learnArticles.calendarOrder));
      if (rows.length > 0) {
        return rows.map(toArticleView);
      }
    } catch (e) {
      console.warn("[getPublicTopic] Falling back to static data for topic:", topic, e);
    }
  }
  return defaultMockArticles.filter(a => a.topic === topic || topic === "start-here").map(toArticleView);
}

export async function getPublishedLearnPaths() {
  const db = await getDb();
  if (db) {
    try {
      const rows = await db.select({ canonicalPath: learnArticles.canonicalPath, updatedAt: learnArticles.updatedAt }).from(learnArticles).where(inArray(learnArticles.status, [...publicStatuses])).orderBy(desc(learnArticles.publishedAt));
      if (rows.length > 0) return rows;
    } catch (e) {
      console.warn("[getPublishedLearnPaths] Falling back to static paths:", e);
    }
  }
  return defaultMockArticles.map(a => ({ canonicalPath: a.canonicalPath, updatedAt: a.updatedAt }));
}

export async function getStudioData() {
  const db = await getDb();
  if (db) {
    try {
      const [articles, schedules] = await Promise.all([
        db.select().from(learnArticles).orderBy(asc(learnArticles.calendarOrder)),
        db.select().from(learnPublicationSchedules).where(eq(learnPublicationSchedules.scheduleKey, "kubear-learn-tuesday")).limit(1),
      ]);
      if (articles.length > 0) {
        return { articles: articles.map(toArticleView), schedule: schedules[0] ?? null };
      }
    } catch (e) {
      console.warn("[getStudioData] Falling back to static studio data:", e);
    }
  }
  return {
    articles: defaultMockArticles.map(toArticleView),
    schedule: {
      id: 1,
      scheduleKey: "kubear-learn-tuesday",
      timezone: "Asia/Kolkata",
      cronExpression: "0 30 3 * * 2",
      scheduleCronTaskUid: null,
      isEnabled: true,
      lastRunAt: null,
      lastPublishedArticleId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };
}

export async function applyPublicationAction(id: number, action: PublicationAction, reviewerName: string | null) {
  const db = await getDb();
  if (!db) {
    const item = defaultMockArticles.find(a => a.id === id);
    if (!item) throw new Error("Learn article not found.");
    if (action === "publish_now") {
      item.status = "published";
      item.publishedAt = new Date();
    }
    return item;
  }
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
  const db = await getDb();
  if (!db) return { published: 0, skipped: "offline" };
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

