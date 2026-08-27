# Kubear Page-by-Page Visual Direction

## Design Principle

Kubear should feel like a **calm money companion**, not a gallery of repeated product cards. Every route should answer one visitor question with one clear visual metaphor. The shared system remains ivory, midnight, cobalt and copper, but pages will use these materials differently: **copper** signals attention and action, **cobalt** contains product logic, **midnight** anchors trust and focused work, and **ivory** keeps longer reading comfortable.

| Page | Visitor question | Signature visual | Information hierarchy | Purposeful motion and mobile behavior |
|---|---|---|---|---|
| Home | “Can Kubear make my whole week easier to see?” | **Weekly signal board**: salary, UPI, rent, goal and home markers visibly settle into one summary. | Promise, proof of the weekly picture, four real moments, trust boundary, app handoff. | Markers settle once on entry. On mobile, moments become a vertical story with the summary remaining compact. |
| How it works | “What would I do first?” | **Choice-to-view pathway** with three linked stages: choose, group and review. | One short promise, connected three-step flow, read-only explanation, app handoff. | A copper connector advances only as the stages enter view. Mobile turns it into an explicit numbered rail. |
| Your money view | “What exactly would be in the picture?” | **Anchored weekly snapshot**: balance, due items, spend rhythm, question and home space arranged around one central view. | Central picture first, then five plain-language annotations. | Annotations enter in a fixed reading order. Mobile uses one snapshot with stacked callouts, avoiding empty hero space. |
| Privacy | “What can Kubear see or do?” | **Permission boundary**: visible, not visible and never done lanes. | Three control facts, policy context, direct privacy handoff. | No decorative animation. A short focus transition highlights the selected boundary only. |
| Tools hub | “Which question should I start with?” | **Question switchboard** with three visibly different inputs and outputs. | Tool purpose, three routes, planning disclaimer. | Each route receives an individual hover or touch feedback state. Mobile keeps all three complete and stacked. |
| SIP calculator | “What could a monthly habit look like?” | **Contribution ladder** from monthly input to years held. | Inputs, monthly cadence, estimated value, education note. | Result value updates only after input settles. Reduced motion shows the final result immediately. |
| EMI calculator | “What does this monthly payment mean?” | **Loan path** with principal, rate, tenure and monthly payment. | Inputs, monthly payment, total paid, educational note. | The three inputs light their matching point on the path. No chart-like decoration. |
| Goa Goal calculator | “How can I keep this plan visible?” | **Trip runway** from saved-so-far to target month. | Goal, saved amount, target date, amount still needed. | The runway shortens with the entered savings. Dates remain text-first and accessible. |
| Learn | “What useful note should I read?” | **Issue shelf** with a featured reading card and a clear topic rail. | Featured issue, topic continuation, archive or intentional empty state. | Topic rail visibly fades toward the scroll edge and announces horizontal continuation. Loading uses a brief skeleton before a human explanatory state. |
| Journal | “Where should I continue reading?” | **Editorial issue card** with reading time, topic and takeaway. | One featured note, question-led list, Learn handoff. | Card lift on hover only. The dark feature region gains clear editorial metadata rather than empty space. |
| Editorial studio | “What needs release attention?” | **Release queue** with concise state cards on mobile and a denser table on desktop. | Publishing status, action required, article context, schedule. | Mobile shows the first ten items with an explicit reveal control. No all-draft wall. |
| 404 | “Where can I recover?” | **Wandered ledger slip** with three recovery paths. | Clear error, Home, Tools and Learn paths. | No animation needed. The page is small, useful and visually intentional. |

## Shared UI Corrections

The header will remain compact but use a stronger active-state cue and an explicit mobile-sheet heading. The footer will retain global navigation, while the primary CTA section will no longer repeat the same wording and scale on every route. Inputs, labels and helper text will retain a 16px or larger effective mobile reading size. Repeated split hero layouts will be limited to the home and one explanatory route so the site does not feel templated.

## Implementation Order

The first build will correct shared interaction, the home signal board and the studio’s unbounded mobile list. The second build will give the money-view, Tools, calculators, Learn, Journal and 404 routes their individual visual states. The final pass will test each route at 360px, 390px, 768px and desktop, including accessible focus, live calculator output and slow data-state behavior.
