import { ArticleData, articlesPillar1To3 } from "./data/articlesPillar1To3";
import { articlesPillar4To6 } from "./data/articlesPillar4To6";
import { articlesPillar7To8 } from "./data/articlesPillar7To8";
import { articlesPillar9To10 } from "./data/articlesPillar9To10";

export type { ArticleData };

export const full50Articles: ArticleData[] = [
  ...articlesPillar1To3,
  ...articlesPillar4To6,
  ...articlesPillar7To8,
  ...articlesPillar9To10,
];

const parseList = (value: string) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
};

export interface ParsedArticle extends ArticleData {
  outline: string[];
  keyPoints: string[];
  relatedSlugs: string[];
}

export function formatStaticArticle(raw: ArticleData): ParsedArticle {
  return {
    ...raw,
    outline: parseList(raw.outlineJson),
    keyPoints: parseList(raw.keyPointsJson),
    relatedSlugs: parseList(raw.relatedSlugsJson),
  };
}

export const staticParsedArticles: ParsedArticle[] = full50Articles.map(formatStaticArticle);

export function getStaticArticleBySlug(slug: string): ParsedArticle | undefined {
  const found = full50Articles.find((a) => a.slug === slug);
  return found ? formatStaticArticle(found) : undefined;
}

export function getStaticArticlesByTopic(topicSlug: string): ParsedArticle[] {
  return staticParsedArticles.filter(
    (a) =>
      a.topic === topicSlug ||
      (topicSlug === "tax-records" && (a.topic === "taxes-records" || a.topic === "tax-records")) ||
      (topicSlug === "long-term" && (a.topic === "wealth-independence" || a.topic === "long-term"))
  );
}

export default full50Articles;

