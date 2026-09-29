/* Comprehensive Static Site Generation (SSG) Engine for 100% Crawlability, AI Visibility & Google Startups Approval.
   Injects complete semantic HTML, direct-answer key takeaways, internal linking graph, and Schema.org structured data. */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { full50Articles, staticParsedArticles } from "../shared/articlesData";
import { learnTopics } from "../client/src/lib/learnTopics";
import { tools } from "../client/src/lib/contentRegistry";

const origin = "https://www.kuberos.in";
const defaultImage = `${origin}/manus-storage/kubear-money-orbit-master_fa60fb1b.png`;
const goaImage = `${origin}/manus-storage/kubear-goa-goal-still-life_2bd357a8.png`;

const escapeHtml = (str: string) =>
  str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function markdownToHtml(md: string): string {
  if (!md) return "";
  const lines = md.split("\n");
  const htmlLines: string[] = [];
  let inList = false;

  for (let rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      if (inList) {
        htmlLines.push("</ul>");
        inList = false;
      }
      continue;
    }

    // Process inline markdown
    let formatted = line
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    if (line.startsWith("### ")) {
      if (inList) {
        htmlLines.push("</ul>");
        inList = false;
      }
      htmlLines.push(`<h3>${formatted.slice(4)}</h3>`);
    } else if (line.startsWith("## ")) {
      if (inList) {
        htmlLines.push("</ul>");
        inList = false;
      }
      htmlLines.push(`<h2>${formatted.slice(3)}</h2>`);
    } else if (line.startsWith("# ")) {
      if (inList) {
        htmlLines.push("</ul>");
        inList = false;
      }
      htmlLines.push(`<h1>${formatted.slice(2)}</h1>`);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList) {
        htmlLines.push("<ul>");
        inList = true;
      }
      htmlLines.push(`<li>${formatted.slice(2)}</li>`);
    } else if (line.startsWith("> ")) {
      if (inList) {
        htmlLines.push("</ul>");
        inList = false;
      }
      htmlLines.push(`<blockquote>${formatted.slice(2)}</blockquote>`);
    } else {
      if (inList) {
        htmlLines.push("</ul>");
        inList = false;
      }
      htmlLines.push(`<p>${formatted}</p>`);
    }
  }

  if (inList) {
    htmlLines.push("</ul>");
  }

  return htmlLines.join("\n");
}

interface RouteShellData {
  route: string;
  title: string;
  description: string;
  image?: string;
  schemaJson?: object;
  semanticHtml: string;
}

const routeShells: RouteShellData[] = [];

// 1. HOMEPAGE
routeShells.push({
  route: "/",
  title: "Kubear | A clearer view of your money week",
  description: "Kubear helps you see salary, UPI, rent, bills, goals and home money in one calm view. Developed by Kuberos Innovations Pvt. Ltd.",
  semanticHtml: `
    <main>
      <h1>Kubear: A Clearer View of Your Complete Financial Life</h1>
      <p><strong>Kubear</strong> is engineered by <strong>Kuberos Innovations Private Limited</strong> (Surat, Gujarat, India) to give Indian working professionals and households a unified, calm money ledger.</p>
      <section>
        <h2>Key Capabilities</h2>
        <ul>
          <li><strong>Day-1 Salary Allocation:</strong> Earmarks rent, parents' support, utility bills, and committed SIPs upfront before discretionary spending begins.</li>
          <li><strong>Safe Daily Spends:</strong> Tells you exactly what you can safely spend today without starving your month-end accounts.</li>
          <li><strong>Household & Flatmate Splits:</strong> Clear two-table shared splits for rent, cook, maid, and groceries with privacy between personal accounts.</li>
          <li><strong>Goal Compounding & Runways:</strong> Realistic inflation-adjusted calculators for emergency funds, Goa trips, weddings, and home loan payoffs.</li>
        </ul>
      </section>
      <section>
        <h2>Privacy by Design</h2>
        <p>Kubear operates with strict read-only privacy: zero SMS scraping, zero bank password storage, zero advertising or lending commissions, and full compliance with India's DPDP Act.</p>
      </section>
      <nav aria-label="Quick Links">
        <h3>Explore Kubear</h3>
        <ul>
          <li><a href="/product">Kubear Product Overview</a></li>
          <li><a href="/about">About Kuberos Innovations (Company & Technology)</a></li>
          <li><a href="/learn">Kubear Learn Knowledge Hub</a></li>
          <li><a href="/learn/tools">Interactive Financial Planning Tools</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
        </ul>
      </nav>
    </main>
  `,
});

