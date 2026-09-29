/* Dynamic sitemap generator for kuberos.in: pulls all core routes, tools, topics, and 50 published articles. */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { full50Articles } from "../shared/articlesData";
import { learnTopics } from "../client/src/lib/learnTopics";
import { tools } from "../client/src/lib/contentRegistry";

const origin = "https://www.kuberos.in";
const today = new Date().toISOString().slice(0, 10);

interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
}

const entries: SitemapEntry[] = [
  // Core pages
  { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { path: "/product", lastmod: today, changefreq: "weekly", priority: "0.95" },
  { path: "/about", lastmod: today, changefreq: "monthly", priority: "0.9" },
  { path: "/learn", lastmod: today, changefreq: "daily", priority: "0.9" },
  { path: "/learn/tools", lastmod: today, changefreq: "weekly", priority: "0.9" },
  { path: "/journal", lastmod: today, changefreq: "weekly", priority: "0.7" },
  
  // Legal & Trust
  { path: "/privacy", lastmod: "2026-08-31", changefreq: "monthly", priority: "0.5" },
  { path: "/terms", lastmod: "2026-09-08", changefreq: "monthly", priority: "0.5" },
  { path: "/consent", lastmod: "2026-09-08", changefreq: "monthly", priority: "0.5" },
  { path: "/data-deletion", lastmod: "2026-09-08", changefreq: "monthly", priority: "0.5" },
  { path: "/support", lastmod: "2026-09-08", changefreq: "monthly", priority: "0.6" },
  { path: "/cookies", lastmod: "2026-09-08", changefreq: "monthly", priority: "0.4" },
];

// Tools & Calculators
for (const tool of tools) {
  entries.push({
    path: `/learn/tools/${tool.slug}`,
    lastmod: today,
    changefreq: "weekly",
    priority: "0.85",
  });
}

// Learning Category Topics
for (const topic of learnTopics) {
  entries.push({
    path: `/learn/${topic.slug}`,
    lastmod: today,
    changefreq: "weekly",
    priority: "0.8",
  });
}

// All 50 In-Depth Articles
for (const article of full50Articles) {
  const articleDate = article.updatedAt 
    ? article.updatedAt.slice(0, 10) 
    : article.publishedAt 
    ? article.publishedAt.slice(0, 10) 
    : today;

  entries.push({
    path: `/learn/${article.slug}`,
    lastmod: articleDate,
    changefreq: "monthly",
    priority: "0.75",
  });
}

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries
  .map(
    (e) => `  <url>
    <loc>${escapeXml(`${origin}${e.path}`)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

// Write to client/public/sitemap.xml (so Vite copies it to dist)
const clientOutput = resolve("client/public/sitemap.xml");
await mkdir(dirname(clientOutput), { recursive: true });
await writeFile(clientOutput, xml, "utf8");

// Also write directly to dist/public/sitemap.xml if dist exists
try {
  const distOutput = resolve("dist/public/sitemap.xml");
  await mkdir(dirname(distOutput), { recursive: true });
  await writeFile(distOutput, xml, "utf8");
} catch {
  // dist may not exist before build, which is fine
}

console.log(`Generated ${entries.length} sitemap URLs at ${clientOutput}`);
