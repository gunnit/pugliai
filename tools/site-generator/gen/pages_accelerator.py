"""PugliAI Accelerator programme, application form and confirmation (IT/EN)."""
from .html import *
from .site import Page, ld_webpage, ld_faq, ld_breadcrumb, url_of, FORMCARRY_ACCELERATOR, UPDATED_IT, UPDATED_EN, SITE, ORG
from .templates import FAQ_TITLE

IMG = 'src/assets/img/2026/incontro.jpg'

A_IT = dict(
    path='acceleratore.html', alt='en/accelerator.html',
    title='PugliAI Accelerator: 16 settimane per startup basate sull’AI | PugliAI',
    description='Programma di accelerazione di 16 settimane per startup basate sull’AI: oltre €100.000 di valore in servizi e supporto, mentorship settimanale, Demo Day con investitori e ponte verso Singapore tramite la partnership ISSA. Candidature aperte per il 2026.',
    eyebrow='Candidature aperte 2026', h1='PugliAI Accelerator: sedici settimane per la tua startup basata sull’AI.',
    lead='Un founder con gli strumenti AI giusti può fare il lavoro di un team. In 16 settimane costruiamo con te una startup AI-native: automazioni, mentorship dedicata e il ponte verso Singapore tramite la partnership ISSA.',
    cta=('Candidati ora', 'acceleratore-candidatura.html'), ghost=('Scopri il programma', '#programma'),
    glass=('Cohort 2026 · esempio', ['8–10 startup selezionate', 'Mentorship 1:1 ogni settimana', 'Demo Day con investitori']),
    answer_lead='<strong>Il PugliAI Accelerator è un programma di accelerazione di 16 settimane per startup basate sull’AI</strong>, gestito da PugliAI in Italia. Ogni cohort seleziona 8–10 startup e include oltre €100.000 di valore complessivo, mentorship settimanale e un ponte verso Singapore tramite la partnership ISSA.',
    answer_facts=[('Durata', '16 settimane, in quattro fasi. Cohort di 8–10 startup selezionate. Candidature aperte per il 2026.'),
                  ('Valore incluso', 'Oltre €100.000 complessivi: più di €50.000 in servizi AI (automazioni per risorse umane, vendite e marketing, prova di VoiceAI e KnowledgeAI, implementazione tecnica) e fino a €50.000 di supporto su bandi italiani ed europei.'),
                  ('Costo di partecipazione', 'Nessun modello fisso: i termini (quota, compenso, partecipazione ai ricavi o un mix) si definiscono caso per caso durante la selezione.'),
                  ('Singapore', 'Tramite ISSA (Italian-Singapore Strategic Alliance): accesso a oltre 500 investitori asiatici, supporto alla costituzione a Singapore, spazi ufficio e una settimana di ambientamento per le migliori startup.'),
                  ('Come candidarsi', 'Modulo online; la selezione valuta fase, team e mercato. Risposta entro 24 ore, decisione in circa tre settimane.')],
    answer_meta=f'A cura della redazione PugliAI · Ultimo aggiornamento: {UPDATED_IT}',
    ph_eyebrow='Il percorso', ph_h2='Quattro fasi, dall’idea al mercato.',
    phases=[('Fondamenta (settimane 1–4)', 'Validazione del modello di business, strategia AI e valutazione del team.'),
            ('Costruzione (settimane 5–10)', 'Sviluppo del prodotto AI, automazioni operative e perfezionamento del prototipo.'),
            ('Crescita (settimane 11–14)', 'Strategia di ingresso sul mercato, automazione delle vendite, preparazione per gli investitori.'),
            ('Lancio (settimane 15–16)', 'Demo Day, presentazione agli investitori e ponte verso Singapore.')],
    get_eyebrow='Cosa ottieni', get_h2='Un pacchetto completo per crescere.',
    get=[('bolt', 'Servizi AI inclusi', 'Automazioni per risorse umane, vendite e marketing pronte all’uso, prova di VoiceAI e KnowledgeAI, implementazione tecnica inclusa. Valore superiore a €50.000.'),
         ('wallet', 'Supporto su bandi e finanziamenti', 'Guida ai bandi italiani (Smart&Start, Invitalia) ed europei. Fino a €50.000 di supporto, con il programma ISSA per l’espansione a Singapore.'),
         ('users', 'Mentorship', 'Sessioni settimanali 1:1 con un mentore di riferimento, workshop con esperti ogni due settimane, accesso mensile all’advisory board.'),
         ('plane', 'Singapore', 'Oltre 500 investitori asiatici, supporto alla costituzione a Singapore e una settimana di ambientamento per le migliori startup del cohort.'),
         ('star', 'Demo Day e investitori', 'Evento finale con fondi e investitori italiani e la rete ISSA, preparazione intensiva della presentazione, incontri 1:1.'),
         ('graduation', 'Rete degli ex partecipanti', 'Accesso permanente alla comunità dei founder AI in Italia e opportunità di mentorship per i cohort successivi.')],
    sv_eyebrow='Servizi AI inclusi', sv_h2='Oltre €50.000 in automazioni pronte all’uso.',
    services=[('Automazione delle risorse umane', 'Valore €15.000', ['Selezione automatizzata dei candidati', 'Inserimento dei nuovi assunti', 'Cruscotto delle prestazioni']),
              ('Automazione delle vendite', 'Valore €20.000', ['Qualificazione dei contatti con l’AI', 'Contatti personalizzati automatizzati', 'Integrazione con il CRM e previsioni']),
              ('Automazione del marketing', 'Valore €15.000', ['Creazione di contenuti assistita', 'Automazione dei social', 'Email marketing con analisi']),
              ('Prova dei prodotti on-premise', 'Valore €10.000', ['Installazione di prova di VoiceAI', 'Progetto pilota KnowledgeAI', 'Conformità GDPR, nessun dato esterno'])],
    model_eyebrow='Modello di partnership', model_h2='Nessun modello fisso: valutiamo ogni progetto.',
    model_p='I termini (quota, compenso, partecipazione ai ricavi o un mix) vengono discussi durante la selezione, in base a:',
    model=['Fase attuale (idea, prototipo, primi ricavi)', 'Composizione ed esperienza del team', 'Dimensione dell’opportunità di mercato', 'Supporto necessario', 'Interesse per l’espansione a Singapore', 'Coerenza strategica con PugliAI'],
    faq=[('Quanto dura il programma?', '16 settimane, divise in quattro fasi: fondamenta (settimane 1–4), costruzione (5–10), crescita (11–14) e lancio (15–16). Ogni fase ha obiettivi precisi per portare la startup dall’idea al mercato.'),
         ('Quali sono i requisiti per candidarsi?', 'Team di 1–5 persone con un prodotto o servizio basato sull’AI o sulla tecnologia, un founder a tempo pieno, un prototipo anche iniziale e la disponibilità a costituire (o avere già) una società italiana.'),
         ('Quanto costa partecipare?', 'Non c’è un modello fisso. Valutiamo ogni progetto in base a fase, team, mercato e necessità. I termini (quota, compenso, partecipazione ai ricavi o una combinazione) vengono discussi durante la selezione.'),
         ('Devo trasferirmi a Brindisi o Bergamo?', 'No, il programma è ibrido: le sessioni di mentorship sono soprattutto a distanza, con alcuni eventi in presenza facoltativi (avvio e Demo Day). Gli uffici PugliAI sono a disposizione di chi vuole lavorare in sede.'),
         ('Quante startup selezionate per cohort?', '8–10 startup, per garantire attenzione personalizzata a ogni team con mentorship 1:1 settimanale e supporto dedicato.'),
         ('Cosa succede dopo il programma?', 'Dopo il Demo Day le startup entrano nella rete degli ex partecipanti, con accesso permanente alla comunità dei founder AI in Italia e supporto continuo per raccolta di capitali ed espansione internazionale.')],
    cta_h2='Pronto a lanciare la tua startup basata sull’AI?', cta_lead='Candidati al prossimo cohort: oltre €100.000 di valore, mentorship dedicata e il ponte verso Singapore.', cta_btn='Candidati ora', cta_href='acceleratore-candidatura.html', cta_ghost='Scrivi a sales@pugliai.com',
)

