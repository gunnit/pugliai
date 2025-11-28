# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PugliAI website - a bilingual (Italian/English) static website for an Italian AI consulting company specializing in AI infrastructure, strategic consulting, and industry-specific AI solutions for SMBs (PMI - Piccole e Medie Imprese). The site is built with vanilla HTML, CSS, and JavaScript without any build process or frameworks.

## Commands

### Development
```bash
# Serve the site locally (Italian pages)
python -m http.server 8000
# Access at http://localhost:8000/index.html

# For English pages
# Navigate to http://localhost:8000/en/index.html
```

### Testing
```bash
# Run Playwright screenshot utilities
node quick_screenshot.js           # Quick page screenshots
node screenshot_pages.js           # Batch screenshot generation
node src/assets/js/screenshot_stylesheet.js  # Component library screenshots

# Test pages available at:
# http://localhost:8000/src/tests/test_page.html
# http://localhost:8000/src/tests/test_dropdown.html
```

### Deployment
```bash
# Commit changes
git add .
git commit -m "Your descriptive message"

# Push to GitHub (triggers auto-deployment to GitHub Pages)
git push origin main
```

## Architecture

### High-Level Structure

This is a **static website** with no build process. The architecture follows a traditional multi-page approach:

- **Italian pages** (root level): Primary content - 20+ HTML pages
- **English pages** (`/en/` directory): Complete mirror of Italian pages
- **Assets** (`/src/assets/`): Organized into `/css/`, `/img/`, `/js/`
- **Component library** (`/src/components/stylesheet.html`): Design system reference
- **Tests** (`/src/tests/`): Manual testing pages for components

### Bilingual Architecture

The site supports Italian (default) and English through a mirrored directory structure:

```
/
├── index.html                    # Italian homepage
├── servizi.html                  # Italian services
├── chi-siamo.html               # Italian about
├── [20+ other Italian pages]
└── /en/
    ├── index.html               # English homepage
    ├── servizi.html             # English services (translated)
    └── chi-siamo.html           # English about (translated)
```

Language switching is handled by `src/assets/js/language-switcher.js` which maintains URL structure across languages.

### CSS Architecture

Two stylesheet variants exist:
- **stylesheet.css** (~72KB): Main stylesheet with full design system
- **stylesheet-optimized.css** (~52KB): Optimized variant for production

Key architectural patterns:
- CSS custom properties for design tokens (colors, spacing, typography)
- BEM-like naming convention for components
- CSS Grid for page layouts, Flexbox for component internals
- Glassmorphism design pattern with `backdrop-filter` and fallbacks
- Mobile-first responsive design

### Design System (Color Palette)

```css
--primary-navy: #0A1628;
--secondary-navy: #1E293B;
--accent-gold: #D4A017;      /* Text-safe variant */
--accent-gold-bright: #FFD700; /* Decorative only */
--accent-emerald: #10B981;
--accent-platinum: #E5E7EB;
```

### JavaScript Architecture

Pure vanilla JavaScript - no frameworks or build tools:
- **language-switcher.js**: Bilingual navigation and URL mapping
- **form-security.js**: Client-side form validation and security
- **Playwright scripts**: Screenshot generation for testing/documentation

Progressive enhancement approach - JavaScript enhances but isn't required for core functionality.

## Key Pages and Components

### Main Pages (both Italian and English versions exist)

**Core Navigation:**
- `index.html` - Homepage with hero, services overview, testimonials, team
- `servizi.html` - Services overview
- `chi-siamo.html` - About us / team page
- `settori.html` - Industry sectors

**Service Pages:**
- `agenti-ai.html` - AI Agents service
- `infrastrutture-ai.html` - AI Infrastructure
- `consulenza-strategica.html` - Strategic Consulting
- `architettura-tecnica.html` - Technical Architecture
- `poc-framework.html` - POC Framework

