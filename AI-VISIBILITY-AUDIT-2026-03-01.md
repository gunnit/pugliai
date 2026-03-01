# PugliAI.com - AI Visibility & AEO Audit Report

**Date:** March 1, 2026
**Scope:** Full site audit - 80+ pages across IT, EN, guida-ai, and products
**Audited by:** 5 parallel AI agents (Claude Opus 4.6)

---

## Executive Summary

| Section | Pages Audited | Avg Score | Status |
|---------|:------------:|:---------:|--------|
| Italian Core Pages | 9 | **6.8/10** | Needs work |
| English Pages | 16 | **7.2/10** | Moderate |
| Guida-AI Articles | 11 (of 39) | **8.9/10** | Strong |
| Products & Specialty | 15 | **6.1/10** | Needs work |
| Technical/Site-wide | Infrastructure | **6.4/10** | Needs work |
| **OVERALL SITE SCORE** | **~80 pages** | **6.9/10** | **Moderate - significant quick wins available** |

### Key Takeaway

The guida-ai article section (avg 8.9/10) is **remarkably well-optimized** and serves as the gold standard for the rest of the site. However, **7 pages have ZERO structured data**, the internal linking architecture is weak (score 4/10), and critical commercial pages (pricing, products) are the most under-optimized. Fixing these gaps would dramatically improve AI engine visibility.

---

## CRITICAL Issues (P0) - Fix Immediately

### 1. Seven Pages Have ZERO Schema.org Structured Data

These pages are essentially **invisible to AI answer engines**:

| Page (IT) | Page (EN) | Type | Impact |
|-----------|-----------|------|--------|
| `architettura-tecnica.html` | `en/technical-architecture.html` | Service | HIGH |
| `investimenti-ai.html` | -- | **Pricing page** | **CRITICAL** |
| `poc-framework.html` | -- | Service methodology | HIGH |
| `risorse-formative.html` | -- | Academy/Training | HIGH |
| `moda-lusso.html` | `en/fashion-luxury.html` | Sector page | HIGH |
| -- | `en/case-studies.html` | Social proof | MEDIUM |
| `acceleratore-candidatura.html` | -- | Application | LOW |

**Why this matters:** When AI assistants are asked "quanto costa PugliAI?" or "AI pricing for Italian SMBs", the pricing page (`investimenti-ai.html`) has zero structured data for extraction. The `moda-lusso.html` sector page is structurally identical to `manifatturiero.html` (which HAS rich schema) -- this was likely an oversight.

### 2. Expired `validThrough` Dates in Schema

Multiple pages have `"validThrough": "2025-12-31"` -- showing **expired offers** to Google and AI engines:

- `contatti.html` / `en/contact.html`
- `en/strategic-consulting.html`
- `en/ai-infrastructure.html`

### 3. Organization Schema Inconsistency (IT vs EN)

The EN homepage has **wrong addresses**:
- IT says HQ: "Latiano, BR, 72022" -- EN says "Brindisi, BR, 72100"
- EN Bergamo office uses the SAME street address as HQ ("Via Giovanni Forleo 45") instead of "Via Angelo Maj 16"

### 4. `settori.html` H1 Is in English on Italian Page

The Italian sectors page has `<h1>AI Cross-Sector Solutions</h1>` -- should be in Italian.

### 5. Orphaned High-Priority Pages (Zero Internal Links)

| Page | Sitemap Priority | Inbound Links from IT Pages |
|------|:----------------:|:---------------------------:|
| `prodotti.html` | 0.9 | **0** |
| `risorse.html` | 0.9 | **0** |

These are hub pages with zero internal link equity -- completely invisible to crawlers following links.

---

## HIGH Priority Issues (P1) - Fix This Week

### 6. FAQ Schema Missing from 17+ Pages

FAQ schema is one of the **highest-impact AEO signals**. Pages WITH FAQ schema include the homepages, some service pages, and guide articles. Pages WITHOUT:

**Italian:** servizi, settori, architettura-tecnica, investimenti-ai, poc-framework, risorse-formative, moda-lusso, casi-studio, prodotti
**English:** services, sectors, ai-infrastructure, manufacturing, fashion-luxury, financial-services, case-studies, ceo-ai-guide-2025, products

### 7. Visible FAQ Sections Missing (Schema/Content Mismatch)

7 Italian core pages have FAQ **schema** but **no visible FAQ section** in the page HTML. Google may penalize schema that doesn't match visible content:

- `servizi.html` (4 schema Qs, 0 visible)
- `chi-siamo.html` (4 schema Qs, 0 visible)
- `agenti-ai.html` (5 schema Qs, 0 visible)
- `consulenza-strategica.html` (5 schema Qs, 0 visible)
- `infrastrutture-ai.html` (4 schema Qs, 0 visible)
- `contatti.html` (5 schema Qs, 0 visible)
- `settori.html` (no schema OR visible FAQ)

### 8. BreadcrumbList Schema Missing from 15+ Pages

Only 5 of 15 product/specialty pages have breadcrumbs. Missing from all pages that lack full schema (see P0), plus: `prodotti.html`, `acceleratore.html`, `casi-studio.html`, `en/products.html`.

### 9. Publisher Logo URL Typo Across 13+ Pages

`pugliai_pittrogramma.png` (extra "r") instead of `pugliai_pittogramma.png`. Found in:
- All 8 older guida-ai articles (Group A + C)
- `manifatturiero.html`, `servizi-finanziari.html`, `roi-calculator.html`
- EN: `strategic-consulting.html`, `financial-services.html`, `roi-calculator.html`, `ceo-ai-guide-2025.html`, `about-us.html`

### 10. Homepage Does NOT Link to Any guida-ai Article

The 39-article content hub -- the site's **strongest AEO asset** (avg score 8.9/10) -- has no direct links from the homepage. The only path is through `guida-ai-ceo-2025.html`.

### 11. `<main>` Landmark Missing from 10+ Pages

Missing from: `servizi.html`, `chi-siamo.html`, `settori.html`, `agenti-ai.html`, `consulenza-strategica.html`, `en/services.html`, `en/technical-architecture.html`, `en/products.html`, `en/fashion-luxury.html`, `en/case-studies.html`

### 12. No AggregateRating/Review Schema on Any Product Page

None of the 15 product/specialty pages have review schema, despite claims of "150% ROI", "200+ PMI transformed", "98% satisfaction rate", "95% success rate" in content.

---

## MEDIUM Priority Issues (P2) - Fix This Month

### 13. Meta Descriptions Too Long (All 9 Italian Core Pages)

Every single Italian core page exceeds 160 chars. Key offenders:
- `trend-ai-2025-2026.html`: **192 chars** (will definitely truncate)
- `chi-siamo.html`: 172 chars
- `agenti-ai.html`: 172 chars

### 14. H1 Tags Missing Primary Keywords (4 Pages)

| Page | Current H1 | Missing Keyword |
|------|-----------|-----------------|
| `chi-siamo.html` | "La mente e il cuore dell'innovazione AI in Italia" | "chi siamo", "team" |
| `consulenza-strategica.html` | "Trasforma il Tuo Business con l'AI" | "consulenza strategica" |
| `contatti.html` / `en/contact.html` | "Inizia il Tuo Percorso AI" / "Start Your AI Journey" | "contatti" / "contact" |

### 15. Title Tags Too Short (4 EN Pages)

| Page | Title | Length |
|------|-------|--------|
| `en/contact.html` | "Contact - PugliAI" | 18 chars |
| `en/about-us.html` | "About Us - PugliAI" | 19 chars |
| `en/ceo-ai-guide-2025.html` | (36 chars) | 36 chars |
| `en/case-studies.html` | (46 chars) | 46 chars |

### 16. Hreflang x-default Wrong on 2 EN Pages

`en/financial-services.html` and `en/ceo-ai-guide-2025.html` point x-default to the English version instead of Italian (inconsistent with rest of site).

### 17. `llms.txt` Is Outdated

- Last updated: 2025-12-02
- Missing: March 2026 AEO articles, accelerator program, current pricing
- Contains phantom URLs: `/sanita.html`, `/turismo.html`, `/alimentare.html`
- Pricing inconsistency: states "AI Enterprise: EUR 45,000+" but schema shows "AI Partnership: EUR 100,000+"

### 18. No Speakable Schema Beyond Homepages

Only IT and EN homepages have `SpeakableSpecification`. Guide articles would benefit most for voice search.

### 19. Missing `HowTo` Schema on Step-by-Step Articles

Two guida-ai articles are inherently step-by-step but lack HowTo schema:
- `come-iniziare-ai-pmi.html` -- "7 Primi Passi per le PMI" (HIGH impact)
- `chatgpt-aziende-guida.html` -- "Guida Pratica all'Implementazione"

### 20. No Image Optimization (Performance)

