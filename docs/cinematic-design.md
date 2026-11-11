# Cinematic studio across PugliAI

Approved direction: the user-selected PugliAI cinematic homepage, extended to all
existing Italian and English routes on 11 November 2026. No new content claims.

## Reference lock

Primary research: [Analogue — emotional light, tangible worlds](https://analogueagency.com)
(Refero `d5e6f839-1d19-4a2a-b3d3-84cf3deb555e`). Supporting research:
[Burocratik — swagger in the margins](https://burocratik.com)
(Refero `51ac689d-896e-4318-8e15-6bf8e8e58750`). Both full styles were retrieved again
for the site-wide extension; the approved homepage remains the visual authority.

| Decision | Source | Role and adaptation |
| --- | --- | --- |
| Cool grey `#ededed`, near-black `#1c1c1c`, tight Geist headings | Approved homepage / Analogue | Editorial canvas and text; existing self-hosted typeface |
| Full photographic opening for services/products/sectors | Analogue media-led chapters / existing PugliAI photos | Preserve each page's relevant image and content; dark scrim supports readable type |
| Restrained optical opening for article, legal and form headings | Approved homepage | Reuse the optimized light-field asset, with less height for reading pages |
| Floating frosted nav, central wordmark | Approved homepage / Analogue | Compact brand navigation; expanded directory retains every existing route and language switch |
| Thin rules, split heading/lead and quiet article typesetting | Burocratik editorial rhythm | Hierarchy without adding decoration or changing article copy |
| Isolated cobalt consultation panel | Approved homepage / Analogue | Conversion object only; ordinary controls and links stay neutral |
| Short transform/opacity entrances with Motion.dev | User request / existing homepage | Content is visible without JavaScript; reduced-motion setting is live; forms and calculator values stay still |

Do not replace photography with artificial UI ornaments, reintroduce the former
wine/violet palette, add decorative mixed-type headlines, or turn entire pages blue.

## Implementation and coverage

`stylesheet.css` retains structural component contracts. `cinematic-interior.css`
replaces visual tokens and component treatments, and `cinematic-navigation.css`
styles the new shared menu. Both load only on interior pages. Homepages retain their
approved standalone stylesheet. Strategy-session landings keep a focused header.

The shared generator wraps 104 public pages: 64 paired pages, 39 Italian articles,
and the existing Italian login page. The Google verification HTML is a token, not a
designed page. It is unchanged. Existing forms, provider endpoints, consent,
attribution, canonical/hreflang, noindex states and archived article canonicals remain.

Run `npm ci && npm run build:site` with Node 20.19+ or 22.12+ and Python 3.11+.
Commit generated HTML and every file in `src/assets/js/cinematic/`, including shared
Motion chunks. GitHub Pages serves them directly and performs no npm build.
