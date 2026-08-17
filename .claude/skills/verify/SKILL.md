---
name: verify
description: This project's verification policy — read before taking a browser screenshot or running WebSearch/WebFetch for provider/game research. Formalizes the token-conservation lessons already in CLAUDE.md.
---

# Verification policy for mcell

This is a static site (no build step, no server) — most edits are text/copy/i18n changes that
don't need a browser at all. Two past sessions in this repo burned large amounts of token budget:
one from ~90 repeated screenshots verifying pure text edits, another from 35-40 individual
WebSearch/WebFetch calls done inline while researching provider prices one at a time. Don't repeat
either pattern.

## Screenshot policy

- **Text/content-only changes** (editing `STRINGS` in `assets/js/i18n.js`, copy/wording tweaks,
  meta tags, adding a translation key): verify by re-reading the edited file/diff and confirming
  the `data-i18n` key used in the HTML matches the key added in `STRINGS` for both `en` and `ar`.
  Do **not** launch a browser and do **not** take a screenshot — there is no visual/layout
  behavior being changed.
- **Layout/CSS/structural changes** (new section, restyled component, responsive/RTL fix): a
  **single** screenshot after all edits are done is enough. Don't screenshot after every
  intermediate edit, and don't iterate re-screenshotting more than once or twice for the same
  change.
- Never take more than 2-3 screenshots total in one task unless the user explicitly asks to see
  more (e.g. "show me every breakpoint" or "check both languages").
- **Animated/timing-dependent UI** (preloaders, transitions, spinners): a static screenshot only
  catches one arbitrary instant of something deliberately changing over time. Don't re-screenshot
  chasing "catching it looking right" — verify the underlying logic instead (read back computed
  style / `classList` state via a quick script: opacity, background-color, whether a hide-class
  was added), and take at most one screenshot purely to sanity-check layout/theme colors.
- If it's genuinely unclear whether a change needs visual verification, ask the user rather than
  defaulting to opening a browser.

## External research policy

- **Looking up external facts for 3+ items** (prices, specs, plan tables for multiple
  providers/games/apps): do not call `WebSearch`/`WebFetch` directly in the main conversation —
  delegate to a subagent (`Agent` tool, `general-purpose` or `Explore`) and batch several items
  into one subagent call. Ask the subagent to return only the distilled answer (a plain
  price/spec table), not raw search results or source-by-source commentary. Only fall back to
  inline search for a single, one-off lookup.
- If a request will clearly need more than ~5 external lookups (e.g. "add dialogs for all these
  providers/games"), say up front that you'll batch the research through a subagent before
  starting, rather than discovering the cost lookup-by-lookup.

## General

- **Do not run any verification proactively** — this whole policy only kicks in once the user has
  asked you to check/verify something. Making the edit and explaining it is the default; testing
  it is a separate, explicitly-requested step.
- Keep the todo list current during multi-step work — a stale/empty list on a long task makes the
  harness inject a reminder nudge on every subsequent turn.
- Prefer fewer, larger edits over many small ones when adding the same kind of thing repeatedly
  (see `add-provider-or-game` skill) — don't re-derive the structure from scratch for each one.
