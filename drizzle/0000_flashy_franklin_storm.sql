CREATE TABLE `learn_article_sources` (
	`id` int AUTO_INCREMENT NOT NULL,
	`articleId` int NOT NULL,
	`sourceType` varchar(40) NOT NULL,
	`sourceTitle` varchar(255) NOT NULL,
	`sourceUrl` varchar(2048) NOT NULL,
	`accessedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `learn_article_sources_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `learn_articles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`calendarOrder` int NOT NULL,
	`slug` varchar(180) NOT NULL,
	`title` varchar(255) NOT NULL,
	`dek` text NOT NULL,
	`topic` varchar(80) NOT NULL,
	`category` varchar(80) NOT NULL,
	`funnelStage` varchar(40) NOT NULL,
	`learn_article_status` enum('draft','in_review','scheduled','published','updated','paused','archived') NOT NULL DEFAULT 'draft',
	`scheduledAt` timestamp,
	`publishedAt` timestamp,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`authorName` varchar(120) NOT NULL DEFAULT 'Kubear Editorial Team',
	`reviewerName` varchar(120),
	`reviewedAt` timestamp,
	`readTime` varchar(40) NOT NULL,
	`targetWordCount` int NOT NULL,
	`openingHook` text NOT NULL,
	`directAnswer` text NOT NULL,
	`takeaway` text NOT NULL,
	`indianScenario` text NOT NULL,
	`outlineJson` text NOT NULL,
	`keyPointsJson` text NOT NULL,
	`bodyMarkdown` text NOT NULL,
	`ctaLabel` varchar(180) NOT NULL,
	`ctaHref` varchar(255) NOT NULL,
	`toolLabel` varchar(180),
	`toolHref` varchar(255),
	`relatedSlugsJson` text NOT NULL,
	`heroType` varchar(80) NOT NULL,
	`lifeMarker` varchar(120) NOT NULL,
	`accent` varchar(30) NOT NULL DEFAULT 'copper',
	`seoTitle` varchar(255) NOT NULL,
	`metaDescription` varchar(320) NOT NULL,
	`canonicalPath` varchar(255) NOT NULL,
	`sourceRoute` text NOT NULL,
	`productClaimReview` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `learn_articles_id` PRIMARY KEY(`id`),
	CONSTRAINT `learn_articles_calendarOrder_unique` UNIQUE(`calendarOrder`),
	CONSTRAINT `learn_articles_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `learn_publication_schedules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`scheduleKey` varchar(80) NOT NULL,
	`timezone` varchar(64) NOT NULL DEFAULT 'Asia/Kolkata',
	`cronExpression` varchar(80) NOT NULL,
	`schedule_cron_task_uid` varchar(65),
	`isEnabled` boolean NOT NULL DEFAULT true,
	`lastRunAt` timestamp,
	`lastPublishedArticleId` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `learn_publication_schedules_id` PRIMARY KEY(`id`),
	CONSTRAINT `learn_publication_schedule_key_unique` UNIQUE(`scheduleKey`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
--> statement-breakpoint
CREATE INDEX `learn_article_sources_article_idx` ON `learn_article_sources` (`articleId`);--> statement-breakpoint
CREATE INDEX `learn_articles_status_scheduled_idx` ON `learn_articles` (`learn_article_status`,`scheduledAt`);--> statement-breakpoint
CREATE INDEX `learn_articles_topic_published_idx` ON `learn_articles` (`topic`,`publishedAt`);--> statement-breakpoint
CREATE INDEX `learn_publication_schedule_task_uid_idx` ON `learn_publication_schedules` (`schedule_cron_task_uid`);