// 2. PRODUCT PAGE (Full Feature Showcase, Screens, Web & Android links)
routeShells.push({
  route: "/product",
  title: "Kubear Product | Clear, Connected Personal Finance",
  description: "See what Kubear does: connect your income, bills, EMIs, savings, investments and life goals in one simple picture so you always know where you stand.",
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Kubear Product Overview",
    "description": "Connected personal finance platform bringing together cashflow, wealth, emergency protection, goals, and household spending into one clear view.",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Kubear",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Android, Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kuberos Innovations Private Limited",
        "url": "https://www.kuberos.in"
      }
    }
  },
  semanticHtml: `
    <main itemscope itemtype="https://schema.org/ItemPage">
      <h1>Kubear: Your Financial Life, All in One Place</h1>
      <p class="lead">Most money apps only look backward at what you already spent. Kubear brings together your income, upcoming bills, EMIs, savings, investments, and life goals — so you always know where you stand today and what you can afford next.</p>
      
      <section>
        <h2>01 · 10-Second Daily Check</h2>
        <p>Start with what matters today. In just 10 seconds, see your available cash, your safe daily spending pace, and upcoming bills due in the next 5 days. Synchronizes with your actual payday, not arbitrary calendar months.</p>
      </section>

      <section>
        <h2>02 · Connected Financial View</h2>
        <p>See everything connected, not in silos. A calm living ledger that links your bank balances, active investments, and upcoming dues without switching apps. Instantly check your household emergency runway.</p>
      </section>

      <section>
        <h2>03 · Speech & Natural Language Input</h2>
        <p>Just speak or type. No spreadsheets, no uploading bank statements, and no sorting through 50 confusing expense categories. Tap the mic and say what you spent — review it on screen and confirm.</p>
      </section>

      <section>
        <h2>The 5 Connected Areas</h2>
        <ul>
          <li><strong>Cash Flow:</strong> What you earn, what you spend, and upcoming bills.</li>
          <li><strong>Wealth:</strong> Savings, mutual funds, and investments in one place.</li>
          <li><strong>Protection:</strong> Emergency funds and insurances to keep you secure.</li>
          <li><strong>Goals:</strong> See how today's spending affects the big things you're saving for.</li>
          <li><strong>Family & Home:</strong> Manage shared household expenses without confusing personal money.</li>
        </ul>
      </section>

      <section>
        <h2>Available Platforms</h2>
        <p>Kubear is live and available now on the Web and on Android via Google Play:</p>
        <ul>
          <li><a href="https://kubear.kuberos.in">Launch Kubear Web App</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=in.kuberos.kubear">Get Kubear on Google Play</a></li>
        </ul>
      </section>

      <nav aria-label="Breadcrumb">
        <a href="/">← Back to Home</a> · <a href="/about">About Kuberos Innovations</a> · <a href="/learn">Financial Knowledge Hub</a>
      </nav>
    </main>
  `,
});