**Tools & Resources:**
- `roi-calculator.html` - ROI Calculator tool
- `investimenti-ai.html` - Pricing and investment packages
- `guida-ai-ceo-2025.html` - CEO Guide 2025
- `casi-studio.html` - Case Studies
- `risorse-formative.html` - Training Resources

**Industry-Specific:**
- `manifatturiero.html` - Manufacturing
- `moda-lusso.html` - Fashion & Luxury
- `servizi-finanziari.html` - Financial Services

**Legal & Utility:**
- `privacy.html`, `cookie.html`, `termini.html` - Legal pages (bilingual)
- `contatti.html` - Contact form
- `login.html`, `success.html` - Utility pages

### Component Library

`/src/components/stylesheet.html` contains the design system reference with:
- Typography scales and font pairings (Inter font family)
- Button variants (primary, secondary, ghost, with icons)
- Card components with glassmorphism effects
- Form inputs and validation states
- Navigation patterns
- Pricing tables
- Testimonial cards
- Grid systems

This is a **reference file**, not a build artifact - copy components manually into pages.

## Development Guidelines

### Content Updates
- **Italian content**: Update root-level HTML files
- **English content**: Update corresponding files in `/en/` directory
- Maintain parity between Italian and English versions
- Always update both language versions for consistency

### Styling Conventions
- Use CSS custom properties from the design system
- Follow BEM-like naming: `.component-name__element--modifier`
- Ensure glassmorphism effects have appropriate fallbacks
- Test responsive behavior at mobile (320px+), tablet (768px+), desktop (1024px+)
- Maintain WCAG 2.1 AA accessibility compliance

### Adding New Pages
1. Create Italian version at root level (e.g., `nuova-pagina.html`)
2. Create English version in `/en/` directory (e.g., `en/nuova-pagina.html`)
3. Add hreflang tags in both versions:
   ```html
   <link rel="alternate" hreflang="it" href="https://pugliai.com/nuova-pagina.html">
   <link rel="alternate" hreflang="en" href="https://pugliai.com/en/nuova-pagina.html">
   <link rel="alternate" hreflang="x-default" href="https://pugliai.com/nuova-pagina.html">
   ```
4. Update `sitemap.xml` with both URLs
5. Update navigation in language-switcher.js if needed

### Testing
- Use Playwright screenshot scripts to capture visual state before/after changes
- Test language switching manually
- Validate forms with `form-security.js` patterns
- Check responsive behavior across breakpoints
- Test glassmorphism effects in Safari, Chrome, Firefox

## Deployment

**Hosting:** GitHub Pages
**Domain:** pugliai.com
**Auto-deployment:** Enabled on `main` branch push

Push to GitHub main branch triggers automatic deployment via GitHub Pages - no manual deployment steps required.

## GitHub Actions

Two Claude Code workflows are configured:

1. **claude.yml** - PR assistant triggered by @claude mentions in issues/PRs
2. **claude-code-review.yml** - Automatic code review on all pull requests

## Custom AI Agents

Two specialized agents are defined in `.claude/agents/`:

1. **ui-ux-designer.md** - For design system work, component creation, and UX improvements
2. **italian-tech-copywriter.md** - For Italian tech content, ensuring modern 2025 linguistic standards and GDPR compliance

Use these agents for specialized tasks by invoking them through Claude Code.

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Italian Market Context

- Primary audience: Italian SMBs (PMI - Piccole e Medie Imprese)
- Phone format: Italian (+39)
- Address format: Italian conventions
- GDPR compliance required for EU regulations
- Pricing in EUR (€)
- Business hours: Italian time zone (CET/CEST)

## Important Notes

- **No build process** - files are served as-is, no bundlers or transpilers
- **Vanilla JavaScript only** - no npm packages at runtime (Playwright is dev-only)
- **Manual component integration** - copy from stylesheet.html, no component framework
- **Git workflow** - Always push changes to GitHub after completing tasks
- **Bilingual maintenance** - Keep Italian and English versions in sync