The homepage has **48 images** with:
- 0 using `srcset` (no responsive images)
- 2 WebP out of 48 (almost all JPG/PNG)
- No modern image format strategy

### 21. Missing `SiteNavigationElement` Schema

No pages have this schema, which helps AI crawlers understand site hierarchy.

### 22. SearchAction Points to Non-Functional URL

The WebSite schema's `SearchAction` URL template points to `guida-ai-ceo-2025.html?q={search_term_string}` -- this page has no search functionality.

### 23. EN Manufacturing Breadcrumb Points to Non-Existent Page

`en/manufacturing.html` breadcrumb references `industries.html` instead of `sectors.html`.

---

## LOW Priority Issues (P3) - Backlog

| # | Issue | Pages Affected |
|---|-------|----------------|
| 24 | Missing `twitter:image` on Group A guida-ai articles | 3 articles |
| 25 | Missing `article:published_time` OG meta on Group B articles | 3 articles |
| 26 | Generic "Partner" alt text on homepage images | 7 images |
| 27 | Duplicate alt text on chi-siamo team images | 5 images |
| 28 | `en/success.html` in sitemap (should be noindex) | 1 page |
| 29 | No English guida-ai articles (strategic gap) | 39 articles |
| 30 | Group C articles have fewer FAQ Q&A pairs (4 vs 6) | 5 articles |
| 31 | `og:type` inconsistency on pricing page (`website` vs `product.group`) | 1 page |
| 32 | `risorse-formative.html` missing footer entirely | 1 page |
| 33 | No `.well-known/ai-plugin.json` discovery file | Site-wide |
| 34 | `Crawl-delay: 1` in robots.txt may throttle legitimate bots | Site-wide |

---

## Page-by-Page Score Matrix

### Italian Core Pages

| Page | Schema | FAQ | Breadcrumb | Meta Desc | H1 Quality | Score |
|------|:------:|:---:|:----------:|:---------:|:----------:|:-----:|
| index.html | 5 blocks | 10 Qs | Yes | Too long | Weak | **8/10** |
| servizi.html | 2 blocks | 4 Qs (no visible) | Yes | Too long | Good | **7.5/10** |
| chi-siamo.html | 2 blocks | 4 Qs (no visible) | Yes | Too long | Weak | **7/10** |
| settori.html | 1 block | NONE | No | Too long | ENGLISH! | **5.5/10** |
| agenti-ai.html | 3 blocks | 5 Qs (no visible) | Yes | Too long | Good | **7.5/10** |
| consulenza-strategica.html | 3 blocks | 5 Qs (no visible) | Yes | Too long | Weak | **7/10** |
| infrastrutture-ai.html | 3 blocks | 4 Qs (no visible) | Yes | Too long | Good | **7.5/10** |
| **architettura-tecnica.html** | **NONE** | **NONE** | **No** | Too long | OK | **3.5/10** |
| contatti.html | 2 blocks | 5 Qs (no visible) | Yes | Too long | Weak | **7.5/10** |

### English Pages

| Page | Schema | FAQ | Breadcrumb | Meta Desc | Title Length | Score |
|------|:------:|:---:|:----------:|:---------:|:-----------:|:-----:|
| en/index.html | 7 blocks | 10 Qs | Yes | OK (158) | Slightly long | **9/10** |
| en/services.html | Good | NONE | Yes | OK (161) | OK | **7/10** |
| en/about-us.html | Excellent | NONE | Yes | OK (155) | Too short (19) | **8/10** |
| en/sectors.html | Good | NONE | Yes | Too long (175) | OK | **7/10** |
| en/ai-agents.html | Excellent | 5 Qs | Yes | OK (157) | OK | **8.5/10** |
| en/strategic-consulting.html | 4 blocks | 5 Qs | Yes | OK (158) | Slightly long | **9.5/10** |
| en/ai-infrastructure.html | 3 blocks | NONE | Yes | OK (152) | OK | **9/10** |
| **en/technical-architecture.html** | **NONE** | **NONE** | **No** | OK (154) | OK | **4/10** |
| en/contact.html | Excellent | 5 Qs | Yes | OK (160) | Too short (18) | **9/10** |
| en/products.html | Minimal | NONE | No | OK (148) | OK | **5/10** |
| en/manufacturing.html | Good | NONE | Broken URL | OK (149) | OK | **7/10** |
| **en/fashion-luxury.html** | **NONE** | **NONE** | **No** | OK (162) | OK | **5/10** |
| en/financial-services.html | Good | NONE | Yes | OK (148) | OK | **7/10** |
| **en/case-studies.html** | **NONE** | **NONE** | **No** | OK (147) | Short (46) | **5/10** |
| en/roi-calculator.html | Good | 5 Qs | Yes | OK (151) | Slightly long | **8.5/10** |
| en/ceo-ai-guide-2025.html | Good | NONE | Yes | OK (144) | Too short (36) | **7/10** |

