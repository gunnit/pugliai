"""Services hub + service detail pages (IT/EN)."""
from .html import *
from .site import ld_service, offer, UPDATED_IT, UPDATED_EN, SITE
from .templates import detail_page

IMG_DESK = 'src/assets/img/2026/scrivania.jpg'
IMG_MEET = 'src/assets/img/2026/incontro.jpg'
IMG_WORK = 'src/assets/img/2026/officina.jpg'
IMG_OLIVE = 'src/assets/img/2026/uliveti.jpg'


def packages(lang):
    if lang == 'it':
        return [('AI Accelerator', '€15.000 – €25.000', '3 mesi', 'Per chi parte da zero.', ['Audit AI iniziale', '2–3 automazioni pronte all’uso', 'Implementazione di una soluzione principale', 'Formazione del team (fino a 5 persone)', 'Dashboard ROI'], 'sessione-strategica.html', 'Prenota una sessione'),
                ('AI Transformation', '€50.000 – €70.000', '6 mesi', 'Per estendere l’AI a più processi.', ['5–7 automazioni', '2–3 soluzioni su misura', 'Formazione fino a 15 persone', 'Integrazione con i sistemi esistenti', 'Change management incluso'], 'sessione-strategica.html', 'Prenota una sessione'),
                ('AI Partnership', 'da €100.000', '12 mesi', 'Per fare dell’AI un vantaggio duraturo.', ['Team dedicato e stratega AI', 'Modelli AI su misura', 'Nessun limite al numero di automazioni', 'Revisioni trimestrali con la direzione', 'Strategia AI continuativa'], 'sessione-strategica.html', 'Parla con il team')]
    return [('AI Accelerator', '€15,000 – €25,000', '3 months', 'For companies starting from zero.', ['Initial AI audit', '2–3 ready-made automations', 'One core solution implemented', 'Team training (up to 5 people)', 'ROI dashboard'], 'strategy-session.html', 'Book a session'),
            ('AI Transformation', '€50,000 – €70,000', '6 months', 'To extend AI to more processes.', ['5–7 automations', '2–3 custom solutions', 'Training for up to 15 people', 'Integration with existing systems', 'Change management included'], 'strategy-session.html', 'Book a session'),
            ('AI Partnership', 'from €100,000', '12 months', 'To make AI a lasting advantage.', ['Dedicated team and AI strategist', 'Custom AI models', 'No limit on the number of automations', 'Quarterly reviews with management', 'Ongoing AI strategy'], 'strategy-session.html', 'Talk to the team')]


PK_NOTE = {'it': 'Garanzia contrattuale: se entro 12 mesi non raggiungiamo un ROI del 150%, continuiamo a lavorare senza costi aggiuntivi. Prezzi IVA esclusa.',
           'en': 'Contractual guarantee: if 150% ROI is not reached within 12 months, we keep working at no extra cost. Prices exclude VAT.'}


# ---------------------------------------------------------------- servizi / services