// 2. ABOUT US (Company, Google for Startups, Architecture & Trust)
routeShells.push({
  route: "/about",
  title: "About Us | Kuberos Innovations & Kubear",
  description: "Kuberos Innovations Private Limited is the technology company behind Kubear, building intelligent personal finance and household cashflow infrastructure for India.",
  schemaJson: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Kuberos Innovations Private Limited",
      "alternateName": "Kuberos",
      "url": "https://www.kuberos.in",
      "logo": defaultImage,
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      },
      "founder": {
        "@type": "Person",
        "name": "Sidharth Bothra",
        "jobTitle": "Founder & Director"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "hello@kuberos.in",
          "contactType": "customer support"
        },
        {
          "@type": "ContactPoint",
          "email": "support@kuberos.in",
          "contactType": "technical support"
        }
      ]
    }
  },
  semanticHtml: `
    <main itemscope itemtype="https://schema.org/AboutPage">
      <h1>About Kuberos Innovations Private Limited & Kubear</h1>
      <p class="lead"><strong>Kuberos Innovations Private Limited</strong> is an Indian software technology startup headquartered in Surat, Gujarat. We build intelligent personal finance infrastructure, deterministic calculation models, and calm consumer applications for India.</p>

      <section>
        <h2>The Flagship Product: Kubear</h2>
        <p>Kubear is the consumer-facing personal finance platform and visual money ledger operated by Kuberos Innovations. Designed specifically for Indian salaried employees, couples, and multi-flatmate households, Kubear transforms confusing bank statements and fragmented UPI trails into a single, predictable financial picture.</p>
        <ul>
          <li>Day-1 Upfront Salary Allocation</li>
          <li>Safe Daily Spending Limits (Guilt-Free Burn)</li>
          <li>Non-invasive, Read-Only Privacy Architecture</li>
          <li>Inflation-Adjusted Wealth and Goal Simulators</li>
        </ul>
      </section>

      <section>
        <h2>Technology & Cloud Architecture</h2>
        <p>Kuberos Innovations builds on high-performance cloud infrastructure designed for reliability, cryptographic data security, and scalability under high concurrency:</p>
        <ul>
          <li><strong>Cloud Run & Containerized Microservices:</strong> High-availability deployment utilizing cloud container runtimes for auto-scaling and sub-second latency.</li>
          <li><strong>Financial Math Engines:</strong> Precision deterministic algorithms for Union Budget 2024-26 New vs Old tax comparisons, SIP compounding, and loan amortization.</li>
          <li><strong>Data Security & DPDP Compliance:</strong> Strict adherence to India's Digital Personal Data Protection Act. Full TLS 1.3 transit encryption, AES-256 rest encryption, and zero SMS scraping.</li>
        </ul>
      </section>

      <section>
        <h2>Leadership & Corporate Directory</h2>
        <p><strong>Founder & Director:</strong> Sidharth Bothra</p>
        <p><strong>Registered Office:</strong> Surat, Gujarat, India</p>
        <p><strong>Official Corporate Domain:</strong> <a href="https://www.kuberos.in">https://www.kuberos.in</a></p>
        <p><strong>Contact Emails:</strong> hello@kuberos.in (Corporate) | support@kuberos.in (Support) | grievance@kuberos.in (DPDP Grievance Officer)</p>
      </section>
    </main>
  `,
});
// Alias /company
routeShells.push({
  ...routeShells[routeShells.length - 1],
  route: "/company",
});

// 3. TRUST & LEGAL PAGES
const legalPages = [
  {
    route: "/privacy",
    title: "Kubear Privacy Policy | Kuberos Innovations",
    description: "Official Kubear Privacy Policy. Version 2026-08-31. Operated by Kuberos Innovations Pvt. Ltd., Surat, Gujarat.",
    heading: "Kubear Privacy Policy",
    summary: "Kuberos Innovations Private Limited operates Kubear with read-only privacy, zero SMS scraping, and strict DPDP Act compliance. Your personal data is never sold to third-party lenders or advertisers.",
  },
  {
    route: "/privacy-data",
    title: "Privacy & Data Control | Kuberos Innovations",
    description: "Learn how your data is protected, stored, and deleted under Kuberos Innovations' data control framework.",
    heading: "Privacy and Data Control",
    summary: "Complete transparency into Kuberos Innovations' encryption protocols (TLS 1.3, AES-256), stateless APIs, and zero-trust personal financial modeling.",
  },
  {
    route: "/terms",
    title: "Terms of Use | Kuberos Innovations",
    description: "Official Kubear Terms of Use. Version 2026-09-08. Operated by Kuberos Innovations Pvt. Ltd.",
    heading: "Terms of Use",
    summary: "Terms and conditions governing the use of the Kubear website, web app, and mobile application provided by Kuberos Innovations Private Limited.",
  },
  {
    route: "/consent",
    title: "Consent Notice | Kuberos Innovations",
    description: "Notice regarding user consent, data collection boundaries, and self-serve revocation rights.",
    heading: "Consent Notice",
    summary: "Clear notice on how consent is recorded, managed, and revoked for analytical calculations on Kubear.",
  },
  {
    route: "/data-deletion",
    title: "Account and Data Deletion | Kubear & Kuberos",
    description: "Instructions and self-serve tools to purge your account and financial data from Kuberos Innovations' servers.",
    heading: "Account and Data Deletion",
    summary: "You retain 100% ownership of your financial records. Request instant self-serve account deletion or contact support@kuberos.in for a complete database purge.",
  },
  {
    route: "/support",
    title: "Support & Grievances | Kuberos Innovations",
    description: "Customer care, technical support, and statutory Grievance Officer directory for Kuberos Innovations Pvt. Ltd.",
    heading: "Support and Grievance Directory",
    summary: "Reach our support team at support@kuberos.in or contact the statutory Grievance Officer at grievance@kuberos.in.",
  },
  {
    route: "/cookies",
    title: "Cookie & Storage Notice | Kuberos Innovations",
    description: "Information about local storage, session cookies, and analytics tokens on kuberos.in.",
    heading: "Cookie and Browser Storage Notice",
    summary: "Details of essential session cookies and local storage tokens used by Kubear for client-side state persistence.",
  },
  {
    route: "/journal",
    title: "Kubear Journal | Everyday Indian Money Notes",
    description: "A practical internal reading path for salary, UPI, bills, goals, and home money.",
    heading: "The Kubear Money Journal",
    summary: "Reflective essays, frameworks, and real-world Indian household case studies on money clarity.",
  },
  {
    route: "/how-it-works",
    title: "How Kubear Works | Visual Financial Ledger",
    description: "See how Kubear unifies salary, bills, UPI spending, and long-term goals into one calm view.",
    heading: "How Kubear Works",
    summary: "An overview of Kubear's core mechanics: Day-1 salary allocation, safe daily spending recalculation, and collaborative flatmate cost splits.",
  },
];

