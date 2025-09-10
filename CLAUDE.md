# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for PugliAI, an Italian AI consulting company. The site is built with vanilla HTML, CSS, and JavaScript, emphasizing performance, accessibility, and modern web standards. The project is a **pure static website** with no build process or package manager - all files are directly served.

## Architecture

### Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Styling**: Modern CSS with custom properties, CSS Grid, Flexbox, and glassmorphism effects
- **Performance**: Resource optimization, intersection observers, requestAnimationFrame animations
- **Accessibility**: WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **PWA Features**: Service worker, manifest.json, installable app capabilities
- **SEO**: Structured data, meta tags, sitemap, robots.txt
- **Deployment**: Static files served directly (no build process)

### File Structure
```
/
├── index.html              # Main homepage
├── contatti.html           # Contact page
├── infrastrutture-ai.html  # AI Infrastructure service page
├── agenti-ai.html          # AI Agents service page
├── consulenza-strategica.html # Strategic consulting page
├── team.html               # Team page
├── mission.html            # Mission page
├── [sector].html           # Sector-specific pages (manifatturiero, moda-lusso, etc.)
├── script.js               # Main JavaScript functionality
├── contact-form.js         # Contact form and FAQ handling
├── styles.css              # Global CSS styles
├── [page-specific].css     # Page-specific stylesheets
├── includes/
│   ├── footer.html         # Footer component (loaded via fetch)
│   ├── loader.js           # Include loader and scroll effects
│   └── menu.html           # Navigation menu (loaded via fetch)
├── img/                    # Images directory
│   ├── clients/            # Client logos
│   ├── partners/           # Partner logos
│   ├── team/               # Team photos
│   └── pittogramma.png     # Main logo
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for caching
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
├── instructions.md         # Detailed project specifications
└── tasks.md               # Task tracking file
```

## Commands

**Note: This is a static website with no build process.** All files are served directly.

### Development
```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or 
live-server .
```

### Testing
```bash
# Validate HTML
html-validator --file index.html
# or use online W3C validator

# Check for broken links
linkchecker http://localhost:8000

# Accessibility testing
axe-core --url http://localhost:8000
```

### Deployment
```bash
# No build required - upload files directly to web server
# All files in root directory are production-ready
```

## Key Features

### 1. Modern CSS Architecture
- CSS custom properties for theming
- Glassmorphism effects with backdrop-filter
- CSS Grid and Flexbox for layouts
- Container queries and CSS containment for performance
- Responsive design with mobile-first approach

### 2. Performance Optimizations
- Critical CSS inlined in HTML head
- Lazy loading for images
- Resource hints (preload, prefetch, preconnect)
- Service worker for caching
- Optimized animations with requestAnimationFrame

### 3. Interactive Elements
- Smooth scroll behavior with custom easing
- Intersection Observer for scroll animations
- Custom cursor effects (desktop only)
- Number counter animations with easing
- Parallax effects and floating elements
- Cookie consent banner with GDPR compliance
- Hamburger menu animation
- Glassmorphism hover effects

### 4. Form Handling
- Contact form with comprehensive validation
- Real-time field validation
- Italian phone number validation patterns
- GDPR compliance checkboxes
- Auto-save functionality (optional)
- Form submission with loading states
- Modal dialogs for success/error states

## Development Guidelines

### Adding New Pages
1. Follow the existing HTML structure with semantic elements
2. Include the critical CSS in the head section
3. Use the same navigation structure from `includes/menu.html`
4. Maintain consistent footer structure
5. Ensure proper meta tags for SEO

### Styling Conventions
- Use CSS custom properties from `:root` for colors and spacing
- Follow BEM-like naming for specific components
- Use semantic class names (e.g., `.hero`, `.services`, `.contact-form`)
- Maintain consistent spacing using the `--space-*` variables
- Use CSS Grid for complex layouts, Flexbox for simple ones

