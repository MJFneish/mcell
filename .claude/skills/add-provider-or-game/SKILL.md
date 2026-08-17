---
name: add-provider-or-game
description: Add a new charge provider (like Alfa/Touch/Ogero), app (like Netflix/Steam), or game (like PUBG/Valorant) to the mcell site. Use whenever the user asks to add a new provider, app, or game card/dialog.
---

# Add a new provider, app, or game

Each entry follows the same repeatable shape across three files. Follow an existing entry as the
template (e.g. search `index.html` for `data-provider="PUBG"` or `"Alfa"`) rather than designing
new markup from scratch.

## The pattern

1. **Card** — a grid item (`.charges .card`, `.apps .app`, or `.games .card`) with a `data-i18n`
   title/label and, for charges/games with a detail dialog, a `data-bs-toggle="modal"` /
   `data-bs-target="#{name}...Modal"` trigger.
2. **Dialog** (charges and games only — plain `apps` entries link straight to WhatsApp, no
   dialog): a Bootstrap `<div class="modal fade charges-modal" id="{name}ChargeModal">` (or
   `...TopupModal` for games) with tabs/groups for plans, and a footer contact button:
   ```html
   <a href="https://wa.me/71632553" target="_blank" rel="noopener"
      class="btn btn-primary charge-contact" data-provider="{Name}">...</a>
   ```
   (use `game-contact` instead of `charge-contact` for games — see existing PUBG/Valorant/etc.
   entries in `index.html`).
3. **i18n keys** — add both `en` and `ar` entries to the matching key namespace in
   `STRINGS` (`assets/js/i18n.js`): `charges.*`/`chDialog.*` for charges, `apps.*` for apps,
   `games.*`/`gameDialog.*` (check the existing prefix used by a sibling game) for games. Every
   `data-i18n="..."` attribute you add to the HTML needs both language keys or it'll silently
   show blank/fallback text in one language.

## WhatsApp links — don't hand-write them

Don't put a real `data-provider`-specific WhatsApp URL in the HTML. `assets/js/links.js`
(`buildWhatsappLinks()`) auto-generates every WhatsApp link at runtime from the card's
`data-provider` attribute (or title text for `.apps .app`), and rebuilds them again on language
switch. Just set the right `data-provider` value / class (`charge-contact`, `game-contact`, or
let `.apps .app a` pick up the title text) and the link wires itself.

## Images

Provider/game/app logos live in `assets/images/{charges,games,apps}/*.webp`. Add the new image in
`.webp` format there and reference it by relative path — don't introduce a different image format
without checking whether the existing build/serving setup (none — this is a static site) cares.

## Researching prices/specs for the new entry

If you need real prices, data bundles, or specs for the new provider/game and don't already have
them from the user: follow this project's `verify` skill's "external research policy" — for a
single new entry this is a one-off lookup (fine to do inline), but if the user asks for **several**
new entries at once, batch that research through a subagent instead of looking each one up
one-by-one in the main conversation.

## Verification

Per this project's `verify` skill: a new card + dialog + i18n keys is a
layout/structural change, so **one** screenshot after all edits are done is enough (check both
`en` and `ar` only if the user asks). Don't screenshot after each intermediate edit.
