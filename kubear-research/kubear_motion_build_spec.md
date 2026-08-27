# Kubear motion build specification

## Implementation principles

The visual plan uses one high-impact animation at a time. Every moving object explains a relationship in the product: a salary note becomes a planned month, a bill becomes a due point in the week, a home expense stays inside the shared space, and a goal stays visible next to the commitments that affect it. No movement exists purely to fill space.

| Scene | Elements | Start state | End state | Trigger | Maximum duration |
| --- | --- | --- | --- | --- | --- |
| Hero week assembly | 7 labelled money tabs, product screen, orange connector | Tabs sit outside the visual field with 0 opacity; product screen is at 96% scale. | Tabs settle around a real app screen, then the connector completes. | Page load, once. | 1.2 seconds. |
| Aaj money view | Income, card, UPI, bill and home rows | Paper sheet is slightly below position; rows are hidden. | Paper sheet rises, rows reveal in 70ms steps, only one attention line receives orange. | Scroll entry, once. | 850ms. |
| Salary ribbon | Salary source, three allocations, remaining-money label | Single orange ribbon starts at salary source. | Ribbon lands at needs/bills/goal labels; residual line ends at “what is left”. | Scroll entry, once. | 1.1 seconds. |
| Home split | Home tab, personal tab, shared rent note | Two boards overlap by 8px. | Boards separate; rent note lands on Home only. | Hover on desktop, tap on mobile. | 420ms. |
| Goal path | Goal pin, bill stops, month labels | Pin sits before first month. | Pin moves to final visible month as stop labels appear. | Scroll entry, once. | 760ms. |

## Engineering constraints

Use CSS transforms, opacity and SVG path drawing. Do not animate layout properties such as height, width, left or top. Heavy Lottie or canvas animation is unnecessary and should not be the default. Use Framer Motion only when it materially improves layout transitions or interactive tab changes. Animate product images as lightweight WebP/AVIF layers where possible.

The mobile experience is not a shrunken desktop film. At 375px, each scene becomes a vertical short story: one statement, one clear product frame and one action. The hero’s full animation must complete without needing scroll. All content must be present in the static end state before a user scrolls, and the page should remain understandable if JavaScript or motion is unavailable.

## Reduced-motion contract

When `prefers-reduced-motion: reduce` is active, show all story scenes in their final state with no delayed reveals, drift or path drawing. Interactive tabs change immediately. The meaning of “week comes together” should remain visible through static placement, labels and orange connector rules.

## Performance budget

Keep the initial animated scene under 350 KB of visual assets above the fold after compression, excluding the app screenshot required for product proof. Lazy-load below-fold app screenshots and motion components. Use width/height attributes or aspect-ratio boxes for every image. Test the hero on an Android device with network throttling before release.
