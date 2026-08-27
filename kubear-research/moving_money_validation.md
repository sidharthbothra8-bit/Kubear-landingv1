# Moving Money Universe validation record

## Initial rendered checks

The rebuilt homepage rendered the original Money Orbit master visual and all newly generated scene images as website art, with no app screenshots in the marketing flow. The document outline exposes the hero promise, mobile/desktop app actions, the selected money-moment controls, salary planning illustration, home/personal controls, privacy route, FAQ and final handoff as meaningful HTML content.

## Interaction checks

The money-moment selector works as an asynchronous React state transition. After the UPI control is activated and the short enter animation completes, the UPI control becomes the only selected money moment. The separate Home/Personal control also changes state correctly: after Personal is selected, Home reports `aria-selected="false"` and Personal reports `aria-selected="true"`. Both controls use semantic tab roles and remain understandable without motion.