A_EN = dict(
    path='en/accelerator.html', alt='acceleratore.html',
    title='PugliAI Accelerator: 16 weeks for AI-driven startups | PugliAI',
    description='A 16-week acceleration programme for AI-driven startups: over €100,000 in services and support, weekly mentorship, Demo Day with investors and a bridge to Singapore through the ISSA partnership. Applications open for 2026.',
    eyebrow='Applications open 2026', h1='PugliAI Accelerator: sixteen weeks for your AI-driven startup.',
    lead='A founder with the right AI tools can do the work of a team. In 16 weeks we build an AI-native startup with you: automations, dedicated mentorship and a bridge to Singapore through the ISSA partnership.',
    cta=('Apply now', 'accelerator-apply.html'), ghost=('See the programme', '#programme'),
    glass=('Cohort 2026 · sample', ['8–10 startups selected', 'Weekly 1:1 mentorship', 'Demo Day with investors']),
    answer_lead='<strong>The PugliAI Accelerator is a 16-week acceleration programme for AI-driven startups</strong>, run by PugliAI in Italy. Each cohort selects 8–10 startups and includes over €100,000 in total value, weekly mentorship and a bridge to Singapore through the ISSA partnership.',
    answer_facts=[('Duration', '16 weeks, in four phases. Cohorts of 8–10 selected startups. Applications open for 2026.'),
                  ('Value included', 'Over €100,000 in total: more than €50,000 in AI services (HR, sales and marketing automations, VoiceAI and KnowledgeAI trials, technical implementation) and up to €50,000 of support on Italian and European grants.'),
                  ('Cost of participation', 'No fixed model: terms (equity, fee, revenue share or a mix) are defined case by case during selection.'),
                  ('Singapore', 'Through ISSA (Italian-Singapore Strategic Alliance): access to over 500 Asian investors, support with incorporation in Singapore, office space and a soft-landing week for the top startups.'),
                  ('How to apply', 'Online form; selection assesses stage, team and market. Reply within 24 hours, decision in about three weeks.')],
    answer_meta=f'By the PugliAI editorial team · Last updated: {UPDATED_EN}',
    ph_eyebrow='The journey', ph_h2='Four phases, from idea to market.',
    phases=[('Foundation (weeks 1–4)', 'Business-model validation, AI strategy and team assessment.'),
            ('Build (weeks 5–10)', 'AI product development, operational automations and prototype refinement.'),
            ('Scale (weeks 11–14)', 'Go-to-market strategy, sales automation, investor preparation.'),
            ('Launch (weeks 15–16)', 'Demo Day, investor pitch and the bridge to Singapore.')],
    get_eyebrow='What you get', get_h2='A complete package to grow.',
    get=[('bolt', 'AI services included', 'Ready-made HR, sales and marketing automations, VoiceAI and KnowledgeAI trials, technical implementation included. Worth over €50,000.'),
         ('wallet', 'Grant and funding support', 'Guidance on Italian (Smart&Start, Invitalia) and European grants. Up to €50,000 of support, with the ISSA programme for expansion to Singapore.'),
         ('users', 'Mentorship', 'Weekly 1:1 sessions with a lead mentor, expert workshops every two weeks, monthly access to the advisory board.'),
         ('plane', 'Singapore', 'Over 500 Asian investors, support with incorporation in Singapore and a soft-landing week for the top startups of the cohort.'),
         ('star', 'Demo Day and investors', 'Final event with Italian funds and investors and the ISSA network, intensive pitch preparation, 1:1 meetings.'),
         ('graduation', 'Alumni network', 'Permanent access to the AI founders community in Italy and mentorship opportunities for future cohorts.')],
    sv_eyebrow='AI services included', sv_h2='Over €50,000 in ready-made automations.',
    services=[('HR automation', 'Worth €15,000', ['Automated candidate screening', 'Onboarding automation', 'Performance dashboard']),
              ('Sales automation', 'Worth €20,000', ['AI lead qualification', 'Personalised automated outreach', 'CRM integration and forecasting']),
              ('Marketing automation', 'Worth €15,000', ['Assisted content creation', 'Social media automation', 'Email marketing with analytics']),
              ('On-premise product trial', 'Worth €10,000', ['VoiceAI trial deployment', 'KnowledgeAI pilot', 'GDPR compliant, no external data'])],
    model_eyebrow='Partnership model', model_h2='No fixed model: we assess every project.',
    model_p='Terms (equity, fee, revenue share or a mix) are discussed during selection, based on:',
    model=['Current stage (idea, prototype, first revenue)', 'Team composition and experience', 'Size of the market opportunity', 'Support needed', 'Interest in expanding to Singapore', 'Strategic fit with PugliAI'],
    faq=[('How long is the programme?', '16 weeks, divided into four phases: foundation (weeks 1–4), build (5–10), scale (11–14) and launch (15–16). Each phase has precise goals to take the startup from idea to market.'),
         ('What are the requirements to apply?', 'Teams of 1–5 people with an AI or tech-enabled product or service, one full-time founder, a prototype even at an early stage and willingness to incorporate (or already have) an Italian entity.'),
         ('How much does it cost to participate?', 'There is no fixed model. We assess each project on stage, team, market and needs. Terms (equity, fee, revenue share or a combination) are discussed during selection.'),
         ('Do I have to move to Brindisi or Bergamo?', 'No, the programme is hybrid: mentorship sessions are mostly remote, with some optional in-person events (kick-off and Demo Day). PugliAI’s offices are available to those who want to work on site.'),
         ('How many startups per cohort?', '8–10 startups, to guarantee personalised attention to every team with weekly 1:1 mentorship and dedicated support.'),
         ('What happens after the programme?', 'After Demo Day the startups join the alumni network, with permanent access to the AI founders community in Italy and ongoing support for fundraising and international expansion.')],
    cta_h2='Ready to launch your AI-driven startup?', cta_lead='Apply to the next cohort: over €100,000 in value, dedicated mentorship and the bridge to Singapore.', cta_btn='Apply now', cta_href='accelerator-apply.html', cta_ghost='Email sales@pugliai.com',
)


