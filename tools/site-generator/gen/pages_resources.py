"""Resources hub, training paths, sector scenarios, investment/pricing and the CEO guide (IT/EN)."""
from .html import *
from .site import Page, SITE, url_of, ld_webpage, ld_faq, ld_breadcrumb, ld_service, ld_article, offer, UPDATED, UPDATED_IT, UPDATED_EN
from .templates import detail_page
from .pages_services import packages, PK_NOTE
from .data_articles import CEO_CATS, RES_CATS, FEATURED, RES_CATS_EN

READ = {'it': 'Leggi la guida', 'en': 'Read the guide'}


def res_card(tag_label, meta, title, desc, href, link_label):
    meta_html = tag(tag_label) + (f'<span>{esc(meta)}</span>' if meta else '')
    return (f'<a class="card card--link res-card" href="{esc(href)}"><div class="res-card__meta">{meta_html}</div>'
            f'<h3 class="h5">{esc(title)}</h3><p>{esc(desc)}</p><span class="link-arrow">{esc(link_label)}{icon("arrow", 14, 1.75)}</span></a>')


def category_block(slug, title, count_label, cards_html, cols=3):
    return (f'<div id="{slug}"><h3 class="h4 mb-6">{esc(title)} <span class="muted" style="font-weight:var(--w-regular);">· {esc(count_label)}</span></h3>'
            f'{grid(cards_html, cols)}</div>')


def stack(blocks_html):
    return '<div style="display:flex;flex-direction:column;gap:var(--space-12);">' + ''.join(blocks_html) + '</div>'


def article_itemlist(name, items):
    return {'@context': 'https://schema.org', '@type': 'ItemList', 'name': name, 'numberOfItems': len(items), 'itemListElement': [
        {'@type': 'ListItem', 'position': i + 1, 'url': url_of(href), 'name': title} for i, (href, title) in enumerate(items)]}


def unique_articles():
    seen, out = set(), []
    for _, _, items in RES_CATS:
        for href, _tag, title, _d, _n in items:
            if href not in seen:
                seen.add(href)
                out.append((href, title))
    return out


N_GUIDES = len(unique_articles())  # 36


# ---------------------------------------------------------------- risorse / resources

def risorse(lang):
    if lang == 'it':
        pre = ''
        tools = [
            ('chart', 'Calcolatore ROI', 'Stima in due minuti ore liberate, risparmio annuo e tempo di rientro dell’investimento. Le ipotesi di calcolo sono dichiarate.', 'roi-calculator.html', 'Usa il calcolatore'),
            ('wallet', 'Investimenti e prezzi', 'Percorsi di consulenza da €15.000 a oltre €100.000, prodotti on-premise e opzioni di pagamento, senza costi nascosti.', 'investimenti-ai.html', 'Vedi i prezzi'),
            ('layers', 'Scenari per settore', 'Sei scenari illustrativi: la sfida di partenza, la soluzione, le tecnologie e i tempi di un progetto AI.', 'casi-studio.html', 'Leggi gli scenari'),
            ('book', 'Guida AI per CEO', f'{N_GUIDES} articoli in 11 aree tematiche per chi guida una PMI: normativa, costi, ROI, competenze e settori.', 'guida-ai-ceo-2025.html', 'Apri la guida'),
            ('graduation', 'Percorsi formativi', 'Programmi per dirigenti, team tecnici e formazione aziendale su misura, in sede o da remoto.', 'risorse-formative.html', 'Scopri i percorsi'),
            ('calendar', 'Sessione strategica gratuita', '45 minuti con un consulente PugliAI e un report scritto con le opportunità AI e una stima del ROI.', 'sessione-strategica.html', 'Prenota la sessione'),
        ]
        featured = grid([res_card('Nuovo', cat, title, desc, href, READ['it']) for href, cat, title, desc in FEATURED], 3)
        cats = []
        for slug, name, items in RES_CATS:
            cards = [res_card(t, '', title, desc, href, READ['it']) for href, t, title, desc, _n in items]
            cats.append(category_block(slug, name, f'{len(items)} guide' if len(items) > 1 else '1 guida', cards))
        sections = [
            ('features', 'Da dove iniziare', 'Gli strumenti più usati.', None, tools, 3),
            ('html', section(section_head('Novità 2026', 'Le guide aggiornate nel 2026.', 'Agenti AI, conformità all’AI Act e misurazione del ROI: i tre temi più richiesti dalle PMI italiane.') + featured, cls='section--white')),
            ('html', section(section_head('Tutte le guide', f'{N_GUIDES} guide, organizzate per tema.', 'Ogni guida riporta esempi italiani, azioni concrete e la data dell’ultimo aggiornamento. Gli articoli sono in italiano.') + stack(cats))),
            ('faq', [
                ('Le guide sono gratuite?', 'Sì. Tutte le guide, gli strumenti e gli scenari del centro risorse sono gratuiti e consultabili senza registrazione né indirizzo email.'),
                ('Quali argomenti trattano le guide?', 'Fondamenti dell’AI, normativa (AI Act e GDPR), strategia e implementazione, automazione e agenti AI, funzioni aziendali, settori (manifatturiero, moda, finanza, agroalimentare, turismo, sanità, retail, studi professionali), formazione e mercato italiano.'),
                ('Da dove conviene iniziare?', 'Dalla guida «Come iniziare con l’AI nelle PMI» e da «Cos’è l’intelligenza artificiale per le PMI». Poi usa il calcolatore ROI per una prima stima e, se vuoi un confronto, prenota la sessione strategica gratuita.'),
                ('Quanto sono aggiornate le guide?', 'Ogni guida riporta la data dell’ultimo aggiornamento. I contenuti sono stati rivisti nel 2026 e le tre guide più recenti coprono agenti AI, AI Act e ROI. I dati di mercato citati sono indicativi e cambiano rapidamente.'),
                ('Le risorse sono disponibili in inglese?', 'Gli strumenti (calcolatore ROI, prezzi, scenari, percorsi formativi) e una guida per CEO sono disponibili anche in inglese. La raccolta di guide è in italiano.'),
            ]),
            ('cta_default',),
        ]
        spec = dict(path='risorse.html', alt='en/resources.html',
                    title='Risorse AI per PMI: guide e calcolatore ROI | PugliAI',
                    description=f'{N_GUIDES} guide gratuite sull’AI per le PMI italiane, un calcolatore ROI con ipotesi dichiarate, scenari per settore, prezzi e percorsi formativi. Senza registrazione.',
                    eyebrow='Risorse', h1='Guide, strumenti e articoli per portare l’AI in azienda.',
                    lead=f'{N_GUIDES} guide gratuite, un calcolatore ROI con ipotesi dichiarate, scenari per settore e i percorsi formativi PugliAI. Tutto consultabile online, senza registrazione.',
                    breadcrumb=[('Home', 'index.html'), ('Risorse', '')], crumb_urls=['index.html', 'risorse.html'],
                    sections=sections, ld_types='CollectionPage')
        return detail_page('it', spec, [article_itemlist('Guide AI per PMI di PugliAI', unique_articles())])
    tools = [
        ('chart', 'ROI calculator', 'Estimate hours freed, annual savings and payback time in two minutes. Every assumption is stated.', 'roi-calculator.html', 'Use the calculator'),
        ('wallet', 'Investment and pricing', 'Consulting programmes from €15,000 to over €100,000, on-premise products and payment options, with no hidden costs.', 'ai-investment.html', 'See the pricing'),
        ('layers', 'Sector scenarios', 'Six illustrative scenarios: the starting challenge, the solution, the technologies and the timeline of an AI project.', 'case-studies.html', 'Read the scenarios'),
        ('book', 'AI guide for CEOs', 'A six-chapter guide for the people who run a company: adoption, first projects, leadership and the EU AI Act.', 'ceo-ai-guide-2025.html', 'Open the guide'),
        ('graduation', 'Training paths', 'Programmes for executives, technical teams and tailored corporate training, on site or remote.', 'training-resources.html', 'See the paths'),
        ('calendar', 'Free strategy session', '45 minutes with a PugliAI consultant and a written report with AI opportunities and an ROI estimate.', 'strategy-session.html', 'Book the session'),
    ]
    featured = grid([res_card('In Italian', cat, title, desc, '../' + href, 'Read in Italian') for href, cat, title, desc in FEATURED], 3)
    overview = grid([card(f'<h3 class="h5 card__title" style="margin-top:0;">{esc(RES_CATS_EN[slug])}</h3><p class="card__text body-sm">{len(items)} guide{"s" if len(items) > 1 else ""} in Italian</p>', href=f'../risorse.html#{slug}')
                     for slug, _name, items in RES_CATS], 4)
    sections = [
        ('features', 'Where to start', 'The most used tools.', None, tools, 3),
        ('html', section(section_head('Italian guide library', f'{N_GUIDES} guides, written for the Italian market.', 'Our editorial team publishes in Italian. These are the three most recent 2026 updates; the full library is one click away.') + featured + '<div class="mt-8">' + link('Browse the full Italian library', '../risorse.html') + '</div>', cls='section--white')),
        ('html', section(section_head('By topic', 'Eight areas, from fundamentals to market.', None) + overview, cls='section--flush-top')),
        ('faq', [
            ('Are the resources free?', 'Yes. All guides, tools and scenarios in the resource centre are free and available without registration or an email address.'),
            ('Which resources are available in English?', 'The ROI calculator, the investment and pricing page, the sector scenarios, the training paths and the AI guide for CEOs. The library of in-depth guides is written in Italian for the Italian market.'),
            ('Where should I start?', 'With the AI guide for CEOs, then the ROI calculator for a first estimate. If you want a second opinion on your case, book the free 45-minute strategy session.'),
            ('How up to date are the guides?', 'Each guide shows the date of its last update. The content was reviewed in 2026 and the three most recent guides cover AI agents, the EU AI Act and ROI. Market figures are indicative and change quickly.'),
        ]),
        ('cta_default',),
    ]
    spec = dict(path='en/resources.html', alt='risorse.html',
                title='AI resources for SMEs: guides and ROI calculator | PugliAI',
                description=f'Free AI resources for SMEs: an ROI calculator with stated assumptions, sector scenarios, pricing, training paths and {N_GUIDES} in-depth guides in Italian.',
                eyebrow='Resources', h1='Guides, tools and articles to bring AI into your company.',
                lead=f'A free ROI calculator with stated assumptions, sector scenarios, transparent pricing, training paths and a guide for CEOs. Plus a library of {N_GUIDES} in-depth guides in Italian. No sign-up required.',
                breadcrumb=[('Home', 'index.html'), ('Resources', '')], crumb_urls=['en/index.html', 'en/resources.html'],
                sections=sections, ld_types='CollectionPage')
    return detail_page('en', spec)