def servizi(lang):
    if lang == 'it':
        spec = dict(
            path='servizi.html', alt='en/services.html', chat=True,
            title='Servizi di consulenza AI per PMI: percorsi a prezzo fisso | PugliAI',
            description='Consulenza strategica, automazioni pronte all’uso, formazione e affiancamento in tre percorsi a prezzo fisso: AI Accelerator, AI Transformation e AI Partnership. KPI concordati per iscritto.',
            eyebrow='Servizi', h1='Consulenza AI a prezzo fisso, con risultati misurabili.',
            lead='Strategia, automazioni, formazione e affiancamento in un unico percorso. Definiamo i KPI prima di iniziare e li mettiamo per iscritto nel contratto.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Confronta i percorsi', '#percorsi'),
            image=(IMG_DESK, 'Scrivania con computer portatile e quaderno di appunti'), glass=('Roadmap AI · esempio', ['Automazione preventivi · attiva', 'Assistente ordini · in test', 'Formazione team · 12 persone']),
            sections=[
                ('answer', '<strong>PugliAI offre tre percorsi di consulenza AI a prezzo fisso per le PMI italiane</strong>: AI Accelerator (€15.000–€25.000, 3 mesi), AI Transformation (€50.000–€70.000, 6 mesi) e AI Partnership (da €100.000, 12 mesi). Ogni percorso comprende consulenza strategica, automazioni, formazione del team e supporto dedicato.',
                 [('AI Accelerator', '€15.000–€25.000 · 3 mesi · audit AI iniziale, 2–3 automazioni pronte all’uso, formazione del team, dashboard ROI. Per chi parte da zero.'),
                  ('AI Transformation', '€50.000–€70.000 · 6 mesi · trasformazione su più processi, 2–3 soluzioni su misura, formazione fino a 15 persone.'),
                  ('AI Partnership', 'Da €100.000 · 12 mesi · innovazione continua con team dedicato e modelli AI su misura.'),
                  ('Primi risultati', '2–4 settimane dall’avvio, grazie alle automazioni pronte all’uso.'),
                  ('Garanzia', 'Contrattuale: KPI misurabili definiti insieme prima dell’avvio. Se entro 12 mesi non raggiungiamo un ROI del 150%, continuiamo a lavorare senza costi aggiuntivi.'),
                  ('Settori', 'Manifatturiero, moda e lusso, servizi finanziari, sanità, turismo, agroalimentare, retail e studi professionali.'),
                  ('Prerequisiti', 'Nessuna competenza tecnica richiesta. PMI da 10 a 500 dipendenti, in tutta Italia.')],
                 f'A cura di <a href="gregor-maric.html">Gregor Marić, CEO &amp; Founder</a> · Prezzi IVA esclusa · Ultimo aggiornamento: {UPDATED_IT}'),
                ('features', 'Cosa comprende', 'Tutto quello che serve, in un unico percorso.', None, [
                    ('chart', 'Consulenza strategica', 'Roadmap AI su misura, sessioni settimanali o mensili, priorità decise sulla base dei numeri.', 'consulenza-strategica.html', 'Scopri'),
                    ('bolt', 'Automazioni pronte all’uso', 'Marketing, vendite e servizio clienti attivi in 2–4 settimane, senza bisogno di competenze tecniche interne.', 'agenti-ai.html', 'Scopri'),
                    ('users', 'Formazione del team', 'Workshop pratici fino a 15 persone: il team diventa autonomo nell’uso quotidiano dell’AI.', 'risorse-formative.html', 'Scopri'),
                    ('shield', 'Supporto dedicato', 'Monitoraggio, ottimizzazioni e aggiornamenti inclusi per tutta la durata del percorso.', 'contatti.html', 'Contattaci')], 4),
                ('packages', 'Percorsi di consulenza', 'Un percorso a prezzo fisso, definito prima di iniziare.', 'Tre percorsi per PMI da 10 a 500 dipendenti. KPI concordati per iscritto, prezzi IVA esclusa.', packages('it'), PK_NOTE['it'], ('Vedi i prodotti on-premise', 'prodotti.html'), 'percorsi'),
                ('steps', 'Come funziona', 'Quattro passaggi, tempi certi.', None, [
                    ('Sessione strategica gratuita', 'Analizziamo i processi e individuiamo le opportunità con il ROI più alto.'),
                    ('Scelta del percorso', 'Definiamo insieme percorso, KPI e calendario. Tutto per iscritto.'),
                    ('Implementazione rapida', 'Prime automazioni attive in 2–4 settimane, formazione del team in parallelo.'),
                    ('Crescita continua', 'Monitoraggio, ottimizzazioni e nuove opportunità per tutta la durata del percorso.')]),
                ('features', 'Servizi specialistici', 'Quattro aree di intervento.', 'Ogni percorso combina queste competenze in base alle priorità della tua azienda.', [
                    ('chart', 'Consulenza strategica', 'Valutazione della maturità AI, roadmap, business case e change management.', 'consulenza-strategica.html', 'Approfondisci'),
                    ('bolt', 'Agenti AI', 'Assistenti conversazionali e agenti autonomi che eseguono processi sui tuoi sistemi.', 'agenti-ai.html', 'Approfondisci'),
                    ('server', 'Infrastrutture AI', 'Architetture on-premise, cloud privato e ibride per far girare l’AI in sicurezza.', 'infrastrutture-ai.html', 'Approfondisci'),
                    ('flag', 'POC Framework', 'Un progetto pilota strutturato in 8 settimane per validare un caso d’uso prima di investire.', 'poc-framework.html', 'Approfondisci')], 4),
                ('links', 'Approfondimenti', 'Per decidere con cognizione di causa.', [
                    ('Costi AI per PMI', 'Guida ai costi e al budget per un progetto di intelligenza artificiale.', 'guida-ai/costi-ai-pmi-budget.html'),
                    ('Come iniziare con l’AI', 'I primi passi pratici per introdurre l’AI in azienda.', 'guida-ai/come-iniziare-ai-pmi.html'),
                    ('ROI dell’AI nel 2026', 'Come misurare il ritorno dell’investimento in intelligenza artificiale.', 'guida-ai/roi-intelligenza-artificiale-2026.html')]),
                ('faq', [
                    ('Qual è il percorso giusto per una PMI che inizia?', 'AI Accelerator: tre mesi con audit iniziale, automazioni pronte all’uso e formazione. È il punto di partenza per chi non ha ancora esperienza con l’AI.'),
                    ('Cosa comprende AI Accelerator?', 'Audit AI iniziale, 2–3 automazioni pronte all’uso, l’implementazione di una soluzione principale, la formazione del team fino a 5 persone, una dashboard per seguire il ROI e il supporto per tre mesi.'),
                    ('Come funziona la garanzia di ROI?', 'Definiamo insieme KPI misurabili prima dell’avvio e li scriviamo nel contratto. Se entro 12 mesi non raggiungiamo un ROI del 150%, continuiamo a lavorare senza costi aggiuntivi.'),
                    ('Servono competenze tecniche interne?', 'No. La complessità tecnica la gestiamo noi; il tuo team riceve una formazione pratica per usare gli strumenti ogni giorno.'),
                    ('Quali settori servite?', 'PMI di tutti i settori: manifatturiero, moda e lusso, servizi finanziari, sanità, turismo, agroalimentare, retail e studi professionali. Ogni percorso viene adattato alle esigenze del settore.')]),
                ('cta_default',),
            ])
    else:
        spec = dict(
            path='en/services.html', alt='servizi.html', chat=True,
            title='AI consulting services for SMEs: fixed-price programmes | PugliAI',
            description='Strategic consulting, ready-made automations, training and hands-on support in three fixed-price programmes: AI Accelerator, AI Transformation and AI Partnership. KPIs agreed in writing.',
            eyebrow='Services', h1='Fixed-price AI consulting, with measurable results.',
            lead='Strategy, automations, training and hands-on support in a single programme. We define the KPIs before we start and write them into the contract.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('Compare programmes', '#programmes'),
            image=(IMG_DESK, 'Desk with a laptop and a notebook'), glass=('AI roadmap · sample', ['Quote automation · live', 'Order assistant · in test', 'Team training · 12 people']),
            sections=[
                ('answer', '<strong>PugliAI offers three fixed-price AI consulting programmes for Italian SMEs</strong>: AI Accelerator (€15,000–€25,000, 3 months), AI Transformation (€50,000–€70,000, 6 months) and AI Partnership (from €100,000, 12 months). Every programme includes strategy consulting, automations, team training and dedicated support.',
                 [('AI Accelerator', '€15,000–€25,000 · 3 months · initial AI audit, 2–3 ready-made automations, team training, ROI dashboard. For companies starting from zero.'),
                  ('AI Transformation', '€50,000–€70,000 · 6 months · transformation across several processes, 2–3 custom solutions, training for up to 15 people.'),
                  ('AI Partnership', 'From €100,000 · 12 months · continuous innovation with a dedicated team and custom AI models.'),
                  ('First results', '2–4 weeks from kick-off, using ready-made automations.'),
                  ('Guarantee', 'Contractual: measurable KPIs agreed before kick-off. If 150% ROI is not reached within 12 months, we keep working at no extra cost.'),
                  ('Sectors', 'Manufacturing, fashion and luxury, financial services, healthcare, tourism, agrifood, retail and professional firms.'),
                  ('Prerequisites', 'No technical skills required. SMEs with 10 to 500 employees, across Italy.')],
                 f'By <a href="gregor-maric.html">Gregor Marić, CEO &amp; Founder</a> · Prices exclude VAT · Last updated: {UPDATED_EN}'),
                ('features', 'What is included', 'Everything you need, in one programme.', None, [
                    ('chart', 'Strategic consulting', 'A tailored AI roadmap, weekly or monthly sessions, priorities decided on the numbers.', 'strategic-consulting.html', 'Learn more'),
                    ('bolt', 'Ready-made automations', 'Marketing, sales and customer service live in 2–4 weeks, with no in-house technical skills required.', 'ai-agents.html', 'Learn more'),
                    ('users', 'Team training', 'Hands-on workshops for up to 15 people: your team becomes independent in everyday AI use.', 'training-resources.html', 'Learn more'),
                    ('shield', 'Dedicated support', 'Monitoring, optimisation and updates included for the whole programme.', 'contact.html', 'Contact us')], 4),
                ('packages', 'Consulting programmes', 'A fixed-price programme, defined before we start.', 'Three formats for companies with 10 to 500 employees. KPIs agreed in writing, prices exclude VAT.', packages('en'), PK_NOTE['en'], ('See the on-premise products', 'products.html'), 'programmes'),
                ('steps', 'How it works', 'Four steps, clear timelines.', None, [
                    ('Free strategy session', 'We review your processes and identify the opportunities with the highest ROI.'),
                    ('Choice of programme', 'Together we define programme, KPIs and calendar. All in writing.'),
                    ('Fast implementation', 'First automations live in 2–4 weeks, team training in parallel.'),
                    ('Continuous growth', 'Monitoring, optimisation and new opportunities for the whole programme.')]),
                ('features', 'Specialist services', 'Four areas of expertise.', 'Every programme combines these skills according to your company’s priorities.', [
                    ('chart', 'Strategic consulting', 'AI maturity assessment, roadmap, business case and change management.', 'strategic-consulting.html', 'Read more'),
                    ('bolt', 'AI agents', 'Conversational assistants and autonomous agents that run processes on your systems.', 'ai-agents.html', 'Read more'),
                    ('server', 'AI infrastructure', 'On-premise, private-cloud and hybrid architectures to run AI securely.', 'ai-infrastructure.html', 'Read more'),
                    ('flag', 'POC Framework', 'A structured 8-week pilot to validate a use case before investing.', 'poc-framework.html', 'Read more')], 4),
                ('links', 'Further reading', 'To decide with full knowledge.', [
                    ('AI costs for SMEs', 'A guide to costs and budgeting for an artificial intelligence project.', 'ai-investment.html'),
                    ('CEO AI guide', 'What business leaders need to know before adopting AI.', 'ceo-ai-guide-2025.html'),
                    ('ROI calculator', 'Estimate the potential return of AI for your company in a few minutes.', 'roi-calculator.html')]),
                ('faq', [
                    ('Which programme is right for an SME just starting out?', 'AI Accelerator: three months with an initial audit, ready-made automations and training. It is the starting point for companies with no AI experience yet.'),
                    ('What does AI Accelerator include?', 'An initial AI audit, 2–3 ready-made automations, the implementation of one core solution, team training for up to 5 people, a dashboard to track ROI and support for three months.'),
                    ('How does the ROI guarantee work?', 'We agree measurable KPIs before the start and write them into the contract. If 150% ROI is not reached within 12 months, we keep working at no extra cost.'),
                    ('Do we need in-house technical skills?', 'No. We handle the technical complexity; your team receives hands-on training to use the tools every day.'),
                    ('Which sectors do you serve?', 'SMEs in every sector: manufacturing, fashion and luxury, financial services, healthcare, tourism, agrifood, retail and professional firms. Each programme is adapted to the sector.')]),
                ('cta_default',),
            ])
    page, body = detail_page(lang, spec)
    name = 'Percorsi di consulenza AI PugliAI' if lang == 'it' else 'PugliAI AI consulting programmes'
    items = []
    for i, p in enumerate(packages(lang)):
        low, high = [(15000, 25000), (50000, 70000), (100000, None)][i]
        items.append({'@type': 'Service', 'position': i + 1, 'name': p[0], 'serviceType': 'AI consulting', 'provider': {'@id': SITE + '/#organization'},
                      'offers': offer(low=low, high=high) if high else offer(price=low)})
    page.jsonld.append({'@context': 'https://schema.org', '@type': 'ItemList', 'name': name, 'url': page.url, 'itemListElement': items})
    return page, body