### JavaScript Patterns
- Use modern ES6+ features with fallbacks
- Implement feature detection before using APIs
- Use `requestAnimationFrame` for smooth animations
- Debounce/throttle scroll and resize events (see `throttle()` function in script.js)
- Implement progressive enhancement
- Use `requestIdleCallback` for non-critical components
- Initialize components only when needed (performance optimization)

### Performance Considerations  
- All critical CSS is inlined in HTML head
- Images use lazy loading with intersection observers
- CSS containment (`contain: layout style paint`) for performance
- Optimized animations with hardware acceleration
- Feature detection for modern APIs with fallbacks

## Common Tasks

### Testing
- Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Validate HTML with W3C validator
- Test responsive design on various devices
- Check accessibility with screen readers
- Verify PWA functionality

### Deployment
- Minify CSS and JavaScript files
- Optimize images for web
- Update service worker cache version
- Test all forms and interactive elements
- Verify all links and assets load correctly

### Maintenance
```bash
# Update client logos
# Add new logos to img/clients/ directory
# Update index.html client logos section

# Update partner logos  
# Add new logos to img/partners/ directory
# Update index.html partners section

# Update contact information
# Edit includes/footer.html for footer contact info
# Edit contatti.html for contact page details

# Content updates
# Edit HTML files directly (no build process)
# Update includes/menu.html for navigation changes
# Modify testimonials in index.html
```

## Important Notes

### Italian Localization
- All content is in Italian
- Phone validation uses Italian number formats
- Address formats follow Italian conventions
- GDPR compliance is implemented for EU requirements

### Brand Guidelines
- Primary colors: Blue (#0A1628), Gold (#FFD700), Emerald (#00E676)
- Typography: Inter for headings, Source Sans Pro for body
- Logo: `img/pittogramma.png` is the main brand element
- Maintain professional, corporate tone throughout

### Accessibility Features
- Skip links for keyboard navigation
- Proper heading hierarchy (h1-h6)
- Alt text for all images
- Color contrast ratios meet WCAG standards
- Focus indicators for all interactive elements

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Component Architecture

### Include System
The project uses a JavaScript-based include system for shared components:
- `includes/menu.html` - Navigation menu structure
- `includes/footer.html` - Footer content
- `includes/loader.js` - Handles loading includes and basic scroll effects

**Important:** The includes are loaded via `fetch()` requests, not server-side includes. Pages should have placeholders:
```html
<div id="menu-include"></div>
<div id="footer-include"></div>
```

### JavaScript Initialization
Components are initialized in a specific order for performance:
1. **Critical components** (cookie banner, mobile menu, accessibility)
2. **Non-critical components** (via `requestIdleCallback` when supported)
3. **Desktop-only components** (custom cursor effects)

### CSS Architecture
- **CSS Custom Properties**: All colors, spacing, and animations defined in `:root`
- **Glassmorphism Effects**: Using `backdrop-filter` with fallbacks
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Performance**: Critical CSS inlined, non-critical CSS loaded asynchronously

### Key JavaScript Functions
- `initCookieBanner()` - GDPR-compliant cookie consent
- `initMobileMenu()` - Hamburger menu with animations
- `initNumberCounters()` - Animated number counting with easing
- `initScrollAnimations()` - Intersection Observer-based animations
- `initFormHandling()` - Contact form validation and submission
- `initServiceWorker()` - PWA service worker registration
- `initParallaxEffects()` - Smooth parallax scrolling effects
- `initCursorEffects()` - Custom cursor animations (desktop only)
- `initLazyLoading()` - Image lazy loading with intersection observers

### Page-Specific Architecture
The website uses a modular approach where each major service/sector has its own dedicated HTML and CSS files:
- **Service pages**: `infrastrutture-ai.html`, `agenti-ai.html`, `consulenza-strategica.html`
- **Sector pages**: `manifatturiero.html`, `moda-lusso.html`, `servizi-finanziari.html`, etc.
- **Company pages**: `team.html`, `mission.html`, `contatti.html`
- Each page maintains the same header/footer structure via the include system
- Page-specific CSS files provide targeted styling while inheriting from `styles.css`