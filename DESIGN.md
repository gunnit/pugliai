# PugliAI — DESIGN.md

> Design system for the PugliAI website. Drop-in spec for AI agents and contributors:
> read this before building or editing any page so the UI stays consistent.
> Source of truth in code: `src/assets/css/brand.css` (tokens) + `src/assets/css/landing.css`
> (layout) + `src/assets/css/pugliai-site.css` (overrides). Tagline: **"Radici nel
> territorio. Intelligenza nel futuro."** (Roots in the land. Intelligence in the future.)

## 1. Visual Theme & Atmosphere

Cinematic, **dark-first** and editorial — frontier AI that still feels rooted in Italy.
The signature element is a **procedural, animated olive tree** drawn on `<canvas>` in an
orthogonal "circuit-trace" style: roots → trunk → branches → glowing AI nodes. The brand
metaphor maps 1:1 to the company: **roots = territory & data, trunk = infrastructure,
branches = AI agents, leaf-nodes = intelligence**.

The page breathes by **alternating dark and light sections** (not by heavy shadows):
deep "Notte" navy sections carry the product story; occasional light "paper" sections act
as calm, editorial breaks (the metaphor explainer, testimonials). Ambient **aurora** blurred
green/blue radial glows and a faint film **grain** sit behind dark hero/finale sections.

Warmth comes from a single tertiary earth accent (Terra Rossa) used sparingly (e.g. stars),
never as a primary. Do **not** revert to the legacy navy/gold theme.

## 2. Color Palette & Roles

```
/* Primary — meaning matters */
--green     #1B9032   Ulivo. Roots, growth, Made-in-Italy. Primary brand.
--green-700 #147026   --green-800 #0E5A1E   --green-400 #34B14C (serif accent on dark)
--green-200 #A8DCB4   --green-50  #EAF5ED
--blue      #135CA9   Intelligenza. AI, technology, trust.
--blue-700  #0E4A88   --blue-800  #0A3A6B   --blue-400  #3E84CB
--blue-200  #A9C8E6   --blue-50   #E9F1FA

/* Neutrals — navy demoted to deep neutral "Notte" */
--notte     #0B1A2D   primary dark surface     --notte-800 #102740 (panel)
--ink       #0E1B2C   text on light            --slate #3A4A5E (secondary text)
--mist      #6B7C8F   muted                    --cloud #DCE3EC   --line #E7ECF2
--paper     #F6F8FB   light surface            --white #FFFFFF
#081320     darkest surface (footer, sec--darker)

/* Tertiary — sparingly */
--terra     #C2632F   Puglia soil / star ratings only

/* Signature gradient: roots -> canopy (use for primary CTAs, accents) */
--grad: linear-gradient(118deg, #1B9032 0%, #1A7B6E 48%, #135CA9 100%);
--grad-text (text clip): linear-gradient(100deg, #34B14C 0%, #4fd2c0 42%, #3E84CB 100%);
```

Role rules: **green = roots/growth, blue = intelligence/AI**; the gradient is the brand
"voltage" — reserve it for primary CTAs, key numbers and accent fills. Color is scarce on
individual elements, generous on full-bleed moments (hero, finale, accelerator band).

## 3. Typography

- **Sans — `Schibsted Grotesk`** (400–900): all UI, body, headings. Body 400, line-height ~1.6.
- **Serif — `Newsreader`** italic (300–500): **accent words only** inside headings, prices,
  small "translation" tags. Never full paragraphs.
- Load both via Google Fonts; system fallbacks `system-ui` / `Georgia`.

```
H1   clamp(40px, 5.6vw, 80px)  weight 700  letter-spacing -.035em  line-height 1.0
H2   clamp(30px, 3.9vw, 52px)  weight 700  letter-spacing -.028em
Lead clamp(16–17px, 1.5vw, 19–20px)  color --txt-dim on dark / --slate on light
Eyebrow (.eyebrow-lux) 12px / 600 / .22em tracking / UPPERCASE / blue-200, with a gradient tick
```
Serif accent color: **`--green-400` on dark surfaces, `--blue` on light surfaces.**
Numbers use `font-variant-numeric: tabular-nums`.

## 4. Component Stylings

- **Nav** `.nav` — fixed, transparent at top; on scroll adds `.scrolled` → glass
  (`backdrop-filter: blur(16px)`) + hairline border. Logo rendered **white** on dark
  (`filter: brightness(0) invert(1)`). Links collapse to a burger `<` 1080px.
- **Buttons** `.btn` — radius 11px, weight 600.
  - `.btn--grad` primary: the brand gradient, soft glow shadow, lifts 2px on hover.
  - `.btn--ghost`: translucent white, hairline border. `.btn--sm` for compact.
