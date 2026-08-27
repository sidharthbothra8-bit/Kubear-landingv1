# Learn Consolidation Validation

Kubear Learn now combines public money notes and the three existing planning calculators. The public library remains deliberately empty until an article progresses through the preserved editorial workflow, but it now offers immediate, useful calculator entry points and clear status or retry states.

| Area | Verification | Result |
|---|---|---|
| Information architecture | The Money Map contains How it works, Your money view and Learn only. Privacy remains within the footer Trust group. | Passed. |
| Tool consolidation | New canonical routes are `/learn/tools`, `/learn/tools/sip-calculator`, `/learn/tools/emi-calculator` and `/learn/tools/goa-goal-calculator`. Former Tools URLs forward to the matching Learn route. | Passed in browser for the legacy EMI path and in generated static compatibility shells. |
| Learn functionality | The public hub endpoint returns the current editorial payload. Its public empty state directs visitors to Learn tools. The protected publishing procedures and current 50 drafts were not modified. | Passed. |
| Calculator behaviour | The SIP calculator was changed from a ₹5,000 monthly input to ₹10,000 in the browser. The estimate, contribution and growth values updated in place. Formula tests cover zero-rate, normal, goal and validation cases. | Passed. |
| Goal visual | The former absolute saffron field and diagonal line were removed. The Goal Runway now uses normal-flow desktop and mobile layouts. | Passed at 360px, 768px and desktop review. |
| SEO and compatibility | Sitemap lists four Learn-owned tool paths and no legacy Tools paths. Legacy static shells include exactly one canonical tag pointing to Learn. | Passed. |
| Project-controlled credit | A source scan found no visible `Made with Manus` or `Made by Manus` copy. The badge in the user screenshot is host preview chrome, not emitted by the visitor site source. | Passed within project control. |
| Build quality | `pnpm test` reports 7 passing tests. `pnpm run check` passes. A controlled production build passes after temporarily stopping local watchers, and generates 22 static route shells. | Passed, with the existing non-blocking large-chunk advisory. |

No editorial publication, production-domain modification or attempt to hide host-owned preview controls was made.

The remaining legacy Goa calculator route was opened in the browser and redirected to `/learn/tools/goa-goal-calculator`. The page retained its target, already-saved and month inputs, reset control, accessible related-guide link and visible monthly planning result. Together with the prior EMI redirect and SIP input update, this covers all three calculator journeys after consolidation.

The mobile Money Map trigger was exercised in the browser. Once the React state update completed, the dialog reported `aria-expanded="true"`, set background scrolling to `hidden`, and exposed exactly three mobile navigation links: How it works, Your money view and Learn. This confirms that Tools and Privacy are no longer part of primary navigation while the established footer Trust path remains available.

The sheet was closed with Escape. The navigation trigger returned `aria-expanded="false"`, the dialog left the document and document scrolling returned to its normal state.

The production static handler was updated to serve generated nested route shells before the ordinary static middleware. A direct request to `/learn/tools/sip-calculator` now returns HTTP 200 with the `SIP Calculator India | Kubear Learn` title and its Learn canonical URL, without an intervening directory redirect. The legacy EMI path also returns HTTP 200 with its single Learn canonical URL and immediate compatibility refresh.
