/* One-time importer: moves the approved 50-post working document into Kubear’s private Learn editorial database. */
import "dotenv/config";
import { readFile } from "node:fs/promises";
import { createConnection } from "mysql2/promise";

const sourceFile = "/home/ubuntu/kubear_master_blog_calendar_and_articles.md";
const master = await readFile(sourceFile, "utf8");
const connection = await createConnection(process.env.DATABASE_URL);

const topicMap = {
  Organisation: ["start-here", "Start here", "library"],
  Investing: ["investing", "Investing", "salary"],
  Spending: ["salary-spending", "Salary & spending", "upi"],
  Insurance: ["insurance-protection", "Insurance & protection", "library"],
  Debt: ["debt-credit", "Debt & credit", "rent"],
  Goals: ["goals-decisions", "Goals & decisions", "goa"],
  "Tax/Admin": ["tax-records", "Tax & records", "library"],
  Saving: ["saving-buffers", "Saving & buffers", "goa"],
  Household: ["home-household", "Home & household", "home"],
  Retirement: ["long-term", "Long-term", "library"],
};

const regulatorySources = {
  Investing: ["SEBI investor education", "https://www.sebi.gov.in/"],
  Insurance: ["Insurance Regulatory and Development Authority of India", "https://irdai.gov.in/"],
  Debt: ["Reserve Bank of India", "https://www.rbi.org.in/"],
  "Tax/Admin": ["Income Tax Department", "https://www.incometax.gov.in/"],
  Retirement: ["Pension Fund Regulatory and Development Authority", "https://www.pfrda.org.in/"],
};

const topics = [
  ["start-here", "Start here", "Start with the month you have.", "A simpler way to see what comes in, what is due and what you want to keep moving.", "copper", 1],
  ["salary-spending", "Salary & spending", "Give your month a few clear jobs.", "Salary, UPI and everyday spending made more visible without guilt.", "saffron", 2],
  ["saving-buffers", "Saving & buffers", "Keep a little room for life.", "Emergency money, savings habits and the space between income and surprise.", "mint", 3],
  ["debt-credit", "Debt & credit", "Borrowing deserves the full picture.", "EMIs, cards and trade-offs explained in plain, practical language.", "ink", 4],
  ["investing", "Investing", "Invest with the goal in view.", "Long-term investing basics connected to real Indian life decisions.", "saffron", 5],
  ["goals-decisions", "Goals & decisions", "Make the plan visible.", "Home, travel, family and career decisions with the trade-offs made clearer.", "copper", 6],
  ["home-household", "Home & household", "Share the right things, clearly.", "Household money conversations that keep boundaries and responsibilities understandable.", "ink", 7],
  ["insurance-protection", "Insurance & protection", "Protection begins with the question.", "Health, life and employer cover explained without fear-based jargon.", "mint", 8],
  ["tax-records", "Tax & records", "The paperwork is part of the picture.", "Tax, documents and money records organised around useful next actions.", "saffron", 9],
  ["long-term", "Long-term", "Make distant plans feel present.", "Retirement and long-range financial questions made concrete and human.", "copper", 10],
];