for (const lp of legalPages) {
  routeShells.push({
    route: lp.route,
    title: lp.title,
    description: lp.description,
    semanticHtml: `
      <main>
        <h1>${escapeHtml(lp.heading)}</h1>
        <p><strong>Operated by Kuberos Innovations Private Limited (Surat, Gujarat, India).</strong></p>
        <p>${escapeHtml(lp.summary)}</p>
        <p>For inquiries or grievance redressal, contact <a href="mailto:hello@kuberos.in">hello@kuberos.in</a> or <a href="mailto:support@kuberos.in">support@kuberos.in</a>.</p>
        <nav><a href="/">Back to Home</a> · <a href="/about">About Kuberos</a> · <a href="/learn">Learn & Tools</a></nav>
      </main>
    `,
  });
}

// 4. LEARN HUB & TOOLS DIRECTORY
routeShells.push({
  route: "/learn",
  title: "Kubear Learn | Financial Literacy & Tools for India",
  description: "50 comprehensive guides and 10 interactive calculators covering Indian salaries, UPI spending, tax regimes, SIP compounding, and household finances.",
  semanticHtml: `
    <main>
      <h1>Kubear Learn: Money Talk, No Jargon</h1>
      <p class="lead">A complete, unbiased financial publication developed by Kuberos Innovations Pvt. Ltd. Covering all aspects of Indian personal money management.</p>
      
      <section>
        <h2>Interactive Financial Tools & Calculators</h2>
        <ul>
          ${tools.map((t) => `<li><a href="/learn/tools/${t.slug}"><strong>${escapeHtml(t.title)}</strong></a>: ${escapeHtml(t.description)}</li>`).join("\n")}
        </ul>
      </section>

      <section>
        <h2>Curated Learning Paths</h2>
        <ul>
          ${learnTopics.map((tp) => `<li><a href="/learn/${tp.slug}"><strong>${escapeHtml(tp.title)}</strong></a> — ${escapeHtml(tp.description)}</li>`).join("\n")}
        </ul>
      </section>

      <section>
        <h2>Featured Articles & Guides</h2>
        <ul>
          ${full50Articles.slice(0, 15).map((a) => `<li><a href="/learn/${a.slug}"><strong>${escapeHtml(a.title)}</strong></a> (${a.readTime}) — ${escapeHtml(a.dek)}</li>`).join("\n")}
        </ul>
      </section>
    </main>
  `,
});

