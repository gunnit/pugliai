# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PugliAI website - an Italian AI consulting company specializing in AI infrastructure, strategic consulting, and industry-specific AI solutions. The project is undergoing a redesign with a new component library approach while maintaining the original site in the `old/` directory.

## Current Structure

### Active Development
- **stylesheet.html** - New luxury UI/UX component library with glassmorphism design
- **test_page.html** - Testing page for new components
- **test_dropdown.html** - Dropdown component testing
- **screenshot_stylesheet.js** - Utility for capturing component screenshots

### Legacy Site (old/)
The previous static website implementation is preserved in the `old/` directory, containing:
- Complete HTML pages for all services and sectors
- CSS files with glassmorphism effects
- JavaScript functionality including form handling and animations
- PWA features (service worker, manifest)

## Commands

### Development
```bash
# Serve the new component library locally
python -m http.server 8000
# Then navigate to http://localhost:8000/stylesheet.html

# For the old site
cd old && python -m http.server 8001
```

### Testing Components
```bash
# Open the component library
open http://localhost:8000/stylesheet.html

# Test dropdown functionality
open http://localhost:8000/test_dropdown.html

# Generate screenshots of components
node screenshot_stylesheet.js
```

## Architecture

### New Component Library (stylesheet.html)
- **Design System**: Luxury AI consulting theme with navy, gold, and emerald color palette
- **Typography**: Inter font family with carefully crafted weight scales
- **Components**: Buttons, cards, forms, navigation, pricing tables, testimonials
- **Glassmorphism**: Modern glass effects with backdrop filters
- **Responsive**: Mobile-first approach with CSS Grid and Flexbox
- **CSS Variables**: Comprehensive design tokens for colors, spacing, shadows

### Color Palette
```css
--primary-navy: #0A1628;
--secondary-navy: #1E293B;
--accent-gold: #FFD700;
--accent-emerald: #10B981;
--accent-platinum: #E5E7EB;
```

## Development Guidelines

### Component Development
1. All new components should be added to `stylesheet.html` first
2. Follow the established design system variables
3. Ensure responsive behavior across all breakpoints
4. Test glassmorphism effects in different browsers
5. Maintain accessibility standards (WCAG 2.1 AA)

### CSS Architecture
- Use CSS custom properties for all design tokens
- Implement BEM-like naming for component classes
- Utilize CSS Grid for layouts, Flexbox for component internals
- Apply `backdrop-filter` for glass effects with appropriate fallbacks

### JavaScript Patterns
- Use vanilla JavaScript (no frameworks)
- Implement smooth animations with `requestAnimationFrame`
- Add intersection observers for scroll-triggered animations
- Ensure progressive enhancement

## GitHub Actions

### Workflows
- **claude.yml** - PR assistant for automated code review
- **claude-code-review.yml** - Code review on pull requests
- **azure-static-web-apps-wonderful-tree-0e3f15b03.yml** - Azure deployment pipeline

## Deployment

The site is deployed to Azure Static Web Apps. Push to main branch triggers automatic deployment.

## Migration Status

The project is transitioning from individual HTML/CSS files to a component-based approach:
- ✅ Component library created (`stylesheet.html`)
- ✅ Design system established
- 🔄 Component extraction in progress
- ⏳ Page templates pending
- ⏳ Content migration pending

## Key Decisions

1. **No Build Process**: Maintaining static file approach for simplicity
2. **Component Library First**: Building reusable components before pages
3. **Design System**: Comprehensive CSS variables for consistency
4. **Progressive Enhancement**: JavaScript enhances but isn't required
5. **Accessibility**: WCAG 2.1 AA compliance is mandatory

## File Organization

```
/
├── stylesheet.html          # Component library and design system
├── test_*.html             # Component testing pages
├── screenshot_stylesheet.js # Screenshot utility
├── screenshots/            # Component screenshots
├── img/                   # Image assets
├── old/                   # Previous website implementation
│   ├── *.html            # All page files
│   ├── *.css             # Stylesheets
│   ├── *.js              # JavaScript files
│   └── includes/         # Shared components
└── .github/              # GitHub Actions workflows
```

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s  
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Italian Localization

- All content in Italian language
- Phone validation: Italian format (+39)
- Address format: Italian conventions
- GDPR compliance for EU regulations
- always push to github your modifications at the end of all the tasks