def accelerator(lang):
    c = A_IT if lang == 'it' else A_EN
    page = Page(lang=lang, path=c['path'], title=c['title'], description=c['description'], alt=c['alt'], chat=True)
    a = page.asset
    actions = btn(*c['cta']) + ghost_link(*c['ghost'])
    hero = inner_hero(c['eyebrow'], c['h1'], c['lead'], actions, a(IMG), '', glass_checks(*c['glass']))
    answer = section(answer_block(c['answer_lead'], c['answer_facts'], c['answer_meta']), cls='section--tight section--flush-bottom', container='container--narrow')
    phases = section(section_head(c['ph_eyebrow'], c['ph_h2']) + steps(c['phases'], cols=4), cls='section--white', id_='programma' if lang == 'it' else 'programme')
    get = section(section_head(c['get_eyebrow'], c['get_h2']) + grid([feature_card(*g) for g in c['get']], 3))
    sv = section(section_head(c['sv_eyebrow'], c['sv_h2']) + grid([card(f'<div class="cluster" style="justify-content:space-between;align-items:flex-start;"><h3 class="h5" style="margin:0;">{esc(t)}</h3>{tag(v)}</div><div class="mt-4">{checks(items, "checks--sm")}</div>') for t, v, items in c['services']], 4), cls='section--flush-top')
    model = section(f'<div class="grid grid--2" style="align-items:center;"><div>{section_head(c["model_eyebrow"], c["model_h2"])}<p class="muted">{esc(c["model_p"])}</p>{checks(c["model"])}</div>'
                    f'<img class="photo photo--tall" src="{a("src/assets/img/2026/team-olive-arch.jpg")}" alt="" loading="lazy" width="1600" height="1200"></div>', cls='section--white')
    faqs = faq_section(c['faq'], FAQ_TITLE[lang])
    cta = cta_band(c['cta_h2'], c['cta_lead'], c['cta_btn'], c['cta_href'], c['cta_ghost'], 'mailto:sales@pugliai.com')
    body = hero + answer + phases + get + sv + model + faqs + cta
    page.jsonld = [ld_webpage(page, c['title']),
                   {'@context': 'https://schema.org', '@type': 'EducationalOrganization', 'name': 'PugliAI Accelerator', 'description': c['description'], 'url': page.url,
                    'parentOrganization': {'@id': SITE + '/#organization'},
                    'offers': {'@type': 'Offer', 'name': 'PugliAI Accelerator 2026', 'availability': 'https://schema.org/InStock', 'url': url_of('acceleratore-candidatura.html' if lang == 'it' else 'en/accelerator-apply.html')}},
                   ld_faq(c['faq'])]
    return page, body