### Guida-AI Articles (11 sampled of 39)

| Article | Schema | FAQ Qs | HowTo | ItemList | Score |
|---------|:------:|:------:|:-----:|:--------:|:-----:|
| agenti-ai-pmi-2026 | Article | 6 | -- | -- | **9/10** |
| ai-act-conformita-pmi-2026 | Article | 6 | -- | -- | **9/10** |
| roi-intelligenza-artificiale-2026 | Article | 6 | -- | -- | **9/10** |
| migliori-aziende-ai-italia-2025 | Article | 5 | -- | Yes | **9.5/10** |
| startup-ai-italiane-2025 | Article | 5 | -- | Yes | **9.5/10** |
| come-scegliere-consulenza-ai-italia | Article | 5 | Yes | -- | **9.5/10** |
| cos-e-intelligenza-artificiale-pmi | Article | 4 | -- | -- | **8.5/10** |
| ai-generativa-aziende | Article | 4 | -- | -- | **8.5/10** |
| come-iniziare-ai-pmi | Article | 4 | **MISSING** | -- | **8.5/10** |
| chatgpt-aziende-guida | Article | 4 | **MISSING** | -- | **8.5/10** |
| trend-ai-2025-2026 | Article | 6 | -- | -- | **9/10** |

### Product & Specialty Pages

| Page | Schema | FAQ | Breadcrumb | Pricing in Schema | Score |
|------|:------:|:---:|:----------:|:-----------------:|:-----:|
| prodotti.html | ItemList/Product | NONE | No | No | **6/10** |
| voiceai-on-premise.html | Product/Offer | 5 Qs | No | Yes (25K-75K) | **8/10** |
| knowledgeai-enterprise.html | Product/Offer | 5 Qs | No | Yes (30K-85K) | **8/10** |
| **investimenti-ai.html** | **NONE** | **NONE** | **No** | **No** | **3/10** |
| **poc-framework.html** | **NONE** | **NONE** | **No** | No | **4/10** |
| acceleratore.html | EduOrg | 5 Qs | No | No | **7/10** |
| **acceleratore-candidatura.html** | **NONE** | **NONE** | **No** | -- | **3/10** |
| roi-calculator.html | WebApp | 5 Qs | Yes | Free | **9/10** |
| casi-studio.html | Collection/ItemList | NONE | No | -- | **7/10** |
| **risorse-formative.html** | **NONE** | **NONE** | **No** | No | **3/10** |
| risorse.html | Collection/ItemList | NONE | Yes | -- | **7/10** |
| guida-ai-ceo-2025.html | Collection/ItemList | 4 Qs | Yes | -- | **8/10** |
| manifatturiero.html | Service/Offer | NONE | Yes | No | **8/10** |
| **moda-lusso.html** | **NONE** | **NONE** | **No** | No | **4/10** |
| servizi-finanziari.html | FinancialSvc | NONE | Yes | No | **7/10** |

### Technical/Site-wide

| Area | Score | Key Issue |
|------|:-----:|-----------|
| Sitemap | **7/10** | Missing pages, no hreflang annotations |
| Robots.txt | **9/10** | Best-in-class AI crawler access |
| Schema Consistency | **6/10** | Org schema mismatch IT/EN, no SiteNavigation |
| Hreflang | **8/10** | Core pages correct, no EN guida-ai articles |
| Performance | **5/10** | No srcset, no WebP, 91KB CSS |
| AI-Specific Signals | **7/10** | Excellent llms.txt but outdated |
| Internal Linking | **4/10** | 2 orphaned pages, no homepage->guida-ai links |

---

## Recommended Action Plan

### Sprint 1: Critical Fixes (Days 1-3)

