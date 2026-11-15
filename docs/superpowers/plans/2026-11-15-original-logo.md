# Original PugliAI logo implementation plan

**Goal:** Restore the user's actual tree and PugliAi lettering to the approved cinematic website as crisp vectors.

**Architecture:** Trace the existing transparent `src/assets/img/pugliai_logo.png` into SVG paths, preserving the original green #1b9032, blue #135ca9 and black. Derive a white horizontal lockup for the dark navigation and a tree-only browser icon from the same paths. Use the complete original stacked logo in the footer. Update the generator and runtime header together, and mirror the treatment in the existing private cinematic preview.

**Reference lock:** The approved homepage and `docs/cinematic-design.md` remain the authority. Analogue (Refero d5e6f839-1d19-4a2a-b3d3-84cf3deb555e) informs a compact centered identity in the floating glass navigation. Burocratik (51ac689d-896e-4318-8e15-6bf8e8e58750) informs quiet editorial spacing at the close. Original logo colors belong to the logo only. The user's request delegates placement decisions; this is a bounded production edit.

**Tech stack:** Existing HTML/CSS, Python static generator, vanilla JavaScript and Vite. Potrace is an authoring tool only; no new website dependency.

- [x] Trace the three source color layers with transparent background, preserve fine branches and lettering counters, and visually compare with the source.
- [x] Add full-color stacked, white horizontal and tree SVGs. Replace the text-only header and footer identities in both language templates, shared runtime navigation, interior footer and cinematic preview.
- [x] Check desktop/mobile sizing, navigation with and without JavaScript, SVG assets, menus, reduced motion and horizontal overflow. Run existing full-site integrity checks and the preview build.
- [x] Publish the public website and update the existing owner-private preview, verifying both outcomes.

No changes to content claims, video, animation, forms, metadata, canonical URLs or access policy.

Validation: 16 Chrome cases passed at 320, 390, 768 and 1440px across Italian, English, interiors, focused landings, disabled JavaScript and the private preview. SVGs contain paths with no raster embeds or font dependency. Full-site integrity passed for 105 content pages, 6 lead forms and 324 JSON-LD blocks; the full build was idempotent. SEO checks passed for 96 sitemap URLs.

Publication: the public GitHub Pages build for logo commit 13dd808 succeeded and served byte-matching homepage, English homepage, brand CSS and SVGs. The existing owner-private Sites preview deployed successfully as version 3. Shared navigation and brand CSS now use content hashes to refresh returning visitors.