# ---------------------------------------------------------------- consulenza strategica

def consulenza(lang):
    if lang == 'it':
        spec = dict(
            path='consulenza-strategica.html', alt='en/strategic-consulting.html', chat=True,
            title='Consulenza strategica AI per PMI: roadmap e ROI | PugliAI',
            description='Valutazione della maturità AI, roadmap con priorità e KPI, business case e change management. Consulenza pensata per CEO e direzioni di PMI, senza competenze tecniche richieste.',
            eyebrow='Consulenza strategica', h1='Una strategia AI che parte dai numeri della tua azienda.',
            lead='Guidiamo le PMI dalla valutazione iniziale al piano esecutivo: opportunità ordinate per ritorno atteso, tempi realistici e responsabilità chiare.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Vedi i percorsi', 'servizi.html#percorsi'),
            image=(IMG_MEET, 'Due persone a colloquio di lavoro a un tavolo davanti a una finestra'), glass=('Prime 12 settimane · esempio', ['Assessment e mappa dei processi', 'Roadmap con 3 priorità', 'Business case approvato']),
            breadcrumb=[('Home', 'index.html'), ('Servizi', 'servizi.html'), ('Consulenza strategica', '')], crumb_urls=['index.html', 'servizi.html', 'consulenza-strategica.html'],
            sections=[
                ('features', 'Cosa facciamo', 'Sei servizi, un unico obiettivo: decisioni migliori.', None, [
                    ('search', 'Valutazione della maturità AI', 'Analisi di infrastruttura, dati, competenze e processi per capire da dove partire e cosa evitare.'),
                    ('flag', 'Roadmap strategica', 'Priorità, sequenza dei progetti, risorse e traguardi misurabili su 3–12 mesi.'),
                    ('chart', 'Business case e ROI', 'Analisi costi-benefici per ogni iniziativa, con KPI e metodo di misurazione condivisi.'),
                    ('users', 'Change management e adozione', 'Formazione, governance e comunicazione interna perché l’AI venga usata davvero.'),
                    ('shield', 'Etica e conformità', 'GDPR, AI Act europeo, gestione dei rischi e trasparenza degli algoritmi.'),
                    ('trend', 'Ottimizzazione continua', 'Monitoraggio delle prestazioni, test e miglioramento dei modelli nel tempo.')], 3),
                ('steps', 'Il metodo', 'Dalla diagnosi alla scala, in quattro fasi.', None, [
                    ('Analisi', 'Stato attuale di infrastruttura, competenze e processi; opportunità specifiche del settore.'),
                    ('Piano', 'Strategia AI con roadmap dettagliata, priorità chiare e business case per ogni iniziativa.'),
                    ('Pilota', 'Un progetto pilota per validare l’approccio e dimostrare valore in tempi brevi.'),
                    ('Scala', 'Estensione delle soluzioni validate e ottimizzazione continua delle prestazioni.')]),
                ('stats', [('3–12', 'mesi di affiancamento'), ('50+', 'PMI seguite dal 2023'), ('150%', 'ROI garantito per contratto, entro 12 mesi'), ('0', 'competenze tecniche richieste')]),
                ('links', 'Approfondimenti', 'Letture utili per chi guida la trasformazione.', [
                    ('Leadership AI e trasformazione', 'Come i leader aziendali guidano l’adozione dell’AI nelle PMI.', 'guida-ai/leadership-ai-trasformazione.html'),
                    ('Come scegliere la consulenza AI', 'I criteri per selezionare il partner giusto in Italia.', 'guida-ai/come-scegliere-consulenza-ai-italia.html'),
                    ('Cultura aziendale e AI', 'Preparare l’organizzazione all’adozione dell’intelligenza artificiale.', 'guida-ai/cultura-aziendale-ai.html')]),
                ('faq', [
                    ('Come funziona la consulenza strategica AI per PMI?', 'Partiamo da una valutazione completa dei processi, individuiamo le opportunità a maggiore impatto e costruiamo una roadmap con priorità, tempi e budget. Poi accompagniamo l’implementazione con sessioni settimanali o mensili, per 3–12 mesi.'),
                    ('Quanto dura un progetto di consulenza?', 'Da 3 a 12 mesi a seconda degli obiettivi. La valutazione richiede 2–3 settimane, la strategia e la roadmap 1–2 settimane; segue l’affiancamento nell’implementazione, con traguardi verificabili.'),
                    ('Quali risultati posso aspettarmi?', 'Dipendono dal settore e dai processi su cui si interviene: per questo definiamo KPI misurabili prima dell’avvio invece di promettere medie. L’impegno che mettiamo per iscritto è la garanzia di ROI del 150% entro 12 mesi.'),
                    ('La consulenza include il supporto tecnico?', 'Sì: selezione dei fornitori, supervisione delle implementazioni, formazione del team, change management e monitoraggio. Restiamo al tuo fianco fino ai risultati.'),
                    ('Serve esperienza tecnica per beneficiarne?', 'No. La consulenza è pensata per CEO e direzioni senza background tecnico: traduciamo l’AI in termini di business, costi e risultati misurabili.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'consulenza-strategica.html'), 'Consulenza strategica AI', spec['description'], 'AI strategy consulting')]
    else:
        spec = dict(
            path='en/strategic-consulting.html', alt='consulenza-strategica.html', chat=True,
            title='AI strategy consulting for SMEs: roadmap and ROI | PugliAI',
            description='AI maturity assessment, prioritised roadmap with KPIs, business case and change management. Consulting designed for CEOs and management of SMEs, no technical skills required.',
            eyebrow='Strategic consulting', h1='An AI strategy that starts from your company’s numbers.',
            lead='We guide SMEs from the initial assessment to the execution plan: opportunities ranked by expected return, realistic timelines and clear responsibilities.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('See the programmes', 'services.html#programmes'),
            image=(IMG_MEET, 'Two people in a business conversation at a table by a window'), glass=('First 12 weeks · sample', ['Assessment and process map', 'Roadmap with 3 priorities', 'Business case approved']),
            breadcrumb=[('Home', 'index.html'), ('Services', 'services.html'), ('Strategic consulting', '')], crumb_urls=['en/index.html', 'en/services.html', 'en/strategic-consulting.html'],
            sections=[
                ('features', 'What we do', 'Six services, one goal: better decisions.', None, [
                    ('search', 'AI maturity assessment', 'Analysis of infrastructure, data, skills and processes to understand where to start and what to avoid.'),
                    ('flag', 'Strategic roadmap', 'Priorities, project sequence, resources and measurable milestones over 3–12 months.'),
                    ('chart', 'Business case and ROI', 'Cost-benefit analysis for every initiative, with shared KPIs and measurement method.'),
                    ('users', 'Change management and adoption', 'Training, governance and internal communication so that AI is actually used.'),
                    ('shield', 'Ethics and compliance', 'GDPR, EU AI Act, risk management and algorithmic transparency.'),
                    ('trend', 'Continuous optimisation', 'Performance monitoring, testing and model improvement over time.')], 3),
                ('steps', 'The method', 'From diagnosis to scale, in four phases.', None, [
                    ('Analysis', 'Current state of infrastructure, skills and processes; sector-specific opportunities.'),
                    ('Plan', 'AI strategy with a detailed roadmap, clear priorities and a business case for every initiative.'),
                    ('Pilot', 'A pilot project to validate the approach and demonstrate value quickly.'),
                    ('Scale', 'Roll-out of validated solutions and continuous performance optimisation.')]),
                ('stats', [('3–12', 'months of support'), ('50+', 'SMEs supported since 2023'), ('150%', 'ROI guaranteed by contract, within 12 months'), ('0', 'technical skills required')]),
                ('links', 'Further reading', 'Useful reading for those leading the change.', [
                    ('CEO AI guide', 'What business leaders need to know before adopting AI.', 'ceo-ai-guide-2025.html'),
                    ('POC Framework', 'Validate a use case in 8 weeks before investing.', 'poc-framework.html'),
                    ('AI investment', 'Programmes, products and payment options.', 'ai-investment.html')]),
                ('faq', [
                    ('How does AI strategy consulting for SMEs work?', 'We start from a full review of your processes, identify the highest-impact opportunities and build a roadmap with priorities, timing and budget. Then we support implementation with weekly or monthly sessions, for 3–12 months.'),
                    ('How long does a consulting project last?', 'From 3 to 12 months depending on the goals. The assessment takes 2–3 weeks, strategy and roadmap 1–2 weeks; implementation support follows, with verifiable milestones.'),
                    ('What results can I expect?', 'They depend on the sector and the processes involved: that is why we define measurable KPIs before the start instead of promising averages. The commitment we put in writing is the 150% ROI guarantee within 12 months.'),
                    ('Does consulting include technical support?', 'Yes: vendor selection, implementation supervision, team training, change management and monitoring. We stay at your side until the results are in.'),
                    ('Do we need technical experience to benefit?', 'No. The consulting is designed for CEOs and management without a technical background: we translate AI into business terms, costs and measurable results.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'en/strategic-consulting.html'), 'AI strategy consulting', spec['description'], 'AI strategy consulting')]
    return detail_page(lang, spec, ld)


class _P:
    """Minimal stand-in so ld_service can compute the page url before the Page exists."""
    def __init__(self, lang, path):
        from .site import url_of
        self.lang = lang
        self.url = url_of(path)


# ---------------------------------------------------------------- agenti AI

def agenti(lang):
    if lang == 'it':
        spec = dict(
            path='agenti-ai.html', alt='en/ai-agents.html', chat=True,
            title='Agenti AI per PMI: assistenti e agenti autonomi | PugliAI',
            description='Agenti AI per le PMI: assistenti conversazionali e agenti autonomi che eseguono processi sui tuoi sistemi via MCP, con supervisione umana. Da €490/mese.',
            eyebrow='Agenti AI · Novità 2026', h1='Agenti AI che eseguono, non solo rispondono.',
            lead='Dai chatbot per il servizio clienti agli agenti autonomi che leggono i dati dai tuoi sistemi, pianificano ed eseguono attività complete. Con supervisione umana sui passaggi critici.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Vedi l’hosting MCP', 'hosting-mcp.html'),
            image=(IMG_WORK, 'Tecnica che controlla un tablet accanto a una macchina utensile in officina'), glass=('Esecuzione · esempio', ['Lette 42 fatture scadute dal gestionale', 'Bozze di sollecito preparate', '3 casi in attesa di approvazione']),
            breadcrumb=[('Home', 'index.html'), ('Servizi', 'servizi.html'), ('Agenti AI', '')], crumb_urls=['index.html', 'servizi.html', 'agenti-ai.html'],
            sections=[
                ('answer', '<strong>Un agente AI autonomo non si limita a rispondere</strong>: ragiona, pianifica ed esegue attività end-to-end sui tuoi strumenti, con supervisione umana sui passaggi critici. PugliAI progetta e gestisce agenti collegati ai sistemi aziendali tramite server MCP on-premise.',
                 [('Cosa fanno', 'Leggono ordini, ticket e documenti, preparano bozze e report, aggiornano CRM e gestionale, completano processi ripetitivi su più strumenti.'),
                  ('Come si collegano', 'Tramite l’hosting MCP: i dati restano in azienda e ogni accesso è tracciato.'),
                  ('Supervisione', 'Definisci tu quali azioni richiedono conferma umana; l’agente si ferma dove serve il tuo controllo.'),
                  ('Prezzi', 'Agenti AI autonomi da €490/mese; assistenti conversazionali su preventivo. Prezzi IVA esclusa.'),
                  ('Tempi', 'Un assistente conversazionale in 2 settimane; un agente autonomo in 2–6 settimane a seconda dei sistemi da collegare.')],
                 f'A cura del team PugliAI · Ultimo aggiornamento: {UPDATED_IT}'),
                ('features', 'Come lavora un agente', 'Ragiona, esegue, chiede conferma.', None, [
                    ('layers', 'Ragiona e pianifica', 'Scompone un obiettivo in passi, sceglie gli strumenti e adatta il piano ai risultati, invece di seguire un copione fisso.'),
                    ('plug', 'Esegue sui tuoi sistemi', 'Tramite l’hosting MCP accede in sicurezza a gestionale, CRM ed ERP e completa attività reali: crea ordini, aggiorna ticket, prepara report.'),
                    ('hand', 'Supervisione umana', 'Tu decidi quali azioni richiedono una conferma. L’agente lavora in autonomia sui compiti ripetitivi e si ferma dove serve il tuo controllo.')], 3),
                ('services', 'Soluzioni', 'Agenti AI per ogni esigenza.', 'Dalla conversazione naturale all’automazione dei processi.', [
                    ('chat', 'Assistenti conversazionali', 'Assistenti che comprendono il linguaggio naturale e rispondono ai clienti 24 ore su 24, in italiano e in altre lingue.', ['Sito web, WhatsApp e Telegram', 'Memoria del contesto e analisi del tono', 'Passaggio a un operatore quando serve', 'Statistiche sulle conversazioni'], 'contatti.html', 'Richiedi una demo', None),
                    ('bolt', 'Agenti autonomi', 'Agenti che eseguono processi completi sui tuoi strumenti: dalla lettura dei dati alla consegna del risultato.', ['Processi end-to-end su più sistemi', 'Integrazione tramite MCP', 'Supervisione umana sui passaggi critici', 'Registro completo delle attività'], 'hosting-mcp.html', 'Scopri l’hosting MCP', 'da €490/mese'),
                    ('doc', 'Elaborazione documenti', 'Estrazione e controllo di informazioni da contratti, fatture, ordini e corrispondenza.', ['Lettura di PDF, email e scansioni', 'Controllo di clausole e scadenze', 'Classificazione automatica', 'Dati pronti per gestionale e CRM'], 'knowledgeai-enterprise.html', 'Vedi KnowledgeAI', None),
                    ('trend', 'Previsioni e analisi', 'Modelli che stimano la domanda, segnalano anomalie e suggeriscono azioni prima che i problemi si manifestino.', ['Previsione della domanda', 'Manutenzione predittiva', 'Segnalazione di anomalie e frodi', 'Analisi dell’abbandono dei clienti'], 'settori.html', 'Vedi i settori', None)]),
                ('features_white', 'Casi d’uso', 'Dove gli agenti fanno la differenza.', None, [
                    ('factory', 'Manifatturiero', 'Controllo qualità, manutenzione predittiva, gestione ordini e scorte collegata al gestionale.'),
                    ('bag', 'Retail ed e-commerce', 'Assistenti di vendita, raccomandazioni, gestione resi e servizio clienti automatizzato.'),
                    ('bank', 'Servizi finanziari', 'Controlli antifrode, raccolta documenti per l’onboarding, risposte su pratiche e scadenze.'),
                    ('heart', 'Sanità privata', 'Prenotazioni, triage delle richieste, promemoria e documentazione.'),
                    ('plane', 'Turismo e ospitalità', 'Prenotazioni, risposte agli ospiti in più lingue, gestione delle recensioni.'),
                    ('building', 'Studi professionali', 'Ricerca su pratiche e normative, bozze di documenti, gestione delle scadenze.')], 3),
                ('links', 'Approfondimenti', 'Per capire cosa aspettarsi dagli agenti AI.', [
                    ('Agenti AI per PMI nel 2026', 'Tendenze, opportunità e casi d’uso per le piccole e medie imprese.', 'guida-ai/agenti-ai-pmi-2026.html'),
                    ('Automazione con agenti AI', 'Come gli agenti automatizzano processi complessi e ripetitivi.', 'guida-ai/agenti-ai-automazione.html'),
                    ('Chatbot AI per il servizio clienti', 'Guida agli assistenti intelligenti per il servizio clienti.', 'guida-ai/chatbot-ai-customer-service.html')]),
                ('faq', [
                    ('Che differenza c’è tra un chatbot e un agente AI autonomo?', 'Un chatbot conversa e risponde a domande; un agente autonomo ragiona, pianifica ed esegue attività end-to-end sui tuoi sistemi. Collegato ai tuoi strumenti tramite l’hosting MCP, può creare ordini, aggiornare ticket o preparare report, con supervisione umana sui passaggi critici.'),
                    ('Quanto tempo serve per implementare un agente AI?', 'Un assistente conversazionale di base è pronto in circa 2 settimane. Un agente autonomo richiede 2–6 settimane a seconda dei sistemi da collegare. La formazione del team avviene in parallelo.'),
                    ('Gli agenti AI sostituiscono i dipendenti?', 'No. Automatizzano i compiti ripetitivi e lasciano alle persone le decisioni, le relazioni con i clienti e le attività a maggiore valore. L’obiettivo è aumentare la produttività del team, non ridurlo.'),
                    ('Gli agenti sono sicuri per i dati aziendali?', 'Gli agenti accedono ai dati solo attraverso il server MCP, con permessi per strumento e per operazione e un registro di ogni accesso. Con l’hosting on-premise i dati non lasciano l’azienda; in ogni caso rispettiamo il GDPR e l’AI Act europeo.'),
                    ('Quanto costano gli agenti AI?', 'Gli agenti AI autonomi partono da €490 al mese, hosting MCP escluso. Gli assistenti conversazionali e i progetti su misura vengono quotati dopo la sessione strategica gratuita.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'agenti-ai.html'), 'Agenti AI autonomi', spec['description'], 'AI agents', offer(price=490, unit='MONTH'))]
    else:
        spec = dict(
            path='en/ai-agents.html', alt='agenti-ai.html', chat=True,
            title='AI agents for SMEs: assistants and autonomous agents | PugliAI',
            description='Custom AI agents for SMEs: from conversational assistants to autonomous agents that run end-to-end processes on your systems via MCP, with human oversight on critical steps. From €490/month.',
            eyebrow='AI agents · New in 2026', h1='AI agents that execute, not just answer.',
            lead='From customer-service chatbots to autonomous agents that read data from your systems, plan and execute complete tasks. With human oversight on critical steps.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('See MCP hosting', 'mcp-hosting.html'),
            image=(IMG_WORK, 'Technician checking a tablet next to a machine tool in a workshop'), glass=('Run · sample', ['Read 42 overdue invoices from the ERP', 'Reminder drafts prepared', '3 cases awaiting approval']),
            breadcrumb=[('Home', 'index.html'), ('Services', 'services.html'), ('AI agents', '')], crumb_urls=['en/index.html', 'en/services.html', 'en/ai-agents.html'],
            sections=[
                ('answer', '<strong>An autonomous AI agent does more than answer</strong>: it reasons, plans and executes end-to-end tasks on your tools, with human oversight on critical steps. PugliAI designs and runs agents connected to business systems through on-premise MCP servers.',
                 [('What they do', 'Read orders, tickets and documents, prepare drafts and reports, update CRM and ERP, complete repetitive processes across several tools.'),
                  ('How they connect', 'Through MCP hosting: data stays in the company and every access is logged.'),
                  ('Oversight', 'You decide which actions require human confirmation; the agent stops where your control is needed.'),
                  ('Pricing', 'Autonomous AI agents from €490/month; conversational assistants on quotation. Prices exclude VAT.'),
                  ('Timing', 'A conversational assistant in 2 weeks; an autonomous agent in 2–6 weeks depending on the systems to connect.')],
                 f'By the PugliAI team · Last updated: {UPDATED_EN}'),
                ('features', 'How an agent works', 'It reasons, executes, asks for confirmation.', None, [
                    ('layers', 'Reasons and plans', 'Breaks a goal into steps, chooses the tools and adapts the plan to the results instead of following a fixed script.'),
                    ('plug', 'Executes on your systems', 'Through MCP hosting it securely accesses ERP, CRM and management software and completes real tasks: creates orders, updates tickets, prepares reports.'),
                    ('hand', 'Human oversight', 'You decide which actions require confirmation. The agent works independently on repetitive tasks and stops where your control is needed.')], 3),
                ('services', 'Solutions', 'AI agents for every need.', 'From natural conversation to process automation.', [
                    ('chat', 'Conversational assistants', 'Assistants that understand natural language and answer customers around the clock, in Italian and other languages.', ['Website, WhatsApp and Telegram', 'Context memory and tone analysis', 'Hand-off to a human operator when needed', 'Conversation statistics'], 'contact.html', 'Request a demo', None),
                    ('bolt', 'Autonomous agents', 'Agents that run complete processes on your tools: from reading the data to delivering the result.', ['End-to-end processes across systems', 'Integration via MCP', 'Human oversight on critical steps', 'Full activity log'], 'mcp-hosting.html', 'Explore MCP hosting', 'from €490/month'),
                    ('doc', 'Document processing', 'Extraction and checking of information from contracts, invoices, orders and correspondence.', ['Reads PDFs, emails and scans', 'Checks clauses and deadlines', 'Automatic classification', 'Data ready for ERP and CRM'], 'knowledgeai-enterprise.html', 'See KnowledgeAI', None),
                    ('trend', 'Forecasting and analysis', 'Models that estimate demand, flag anomalies and suggest actions before problems arise.', ['Demand forecasting', 'Predictive maintenance', 'Anomaly and fraud detection', 'Customer churn analysis'], 'sectors.html', 'See the sectors', None)]),
                ('features_white', 'Use cases', 'Where agents make the difference.', None, [
                    ('factory', 'Manufacturing', 'Quality control, predictive maintenance, order and stock management connected to the ERP.'),
                    ('bag', 'Retail and e-commerce', 'Sales assistants, recommendations, returns handling and automated customer service.'),
                    ('bank', 'Financial services', 'Anti-fraud checks, document collection for onboarding, answers on files and deadlines.'),
                    ('heart', 'Private healthcare', 'Bookings, request triage, reminders and documentation.'),
                    ('plane', 'Tourism and hospitality', 'Bookings, multilingual guest replies, review management.'),
                    ('building', 'Professional firms', 'Research on files and regulations, document drafts, deadline management.')], 3),
                ('links', 'Further reading', 'To understand what to expect from AI agents.', [
                    ('CEO AI guide', 'What business leaders need to know before adopting AI.', 'ceo-ai-guide-2025.html'),
                    ('MCP hosting', 'The infrastructure that connects AI to your systems securely.', 'mcp-hosting.html'),
                    ('Case studies', 'Six representative AI scenarios by sector.', 'case-studies.html')]),
                ('faq', [
                    ('What is the difference between a chatbot and an autonomous AI agent?', 'A chatbot converses and answers questions; an autonomous agent reasons, plans and executes end-to-end tasks on your systems. Connected to your tools through MCP hosting, it can create orders, update tickets or prepare reports, with human oversight on critical steps.'),
                    ('How long does it take to implement an AI agent?', 'A basic conversational assistant is ready in about 2 weeks. An autonomous agent takes 2–6 weeks depending on the systems to connect. Team training runs in parallel.'),
                    ('Do AI agents replace employees?', 'No. They automate repetitive tasks and leave decisions, customer relationships and higher-value work to people. The goal is to increase the team’s productivity, not to reduce it.'),
                    ('Are agents safe for company data?', 'Agents access data only through the MCP server, with permissions per tool and per operation and a log of every access. With on-premise hosting data never leaves the company; in every case we comply with GDPR and the EU AI Act.'),
                    ('How much do AI agents cost?', 'Autonomous AI agents start at €490 per month, MCP hosting excluded. Conversational assistants and custom projects are quoted after the free strategy session.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'en/ai-agents.html'), 'Autonomous AI agents', spec['description'], 'AI agents', offer(price=490, unit='MONTH'))]
    return detail_page(lang, spec, ld)


# ---------------------------------------------------------------- infrastrutture AI

def infrastrutture(lang):
    if lang == 'it':
        spec = dict(
            path='infrastrutture-ai.html', alt='en/ai-infrastructure.html', chat=True,
            title='Infrastrutture AI per PMI: on-premise e cloud privato | PugliAI',
            description='Progettiamo e gestiamo l’infrastruttura su cui gira l’AI della tua azienda: server on-premise, cloud privato europeo o architetture ibride, con monitoraggio, sicurezza e conformità al GDPR.',
            eyebrow='Infrastrutture AI', h1='L’infrastruttura giusta perché l’AI giri dove vuoi tu.',
            lead='Server on-premise, cloud privato europeo o architetture ibride: progettiamo, installiamo e gestiamo la base tecnica dei tuoi progetti AI, con sicurezza e costi prevedibili.',
            cta=('Richiedi una valutazione gratuita', 'contatti.html'), ghost=('Vedi l’architettura tecnica', 'architettura-tecnica.html'),
            image=(IMG_WORK, 'Officina meccanica con macchine utensili alla luce del tramonto'), glass=('Infrastruttura · esempio', ['Server MCP on-premise · attivo', 'Backup e monitoraggio 24/7', 'Dati sempre in azienda']),
            breadcrumb=[('Home', 'index.html'), ('Servizi', 'servizi.html'), ('Infrastrutture AI', '')], crumb_urls=['index.html', 'servizi.html', 'infrastrutture-ai.html'],
            sections=[
                ('features', 'Cosa progettiamo', 'Sei componenti, una sola responsabilità: la tua.', 'Ogni infrastruttura è dimensionata sui carichi reali dell’azienda, non su listini standard.', [
                    ('server', 'Piattaforma on-premise o cloud privato', 'Server dedicati in azienda o cloud privato in Europa, dimensionati sui modelli che userai davvero.'),
                    ('cog', 'Pipeline MLOps', 'Addestramento, test, rilascio e monitoraggio dei modelli con versionamento e rilasci controllati.'),
                    ('database', 'Architettura dei dati', 'Archivi, indici vettoriali e flussi di integrazione per alimentare l’AI con dati di qualità.'),
                    ('lock', 'Sicurezza e conformità', 'Cifratura, controllo degli accessi, registro delle attività e conformità al GDPR e all’AI Act.'),
                    ('eye', 'Monitoraggio', 'Cruscotti su prestazioni, costi e deriva dei modelli, con avvisi e report periodici.'),
                    ('cpu', 'Edge computing', 'Elaborazione locale per latenza minima e continuità operativa anche senza connessione.')], 3),
                ('steps', 'Il metodo', 'Dalla valutazione alla gestione continua.', None, [
                    ('Valutazione', 'Analisi dell’infrastruttura esistente e dei requisiti dei casi d’uso AI.'),
                    ('Progettazione', 'Architettura dimensionata su carichi, sicurezza e budget, con opzioni on-premise e cloud.'),
                    ('Installazione', 'Rilascio incrementale con test continui e migrazione senza interruzioni.'),
                    ('Gestione', 'Monitoraggio, aggiornamenti e ottimizzazione delle prestazioni nel tempo.')]),
                ('table', 'Confronto', 'On-premise, cloud privato o ibrido?', 'Ti aiutiamo a scegliere in base a dati, budget e vincoli normativi.', ['', 'On-premise', 'Cloud privato europeo', 'Ibrido'], [
                    ('Dove risiedono i dati', 'Sui tuoi server', 'In un data center europeo dedicato', 'Dati sensibili in azienda, il resto in cloud'),
                    ('Costo', 'Investimento iniziale, canone fisso', 'Canone mensile variabile', 'Combinazione dei due'),
                    ('Quando conviene', 'Dati sensibili, settori regolamentati, volumi elevati', 'Avvio rapido, carichi variabili', 'Aziende con esigenze miste')]),
                ('links', 'Approfondimenti', 'Letture tecniche e strategiche.', [
                    ('AI predittiva e analisi dei dati', 'Come l’AI predittiva trasforma le decisioni nelle PMI.', 'guida-ai/ai-predittiva-data-analytics.html'),
                    ('AI e sicurezza informatica', 'Proteggere l’infrastruttura AI con strumenti intelligenti.', 'guida-ai/ai-cybersecurity-aziendale.html'),
                    ('Tendenze AI 2025–2026', 'Le tendenze che incidono sulle infrastrutture aziendali.', 'guida-ai/trend-ai-2025-2026.html')]),
                ('faq', [
                    ('Quanto costa un’infrastruttura AI per una PMI?', 'Dipende da modelli, volumi e requisiti di sicurezza: un’installazione di base parte da €15.000, le soluzioni complete superano i €75.000. Il percorso AI Accelerator (€15.000–€25.000) include l’installazione di base, la pipeline e la formazione. La valutazione iniziale è gratuita.'),
                    ('Meglio cloud o on-premise?', 'Per molte PMI il cloud privato europeo riduce i costi iniziali e semplifica la manutenzione. L’on-premise conviene quando i dati sono sensibili, il settore è regolamentato o i volumi sono elevati. Spesso la risposta è ibrida.'),
                    ('Quali fornitori cloud usate?', 'Progettiamo su Microsoft Azure, AWS e Google Cloud, oltre che su data center europei indipendenti, scegliendo in base a stack esistente, budget e vincoli di sovranità del dato.'),
                    ('Quanto tempo serve?', 'Un’installazione di base richiede circa 15 giorni; un’infrastruttura completa da 30 a 90 giorni. Usiamo infrastruttura come codice per rilasci rapidi e ripetibili.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'infrastrutture-ai.html'), 'Infrastrutture AI', spec['description'], 'AI infrastructure')]
    else:
        spec = dict(
            path='en/ai-infrastructure.html', alt='infrastrutture-ai.html', chat=True,
            title='AI infrastructure: on-premise, private cloud, hybrid | PugliAI',
            description='We design and run the infrastructure your company’s AI runs on: on-premise servers, European private cloud or hybrid architectures, with monitoring, security and GDPR compliance.',
            eyebrow='AI infrastructure', h1='The right infrastructure so AI runs where you want it.',
            lead='On-premise servers, European private cloud or hybrid architectures: we design, install and run the technical base of your AI projects, with security and predictable costs.',
            cta=('Request a free assessment', 'contact.html'), ghost=('See the technical architecture', 'technical-architecture.html'),
            image=(IMG_WORK, 'Machine workshop with machine tools in sunset light'), glass=('Infrastructure · sample', ['On-premise MCP server · live', 'Backup and 24/7 monitoring', 'Data always in the company']),
            breadcrumb=[('Home', 'index.html'), ('Services', 'services.html'), ('AI infrastructure', '')], crumb_urls=['en/index.html', 'en/services.html', 'en/ai-infrastructure.html'],
            sections=[
                ('features', 'What we design', 'Six components, one responsibility: yours.', 'Every infrastructure is sized on the company’s real workloads, not on standard price lists.', [
                    ('server', 'On-premise or private-cloud platform', 'Dedicated servers on site or a private cloud in Europe, sized for the models you will actually use.'),
                    ('cog', 'MLOps pipeline', 'Training, testing, release and monitoring of models with versioning and controlled deployments.'),
                    ('database', 'Data architecture', 'Stores, vector indexes and integration flows to feed AI with quality data.'),
                    ('lock', 'Security and compliance', 'Encryption, access control, activity log and compliance with GDPR and the AI Act.'),
                    ('eye', 'Monitoring', 'Dashboards on performance, costs and model drift, with alerts and periodic reports.'),
                    ('cpu', 'Edge computing', 'Local processing for minimal latency and business continuity even offline.')], 3),
                ('steps', 'The method', 'From assessment to ongoing management.', None, [
                    ('Assessment', 'Analysis of the existing infrastructure and of the AI use-case requirements.'),
                    ('Design', 'Architecture sized on workloads, security and budget, with on-premise and cloud options.'),
                    ('Installation', 'Incremental roll-out with continuous testing and migration without downtime.'),
                    ('Management', 'Monitoring, updates and performance optimisation over time.')]),
                ('table', 'Comparison', 'On-premise, private cloud or hybrid?', 'We help you choose based on data, budget and regulatory constraints.', ['', 'On-premise', 'European private cloud', 'Hybrid'], [
                    ('Where data lives', 'On your servers', 'In a dedicated European data centre', 'Sensitive data on site, the rest in the cloud'),
                    ('Cost', 'Upfront investment, fixed fee', 'Variable monthly fee', 'A combination of both'),
                    ('When it fits', 'Sensitive data, regulated sectors, high volumes', 'Fast start, variable workloads', 'Companies with mixed needs')]),
                ('links', 'Further reading', 'Technical and strategic reading.', [
                    ('Technical architecture', 'The stack behind PugliAI solutions.', 'technical-architecture.html'),
                    ('MCP hosting', 'Managed MCP servers on your infrastructure.', 'mcp-hosting.html'),
                    ('CEO AI guide', 'What business leaders need to know before adopting AI.', 'ceo-ai-guide-2025.html')]),
                ('faq', [
                    ('How much does AI infrastructure cost for an SME?', 'It depends on models, volumes and security requirements: a basic installation starts at €15,000, complete solutions exceed €75,000. The AI Accelerator programme (€15,000–€25,000) includes the basic installation, the pipeline and training. The initial assessment is free.'),
                    ('Cloud or on-premise?', 'For many SMEs a European private cloud reduces upfront costs and simplifies maintenance. On-premise pays off when data is sensitive, the sector is regulated or volumes are high. The answer is often hybrid.'),
                    ('Which cloud providers do you use?', 'We design on Microsoft Azure, AWS and Google Cloud, as well as independent European data centres, choosing on the basis of existing stack, budget and data-sovereignty constraints.'),
                    ('How long does it take?', 'A basic installation takes about 15 days; a complete infrastructure 30 to 90 days. We use infrastructure as code for fast, repeatable releases.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'en/ai-infrastructure.html'), 'AI infrastructure', spec['description'], 'AI infrastructure')]
    return detail_page(lang, spec, ld)


# ---------------------------------------------------------------- POC framework

def poc(lang):
    if lang == 'it':
        spec = dict(
            path='poc-framework.html', alt='en/poc-framework.html', chat=True,
            title='POC Framework: progetto pilota AI in 8 settimane | PugliAI',
            description='Un progetto pilota strutturato in 8 settimane per validare un caso d’uso AI prima di investire: obiettivi misurabili, consegne chiare a ogni fase, codice pronto per la produzione. Da €25.000.',
            eyebrow='POC Framework', h1='Valida l’idea in otto settimane, prima di investire.',
            lead='Un progetto pilota con obiettivi misurabili, consegne chiare a ogni fase e codice già pronto per la produzione. Il modo più sicuro per decidere se e come scalare.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Vedi i percorsi completi', 'servizi.html#percorsi'),
            image=(IMG_DESK, 'Scrivania con computer portatile e quaderno di appunti'), glass=('Settimana 4 · esempio', ['Business case approvato', 'Prototipo funzionante', 'Primi test sui dati reali']),
            breadcrumb=[('Home', 'index.html'), ('Servizi', 'servizi.html'), ('POC Framework', '')], crumb_urls=['index.html', 'servizi.html', 'poc-framework.html'],
            sections=[
                ('steps', 'Le cinque fasi', 'Dal caso d’uso al rilascio, settimana per settimana.', None, [
                    ('Analisi (settimane 1–2)', 'Caso d’uso, KPI, qualità dei dati disponibili e criteri di successo condivisi con i responsabili.'),
                    ('Progettazione (settimana 3)', 'Architettura, scelta dei modelli, flussi dei dati e punti di integrazione.'),
                    ('Sviluppo (settimane 4–6)', 'Prototipo funzionante con le funzioni essenziali, modelli addestrati e cruscotto di controllo.'),
                    ('Test (settimana 7)', 'Prove sui dati reali, verifica delle prestazioni e raccolta del riscontro degli utenti.'),
                    ('Rilascio (settimana 8)', 'Ambiente pronto per la produzione, formazione, documentazione e piano di scala.')]),
                ('features', 'Il metodo', 'Sei principi che rendono utile un pilota.', None, [
                    ('flag', 'Obiettivi misurabili', 'KPI e criteri di successo definiti prima di scrivere una riga di codice.'),
                    ('cog', 'Iterazioni settimanali', 'Demo e riscontro ogni settimana, per correggere presto e spendere meno.'),
                    ('database', 'Decisioni sui dati', 'Qualità dei dati verificata all’inizio, prestazioni misurate su casi reali.'),
                    ('users', 'Lavoro condiviso', 'Il tuo team lavora con il nostro: le competenze restano in azienda.'),
                    ('lock', 'Sicurezza dal primo giorno', 'GDPR e protezione dei dati integrati nel progetto, non aggiunti alla fine.'),
                    ('server', 'Pronto per la produzione', 'Codice, infrastruttura e monitoraggio con gli stessi standard di un rilascio definitivo.')], 3),
                ('packages', 'Formule', 'Tre formule di progetto pilota.', 'Prezzi IVA esclusa. Il costo del pilota viene scalato dal percorso completo successivo.', [
                    ('Rapid POC', '€25.000', '4 settimane', 'Per validare velocemente un’idea.', ['Studio di fattibilità', 'Prototipo essenziale', 'Un modello AI', 'Documentazione tecnica', '2 sessioni di formazione'], 'contatti.html', 'Richiedi informazioni'),
                    ('Standard POC', '€50.000', '8 settimane', 'Il framework completo in cinque fasi.', ['Prototipo pronto per la produzione', 'Più modelli AI', 'Cruscotto su misura e API', 'Formazione del team', '30 giorni di supporto dopo il rilascio'], 'contatti.html', 'Richiedi informazioni'),
                    ('POC avanzato', 'da €100.000', '12+ settimane', 'Per progetti con più sistemi da integrare.', ['Integrazione multi-sistema', 'Architettura su misura', 'Team dedicato', 'Change management', '90 giorni di supporto'], 'contatti.html', 'Parla con il team')], None, None),
                ('faq', [
                    ('Cosa ottengo alla fine del pilota?', 'Un prototipo funzionante rilasciato in un ambiente pronto per la produzione, i modelli addestrati, la documentazione tecnica, la formazione del team e un piano di scala con costi e tempi.'),
                    ('Il codice del pilota è di mia proprietà?', 'Sì. Codice, modelli e documentazione sviluppati nel progetto pilota restano di proprietà dell’azienda, salvo accordi diversi messi per iscritto.'),
                    ('Cosa succede se il pilota non raggiunge gli obiettivi?', 'Lo diciamo con chiarezza nel report finale: un pilota serve anche a capire quando non conviene procedere. Se invece decidi di scalare, il costo del pilota viene scalato dal percorso completo.'),
                    ('Quanto tempo devo dedicare io?', 'Un referente aziendale per circa due ore a settimana, oltre alle demo settimanali. Il resto lo gestisce il nostro team.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'poc-framework.html'), 'POC Framework', spec['description'], 'AI proof of concept', offer(low=25000, high=100000))]
    else:
        spec = dict(
            path='en/poc-framework.html', alt='poc-framework.html', chat=True,
            title='POC Framework: an 8-week AI pilot project | PugliAI',
            description='A structured 8-week pilot to validate an AI use case before investing: measurable goals, clear deliverables at every phase, production-ready code. From €25,000.',
            eyebrow='POC Framework', h1='Validate the idea in eight weeks, before you invest.',
            lead='A pilot project with measurable goals, clear deliverables at every phase and code that is already production-ready. The safest way to decide whether and how to scale.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('See the full programmes', 'services.html#programmes'),
            image=(IMG_DESK, 'Desk with a laptop and a notebook'), glass=('Week 4 · sample', ['Business case approved', 'Working prototype', 'First tests on real data']),
            breadcrumb=[('Home', 'index.html'), ('Services', 'services.html'), ('POC Framework', '')], crumb_urls=['en/index.html', 'en/services.html', 'en/poc-framework.html'],
            sections=[
                ('steps', 'The five phases', 'From use case to release, week by week.', None, [
                    ('Analysis (weeks 1–2)', 'Use case, KPIs, quality of the available data and success criteria agreed with stakeholders.'),
                    ('Design (week 3)', 'Architecture, model selection, data flows and integration points.'),
                    ('Build (weeks 4–6)', 'Working prototype with the essential functions, trained models and a control dashboard.'),
                    ('Test (week 7)', 'Trials on real data, performance verification and user feedback.'),
                    ('Release (week 8)', 'Production-ready environment, training, documentation and scale-up plan.')]),
                ('features', 'The method', 'Six principles that make a pilot useful.', None, [
                    ('flag', 'Measurable goals', 'KPIs and success criteria defined before writing a line of code.'),
                    ('cog', 'Weekly iterations', 'Demo and feedback every week, to correct early and spend less.'),
                    ('database', 'Data-driven decisions', 'Data quality verified at the start, performance measured on real cases.'),
                    ('users', 'Shared work', 'Your team works with ours: the skills stay in the company.'),
                    ('lock', 'Security from day one', 'GDPR and data protection built into the project, not added at the end.'),
                    ('server', 'Production-ready', 'Code, infrastructure and monitoring to the same standards as a final release.')], 3),
                ('packages', 'Formats', 'Three pilot formats.', 'Prices exclude VAT. The pilot cost is deducted from the subsequent full programme.', [
                    ('Rapid POC', '€25,000', '4 weeks', 'To validate an idea quickly.', ['Feasibility study', 'Essential prototype', 'One AI model', 'Technical documentation', '2 training sessions'], 'contact.html', 'Request information'),
                    ('Standard POC', '€50,000', '8 weeks', 'The complete five-phase framework.', ['Production-ready prototype', 'Several AI models', 'Custom dashboard and APIs', 'Team training', '30 days of post-release support'], 'contact.html', 'Request information'),
                    ('Advanced POC', 'from €100,000', '12+ weeks', 'For projects with several systems to integrate.', ['Multi-system integration', 'Custom architecture', 'Dedicated team', 'Change management', '90 days of support'], 'contact.html', 'Talk to the team')], None, None),
                ('faq', [
                    ('What do I get at the end of the pilot?', 'A working prototype released in a production-ready environment, the trained models, technical documentation, team training and a scale-up plan with costs and timing.'),
                    ('Do I own the pilot code?', 'Yes. Code, models and documentation developed in the pilot remain the property of the company, unless otherwise agreed in writing.'),
                    ('What happens if the pilot misses its goals?', 'We say so clearly in the final report: a pilot also serves to understand when it is not worth proceeding. If you do decide to scale, the pilot cost is deducted from the full programme.'),
                    ('How much of my time is needed?', 'One company contact for about two hours a week, plus the weekly demos. Our team handles the rest.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'en/poc-framework.html'), 'POC Framework', spec['description'], 'AI proof of concept', offer(low=25000, high=100000))]
    return detail_page(lang, spec, ld)


def build_all():
    for lang in ('it', 'en'):
        yield servizi(lang)
        yield consulenza(lang)
        yield agenti(lang)
        yield infrastrutture(lang)
        yield poc(lang)
