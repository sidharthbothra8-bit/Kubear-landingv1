# Kubear Visual and UI Remediation Plan

## Goal

Transform the current Kubear preview from a campaign-led collage into a more credible, useful and visually resolved personal-money interface. The next implementation pass will replace weak decorative visuals and unclear chart-like elements with original HTML/CSS/JavaScript-built money-state scenes, repair UI defects, and preserve the established Indian household-money positioning, live calculators, Learn content and static SEO.

## Design Direction

The retained brand foundations are **Deep Juniper**, paper-cream, controlled Kubear Copper, editorial serif display type and a light Hinglish voice. The visual system will move from large decorative still-life panels toward **Tactile Money Instruments**: precise, animated HTML/CSS compositions that behave like a calm personal money workspace rather than illustrations standing in for product usefulness.

| Current weakness | Planned correction | Acceptance standard |
|---|---|---|
| Repeated dark still-life treatments and abstract fragments | Replace principal home scenes with distinct code-built instruments for salary allocation, UPI rhythm, rent-and-bills timeline, Goa goal progress, household sharing and privacy control. Existing original art may remain only where it is truly distinctive. | Every major home beat has a recognisable financial job and a visibly different composition. |
| Decorative chart/graph motifs lack meaning | Remove non-informative grid, dial and line treatments where they imply data without explaining it. Use labelled progress, timeline, allocation and comparison structures with illustrative data clearly marked. | No chart exists merely as decoration; every data-like visual has a plain-language label and relationship. |
| Low information density in core promise | Add a coherent “today’s money picture” composition with salary, upcoming commitments, spending rhythm, goal and selected shared costs shown as a unified state. | Within the first two home sections, a visitor can understand what Kubear helps them organise. |
| UI consistency defects | Audit fixed header, navigation sheet, CTA hierarchy, section spacing, cards, focus states, touch targets, typography and contrast across desktop and 360–430px mobile. | No overlap, clipping, horizontal overflow, ambiguous controls or contrast failures on tested routes. |
| Calculator presentation feels visual-first rather than tool-first | Refine calculator inputs, result hierarchy, invalid state, reset controls and explanatory content into one compact, workmanlike mobile-first workspace. Retain tested formula logic. | A first-time visitor can change a field and immediately understand the updated illustration and its limits. |
| Learn and supporting pages do not fully share the new system | Give Learn, Tools, How it works, Your money view and Privacy a shared set of visual primitives, not isolated decorative cards. | Navigation feels like one product site rather than independently styled pages. |

## Implementation Phases

### 1. Visual and UI Defect Audit

Create a route-by-route audit for home, Tools, all calculators, Learn hub, article, How it works, Your money view and Privacy at 360, 390, 430, 768, 1024 and 1440px. The audit will identify broken spacing, header states, contrast, type scale, overflow, interactive-state issues, imagery repetition and misleading visual metaphors. It will also inspect fresh console output and direct navigation behavior.

### 2. Establish the Tactile Money Instrument System

Create shared React components and CSS tokens for an allocation strip, commitment timeline, spend rhythm, goal runway, selected-sharing switchboard, privacy stamp, numerical callout and contextual ledger note. These will use semantic HTML, lightweight CSS, purposeful Framer Motion transforms/opacity and `prefers-reduced-motion` fallbacks. They will be accessible and readable without animation.

### 3. Rebuild the Home Story Around Product States

Replace or substantially rework home visuals one at a time: the hero money picture, salary-day allocation, UPI weekly rhythm, rent plus Goa timeline, selected home-money split, and read-only privacy state. Each scene will receive a unique interaction or explanatory structure rather than a repeated image-card layout. Existing generated images will only be retained where their subject is specific and adds real value; no new image generation is assumed.

### 4. Repair Shared UI and Supporting Routes

Implement a consistent header state system, full-height mobile navigation with controlled scrolling, predictable focus handling, improved button hierarchy, responsive section rails, clean empty/invalid states and shared visual primitives across Tools, Learn and policy pages. Resolve any incorrect active-route, duplicate or legacy navigation behavior found during the audit.

### 5. Refine Tool Usability

Keep the current tested SIP, EMI and Goa formula functions. Improve the explanatory data presentation, number input affordances, error visibility, reset behavior, keyboard flow and mobile layout. Replace generic visual dials/grids with input-relevant illustrations such as contribution cadence, payoff breakdown and month-to-go progress.

### 6. Validate and Deliver

Run TypeScript, calculator tests and production build. Validate every affected route at the target viewport sizes, test primary CTAs and internal navigation, verify direct static route metadata, check mobile touch targets and keyboard paths, run a fresh-console check, and save one final checkpoint only after the pass succeeds. Production deployment will remain out of scope.

## Key Decisions

The redesign will favour **deterministic HTML/CSS/JavaScript visuals** over additional AI imagery. This directly addresses the complaint about visual quality, allows precise responsive layouts, avoids image-generation quota dependency, and makes the money relationships legible rather than decorative. Illustrative numbers will always be visibly framed as examples or planning illustrations, not product facts or financial advice.

## Test Plan

| Test layer | Checks |
|---|---|
| Visual regression | Screenshots of the affected routes at 360, 390, 430, 768, 1024 and 1440px; no clipping, unreadable text or repeated generic scene. |
| Interaction | Mobile menu open/close and Escape, selected home controls, money-state interactions, calculator typing/reset/period controls, FAQ and Learn links. |
| Accessibility | Visible focus, keyboard access, 44px touch targets, semantic labels, live calculator results, contrast and reduced-motion fallback. |
| Technical | Fresh console load, `pnpm run check`, calculator Vitest suite, production build, sitemap and representative direct-route metadata. |

## Assumptions and Risks

This plan assumes the previous product claims, conversion destinations and no-production-deployment requirement remain unchanged. It does not assume fresh image generation because the quota was exhausted in the preceding pass. The visual audit may identify a small number of route-specific copy changes needed to remove misleading decorative language. Article schema will remain deferred until author/date information is approved.