# ---------------------------------------------------------------- application form

F_IT = dict(
    path='acceleratore-candidatura.html', alt='en/accelerator-apply.html',
    title='Candidatura al PugliAI Accelerator | PugliAI',
    description='Candida la tua startup al PugliAI Accelerator: compila il modulo in 5–10 minuti. Conferma entro 24 ore, revisione in una settimana, colloquio video e decisione.',
    eyebrow='Candidature aperte 2026', h1='Candidati al PugliAI Accelerator.', lead='Compila il modulo in 5–10 minuti. Ti confermiamo la ricezione entro 24 ore.',
    sections=[
        ('Il founder', [('text', 'Nome e cognome', 'founder_name', True, 'name'), ('email', 'Email', 'founder_email', True, 'email'), ('tel', 'Telefono', 'founder_phone', True, 'tel'), ('url', 'Profilo LinkedIn', 'founder_linkedin', True, 'url'),
                        ('select', 'Ruolo attuale', 'founder_role', True, [('full-time', 'Founder a tempo pieno'), ('part-time', 'Founder a tempo parziale (in transizione)'), ('employee', 'Dipendente, pronto a lasciare'), ('student', 'Studente o ricercatore'), ('other', 'Altro')]),
                        ('textarea', 'Esperienza precedente', 'founder_experience', False, 'Startup precedenti, ruoli in aziende tecnologiche, progetti rilevanti')]),
        ('Il team', [('select', 'Numero di co-founder', 'team_size', True, [('1', 'Solo founder'), ('2', '2 co-founder'), ('3', '3 co-founder'), ('4', '4 co-founder'), ('5+', '5 o più')]),
                     ('textarea', 'Nomi e ruoli dei co-founder', 'team_members', False, 'Lascia vuoto se sei l’unico founder'),
                     ('select', 'Competenze tecniche nel team', 'team_tech', True, [('strong', 'Forti: CTO o sviluppatori con esperienza AI'), ('moderate', 'Moderate: competenze tecniche generali'), ('limited', 'Limitate: team soprattutto commerciale')]),
                     ('select', 'Disponibilità a tempo pieno', 'team_fulltime', True, [('yes', 'Sì, almeno un founder a tempo pieno'), ('soon', 'Entro l’inizio del programma'), ('no', 'No, tutti a tempo parziale')])]),
        ('L’azienda', [('text', 'Nome dell’azienda o del progetto', 'company_name', True, 'organization'),
                       ('select', 'Stato di registrazione', 'company_status', True, [('registered-it', 'Registrata in Italia'), ('registering', 'In fase di registrazione'), ('will-register', 'La registreremo per il programma'), ('registered-eu', 'Registrata in un altro Paese UE')]),
                       ('url', 'Sito web o demo', 'company_url', False, 'url'),
                       ('select', 'Settore', 'company_sector', True, [('saas', 'SaaS / software'), ('fintech', 'Fintech'), ('health', 'Healthtech / medtech'), ('ecommerce', 'E-commerce / retail'), ('manufacturing', 'Manifatturiero / Industria 4.0'), ('logistics', 'Logistica'), ('edtech', 'Edtech'), ('proptech', 'Proptech'), ('greentech', 'Greentech / sostenibilità'), ('other', 'Altro')]),
                       ('select', 'Fase attuale', 'company_stage', True, [('idea', 'Idea, nessun prodotto'), ('prototype', 'Prototipo funzionante'), ('mvp', 'Prototipo con primi utenti'), ('revenue', 'Primi ricavi'), ('growth', 'Crescita')]),
                       ('textarea', 'Trazione attuale', 'company_traction', False, 'Numeri, se disponibili: utenti, ricavi mensili, clienti')]),
        ('Prodotto e mercato', [('text', 'Descrizione in una frase (max 140 caratteri)', 'product_oneliner', True, ''), ('textarea', 'Problema che risolvi', 'product_problem', True, ''), ('textarea', 'La tua soluzione AI', 'product_solution', True, ''),
                                ('textarea', 'Concorrenza e differenziazione', 'product_competition', False, ''), ('text', 'Dimensione del mercato (facoltativa)', 'product_market', False, '')]),
        ('Coerenza con il programma', [('textarea', 'Perché il PugliAI Accelerator?', 'fit_why', True, ''), ('textarea', 'Obiettivi per le 16 settimane', 'fit_goals', True, ''),
                                       ('select', 'Servizi AI di maggiore interesse', 'fit_services', True, [('hr', 'Automazione delle risorse umane'), ('sales', 'Automazione delle vendite'), ('marketing', 'Automazione del marketing'), ('voiceai', 'VoiceAI On-Premise'), ('knowledgeai', 'KnowledgeAI Enterprise')]),
                                       ('select', 'Interesse per Singapore', 'fit_singapore', True, [('yes', 'Sì, è una priorità'), ('maybe', 'Forse, da esplorare'), ('no', 'No, per ora Italia ed Europa')])]),
        ('Ultimi dettagli', [('url', 'Video di presentazione (facoltativo, 2 minuti)', 'pitch_video', False, 'url'),
                             ('select', 'Come ci hai conosciuto?', 'hear_about', True, [('linkedin', 'LinkedIn'), ('google', 'Ricerca Google'), ('referral', 'Passaparola'), ('event', 'Evento'), ('press', 'Articolo'), ('issa', 'Rete ISSA'), ('other', 'Altro')]),
                             ('textarea', 'Altro che vuoi dirci', 'notes', False, '')]),
    ],
    consent_html='Acconsento al trattamento dei miei dati personali secondo l’<a href="privacy.html" target="_blank" rel="noopener">informativa sulla privacy</a> di PugliAI per la gestione della candidatura (Reg. UE 2016/679).',
    submit='Invia la candidatura', success_h3='Candidatura inviata.', success_p='Ti confermiamo la ricezione entro 24 ore.',
    side_next=('Cosa succede dopo', ['Conferma via email entro 24 ore', 'Revisione della candidatura (una settimana)', 'Colloquio video con il team (30 minuti)', 'Presentazione finale e discussione dei termini', 'Decisione e avvio']),
    side_prep=('Cosa preparare', ['Profilo LinkedIn aggiornato', 'Link a demo o prototipo', 'Numeri sulla trazione', 'Video di presentazione (facoltativo)']),
    side_help=('Serve aiuto?', 'Per domande sulla candidatura o sul programma scrivi a sales@pugliai.com.'),
)

