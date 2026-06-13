---
name: PugliAI
description: Bilingual marketing site for an Italian AI consultancy — institutional navy ground, logo-anchored green and blue brand colors
colors:
  logo-green: "#1B9032"
  logo-blue: "#135CA9"
  midnight-navy: "#0A1628"
  slate-navy: "#1E293B"
  emerald: "#10B981"
  legacy-gold: "#D4A017"
  bright-gold: "#FFD700"
  platinum: "#E5E7EB"
  text-white: "#FFFFFF"
  text-slate: "#CBD5E1"
  text-muted: "#94A3B8"
typography:
  display:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  4xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.legacy-gold}"
    textColor: "{colors.midnight-navy}"
    rounded: "{rounded.lg}"
    padding: "1rem 2rem"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.text-white}"
    rounded: "{rounded.lg}"
    padding: "1rem 2rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.legacy-gold}"
    rounded: "{rounded.lg}"
    padding: "1rem 2rem"
  card:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.text-slate}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  input:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.text-white}"
    rounded: "{rounded.md}"
    padding: "1rem"
---

# Design System: PugliAI

## 1. Overview

**Creative North Star: "L'Ulivo Circuitale" (The Circuit Olive)**

The PugliAI logo draws Puglia's olive tree as a circuit diagram: black traces branching upward, blue leaves as nodes, "Pugli" in living green and "Ai" in confident blue. That object is the whole brand in miniature — Italian heritage engineered with precision — and it is the anchor for every color decision. The interface around it is a deep institutional environment: midnight navy (#0A1628) grounds, generous whitespace and typographic confidence carry the premium positioning, and the logo's green (#1B9032) and blue (#135CA9) are the canonical brand voices.

The system explicitly rejects the looks named in PRODUCT.md: generic AI-startup SaaS (purple gradients, 3D blobs), Big-4 sterility, cheap agency templates (carousels, counters, icon soup), and crypto-style neon hype. Authority is carried by evidence — real numbers, certifications, case studies — framed calmly, never shouted. Density is low: this is an executive reading surface, not a dashboard.

**Key Characteristics:**
- Dark institutional ground (midnight navy), never "dark mode for coolness"
- Logo-anchored brand color: green for growth/identity, blue for intelligence/trust
- One typeface (Inter) with strong weight contrast doing all hierarchy work
- Glass surfaces tamed to structure, not decoration
- Evidence-first composition: metrics and proof framed with restraint

## 2. Colors

A deep navy ground with the logo's green and blue as the canonical accents; gold survives as a legacy highlight under contraction.

### Primary
- **Olive Green** (#1B9032): The logo's "Pugli" green. The brand's identity color — use for primary brand moments, growth/result signals, and as the preferred accent in new work. Its tints carry success states.
- **Circuit Blue** (#135CA9): The logo's "Ai" blue. Intelligence and trust — use for informational accents, links on light surfaces, and technical contexts. Pairs with Olive Green as the two-voice brand chord.

### Secondary
- **Emerald** (#10B981): The in-CSS working green (success states, badges, positive metrics). Visually adjacent to Olive Green; treat it as Olive Green's UI-state variant, not a third voice.

### Neutral
- **Midnight Navy** (#0A1628): Body ground. All pages sit on a navy gradient built from this.
- **Slate Navy** (#1E293B): Raised surface tone and dark text on light surfaces.
- **Pure White** (#FFFFFF): Headings and primary text on navy.
- **Slate Text** (#CBD5E1): Body text on navy (passes AA at 16px).
- **Muted Slate** (#94A3B8): Captions and tertiary text only — never long body copy.
- **Platinum** (#E5E7EB): Light decorative strokes and icons.

### Legacy
- **Legacy Gold** (#D4A017, text-safe) and **Bright Gold** (#FFD700, decorative only): The current site uses gold heavily (CTAs, gradients, glows). Gold is not in the logo. Direction (decided 2026-06-12): do not expand gold's footprint; new accents prefer Olive Green and Circuit Blue. Gold remains acceptable on existing CTAs until a deliberate migration pass.

### Named Rules
**The Logo Anchor Rule.** Every new color decision traces back to the logo: green #1B9032, blue #135CA9, on navy. If a proposed accent isn't one of those (or a tint of them), it needs a reason.
**The One Glow Rule.** Glow shadows (gold or otherwise) appear on at most one element per viewport — the primary CTA. Everywhere else, depth comes from borders and tonal steps.

## 3. Typography

**Display Font:** Inter (with -apple-system, system-ui fallback)
**Body Font:** Inter (same family; hierarchy via weight and size)

**Character:** A single neutral grotesque worked hard: extra-bold tight headlines against regular, relaxed body copy. Institutional clarity over typographic theatre — the voice of a firm that lets numbers talk.

### Hierarchy
- **Display** (800, clamp(2rem, 5vw, 3.5rem), 1.1): Page hero only. One per page. Solid color — never gradient-filled.
- **Headline** (700, 2.25rem / --font-size-4xl, 1.2): Section titles. Major sections only; quiet sections step down one size.
- **Title** (600, 1.25–1.5rem, 1.4): Card titles, FAQ questions.
- **Body** (400, 1rem–1.125rem, 1.6–1.7): Max line length 70ch. Color #CBD5E1 on navy, #1E293B on light.
- **Label** (500–600, 0.875rem, +0.05em, uppercase): Badges, stat labels, table headers. Four words or fewer.

### Named Rules
**The Solid Ink Rule.** Headings are set in a single solid color (white, green, or blue). Gradient-filled text (background-clip: text) is prohibited in new work and removed where found.

## 4. Elevation

Structural glass, not decorative glass. The fixed header and dropdown menus may keep `backdrop-filter: blur(20px)` — they float over content and the blur is doing real work. Cards and content surfaces sit flat: a tonal step up from the ground (rgba(255,255,255,0.08)) with a 1px hairline border (rgba(255,255,255,0.16)). Shadows respond to state; they are not resting decoration.

### Shadow Vocabulary
- **Hairline** (`border: 1px solid rgba(255,255,255,0.16)`): The default card edge. Most surfaces need nothing more.
- **Hover lift** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)`): Interactive cards on hover, paired with a ≤4px translateY.
- **Overlay** (`box-shadow: 0 10px 40px rgba(0,0,0,0.4)`): Dropdowns, modals, anything that floats above the page.
- **CTA glow** (`box-shadow: 0 0 20px rgba(255,215,0,0.3)`): The single primary CTA per viewport, per the One Glow Rule.

### Named Rules
**The Nav-Only Blur Rule.** `backdrop-filter` belongs to the fixed navigation and floating overlays. Content cards use flat tonal surfaces; if a card needs blur to be legible, the layering underneath is the problem.

## 5. Components

### Buttons
- **Shape:** Soft rectangle (1rem radius); pill (9999px) reserved for the nav CTA.
- **Primary:** Gold on navy (#D4A017 → navy text), padding 1rem 2rem, weight 600. Hover: 2–3px lift, shadow deepens. No scale transforms.
- **Secondary:** Tonal surface (rgba(255,255,255,0.08)) with hairline border, white text. Hover: surface lightens, border picks up accent.
- **Outline:** 2px accent border, transparent fill; fills with accent on hover.
- **Focus:** 3px emerald outline, 2px offset (shared global rule).

### Cards / Containers
- **Corner Style:** 1.5rem radius.
- **Background:** rgba(255,255,255,0.08) tonal step; special emphasis via a tinted border (green or blue at 30% alpha), not a thicker stripe.
- **Shadow Strategy:** Flat at rest (hairline border only); hover lift per Elevation.
- **Internal Padding:** 2rem (1.5rem below 768px).
- **Character:** Refined and assured — calm hovers, no glows, no scale-jumps.

### Inputs / Fields
- **Style:** rgba(255,255,255,0.05) fill, hairline border, 0.75rem radius, 1rem padding.
- **Focus:** Border shifts to gold with a soft 3px ring (rgba(212,160,23,0.2)); no outline removal without replacement.
- **Error / Success:** Red #EF4444 / emerald border plus message line with icon prefix; never color alone.

### Navigation
- **Style:** Fixed glass header (blur 20px, rgba(10,22,40,0.95)), hairline bottom border. Links: slate text, white on hover, 2px gold underline indicator for active.
- **Mobile:** Slide-in panel from right, 48px touch targets, accordion sub-menus.

### Stat strip (signature)
Proof numbers presented as a quiet band: large solid-color figure (700–800 weight), small uppercase label, hairline dividers between items. Never four glass cards with gradient numbers — the data is the design.

## 6. Do's and Don'ts

### Do:
- **Do** anchor every accent decision to the logo: Olive Green #1B9032 and Circuit Blue #135CA9 on Midnight Navy.
- **Do** set headings in solid white, green, or blue — emphasis via weight and size.
- **Do** keep body text ≥16px at ≥4.5:1 contrast (#CBD5E1 or lighter on navy) for the executive audience.
- **Do** use hairline borders and tonal steps for depth; reserve blur for the fixed nav and overlays.
- **Do** vary section rhythm: major sections breathe (clamp(3.5rem, 8vw, 6rem) vertical padding), supporting sections compress.
- **Do** maintain Italian/English parity in every component and layout change.

### Don't:
- **Don't** build "generic AI-startup SaaS": purple gradients, identical feature-card grids, stock 3D blobs, buzzword copy (PRODUCT.md anti-reference, verbatim).
- **Don't** drift into "Big-4 corporate consulting" sterility or "cheap agency template" patterns: carousels everywhere, animated counters, icon soup (PRODUCT.md anti-references).
- **Don't** use "crypto/tech-bro hype": neon glows, dark-mode-for-coolness, FOMO claims (PRODUCT.md anti-reference).
- **Don't** fill text with gradients (`background-clip: text`) — prohibited everywhere, including stat numbers and prices.
- **Don't** use colored side-stripes (`border-left` > 1px) on callouts, alerts, or list items; use full hairline borders or background tints.
- **Don't** stack glass: no blur-on-blur, no cards inside cards.
- **Don't** let gold spread: no new gold gradients, gold glows, or gold scrollbars. One glow per viewport, on the primary CTA only.
- **Don't** repeat one identical card grid as the answer to every section; if three sections in a row are icon+heading+text grids, restructure one.