# ---------------------------------------------------------------- risorse formative / training

def formative(lang):
    if lang == 'it':
        tracks = [
            service_card('users', 'Programma per dirigenti', 'Per titolari, direzione e responsabili di funzione: strategia, governance e gestione del cambiamento nell’era dell’AI.',
                         ['3 moduli da 2 giorni', 'Casi di settore ed esercitazioni sui vostri processi', 'Sessioni individuali di accompagnamento', 'Quadro strategico e piano d’azione', 'Attestato di partecipazione'], 'contatti.html', 'Richiedi informazioni', 'Direzione'),
            service_card('cpu', 'Percorso tecnico', 'Per sviluppatori, analisti e IT: dai fondamenti del machine learning alla messa in produzione, con laboratori pratici.',
                         ['8 settimane part-time', 'Laboratori pratici su infrastruttura dedicata', 'Progetti su casi reali dell’impresa', 'Affiancamento tecnico', 'Accesso agli strumenti professionali'], 'contatti.html', 'Richiedi informazioni', 'Tecnico'),
            service_card('building', 'Formazione aziendale su misura', 'Programma costruito sui vostri casi d’uso, in sede o da remoto, per gruppi da 10 a 100 persone.',
                         ['Assessment iniziale delle competenze', 'Programma personalizzato', 'In sede o da remoto', 'Gruppi da 10 a 100 persone', 'Supporto dopo il corso'], 'contatti.html', 'Richiedi un preventivo', 'Su misura'),
        ]
        sections = [
            ('answer', '<strong>PugliAI offre tre percorsi formativi sull’intelligenza artificiale per le PMI italiane: un programma per dirigenti, un percorso tecnico per sviluppatori e analisti, e una formazione aziendale su misura.</strong> Ogni percorso parte da un assessment iniziale e si conclude con un piano d’azione applicato ai processi dell’impresa.',
             [('Formati', 'In sede, da remoto o misto. Gruppi da 5 a 100 persone.'), ('Durata', 'Da un workshop di mezza giornata a percorsi di 8 settimane part-time.'),
              ('Incluso nei percorsi di consulenza', 'La formazione del team è compresa in AI Accelerator (fino a 5 persone) e AI Transformation (fino a 15 persone).'),
              ('Materiali', 'Guide, checklist e registrazioni restano a disposizione del team dopo il corso.'), ('Preventivo', 'Su richiesta, in base a durata, partecipanti e sede. Scrivi a sales@pugliai.com.')],
             f'A cura della redazione PugliAI · Ultimo aggiornamento: {UPDATED_IT}'),
            ('grid_cards', 'Percorsi', 'Tre percorsi, un metodo.', 'Ogni percorso alterna teoria essenziale ed esercitazioni sui processi reali dei partecipanti.', tracks, 3),
            ('steps', 'Come lavoriamo', 'Dall’assessment al piano d’azione.', None, [
                ('Assessment', 'Valutiamo competenze e obiettivi del gruppo con un questionario e un colloquio.'),
                ('Programma', 'Definiamo moduli, esercitazioni e materiali sui vostri processi reali.'),
                ('Erogazione', 'In sede, da remoto o misto, con laboratori pratici e verifiche intermedie.'),
                ('Dopo il corso', 'Materiali, registrazioni e un canale per le domande restano a disposizione del team.')]),
            ('features', 'Risorse gratuite', 'Per iniziare subito, senza registrazione.', None, [
                ('book', 'Guida AI per CEO', f'{N_GUIDES} articoli per chi guida una PMI: normativa, costi, ROI, competenze e settori.', 'guida-ai-ceo-2025.html', 'Apri la guida'),
                ('layers', 'Tutte le guide', 'La libreria completa organizzata per tema, dai fondamenti al mercato italiano.', 'risorse.html', 'Sfoglia le guide'),
                ('chart', 'Calcolatore ROI', 'Una stima in due minuti di ore liberate, risparmi e tempo di rientro.', 'roi-calculator.html', 'Usa il calcolatore'),
                ('search', 'Scenari per settore', 'Come si struttura un progetto AI in sei settori diversi.', 'casi-studio.html', 'Leggi gli scenari')], 4),
            ('faq', [
                ('Serve una preparazione tecnica per partecipare?', 'No, per il programma dirigenti e per la formazione aziendale non è richiesta. Il percorso tecnico presuppone basi di programmazione e familiarità con i dati.'),
                ('La formazione è inclusa nei percorsi di consulenza?', 'Sì: AI Accelerator include la formazione fino a 5 persone, AI Transformation fino a 15. I percorsi descritti in questa pagina possono essere acquistati anche separatamente.'),
                ('Rilasciate un attestato?', 'Sì, al termine di ogni percorso rilasciamo un attestato di partecipazione con i contenuti trattati e le ore svolte.'),
                ('La formazione è finanziabile?', 'In molti casi sì, tramite i fondi interprofessionali e gli incentivi regionali per la formazione. Vi indichiamo le opzioni disponibili in fase di preventivo.'),
            ]),
            ('cta_default',),
        ]
        spec = dict(path='risorse-formative.html', alt='en/training-resources.html',
                    title='Formazione AI per PMI: dirigenti e team tecnici | PugliAI',
                    description='Percorsi formativi PugliAI sull’AI: programma per dirigenti, percorso tecnico per sviluppatori e formazione aziendale su misura. In sede o da remoto.',
                    eyebrow='Risorse formative', h1='Formazione AI per il tuo team, dai dirigenti agli sviluppatori.',
                    lead='Tre percorsi formativi e una libreria di guide gratuite. In sede o da remoto, con esercitazioni sui processi della tua impresa.',
                    cta=('Richiedi informazioni', 'contatti.html'), ghost=('Vedi le guide gratuite', 'risorse.html'),
                    breadcrumb=[('Home', 'index.html'), ('Risorse', 'risorse.html'), ('Risorse formative', '')], crumb_urls=['index.html', 'risorse.html', 'risorse-formative.html'],
                    sections=sections)
        page, body = detail_page('it', spec)
        page.jsonld.append(ld_service(page, 'Formazione AI per PMI', spec['description'], 'AI training'))
        return page, body
    tracks = [
        service_card('users', 'Executive programme', 'For owners, management and heads of department: strategy, governance and change management in the AI era.',
                     ['3 modules of 2 days', 'Sector cases and exercises on your own processes', 'One-to-one coaching sessions', 'Strategic framework and action plan', 'Certificate of attendance'], 'contact.html', 'Request information', 'Executive'),
        service_card('cpu', 'Technical path', 'For developers, analysts and IT: from machine-learning fundamentals to production deployment, with hands-on labs.',
                     ['8 weeks part-time', 'Hands-on labs on dedicated infrastructure', 'Projects on real company cases', 'Technical mentoring', 'Access to professional tools'], 'contact.html', 'Request information', 'Technical'),
        service_card('building', 'Tailored corporate training', 'A programme built on your use cases, on site or remote, for groups of 10 to 100 people.',
                     ['Initial skills assessment', 'Custom curriculum', 'On site or remote', 'Groups of 10 to 100 people', 'Support after the course'], 'contact.html', 'Request a quote', 'Tailored'),
    ]
    sections = [
        ('answer', '<strong>PugliAI offers three AI training paths for Italian SMEs: an executive programme, a technical path for developers and analysts, and tailored corporate training.</strong> Every path starts with an assessment and ends with an action plan applied to the company’s own processes.',
         [('Formats', 'On site, remote or blended. Groups of 5 to 100 people.'), ('Duration', 'From a half-day workshop to 8-week part-time paths.'),
          ('Included in consulting programmes', 'Team training is included in AI Accelerator (up to 5 people) and AI Transformation (up to 15 people).'),
          ('Materials', 'Guides, checklists and recordings stay available to the team after the course.'), ('Quote', 'On request, based on duration, participants and location. Write to sales@pugliai.com.')],
         f'By the PugliAI editorial team · Last updated: {UPDATED_EN}'),
        ('grid_cards', 'Paths', 'Three paths, one method.', 'Each path alternates essential theory with exercises on the participants’ real processes.', tracks, 3),
        ('steps', 'How we work', 'From assessment to action plan.', None, [
            ('Assessment', 'We assess the group’s skills and goals with a questionnaire and an interview.'),
            ('Curriculum', 'We define modules, exercises and materials around your real processes.'),
            ('Delivery', 'On site, remote or blended, with hands-on labs and interim checks.'),
            ('After the course', 'Materials, recordings and a channel for questions stay available to the team.')]),
        ('features', 'Free resources', 'To start right away, no sign-up.', None, [
            ('book', 'AI guide for CEOs', 'Six chapters for the people who run a company: adoption, first projects, leadership and the EU AI Act.', 'ceo-ai-guide-2025.html', 'Open the guide'),
            ('layers', 'All resources', 'Calculator, scenarios, pricing and the Italian guide library.', 'resources.html', 'Browse the resources'),
            ('chart', 'ROI calculator', 'A two-minute estimate of hours freed, savings and payback time.', 'roi-calculator.html', 'Use the calculator'),
            ('search', 'Sector scenarios', 'How an AI project is structured in six different sectors.', 'case-studies.html', 'Read the scenarios')], 4),
        ('faq', [
            ('Do participants need a technical background?', 'No, not for the executive programme or the corporate training. The technical path assumes programming basics and familiarity with data.'),
            ('Is training included in the consulting programmes?', 'Yes: AI Accelerator includes training for up to 5 people, AI Transformation for up to 15. The paths on this page can also be purchased separately.'),
            ('Do you issue a certificate?', 'Yes, at the end of each path we issue a certificate of attendance listing the topics covered and the hours completed.'),
            ('Can the training be funded?', 'Often yes, through Italy’s inter-professional training funds and regional training incentives. We point out the available options when we prepare the quote.'),
        ]),
        ('cta_default',),
    ]
    spec = dict(path='en/training-resources.html', alt='risorse-formative.html',
                title='AI training for SMEs: executives and tech teams | PugliAI',
                description='PugliAI AI training paths: an executive programme, a technical path for developers and tailored corporate training. On site or remote, with free guides.',
                eyebrow='Training resources', h1='AI training for your team, from executives to developers.',
                lead='Three training paths and a library of free guides. On site or remote, with exercises on your company’s own processes.',
                cta=('Request information', 'contact.html'), ghost=('See the free resources', 'resources.html'),
                breadcrumb=[('Home', 'index.html'), ('Resources', 'resources.html'), ('Training resources', '')], crumb_urls=['en/index.html', 'en/resources.html', 'en/training-resources.html'],
                sections=sections)
    page, body = detail_page('en', spec)
    page.jsonld.append(ld_service(page, 'AI training for SMEs', spec['description'], 'AI training'))
    return page, body