routeShells.push({
  route: "/learn/tools",
  title: "Kubear Financial Calculators & Planning Tools",
  description: "Free, deterministic financial calculators for Indian salaried employees: Day-1 salary allocation, New vs Old Tax Regime, SIP compounding, flatmate splits, and loan EMI.",
  semanticHtml: `
    <main>
      <h1>Kubear Interactive Financial Tools & Calculators</h1>
      <p>Deterministic, instant financial calculators built by Kuberos Innovations with no ads, no paywalls, and no intrusive lead generation.</p>
      <ul>
        ${tools.map((t) => `
          <li>
            <h2><a href="/learn/tools/${t.slug}">${escapeHtml(t.title)}</a></h2>
            <p>${escapeHtml(t.description)}</p>
            <p><em>Inputs required:</em> ${escapeHtml(t.inputsRequired.join(", "))}</p>
          </li>
        `).join("\n")}
      </ul>
    </main>
  `,
});

// 5. ALL 10 TOOLS (Calculators)
for (const tool of tools) {
  const toolRoute = `/learn/tools/${tool.slug}`;
  routeShells.push({
    route: toolRoute,
    title: `${tool.title} | Kubear Learn Tools`,
    description: tool.description,
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": tool.title,
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "description": tool.description,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kuberos Innovations Private Limited",
        "url": "https://www.kuberos.in"
      }
    },
    semanticHtml: `
      <main itemscope itemtype="https://schema.org/WebApplication">
        <header>
          <p class="category">${escapeHtml(tool.categoryLabel)}</p>
          <h1 itemprop="name">${escapeHtml(tool.title)}</h1>
          <p class="description" itemprop="description">${escapeHtml(tool.description)}</p>
        </header>

        <section class="how-it-works">
          <h2>How to Use This Planning Tool</h2>
          <p>This calculator requires the following inputs to produce your deterministic result:</p>
          <ul>
            ${tool.inputsRequired.map((inp) => `<li>${escapeHtml(inp)}</li>`).join("\n")}
          </ul>
        </section>

        <section class="methodology">
          <h2>Financial Calculation Methodology</h2>
          <p>Built by Kuberos Innovations according to Indian financial regulations and standard mathematical amortization/compounding models. Operates entirely client-side for absolute data privacy.</p>
        </section>

        <section class="related-guide">
          <h2>Related Educational Guide</h2>
          <p>Learn more about the concepts behind this tool: <a href="/learn/${tool.learnSlug}">Read our comprehensive guide</a>.</p>
        </section>

        <nav><a href="/learn/tools">← All Financial Calculators</a> · <a href="/learn">Knowledge Hub</a></nav>
      </main>
    `,
  });
}

// 6. TOPIC CATEGORY HUBS (All 10 Topics)
for (const topic of learnTopics) {
  const topicArticles = full50Articles.filter((a) => a.topic === topic.slug || a.category?.toLowerCase() === topic.slug);
  routeShells.push({
    route: `/learn/${topic.slug}`,
    title: `${topic.title} | Kubear Learn`,
    description: topic.description,
    semanticHtml: `
      <main>
        <header>
          <p class="eyebrow">Category Hub</p>
          <h1>${escapeHtml(topic.title)}</h1>
          <p class="lead">${escapeHtml(topic.description)}</p>
        </header>

        <section class="articles-list">
          <h2>Articles & Guides in this Topic</h2>
          <ul>
            ${(topicArticles.length > 0 ? topicArticles : full50Articles.slice(0, 5))
              .map((a) => `
                <li>
                  <h3><a href="/learn/${a.slug}">${escapeHtml(a.title)}</a></h3>
                  <p>${escapeHtml(a.dek)}</p>
                  <p class="meta"><span>${escapeHtml(a.readTime)}</span> · <span>By Kuberos Editorial Desk</span></p>
                </li>
              `)
              .join("\n")}
          </ul>
        </section>

        <nav><a href="/learn">← Back to All Learn Topics</a> · <a href="/learn/tools">Interactive Calculators</a></nav>
      </main>
    `,
  });
}

// Also add legacy topic aliases
const topicAliases: Record<string, string> = {
  "/learn/salary-planning": "salary-spending",
  "/learn/upi-and-spending": "salary-spending",
  "/learn/goals-and-saving": "goals-decisions",
  "/learn/home-money": "home-household",
  "/learn/tax-and-long-term": "tax-records",
};
for (const [aliasRoute, targetSlug] of Object.entries(topicAliases)) {
  const target = learnTopics.find((t) => t.slug === targetSlug);
  if (target) {
    routeShells.push({
      route: aliasRoute,
      title: `${target.title} | Kubear Learn`,
      description: target.description,
      semanticHtml: `
        <main>
          <h1>${escapeHtml(target.title)}</h1>
          <p>${escapeHtml(target.description)}</p>
          <p><a href="/learn/${target.slug}">View full topic hub</a></p>
        </main>
      `,
    });
  }
}