| # | Action | Pages | Est. Impact |
|---|--------|-------|-------------|
| 1 | Add full schema to `investimenti-ai.html` (OfferCatalog, Offers, FAQ, Breadcrumbs) | 1 | Very High |
| 2 | Add schema to `architettura-tecnica.html` + `en/technical-architecture.html` | 2 | High |
| 3 | Add schema to `moda-lusso.html` + `en/fashion-luxury.html` (clone from manifatturiero) | 2 | High |
| 4 | Add schema to `risorse-formative.html` (Course, EduOrg) | 1 | High |
| 5 | Add schema to `poc-framework.html` (Service, HowTo, FAQ) | 1 | High |
| 6 | Fix expired `validThrough` dates (3 IT + 3 EN pages) | 6 | Medium |
| 7 | Fix Organization schema mismatch on EN homepage | 1 | Medium |
| 8 | Fix `settori.html` H1 from English to Italian | 1 | Medium |

### Sprint 2: FAQ & Linking (Days 4-7)

| # | Action | Pages | Est. Impact |
|---|--------|-------|-------------|
| 9 | Add visible FAQ sections to 7 IT pages with schema-only FAQs | 7 | Very High |
| 10 | Add FAQ schema + visible sections to 8+ EN pages missing it | 8 | Very High |
| 11 | Add FAQ schema to 9 product/specialty pages missing it | 9 | High |
| 12 | Link `prodotti.html` and `risorse.html` from homepage + nav | 2 | Very High |
| 13 | Add guida-ai article links to homepage | 1 | High |
| 14 | Add cross-links between service pages and related guide articles | ~10 | High |

### Sprint 3: Meta & Schema Polish (Days 8-14)

| # | Action | Pages | Est. Impact |
|---|--------|-------|-------------|
| 15 | Trim all IT meta descriptions to 150-160 chars | 9 | Medium |
| 16 | Fix publisher logo typo across 13+ pages | 13 | Medium |
| 17 | Add BreadcrumbList to 15+ pages missing it | 15 | Medium |
| 18 | Fix 4 EN title tags that are too short | 4 | Medium |
| 19 | Fix H1 tags missing primary keywords (4 pages) | 4 | Medium |
| 20 | Fix hreflang x-default on 2 EN pages | 2 | Low |
| 21 | Add `<main>` landmarks to 10+ pages | 10 | Low |
| 22 | Add AggregateRating schema to product/sector pages | 5+ | Medium |
| 23 | Fix EN manufacturing breadcrumb URL | 1 | Low |

### Sprint 4: Advanced AEO (Days 15-21)

| # | Action | Pages | Est. Impact |
|---|--------|-------|-------------|
| 24 | Update `llms.txt` (phantom URLs, pricing, new content) | 1 | High |
| 25 | Add HowTo schema to `come-iniziare-ai-pmi.html` | 1 | High |
| 26 | Add Speakable schema to top guide articles | 5+ | Medium |
| 27 | Add SiteNavigationElement schema | Site-wide | Medium |
| 28 | Convert H2 headers to question format across all pages | All | Medium |
| 29 | Implement srcset + WebP for images | All | Medium |
| 30 | Switch homepage CSS to optimized variant (91KB -> 23KB) | 1 | Medium |

---

## Strengths to Preserve

1. **robots.txt** (9/10) -- Best-in-class AI crawler access with explicit GPTBot, ClaudeBot, PerplexityBot allowances
2. **llms.txt** -- One of the most thorough in the Italian market (just needs updating)
3. **Guida-AI articles** (8.9/10 avg) -- Gold standard AEO with Article + FAQ + Breadcrumb + ItemList/HowTo schemas
4. **Hreflang implementation** -- All core page pairs are correctly bidirectional
5. **Homepage schema** -- 7-9 JSON-LD blocks with WebSite, Organization, FAQ, Speakable, HowTo
6. **Product pages** (VoiceAI, KnowledgeAI) -- Strong Product + AggregateOffer schemas
7. **roi-calculator.html** (9/10) -- Best individual non-homepage page

## Gold Standard Templates

Use these as templates when fixing other pages:

| Template For | Reference Page | Schema Blocks |
|-------------|---------------|:-------------:|
| Guide articles | `guida-ai/migliori-aziende-ai-italia-2025.html` | 4 (Article + FAQ + Breadcrumb + ItemList) |
| Service pages | `en/strategic-consulting.html` | 4 (WebPage + FAQ + HowTo + Service) |
| Sector pages | `manifatturiero.html` | 3 (WebPage + Service/OfferCatalog + Breadcrumb) |
| Product pages | `voiceai-on-premise.html` | 2 (Product + FAQ) |
| Tool pages | `roi-calculator.html` | 4 (WebPage + WebApp + Breadcrumb + FAQ) |

---

*Report generated from 5 parallel audit agents analyzing ~80 pages across the full pugliai.com site.*
