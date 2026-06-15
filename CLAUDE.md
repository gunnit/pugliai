# CLAUDE.md

Guidance for working in this repository.

## Project

PugliAI — a bilingual (Italian/English) **static** website for an Italian AI consulting firm targeting SMBs (PMI). Vanilla HTML/CSS/JS with **no build process, no frameworks, and no runtime dependencies**. Files are served exactly as they are.

## Run locally

```bash
python -m http.server 8000   # http://localhost:8000/index.html   (English: /en/index.html)
```

Use the Playwright MCP tools for browser testing and screenshots.

## Structure

- **Italian pages** live at the repo root (`servizi.html`, `chi-siamo.html`, …) — ~20 pages. Run `ls *.html` for the current list.
- **English pages** mirror them in `/en/` with English filenames (`servizi.html` → `en/services.html`, `contatti.html` → `en/contact.html`, etc.).
- **Assets** in `src/assets/` (`css/`, `js/`, `img/`). Every page links `src/assets/css/stylesheet.css` — that is the live stylesheet.
- **JS** (progressive enhancement, never required for core content): `language-switcher.js` (bilingual nav + URL mapping), `form-security.js`, `navigation.js`.
- `src/components/stylesheet.html` is a design-system reference page — copy components from it manually; it is not part of the built site.

## The rule that matters: bilingual parity

Italian is the source of truth. **Every content change must be made on both the root (IT) page and its `/en/` mirror.** Never leave the two languages out of sync.

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

Conventions: BEM-like naming (`.block__element--modifier`), mobile-first responsive, glassmorphism with `backdrop-filter` fallbacks, target WCAG 2.1 AA.

## Adding a page

1. Create the IT page at the root and the EN page in `/en/`.
2. Add `hreflang` links (`it`, `en`, `x-default`) in both `<head>`s.
3. Add both URLs to `sitemap.xml`.
4. Update the mapping in `language-switcher.js` if the page belongs in the language toggle.

## Deployment

Pushing to `main` auto-deploys to GitHub Pages (domain: pugliai.com). No build step. Commit and push only when asked.

## Italian market context

Audience is Italian PMI: phone format `+39`, EUR (€) pricing, GDPR-relevant, CET/CEST. Italian copy should read as current, professional 2025-era Italian. Specialized agents in `.claude/agents/`: `italian-tech-copywriter` (Italian tech copy) and `ui-ux-designer` (design-system/UX work).
