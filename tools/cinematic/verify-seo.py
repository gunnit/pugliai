#!/usr/bin/env python3
"""Verify generated SEO contracts without network access or third-party packages.

Run after npm run build:site. Checks discovery, metadata, local destinations,
canonical/language relationships, sitemap coverage and relevant schema regressions.
A pass does not establish Google index status, ranking or AI citations.
"""
import argparse
import ast
from collections import Counter, defaultdict, deque
from datetime import date
import importlib.util
import json
from pathlib import Path
import re
from urllib.parse import urlparse
import xml.etree.ElementTree as ET

_spec = importlib.util.spec_from_file_location('site_integrity', Path(__file__).with_name('verify-site.py'))
base = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(base)
ROOT = base.ROOT
ORIGIN = 'https://pugliai.com'


def redirects():
    """Read the exact static compatibility map without importing the generator."""
    source = ROOT / 'tools/site-generator/gen/redirects.py'
    if not source.exists():
        return {}
    for node in ast.parse(source.read_text()).body:
        if isinstance(node, ast.Assign) and any(isinstance(target, ast.Name) and target.id == 'REDIRECTS' for target in node.targets):
            return ast.literal_eval(node.value)
    raise ValueError('redirects.py must declare the static REDIRECTS map')


class SeoPage(base.Page):
    def __init__(self, text):
        self.anchors = []
        self.h1_count = 0
        super().__init__(text)

    def handle_starttag(self, tag, attrs):
        super().handle_starttag(tag, attrs)
        values = dict(attrs)
        if tag == 'a' and values.get('href'):
            self.anchors.append(values['href'])
        if tag == 'h1':
            self.h1_count += 1


def canonical_path(path):
    rel = str(path.relative_to(ROOT))
    return ORIGIN + '/' + (rel[:-10] if rel.endswith('index.html') else rel)


def meta(page, name):
    return [m.get('content', '') for m in page.meta if m.get('name', '').lower() == name]


def robots_allowed(text, agent, path):
    """Evaluate matching groups with longest-path and Allow-on-tie precedence."""
    groups, agents, rules = [], [], []
    for line in text.splitlines():
        line = line.split('#', 1)[0].strip()
        if ':' not in line:
            continue
        name, value = [part.strip() for part in line.split(':', 1)]
        name = name.lower()
        if name == 'user-agent':
            if rules:
                groups.append((agents, rules))
                agents, rules = [], []
            agents.append(value.lower())
        elif name in ('allow', 'disallow') and agents:
            rules.append((name == 'allow', value))
    if agents:
        groups.append((agents, rules))
    matched = []
    for names, group_rules in groups:
        lengths = [0 if token == '*' else len(token) for token in names if token == '*' or token in agent.lower()]
        if lengths:
            matched.append((max(lengths), group_rules))
    if not matched:
        return True
    specificity = max(length for length, _ in matched)
    candidates = []
    for length, group_rules in matched:
        if length != specificity:
            continue
        for allow, rule in group_rules:
            if not rule:
                continue
            exact_end = rule.endswith('$')
            pattern = re.escape(rule[:-1] if exact_end else rule).replace(r'\*', '.*')
            if re.match('^' + pattern + ('$' if exact_end else ''), path):
                candidates.append((len(rule.replace('*', '').rstrip('$')), allow))
    return max(candidates)[1] if candidates else True