# ---------------------------------------------------------------- casi studio / scenarios

SCENARIOS = {
    'it': [
        ('Manifatturiero', 'Azienda tessile, Lombardia', 'Produzione tessile di fascia alta, 50.000 pezzi al mese.',
         'Ridurre gli scarti e rendere più affidabile il controllo qualità sui tessuti pregiati, senza rallentare le linee.',
         'Controllo qualità con visione artificiale in linea e manutenzione predittiva sui telai critici, con un cruscotto per i capireparto.',
         [('Scarti', '−32%'), ('Efficienza produttiva', '+24%'), ('Risparmio annuo', '€2,1 mln'), ('Avvio', '6 settimane')], ['Visione artificiale', 'Manutenzione predittiva', 'Sensori di linea']),
        ('Servizi finanziari', 'Banca regionale, 150 filiali', 'Istituto di credito con rete di filiali e istruttorie ancora in gran parte manuali.',
         'Automatizzare l’istruttoria creditizia e ridurre i tempi di approvazione mantenendo il controllo del rischio.',
         'Analisi documentale con modelli linguistici, modello di rischio con supervisione umana su ogni decisione e tracciabilità completa.',
         [('Tempo di approvazione', '−75%'), ('Crediti deteriorati', '−18%'), ('Valore recuperato', '€3,5 mln'), ('Avvio', '10 settimane')], ['Analisi documentale', 'Modelli di rischio', 'Supervisione umana']),
        ('Retail', 'Catena di moda, 85 punti vendita', 'Rete di negozi fisici e canale e-commerce con assortimenti stagionali.',
         'Personalizzare l’esperienza d’acquisto e ridurre l’invenduto con previsioni della domanda più accurate.',
         'Motore di raccomandazione integrato con e-commerce e CRM, previsione della domanda per punto vendita e riassortimento assistito.',
         [('Conversione online', '+42%'), ('Invenduto', '−28%'), ('Ricavi incrementali', '€1,8 mln'), ('Avvio', '8 settimane')], ['Raccomandazioni', 'Previsione della domanda', 'Integrazione CRM']),
        ('Sanità', 'Clinica privata', 'Struttura con reparto di diagnostica per immagini e liste d’attesa in crescita.',
         'Ridurre i tempi di refertazione e le attese, ottimizzando i percorsi clinici.',
         'Supporto AI alla diagnostica per immagini con validazione del medico e gestione predittiva dei flussi di pazienti, con dati che restano nella struttura.',
         [('Tempo di diagnosi', '−45%'), ('Accuratezza di screening', '96%'), ('Pazienti in più all’anno', '2.500'), ('Avvio', '10 settimane')], ['Imaging medico', 'Gestione dei flussi', 'Dati on-premise']),
        ('Logistica', 'Operatore logistico nazionale, oltre 500 veicoli', 'Distribuzione su tutto il territorio con forti picchi stagionali.',
         'Ottimizzare i percorsi di consegna e prevedere i picchi stagionali della domanda.',
         'Ottimizzazione dinamica dei percorsi, previsione della domanda per area e pianificazione della flotta.',
         [('Costi carburante', '−22%'), ('Consegne al giorno', '+35%'), ('Risparmio annuo', '€2,8 mln'), ('Avvio', '8 settimane')], ['Ottimizzazione percorsi', 'Previsione della domanda', 'Telematica']),
        ('Automotive', 'Fornitore automotive di primo livello, oltre 200 macchine CNC', 'Produzione di componenti su più stabilimenti, con fermi macchina frequenti.',
         'Ridurre i fermi macchina non pianificati con la manutenzione predittiva.',
         'Sensori IoT sulle macchine critiche, rilevamento delle anomalie in edge e ordini di manutenzione generati automaticamente.',
         [('Fermi macchina', '−67%'), ('OEE', '+18%'), ('Risparmio annuo', '€4,2 mln'), ('Avvio', '8 settimane')], ['Sensori IoT', 'Rilevamento anomalie', 'Edge AI']),
    ],
    'en': [
        ('Manufacturing', 'Textile company, Lombardy', 'High-end textile production, 50,000 pieces a month.',
         'Cut waste and make quality control on premium fabrics more reliable without slowing down the lines.',
         'In-line quality control with computer vision and predictive maintenance on critical looms, with a dashboard for shift leaders.',
         [('Waste', '−32%'), ('Production efficiency', '+24%'), ('Annual savings', '€2.1m'), ('Go-live', '6 weeks')], ['Computer vision', 'Predictive maintenance', 'Line sensors']),
        ('Financial services', 'Regional bank, 150 branches', 'Lender with a branch network and largely manual credit files.',
         'Automate credit analysis and cut approval times while keeping risk under control.',
         'Document analysis with language models, a risk model with human sign-off on every decision and a full audit trail.',
         [('Approval time', '−75%'), ('Non-performing loans', '−18%'), ('Value recovered', '€3.5m'), ('Go-live', '10 weeks')], ['Document analysis', 'Risk models', 'Human oversight']),
        ('Retail', 'Fashion chain, 85 stores', 'Physical stores plus e-commerce, with seasonal assortments.',
         'Personalise the shopping experience and reduce unsold stock with more accurate demand forecasts.',
         'Recommendation engine integrated with e-commerce and CRM, store-level demand forecasting and assisted replenishment.',
         [('Online conversion', '+42%'), ('Unsold stock', '−28%'), ('Incremental revenue', '€1.8m'), ('Go-live', '8 weeks')], ['Recommendations', 'Demand forecasting', 'CRM integration']),
        ('Healthcare', 'Private clinic', 'Facility with an imaging department and growing waiting lists.',
         'Reduce reporting times and waiting lists by optimising clinical pathways.',
         'AI support for medical imaging with physician validation and predictive management of patient flows, with data staying inside the facility.',
         [('Time to diagnosis', '−45%'), ('Screening accuracy', '96%'), ('Additional patients a year', '2,500'), ('Go-live', '10 weeks')], ['Medical imaging', 'Patient flow', 'On-premise data']),
        ('Logistics', 'National logistics operator, 500+ vehicles', 'Nationwide distribution with strong seasonal peaks.',
         'Optimise delivery routes and predict seasonal demand peaks.',
         'Dynamic route optimisation, area-level demand forecasting and fleet planning.',
         [('Fuel costs', '−22%'), ('Deliveries a day', '+35%'), ('Annual savings', '€2.8m'), ('Go-live', '8 weeks')], ['Route optimisation', 'Demand forecasting', 'Telematics']),
        ('Automotive', 'Tier-1 automotive supplier, 200+ CNC machines', 'Component production across several plants, with frequent downtime.',
         'Cut unplanned downtime with predictive maintenance.',
         'IoT sensors on critical machines, anomaly detection at the edge and automatically generated maintenance orders.',
         [('Downtime', '−67%'), ('OEE', '+18%'), ('Annual savings', '€4.2m'), ('Go-live', '8 weeks')], ['IoT sensors', 'Anomaly detection', 'Edge AI']),
    ],
}