- **Section header** `.shead` — centered eyebrow + H2 (with serif accent) + lead, max 760px.
- **Stats** `.stats` — 4-col hairline grid; big gradient/plain numbers (count-up via JS).
- **Service cards** `.gcard` — translucent glass cards; on hover lift + 1px gradient border
  (mask trick); icon tile 54px; arrow link `.gcard__link` in green-400.
- **On-premise cards** `.pcard` (`--g` green / `--b` blue) — glow blob, tag pill, check list.
- **Accelerator band** `.accel` — large rounded gradient panel with corner glows + feature rows.
- **Process** `.proc` — 4-step timeline, serif roman numerals in 68px dots on a connecting line.
- **Testimonials** `.tcard` — white cards on a light section, terra stars, gradient avatar.
- **Finale** `.finale` — full dark CTA with a second canvas tree.
- **Footer** `.foot` — `#081320`, brand + link columns + legal bar.

## 5. Layout Principles

- Container `.shell` — `max-width: 1240px`, padding `0 40px` (`0 22px` mobile).
- Section rhythm: `.sec` = `130px` vertical padding (`.sec--tight` = 96px).
- Surface classes: `.sec--dark` (notte) · `.sec--darker` (#081320) · `.sec--panel` (notte-800)
  · `.sec--light` (paper, dark text). Alternate dark↔light for pacing.
- Grids: services `repeat(3,1fr)`, products/`.prod` `1fr 1fr`, process/stats `repeat(4,1fr)`.
- Anchored sections get `scroll-margin-top` to clear the fixed nav.

## 6. Depth & Elevation

Depth comes from **light, blur and gradient**, not heavy drop shadows.
`--shadow-sm/md/lg` for cards; glass blur for nav & mobile menu; aurora = huge blurred radial
glows (`filter: blur(70px)`, `mix-blend-mode: screen`); gcard hover reveals a 1px gradient
border. Keep shadows subtle; let the canvas tree + aurora carry the atmosphere.

## 7. Do's and Don'ts

**Do**
- Keep dark `--notte` sections dominant; use light `--paper` sections as deliberate breaks.
- Use the gradient + serif italic for *one* accent idea per heading.
- Render the logo white on dark chrome; keep the full-colour logo on light surfaces.
- Respect `prefers-reduced-motion` (reveals + aurora already disable).

**Don't**
- Don't reintroduce the legacy navy/gold palette or the old `stylesheet.css`.
- Don't use serif for body copy, or more than ~1 serif accent per heading.
- Don't add a 3rd brand surface tone or saturated cyan as accent — green/blue/Notte only.
- Don't run more than ~2 canvas trees per page (perf).

## 8. Responsive Behavior

- Mobile-first; breakpoints used: 1080 (hide nav links), 980 (show burger, hide nav CTA),
  920 (hero → 1 col), 900/860 (grids → fewer cols), 720 (tighten padding), 460 (stack stats).
- Mobile menu `.mmenu` is a full-screen glass overlay toggled by `#burger`.
- Test at 375 / 768 / 1280. Targets: LCP < 2.5s, CLS < 0.1.

## 9. Agent Prompt Guide — building / migrating a page

1. **Preserve the existing `<head>`** verbatim (Google Analytics, hreflang, canonical,
   Open Graph, JSON-LD). Only swap: Inter font → Schibsted Grotesk + Newsreader, and
   `stylesheet.css` → `brand.css` + `landing.css` + `pugliai-site.css`. (Path prefix `../`
   for pages in `/en/`.) Keep `<html lang="it|en">` correct.
2. Open `<body>` with a skip-link, then the shared **nav** and the **mobile menu** partials.
   Interior pages link nav items to real pages (`servizi.html`, `prodotti.html`,
   `acceleratore.html`, `#process`) + a `contatti.html` CTA; homepage uses on-page anchors.
3. Give interior pages a **compact page-header** (eyebrow + H1 + lead on `.sec--dark`,
   optional small aurora) instead of the full hero canvas.
4. Reflow content into `.sec--*` sections, each led by a `.shead`. Use `.gcard` for
   feature/benefit triplets, `.pcard` for product offers, `.proc` for steps, `.tcard` for
   quotes. Primary CTA = `.btn--grad`; secondary = `.btn--ghost`.
5. Add `class="reveal"` (+ optional `data-d="1..4"`) to blocks that should fade in on scroll.
6. Close with the shared **footer**, then load `tree-canvas.js` + `pugliai-landing.js`
   (only include `tree-canvas.js` if the page actually has a `#heroTree`/`#finaleTree` canvas).
7. Language stays **URL-based**: IT at root, EN under `/en/`; the EN/IT toggle is plain links.
8. Verify: no console errors, fonts loaded, dark `--notte` background, all links resolve.
