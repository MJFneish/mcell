# mcell — fneishpro / devlance landing site

Static marketing site: `index.html`, `privacy-policy.html`, `terms-and-conditions.html`. No build step, no server. EN/AR copy is driven by `data-i18n="key"` attributes in the HTML, resolved against the `STRINGS` object in `assets/js/i18n.js`.

**Project skills** (`.claude/skills/`):
- `verify` — the formalized version of the policy below; read before taking a screenshot or
  running WebSearch/WebFetch for provider/game research.
- `add-provider-or-game` — the repeatable card + dialog + i18n-keys + WhatsApp-link pattern for
  adding a new charge provider, app, or game.

## Verification policy — read this before using /run or /verify or launching a browser

A previous session in this repo burned a huge amount of token budget by taking ~90 browser screenshots across a task that was pure text editing (translation strings). Each screenshot stays in context and gets re-billed on every later turn of that session, so repeated screenshotting compounds fast. Follow this policy to avoid repeating that:

- **Text/content-only changes** — editing `STRINGS` in `i18n.js`, copy/wording tweaks, meta tags, adding a translation key: verify by re-reading the edited file/diff and confirming the `data-i18n` key used in the HTML matches the key added in `STRINGS` for both `en` and `ar`. Do **not** launch a browser and do **not** take a screenshot for this — there is no visual/layout behavior being changed.
- **Layout/CSS/structural changes** — new section, restyled component, responsive/RTL fix: a **single** screenshot after all edits are done is enough to confirm it. Do not screenshot after every intermediate edit, and do not iterate re-screenshotting more than once or twice for the same change.
- Never take more than 2-3 screenshots total in one task unless the user explicitly asks to see more (e.g. "show me every breakpoint" or "check both languages").
- If it's genuinely unclear whether a change needs visual verification, ask the user rather than defaulting to opening a browser.

## Context/token policy — read this before researching prices or adding repeated content (dialogs, cards, plans)

A session in this repo burned most of its context budget in under an hour adding provider/game content dialogs, mostly from running ~35-40 WebSearch/WebFetch calls directly in the main conversation to look up prices for each provider one by one. Every search's full result text (multiple linked snippets + a summary) stays in context and is re-billed on every later turn, so it compounds exactly like the screenshot problem above. Follow this policy:

- **Looking up external facts for 3 or more items** (prices, specs, plan tables for multiple providers/games/apps): do not call `WebSearch`/`WebFetch` directly in the main conversation. Delegate to a subagent (`Agent` tool, `general-purpose` or `Explore`) and batch several items into one subagent call. Explicitly ask the subagent to return only the distilled answer (a plain price/spec table) — not raw search results or source-by-source commentary. Only fall back to inline search for a single, one-off lookup.
- **Adding the same kind of thing many times** (a new dialog/card/tab for the Nth provider or game, following a pattern already established earlier in the task): don't re-derive the structure from scratch or re-read files "to remember the pattern" — reuse the established shape directly, and prefer fewer, larger edits over many small ones for the repeated parts.
- **Keep the todo list current** during multi-step work (mark items done as you finish them). A stale/empty list on a long task makes the harness inject a reminder nudge on every subsequent turn, which adds up over a dozen+ steps.
- If a request will clearly need more than ~5 external lookups (e.g. "add dialogs for all these providers/games"), say up front that you'll batch the research through a subagent before starting, rather than doing it lookup-by-lookup and discovering the cost later.
- **Animated/timing-dependent UI (preloaders, transitions, spinners):** a static screenshot only ever catches one arbitrary instant of something that's deliberately changing over time — mid-fade opacity, an in-progress entrance animation, etc. Don't re-screenshot repeatedly trying to "catch it looking right"; that's chasing timing, not a bug. Verify the underlying logic instead: read back computed style / `classList` state via a quick script (opacity, background-color, whether a hide-class was added) to confirm the CSS/JS is doing what it should, and take at most one screenshot purely to sanity-check layout and theme colors.
