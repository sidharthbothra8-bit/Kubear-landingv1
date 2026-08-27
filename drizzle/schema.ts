import { boolean, index, int, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/** Editorial status deliberately separates a scheduled release from an approved public article. */
export const learnArticleStatus = mysqlEnum("learn_article_status", ["draft", "in_review", "scheduled", "published", "updated", "paused", "archived"]);

/** Durable editorial collection records keep the public Learn taxonomy independent from individual posts. */
export const learnTopics = mysqlTable("learn_topics", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 80 }).notNull().unique(),
  label: varchar("label", { length: 120 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  accent: varchar("accent", { length: 30 }).notNull().default("copper"),
  sortOrder: int("sortOrder").notNull().unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

/** Living Ledger publishing model: content stays non-public until its reviewed release date. */
export const learnArticles = mysqlTable("learn_articles", {
  id: int("id").autoincrement().primaryKey(),
  calendarOrder: int("calendarOrder").notNull().unique(),
  slug: varchar("slug", { length: 180 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  dek: text("dek").notNull(),
  topic: varchar("topic", { length: 80 }).notNull(),
  category: varchar("category", { length: 80 }).notNull(),
  funnelStage: varchar("funnelStage", { length: 40 }).notNull(),
  status: learnArticleStatus.notNull().default("draft"),
  scheduledAt: timestamp("scheduledAt"),
  publishedAt: timestamp("publishedAt"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  authorName: varchar("authorName", { length: 120 }).notNull().default("Kubear Editorial Team"),
  reviewerName: varchar("reviewerName", { length: 120 }),
  reviewedAt: timestamp("reviewedAt"),
  readTime: varchar("readTime", { length: 40 }).notNull(),
  targetWordCount: int("targetWordCount").notNull(),
  openingHook: text("openingHook").notNull(),
  directAnswer: text("directAnswer").notNull(),
  takeaway: text("takeaway").notNull(),
  indianScenario: text("indianScenario").notNull(),
  outlineJson: text("outlineJson").notNull(),
  keyPointsJson: text("keyPointsJson").notNull(),
  bodyMarkdown: text("bodyMarkdown").notNull(),
  ctaLabel: varchar("ctaLabel", { length: 180 }).notNull(),
  ctaHref: varchar("ctaHref", { length: 255 }).notNull(),
  toolLabel: varchar("toolLabel", { length: 180 }),
  toolHref: varchar("toolHref", { length: 255 }),
  relatedSlugsJson: text("relatedSlugsJson").notNull(),
  heroType: varchar("heroType", { length: 80 }).notNull(),
  lifeMarker: varchar("lifeMarker", { length: 120 }).notNull(),
  accent: varchar("accent", { length: 30 }).notNull().default("copper"),
  seoTitle: varchar("seoTitle", { length: 255 }).notNull(),
  metaDescription: varchar("metaDescription", { length: 320 }).notNull(),
  canonicalPath: varchar("canonicalPath", { length: 255 }).notNull(),
  sourceRoute: text("sourceRoute").notNull(),
  productClaimReview: boolean("productClaimReview").notNull().default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, table => [
  index("learn_articles_status_scheduled_idx").on(table.status, table.scheduledAt),
  index("learn_articles_topic_published_idx").on(table.topic, table.publishedAt),
]);

/** Individual sources make finance-sensitive review traceable article by article. */
export const learnArticleSources = mysqlTable("learn_article_sources", {
  id: int("id").autoincrement().primaryKey(),
  articleId: int("articleId").notNull(),
  sourceType: varchar("sourceType", { length: 40 }).notNull(),
  sourceTitle: varchar("sourceTitle", { length: 255 }).notNull(),
  sourceUrl: varchar("sourceUrl", { length: 2048 }).notNull(),
  accessedAt: timestamp("accessedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, table => [index("learn_article_sources_article_idx").on(table.articleId)]);

/** One project-level job controls the Tuesday publication sweep and owns its Heartbeat task UID. */
export const learnPublicationSchedules = mysqlTable("learn_publication_schedules", {
  id: int("id").autoincrement().primaryKey(),
  scheduleKey: varchar("scheduleKey", { length: 80 }).notNull(),
  timezone: varchar("timezone", { length: 64 }).notNull().default("Asia/Kolkata"),
  cronExpression: varchar("cronExpression", { length: 80 }).notNull(),
  scheduleCronTaskUid: varchar("schedule_cron_task_uid", { length: 65 }),
  isEnabled: boolean("isEnabled").notNull().default(true),
  lastRunAt: timestamp("lastRunAt"),
  lastPublishedArticleId: int("lastPublishedArticleId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => [
  uniqueIndex("learn_publication_schedule_key_unique").on(table.scheduleKey),
  index("learn_publication_schedule_task_uid_idx").on(table.scheduleCronTaskUid),
]);

export type LearnArticle = typeof learnArticles.$inferSelect;
export type InsertLearnArticle = typeof learnArticles.$inferInsert;
