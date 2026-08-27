# Kubear creative directions and selected design system

## Direction A — Premium Financial Clarity

| Element | Direction |
| --- | --- |
| Hero mockup | A quiet ivory page with a deep forest product folio floating beside a short editorial promise. Fine ledger lines and a small copper signal indicate precision. |
| Colors | Bone, ink, forest green, restrained copper, soft sandstone. |
| Typography | High-contrast serif display with compact humanist sans interface type. |
| Layout | Gallery-like margins, asymmetric two-column compositions, restrained cards. |
| Visual language | Paper, folio covers, columns, fine rules, small labeled numbers. |
| Motion | A calm page-turn and fine-rule drawing sequence. |
| Pros | High trust, timeless, premium. |
| Cons | May be too reserved for a beta product and can look like wealth management. |
| Competitor-similarity risk | Medium: adjacent to Cube Wealth and affluent wealth firms. |

## Direction B — Human Financial Companion

| Element | Direction |
| --- | --- |
| Hero mockup | A wide parchment field in which salary, rent, UPI, SIP, and shared-expense fragments converge into one living ledger, with a direct promise in the editorial margin. |
| Colors | Warm parchment, deep juniper, Kubear Copper, leaf green, muted saffron, restrained due-date vermilion. |
| Typography | DM Serif Display for human editorial emphasis; Manrope for navigation, product detail, and plain-language explanations. |
| Layout | Editorial margin + living ledger, then alternating narrative panels and staggered product modules. |
| Visual language | Tactile paper fragments, connection lines, margin notes, life-marker tabs, quiet data panels. |
| Motion | Fragments resolve into a balanced picture; feature content reveals only after the relationship is visible. |
| Pros | Most ownable, ties exactly to the product problem, keeps India-specific money examples human without cliché. |
| Cons | Requires careful restraint to avoid looking like a lifestyle brand. |
| Competitor-similarity risk | Low-medium: the anti-anxiety space approaches Fold, but the warm ledger metaphor and read-only context differentiates it. |

## Direction C — Modern Financial Intelligence

| Element | Direction |
| --- | --- |
| Hero mockup | A dark field with a bright product panel and a natural-language question resolving into a connected data layer. |
| Colors | Ink, mineral blue, electric lime, graphite, quiet white. |
| Typography | Neo-grotesk display, modern monospace labels, clean sans body. |
| Layout | Dense signal room, screen-led horizontal scroll story, modular intelligence panels. |
| Visual language | Connection graphs, product UI panels, prompt fields, data chips. |
| Motion | Progressive data resolution and direct-manipulation hover states. |
| Pros | Shows the Ask Kubear interaction strongly and feels contemporary. |
| Cons | Risks “AI super-app” sameness and a colder emotional posture. |
| Competitor-similarity risk | High: overlaps 1% Club, Origin, and generic AI fintech patterns. |

## Selection rationale

**Direction B — The Living Ledger** is selected. It best translates the observed product truth: Kubear is useful because people already have many good financial products but lack a calm way to compose the information into a meaningful personal picture. It can support strong trust language without pretending to be a bank, a broker, or an advice engine. It also gives Kubear an ownable visual interaction that is neither a generic phone mockup nor a stock-investing chart.

## Core design tokens

| Token | Value | Intended use |
| --- | --- | --- |
| Kubear Ink | `#102B28` | Primary type, long-lived navigation, privacy/trust surfaces. |
| Kubear Copper | `#C96632` | Signature action, connective lines, accent emphasis. |
| Parchment | `#F4EFE4` | Primary page background; creates a calm, human base. |
| Paper | `#FEFCF7` | Elevated fields, light cards, reading surfaces. |
| Saffron Mist | `#E2BA66` | Life markers and secondary warm data state. |
| Leaf | `#4D7869` | Positive/connected status; not used as generic financial-growth green. |
| Vermilion | `#B74E3C` | Due/attention status with accessible contrast. |
| Stone | `#81796F` | Supporting text, rules, and quiet metadata. |

## Typography, spatial, and component rules

The display face is **DM Serif Display**; it is used for the hero, section statements, and short editorial questions only. **Manrope** is the operational face and carries UI labels, navigation, buttons, body copy, tables, and product layers. Important monetary figures use tabular numerals. No component should use type below 14px for critical information or rely on low-contrast parchment-on-parchment treatment.

Desktop sections use 96–152px of vertical breathing space; tablet uses 72–104px; mobile uses 56–80px. The structural measure is a 12-column desktop field with a 3-column editorial rail, but components should break the grid with overlapping paper fragments or staggered visual panels rather than presenting equal card grids. Mobile collapses into one reading column with the primary CTA always available within the hero.

Buttons are squared-soft rather than pill-heavy: 13px radius, 1px visible outline where appropriate, firm 0.97 press state, and 150–180ms transition. Cards use a light paper surface, fine ink/copper rules, and restrained layered shadows—not ubiquitous large rounded tiles. FAQ uses accessible disclosure controls. The product picture is an illustrative, evidence-aligned surface, not a claim that a visitor is seeing live personal data.

## Motion and accessibility contract

The Connected Ledger uses an entrance-only transform/opacity choreography. Stagger financial fragments by 45–70ms and draw connector rules after fragments settle. No infinite floating. No scroll hijack. Motion remains below 300ms for interaction feedback and respects `prefers-reduced-motion`. Navigation, focus states, controls, form labels, semantic heading hierarchy, descriptive alternative text, and contrast are required in all routes. Decorative generated art uses empty alt text only when the adjacent copy already conveys the concept; meaningful graphic content receives a concise description.
