"""Dated, meaningful page changes; shared asset rebuilds do not renew dates.

Articles keep the revision dates in their own Article JSON-LD. Add a page here
only after its content changes, with a short description of the actual change.
"""

CONTENT_UPDATES = {
    path: {'date': date, 'change': change}
    for paths, date, change in (
        (('index.html', 'en/index.html'), '2026-11-08',
         'Added the process-assessment route to the qualified contact intake.'),
        (('contatti.html', 'en/contact.html'), '2026-11-08',
         'Added process qualification and optional discovery-source questions.'),
        (('privacy.html', 'en/privacy.html'), '2026-11-08',
         'Explained consent-dependent enquiry attribution and form context.'),
        (('cookie.html', 'en/cookie.html'), '2026-11-08',
         'Explained consent-dependent tab storage for enquiry attribution.'),
        (('risorse.html', 'guida-ai-ceo-2025.html'), '2026-11-08',
         'Updated the linked supplier-selection guide title and description.'),
        (('servizi.html', 'en/services.html'), '2026-11-08',
         'Added process-readiness criteria and a direct qualified-intake route.'),
        (('en/resources.html',), '2026-11-08',
         'Updated the featured AI-agent guide teaser to match the revised article.'),
    )
    for path in paths
}


def content_modified(path, fallback):
    """Return the recorded content revision, retaining an unreviewed date."""
    return CONTENT_UPDATES.get(path, {}).get('date', fallback)
