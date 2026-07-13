# CLAUDE.md

Guidance for working in this repository.

## Project

PugliAI — a bilingual (Italian/English) **static** marketing site for an Italian AI consulting firm targeting SMBs (PMI). Vanilla HTML/CSS/JS with **no build process, no frameworks, and no runtime dependencies**. Files are served exactly as they are. The site's job is lead generation: contact-form submissions, free strategic sessions, accelerator applications.

See `PRODUCT.md` for brand register and positioning. The 2026 "olive-tree" dark redesign was deliberately reverted (kept in git history only) — never resurrect it; improve within the existing navy/gold system.

## Run locally & verify

```bash
python -m http.server 8000   # http://localhost:8000/index.html   (English: /en/index.html)
```

- `.claude/launch.json` defines preview servers: `pugliai` (port 8765) and `pugliai-8788` (fallback when 8765 is taken).
- For screenshots, use the repo's `playwright-core` (already in `node_modules`) with `chromium.launch({ headless: true, channel: 'msedge' })` — the bundled Chromium binary is **not** installed; the Edge channel works.

## Structure

- **Italian pages** live at the repo root (`servizi.html`, `chi-siamo.html`, …) — ~20 pages. Run `ls *.html` for the current list.
- **English pages** mirror them in `/en/` with English filenames (`servizi.html` → `en/services.html`, `contatti.html` → `en/contact.html`, etc.).
- **Assets** in `src/assets/` (`css/`, `js/`, `img/`). Every page links `src/assets/css/stylesheet.css` — that is the live stylesheet.
- **JS** (progressive enhancement, never required for core content): `language-switcher.js` (bilingual nav + URL mapping), `form-security.js`, `navigation.js`.
- **Funnel landings** (`sessione-strategica.html`, `en/strategy-session.html`) use a minimal header and their own conventions — follow the existing page, not the standard template.
- `src/components/stylesheet.html` is a design-system reference page — copy components from it manually; it is not part of the built site.

## The rule that matters: bilingual parity

Italian is the source of truth. **Every content change must be made on both the root (IT) page and its `/en/` mirror.** Never leave the two languages out of sync.

## Contact data

The only official contact is **sales@pugliai.com**. The company has **no public phone number** — never add one. Fake `+39` numbers and `@pugliai.it` addresses previously shipped in visible copy and JSON-LD and had to be purged; never invent contact data. The office addresses (Latiano BR and Bergamo) are real.

## Forms & analytics

- Lead forms POST to Formcarry (`https://formcarry.com/s/xWKwXtJvS4C`) with class `contact-form`; `form-security.js` automatically adds validation, a honeypot, and a CSRF token.
- Give every lead form `data-ajax="true"` (shows the inline `#form-success` message instead of navigating away) and a hidden `source` field naming the page (e.g. `contatti`, `landing-sessione-strategica`) so leads are attributable.
- GA4 (`G-L7711R1PDP`) is on every page. Fire `gtag('event', 'generate_lead', { source })` when `#form-success` becomes visible — copy the MutationObserver pattern from `contatti.html`.

## SEO / structured data

Every page carries Schema.org JSON-LD in `<head>`. Keep it in sync with the visible content (never ship FAQ schema without a visible FAQ) and verify it still parses (`JSON.parse`) after editing. Each page also needs canonical, hreflang, and OG/Twitter meta.

## Design tokens

Use these CSS custom properties (defined in `stylesheet.css`) rather than hard-coded values:

```css
--primary-navy: #0A1628;
--secondary-navy: #1E293B;
--accent-gold: #D4A017;        /* text-safe */
--accent-gold-bright: #FFD700; /* decorative only */
--accent-emerald: #10B981;
--accent-platinum: #E5E7EB;
```

Conventions: BEM-like naming (`.block__element--modifier`), mobile-first responsive, glassmorphism with `backdrop-filter` fallbacks, target WCAG 2.1 AA. Gradient text is banned — the `.text-gradient-*` classes intentionally render solid colors; don't reintroduce `background-clip: text`.

## Adding a page

1. Create the IT page at the root and the EN page in `/en/`.
2. Add `hreflang` links (`it`, `en`, `x-default`), canonical, OG/Twitter meta, and JSON-LD in both `<head>`s.
3. Add both URLs to `sitemap.xml`.
4. Update the mapping in `language-switcher.js` if the page belongs in the language toggle.

## Deployment

Pushing to `main` auto-deploys to GitHub Pages (domain: pugliai.com). No build step. Commit and push only when asked.

## Italian market context

Audience is Italian PMI: EUR (€) pricing, GDPR-relevant, CET/CEST. Italian copy should read as current, professional Italian — avoid gratuitous anglicisms ("sfide", not "challenge"). Specialized agents in `.claude/agents/`: `italian-tech-copywriter` (Italian tech copy) and `ui-ux-designer` (design-system/UX work).
