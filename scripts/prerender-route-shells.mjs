/* Create static metadata route shells for the public SPA paths. App content hydrates client-side; each route sends the correct SEO identity first. */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const origin = "https://www.kuberos.in";
const image = `${origin}/manus-storage/kubear-money-orbit-master_fa60fb1b.png`;
const articleImage = `${origin}/manus-storage/kubear-goa-goal-still-life_2bd357a8.png`;
const routes = {
  "/": ["Kubear | A clearer view of your money week", "Kubear helps you see salary, UPI, rent, bills, goals and home money in one calm view."],
  "/how-it-works": ["How Kubear Works & Your Money View | One Unified Picture", "See how Kubear unifies your complete money story: fast natural chat, bill photo capture, upfront salary allocation, two-table flatmate splits, and goal runway."],
  "/privacy": ["Kubear Privacy Policy | Kubear", "Official Kubear Privacy Policy. Version 2026-08-31. Operated by Kuberos Innovations Pvt Ltd."],
  "/privacy-data": ["Kubear Privacy Policy | Kubear", "Official Kubear Privacy Policy. Version 2026-08-31. Operated by Kuberos Innovations Pvt Ltd."],
  "/journal": ["Kubear Journal | Everyday money notes", "A practical internal reading path for salary, UPI, bills, goals and home money."],
  "/learn/tools": ["Kubear Learn tools | Simple money answers", "Try simple planning tools for salary-day SIPs, home-plan EMIs and a Goa savings goal."],
  "/learn/tools/sip-calculator": ["SIP Calculator India | Kubear Learn", "Estimate the value of a monthly SIP using your contribution, expected return and time frame."],
  "/learn/tools/emi-calculator": ["EMI Calculator India | Kubear Learn", "Estimate a monthly EMI, overall repayment and illustrative interest from your loan details."],
  "/learn/tools/goa-goal-calculator": ["Goa Goal Calculator | Kubear Learn", "Plan a Goa goal with a target amount, money already saved and a time frame."],
  "/learn": ["Kubear Learn | Money talk, no jargon", "Short, simple notes about salary day, UPI spending, rent, bills, home money and goals."],
  "/learn/start-here": ["Start here with your money view | Kubear Learn", "Simple ways to bring salary, bills, spending and goals into one more useful money view."],
  "/learn/salary-planning": ["Salary planning basics | Kubear Learn", "A practical way to give salary, bills, a buffer and plans clear places in the month."],
  "/learn/upi-and-spending": ["UPI spending check-in | Kubear Learn", "A calm weekly way to make small UPI spends easier to notice without guilt."],
  "/learn/home-money": ["Home money, clearly together | Kubear Learn", "How selected household costs can stay visible while personal money stays personal."],
  "/learn/goals-and-saving": ["Goals and saving | Kubear Learn", "Keep a Goa plan or another goal visible beside rent, bills and the rest of the month."],
  "/learn/tax-and-long-term": ["Long-term money basics | Kubear Learn", "Plain-language introductions to familiar long-term savings terms for Indian adults."],
  "/learn/salary-day-is-not-spending-day": ["Salary day is not a spending day | Kubear Learn", "Four simple jobs for a salary before the month becomes busy."],
  "/learn/upi-weekly-check-in": ["UPI all week? A Friday check-in can help | Kubear Learn", "A simple weekly check-in for everyday UPI payments."],
  "/learn/rent-bills-cards-what-to-see-first": ["Rent, bills, cards: what to see first? | Kubear Learn", "A calm way to bring important payment dates into one visible picture."],
  "/learn/goa-fund-without-guilt": ["Goa ka plan: keep it visible | Kubear Learn", "A simple way to keep a travel goal beside the bills without guilt."],
  "/learn/home-money-without-mix-up": ["Home money without the mix-up | Kubear Learn", "Keep selected shared costs together while personal money remains personal."],
  "/learn/epf-ppf-nps-basics": ["EPF, PPF and NPS basics | Kubear Learn", "A general, plain-English introduction to three familiar long-term money terms."],
};

const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const contentTag = (selector, attribute, name, content) => `<meta ${attribute}="${name}" content="${escape(content)}" />`;
const replaceOrAppend = (html, matcher, tag) => matcher.test(html) ? html.replace(matcher, tag) : html.replace("</head>", `${tag}\n</head>`);

const root = resolve("dist/public");
const template = await readFile(resolve(root, "index.html"), "utf8");
for (const [route, [title, description]] of Object.entries(routes)) {
  const canonical = `${origin}${route}`;
  const routeImage = route.includes("goa") ? articleImage : image;
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  html = replaceOrAppend(html, /<meta\s+name="description"[^>]*>/i, contentTag("", "name", "description", description));
  html = replaceOrAppend(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  html = replaceOrAppend(html, /<meta\s+property="og:title"[^>]*>/i, contentTag("", "property", "og:title", title));
  html = replaceOrAppend(html, /<meta\s+property="og:description"[^>]*>/i, contentTag("", "property", "og:description", description));
  html = replaceOrAppend(html, /<meta\s+property="og:url"[^>]*>/i, contentTag("", "property", "og:url", canonical));
  html = replaceOrAppend(html, /<meta\s+property="og:image"[^>]*>/i, contentTag("", "property", "og:image", routeImage));
  html = replaceOrAppend(html, /<meta\s+name="twitter:title"[^>]*>/i, contentTag("", "name", "twitter:title", title));
  html = replaceOrAppend(html, /<meta\s+name="twitter:description"[^>]*>/i, contentTag("", "name", "twitter:description", description));
  html = replaceOrAppend(html, /<meta\s+name="twitter:image"[^>]*>/i, contentTag("", "name", "twitter:image", routeImage));
  const output = route === "/" ? resolve(root, "index.html") : resolve(root, route.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
}
const legacyRedirects = { "/tools": "/learn/tools", "/tools/sip-calculator": "/learn/tools/sip-calculator", "/tools/emi-calculator": "/learn/tools/emi-calculator", "/tools/goa-goal-calculator": "/learn/tools/goa-goal-calculator" };
for (const [route, destination] of Object.entries(legacyRedirects)) {
  const canonical = `${origin}${destination}`;
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>Opening Kubear Learn tools</title>`);
  html = replaceOrAppend(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace("</head>", `<meta http-equiv="refresh" content="0;url=${destination}" />\n</head>`);
  const output = resolve(root, route.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
}
console.log(`Generated ${Object.keys(routes).length} static metadata route shells.`);