def scenario_card(lang, s):
    sector, profile, desc, challenge, solution, results, tech = s
    L = {'it': ('Scenario illustrativo', 'La sfida', 'La soluzione', 'Risultati attesi nello scenario', 'Tecnologie'),
         'en': ('Illustrative scenario', 'The challenge', 'The solution', 'Expected results in the scenario', 'Technologies')}[lang]
    tags = f'<div class="cluster" style="gap:8px;">{tag(sector)}{tag(L[0], "outline")}</div>'
    body = (f'{tags}<h3 class="h4" style="margin:16px 0 4px;">{esc(profile)}</h3><p class="body-sm muted" style="margin:0 0 16px;">{esc(desc)}</p>'
            f'<p class="label" style="margin:0 0 4px;">{L[1]}</p><p style="margin:0 0 14px;">{esc(challenge)}</p>'
            f'<p class="label" style="margin:0 0 4px;">{L[2]}</p><p style="margin:0 0 18px;">{esc(solution)}</p>'
            f'<p class="caption muted" style="margin:0 0 8px;">{L[3]}</p>{spec_grid(results, 2)}'
            f'<div class="cluster mt-6" style="gap:8px;">' + ''.join(tag(t, 'outline') for t in tech) + '</div>')
    return card(body, cls='card--pad-lg')


def casi(lang):
    cards = [scenario_card(lang, s) for s in SCENARIOS[lang]]
    if lang == 'it':
        sections = [
            ('answer', '<strong>Gli scenari di questa pagina mostrano il tipo di risultato che un progetto AI può produrre in una PMI: riduzione dei costi operativi, aumento della produttività, migliore qualità.</strong> Aziende e cifre sono esempi costruiti a scopo dimostrativo, non clienti reali. Dal 2023 abbiamo seguito oltre 50 PMI italiane: per referenze e risultati effettivi scrivi a sales@pugliai.com.',
             [('Cosa trovi', 'Sei scenari in sei settori, con sfida, soluzione, tecnologie e durata indicativa.'),
              ('Cosa non trovi', 'Nomi di clienti reali o risultati misurati: li condividiamo in un confronto diretto, con il consenso del cliente.'),
              ('L’unico numero garantito per iscritto', 'Se entro 12 mesi non raggiungiamo un ROI del 150%, continuiamo a lavorare senza costi aggiuntivi.'),
              ('Primi risultati', 'Con l’approccio POC-first i primi risultati misurabili arrivano entro 90 giorni; il ritorno completo in genere entro 6–12 mesi.')],
             f'A cura della redazione PugliAI · Ultimo aggiornamento: {UPDATED_IT}'),
            ('html', section(section_head('Sei scenari', 'Dalla sfida al risultato atteso.', 'Ogni scenario descrive un progetto tipo: il punto di partenza, cosa costruiamo, con quali tecnologie e in quanto tempo.') + grid(cards, 2))),
            ('faq', [
                ('Quali risultati ottengono i clienti di PugliAI?', 'Gli scenari mostrano il tipo di risultato che un progetto AI può produrre: meno costi operativi, più produttività, migliore qualità. Le cifre sono esempi dimostrativi, non risultati di clienti reali. Per referenze verificabili scrivi a sales@pugliai.com. L’unico impegno numerico che assumiamo per iscritto è la garanzia contrattuale: se entro 12 mesi non raggiungiamo un ROI del 150%, continuiamo a lavorare senza costi aggiuntivi.'),
                ('In quali settori opera PugliAI?', 'Manifatturiero e Industria 4.0, moda e lusso, servizi finanziari, retail ed e-commerce, sanità, logistica e automotive, oltre a studi professionali e turismo. Per ogni settore partiamo dai casi d’uso con il ritorno più rapido.'),
                ('Quanto tempo serve per vedere il ritorno dell’investimento?', 'Con l’approccio POC-first i primi risultati misurabili arrivano entro 90 giorni dall’avvio. Il ritorno completo si raggiunge in genere entro 6–12 mesi, a seconda della complessità della soluzione e del settore. Ogni progetto parte con KPI definiti per iscritto.'),
                ('Come misurate i risultati?', 'Concordiamo KPI specifici e misurabili prima di iniziare. Usiamo cruscotti di monitoraggio, report periodici e confronti prima/dopo. Le metriche tipiche: riduzione dei costi, ore liberate, qualità, tempi di risposta e soddisfazione dei clienti.'),
                ('Posso avere una valutazione gratuita del mio caso?', 'Sì. La sessione strategica gratuita di 45 minuti analizza i tuoi processi, individua i casi d’uso a maggiore impatto e stima il ritorno atteso, senza impegno.'),
            ]),
            ('cta_default',),
        ]
        spec = dict(path='casi-studio.html', alt='en/case-studies.html',
                    title='Scenari AI per PMI: sei esempi per settore | PugliAI',
                    description='Sei scenari illustrativi di progetti AI per PMI: sfida, soluzione, tecnologie e tempi in sei settori. Cifre di esempio, non risultati di clienti reali.',
                    eyebrow='Scenari per settore', h1='Come si struttura un progetto AI, settore per settore.',
                    lead='Sei scenari illustrativi: la sfida di partenza, la soluzione, le tecnologie e i tempi. Aziende e cifre sono esempi costruiti a scopo dimostrativo, non clienti reali: le referenze verificabili le condividiamo su richiesta.',
                    cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Calcola il tuo ROI', 'roi-calculator.html'),
                    breadcrumb=[('Home', 'index.html'), ('Risorse', 'risorse.html'), ('Scenari per settore', '')], crumb_urls=['index.html', 'risorse.html', 'casi-studio.html'],
                    sections=sections, ld_types='CollectionPage')
        return detail_page('it', spec)
    sections = [
        ('answer', '<strong>The scenarios on this page show the kind of result an AI project can produce in an SME: lower operating costs, higher productivity, better quality.</strong> Companies and figures are illustrative examples built for demonstration purposes, not real clients. Since 2023 we have supported more than 50 Italian SMEs: for references and actual results, write to sales@pugliai.com.',
         [('What you will find', 'Six scenarios in six sectors, each with challenge, solution, technologies and an indicative timeline.'),
          ('What you will not find', 'Real client names or measured results: we share those in a direct conversation, with the client’s consent.'),
          ('The only number we guarantee in writing', 'If 150% ROI is not reached within 12 months, we keep working at no extra cost.'),
          ('First results', 'With the POC-first approach the first measurable results arrive within 90 days; full return typically within 6–12 months.')],
         f'By the PugliAI editorial team · Last updated: {UPDATED_EN}'),
        ('html', section(section_head('Six scenarios', 'From the challenge to the expected result.', 'Each scenario describes a typical project: the starting point, what we build, with which technologies and how quickly.') + grid(cards, 2))),
        ('faq', [
            ('What results do PugliAI clients achieve?', 'The scenarios show the kind of result an AI project can produce: lower operating costs, higher productivity, better quality. The figures are illustrative examples, not real client results. For verifiable references write to sales@pugliai.com. The only numeric commitment we put in writing is the contractual guarantee: if 150% ROI is not reached within 12 months, we keep working at no extra cost.'),
            ('Which sectors does PugliAI work in?', 'Manufacturing and Industry 4.0, fashion and luxury, financial services, retail and e-commerce, healthcare, logistics and automotive, plus professional services and tourism. In every sector we start from the use cases with the fastest return.'),
            ('How long before the investment pays back?', 'With the POC-first approach the first measurable results arrive within 90 days of kick-off. Full return is typically reached within 6–12 months, depending on the complexity of the solution and the sector. Every project starts with KPIs defined in writing.'),
            ('How do you measure results?', 'We agree specific, measurable KPIs before we start. We use monitoring dashboards, periodic reports and before/after comparisons. Typical metrics: cost reduction, hours freed, quality, response times and customer satisfaction.'),
            ('Can I get a free assessment of my case?', 'Yes. The free 45-minute strategy session reviews your processes, identifies the highest-impact use cases and estimates the expected return, with no commitment.'),
        ]),
        ('cta_default',),
    ]
    spec = dict(path='en/case-studies.html', alt='casi-studio.html',
                title='AI scenarios for SMEs: six examples by sector | PugliAI',
                description='Six illustrative AI project scenarios for SMEs: challenge, solution, technologies and timeline in six sectors. Figures are examples, not real client results.',
                eyebrow='Sector scenarios', h1='How an AI project is structured, sector by sector.',
                lead='Six illustrative scenarios: the starting challenge, the solution, the technologies and the timeline. Companies and figures are examples built for demonstration purposes, not real clients: verifiable references are shared on request.',
                cta=('Book the strategy session', 'strategy-session.html'), ghost=('Calculate your ROI', 'roi-calculator.html'),
                breadcrumb=[('Home', 'index.html'), ('Resources', 'resources.html'), ('Sector scenarios', '')], crumb_urls=['en/index.html', 'en/resources.html', 'en/case-studies.html'],
                sections=sections, ld_types='CollectionPage')
    return detail_page('en', spec)


