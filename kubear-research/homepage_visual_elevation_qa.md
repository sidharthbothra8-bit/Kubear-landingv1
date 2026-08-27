# Homepage Visual Elevation QA Notes

## Desktop inspection

The revised homepage now reads as a coherent Money Week sequence: the new mosaic hero, shaped spend trail, salary dispatch, Goa destination, two-table home visual and control room are visibly distinct at desktop size. The core content hierarchy, CTA contrast and repaired Goa section are intact.

The next refinement should make the signature ledger vocabulary more visible in the hero and reduce the remaining high-saturation blue feeling, especially in the final CTA. The header mark treatment can also be reviewed later as a separate shared-chrome decision because the current request is specifically focused on homepage visuals.

## Follow-up desktop and mobile inspection

The follow-up desktop inspection confirms the warm Juniper-and-copper final section now aligns with the page rather than introducing a saturated fintech-blue break. The hero carries a subtle ledger rail and the money mosaic exposes a stitch detail, while section-specific instruments retain visibly different silhouettes.

At 390px, the hero, action buttons, mosaic, spending trail, salary dispatch, goal waypoints, two-table home view and control room stack without horizontal overflow. The compact variants suppress nonessential visual offset while preserving readable labelled details.

## Technical validation

The homepage returned HTTP 200 after a managed preview restart. The test suite passed with seven tests across authentication, calculator math and Learn publication behavior. TypeScript completed without errors, and the production build completed successfully with 22 static route shells generated.

The homepage motion rules are limited to transform and opacity where animation is enabled and are contained inside a `prefers-reduced-motion: no-preference` media query. A fresh public-source scan found no project-controlled `Made with Manus` or `Made by Manus` copy.

## Tablet and motion verification

At 768px, the full homepage resolves to a deliberate single-column story. Visual objects remain within their sections with adequate spacing, and the hero mosaic, goal destination, household tables and control room retain clear hierarchy without visible clipping or horizontal overflow.

The source-level motion verification confirms that all newly introduced homepage animation is inside the no-preference media query. The visible movement is restricted to opacity and transform keyframes or transform transitions, so reduced-motion visitors receive the same information architecture without nonessential animation.

> **Reduced-motion verification: passed.** The homepage’s new mosaic, orbit, chapter-hover and destination animations are absent when a visitor requests reduced motion; the readable content and interaction controls remain available.

## UPI panel correction

The prior UPI weekday decoration was replaced with an explanatory spend trail. The new panel now communicates one clear idea: three ordinary payments, shown with their category, context and illustrative amount, become a visible ₹637 total when viewed together. The desktop layout keeps the weekly total and three entries readable at a glance. At 390px, the panel remains contained in the homepage flow and its spend entries preserve their ordering and labels.

The focused correction passed TypeScript and the seven-test regression suite. Its production build generated the expected 22 static route shells, and the restarted homepage preview returned HTTP 200.

## Human-story review

The first code-crafted human-scene pass makes coffee, commute, rent, Goa, home sharing and personal control visible as distinct moments. The review also found that the repeated card treatment needed a stronger connected-ledger structure and more varied scene emphasis. The next pass therefore adds readable money-fragment strips and reduces repetitive sun-based composition while keeping live page copy and controls accessible.

Desktop and 390px inspection confirmed the recurring human scenes are legible and stay inside the section flow. The next styling pass changes the paper silhouettes, edges and material details for coffee, salary, Goa, home and control so the illustrations read as different chapters rather than a repeated component frame.

The final desktop pass confirms that coffee, commute, salary planning, rent with a Goa plan, household choices and personal control now have distinct scene props and ledger labels. At 390px, the scenes reduce in scale, retain their labelled money fragments and stay in a clean single-column story without overflow. The generated-image quota was unavailable, so these original human illustrations and foreground motion details were created in the site rather than as new raster assets.

At 768px, the story holds together as a purposeful linear journey: every human scene remains paired with its section copy, no scene is clipped, and the trust and closing scenes retain their darker ink-led contrast. The human-scene steam, sunlight, character and travel-tag motion is explicitly scoped to reduced-motion-safe rules and uses opacity or transform only.

The final validation passed the seven-test regression suite and TypeScript checks. The production build completed successfully with 22 static route shells, and the managed preview restarted with the homepage returning HTTP 200. The scene system is rendered in-page, so it introduces no new remote image requests or asset-loading failures while image-generation capacity is unavailable.

The fresh homepage render produced no failed image, stylesheet, script or other asset requests in the focused network-log check. The hero and closing actions still bind to the Kubear web app and official Google Play listing; both destinations returned HTTP 200 during direct validation.

> **Human-story asset-load verification: passed.** The homepage, entry module, homepage module, human-scene component and page-signature stylesheet each returned HTTP 200. The fresh network log contained no 4xx/5xx responses and no non-null request errors. The new scene system is code-crafted and does not depend on a new image download.
