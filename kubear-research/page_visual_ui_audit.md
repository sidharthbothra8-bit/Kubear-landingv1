# Kubear Page-by-Page Visual and UI Audit

The current site has a cohesive palette and working calculators, but the desktop review shows that it still reads as a collection of closely related templates rather than a sequence of deliberately different experiences. The review below is based on the rendered routes, not source assumptions.

| Route | Observed issue | Required visual purpose | Planned correction |
|---|---|---|---|
| `/` | The message is clear, but the story repeats the same split-text-and-card rhythm across too many sections. The end CTA is visually weaker than the hero. | A living weekly money picture that becomes calmer as moments are gathered. | Use a distinctive editorial hero, then alternate a time strip, allocation board, shared-space split and trust boundary. Give the final CTA a stronger resolved-state composition. |
| `/how-it-works` | The first section works, but the three following cards are generic and heavy. | A practical three-step onboarding flow. | Turn the cards into a connected progressive sequence with a visible handoff from choice to grouping to review. |
| `/your-money-picture` | The hero has too much unoccupied dark area and the screen card floats without a clear reading order. | A product explanation of what the picture contains. | Use a stacked weekly snapshot with anchored annotations, then continue into a measured five-part reading path. |
| `/privacy-data` | The material is legible but the three proof rows lack a high-information visual summary. | A quiet proof of control. | Use a boundary card with permissions, exclusions and leave controls, followed by short policy proof points. |
| `/tools` | Calculator entries are clear but visually follow the same dark-card format as multiple other routes. | A task selector that leads to one concrete money question. | Create a utility-board visual with three distinct tool routes and visible input/output logic. |
| Calculator routes | SIP, EMI and Goa currently share the same title and hero-card composition. This loses the distinct reason a visitor came to each tool. | A focused planning workspace for one calculation. | Give each calculator a different contextual lead visual, summary language and result emphasis while retaining the tested formula controls. |
| `/learn` | The hero is strong, but the topic rail clips without an explicit continuation cue. The query state can remain visually on “Opening the library…” long enough to feel like a failed load. | A calm, readable publication library. | Add intentional horizontal rail affordance and replace the indefinite loading card with a short skeleton, delayed explanatory state and distinct empty library state. |
| `/journal` | The page offers an internal reading route but its large dark feature area lacks enough editorial information. | A curated internal reading gateway. | Expand the featured reading module into a compact issue card with topic, time, takeaway and a clear continuation. |
| `/studio/learn` | The captured screen is blank rather than showing a purposeful authenticated, loading or access-denied state. | A protected editorial operating surface. | Make authentication and loading outcomes explicit, then use responsive release cards for mobile rather than a compressed table. |
| `/404` | The error page is currently a sound exception, but it lacks helpful route recovery choices beyond Home. | A recovery moment. | Keep the clear message, add links to Tools and Learn, and retain the single primary return action. |

## Shared Defects to Correct

The audit identifies four systemic issues: **template repetition**, **inconsistent visual density**, **ambiguous asynchronous states**, and **page-specific visual concepts that are not yet distinct enough**. The next implementation will preserve the working calculator and Learn publishing behavior while giving every page one unique visual role in the customer journey.

## Mobile Review

The 390px review confirms that headings, calculator inputs and primary actions are readable, but it also surfaces meaningful mobile-specific defects. The **editorial studio** renders all 50 drafts as an extremely long list, which is not a usable release-management view on a phone. It needs a visible subset with an explicit “show more” control and a concise count. The public Learn topic rail needs a continuation cue, while the journal’s large feature panel needs stronger editorial detail. The three calculator routes preserve their working forms, but still feel overly alike in the first screen, so the final plan assigns each one its own contextual planner state.

## Focused Implementation Verification

The new home **weekly signal board** gives the hero an explicit weekly-picture role rather than repeating the prior balance card. The rebuilt money-view hero exposed one high-contrast defect during review: the large display heading inherited dark ink on the midnight surface. That was corrected with route-scoped light display text before continuing the route implementation.

## Supporting-Route Implementation Verification

The mobile review now shows a distinct visual model for each calculator: a **contribution ladder** for SIP, a **loan path** for EMI and a **goal runway** for Goa. The Journal feature area now carries issue metadata and a stated takeaway, while the 404 route supplies Home, Tools and Learn recovery paths. The protected studio’s former blank loading screen has been replaced with an explicit access-and-loading state; when article data is available, the studio is bounded to twelve release cards initially with a visible reveal control.

## Desktop and Tablet Validation

The route review at 1440px and 768px confirms the revised pages preserve clear line lengths, non-overlapping instrument surfaces and route-specific composition. The home has a weekly signal-board hero, onboarding has a linked three-step flow, the money-view route has an anchored snapshot, Tools has a question switchboard, Learn has an issue-shelf hierarchy, Journal has an editorial issue card and the recovery page has direct alternative paths. No horizontal overflow or clipped primary controls was visible at the reviewed breakpoints.