F_EN = dict(
    path='en/accelerator-apply.html', alt='acceleratore-candidatura.html',
    title='Apply to the PugliAI Accelerator | PugliAI',
    description='Apply with your startup to the PugliAI Accelerator: fill in the form in 5–10 minutes. Confirmation within 24 hours, review in one week, video interview and decision.',
    eyebrow='Applications open 2026', h1='Apply to the PugliAI Accelerator.', lead='Fill in the form in 5–10 minutes. We confirm receipt within 24 hours.',
    sections=[
        ('The founder', [('text', 'Full name', 'founder_name', True, 'name'), ('email', 'Email', 'founder_email', True, 'email'), ('tel', 'Phone', 'founder_phone', True, 'tel'), ('url', 'LinkedIn profile', 'founder_linkedin', True, 'url'),
                         ('select', 'Current role', 'founder_role', True, [('full-time', 'Full-time founder'), ('part-time', 'Part-time founder (in transition)'), ('employee', 'Employee, ready to leave'), ('student', 'Student or researcher'), ('other', 'Other')]),
                         ('textarea', 'Previous experience', 'founder_experience', False, 'Previous startups, roles in tech companies, relevant projects')]),
        ('The team', [('select', 'Number of co-founders', 'team_size', True, [('1', 'Solo founder'), ('2', '2 co-founders'), ('3', '3 co-founders'), ('4', '4 co-founders'), ('5+', '5 or more')]),
                      ('textarea', 'Co-founders’ names and roles', 'team_members', False, 'Leave blank if you are the only founder'),
                      ('select', 'Technical skills in the team', 'team_tech', True, [('strong', 'Strong: CTO or developers with AI experience'), ('moderate', 'Moderate: general technical skills'), ('limited', 'Limited: mostly business team')]),
                      ('select', 'Full-time availability', 'team_fulltime', True, [('yes', 'Yes, at least one full-time founder'), ('soon', 'By the start of the programme'), ('no', 'No, all part-time')])]),
        ('The company', [('text', 'Company or project name', 'company_name', True, 'organization'),
                         ('select', 'Registration status', 'company_status', True, [('registered-it', 'Registered in Italy'), ('registering', 'Being registered'), ('will-register', 'We will register for the programme'), ('registered-eu', 'Registered in another EU country')]),
                         ('url', 'Website or demo', 'company_url', False, 'url'),
                         ('select', 'Sector', 'company_sector', True, [('saas', 'SaaS / software'), ('fintech', 'Fintech'), ('health', 'Healthtech / medtech'), ('ecommerce', 'E-commerce / retail'), ('manufacturing', 'Manufacturing / Industry 4.0'), ('logistics', 'Logistics'), ('edtech', 'Edtech'), ('proptech', 'Proptech'), ('greentech', 'Greentech / sustainability'), ('other', 'Other')]),
                         ('select', 'Current stage', 'company_stage', True, [('idea', 'Idea, no product yet'), ('prototype', 'Working prototype'), ('mvp', 'Prototype with first users'), ('revenue', 'First revenue'), ('growth', 'Growth')]),
                         ('textarea', 'Current traction', 'company_traction', False, 'Numbers, if available: users, monthly revenue, customers')]),
        ('Product and market', [('text', 'One-line description (max 140 characters)', 'product_oneliner', True, ''), ('textarea', 'Problem you solve', 'product_problem', True, ''), ('textarea', 'Your AI solution', 'product_solution', True, ''),
                                ('textarea', 'Competition and differentiation', 'product_competition', False, ''), ('text', 'Market size (optional)', 'product_market', False, '')]),
        ('Fit with the programme', [('textarea', 'Why the PugliAI Accelerator?', 'fit_why', True, ''), ('textarea', 'Goals for the 16 weeks', 'fit_goals', True, ''),
                                    ('select', 'AI services of most interest', 'fit_services', True, [('hr', 'HR automation'), ('sales', 'Sales automation'), ('marketing', 'Marketing automation'), ('voiceai', 'VoiceAI On-Premise'), ('knowledgeai', 'KnowledgeAI Enterprise')]),
                                    ('select', 'Interest in Singapore', 'fit_singapore', True, [('yes', 'Yes, it is a priority'), ('maybe', 'Maybe, to explore'), ('no', 'No, Italy and Europe for now')])]),
        ('Final details', [('url', 'Pitch video (optional, 2 minutes)', 'pitch_video', False, 'url'),
                           ('select', 'How did you hear about us?', 'hear_about', True, [('linkedin', 'LinkedIn'), ('google', 'Google search'), ('referral', 'Word of mouth'), ('event', 'Event'), ('press', 'Article'), ('issa', 'ISSA network'), ('other', 'Other')]),
                           ('textarea', 'Anything else you want to tell us', 'notes', False, '')]),
    ],
    consent_html='I consent to the processing of my personal data in accordance with PugliAI’s <a href="privacy.html" target="_blank" rel="noopener">privacy policy</a> for the management of my application (EU Reg. 2016/679).',
    submit='Send the application', success_h3='Application sent.', success_p='We confirm receipt within 24 hours.',
    side_next=('What happens next', ['Email confirmation within 24 hours', 'Application review (one week)', 'Video interview with the team (30 minutes)', 'Final presentation and discussion of terms', 'Decision and onboarding']),
    side_prep=('What to prepare', ['Updated LinkedIn profile', 'Link to demo or prototype', 'Traction numbers', 'Pitch video (optional)']),
    side_help=('Need help?', 'For questions about the application or the programme write to sales@pugliai.com.'),
)


