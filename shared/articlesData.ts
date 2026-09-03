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

export const SLUG_ALIASES: Record<string, string> = {
  // Legacy short slugs & calculator guide references
  "goa-fund-without-guilt": "travel-fund-goa-to-europe-sinking-fund",
  "home-money-without-mix-up": "joint-accounts-for-couples-framework",
  "epf-ppf-nps-basics": "epf-uan-merger-and-interest-tax",
  "index-funds-vs-active-mutual-funds-india": "index-funds-vs-active-large-cap",
  "rent-vs-buy-in-india-the-real-math": "rent-vs-buy-in-indian-metros",
  "prepaying-your-home-loan-vs-investing": "prepaying-home-loan-vs-investing-sip",
  "debt-snowball-vs-debt-avalanche-india": "credit-card-statement-vs-minimum-due",
  "emergency-fund-in-india-how-much-is-enough": "emergency-fund-where-to-park",
  "short-term-vs-long-term-goals-where-to-park-money": "saving-vs-investing-which-comes-first",
  // Common colloquial search paths
  "car-ownership-vs-cabs": "buying-first-car-cash-vs-loan",
  "car-vs-cab": "buying-first-car-cash-vs-loan",
  "goa-goal-calculator": "travel-fund-goa-to-europe-sinking-fund",
  "salary-allocation": "salary-day-is-not-spending-day",
  "emergency-runway": "emergency-fund-where-to-park",
  "tax-regime-comparator": "old-vs-new-tax-regime-salaried",
  "tax-regime": "old-vs-new-tax-regime-salaried",
  "flatmate-maid-split": "joint-accounts-for-couples-framework",
  "credit-card-trap": "credit-card-statement-vs-minimum-due",
  "sip-calculator": "sip-date-and-step-up-strategy",
  "emi-calculator": "prepaying-home-loan-vs-investing-sip",
  "buy-vs-rent": "rent-vs-buy-in-indian-metros",
  "gold-investment": "sovereign-gold-bonds-vs-physical-gold",
  "health-insurance": "health-insurance-porting-corporate-to-personal",
  "term-insurance": "term-insurance-sum-assured-calculation",
  "cibil-score": "credit-score-repair-guide",
  "wedding-budget": "indian-wedding-budgeting-without-debt",
};

export function getStaticArticleBySlug(slug: string): ParsedArticle | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.toLowerCase().trim();
  
  // 1. Exact match
  const found = full50Articles.find((a) => a.slug.toLowerCase() === cleanSlug);
  if (found) return formatStaticArticle(found);

  // 2. Direct alias match
  const mappedSlug = SLUG_ALIASES[cleanSlug];
  if (mappedSlug) {
    const aliasFound = full50Articles.find((a) => a.slug.toLowerCase() === mappedSlug);
    if (aliasFound) return formatStaticArticle(aliasFound);
  }

  // 3. Keyword / partial slug match for resilience
  const keywords = cleanSlug.split("-").filter((k) => k.length > 3 && !["with", "your", "from", "that", "this"].includes(k));
  if (keywords.length > 0) {
    let bestMatch: ArticleData | undefined;
    let maxMatches = 0;

    for (const article of full50Articles) {
      const artSlug = article.slug.toLowerCase();
      let matchCount = 0;
      for (const kw of keywords) {
        if (artSlug.includes(kw)) matchCount++;
      }
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestMatch = article;
      }
    }

    if (bestMatch && maxMatches >= 1) {
      return formatStaticArticle(bestMatch);
    }
  }

  return undefined;
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

