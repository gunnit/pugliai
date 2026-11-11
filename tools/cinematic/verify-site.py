#!/usr/bin/env python3
"""Check public-page integrity and redesign regressions against a Git revision.

Usage: python3 tools/cinematic/verify-site.py [--baseline HEAD] [--allow-audit-fixes] [--rebuild]
No browser or form requests are made. --rebuild also verifies build idempotence.
"""
import argparse
from collections import Counter
from hashlib import sha256
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[2]
HOME = {'index.html', 'en/index.html'}
ROI = {'roi-calculator.html', 'en/roi-calculator.html'}
RECOVERY = '404.html'
HOME_NAVIGATION = {'src': '/src/assets/js/navigation.js', 'defer': None}
VERIFICATION = 'googleaabec45492a6a4c3.html'
FORMS = {'contatti.html', 'en/contact.html', 'sessione-strategica.html',
         'en/strategy-session.html', 'acceleratore-candidatura.html',
         'en/accelerator-apply.html'}
LD = re.compile(r'<script\b[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', re.S | re.I)
ARTICLE = re.compile(r'<article\b[^>]*>.*?</article>', re.S | re.I)
FORM = re.compile(r'<form\b[^>]*>.*?</form>', re.S | re.I)
INLINE_JS = re.compile(r'<script\b(?![^>]*\bsrc=)([^>]*)>(.*?)</script>', re.S | re.I)


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.refs, self.ids, self.meta, self.links, self.scripts = [], [], [], [], []
        self.forms = []
        self.body_classes = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.refs.append(attrs[key])
        if tag == 'meta' and attrs.get('name') != 'theme-color':
            self.meta.append(attrs)
        if tag == 'link' and attrs.get('rel') in ('canonical', 'alternate'):
            self.links.append(attrs)
        if tag == 'script' and attrs.get('src'):
            self.scripts.append(attrs)
        if tag == 'form':
            self.forms.append(attrs)
        if tag == 'body':
            self.body_classes = attrs.get('class', '').split()


def public_files():
    return sorted([*ROOT.glob('*.html'), *(ROOT / 'en').glob('*.html'),
                   *(ROOT / 'guida-ai').glob('*.html')])


def local_target(source, reference):
    parsed = urlparse(reference)
    if parsed.scheme not in ('', 'http', 'https'):
        return None, None
    if parsed.netloc and parsed.netloc not in ('pugliai.com', 'www.pugliai.com'):
        return None, None
    path = unquote(parsed.path)
    target = (ROOT / path.lstrip('/')) if path.startswith('/') else (source.parent / path)
    if not path:
        target = source
    target = target.resolve()
    if target.is_dir():
        target /= 'index.html'
    return target, unquote(parsed.fragment)


def baseline_text(ref, path):
    return subprocess.check_output(['git', 'show', f'{ref}:{path}'], cwd=ROOT).decode()


def inline_scripts(text):
    return [body for attrs, body in INLINE_JS.findall(text) if 'application/ld+json' not in attrs]


def allowed_calculator_scripts(current, previous):
    """Only the one local calculator script may change; analytics stay exact."""
    marker = re.compile(r"document\.getElementById\(['\"]calcForm['\"]\)")
    def without_calculator(scripts):
        matches = [i for i, script in enumerate(scripts) if marker.search(script)]
        if len(matches) != 1:
            return None
        return [None if i == matches[0] else script for i, script in enumerate(scripts)]
    current = without_calculator(current)
    previous = without_calculator(previous)
    return current is not None and previous is not None and current == previous


def allowed_calculator_forms(current, previous):
    """Allow calculator controls to change without adding a submitting form."""
    if len(current.forms) != 1 or len(previous.forms) != 1:
        return False
    form, old_form = current.forms[0], previous.forms[0]
    return (form.get('id') == old_form.get('id') == 'calcForm'
            and not form.get('action')
            and all(form.get(key) == old_form.get(key)
                    for key in ('action', 'method', 'target', 'enctype')))


def scripts_preserved(current, previous, allow_navigation=False):
    # Permit exactly the known home navigation addition, never edits to an
    # existing script's attributes, order, or configuration.
    if current == previous:
        return True
    if (allow_navigation and HOME_NAVIGATION not in previous
            and current.count(HOME_NAVIGATION) == 1):
        return [script for script in current if script != HOME_NAVIGATION] == previous
    return False