def _control(kind, label, name, required, extra):
    if kind == 'select':
        return select(label, name, name, extra, required=required, placeholder='—')
    if kind == 'textarea':
        return field(label, name, name, 'textarea', required=required, placeholder=extra or '')
    return field(label, name, name, kind, required=required, autocomplete=extra or '')


def apply(lang):
    c = F_IT if lang == 'it' else F_EN
    page = Page(lang=lang, path=c['path'], title=c['title'], description=c['description'], alt=c['alt'], form_source='acceleratore-candidatura')
    head = page_head(c['eyebrow'], c['h1'], c['lead'], breadcrumb([('Home', 'index.html'), ('PugliAI Accelerator', 'acceleratore.html' if lang == 'it' else 'accelerator.html'), (c['h1'].rstrip('.'), '')]))
    groups = ''
    for title, fields in c['sections']:
        groups += f'<fieldset><legend>{esc(title)}</legend><div class="form__row form__row--2">' + ''.join(_control(*f) for f in fields) + '</div></fieldset>'
    consent = (f'<div class="form-checkbox-group required"><input type="checkbox" id="privacy-consent" name="privacy_consent" class="form-checkbox" required aria-required="true" aria-describedby="privacy-error">'
               f'<label for="privacy-consent" class="form-checkbox-label">{c["consent_html"]}</label></div><span id="privacy-error" class="form-error" style="display:none;" aria-live="polite"></span>')
    form = (f'<form action="{FORMCARRY_ACCELERATOR}" method="POST" class="contact-form form" id="accelerator-application" data-ajax="true"><input type="hidden" name="source" value="acceleratore-candidatura">'
            f'{groups}{consent}<button type="submit" class="btn btn--primary btn--lg">{esc(c["submit"])}{icon("arrow", 16, 1.75)}</button></form>'
            f'<div id="form-success" class="form-success" style="display:none;" role="status"><h3>{esc(c["success_h3"])}</h3><p>{esc(c["success_p"])}</p></div>')
    side = (card(f'<h2 class="h4" style="margin-bottom:16px;">{esc(c["side_next"][0])}</h2><ol class="numbered">' + ''.join(f'<li>{esc(s)}</li>' for s in c['side_next'][1]) + '</ol>')
            + card(f'<h2 class="h4" style="margin-bottom:16px;">{esc(c["side_prep"][0])}</h2>{checks(c["side_prep"][1], "checks--sm")}', cls='mt-6')
            + card(f'<h2 class="h4" style="margin-bottom:8px;">{esc(c["side_help"][0])}</h2><p class="body-sm muted" style="margin:0;">{esc(c["side_help"][1])}</p>', cls='mt-6'))
    body = head + section(f'<div class="grid grid--7-5" style="align-items:start;"><div class="card card--pad-lg">{form}</div><div>{side}</div></div>', cls='section--flush-top')
    page.jsonld = [ld_webpage(page, c['title']), ld_breadcrumb([('Home', url_of('index.html' if lang == 'it' else 'en/index.html')), ('PugliAI Accelerator', url_of('acceleratore.html' if lang == 'it' else 'en/accelerator.html')), (c['h1'].rstrip('.'), page.url)])]
    return page, body


