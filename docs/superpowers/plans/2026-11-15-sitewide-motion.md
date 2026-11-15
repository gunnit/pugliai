# Sitewide cinematic motion implementation plan

**Goal:** Extend the approved homepage's Motion.dev animations, parallax and 3D feedback to all existing Italian and English interior routes, then deploy and verify the live site.

**Reference lock:** `docs/cinematic-design.md` and the user-approved homepage. Analogue supplies photographic depth and the optical opening; Burocratik supplies editorial rhythm. Preserve the original PugliAI vector branding and all content, forms, calculators, metadata and article bodies.

**Architecture:** One interior motion controller, existing Motion.dev dependency, shared session pause preference with the homepage. Declarative controls in the shared shell. Content-hashed CSS and JavaScript URLs prevent stale cached releases. Hero photos and optical layers move independently from text. Reading prose and controls keep a stable layout.

- [x] Implement a shared pause preference, bilingual controls and neutral scroll progress; add finite heading/card reveals, photographic and optical hero parallax, media perspective and pointer tilt.
- [x] Add static, reduced-motion, print and pause states, visibility/back navigation cleanup, and safe motion exclusions for forms, calculator inputs/results and long prose. Keep footer links and strategy-page sticky CTAs reachable.
- [x] Version changed assets in the generator, rebuild all pages and extend integrity verification for coverage and content versions. Verify against the starting commit `24bd335`.
- [x] Test local representative service, product, article, legal, resource, contact, calculator and strategy-page layouts at desktop/mobile widths in both languages. Verify pause/resume, motion preference, keyboard, no-JS and protected forms.
**Release handoff:** Integrate and push to main, wait for the exact GitHub Pages build, compare live artifacts and verify live desktop/mobile interaction and screenshots. Final evidence is stored in the workspace audit folder.

**Review focus:** Hidden-tab entry should defer, then build on visibility. Repeated pause/resume must release listeners and timelines. Pointer and scroll transforms must target separate elements. Page shapes without a hero must remain usable. Direct images and short pages must not gain horizontal overflow. Shared styling must not hide footer links, calculator values or form controls.

Local verification: 21 representative routes at 1440px and 390px passed runtime, control, protected-form and overflow checks. Hero scroll, pointer tilt, cross-language/homepage pause persistence, reduced motion, FAQ and calculator flows verified. The calculator requires a sector selection before calculating; the completed flow passed. Both integrity and SEO checks passed.

Independent code review found a stale pause preference on BFCache restoration. The persisted-page handlers now re-read the session preference before rebuilding. A synthetic persisted-pageshow regression failed before the fix and passed afterward for both the interior controller and homepage/video. No other material findings.