def artifact_hashes():
    paths = public_files() + [ROOT / 'sitemap.xml'] + sorted((ROOT / 'src/assets/js/cinematic').glob('*.js'))
    return {str(p.relative_to(ROOT)): sha256(p.read_bytes()).hexdigest() for p in paths}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--baseline', default='HEAD', help='Git revision whose content must be preserved')
    parser.add_argument('--allow-audit-fixes', action='store_true',
                        help='Allow the reviewed ROI, login, home navigation and new 404 changes')
    parser.add_argument('--rebuild', action='store_true', help='Run the full build and compare generated artifacts')
    args = parser.parse_args()
    errors = []
    baseline_files = set(subprocess.check_output(
        ['git', 'ls-tree', '-r', '--name-only', args.baseline], cwd=ROOT).decode().splitlines())
    files = public_files()
    texts = {p: p.read_text() for p in files}
    pages = {p: Page(text) for p, text in texts.items() if p.name != VERIFICATION}
    counts = Counter()
    for path, page in pages.items():
        rel = str(path.relative_to(ROOT))
        text = texts[path]
        old_text = baseline_text(args.baseline, rel) if rel in baseline_files else None
        old = Page(old_text) if old_text is not None else None
        if old is None and not (args.allow_audit_fixes and rel == RECOVERY):
            errors.append(f'{rel}: page absent from baseline (only a new 404 is allowed with --allow-audit-fixes)')
        counts['pages'] += 1
        counts['home' if rel in HOME else 'interior'] += 1
        expected = 'cinematic-home' if rel in HOME else 'cinematic-interior'
        if expected not in page.body_classes:
            errors.append(f'{rel}: missing body class {expected}')
        required = (['css/cinematic.css', 'js/cinematic/home.js'] if rel in HOME else
                    ['css/cinematic-interior.css', 'css/cinematic-navigation.css', 'js/cinematic/interior.js'])
        for asset in required:
            if not any(f'src/assets/{asset}' in value for value in page.refs):
                errors.append(f'{rel}: missing {asset}')
        duplicates = [id_ for id_, n in Counter(page.ids).items() if n > 1]
        if duplicates:
            errors.append(f'{rel}: duplicate IDs {duplicates}')
        for reference in page.refs:
            target, fragment = local_target(path, reference)
            if target is None:
                continue
            counts['local_references'] += 1
            if not target.exists():
                errors.append(f'{rel}: missing local target {reference}')
            elif fragment and target in pages and fragment not in pages[target].ids:
                errors.append(f'{rel}: missing fragment {reference}')
        if rel == RECOVERY:
            if not any(meta.get('name') == 'robots' and 'noindex' in
                       re.split(r'[\s,]+', meta.get('content', '').lower()) for meta in page.meta):
                errors.append(f'{rel}: recovery page must have noindex')
            for reference in page.refs:
                parsed = urlparse(reference)
                if not parsed.scheme and not reference.startswith(('/', '#')):
                    errors.append(f'{rel}: recovery reference must be root-absolute: {reference}')
            if not {'/', '/en/'}.issubset(page.refs):
                errors.append(f'{rel}: recovery links to both language homepages are required')
        if old is not None and (page.meta != old.meta or page.links != old.links):
            errors.append(f'{rel}: SEO metadata/canonical/hreflang/robots changed')
        try:
            ld = [json.loads(block) for block in LD.findall(text)]
            counts['jsonld_blocks'] += len(ld)
            if old_text is not None and ld != [json.loads(block) for block in LD.findall(old_text)]:
                errors.append(f'{rel}: structured data changed')
            if rel == RECOVERY and not ld:
                errors.append(f'{rel}: recovery page structured data is missing')
        except json.JSONDecodeError as exc:
            errors.append(f'{rel}: invalid JSON-LD: {exc}')
        if old is not None:
            current_inline, old_inline = inline_scripts(text), inline_scripts(old_text)
            calculator_fix = args.allow_audit_fixes and rel in ROI
            if (current_inline != old_inline and not
                    (calculator_fix and allowed_calculator_scripts(current_inline, old_inline))):
                errors.append(f'{rel}: inline application/analytics scripts changed')
            if not scripts_preserved(page.scripts, old.scripts,
                                     args.allow_audit_fixes and rel in HOME):
                errors.append(f'{rel}: existing script configuration changed')
            current_forms, old_forms = FORM.findall(text), FORM.findall(old_text)
            if (current_forms != old_forms
                    and not (calculator_fix and allowed_calculator_forms(page, old))
                    and not (args.allow_audit_fixes and rel == 'login.html' and not current_forms)):
                errors.append(f'{rel}: form markup/configuration changed')
        if rel in FORMS:
            counts['lead_forms'] += 1
            if len(FORM.findall(text)) != 1 or 'data-ajax="true"' not in text:
                errors.append(f'{rel}: lead form missing or AJAX mode changed')
        if rel.startswith('guida-ai/'):
            counts['articles'] += 1
            if old_text is not None and ARTICLE.findall(text) != ARTICLE.findall(old_text):
                errors.append(f'{rel}: article body changed')
    missing_forms = FORMS - {str(path.relative_to(ROOT)) for path in pages}
    if missing_forms:
        errors.append(f'Missing lead form pages: {sorted(missing_forms)}')
    if texts[ROOT / VERIFICATION] != baseline_text(args.baseline, VERIFICATION):
        errors.append('Google verification token changed')
    for file in (ROOT / 'src/assets/js/cinematic').glob('*.js'):
        text = file.read_text()
        if re.search(r'\bprocess\.env\b', text):
            errors.append(f'{file.name}: unresolved process.env in browser bundle')
        for specifier in re.findall(r'^\s*import\s+[^;]*?\bfrom\s*[\"\']([^\"\']+)[\"\']', text, re.M):
            if not specifier.startswith('.') or not (file.parent / specifier).exists():
                errors.append(f'{file.name}: unresolved browser import {specifier}')
    if args.rebuild:
        before = artifact_hashes()
        subprocess.run(['npm', 'run', 'build:site'], cwd=ROOT, check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        after = artifact_hashes()
        changed = [p for p in before.keys() | after.keys() if before.get(p) != after.get(p)]
        if changed:
            errors.append(f'Full build is not idempotent: {changed}')
        else:
            print(f'Full build idempotent: {len(after)} generated artifacts unchanged.')
    print(json.dumps(dict(counts), indent=2))
    if errors:
        print('\n'.join(errors))
        raise SystemExit(1)
    print('PASS: references, IDs, metadata, structured data, forms, scripts, articles and verification token.')


if __name__ == '__main__':
    main()
