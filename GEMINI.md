# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## Project Overview

PugliAI website - an Italian AI consulting company specializing in AI infrastructure, strategic consulting, and industry-specific AI solutions. The project is a static website built with HTML, CSS, and vanilla JavaScript.

## Current Structure

- **index.html**: The main landing page.
- **servizi.html**: The page describing the services offered.
- **chi-siamo.html**: The page about the company and the team.
- **stylesheet.css**: The main stylesheet for the website.
- **img/**: Directory containing all the images used in the website.
- **package.json**: Contains the project dependencies.

## Building and Running

To run the project locally, you can use a simple HTTP server.

```bash
python -m http.server 8000
```

Then navigate to `http://localhost:8000` in your browser.

## Development Conventions

- The project uses vanilla JavaScript (no frameworks).
- The styling is done with a single CSS file (`stylesheet.css`).
- The website is in Italian.
- The design is modern and uses glassmorphism effects.
- The `chi-siamo.html` page has been made production-ready by removing inline styles, adding alt tags to images, and fixing broken links.
- A new section has been added to `index.html` to introduce the team and link to the `chi-siamo.html` page.
- New classes have been added to `stylesheet.css` to accommodate the changes in `chi-siamo.html`. These classes are `hero-section`, `hero-description`, `team-image`, `cta-buttons`, and `cta-button-dark`.
- The headers in `index.html`, `chi-siamo.html`, and `servizi.html` have been standardized to match the header in `stylesheet.html`.

## GitHub Actions

The repository has GitHub Actions configured for:

- **claude.yml**: PR assistant for automated code review.
- **claude-code-review.yml**: Code review on pull requests.
- **azure-static-web-apps-wonderful-tree-0e3f15b03.yml**: Azure deployment pipeline.

## Deployment

The site is deployed to Azure Static Web Apps. A push to the main branch triggers an automatic deployment.
