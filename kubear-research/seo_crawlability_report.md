# Kubear SEO and AI-discoverability report

## Current-site findings

The current public site responded over HTTPS and exposed a permissive `robots.txt` that explicitly allows major AI crawlers, including GPTBot, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, CCBot, anthropic-ai and cohere-ai. It also exposes a sitemap covering home, blog, tools, legal pages and calculator paths. The sitemap declares the non-`www` host while the inspected public page used `www.kuberos.in`; the production implementation should settle on one canonical host and redirect the other.[1] [2]

The current Blog index contains multiple valuable article URLs, but they were not included in the reviewed sitemap output. This is a material opportunity: article routes are a natural place to answer topical financial questions and build a trustworthy knowledge graph, as long as all canonical content is included in an accurate sitemap.[2] [3]

## Preview implementation

| Area | Implemented in preview | Value | Production follow-up |
| --- | --- | --- | --- |
| Homepage meaning | A non-JavaScript fallback contains a factual H1, category explanation and internal links. | Core meaning remains present in readable HTML. | Maintain this content in the deployed canonical page and validate rendered/source parity. |
| Page titles/descriptions | Each preview route sets an intent-specific title, description and canonical path. | Clearer page purpose for browsers and potential crawlers. | Move metadata into pre-rendered HTML/head tags for the most reliable crawl result. |
| Open Graph | Website type, title, description and Twitter summary card are included. | Baseline social share interpretation. | Add an approved absolute `og:image` plus route-specific cards. |
| Structured data | Conservative Organization, WebSite and SoftwareApplication JSON-LD. | Gives search systems a factual entity/category starting point. | Confirm legal entity, operating system/application category, logo and social URLs; add BreadcrumbList/Article only to accurate pages. |
| Robots | General crawler and major AI crawler access allowed. | Signals that public marketing content can be crawled. | Preserve only if consistent with the company’s AI content policy. |
| Sitemap | A preview sitemap lists six canonical marketing routes. | Exposes the proposed primary information architecture. | Generate dynamically or at build time, including all approved blog and tool routes. |
| Semantic hierarchy | Routes use page-specific H1s, logical section H2/H3 hierarchy, descriptive links and accessible controls. | Helps readers, assistive tech and retrieval systems understand page purpose. | Retain headings when final real product assets/copy are added. |
| Internal linking | Header/footer and contextual links connect core pages. | Supports discovery and contextual interpretation. | Include article/tool clusters and comparison pages after factual review. |

## Canonical questions naturally addressed

The preview’s content architecture answers what Kubear is, what it does, who it is for, how it works, why it differs from spreadsheets and specialist apps, whether it moves/invests money, what privacy boundaries are publicly described, and where to find practical finance content/tools. It **does not** make unverified claims about pricing beyond marking current beta language as needing confirmation, and it does not claim regulatory authorization, encryption standards, financial returns, advisor status, app-store availability or feature completeness.

## Priority recommendations before production migration

1. Use server-side rendering or static prerendering for all canonical marketing, Journal and tools routes. The current React preview uses a client-side router; its fallback preserves the home definition, but production pages should not depend on client execution for full indexability.
2. Choose `https://www.kuberos.in/` or `https://kuberos.in/` as the canonical origin; implement 301 redirects, canonical tags, sitemap URLs and Open Graph URLs consistently.
3. Build the sitemap from the content source so that every approved blog article, tool, feature page and legal page is represented. Remove routes that should not appear in search.
4. Add route-specific title, description, canonical, Open Graph and social-card images. Use natural query language, not keyword stuffing.
5. Publish authoritative feature, privacy, Account Aggregator and pricing pages only after owner/legal approval. These should become the pages answer engines cite when people ask what Kubear does or whether it is safe.
6. Add `Article`/`BlogPosting` schema per article and `BreadcrumbList` per nested public route only when headline, author, date, canonical URL and images are accurate. Avoid review, FAQ or financial-product structured-data inflation.
7. Submit the canonical sitemap through the relevant webmaster tools and monitor indexed URLs, rich-result eligibility, crawl errors, Core Web Vitals, and search queries after launch.

## References

[1]: https://www.kuberos.in/robots.txt “Kubear robots.txt”
[2]: https://kuberos.in/sitemap.xml “Kubear sitemap.xml”
[3]: https://www.kuberos.in/blog “Kubear Journal”