# ---------------------------------------------------------------- investimenti / investment

def price_table(head, rows):
    th = ''.join(f'<th>{esc(h)}</th>' for h in head)
    body = ''
    for r in rows:
        tds = ''.join((f'<td>{c}</td>' if i == 0 else f'<td class="is-muted">{esc(c)}</td>') for i, c in enumerate(r))
        body += f'<tr>{tds}</tr>'
    return f'<div class="table-wrap"><div class="table"><table><thead><tr>{th}</tr></thead><tbody>{body}</tbody></table></div></div>'


def prod_cell(name, sub, href):
    return f'<a href="{esc(href)}" style="font-weight:var(--w-medium);">{esc(name)}</a><br><span class="caption muted">{esc(sub)}</span>'


def investimenti(lang):
    if lang == 'it':
        rows = [
            [prod_cell('VoiceAI On-Premise', 'Licenza una tantum + supporto annuale', 'voiceai-on-premise.html'), '€25.000 · 1 linea, orario d’ufficio, italiano', '€45.000 · 5 linee, 24/7, IT + EN, integrazione CRM', 'da €75.000 · linee illimitate, voce personalizzata, integrazione completa'],
            [prod_cell('KnowledgeAI Enterprise', 'Licenza una tantum + supporto annuale', 'knowledgeai-enterprise.html'), '€30.000 · 50 utenti, 10 GB di documenti', '€55.000 · 200 utenti, 100 GB, permessi per ruolo', 'da €85.000 · utenti illimitati, modelli personalizzati, audit completo'],
            [prod_cell('Hosting MCP On-Premise', 'Canone mensile, servizio gestito', 'hosting-mcp.html'), '€290/mese', '€590/mese', 'su misura'],
            [prod_cell('Agenti AI autonomi', 'Canone mensile per agente, hosting MCP escluso', 'agenti-ai.html'), 'da €490/mese', 'su preventivo', 'su preventivo'],
        ]
        table_html = (section_head('Prodotti on-premise', 'Licenza una tantum o canone mensile.', 'I dati restano sui tuoi server. I prodotti si acquistano singolarmente o in abbinamento ai percorsi di consulenza.')
                      + price_table(['Prodotto', 'Starter', 'Business', 'Enterprise'], rows)
                      + '<p class="body-sm muted mt-6">Abbinando un percorso di consulenza a un prodotto on-premise si applica uno sconto dal 5% al 15% sul listino combinato; con AI Partnership, −20% su tutti i prodotti on-premise. Prezzi IVA esclusa.</p>')
        sections = [
            ('answer', '<strong>Un progetto AI con PugliAI costa da €15.000 (AI Accelerator, 3 mesi) a oltre €100.000 (AI Partnership, 12 mesi); i prodotti on-premise partono da €25.000 una tantum e l’hosting MCP da €290 al mese.</strong> Tutti i prezzi sono IVA esclusa, personalizzabili in base al perimetro e senza costi nascosti.',
             [('Percorsi di consulenza', 'AI Accelerator €15.000–25.000 (3 mesi) · AI Transformation €50.000–70.000 (6 mesi) · AI Partnership da €100.000 (12 mesi).'),
              ('Prodotti on-premise', 'VoiceAI da €25.000 · KnowledgeAI da €30.000 · Hosting MCP da €290/mese · Agenti AI da €490/mese.'),
              ('Garanzia', 'Se entro 12 mesi non raggiungiamo un ROI del 150%, continuiamo a lavorare senza costi aggiuntivi.'),
              ('Pagamenti', 'Rateizzazione fino a 24 mesi, quota legata ai risultati, supporto per incentivi e bandi. Da concordare in fase di offerta.'),
              ('Preventivo', 'Gratuito, dopo la sessione strategica di 45 minuti.')],
             f'A cura della redazione PugliAI · Ultimo aggiornamento: {UPDATED_IT}'),
            ('packages', 'Percorsi di consulenza', 'Tre percorsi, prezzo definito prima di iniziare.', 'Per PMI da 10 a 500 dipendenti. Perimetro e KPI concordati per iscritto, prezzi IVA esclusa.', packages('it'), PK_NOTE['it'], ('Vedi i dettagli dei percorsi', 'consulenza-strategica.html'), 'percorsi'),
            ('html', section(table_html, cls='section--white')),
            ('specs', 'Cosa è incluso', 'Niente sorprese, niente costi nascosti.', 'Ecco cosa ottieni con ogni percorso, e le opzioni di pagamento che possiamo concordare.', [
                ('Sempre incluso', ['Analisi iniziale e roadmap', 'Garanzia contrattuale di ROI', 'Conformità GDPR e AI Act', 'Documentazione e trasferimento di competenze']),
                ('Opzioni di pagamento', ['Rateizzazione fino a 24 mesi senza interessi', 'Quota legata ai risultati (success fee)', 'Supporto per Transizione 5.0, bandi e fondi europei', 'Compartecipazione ai ricavi per progetti selezionati']),
                ('Formazione e supporto', ['Workshop pratici per il team', 'Materiali e guide sempre disponibili', 'Supporto dedicato per tutta la durata', 'Revisioni periodiche dei KPI'])]),
            ('steps', 'La garanzia', 'Il ritorno dell’investimento è scritto nel contratto.', None, [
                ('Contrattuale', 'Il ROI minimo è scritto nel contratto, insieme ai KPI e al metodo di misura.'),
                ('Misurabile', 'Cruscotti e report periodici mostrano l’avanzamento rispetto agli obiettivi.'),
                ('Senza costi aggiuntivi', 'Se entro 12 mesi il ROI del 150% non è raggiunto, continuiamo a lavorare senza costi aggiuntivi fino a raggiungerlo.')]),
            ('faq', [
                ('Cosa include un percorso di consulenza?', 'Consulenza strategica per 3–12 mesi, automazioni pronte per vendite e marketing, implementazione delle soluzioni, formazione del team e supporto dedicato. Il perimetro e i KPI sono definiti per iscritto prima di iniziare; non ci sono servizi aggiuntivi obbligatori.'),
                ('Perché un percorso completo e non singoli servizi?', 'Molti progetti AI si fermano dopo il pilota perché mancano integrazione, formazione e misurazione. Il percorso integra strategia, tecnologia, formazione e supporto, e costa meno dell’acquisto separato degli stessi servizi.'),
                ('Quando arrivano i primi risultati?', 'Le automazioni pronte all’uso danno i primi risultati entro 2–4 settimane. Entro 90 giorni il primo insieme di soluzioni è in produzione e il team è operativo; il ritorno completo arriva in genere entro 6–12 mesi.'),
                ('Il mio team non ha competenze tecniche: è un problema?', 'No. La formazione è inclusa e le soluzioni sono progettate per chi lavora nei processi, non per specialisti. Alla fine del percorso il team gestisce le soluzioni in autonomia.'),
                ('Posso iniziare con AI Accelerator e poi crescere?', 'Sì. Molti clienti partono da AI Accelerator per validare l’approccio e passano poi a Transformation o Partnership: una parte dell’investimento iniziale viene riconosciuta sul percorso successivo.'),
            ]),
            ('cta_default',),
        ]
        spec = dict(path='investimenti-ai.html', alt='en/ai-investment.html',
                    title='Prezzi AI per PMI: percorsi, prodotti e garanzia | PugliAI',
                    description='Prezzi trasparenti per l’AI nelle PMI: percorsi da €15.000, prodotti on-premise da €25.000, hosting MCP da €290 al mese. Garanzia contrattuale di ROI.',
                    eyebrow='Investimenti e prezzi', h1='Quanto costa portare l’AI nella tua impresa.',
                    lead='Prezzi pubblici, definiti prima di iniziare. Tre percorsi di consulenza, quattro prodotti on-premise e una garanzia contrattuale sul ritorno dell’investimento.',
                    cta=('Richiedi un preventivo', 'sessione-strategica.html'), ghost=('Calcola il tuo ROI', 'roi-calculator.html'),
                    breadcrumb=[('Home', 'index.html'), ('Risorse', 'risorse.html'), ('Investimenti e prezzi', '')], crumb_urls=['index.html', 'risorse.html', 'investimenti-ai.html'],
                    sections=sections)
        page, body = detail_page('it', spec)
        page.jsonld.append(ld_service(page, 'Consulenza AI per PMI', spec['description'], 'AI consulting', offers=[
            offer(low=15000, high=25000, desc='AI Accelerator, 3 mesi'), offer(low=50000, high=70000, desc='AI Transformation, 6 mesi'), offer(price=100000, desc='AI Partnership, 12 mesi, da')]))
        return page, body
    rows = [
        [prod_cell('VoiceAI On-Premise', 'One-off licence + annual support', 'voiceai-on-premise.html'), '€25,000 · 1 line, office hours, Italian', '€45,000 · 5 lines, 24/7, IT + EN, CRM integration', 'from €75,000 · unlimited lines, custom voice, full integration'],
        [prod_cell('KnowledgeAI Enterprise', 'One-off licence + annual support', 'knowledgeai-enterprise.html'), '€30,000 · 50 users, 10 GB of documents', '€55,000 · 200 users, 100 GB, role-based access', 'from €85,000 · unlimited users, custom models, full audit'],
        [prod_cell('On-Premise MCP Hosting', 'Monthly fee, managed service', 'mcp-hosting.html'), '€290/month', '€590/month', 'custom'],
        [prod_cell('Autonomous AI agents', 'Monthly fee per agent, MCP hosting excluded', 'ai-agents.html'), 'from €490/month', 'on quotation', 'on quotation'],
    ]
    table_html = (section_head('On-premise products', 'One-off licence or monthly fee.', 'Your data stays on your servers. Products can be bought on their own or combined with a consulting programme.')
                  + price_table(['Product', 'Starter', 'Business', 'Enterprise'], rows)
                  + '<p class="body-sm muted mt-6">Combining a consulting programme with an on-premise product earns a 5% to 15% discount on the combined list price; with AI Partnership, −20% on all on-premise products. Prices exclude VAT.</p>')
    sections = [
        ('answer', '<strong>An AI project with PugliAI costs from €15,000 (AI Accelerator, 3 months) to over €100,000 (AI Partnership, 12 months); on-premise products start at €25,000 one-off and MCP hosting at €290 a month.</strong> All prices exclude VAT, are tailored to the scope and carry no hidden costs.',
         [('Consulting programmes', 'AI Accelerator €15,000–25,000 (3 months) · AI Transformation €50,000–70,000 (6 months) · AI Partnership from €100,000 (12 months).'),
          ('On-premise products', 'VoiceAI from €25,000 · KnowledgeAI from €30,000 · MCP hosting from €290/month · AI agents from €490/month.'),
          ('Guarantee', 'If 150% ROI is not reached within 12 months, we keep working at no extra cost.'),
          ('Payments', 'Instalments over up to 24 months, a fee tied to results, support with incentives and grants. Agreed at proposal stage.'),
          ('Quote', 'Free, after the 45-minute strategy session.')],
         f'By the PugliAI editorial team · Last updated: {UPDATED_EN}'),
        ('packages', 'Consulting programmes', 'Three programmes, price set before we start.', 'For SMEs with 10 to 500 employees. Scope and KPIs agreed in writing, prices exclude VAT.', packages('en'), PK_NOTE['en'], ('See the programme details', 'strategic-consulting.html'), 'programmes'),
        ('html', section(table_html, cls='section--white')),
        ('specs', 'What is included', 'No surprises, no hidden costs.', 'Here is what you get with every programme, and the payment options we can agree on.', [
            ('Always included', ['Initial analysis and roadmap', 'Contractual ROI guarantee', 'GDPR and EU AI Act compliance', 'Documentation and knowledge transfer']),
            ('Payment options', ['Interest-free instalments over up to 24 months', 'A fee tied to results (success fee)', 'Support with Transizione 5.0, grants and EU funds', 'Revenue sharing for selected projects']),
            ('Training and support', ['Hands-on workshops for the team', 'Materials and guides always available', 'Dedicated support for the whole programme', 'Periodic KPI reviews'])]),
        ('steps', 'The guarantee', 'The return on investment is written into the contract.', None, [
            ('Contractual', 'The minimum ROI is written into the contract, together with the KPIs and the measurement method.'),
            ('Measurable', 'Dashboards and periodic reports show progress against the targets.'),
            ('No extra cost', 'If 150% ROI is not reached within 12 months, we keep working at no extra cost until it is.')]),
        ('faq', [
            ('What does a consulting programme include?', 'Strategic consulting for 3–12 months, ready-made automations for sales and marketing, implementation of the solutions, team training and dedicated support. Scope and KPIs are defined in writing before we start; there are no mandatory add-ons.'),
            ('Why a complete programme rather than single services?', 'Many AI projects stop after the pilot because integration, training and measurement are missing. The programme combines strategy, technology, training and support, and costs less than buying the same services separately.'),
            ('When do the first results arrive?', 'Ready-made automations deliver first results within 2–4 weeks. Within 90 days the first set of solutions is in production and the team is up and running; full return typically arrives within 6–12 months.'),
            ('My team has no technical skills. Is that a problem?', 'No. Training is included and the solutions are designed for the people who work in the processes, not for specialists. By the end of the programme the team runs the solutions on its own.'),
            ('Can I start with AI Accelerator and scale later?', 'Yes. Many clients start with AI Accelerator to validate the approach and then move to Transformation or Partnership: part of the initial investment is credited towards the next programme.'),
        ]),
        ('cta_default',),
    ]
    spec = dict(path='en/ai-investment.html', alt='investimenti-ai.html',
                title='AI pricing for SMEs: programmes and products | PugliAI',
                description='AI pricing for SMEs: programmes from €15,000, on-premise products from €25,000, MCP hosting from €290 a month. Contractual ROI guarantee, no hidden costs.',
                eyebrow='Investment and pricing', h1='What it costs to bring AI into your company.',
                lead='Public prices, set before we start. Three consulting programmes, four on-premise products and a contractual guarantee on the return on investment.',
                cta=('Request a quote', 'strategy-session.html'), ghost=('Calculate your ROI', 'roi-calculator.html'),
                breadcrumb=[('Home', 'index.html'), ('Resources', 'resources.html'), ('Investment and pricing', '')], crumb_urls=['en/index.html', 'en/resources.html', 'en/ai-investment.html'],
                sections=sections)
    page, body = detail_page('en', spec)
    page.jsonld.append(ld_service(page, 'AI consulting for SMEs', spec['description'], 'AI consulting', offers=[
        offer(low=15000, high=25000, desc='AI Accelerator, 3 months'), offer(low=50000, high=70000, desc='AI Transformation, 6 months'), offer(price=100000, desc='AI Partnership, 12 months, from')]))
    return page, body


