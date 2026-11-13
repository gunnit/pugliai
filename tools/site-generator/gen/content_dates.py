"""Dated, meaningful page changes; shared asset rebuilds do not renew dates.

Articles keep the revision dates in their own Article JSON-LD. Add a page here
only after its content changes, with a short description of the actual change.
"""

CONTENT_UPDATES = {
    path: {'date': date, 'change': change}
    for paths, date, change in (
        (('index.html', 'en/index.html'), '2026-11-11',
         'Replaced the homepage with the approved cinematic design and interactive AI solution overview.'),
        (('contatti.html', 'en/contact.html'), '2026-11-08',
         'Added process qualification and optional discovery-source questions.'),
        (('privacy.html', 'en/privacy.html'), '2026-11-10',
         'Included the optional campaign asset identifier in consent-dependent enquiry context.'),
        (('cookie.html', 'en/cookie.html'), '2026-11-10',
         'Included the optional campaign asset identifier in the consent-dependent tab record.'),
        (('risorse.html', 'guida-ai-ceo-2025.html'), '2026-11-08',
         'Updated the linked supplier-selection guide title and description.'),
        (('servizi.html', 'en/services.html'), '2026-11-08',
         'Added process-readiness criteria and a direct qualified-intake route.'),
        (('en/resources.html',), '2026-11-08',
         'Updated the featured AI-agent guide teaser to match the revised article.'),
        ((
            'prodotti.html',
            'en/products.html',
            'voiceai-on-premise.html',
            'en/voiceai-on-premise.html',
            'knowledgeai-enterprise.html',
            'en/knowledgeai-enterprise.html',
            'hosting-mcp.html',
            'en/mcp-hosting.html',
            'architettura-tecnica.html',
            'en/technical-architecture.html',
            'acceleratore.html',
            'en/accelerator.html',
            'chi-siamo.html',
            'en/about-us.html',
            'gregor-maric.html',
            'en/gregor-maric.html',
            'servizi.html',
            'en/services.html',
            'consulenza-strategica.html',
            'en/strategic-consulting.html',
            'casi-studio.html',
            'en/case-studies.html',
            'investimenti-ai.html',
            'en/ai-investment.html',
            'en/ceo-ai-guide-2025.html',
            'guida-ai-ceo-2025.html',
            'risorse.html',
            'en/resources.html',
            'roi-calculator.html',
            'en/roi-calculator.html',
            'manifatturiero.html',
            'en/manufacturing.html',
            'servizi-finanziari.html',
            'en/financial-services.html',
            'sessione-strategica.html',
            'en/strategy-session.html',
        ), '2026-11-13',
         'Reviewed claims and sources, clarified examples and evaluation methods, updated guide references and structured data.'),
    )
    for path in paths
}


def content_modified(path, fallback):
    """Return the recorded content revision, retaining an unreviewed date."""
    return CONTENT_UPDATES.get(path, {}).get('date', fallback)
