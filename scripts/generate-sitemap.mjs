/* Generate the public Kubear sitemap from the approved marketing, Learn and calculator route inventory. */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const origin = "https://www.kuberos.in";
const routes = [
  "/", "/how-it-works", "/your-money-picture", "/privacy-data", "/journal", "/learn", "/learn/tools",
  "/learn/tools/sip-calculator", "/learn/tools/emi-calculator", "/learn/tools/goa-goal-calculator",
  "/learn/start-here", "/learn/salary-planning", "/learn/upi-and-spending", "/learn/home-money", "/learn/goals-and-saving", "/learn/tax-and-long-term",
  "/learn/salary-day-is-not-spending-day", "/learn/upi-weekly-check-in", "/learn/rent-bills-cards-what-to-see-first", "/learn/goa-fund-without-guilt", "/learn/home-money-without-mix-up", "/learn/epf-ppf-nps-basics",
];
const lastmod = new Date().toISOString().slice(0, 10);
const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${escapeXml(`${origin}${route}`)}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.startsWith("/learn/") ? "monthly" : "weekly"}</changefreq></url>`).join("\n")}\n</urlset>\n`;
const output = resolve("client/public/sitemap.xml");
await mkdir(dirname(output), { recursive: true });
await writeFile(output, xml, "utf8");
console.log(`Generated ${routes.length} sitemap URLs at ${output}`);