# ---------------------------------------------------------------- guida AI per CEO (IT)

def guida_ceo_it():
    cats = []
    for name, items in CEO_CATS:
        cards = [res_card(f'{n:02d}', f'{read} · {level}' if level else read, title, desc, href, READ['it']) for n, href, title, desc, read, level in items]
        cats.append(category_block('cat-' + str(len(cats) + 1), name, f'{len(items)} articoli' if len(items) > 1 else '1 articolo', cards))
    featured = grid([res_card('Aggiornato 2026', cat, title, desc, href, READ['it']) for href, cat, title, desc in FEATURED], 3)
    total = sum(len(items) for _, items in CEO_CATS)
    sections = [
        ('answer', f'<strong>La Guida AI per CEO di PugliAI è una raccolta gratuita di {total} articoli su come le PMI italiane possono adottare l’intelligenza artificiale: normativa AI Act, agenti AI, costi, ROI e strategie di implementazione.</strong> Consultabile online, senza registrazione.',
         [('Che cos’è', f'Una raccolta di {total} articoli, non un PDF da scaricare. Ogni articolo è una pagina consultabile online.'),
          ('Per chi', 'CEO, imprenditori e decisori di PMI italiane che stanno valutando l’adozione dell’AI.'),
          ('Argomenti', 'AI Act e conformità, agenti AI, costi e budget, calcolo del ROI, scelta del fornitore, casi d’uso per settore.'),
          ('Costo', 'Gratuita. Nessuna registrazione o email richiesta.'),
          ('Aggiornamento', 'Contenuti rivisti nel 2026; i dati di mercato citati sono indicativi e in rapida evoluzione.'),
          ('Lingua', 'Italiano. Una guida in inglese è disponibile su AI guide for CEOs.')],
         f'A cura della redazione PugliAI · Ultimo aggiornamento: {UPDATED_IT}'),
        ('steps', 'Come usare la guida', 'Quattro tappe, dalla teoria alla pratica.', None, [
            ('Parti dai fondamenti', 'Gli articoli 1 e 2 spiegano cosa può fare l’AI in una PMI, senza tecnicismi.'),
            ('Verifica gli obblighi', 'AI Act e GDPR: cosa cambia per la tua impresa e da quando.'),
            ('Scegli il primo progetto', 'Costi, ROI e casi d’uso per settore per individuare un pilota con ritorno misurabile.'),
            ('Guida il cambiamento', 'Competenze, leadership e cultura per far durare i risultati.')]),
        ('html', section(section_head('Aggiornamento 2026', 'I tre articoli più recenti.', 'Agenti AI, conformità all’AI Act e misurazione del ROI, rivisti a luglio 2026.') + featured, cls='section--flush-top')),
        ('html', section(section_head('La guida completa', f'{total} articoli in {len(CEO_CATS)} aree tematiche.', 'Articoli organizzati per categoria, dalla teoria alla pratica. Ogni articolo include esempi italiani e azioni concrete.') + stack(cats))),
        ('faq', [
            ('Cos’è l’intelligenza artificiale per le PMI?', 'L’insieme di tecnologie (machine learning, modelli linguistici, automazione intelligente) che permettono a una piccola o media impresa di automatizzare attività ripetitive, analizzare dati e prendere decisioni migliori. La guida parte da qui, senza presupporre competenze tecniche.'),
            ('Quanto costa implementare l’AI in una PMI italiana?', 'Gli strumenti in abbonamento partono da poche decine di euro per utente al mese. Un primo progetto strutturato con PugliAI parte da €15.000 (AI Accelerator, 3 mesi); gli agenti AI autonomi da €490 al mese; i prodotti on-premise da €25.000. Gli articoli su costi e ROI spiegano come costruire il budget.'),
            ('Cosa prevede l’AI Act per le PMI?', 'Divieti e obbligo di alfabetizzazione AI dal 2 febbraio 2025, obblighi per i modelli di uso generale dal 2 agosto 2025, applicazione generale (trasparenza e sistemi ad alto rischio dell’Allegato III) dal 2 agosto 2026, sistemi ad alto rischio integrati in prodotti regolamentati dal 2 agosto 2027. Le sanzioni per le PMI sono proporzionate alla dimensione. La checklist 2026 elenca le azioni concrete.'),
            ('Da dove iniziare?', 'Dalla valutazione della maturità digitale, poi dai casi d’uso con ritorno rapido (assistenza clienti, amministrazione, vendite), con un progetto pilota misurabile, formazione del team e regole chiare di governance. L’articolo «Come iniziare con l’AI» descrive i sette passi.'),
        ]),
        ('cta_default',),
    ]
    spec = dict(path='guida-ai-ceo-2025.html', alt='en/ceo-ai-guide-2025.html',
                title=f'Guida AI per CEO 2026: {total} articoli per le PMI | PugliAI',
                description=f'{total} articoli gratuiti per adottare l’intelligenza artificiale in una PMI: AI Act, agenti AI, costi, ROI, competenze, settori e leadership. Aggiornata al 2026.',
                eyebrow='Guida AI per CEO · edizione 2026', h1='La guida all’intelligenza artificiale per chi guida una PMI.',
                lead=f'{total} articoli in {len(CEO_CATS)} aree tematiche: normativa, implementazione, costi e ROI, competenze, settori, leadership. Gratuita, consultabile online, senza registrazione.',
                breadcrumb=[('Home', 'index.html'), ('Risorse', 'risorse.html'), ('Guida AI per CEO', '')], crumb_urls=['index.html', 'risorse.html', 'guida-ai-ceo-2025.html'],
                sections=sections, ld_types='CollectionPage')
    items = [(href, title) for _, its in CEO_CATS for _n, href, title, _d, _r, _l in its]
    return detail_page('it', spec, [article_itemlist('Guida AI per CEO italiani', items)])