def verify(as_of):
    errors, warnings = [], []
    aliases = redirects()
    texts = {p: p.read_text() for p in base.public_files() if p.name != base.VERIFICATION}
    pages = {p: SeoPage(text) for p, text in texts.items()}
    info, graph = {}, defaultdict(set)
    counts = Counter(pages=len(pages))

    def fail(path, message):
        errors.append(f'{path.relative_to(ROOT)}: {message}')

    for path, page in pages.items():
        text = texts[path]
        relative = str(path.relative_to(ROOT))
        canonical = [link.get('href', '') for link in page.links if link.get('rel') == 'canonical']
        description = meta(page, 'description')
        title = re.findall(r'<title[^>]*>(.*?)</title>', text, re.I | re.S)
        if len(title) != 1 or not title[0].strip():
            fail(path, 'requires exactly one nonempty title')
        if relative not in aliases and (len(description) != 1 or not description[0].strip()):
            fail(path, 'requires exactly one nonempty description')
        if len(canonical) != 1 or not canonical[0].startswith(ORIGIN + '/'):
            fail(path, 'requires one absolute canonical on the primary HTTPS origin')
        if page.h1_count != 1 and relative not in aliases:
            fail(path, f'expected one H1, found {page.h1_count}')
        duplicates = [key for key, n in Counter(page.ids).items() if n > 1]
        if duplicates:
            fail(path, f'duplicate IDs: {duplicates}')
        canonical = canonical[0] if canonical else ''
        noindex = any('noindex' in value.lower().split(',') or re.search(r'\bnoindex\b', value, re.I) for value in meta(page, 'robots'))
        eligible = relative not in aliases and not noindex and canonical == canonical_path(path)
        info[path] = dict(canonical=canonical, indexable=eligible,
                          alternates={link.get('hreflang'): link.get('href', '') for link in page.links if link.get('rel') == 'alternate'},
                          title=title[0].strip() if title else '', description=description[0] if description else '')
        counts['redirects' if relative in aliases else ('indexable' if eligible else 'excluded')] += 1
        if relative in aliases:
            expected_redirect = ORIGIN + aliases[relative]
            if canonical != expected_redirect:
                fail(path, f'redirect canonical must be {expected_redirect}')
            refresh = [m.get('content', '') for m in page.meta if m.get('http-equiv', '').lower() == 'refresh']
            if len(refresh) != 1 or refresh[0].strip() not in ('0;url=' + expected_redirect, '0; url=' + expected_redirect):
                fail(path, 'redirect must refresh immediately to its exact canonical destination')
            if aliases[relative] not in page.anchors and expected_redirect not in page.anchors:
                fail(path, 'redirect requires a visible destination link')
            if noindex:
                fail(path, 'redirect should allow crawling and consolidation, not carry noindex')
        for reference in page.refs:
            target, fragment = base.local_target(path, reference)
            if target is None:
                continue
            counts['local_references'] += 1
            if not target.exists():
                fail(path, f'missing local destination: {reference}')
            elif fragment and target in pages and fragment not in pages[target].ids:
                fail(path, f'missing anchor: {reference}')
        for reference in page.anchors:
            target, _ = base.local_target(path, reference)
            if target in pages:
                graph[path].add(target)
        try:
            blocks = [json.loads(block) for block in base.LD.findall(text)]
            counts['jsonld_blocks'] += len(blocks)
        except json.JSONDecodeError as exc:
            fail(path, f'invalid JSON-LD: {exc}')
            blocks = []

        def schema(node):
            if isinstance(node, list):
                for child in node:
                    schema(child)
            elif isinstance(node, dict):
                kind = node.get('@type')
                if kind in ('Service', 'Product') and 'position' in node:
                    fail(path, f'{kind}.position belongs on a surrounding ListItem')
                if kind == 'ItemList' and any(isinstance(item, dict) and item.get('@type') == 'Product' for item in node.get('itemListElement', [])):
                    fail(path, 'product catalog must link to details through ListItem, not incomplete Product offers')
                if kind == 'Product' and node.get('offers') and not node.get('image'):
                    fail(path, 'Product offers lack the image required for merchant markup')
                for key, value in node.items():
                    if key in ('url', '@id', 'image', 'logo', 'item') and isinstance(value, str) and value.startswith(ORIGIN + '/'):
                        target, _ = base.local_target(path, value)
                        if target is not None and not target.exists():
                            fail(path, f'JSON-LD {key} has missing local target: {value}')
                    schema(value)
        schema(blocks)

    for relative in aliases:
        if ROOT / relative not in pages:
            errors.append(f'missing generated compatibility redirect: {relative}')

    for path, values in info.items():
        target, _ = base.local_target(path, values['canonical'])
        if target not in info:
            fail(path, 'canonical does not resolve to a generated page')
        elif not info[target]['indexable'] and target != path:
            fail(path, 'canonical points to a nonindexable or noncanonical destination')
        for language, url in values['alternates'].items():
            target, _ = base.local_target(path, url)
            if target not in info:
                fail(path, f'{language} alternate does not resolve to a page')
            elif values['indexable']:
                if not info[target]['indexable']:
                    fail(path, f'{language} alternate points to an excluded page')
                if language != 'x-default' and values['canonical'] not in info[target]['alternates'].values():
                    fail(path, f'{language} alternate is not reciprocal')

    for name in ('title', 'description'):
        used = defaultdict(list)
        for path, values in info.items():
            if values['indexable'] and values[name]:
                used[values[name]].append(str(path.relative_to(ROOT)))
        for group in used.values():
            if len(group) > 1:
                errors.append(f'duplicate {name}: {group}')

    entries = ET.parse(ROOT / 'sitemap.xml').findall('.//{*}url')
    sitemap_urls = [entry.findtext('{*}loc') for entry in entries]
    expected = {values['canonical'] for values in info.values() if values['indexable']}
    counts['sitemap_urls'] = len(sitemap_urls)
    if len(sitemap_urls) != len(set(sitemap_urls)):
        errors.append('sitemap contains duplicate URLs')
    for url in expected - set(sitemap_urls):
        errors.append(f'indexable canonical missing from sitemap: {url}')
    for url in set(sitemap_urls) - expected:
        errors.append(f'sitemap contains a missing, excluded or noncanonical URL: {url}')
    for entry in entries:
        lastmod = entry.findtext('{*}lastmod')
        if lastmod and lastmod[:10] > as_of:
            errors.append(f'future sitemap lastmod: {entry.findtext("{*}loc")} ({lastmod})')

    robots = ROOT / 'robots.txt'
    if not robots.exists():
        errors.append('robots.txt is missing')
    else:
        rules = robots.read_text()
        declared = re.findall(r'^\s*Sitemap:\s*(\S+)', rules, re.I | re.M)
        if ORIGIN + '/sitemap.xml' not in declared:
            errors.append('robots.txt does not declare the current sitemap')
        for agent in ('Googlebot', 'Bingbot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot'):
            for url in expected:
                if not robots_allowed(rules, agent, urlparse(url).path):
                    errors.append(f'robots.txt blocks {agent} from indexable URL: {url}')

    home = ROOT / 'index.html'
    depth = {home: 0}
    queue = deque([home])
    while queue:
        source = queue.popleft()
        for target in graph[source]:
            if target not in depth:
                depth[target] = depth[source] + 1
                queue.append(target)
    for path, values in info.items():
        if values['indexable'] and path not in depth:
            fail(path, 'indexable page is unreachable from homepage HTML links')
    counts['maximum_click_depth'] = max(depth.values(), default=0)
    counts['content_pages'] = counts['pages'] - counts['redirects']
    return {'counts': dict(counts), 'errors': errors, 'warnings': warnings,
            'pages': [{**values, 'path': str(path.relative_to(ROOT)), 'click_depth': depth.get(path)} for path, values in info.items()]}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--json', type=Path, help='optional full evidence output')
    parser.add_argument('--as-of', default=date.today().isoformat(), help='date used to reject future lastmod values')
    args = parser.parse_args()
    result = verify(args.as_of)
    if args.json:
        args.json.write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
    print(json.dumps(result['counts'], indent=2))
    for error in result['errors']:
        print('FAIL:', error)
    print('PASS: generated SEO contracts.' if not result['errors'] else f'FAIL: {len(result["errors"])} SEO errors.')
    raise SystemExit(bool(result['errors']))


if __name__ == '__main__':
    main()
