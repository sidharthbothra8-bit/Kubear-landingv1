# Learn Consolidation Audit

The source audit found no project-controlled `Made with Manus`, `Made by Manus` or similar platform-credit wording in the public client files. The visible black badge in the supplied image is therefore treated as host or preview chrome until a rendered-DOM check proves otherwise. It will not be hidden by broad CSS because that could conceal visitor controls or create a fragile production workaround.

| Area | Current state | Approved change |
|---|---|---|
| Primary navigation | Five destinations: How it works, Your money view, Tools, Learn and Privacy. | Retain the first two and Learn. Tools and Privacy move out of the primary map. |
| Calculator routes | `/tools`, `/tools/:slug`, with separate sitemap and static metadata entries. | Promote `/learn/tools` and `/learn/tools/:slug` to canonical paths. Legacy URLs forward visitors and are removed from canonical sitemap inventory. |
| Learn functionality | Public tRPC hub, topic and article reading routes plus protected studio publishing workflow. | Preserve procedure contracts and database data. Add Learn-native calculator discovery, calculator context and practical next actions. |
| Goal section | `CommitmentRunwayInstrument` sits beside a copy column in the homepage `mm-goa-grid`. The user image shows an older saffron composition with a detached left visual field, decorative line and badge collision. | Recompose the section as a normal-flow Goal Runway, with a single semantic title, full-width plan line and naturally stacked mobile CTA. |
| SEO | Sitemap and static metadata still list Tools as independent canonical pages. | Update canonical paths, metadata and breadcrumb logic together so Learn owns the tool journey. |

No article state, publishing date, author record or editorial source was changed during this audit.

## Desktop Visual Verification

The repaired Goal Runway no longer exposes the prior right-side saffron block or detached diagonal decoration. Its rent, card and Goa entries now sit within a single normal-flow panel beside the supporting copy. The Learn hub presents a direct tool entry and the three scenario-led cards before the editorial loading state. The Learn tools hub and all three calculator pages show the simplified three-item primary map with Learn active. The legacy EMI URL resolves through the client compatibility route to the same calculator journey.

## Functional Calculator Smoke Check

The Learn-owned SIP calculator was opened in a fresh browser session. Changing the monthly SIP from `₹5,000` to `₹10,000` updated the visible estimate from `₹11,61,695` to `₹23,23,391`, together with the contribution and growth breakdown. The interaction occurred in place, confirming that the calculator remains functional after moving it under Learn.

## Responsive and Route Verification

At 360px, the homepage Goal Runway, Learn Desk and Goan-goal calculator preserve single-column reading order with visible buttons and no detached decorative field. At 768px, the Goal Runway gains a balanced two-column desktop composition, while the Learn Desk tool cards, Learn tools switchboard and calculator workspaces retain readable text and touch-safe controls. The former `/tools/emi-calculator` path redirects in the browser to `/learn/tools/emi-calculator`, which retains the expected Learn title and functional planning form.

The static shell generator now produces exactly one canonical tag for every former Tools compatibility path, pointing at its matching Learn route. The canonical sitemap contains four Learn tool URLs and no legacy `/tools` URLs. The project-controlled client source contains no `Made with Manus` or `Made by Manus` wording. The preview-only badge visible in the user-provided image is not emitted by the site source.
