CREATE TABLE `learn_topics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(80) NOT NULL,
	`label` varchar(120) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`accent` varchar(30) NOT NULL DEFAULT 'copper',
	`sortOrder` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `learn_topics_id` PRIMARY KEY(`id`),
	CONSTRAINT `learn_topics_slug_unique` UNIQUE(`slug`),
	CONSTRAINT `learn_topics_sortOrder_unique` UNIQUE(`sortOrder`)
);