// 7. ALL 50 IN-DEPTH ARTICLES (Full Content Injection for Crawlers & AI Bots)
for (const article of staticParsedArticles) {
  const route = `/learn/${article.slug}`;
  const canonical = `${origin}${route}`;
  const isGoa = article.slug.includes("goa") || article.slug.includes("travel");
  const articleImg = isGoa ? goaImage : defaultImage;
  const publishedIso = article.publishedAt || "2025-01-01T00:00:00.000Z";
  const updatedIso = article.updatedAt || publishedIso;
  const directAnswer = article.directAnswer || article.takeaway || article.openingHook || "";
  const bodyHtml = markdownToHtml(article.bodyMarkdown);

  // Schema.org BlogPosting
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical,
    },
    "headline": article.seoTitle || article.title,
    "description": article.metaDescription || article.dek,
    "image": articleImg,
    "datePublished": publishedIso,
    "dateModified": updatedIso,
    "author": {
      "@type": "Organization",
      "name": "Kuberos Innovations",
      "url": "https://www.kuberos.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kuberos Innovations Private Limited",
      "url": "https://www.kuberos.in",
      "logo": {
        "@type": "ImageObject",
        "url": defaultImage
      }
    },
    "articleBody": article.dek + " " + directAnswer
  };

  const semanticHtml = `
    <article itemscope itemtype="https://schema.org/BlogPosting">
      <header>
        <p class="breadcrumbs">
          <a href="/">Home</a> &gt; <a href="/learn">Learn</a> &gt; <a href="/learn/${article.topic}">${escapeHtml(article.topic)}</a>
        </p>
        <h1 itemprop="headline">${escapeHtml(article.title)}</h1>
        <p class="dek" itemprop="description">${escapeHtml(article.dek)}</p>
        <div class="article-meta">
          <span>${escapeHtml(article.readTime)}</span> · 
          <span>Published on <time itemprop="datePublished" datetime="${publishedIso}">${publishedIso.slice(0, 10)}</time></span> · 
          <span>By <span itemprop="author">Kuberos Innovations</span></span>
        </div>
      </header>

      <!-- AI-Optimized Direct Answer / Key Takeaway for Search Snippets & GEO/AEO -->
      <aside class="key-takeaway" style="background: #FFF7ED; border-left: 4px solid #EA580C; padding: 1.25rem; margin: 1.75rem 0; border-radius: 4px;" itemprop="abstract">
        <h3 style="margin-top:0; color:#C96632; font-size: 0.95rem; text-transform:uppercase; letter-spacing: 0.05em;">Key Takeaway (Direct Answer)</h3>
        <p style="margin-bottom:0; font-size: 1.05rem; line-height: 1.6; color: #123630;">
          <strong>${escapeHtml(directAnswer)}</strong>
        </p>
      </aside>

      <!-- Full Body Markdown Rendered to Semantic HTML for Crawlers -->
      <div class="article-body" itemprop="articleBody">
        ${bodyHtml}
      </div>

      <!-- Key Summary Points -->
      ${
        article.keyPoints && article.keyPoints.length > 0
          ? `
          <aside class="key-points-summary">
            <h3>Summary of Critical Takeaways</h3>
            <ul>
              ${article.keyPoints.map((kp) => `<li>${escapeHtml(kp)}</li>`).join("\n")}
            </ul>
          </aside>
        `
          : ""
      }

      <!-- Contextual Tool CTA -->
      ${
        article.toolHref
          ? `
          <div class="tool-callout" style="background: #F0FDF4; border: 1px solid #BBF7D0; padding: 1.25rem; border-radius: 8px; margin: 2rem 0;">
            <h4>Interactive Tool for this Topic</h4>
            <p><a href="${article.toolHref}"><strong>${escapeHtml(article.toolLabel || "Try the Interactive Planning Tool")}</strong></a></p>
          </div>
        `
          : ""
      }

      <!-- Internal Link Graph -->
      ${
        article.relatedSlugs && article.relatedSlugs.length > 0
          ? `
          <nav class="related-articles">
            <h3>Related Money Guides</h3>
            <ul>
              ${article.relatedSlugs
                .map((slug) => `<li><a href="/learn/${slug}">${escapeHtml(slug.replaceAll("-", " "))}</a></li>`)
                .join("\n")}
            </ul>
          </nav>
        `
          : ""
      }

      <footer>
        <p>Published by <strong>Kuberos Innovations Private Limited</strong> (Surat, Gujarat, India). Read-only personal finance software for India.</p>
        <p><a href="/learn">← Back to all Guides</a> · <a href="/about">About Kuberos</a> · <a href="https://kubear.kuberos.in">Open Kubear Web App</a></p>
      </footer>
    </article>
  `;

  routeShells.push({
    route,
    title: article.seoTitle || `${article.title} | Kubear Learn`,
    description: article.metaDescription || article.dek,
    image: articleImg,
    schemaJson: blogSchema,
    semanticHtml,
  });
}

