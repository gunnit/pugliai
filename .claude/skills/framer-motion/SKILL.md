---
name: framer-motion
description: Animate the PugliAI site — scroll reveals, staggered entrances, hero choreography, counters, parallax and hover micro-interactions. Use whenever a page needs motion, an animation looks wrong or absent, or motion has to be rolled out to a new page. Covers the repo's Framer-Motion-equivalent runtime (data-motion attributes + motion.js), its variants and timings, and the traps that break it.
---

# Motion on pugliai.com

## What "Framer Motion" means here

Framer Motion is a **React** library. This site is static HTML with no framework
and no runtime dependencies (see `CLAUDE.md`), so the library itself cannot be
used: it would mean shipping React to a marketing site whose whole point is that
GitHub Pages serves the committed HTML as-is.

What exists instead is a faithful port of Framer Motion's *model* — about 300
lines of vanilla JS plus a CSS layer:

| Framer Motion | Here |
| --- | --- |
| `initial` / `animate` | resting + `.is-inview` states in the stylesheet |
| `whileInView`, `viewport={{ once }}` | `data-motion` + IntersectionObserver |
| variants | `data-motion="<variant>"` |
| `staggerChildren` | `data-motion-group` + `data-motion-stagger` |
| `transition: { type: 'spring' }` | `--ease-spring`, a real damped-spring solution encoded as CSS `linear()` |
| `animate()` on a number | `data-motion-count` |
| `useScroll` parallax | `data-motion-zoom` |

Files:

- `src/assets/js/motion.js` — the runtime. Decides *when* things move.
- `src/assets/css/stylesheet.css`, section `/* ---------- Motion system ---------- */` —
  every resting state, easing and transition. Decides *how* they move.
- `tools/site-generator/gen/html.py` — `mo(...)` builds the attribute string.
- `tools/site-generator/gen/site.py` — `Page.motion`, the `<head>` opt-in snippet, the script tag.

If a third-party vanilla library is ever wanted, Motion One (`motion`, by
Framer Motion's author) is the drop-in equivalent — but it is a runtime
dependency and would have to be vendored, so raise it with the user first.

## Using it

Motion is **opt-in per page**: set `motion=True` on the `Page`. Without it the
`.motion` class is never added to `<html>`, every rule below stops matching, and
any `data-motion` attributes in the markup are inert.

```python
page = Page(lang=lang, path=path, title=..., description=..., alt=alt, motion=True)

# one element
f'<p class="lead"{mo("fade-up", delay=200)}>…</p>'

# a container whose direct children arrive one after another
section_head(eb, h2, lead, attrs=mo(group='fade-up', stagger=80))
grid(cards, 3, attrs=mo(group='rise', stagger=100))

# plays on load instead of on scroll (above the fold only)
f'<h1{mo("fade", split="words", start="load", delay=80, stagger=38)}>…</h1>'
```

### Attributes

| Attribute | Meaning |
| --- | --- |
| `data-motion="<variant>"` | this element animates in |
| `data-motion-group[="<variant>"]` | its **direct children** animate, staggered |
| `data-motion-stagger="90"` | ms between children (default 80; 34 for words) |
| `data-motion-delay="200"` / `data-motion-duration="800"` | ms |
| `data-motion-amount="0.3"` | fire on visible fraction instead of the default trigger line |
| `data-motion-once="false"` | replay each time it re-enters the viewport |
| `data-motion-start="load"` | play on load rather than on scroll |
| `data-motion-split="words"` | split the text and stagger word by word |
| `data-motion-reveal` | open a mask over this container's `<img>` children |
| `data-motion-count` | count a number up |
| `data-motion-bar` | grow a bar to its `--m-bar` width |
| `data-motion-zoom` | slow settle out of an over-scale, then scroll parallax |

Variants: `fade`, `fade-up`, `fade-up-sm`, `fade-down`, `fade-left`,
`fade-right`, `rise` (cards), `pop` (badges and glass panels, bouncier spring).

### Timings that read as "considered", not "busy"

This is a B2B site for Italian SMEs. Entrances are 620ms with 12–30px of
travel; the spring overshoots 0.6% (`--ease-spring`), 4.9% only for `pop`.
Stagger 70–120ms. Do not add bounce, gradients, drop shadows or parallax
beyond the hero — the design system forbids the first three outright.

## Rules that are easy to get wrong

1. **Bilingual parity.** The homepage builds IT and EN from the same code path,
   so motion lands on both. If you hand-write markup for one language, do the other.
2. **The generator is the source of truth.** Edit `gen/`, run
   `python3 tools/site-generator/build.py`, commit both.
3. **Never let JS decide whether content is visible.** Content is hidden only
   under `html.motion`, the class is only added when the runtime can work and
   reduced motion is off, and a failsafe (`.motion-failsafe`) restores
   everything if `motion.js` does not run. Verify no-JS and reduced-motion
   renders after any change.
4. **Above-the-fold motion must not wait on third parties.** A parser-blocking
   `<script>` anywhere in `<body>` delays every deferred script — the hero
   would sit invisible until it resolves. The chat widget is `defer` for
   exactly this reason; keep it that way.

## Traps found the hard way

- **IntersectionObserver never fires for an element its own `clip-path`
  collapses.** `clip-path: inset(0 0 100% 0)` gives an empty intersection
  rectangle, so a masked reveal must be observed on the **container** and clip
  the `<img>` inside — that is why `data-motion-reveal` is a container attribute.
- **A lingering entrance `transition` dulls hover states.** The motion layer's
  `transition` outranks a component's own, so a settled card would hover over
  620ms. `motion.js` therefore removes the driving attribute once an element has
  arrived and hands it back to the stylesheet.
- **Word splitting must be layout-neutral.** Wrap every word (never a mix of
  wrapped and bare words), keep the whitespace as real text nodes, and use
  `vertical-align: top` with matched padding/negative margin so descenders are
  not clipped. Prove it: the settled layout boxes must match the reduced-motion
  render exactly.
- **Keyboard focus and printing.** Focus can reach an unrevealed element and
  a reader can print before scrolling; both are covered by `:focus-within` and
  `@media print` guards in the motion section. Keep them if you add variants.

## Verifying

Serve the site (`python -m http.server 8765`) and drive it with the repo's
`playwright-core`; in a cloud sandbox point `executablePath` at the Chromium
under `PLAYWRIGHT_BROWSERS_PATH`, and abort requests to
`googletagmanager|chatniuexa|formcarry` so `DOMContentLoaded` is realistic.
Check all five: motion on, reduced motion, JavaScript off, mobile width, and
the `/en/` mirror. Two assertions matter most —

- after scrolling the whole page, **nothing** still has `opacity < 1`, a
  transform, or a non-zero clip;
- the settled layout boxes are **identical** to the reduced-motion render.

## Rolling motion out to another page

1. Set `motion=True` on that page's `Page`.
2. Add `attrs=mo(...)` to the sections it builds — most pages go through
   `render_sections()` in `gen/templates.py`, so adding it there covers a whole
   family of pages at once. Shared helpers already accept `attrs=` / `motion=`.
3. Rebuild, then run the five checks above on that page.