# ---------------------------------------------------------------- AI guide for CEOs (EN)

def chapter(num, title, html_body):
    return section(f'<div class="prose"><p class="eyebrow">Chapter {num}</p><h2 style="margin-top:0;">{esc(title)}</h2>{html_body}</div>', container='container--narrow', cls='section--flush-top')


def guida_ceo_en():
    ch1 = ('<p class="lead">Artificial intelligence has moved from experiment to infrastructure. The question for a CEO is no longer whether to use it, but where to start and how to keep control of data, costs and compliance.</p>'
           '<p>Adoption in Italy is still low and concentrated in large companies: according to ISTAT, 8.2% of Italian enterprises with at least ten employees used AI technologies in 2024, up from 5% the year before, against an EU average of 13.5% (Eurostat). That gap is the opportunity. In most Italian sectors, the company that automates its repetitive work first competes with a cost base its peers do not have.</p>'
           '<p>Three things changed between 2023 and 2026. Generative models became good enough for everyday office work. On-premise deployment made it possible to use them without sending data outside the company. And the regulatory framework, the EU AI Act and Italy’s Law 132/2025, gave legal certainty. What has not changed is the failure mode: most AI projects stall after the pilot because nobody owns the process, the data or the measurement.</p>')
    ch2 = ('<p>Start where the work is repetitive, high-volume and already digital. In a typical SME the first returns come from five areas:</p>'
           '<ul><li><strong>Customer service:</strong> answering recurring requests, triaging tickets and emails, preparing replies for an operator to approve.</li>'
           '<li><strong>Sales and marketing:</strong> qualifying leads, following up, drafting proposals and content from the company’s own material.</li>'
           '<li><strong>Administration and finance:</strong> reading invoices and orders, reconciliations, recurring reports.</li>'
           '<li><strong>Operations:</strong> demand forecasting, inventory, predictive maintenance and quality control on production lines.</li>'
           '<li><strong>Knowledge work:</strong> finding and summarising internal documents, procedures and past projects.</li></ul>'
           '<p>Whatever the area, measure before you start: hours spent, error rates, response times, backlog. A pilot without a baseline cannot prove a return.</p>')
    ch3 = ('<p>An SME does not need an enterprise AI programme. It needs five decisions taken in the right order.</p>'
           '<ol><li><strong>One pilot with a measurable return within six months.</strong> Pick a single process, define the KPI and the owner, and set the go/no-go criteria in advance.</li>'
           '<li><strong>A roadmap, not a wish list.</strong> Sequence the next projects from simple automation to forecasting and agents, each building on the data and skills of the previous one.</li>'
           '<li><strong>Data governance.</strong> Decide where data lives, who can access it and which data may leave the company. On-premise deployment keeps sensitive data inside.</li>'
           '<li><strong>A cross-functional team.</strong> Operations, IT, HR and the legal or compliance function all sit at the table; the business owns the outcome, not the vendor.</li>'
           '<li><strong>A named owner for compliance and ethics.</strong> Someone keeps the inventory of AI systems, the documentation and the human-oversight rules up to date.</li></ol>'
           '<p>Budget realistically. A first structured project with PugliAI starts at €15,000 (AI Accelerator, three months); autonomous agents from €490 a month; on-premise products from €25,000. Subscription tools cost a few tens of euros per user per month, but they do not integrate with your systems on their own.</p>')
    ch4 = ('<p>AI transformation is cultural before it is technical. The leaders who succeed treat AI as a way to augment people’s work, not to replace it, and they say so explicitly.</p>'
           '<ul><li>Involve the people who do the work in designing the automation; they know where the exceptions are.</li>'
           '<li>Address fears about accuracy, security and jobs openly, with facts and with the rules you have set for human oversight.</li>'
           '<li>Invest in skills at every level: since 2 February 2025 the EU AI Act (Article 4) requires companies that use AI systems to ensure a sufficient level of AI literacy among their staff.</li>'
           '<li>Celebrate the first measurable wins and share what did not work; both build trust.</li>'
           '<li>Keep a person accountable for every automated decision that affects customers or employees.</li></ul>')
    timeline = ('<div class="table-wrap"><table><thead><tr><th>Date</th><th>What applies</th></tr></thead><tbody>'
                '<tr><td>2 February 2025</td><td>Prohibited practices (Art. 5) and the AI literacy obligation (Art. 4).</td></tr>'
                '<tr><td>2 August 2025</td><td>Governance rules, obligations for general-purpose AI models, penalties.</td></tr>'
                '<tr><td>2 August 2026</td><td>General application: transparency obligations (Art. 50) and the obligations for high-risk systems listed in Annex III (HR, credit, education, essential services and others).</td></tr>'
                '<tr><td>2 August 2027</td><td>High-risk systems that are safety components of products covered by EU product legislation (Annex I).</td></tr></tbody></table></div>')
    ch5 = ('<p>Regulation (EU) 2024/1689, the AI Act, applies in stages. Most SMEs are deployers of AI systems rather than providers, which keeps their obligations manageable: know which systems you use, tell people when they interact with AI, keep human oversight on decisions that matter, and comply with the high-risk rules only where a system falls into those categories.</p>'
           + timeline +
           '<p>In November 2025 the European Commission proposed a “Digital Omnibus” that would postpone parts of the high-risk regime, with backstop dates in late 2027 and 2028. At the time of writing it is a proposal, not law: plan on the dates above and check the current status before you commit budget to compliance work.</p>'
           '<p>Italy’s Law 132/2025, in force since 10 October 2025, is the first national AI law in the EU. It designates AgID and ACN as national authorities, requires that workers be informed when AI is used in the workplace, sets rules for AI in healthcare and the professions, protects works with a genuine human creative contribution, introduces a criminal offence for the unlawful dissemination of AI-generated or altered content, and authorises an investment programme of up to €1 billion through CDP Venture Capital.</p>'
           '<h3>A compliance framework that fits on one page</h3>'
           '<ol><li><strong>Inventory and classify:</strong> list every AI system in use and assess its risk level.</li>'
           '<li><strong>Document:</strong> keep records of data sources, suppliers, purposes and decisions.</li>'
           '<li><strong>Human oversight:</strong> define who reviews and can override automated decisions.</li>'
           '<li><strong>Transparency:</strong> inform customers and employees when they interact with AI, and label AI-generated content where required.</li></ol>'
           '<p>GDPR continues to apply in full: lawful basis, data minimisation, impact assessments where needed, and processors under contract.</p>')
    ch6 = ('<p>Ninety days are enough to go from intention to a running pilot.</p>'
           '<ol><li><strong>Assess your starting point</strong> (weeks 1–2): processes, data, skills and the tools already in use.</li>'
           '<li><strong>Pick the use case</strong> (week 3): clear return, short implementation, an owner who wants it.</li>'
           '<li><strong>Fix the data</strong> (weeks 3–6): where it lives, who can access it, what may leave the company.</li>'
           '<li><strong>Train the people involved</strong> (weeks 4–8): how the tool works, its limits, the oversight rules.</li>'
           '<li><strong>Set governance</strong> (week 6): the AI inventory, documentation and the person accountable.</li>'
           '<li><strong>Use the ecosystem</strong> (ongoing): consultants, universities, incentives such as Transizione 5.0 and regional grants.</li>'
           '<li><strong>Measure and iterate</strong> (from week 8): KPIs against the baseline, then scale or stop.</li></ol>'
           '<p>AI is a management decision before it is a technology decision. With a clear first project, honest measurement and a team that understands the rules, an SME can turn it into a lasting advantage. PugliAI is at your side on this path.</p>')
    sections = [
        ('answer', '<strong>The AI Guide for CEOs by PugliAI is a free online guide on how Italian small and medium enterprises can adopt artificial intelligence: where adoption stands, what to do first, how to lead the change, the EU AI Act timeline and a 90-day action plan.</strong> Readable online, no sign-up required.',
         [('What it is', 'A free online guide in six chapters. Use your browser’s print function to save it as a PDF.'),
          ('Who it is for', 'CEOs, founders and decision-makers at small and mid-sized companies evaluating AI adoption.'),
          ('Topics', 'AI adoption in Italy and Europe, where AI pays off first, a five-decision strategy, leadership and culture, the EU AI Act and Italian Law 132/2025, a 90-day action plan.'),
          ('Cost', 'Free. No registration or email required.'),
          ('Data', 'Market figures are quoted with their source and are indicative; they change quickly.'),
          (f'Language', f'English. The fuller Italian library of {sum(len(i) for _, i in CEO_CATS)} articles is at Guida AI per CEO italiani.')],
         f'By the PugliAI editorial team · Last updated: {UPDATED_EN}'),
        ('stats', [('8.2%', 'Italian enterprises (10+ employees) using AI in 2024, ISTAT'), ('13.5%', 'EU average in 2024, Eurostat'), ('2 Aug 2026', 'General application of the EU AI Act'), ('€15,000', 'Typical starting budget for a first structured project')]),
        ('html', chapter(1, 'Why this matters now', ch1).replace('section--flush-top', 'section--flush-top').replace('<section class="section section--flush-top"', '<section class="section"', 1)),
        ('html', chapter(2, 'Where AI pays off first', ch2)),
        ('html', chapter(3, 'A strategy that fits an SME', ch3)),
        ('html', chapter(4, 'Leading the change', ch4)),
        ('html', chapter(5, 'Regulation: the EU AI Act and Italian law', ch5)),
        ('html', chapter(6, 'Your 90-day action plan', ch6)),
        ('faq', [
            ('What does the AI guide for CEOs cover?', 'Six chapters: the state of AI adoption in Italy and Europe, the business areas where AI pays off first, a five-decision strategy for SMEs, leadership and culture, the EU AI Act and Italian Law 132/2025 with a one-page compliance framework, and a 90-day action plan. It is a web page you read online, not a PDF download.'),
            ('Who is the guide for?', 'CEOs, founders and senior managers of small and mid-sized companies who need to make decisions about AI without a technical background. It is written in plain language.'),
            ('How much does a first AI project cost?', 'Subscription tools cost a few tens of euros per user per month. A first structured project with PugliAI starts at €15,000 (AI Accelerator, three months); autonomous AI agents from €490 a month; on-premise products from €25,000. All prices exclude VAT.'),
            ('What does the EU AI Act require from an SME?', 'For most SMEs, which deploy rather than build AI systems: AI literacy for staff (since February 2025), an inventory of the systems in use, transparency towards people who interact with AI, human oversight on decisions that matter, and the high-risk obligations only where a system falls into those categories (from August 2026 for Annex III uses). Penalties for SMEs are proportionate to their size.'),
            ('How do I get started?', 'Assess your starting point, pick one use case with a measurable return, fix the data, train the people involved, set governance, use the ecosystem and measure against a baseline. The free 45-minute strategy session with PugliAI covers the first two steps.'),
        ]),
        ('html', section('<div class="center-block"><p class="lead">Looking for the Italian library?</p>' + link(f'Guida AI per CEO italiani ({sum(len(i) for _, i in CEO_CATS)} articles, in Italian)', '../guida-ai-ceo-2025.html') + '</div>', cls='section--flush-top')),
        ('cta_default',),
    ]
    spec = dict(path='en/ceo-ai-guide-2025.html', alt='guida-ai-ceo-2025.html',
                title='AI guide for CEOs 2026: strategy and the AI Act | PugliAI',
                description='A free six-chapter AI guide for CEOs of SMEs: adoption in Italy, where AI pays off first, strategy, leadership, the EU AI Act and a 90-day action plan.',
                eyebrow='AI guide for CEOs · 2026 edition', h1='Artificial intelligence for the people who run a company.',
                lead='A free six-chapter guide for CEOs and founders of small and mid-sized companies: where adoption stands, what to do first, how to lead the change and how to stay compliant with the EU AI Act. No sign-up required.',
                breadcrumb=[('Home', 'index.html'), ('Resources', 'resources.html'), ('AI guide for CEOs', '')], crumb_urls=['en/index.html', 'en/resources.html', 'en/ceo-ai-guide-2025.html'],
                sections=sections)
    page, body = detail_page('en', spec)
    page.jsonld.append(ld_article(page, 'AI guide for CEOs 2026: strategy, leadership and the EU AI Act for SMEs', '2025-01-15', UPDATED, 'Guide', author_person=False))
    return page, body


def build_all():
    for lang in ('it', 'en'):
        yield risorse(lang)
        yield formative(lang)
        yield casi(lang)
        yield investimenti(lang)
    yield guida_ceo_it()
    yield guida_ceo_en()