// EXECUTE PRERENDERING TO dist/public
const root = resolve("dist/public");
const template = await readFile(resolve(root, "index.html"), "utf8");

const contentTag = (attribute: string, name: string, content: string) =>
  `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;

const replaceOrAppend = (html: string, matcher: RegExp, tag: string) =>
  matcher.test(html) ? html.replace(matcher, tag) : html.replace("</head>", `${tag}\n</head>`);

let count = 0;
for (const shell of routeShells) {
  const canonical = `${origin}${shell.route}`;
  const routeImage = shell.image || defaultImage;

  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(shell.title)}</title>`);
  html = replaceOrAppend(html, /<meta\s+name="description"[^>]*>/i, contentTag("name", "description", shell.description));
  html = replaceOrAppend(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  html = replaceOrAppend(html, /<meta\s+property="og:title"[^>]*>/i, contentTag("property", "og:title", shell.title));
  html = replaceOrAppend(html, /<meta\s+property="og:description"[^>]*>/i, contentTag("property", "og:description", shell.description));
  html = replaceOrAppend(html, /<meta\s+property="og:url"[^>]*>/i, contentTag("property", "og:url", canonical));
  html = replaceOrAppend(html, /<meta\s+property="og:image"[^>]*>/i, contentTag("property", "og:image", routeImage));
  html = replaceOrAppend(html, /<meta\s+name="twitter:title"[^>]*>/i, contentTag("name", "twitter:title", shell.title));
  html = replaceOrAppend(html, /<meta\s+name="twitter:description"[^>]*>/i, contentTag("name", "twitter:description", shell.description));
  html = replaceOrAppend(html, /<meta\s+name="twitter:image"[^>]*>/i, contentTag("name", "twitter:image", routeImage));

  // If specific schema exists, inject it into <head>
  if (shell.schemaJson) {
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(shell.schemaJson, null, 2)}\n</script>`;
    html = html.replace("</head>", `${schemaScript}\n</head>`);
  }

  // Inject real semantic HTML inside <div id="static-site-summary">
  if (shell.semanticHtml && html.includes('<div id="static-site-summary">')) {
    html = html.replace(
      /<div id="static-site-summary">[\s\S]*?<\/div>/,
      `<div id="static-site-summary">\n${shell.semanticHtml}\n</div>`
    );
  }

  const output = shell.route === "/"
    ? resolve(root, "index.html")
    : resolve(root, shell.route.slice(1), "index.html");

  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
  count++;
}

// Legacy redirects
const legacyRedirects = {
  "/tools": "/learn/tools",
  "/tools/sip-calculator": "/learn/tools/sip-calculator",
  "/tools/emi-calculator": "/learn/tools/emi-calculator",
  "/tools/goa-goal-calculator": "/learn/tools/goa-goal-calculator",
  "/desk": "/learn",
  "/your-money-picture": "/",
  "/money-view": "/",
};

for (const [fromRoute, destination] of Object.entries(legacyRedirects)) {
  const canonical = `${origin}${destination}`;
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>Redirecting to Kubear</title>`);
  html = replaceOrAppend(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace("</head>", `<meta http-equiv="refresh" content="0;url=${destination}" />\n</head>`);
  const output = resolve(root, fromRoute.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
  count++;
}

console.log(`Successfully generated ${count} static route shells with full semantic HTML & Schema.org JSON-LD.`);
