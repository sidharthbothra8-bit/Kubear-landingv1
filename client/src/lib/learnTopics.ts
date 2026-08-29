/* Living Ledger taxonomy: ten durable paths keep 50 notes legible without turning Learn into a generic content grid. */
export const learnTopics = [
  { slug: "start-here", label: "Start here", title: "Start with the month you have.", description: "A simpler way to see what comes in, what is due and what you want to keep moving." },
  { slug: "salary-spending", label: "Salary & spending", title: "Give your month a few clear jobs.", description: "Salary, UPI and everyday spending made more visible without guilt." },
  { slug: "saving-buffers", label: "Saving & buffers", title: "Keep a little room for life.", description: "Emergency money, saving habits and the space between income and surprise." },
  { slug: "debt-credit", label: "Debt & credit", title: "Borrowing deserves the full picture.", description: "EMIs, cards and trade-offs explained in plain, practical language." },
  { slug: "investing", label: "Investing", title: "Invest with the goal in view.", description: "Long-term investing basics connected to real Indian life decisions." },
  { slug: "goals-decisions", label: "Goals & decisions", title: "Make the plan visible.", description: "Home, travel, family and career decisions with the trade-offs made clearer." },
  { slug: "home-household", label: "Home & household", title: "Share the right things, clearly.", description: "Household money conversations that keep boundaries and responsibilities understandable." },
  { slug: "insurance-protection", label: "Insurance & protection", title: "Protection begins with the question.", description: "Health, life and employer cover explained without fear-based jargon." },
  { slug: "tax-records", label: "Tax & records", title: "The paperwork is part of the picture.", description: "Tax, documents and money records organised around useful next actions." },
  { slug: "long-term", label: "Long-term & FIRE", title: "Make distant plans feel present.", description: "Retirement, independence, gold and long-range financial questions made concrete and human." },
] as const;

export const topicAliases: Record<string, string> = {
  "taxes-records": "tax-records",
  "tax-records": "tax-records",
  "wealth-independence": "long-term",
  "long-term": "long-term",
};

export const getLearnTopic = (slug: string) => {
  const targetSlug = topicAliases[slug] || slug;
  return learnTopics.find(topic => topic.slug === targetSlug);
};
