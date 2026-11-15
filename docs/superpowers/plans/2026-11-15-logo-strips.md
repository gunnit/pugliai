# Company and partner logo rows implementation plan

> **For agentic workers:** Use superpowers:executing-plans to implement this bounded change.

**Goal:** Add existing company logos below the homepage hero and a separate partner row beside the company story, in Italian and English.

**Architecture:** Keep the approved homepage tokens and use a shared Python renderer for both logo rows. Insert placeholders into the bilingual homepage templates; use existing local logo assets with responsive CSS and the existing entrance animation.

**Tech Stack:** Python static generator, HTML/CSS, existing Motion runtime.

**Spec:** User approved the logo strip beneath the hero and a separate ecosystem row near the company section on 15 November 2026. Refero Vercel (e6f9fc8d-c75d-44f1-bb39-0d979ce746e0) supplies monochrome logo alignment; Anthropic (47dd61f0-16b9-418b-8919-a4c6ca93eefa) supplies distinct logo and company-story placement. The existing PugliAI design owns colors, typography and spacing.

## Global Constraints

- Reuse six company logos: MyCIA, Tiledesk, bebit, Maxlube, DBridge and BCC Studio.
- Keep the six named partner assets in their own row labelled “Il nostro ecosistema” / “Our ecosystem”; the Bari mark is Politecnico di Bari, as shown by its artwork.
- Keep the existing light-grey canvas, charcoal marks, static grid and subtle entrance. Use six desktop columns and two phone columns.
- Preserve original assets, accessible names, intrinsic dimensions, no-JavaScript content and reduced-motion support. No new dependencies.

## Review Focus

Phone overflow, low-resolution marks, white matte integration, logo visibility without JavaScript, and source/build agreement are checked in browser QA and existing integrity checks. This is reversible presentation markup; no new automated unit tests are needed.

### Task 1: Add and publish the bilingual logo rows

**Files:** `tools/site-generator/gen/pages_home.py`, `tools/site-generator/gen/cinematic/home-it.html`, `tools/site-generator/gen/cinematic/home-en.html`, `src/assets/css/cinematic.css`, generated `index.html` and `en/index.html`.

- [x] Add one shared renderer and insert the company strip after the hero and ecosystem strip inside the company section.
- [x] Add responsive layout, optical logo sizing and monochrome treatment using the existing design tokens.
- [x] Rebuild homepages and run the existing full-site integrity and SEO checks.
- [x] Inspect both languages at desktop and phone widths, including reduced motion and disabled JavaScript. Verify loaded images, no overflow, and existing homepage controls.
- [x] Review and prepare the verified change for publication through the existing GitHub Pages workflow.

Validation: 10 Chrome/Playwright cases passed across Italian/English and 320, 390, 768 and 1440px, plus normal-motion and disabled-JavaScript cases. All logos loaded; no horizontal overflow or app console errors; solution tabs and FAQ controls still work. Existing integrity checks passed for 105 content pages and SEO contracts for 96 sitemap URLs. Independent code review found no blockers. Normal-motion QA found a white-matte stacking-context issue; an explicit canvas backdrop on the animated content fixes it, visually verified at RGB(237,237,237). The bebit thumbnail is a lossless web derivative of the existing source (37 KB versus 748 KB). Runtime JavaScript bundles are unchanged.