const clean = value => value.replace(/^\*\*|\*\*$/g, "").replace(/\s+/g, " ").trim();
const slugify = value => value.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const section = (chunk, heading) => {
  const marker = `### ${heading}`;
  const start = chunk.indexOf(marker);
  if (start < 0) return "";
  const after = chunk.slice(start + marker.length);
  const next = after.search(/\n### |\n## |\n---/);
  return clean(next < 0 ? after : after.slice(0, next));
};
const firstText = value => clean(value.split("\n").find(line => line.trim() && !line.trim().startsWith("-")) || value);
const listFrom = value => value.split("\n").map(line => line.replace(/^\s*(?:\d+\.|-)\s*/, "").trim()).filter(Boolean).map(clean);
const readMeta = (chunk, label) => clean((chunk.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n]+)`)) || ["", ""])[1]);
const dateToUtc = date => new Date(`${date}T03:30:00.000Z`);

const chunks = master.split(/\n# Post /).slice(1).map(chunk => `Post ${chunk}`);
const articles = chunks.map(chunk => {
  const heading = chunk.match(/^Post (\d+) — (\d{4}-\d{2}-\d{2}) — (.+)$/m);
  if (!heading) throw new Error("Could not parse a calendar post heading.");
  const [, orderText, dateText, title] = heading;
  const category = readMeta(chunk, "Category");
  const [topic, , heroType] = topicMap[category] || topicMap.Organisation;
  const directAnswer = firstText(section(chunk, "Direct answer near the top"));
  const openingHook = firstText(section(chunk, "Opening hook"));
  const indianScenario = firstText(section(chunk, "Indian scenario"));
  const articleMarker = "## Full article draft";
  const bodyStart = chunk.indexOf(articleMarker);
  const bodyMarkdown = clean(bodyStart >= 0 ? chunk.slice(bodyStart + articleMarker.length).split("\n---")[0] : "");
  const wordCount = bodyMarkdown.split(/\s+/).filter(Boolean).length;
  const targetLength = readMeta(chunk, "Target length");
  const targetWordCount = Number((targetLength.match(/[\d,]+/) || ["1200"])[0].replace(/,/g, ""));
  return {
    calendarOrder: Number(orderText), slug: slugify(title), title: clean(title), dek: directAnswer || `A practical Kubear Learn note about ${title.toLowerCase()}.`,
    topic, category, funnelStage: readMeta(chunk, "Funnel stage") || "Problem-aware", status: "draft", scheduledAt: dateToUtc(dateText),
    authorName: "Kubear Editorial Team", readTime: `${Math.max(3, Math.min(12, Math.ceil(wordCount / 220)))} min read`, targetWordCount,
    openingHook: openingHook || "A familiar money moment, made clearer.", directAnswer: directAnswer || "Start with the information needed for the next decision.",
    takeaway: firstText(section(chunk, "Key points to land")) || "A clearer money view can make the next decision less surprising.", indianScenario: indianScenario || "An Indian household making an ordinary money decision.",
    outline: listFrom(section(chunk, "Detailed article structure")), keyPoints: listFrom(section(chunk, "Key points to land")), bodyMarkdown,
    ctaLabel: "See the whole picture", ctaHref: "/how-it-works", toolLabel: null, toolHref: null,
    heroType, lifeMarker: category, accent: "copper", seoTitle: `${clean(title)} | Kubear Learn`, metaDescription: (directAnswer || `A practical Kubear Learn note about ${title.toLowerCase()}.`).slice(0, 300),
    canonicalPath: `/learn/${slugify(title)}`, sourceRoute: section(chunk, "Source route and fact-checking") || "Use current official Indian sources where the subject requires them.",
  };
});

for (const [slug, label, title, description, accent, sortOrder] of topics) {
  await connection.execute(
    `INSERT INTO learn_topics (slug,label,title,description,accent,sortOrder) VALUES (?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE label=VALUES(label),title=VALUES(title),description=VALUES(description),accent=VALUES(accent),sortOrder=VALUES(sortOrder)`,
    [slug, label, title, description, accent, sortOrder],
  );
}

for (const article of articles) {
  const prior = articles[article.calendarOrder - 2]?.slug;
  const next = articles[article.calendarOrder]?.slug;
  const related = [prior, next].filter(Boolean);
  await connection.execute(
    `INSERT INTO learn_articles (calendarOrder,slug,title,dek,topic,category,funnelStage,learn_article_status,scheduledAt,authorName,readTime,targetWordCount,openingHook,directAnswer,takeaway,indianScenario,outlineJson,keyPointsJson,bodyMarkdown,ctaLabel,ctaHref,toolLabel,toolHref,relatedSlugsJson,heroType,lifeMarker,accent,seoTitle,metaDescription,canonicalPath,sourceRoute,productClaimReview)
     VALUES (?,?,?,?,?,?,?,'draft',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,false)
     ON DUPLICATE KEY UPDATE title=VALUES(title),dek=VALUES(dek),topic=VALUES(topic),category=VALUES(category),funnelStage=VALUES(funnelStage),scheduledAt=VALUES(scheduledAt),readTime=VALUES(readTime),targetWordCount=VALUES(targetWordCount),openingHook=VALUES(openingHook),directAnswer=VALUES(directAnswer),takeaway=VALUES(takeaway),indianScenario=VALUES(indianScenario),outlineJson=VALUES(outlineJson),keyPointsJson=VALUES(keyPointsJson),bodyMarkdown=VALUES(bodyMarkdown),ctaLabel=VALUES(ctaLabel),ctaHref=VALUES(ctaHref),toolLabel=VALUES(toolLabel),toolHref=VALUES(toolHref),relatedSlugsJson=VALUES(relatedSlugsJson),heroType=VALUES(heroType),lifeMarker=VALUES(lifeMarker),accent=VALUES(accent),seoTitle=VALUES(seoTitle),metaDescription=VALUES(metaDescription),canonicalPath=VALUES(canonicalPath),sourceRoute=VALUES(sourceRoute)`,
    [article.calendarOrder,article.slug,article.title,article.dek,article.topic,article.category,article.funnelStage,article.scheduledAt,article.authorName,article.readTime,article.targetWordCount,article.openingHook,article.directAnswer,article.takeaway,article.indianScenario,JSON.stringify(article.outline),JSON.stringify(article.keyPoints),article.bodyMarkdown,article.ctaLabel,article.ctaHref,article.toolLabel,article.toolHref,JSON.stringify(related),article.heroType,article.lifeMarker,article.accent,article.seoTitle,article.metaDescription,article.canonicalPath,article.sourceRoute],
  );
  const [[row]] = await connection.execute("SELECT id FROM learn_articles WHERE slug = ?", [article.slug]);
  await connection.execute("DELETE FROM learn_article_sources WHERE articleId = ?", [row.id]);
  const sources = [["Kubear product and privacy review", "https://www.kuberos.in/"], regulatorySources[article.category] || ["Official source review required", "https://www.rbi.org.in/"]];
  for (const [sourceTitle, sourceUrl] of sources) await connection.execute("INSERT INTO learn_article_sources (articleId,sourceType,sourceTitle,sourceUrl,accessedAt) VALUES (?, 'review_route', ?, ?, NOW())", [row.id,sourceTitle,sourceUrl]);
}

await connection.execute(
  `INSERT INTO learn_publication_schedules (scheduleKey,timezone,cronExpression,isEnabled) VALUES ('kubear-learn-tuesday','Asia/Kolkata','0 30 3 * * 2',false)
   ON DUPLICATE KEY UPDATE timezone=VALUES(timezone),cronExpression=VALUES(cronExpression)`
);
console.log(`Imported ${articles.length} Kubear Learn articles as private drafts.`);
await connection.end();
