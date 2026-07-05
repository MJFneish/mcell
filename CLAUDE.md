# mcell — fneishpro / devlance landing site

Static marketing site: `index.html`, `privacy-policy.html`, `terms-and-conditions.html`. No build step, no server. EN/AR copy is driven by `data-i18n="key"` attributes in the HTML, resolved against the `STRINGS` object in `assets/js/i18n.js`.

## Verification policy — read this before using /run or /verify or launching a browser

A previous session in this repo burned a huge amount of token budget by taking ~90 browser screenshots across a task that was pure text editing (translation strings). Each screenshot stays in context and gets re-billed on every later turn of that session, so repeated screenshotting compounds fast. Follow this policy to avoid repeating that:

- **Text/content-only changes** — editing `STRINGS` in `i18n.js`, copy/wording tweaks, meta tags, adding a translation key: verify by re-reading the edited file/diff and confirming the `data-i18n` key used in the HTML matches the key added in `STRINGS` for both `en` and `ar`. Do **not** launch a browser and do **not** take a screenshot for this — there is no visual/layout behavior being changed.
- **Layout/CSS/structural changes** — new section, restyled component, responsive/RTL fix: a **single** screenshot after all edits are done is enough to confirm it. Do not screenshot after every intermediate edit, and do not iterate re-screenshotting more than once or twice for the same change.
- Never take more than 2-3 screenshots total in one task unless the user explicitly asks to see more (e.g. "show me every breakpoint" or "check both languages").
- If it's genuinely unclear whether a change needs visual verification, ask the user rather than defaulting to opening a browser.
