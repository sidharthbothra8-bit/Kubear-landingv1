# Kubear redesign validation report

## Responsive and technical checks

The preview was rendered at **375×812, 390×844, 430×932, 768×1024, 1024×900 and 1440×1000**. Home and the primary supporting pages were checked at desktop and 390px mobile width. The check focused on CTA visibility, navigation, hierarchy, clipping, overflow, image replacement, readable text, footer behavior, route presence and layout transitions.

| Area | Outcome | Notes |
| --- | --- | --- |
| 375px homepage | Pass | Hero retains proposition, early-access CTA, read-only cue and an explanatory ledger composition within the first screen. |
| 390px primary routes | Pass | Mobile menu, stacked editorial sections, FAQ, Journal slips, privacy evidence panel and Tools rows remain readable. |
| 430px homepage | Pass | Larger-phone spacing remains balanced with no horizontal overflow visible. |
| 768px homepage | Pass | Navigation shifts into the compact menu before desktop density becomes cramped; hero and comparison remain legible. |
| 1024px homepage | Pass | Desktop two-column and three-column moments transition without collision; full navigation is available. |
| 1440px key routes | Pass | The editorial rail, Connected Ledger scenes, staggered slips and footer retain intended hierarchy. |
| Production build | Pass | `pnpm run check` and `pnpm run build` both succeeded. |
| Routes | Pass | `/`, `/how-it-works`, `/your-money-picture`, `/privacy-data`, `/journal`, `/tools` and fallback route render successfully through the static app. |
| Crawler files | Pass | `/robots.txt` and `/sitemap.xml` return successfully from the preview. |
| Console/dev logs | Pass | No recent browser-console errors or dev-server errors were found in the final log check. |
| Favicon | Pass | The generated Kubear symbol mark is used in the header and favicon link. |

The production build still reports a JavaScript chunk above the bundler’s default 500 kB advisory threshold. This is not a build failure, but a production migration should add route-level dynamic imports or manual chunking after measuring real-device performance. The generated-art background has been removed from the page’s critical visual path in favor of code-driven Connected Ledger compositions, protecting the visual story if asset loading is delayed.

## Visitor-perspective test

| Visitor | Test question | Result | Remaining consideration |
| --- | --- | --- | --- |
| 27-year-old salaried professional, unfamiliar with Kubear | Can they explain Kubear after 10 seconds? | Pass. The hero identifies a read-only picture, familiar money fragments and a decision-context outcome. | Real product screenshots would raise certainty further. |
| Heavy Excel user | Do they understand why it might matter? | Pass. The comparison says spreadsheets calculate but require manual upkeep; Kubear’s role is to compose the chosen information. | Test this language with actual Excel-heavy users before final copy lock. |
| INDmoney/Groww user | Can they see the difference? | Pass. The site explicitly says Kubear is not an investing app and does not move money. | Confirm no future feature contradicts that category boundary. |
| Privacy-conscious visitor | Are objections addressed? | Pass with qualification. The preview brings read-only, no-password/PIN/OTP collection, control and delete-account detail forward. | Legal/product owner must reapprove exact data-access copy. |
| Potential investor | Does it feel like a differentiated, credible product? | Pass. The design has a distinctive system, an evidence-led category, an ecosystem view and clear roadmap constraints. | Add real traction, founder/team or partner proof only when available. |
| Mobile social visitor | Can they understand it and reach CTA quickly? | Pass. The CTA appears in the hero and returns at the end; mobile hierarchy is stacked and readable. | Real signup funnel completion must be tested separately. |

## Known limitations and owner actions

The preview is intentionally evidence-gated. It does not fabricate testimonials, ratings, user counts, AUM, press logos, app-store links, regulatory registrations, encryption specifications, pricing detail, or live data screens. The external early-access link is preserved, but the underlying authentication/signup completion was not exercised because it belongs to the existing product application.

Before a public replacement, Kubear should provide approved app screenshots, a current feature-status matrix, confirmed Account Aggregator/institution details, explicit security/compliance claims, a pricing policy, preferred canonical host, approved social-sharing image, and any permitted proof points. The final content should then be legally/product reviewed, visually checked with real screens in place, and pre-rendered/SSR-enabled for all canonical routes.
