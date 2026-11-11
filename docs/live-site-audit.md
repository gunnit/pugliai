# Live design and navigation audit — 11 November 2026

Baseline: `ba588a3062c74f8f47426b4608989091fb9464e5` on `https://pugliai.com`.

## Coverage

- Fetched all 104 published content pages and checked 4,812 local references and anchors. All resolved; published HTML matched the repository.
- Rendered every page at 390 × 844 and 1440 × 1000. No page-wide horizontal overflow or broken eagerly loaded images. Homepage solution tabs and article tables intentionally scroll inside their containers.
- Visually inspected homepage, contact, calculator, long article, login and recovery layouts, with additional 320px and landscape checks.
- Exercised Italian/English menus and language switching, keyboard navigation, cookie preferences, contact enquiry switching, solution tabs, FAQ expansion and calculator inputs/results. Contact and application forms were not submitted.

## Fixes

- Both homepages now share the full cinematic menu used by interior pages. Existing homepage section anchors remain intact.
- Native disclosure navigation provides hub/language links without JavaScript. Footer directories now link to the services, products and resources hubs.
- Same-page contact CTAs activate process intake, including another CTA click after a manual enquiry change.
- Cookie preferences contain keyboard focus, make the background inert and restore focus on closing. Saving a first-visit choice focuses the main content when its banner opener is removed.
- The chat widget's layers stay below navigation and consent overlays. Cookie-policy links resolve from nested missing URLs.
- The method introduction stops sticking on short landscape screens, keeping its full text reachable.
- ROI numeric validation rejects missing/out-of-range values without restricting revenue to multiples of €50,000. Clipboard success is reported only after successful copying; failures offer selectable text.
- Replaced the nonfunctional reserved-area login form with access instructions and the existing team email.
- Added a bilingual, branded, noindex 404 with root-relative recovery links and assets.

## Regression checks

The baseline verifier retains checks for metadata, structured data, article bodies, analytics scripts and all six lead forms. Its explicit `--allow-audit-fixes` option accepts only the reviewed calculator, login, homepage navigation and new recovery-page changes.

```sh
npm run build:site
node --test tools/tests/process-intake.test.cjs
python3 tools/cinematic/verify-site.py --baseline ba588a3 --allow-audit-fixes --rebuild
git diff --check
```

Browser checks include a non-round revenue value in each locale, invalid employee count, unchanged default ROI output, keyboard focus wrapping and return, first-visit cookie saving, reduced motion, no-JavaScript menu navigation, and horizontally scrollable article tables.