def apply_success(lang):
    if lang == 'it':
        page = Page(lang='it', path='acceleratore-success.html', title='Candidatura ricevuta | PugliAI Accelerator', description='Grazie per aver candidato la tua startup al PugliAI Accelerator: ti confermiamo la ricezione entro 24 ore.', alt='en/accelerator-success.html', noindex=True)
        h1, p, steps_ = 'Candidatura ricevuta.', 'Grazie per aver candidato la tua startup al PugliAI Accelerator. La esamineremo con attenzione.', [('Conferma via email', 'Entro 24 ore, con il riepilogo della candidatura.'), ('Revisione', 'Una settimana per valutare team, prodotto, mercato e coerenza con il programma.'), ('Colloquio video', '30 minuti per conoscerci e approfondire la startup.'), ('Decisione', 'Presentazione finale, discussione dei termini e avvio.')]
        btns = btn('Torna al programma', 'acceleratore.html') + ghost_link('Torna alla home', 'index.html', False)
    else:
        page = Page(lang='en', path='en/accelerator-success.html', title='Application received | PugliAI Accelerator', description='Thank you for applying with your startup to the PugliAI Accelerator: we confirm receipt within 24 hours.', alt='acceleratore-success.html', noindex=True)
        h1, p, steps_ = 'Application received.', 'Thank you for applying with your startup to the PugliAI Accelerator. We will review it carefully.', [('Email confirmation', 'Within 24 hours, with a summary of your application.'), ('Review', 'One week to assess team, product, market and fit with the programme.'), ('Video interview', '30 minutes to get to know you and explore the startup.'), ('Decision', 'Final presentation, discussion of terms and onboarding.')]
        btns = btn('Back to the programme', 'accelerator.html') + ghost_link('Back to the homepage', 'index.html', False)
    body = section(f'<div class="center-block" style="align-items:center;">{icon_badge("check", "lg")}<h1 class="h1">{esc(h1)}</h1><p class="lead">{esc(p)}</p><div class="cluster cluster--center">{btns}</div></div>') + section(steps(steps_, cols=4), cls='section--flush-top')
    page.jsonld = [ld_webpage(page, page.title)]
    return page, body


def build_all():
    for lang in ('it', 'en'):
        yield accelerator(lang)
        yield apply(lang)
        yield apply_success(lang)
