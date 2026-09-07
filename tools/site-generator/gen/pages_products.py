"""Products hub + product pages (IT/EN)."""
from .html import *
from .site import ld_product, offer, UPDATED_IT, UPDATED_EN, SITE, url_of
from .templates import detail_page

IMG_WORK = 'src/assets/img/2026/officina.jpg'
IMG_DESK = 'src/assets/img/2026/scrivania.jpg'
IMG_MEET = 'src/assets/img/2026/incontro.jpg'


def _pg(lang, path):
    class P:  # minimal stand-in for ld_* helpers before the Page exists
        pass
    p = P(); p.lang = lang; p.url = url_of(path)
    return p


BAND = {
    'it': ('band', 'On-premise', 'I tuoi dati restano in azienda.', 'Ogni soluzione può girare interamente sui tuoi server: nessun dato nel cloud di terzi, conformità al GDPR e all’AI Act, piena sovranità su modelli e documenti.', 'Richiedi una demo', 'contatti.html', ['Conformità GDPR', 'Latenza < 200 ms', 'Nessun dato su server terzi'], IMG_WORK),
    'en': ('band', 'On-premise', 'Your data stays in your company.', 'Every solution can run entirely on your servers: no data in third-party clouds, GDPR and AI Act compliance, full sovereignty over models and documents.', 'Request a demo', 'contact.html', ['GDPR compliant', 'Latency < 200 ms', 'No third-party servers'], IMG_WORK),
}


# ---------------------------------------------------------------- prodotti / products

def prodotti(lang):
    if lang == 'it':
        products = [
            ('mic', 'VoiceAI On-Premise', 'Assistente vocale che risponde per la tua azienda 24 ore su 24: centralino intelligente, servizio clienti automatizzato, trascrizione delle chiamate. Nessun dato vocale su cloud esterni.', ['Risposta automatica in italiano naturale', 'Integrazione con CRM, gestionale e ticketing', 'Latenza inferiore a 200 ms', 'Conformità GDPR: i dati restano in azienda'], 'voiceai-on-premise.html', 'Scopri VoiceAI', 'da €25.000'),
            ('book', 'KnowledgeAI Enterprise', 'Chat aziendale che interroga i tuoi documenti (manuali, contratti, procedure) con tecnologia RAG. Risposte precise, con la fonte sempre citata e verificabile.', ['PDF, Word, Excel, email e database indicizzati', 'Ogni risposta cita il documento di origine', 'Permessi per ruolo e per documento', 'Tracciabilità completa delle richieste'], 'knowledgeai-enterprise.html', 'Scopri KnowledgeAI', 'da €30.000'),
            ('plug', 'Hosting MCP', 'Ospitiamo e gestiamo i server Model Context Protocol sulla tua infrastruttura: gli agenti AI accedono al gestionale, al CRM e ai documenti in sicurezza.', ['Connettori per gestionale, CRM ed ERP', 'Server monitorati e aggiornati per te', 'Permessi per strumento e per operazione', 'I dati non lasciano mai l’azienda'], 'hosting-mcp.html', 'Scopri l’hosting MCP', 'da €290/mese'),
            ('bolt', 'Agenti AI autonomi', 'Agenti che leggono i dati dai tuoi sistemi, pianificano ed eseguono attività complete su più strumenti, con supervisione umana sui passaggi critici.', ['Processi eseguiti end-to-end', 'Integrazione con i tuoi strumenti tramite MCP', 'Supervisione umana sui passaggi critici', 'Registro completo delle attività'], 'agenti-ai.html', 'Scopri gli agenti AI', 'da €490/mese'),
        ]
        spec = dict(
            path='prodotti.html', alt='en/products.html', chat=True,
            title='Prodotti AI on-premise per PMI: VoiceAI, KnowledgeAI, hosting MCP, agenti | PugliAI',
            description='Quattro prodotti AI installati sui server della tua azienda: VoiceAI On-Premise, KnowledgeAI Enterprise, hosting MCP e agenti AI autonomi. Nessun dato nel cloud di terzi, conformità al GDPR, costi definiti in anticipo.',
            eyebrow='Prodotti on-premise', h1='Soluzioni AI pronte, installate sui tuoi server.',
            lead='Quattro prodotti che girano nella tua infrastruttura: nessun dato nel cloud di terzi, latenza minima, costi definiti in anticipo.',
            cta=('Richiedi una demo', 'contatti.html'), ghost=('On-premise o cloud?', '#confronto'),
            image=(IMG_WORK, 'Tecnica che controlla un tablet accanto a una macchina utensile in officina'), glass=('Server MCP · sede di Latiano', ['4 connettori attivi: gestionale, CRM, PEC, archivio', 'Ultimo aggiornamento di sicurezza: oggi']),
            sections=[
                ('answer', '<strong>PugliAI offre quattro prodotti AI on-premise per le PMI italiane</strong>: VoiceAI, KnowledgeAI Enterprise, hosting MCP e agenti AI autonomi. «On-premise» significa che il software gira sui server dell’azienda o su un cloud privato che controlli tu: i dati non escono mai dall’infrastruttura aziendale.',
                 [('VoiceAI On-Premise', 'Centralino intelligente e servizio clienti vocale, integrato con CRM, gestionale e ticketing. Da €25.000 a €75.000.'),
                  ('KnowledgeAI Enterprise', 'Chat sui documenti aziendali con tecnologia RAG e fonti citate. Da €30.000 a €85.000.'),
                  ('Hosting MCP', 'Server MCP gestiti, aggiornati e monitorati per collegare l’AI ai sistemi aziendali. Da €290 al mese.'),
                  ('Agenti AI autonomi', 'Eseguono processi end-to-end sui tuoi strumenti tramite MCP, con supervisione umana. Da €490 al mese.'),
                  ('Dove girano', 'Sui server dell’azienda o in cloud privato europeo. Nessun dato inviato a servizi AI di terze parti.'),
                  ('Conformità', 'GDPR e AI Act europeo. Registro delle attività e controllo degli accessi.')],
                 f'A cura del team PugliAI · Prezzi IVA esclusa · Ultimo aggiornamento: {UPDATED_IT}'),
                ('services', 'I prodotti', 'Quattro soluzioni, una regola: i dati restano tuoi.', 'Acquistabili singolarmente o insieme ai percorsi di consulenza.', products),
                ('table', 'Confronto', 'On-premise o cloud: le differenze che contano.', None, ['', 'On-premise PugliAI', 'Cloud di terzi'], [
                    ('Dove risiedono i dati', 'Sui tuoi server', 'Su server di terzi'),
                    ('Latenza', 'Inferiore a 200 ms in rete locale', 'Dipende dalla connessione'),
                    ('GDPR e AI Act', 'Conformità garantita, senza trasferimenti di dati', 'Da verificare per ogni fornitore'),
                    ('Costi', 'Definiti in anticipo', 'Variabili in base all’uso')]),
                BAND['it'],
                ('faq', [
                    ('Cosa sono i prodotti AI on-premise?', 'Soluzioni di intelligenza artificiale installate nell’infrastruttura IT della tua azienda anziché nel cloud di un fornitore. I dati non lasciano mai i tuoi server: massima riservatezza, conformità al GDPR e nessuna dipendenza da servizi esterni.'),
                    ('Perché scegliere l’on-premise invece del cloud?', 'Sovranità totale sui dati, conformità al GDPR, risposte a bassa latenza, nessun costo variabile per chiamata o per richiesta e funzionamento anche senza connessione. È la scelta adatta a chi tratta dati sensibili o opera in settori regolamentati.'),
                    ('Quanto costano i prodotti on-premise di PugliAI?', 'VoiceAI On-Premise da €25.000 a €75.000; KnowledgeAI Enterprise da €30.000 a €85.000; hosting MCP da €290 al mese; agenti AI autonomi da €490 al mese. Il costo dipende da utenti, volumi e integrazioni richieste. Prezzi IVA esclusa.'),
                    ('I prodotti si integrano con i sistemi aziendali esistenti?', 'Sì. VoiceAI si collega a CRM, gestionale e ticketing; KnowledgeAI indicizza PDF, Word, Excel, email e database; l’hosting MCP fornisce connettori verso gestionali ed ERP italiani (Zucchetti, TeamSystem, SAP), CRM e archivi documentali.'),
                    ('Serve hardware dedicato?', 'Per VoiceAI e KnowledgeAI serve un server con GPU; forniamo i requisiti oppure un server preconfigurato in opzione. L’hosting MCP e gli agenti possono girare anche su un cloud privato europeo che controlli tu.')]),
                ('cta_default',),
            ])
        page, body = detail_page(lang, spec)
        page.jsonld.append({'@context': 'https://schema.org', '@type': 'ItemList', 'name': 'Prodotti AI on-premise PugliAI', 'url': page.url, 'numberOfItems': 4, 'itemListElement': [
            {'@type': 'Product', 'position': 1, 'name': 'VoiceAI On-Premise', 'url': url_of('voiceai-on-premise.html'), 'offers': offer(low=25000, high=75000)},
            {'@type': 'Product', 'position': 2, 'name': 'KnowledgeAI Enterprise', 'url': url_of('knowledgeai-enterprise.html'), 'offers': offer(low=30000, high=85000)},
            {'@type': 'Product', 'position': 3, 'name': 'Hosting MCP On-Premise', 'url': url_of('hosting-mcp.html'), 'offers': offer(price=290, unit='MONTH')},
            {'@type': 'Product', 'position': 4, 'name': 'Agenti AI autonomi', 'url': url_of('agenti-ai.html'), 'offers': offer(price=490, unit='MONTH')}]})
        return page, body
    products = [
        ('mic', 'VoiceAI On-Premise', 'A voice assistant that answers for your company around the clock: intelligent switchboard, automated customer service, call transcription. No voice data on external clouds.', ['Automatic answers in natural Italian and English', 'Integration with CRM, ERP and ticketing', 'Latency under 200 ms', 'GDPR compliant: data stays in the company'], 'voiceai-on-premise.html', 'Explore VoiceAI', 'from €25,000'),
        ('book', 'KnowledgeAI Enterprise', 'A company chat that queries your documents (manuals, contracts, procedures) with RAG technology. Precise answers, with the source always cited and verifiable.', ['PDF, Word, Excel, email and databases indexed', 'Every answer cites the source document', 'Permissions per role and per document', 'Full traceability of requests'], 'knowledgeai-enterprise.html', 'Explore KnowledgeAI', 'from €30,000'),
        ('plug', 'MCP Hosting', 'We host and manage Model Context Protocol servers on your infrastructure: AI agents access your ERP, CRM and documents securely.', ['Connectors for ERP, CRM and management software', 'Servers monitored and updated for you', 'Permissions per tool and per operation', 'Data never leaves the company'], 'mcp-hosting.html', 'Explore MCP hosting', 'from €290/month'),
        ('bolt', 'Autonomous AI agents', 'Agents that read data from your systems, plan and execute complete tasks across several tools, with human oversight on critical steps.', ['End-to-end processes', 'Integration with your tools via MCP', 'Human oversight on critical steps', 'Full activity log'], 'ai-agents.html', 'Explore AI agents', 'from €490/month'),
    ]
    spec = dict(
        path='en/products.html', alt='prodotti.html', chat=True,
        title='On-premise AI products for SMEs: VoiceAI, KnowledgeAI, MCP hosting, agents | PugliAI',
        description='Four AI products installed on your company’s servers: VoiceAI On-Premise, KnowledgeAI Enterprise, MCP hosting and autonomous AI agents. No data in third-party clouds, GDPR compliance, costs set upfront.',
        eyebrow='On-premise products', h1='Ready-made AI solutions, installed on your servers.',
        lead='Four products that run inside your infrastructure: no data in third-party clouds, minimal latency, costs set upfront.',
        cta=('Request a demo', 'contact.html'), ghost=('On-premise or cloud?', '#comparison'),
        image=(IMG_WORK, 'Technician checking a tablet next to a machine tool in a workshop'), glass=('MCP server · Latiano office', ['4 active connectors: ERP, CRM, certified email, archive', 'Last security update: today']),
        sections=[
            ('answer', '<strong>PugliAI offers four on-premise AI products for Italian SMEs</strong>: VoiceAI, KnowledgeAI Enterprise, MCP hosting and autonomous AI agents. “On-premise” means the software runs on the company’s servers or on a private cloud you control: data never leaves your infrastructure.',
             [('VoiceAI On-Premise', 'Intelligent switchboard and voice customer service, integrated with CRM, ERP and ticketing. From €25,000 to €75,000.'),
              ('KnowledgeAI Enterprise', 'Chat with company documents using RAG technology and cited sources. From €30,000 to €85,000.'),
              ('MCP Hosting', 'Managed, updated and monitored MCP servers connecting AI to business systems. From €290 per month.'),
              ('Autonomous AI agents', 'Run end-to-end processes on your tools via MCP, with human oversight. From €490 per month.'),
              ('Where they run', 'On the company’s servers or in a European private cloud. No data sent to third-party AI services.'),
              ('Compliance', 'GDPR and EU AI Act. Activity log and access control.')],
             f'By the PugliAI team · Prices exclude VAT · Last updated: {UPDATED_EN}'),
            ('services', 'The products', 'Four solutions, one rule: the data stays yours.', 'Available individually or together with the consulting programmes.', products),
            ('table', 'Comparison', 'On-premise or cloud: the differences that matter.', None, ['', 'PugliAI on-premise', 'Third-party cloud'], [
                ('Where data lives', 'On your servers', 'On third-party servers'),
                ('Latency', 'Under 200 ms on the local network', 'Depends on the connection'),
                ('GDPR and AI Act', 'Guaranteed compliance, no data transfers', 'To be verified for each vendor'),
                ('Costs', 'Set upfront', 'Variable with usage')]),
            BAND['en'],
            ('faq', [
                ('What are on-premise AI products?', 'Artificial-intelligence solutions installed in your company’s IT infrastructure rather than in a vendor’s cloud. Data never leaves your servers: maximum confidentiality, GDPR compliance and no dependence on external services.'),
                ('Why choose on-premise over the cloud?', 'Full data sovereignty, GDPR compliance, low-latency responses, no variable cost per call or request and operation even without a connection. It is the right choice for companies handling sensitive data or operating in regulated sectors.'),
                ('How much do PugliAI’s on-premise products cost?', 'VoiceAI On-Premise from €25,000 to €75,000; KnowledgeAI Enterprise from €30,000 to €85,000; MCP hosting from €290 per month; autonomous AI agents from €490 per month. Cost depends on users, volumes and required integrations. Prices exclude VAT.'),
                ('Do the products integrate with existing business systems?', 'Yes. VoiceAI connects to CRM, ERP and ticketing; KnowledgeAI indexes PDF, Word, Excel, email and databases; MCP hosting provides connectors to Italian ERPs (Zucchetti, TeamSystem, SAP), CRMs and document archives.'),
                ('Is dedicated hardware required?', 'VoiceAI and KnowledgeAI need a server with a GPU; we provide the requirements or an optional pre-configured server. MCP hosting and agents can also run on a European private cloud you control.')]),
            ('cta_default',),
        ])
    page, body = detail_page(lang, spec)
    page.jsonld.append({'@context': 'https://schema.org', '@type': 'ItemList', 'name': 'PugliAI on-premise AI products', 'url': page.url, 'numberOfItems': 4, 'itemListElement': [
        {'@type': 'Product', 'position': 1, 'name': 'VoiceAI On-Premise', 'url': url_of('en/voiceai-on-premise.html'), 'offers': offer(low=25000, high=75000)},
        {'@type': 'Product', 'position': 2, 'name': 'KnowledgeAI Enterprise', 'url': url_of('en/knowledgeai-enterprise.html'), 'offers': offer(low=30000, high=85000)},
        {'@type': 'Product', 'position': 3, 'name': 'On-Premise MCP Hosting', 'url': url_of('en/mcp-hosting.html'), 'offers': offer(price=290, unit='MONTH')},
        {'@type': 'Product', 'position': 4, 'name': 'Autonomous AI agents', 'url': url_of('en/ai-agents.html'), 'offers': offer(price=490, unit='MONTH')}]})
    return page, body


# ---------------------------------------------------------------- VoiceAI

def voiceai(lang):
    if lang == 'it':
        spec = dict(
            path='voiceai-on-premise.html', alt='en/voiceai-on-premise.html', chat=False,
            title='VoiceAI On-Premise: assistente vocale AI per centralino e servizio clienti | PugliAI',
            description='Assistente vocale AI installato sui server della tua azienda: centralino intelligente, servizio clienti 24 ore su 24, trascrizione delle chiamate, integrazione con CRM e gestionale. Da €25.000, IVA esclusa.',
            eyebrow='Prodotto on-premise', h1='VoiceAI On-Premise: l’assistente vocale che risponde per la tua azienda.',
            lead='Centralino intelligente, servizio clienti 24 ore su 24 e trascrizione delle chiamate. Tutto sui tuoi server: nessun dato vocale su cloud esterni.',
            cta=('Richiedi una demo', 'contatti.html'), ghost=('Vedi i prezzi', '#prezzi'),
            image=(IMG_MEET, 'Due persone a colloquio di lavoro a un tavolo davanti a una finestra'), glass=('Chiamata in corso · esempio', ['Richiesta riconosciuta: stato ordine', 'Dati letti dal gestionale', 'Passaggio a operatore non necessario']),
            breadcrumb=[('Home', 'index.html'), ('Prodotti', 'prodotti.html'), ('VoiceAI On-Premise', '')], crumb_urls=['index.html', 'prodotti.html', 'voiceai-on-premise.html'],
            sections=[
                ('features', 'Casi d’uso', 'Cosa fa VoiceAI per la tua azienda.', 'Gestisce le comunicazioni vocali con intelligenza, mantenendo ogni dato al sicuro nei tuoi server.', [
                    ('phone', 'Centralino intelligente', 'Risponde alle chiamate, smista ai reparti giusti, prende appuntamenti e gestisce le richieste ricorrenti in autonomia.'),
                    ('clock', 'Servizio clienti 24 ore su 24', 'Risolve le richieste di primo livello, raccoglie le informazioni per i casi complessi e passa la chiamata a un operatore quando serve.'),
                    ('doc', 'Trascrizione e archivio', 'Trascrive e analizza le conversazioni, estrae i dati utili e archivia tutto con la riservatezza richiesta dai settori regolamentati.'),
                    ('globe', 'Italiano e inglese', 'Voce naturale in italiano, inglese fluente per la clientela internazionale, riconoscimento automatico della lingua. Altre lingue su richiesta.'),
                    ('plug', 'Integrazione con i sistemi', 'Crea contatti, aggiorna ticket e sincronizza i dati con CRM, gestionale e agenda in tempo reale.'),
                    ('chart', 'Cruscotto e report', 'Monitoraggio in tempo reale di chiamate, risoluzioni e tempi, con report periodici per la direzione.')], 3),
                ('features_white', 'Perché on-premise', 'Sei ragioni per tenere le voci dei clienti in azienda.', None, [
                    ('lock', 'Sovranità dei dati', 'Le conversazioni restano sui tuoi server: nessun cloud esterno, nessun trasferimento fuori dall’Unione Europea.'),
                    ('bolt', 'Latenza minima', 'Elaborazione locale: risposte immediate e conversazioni fluide come con un operatore.'),
                    ('shield', 'Conformità GDPR', 'Registro delle attività, conservazione configurabile, cancellazione garantita. Pronto per le verifiche del Garante.'),
                    ('wallet', 'Costi prevedibili', 'Investimento iniziale e manutenzione fissa: nessun costo per minuto o per chiamata.'),
                    ('server', 'Funziona sempre', 'Le funzioni principali non dipendono da internet: continuità operativa anche con connettività limitata.'),
                    ('hand', 'Nessun vincolo con fornitori', 'L’infrastruttura è di tua proprietà: nessuna dipendenza da chi può cambiare prezzi e condizioni.')], 3),
                ('packages', 'Prezzi', 'Tre formule, nessun costo nascosto.', 'Prezzi IVA esclusa. Hardware fornito su richiesta.', [
                    ('Starter', '€25.000', '1 linea', 'Per iniziare con l’automazione vocale.', ['Orario d’ufficio (8:00–18:00)', 'Solo italiano', 'Integrazione CRM di base', 'Cruscotto analitico', 'Formazione del team (4 ore)'], 'contatti.html', 'Richiedi un preventivo'),
                    ('Business', '€45.000', '5 linee', 'Per volumi di chiamate medio-alti.', ['24 ore su 24, 7 giorni su 7', 'Italiano e inglese', 'Integrazione CRM e gestionale', 'Report personalizzati', 'Formazione del team (8 ore)'], 'contatti.html', 'Richiedi una demo'),
                    ('Enterprise', 'da €75.000', 'linee illimitate', 'Per organizzazioni con più sedi.', ['Livello di servizio garantito', 'Più lingue e voce personalizzata', 'Integrazioni su misura senza limiti', 'Supporto dedicato', 'Server preconfigurato incluso'], 'contatti.html', 'Parla con il team')], 'Abbinando VoiceAI a KnowledgeAI Enterprise si ottiene uno sconto del 15% sul totale.', ('Scopri KnowledgeAI', 'knowledgeai-enterprise.html'), 'prezzi'),
                ('specs', 'Specifiche', 'Cosa serve per l’installazione.', None, [
                    ('Requisiti hardware', ['GPU NVIDIA RTX 4090 (consigliata) o A100, 24 GB di VRAM', 'RAM 64 GB (128 GB consigliati)', 'Archiviazione 1 TB NVMe SSD', 'CPU 16+ core', 'Rete locale 1 Gbps', 'Server preconfigurato disponibile in opzione']),
                    ('Integrazioni supportate', ['Telefonia: SIP trunk, PBX, VoIP', 'CRM: Salesforce, HubSpot, Zoho, Pipedrive', 'Gestionali: Zucchetti, TeamSystem, SAP, Odoo', 'Ticketing: Zendesk, Freshdesk, ServiceNow', 'Agende: Google, Outlook, Calendly', 'API REST e webhook per sistemi su misura'])]),
                ('faq', [
                    ('Quanto costa VoiceAI On-Premise?', 'Da €25.000 (Starter, una linea, orario d’ufficio) a €45.000 (Business, cinque linee, 24 ore su 24) fino a oltre €75.000 per la versione Enterprise con linee illimitate e server incluso. Prezzi IVA esclusa.'),
                    ('Come si integra con il mio centralino?', 'Tramite SIP trunk, PBX o VoIP. Durante l’installazione configuriamo lo smistamento, gli orari e i casi in cui passare la chiamata a un operatore.'),
                    ('Quanto tempo serve per attivarlo?', 'Dall’ordine alla messa in produzione servono in media 4–6 settimane, incluse le integrazioni con CRM e gestionale e la formazione del team.'),
                    ('I dati vocali restano davvero in azienda?', 'Sì. Riconoscimento vocale, sintesi e trascrizione girano sul server installato in azienda o in un cloud privato che controlli tu. Nessun audio viene inviato a servizi esterni.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'voiceai-on-premise.html'), 'VoiceAI On-Premise', spec['description'], offer(low=25000, high=75000), 'Voice AI')]
    else:
        spec = dict(
            path='en/voiceai-on-premise.html', alt='voiceai-on-premise.html', chat=False,
            title='VoiceAI On-Premise: AI voice assistant for switchboard and customer service | PugliAI',
            description='An AI voice assistant installed on your company’s servers: intelligent switchboard, 24/7 customer service, call transcription, CRM and ERP integration. From €25,000, VAT excluded.',
            eyebrow='On-premise product', h1='VoiceAI On-Premise: the voice assistant that answers for your company.',
            lead='Intelligent switchboard, 24/7 customer service and call transcription. All on your servers: no voice data on external clouds.',
            cta=('Request a demo', 'contact.html'), ghost=('See pricing', '#pricing'),
            image=(IMG_MEET, 'Two people in a business conversation at a table by a window'), glass=('Call in progress · sample', ['Request recognised: order status', 'Data read from the ERP', 'No hand-off needed']),
            breadcrumb=[('Home', 'index.html'), ('Products', 'products.html'), ('VoiceAI On-Premise', '')], crumb_urls=['en/index.html', 'en/products.html', 'en/voiceai-on-premise.html'],
            sections=[
                ('features', 'Use cases', 'What VoiceAI does for your company.', 'It handles voice communications intelligently, keeping every piece of data safe on your servers.', [
                    ('phone', 'Intelligent switchboard', 'Answers calls, routes them to the right department, books appointments and handles recurring requests on its own.'),
                    ('clock', '24/7 customer service', 'Resolves first-level requests, collects information for complex cases and hands the call to an operator when needed.'),
                    ('doc', 'Transcription and archive', 'Transcribes and analyses conversations, extracts useful data and archives everything with the confidentiality regulated sectors require.'),
                    ('globe', 'Italian and English', 'Natural Italian voice, fluent English for international customers, automatic language detection. Other languages on request.'),
                    ('plug', 'Systems integration', 'Creates contacts, updates tickets and syncs data with CRM, ERP and calendars in real time.'),
                    ('chart', 'Dashboard and reports', 'Real-time monitoring of calls, resolutions and timing, with periodic reports for management.')], 3),
                ('features_white', 'Why on-premise', 'Six reasons to keep customers’ voices in the company.', None, [
                    ('lock', 'Data sovereignty', 'Conversations stay on your servers: no external cloud, no transfers outside the European Union.'),
                    ('bolt', 'Minimal latency', 'Local processing: immediate answers and conversations as smooth as with an operator.'),
                    ('shield', 'GDPR compliance', 'Activity log, configurable retention, guaranteed deletion. Ready for regulator audits.'),
                    ('wallet', 'Predictable costs', 'Upfront investment and fixed maintenance: no cost per minute or per call.'),
                    ('server', 'Always on', 'Core functions do not depend on the internet: business continuity even with limited connectivity.'),
                    ('hand', 'No vendor lock-in', 'The infrastructure is yours: no dependence on vendors who can change prices and terms.')], 3),
                ('packages', 'Pricing', 'Three formats, no hidden costs.', 'Prices exclude VAT. Hardware supplied on request.', [
                    ('Starter', '€25,000', '1 line', 'To start with voice automation.', ['Office hours (8:00–18:00)', 'Italian only', 'Basic CRM integration', 'Analytics dashboard', 'Team training (4 hours)'], 'contact.html', 'Request a quote'),
                    ('Business', '€45,000', '5 lines', 'For medium-to-high call volumes.', ['24/7', 'Italian and English', 'CRM and ERP integration', 'Custom reports', 'Team training (8 hours)'], 'contact.html', 'Request a demo'),
                    ('Enterprise', 'from €75,000', 'unlimited lines', 'For organisations with several sites.', ['Guaranteed service level', 'More languages and custom voice', 'Unlimited custom integrations', 'Dedicated support', 'Pre-configured server included'], 'contact.html', 'Talk to the team')], 'Combining VoiceAI with KnowledgeAI Enterprise gives a 15% discount on the total.', ('Explore KnowledgeAI', 'knowledgeai-enterprise.html'), 'pricing'),
                ('specs', 'Specifications', 'What the installation requires.', None, [
                    ('Hardware requirements', ['NVIDIA RTX 4090 (recommended) or A100 GPU, 24 GB VRAM', '64 GB RAM (128 GB recommended)', '1 TB NVMe SSD storage', '16+ core CPU', '1 Gbps local network', 'Pre-configured server available as an option']),
                    ('Supported integrations', ['Telephony: SIP trunk, PBX, VoIP', 'CRM: Salesforce, HubSpot, Zoho, Pipedrive', 'ERP: Zucchetti, TeamSystem, SAP, Odoo', 'Ticketing: Zendesk, Freshdesk, ServiceNow', 'Calendars: Google, Outlook, Calendly', 'REST APIs and webhooks for custom systems'])]),
                ('faq', [
                    ('How much does VoiceAI On-Premise cost?', 'From €25,000 (Starter, one line, office hours) to €45,000 (Business, five lines, 24/7) up to over €75,000 for the Enterprise version with unlimited lines and server included. Prices exclude VAT.'),
                    ('How does it integrate with my switchboard?', 'Through SIP trunk, PBX or VoIP. During installation we configure routing, hours and the cases in which to hand the call to an operator.'),
                    ('How long does activation take?', 'From order to production it takes 4–6 weeks on average, including CRM and ERP integrations and team training.'),
                    ('Does voice data really stay in the company?', 'Yes. Speech recognition, synthesis and transcription run on the server installed on site or in a private cloud you control. No audio is sent to external services.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'en/voiceai-on-premise.html'), 'VoiceAI On-Premise', spec['description'], offer(low=25000, high=75000), 'Voice AI')]
    return detail_page(lang, spec, ld)


# ---------------------------------------------------------------- KnowledgeAI

def knowledgeai(lang):
    if lang == 'it':
        spec = dict(
            path='knowledgeai-enterprise.html', alt='en/knowledgeai-enterprise.html', chat=False,
            title='KnowledgeAI Enterprise: chat RAG on-premise sui documenti aziendali | PugliAI',
            description='Chat aziendale che interroga manuali, contratti e procedure con tecnologia RAG, installata sui tuoi server. Risposte con la fonte citata, permessi per ruolo, tracciabilità completa. Da €30.000, IVA esclusa.',
            eyebrow='Prodotto on-premise', h1='KnowledgeAI Enterprise: le risposte sono nei tuoi documenti.',
            lead='Una chat che interroga manuali, contratti e procedure con tecnologia RAG e cita sempre la fonte. Installata sui tuoi server, con permessi per ruolo e tracciabilità completa.',
            cta=('Richiedi una demo', 'contatti.html'), ghost=('Vedi i prezzi', '#prezzi'),
            image=(IMG_DESK, 'Scrivania con computer portatile e quaderno di appunti'), glass=('Risposta · esempio', ['Domanda: garanzia sui pezzi di ricambio?', 'Fonte: Condizioni generali 2026, art. 7', 'Consultabile solo dal team commerciale']),
            breadcrumb=[('Home', 'index.html'), ('Prodotti', 'prodotti.html'), ('KnowledgeAI Enterprise', '')], crumb_urls=['index.html', 'prodotti.html', 'knowledgeai-enterprise.html'],
            sections=[
                ('features', 'Casi d’uso', 'Dove KnowledgeAI fa risparmiare tempo.', 'La conoscenza aziendale diventa accessibile con una domanda in linguaggio naturale.', [
                    ('book', 'Base di conoscenza interna', 'Procedure, regolamenti e buone pratiche interrogabili senza cercare tra i documenti. Utile per l’inserimento dei nuovi assunti.'),
                    ('cog', 'Documentazione tecnica', 'Tecnici e progettisti trovano specifiche, manuali e schemi senza sfogliare centinaia di PDF.'),
                    ('doc', 'Contratti e ufficio legale', 'Ricerca di clausole, confronto tra contratti, scadenze e rinnovi con la fonte sempre citata.'),
                    ('users', 'Risorse umane', 'Risposte su ferie, permessi, welfare e procedure di rimborso senza passare dall’ufficio personale.'),
                    ('chart', 'Analisi e report', 'La direzione interroga report, analisi di mercato e dati storici per decidere rapidamente.'),
                    ('chat', 'Supporto interno al servizio clienti', 'Gli operatori trovano subito guide, storico dei casi e procedure di escalation.')], 3),
                ('steps', 'Come funziona la tecnologia RAG', 'Cerca nei tuoi documenti, poi genera la risposta.', 'RAG (Retrieval Augmented Generation) unisce la ricerca semantica nei tuoi documenti alla generazione di testo: ogni risposta nasce da fonti reali.', [
                    ('Indicizzazione', 'PDF, Word, email e database vengono elaborati e indicizzati in un archivio vettoriale locale.'),
                    ('Ricerca semantica', 'Alla domanda, il sistema trova i passaggi più pertinenti anche senza le parole esatte.'),
                    ('Generazione con contesto', 'Il modello risponde usando solo le informazioni trovate nei tuoi documenti.'),
                    ('Risposta con citazioni', 'Ogni risposta indica i documenti di origine, verificabili con un clic.')]),
                ('table', 'Confronto', 'KnowledgeAI e un assistente generico a confronto.', None, ['', 'KnowledgeAI Enterprise', 'Assistente AI generico'], [
                    ('Fonte delle risposte', 'Solo i tuoi documenti, con citazione', 'Conoscenza generica, senza fonti'),
                    ('Dove vanno i dati', 'Restano sui tuoi server', 'Inviati a servizi esterni'),
                    ('Controllo degli accessi', 'Per ruolo, team e documento', 'Assente'),
                    ('Tracciabilità', 'Registro completo di domande e documenti consultati', 'Assente')]),
                ('features_white', 'Funzioni', 'Pensato per l’uso in azienda.', None, [
                    ('lock', 'Permessi per ruolo', 'Ogni utente vede solo i documenti autorizzati. Integrazione con Active Directory, LDAP e SAML.'),
                    ('doc', 'Tutti i formati', 'PDF, Word, Excel, PowerPoint, email, HTML e Markdown, con riconoscimento del testo nelle scansioni e accesso ai database SQL.'),
                    ('plug', 'Connettori', 'SharePoint, Google Drive, Confluence, Notion e Dropbox, con indicizzazione automatica dei nuovi documenti.'),
                    ('eye', 'Tracciabilità completa', 'Registro di ogni domanda, risposta e documento consultato, esportabile per le verifiche GDPR.'),
                    ('chat', 'Più canali', 'Applicazione web, Slack, Microsoft Teams, widget da integrare nel sito e API REST.'),
                    ('chart', 'Analisi d’uso', 'Domande più frequenti, lacune nella documentazione e tendenze di utilizzo.')], 3),
                ('packages', 'Prezzi', 'Tre formule in base a utenti e archivio.', 'Prezzi IVA esclusa. Nessun costo per singola domanda.', [
                    ('Team', '€30.000', 'fino a 50 utenti', 'Per un team o un reparto.', ['10 GB di documenti indicizzati', 'PDF, Word ed Excel', 'Applicazione web', 'Supporto via email', 'Formazione del team (4 ore)'], 'contatti.html', 'Richiedi un preventivo'),
                    ('Business', '€55.000', 'fino a 200 utenti', 'Per aziende con esigenze di controllo degli accessi.', ['100 GB di documenti', 'Permessi per ruolo', 'Tutti i formati e riconoscimento del testo', 'Connettori SharePoint e Drive, Slack e Teams', 'Formazione del team (8 ore)'], 'contatti.html', 'Richiedi una demo'),
                    ('Enterprise', 'da €85.000', 'utenti illimitati', 'Per organizzazioni con requisiti avanzati.', ['Archivio illimitato', 'Accesso unico (SSO) e Active Directory', 'Modelli personalizzati', 'Livello di servizio garantito e supporto dedicato', 'Server preconfigurato incluso'], 'contatti.html', 'Parla con il team')], 'Abbinando KnowledgeAI a VoiceAI On-Premise si ottiene uno sconto del 15% sul totale.', ('Scopri VoiceAI', 'voiceai-on-premise.html'), 'prezzi'),
                ('specs', 'Specifiche', 'Cosa serve per l’installazione.', None, [
                    ('Requisiti hardware', ['GPU NVIDIA RTX 4090 o A100, 24 GB di VRAM (48 GB per i modelli più grandi)', 'RAM 128 GB (256 GB consigliati)', 'Archiviazione 2 TB NVMe SSD', 'CPU 32+ core per l’indicizzazione', 'Rete locale 1 Gbps', 'I requisiti crescono con il volume dei documenti']),
                    ('Integrazioni supportate', ['Archivi: SharePoint, Google Drive, Confluence', 'Chat: Slack, Microsoft Teams', 'Autenticazione: Active Directory, LDAP, SAML, OAuth', 'Database: PostgreSQL, MySQL, SQL Server', 'Gestionali: Zucchetti, TeamSystem, SAP', 'API REST, webhook, GraphQL'])]),
                ('faq', [
                    ('Quanto costa KnowledgeAI Enterprise?', 'Da €30.000 (Team, fino a 50 utenti) a €55.000 (Business, fino a 200 utenti con permessi per ruolo) fino a oltre €85.000 per la versione Enterprise senza limiti. Prezzi IVA esclusa, nessun costo per domanda.'),
                    ('Cosa vuol dire «risposte con fonte citata»?', 'Ogni risposta riporta i documenti da cui è stata ricavata, con il collegamento al passaggio originale. Se un’informazione non è nei tuoi documenti, il sistema lo dice invece di inventare.'),
                    ('I documenti restano in azienda?', 'Sì. Indicizzazione, ricerca e generazione delle risposte avvengono sul server installato in azienda o in un cloud privato che controlli tu.'),
                    ('Quanto tempo serve per l’attivazione?', 'In media 4–8 settimane: installazione, connessione agli archivi, indicizzazione iniziale, definizione dei permessi e formazione del team.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'knowledgeai-enterprise.html'), 'KnowledgeAI Enterprise', spec['description'], offer(low=30000, high=85000), 'Enterprise knowledge assistant')]
    else:
        spec = dict(
            path='en/knowledgeai-enterprise.html', alt='knowledgeai-enterprise.html', chat=False,
            title='KnowledgeAI Enterprise: on-premise RAG chat on company documents | PugliAI',
            description='A company chat that queries manuals, contracts and procedures with RAG technology, installed on your servers. Answers with cited sources, permissions per role, full traceability. From €30,000, VAT excluded.',
            eyebrow='On-premise product', h1='KnowledgeAI Enterprise: the answers are in your documents.',
            lead='A chat that queries manuals, contracts and procedures with RAG technology and always cites the source. Installed on your servers, with permissions per role and full traceability.',
            cta=('Request a demo', 'contact.html'), ghost=('See pricing', '#pricing'),
            image=(IMG_DESK, 'Desk with a laptop and a notebook'), glass=('Answer · sample', ['Question: warranty on spare parts?', 'Source: General terms 2026, art. 7', 'Visible to the sales team only']),
            breadcrumb=[('Home', 'index.html'), ('Products', 'products.html'), ('KnowledgeAI Enterprise', '')], crumb_urls=['en/index.html', 'en/products.html', 'en/knowledgeai-enterprise.html'],
            sections=[
                ('features', 'Use cases', 'Where KnowledgeAI saves time.', 'Company knowledge becomes accessible with a question in natural language.', [
                    ('book', 'Internal knowledge base', 'Procedures, policies and best practices queried without searching through documents. Useful for onboarding new hires.'),
                    ('cog', 'Technical documentation', 'Technicians and designers find specifications, manuals and drawings without leafing through hundreds of PDFs.'),
                    ('doc', 'Contracts and legal', 'Clause search, contract comparison, deadlines and renewals with the source always cited.'),
                    ('users', 'Human resources', 'Answers on leave, benefits and expense procedures without going through the HR office.'),
                    ('chart', 'Analysis and reports', 'Management queries reports, market analyses and historical data to decide quickly.'),
                    ('chat', 'Internal customer-service support', 'Operators immediately find guides, case history and escalation procedures.')], 3),
                ('steps', 'How RAG technology works', 'It searches your documents, then generates the answer.', 'RAG (Retrieval Augmented Generation) combines semantic search in your documents with text generation: every answer comes from real sources.', [
                    ('Indexing', 'PDF, Word, email and databases are processed and indexed in a local vector store.'),
                    ('Semantic search', 'For each question the system finds the most relevant passages, even without the exact words.'),
                    ('Generation with context', 'The model answers using only the information found in your documents.'),
                    ('Answer with citations', 'Every answer lists the source documents, verifiable with one click.')]),
                ('table', 'Comparison', 'KnowledgeAI versus a generic assistant.', None, ['', 'KnowledgeAI Enterprise', 'Generic AI assistant'], [
                    ('Source of answers', 'Only your documents, with citation', 'General knowledge, no sources'),
                    ('Where data goes', 'Stays on your servers', 'Sent to external services'),
                    ('Access control', 'Per role, team and document', 'None'),
                    ('Traceability', 'Full log of questions and documents consulted', 'None')]),
                ('features_white', 'Features', 'Built for company use.', None, [
                    ('lock', 'Permissions per role', 'Every user sees only authorised documents. Integration with Active Directory, LDAP and SAML.'),
                    ('doc', 'All formats', 'PDF, Word, Excel, PowerPoint, email, HTML and Markdown, with text recognition on scans and access to SQL databases.'),
                    ('plug', 'Connectors', 'SharePoint, Google Drive, Confluence, Notion and Dropbox, with automatic indexing of new documents.'),
                    ('eye', 'Full traceability', 'Log of every question, answer and document consulted, exportable for GDPR audits.'),
                    ('chat', 'Multiple channels', 'Web app, Slack, Microsoft Teams, embeddable website widget and REST API.'),
                    ('chart', 'Usage analytics', 'Most frequent questions, documentation gaps and usage trends.')], 3),
                ('packages', 'Pricing', 'Three formats based on users and archive size.', 'Prices exclude VAT. No cost per question.', [
                    ('Team', '€30,000', 'up to 50 users', 'For a team or department.', ['10 GB of indexed documents', 'PDF, Word and Excel', 'Web application', 'Email support', 'Team training (4 hours)'], 'contact.html', 'Request a quote'),
                    ('Business', '€55,000', 'up to 200 users', 'For companies needing access control.', ['100 GB of documents', 'Permissions per role', 'All formats and text recognition', 'SharePoint and Drive, Slack and Teams connectors', 'Team training (8 hours)'], 'contact.html', 'Request a demo'),
                    ('Enterprise', 'from €85,000', 'unlimited users', 'For organisations with advanced requirements.', ['Unlimited archive', 'Single sign-on and Active Directory', 'Custom models', 'Guaranteed service level and dedicated support', 'Pre-configured server included'], 'contact.html', 'Talk to the team')], 'Combining KnowledgeAI with VoiceAI On-Premise gives a 15% discount on the total.', ('Explore VoiceAI', 'voiceai-on-premise.html'), 'pricing'),
                ('specs', 'Specifications', 'What the installation requires.', None, [
                    ('Hardware requirements', ['NVIDIA RTX 4090 or A100 GPU, 24 GB VRAM (48 GB for larger models)', '128 GB RAM (256 GB recommended)', '2 TB NVMe SSD storage', '32+ core CPU for indexing', '1 Gbps local network', 'Requirements grow with document volume']),
                    ('Supported integrations', ['Repositories: SharePoint, Google Drive, Confluence', 'Chat: Slack, Microsoft Teams', 'Authentication: Active Directory, LDAP, SAML, OAuth', 'Databases: PostgreSQL, MySQL, SQL Server', 'ERP: Zucchetti, TeamSystem, SAP', 'REST API, webhooks, GraphQL'])]),
                ('faq', [
                    ('How much does KnowledgeAI Enterprise cost?', 'From €30,000 (Team, up to 50 users) to €55,000 (Business, up to 200 users with permissions per role) up to over €85,000 for the unlimited Enterprise version. Prices exclude VAT, no cost per question.'),
                    ('What does “answers with cited sources” mean?', 'Every answer lists the documents it was drawn from, with a link to the original passage. If a piece of information is not in your documents, the system says so instead of making it up.'),
                    ('Do the documents stay in the company?', 'Yes. Indexing, search and answer generation take place on the server installed on site or in a private cloud you control.'),
                    ('How long does activation take?', 'On average 4–8 weeks: installation, connection to repositories, initial indexing, permission set-up and team training.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'en/knowledgeai-enterprise.html'), 'KnowledgeAI Enterprise', spec['description'], offer(low=30000, high=85000), 'Enterprise knowledge assistant')]
    return detail_page(lang, spec, ld)


# ---------------------------------------------------------------- Hosting MCP

def hosting_mcp(lang):
    if lang == 'it':
        spec = dict(
            path='hosting-mcp.html', alt='en/mcp-hosting.html', chat=False,
            title='Hosting MCP on-premise: server Model Context Protocol gestiti | PugliAI',
            description='Ospitiamo e gestiamo i server MCP (Model Context Protocol) sulla tua infrastruttura: i tuoi agenti AI accedono a gestionale, CRM e documenti in modo controllato e tracciato. Da €290 al mese, IVA esclusa.',
            eyebrow='Prodotto on-premise · Novità 2026', h1='Hosting MCP: collega l’AI ai tuoi sistemi, senza far uscire i dati.',
            lead='Installiamo, configuriamo e gestiamo i server Model Context Protocol sulla tua infrastruttura. Modelli e agenti AI accedono a gestionale, CRM, ERP e documenti con permessi granulari e registro di ogni accesso.',
            cta=('Richiedi una valutazione gratuita', 'contatti.html'), ghost=('Vedi i prezzi', '#prezzi'),
            image=(IMG_WORK, 'Officina meccanica con macchine utensili alla luce del tramonto'), glass=('Server MCP · esempio', ['Connettore gestionale: lettura ordini', 'Connettore CRM: lettura e aggiornamento', 'Ogni accesso registrato']),
            breadcrumb=[('Home', 'index.html'), ('Prodotti', 'prodotti.html'), ('Hosting MCP', '')], crumb_urls=['index.html', 'prodotti.html', 'hosting-mcp.html'],
            sections=[
                ('answer', '<strong>Il Model Context Protocol (MCP) è uno standard aperto</strong> che permette ai modelli di intelligenza artificiale di collegarsi a strumenti, dati e applicazioni aziendali in modo uniforme e sicuro. Invece di un’integrazione su misura per ogni sistema, un server MCP espone in modo controllato le funzioni di un’applicazione, così che un modello o un agente possa usarle attraverso un’unica interfaccia.',
                 [('Cos’è l’hosting MCP', 'Il servizio con cui PugliAI installa, configura e gestisce i server MCP sulla tua infrastruttura o su un cloud privato che controlli tu.'),
                  ('A cosa serve', 'L’AI «vede» i dati reali dell’azienda ed esegue attività sui tuoi sistemi, ma quei dati non lasciano mai la tua infrastruttura.'),
                  ('Cosa include', 'Server gestiti e aggiornati, connettori su misura, permessi per strumento e per operazione, monitoraggio, registro degli accessi, formazione.'),
                  ('Prezzi', 'Starter €290/mese, Business €590/mese, Enterprise su misura. IVA esclusa, aggiornamenti e monitoraggio inclusi.'),
                  ('Insieme a', 'Agenti AI autonomi e KnowledgeAI Enterprise, che usano i server MCP come ponte sicuro verso i tuoi sistemi.')],
                 f'A cura del team PugliAI · Ultimo aggiornamento: {UPDATED_IT}'),
                ('steps', 'Come funziona', 'Dall’analisi al server in produzione.', None, [
                    ('Analisi dei sistemi', 'Mappiamo i sistemi da collegare (gestionale, CRM, ERP, documenti) e i casi d’uso AI prioritari.'),
                    ('Installazione on-premise', 'Installiamo i server MCP sulla tua infrastruttura o su un cloud privato che controlli tu.'),
                    ('Connettori sicuri', 'Colleghiamo i tuoi strumenti con connettori dedicati, autenticazione, permessi e registro degli accessi.'),
                    ('Gestione continua', 'Monitoriamo, aggiorniamo e mettiamo in sicurezza i server nel tempo.')]),
                ('features', 'Cosa include', 'Un servizio gestito, dall’installazione alla manutenzione.', None, [
                    ('server', 'Server MCP gestiti', 'Installazione, configurazione e gestione sulla tua infrastruttura, con aggiornamenti e correzioni di sicurezza inclusi.'),
                    ('plug', 'Connettori su misura', 'Verso gestionali ed ERP italiani, CRM, database, archivi documentali e API interne.'),
                    ('lock', 'Permessi e registro', 'Permessi per strumento e per operazione, autenticazione e registro completo di ogni accesso dell’AI ai dati.'),
                    ('eye', 'Monitoraggio continuo', 'Disponibilità e prestazioni sotto controllo, con avvisi e report periodici sull’utilizzo.'),
                    ('bolt', 'Pronto per gli agenti', 'Infrastruttura compatibile con agenti AI autonomi e assistenti conversazionali.'),
                    ('users', 'Supporto e formazione', 'Affiancamento del tuo team tecnico e documentazione: l’azienda governa la propria infrastruttura AI.')], 3),
                ('features_white', 'Casi d’uso', 'Cosa diventa possibile.', None, [
                    ('database', 'Assistente sul gestionale', 'Un agente legge ordini, giacenze e scadenze e risponde al team in linguaggio naturale, con i dati che restano in azienda.'),
                    ('chat', 'Servizio clienti collegato al CRM', 'L’AI consulta lo storico del cliente, apre ticket e aggiorna i dati senza copiare informazioni su servizi esterni.'),
                    ('doc', 'Ricerca sui documenti', 'Un connettore verso l’archivio documentale alimenta risposte precise su contratti, procedure e manuali, con tracciamento delle consultazioni.')], 3),
                ('packages', 'Prezzi', 'Un canone mensile trasparente.', 'Prezzi IVA esclusa. Aggiornamenti e monitoraggio sempre inclusi.', [
                    ('Starter', '€290/mese', '1 server', 'Per collegare l’AI ai primi sistemi.', ['Fino a 2 connettori standard', 'Aggiornamenti e correzioni di sicurezza', 'Monitoraggio della disponibilità', 'Registro degli accessi', 'Supporto via email'], 'contatti.html', 'Richiedi una valutazione'),
                    ('Business', '€590/mese', 'alta affidabilità', 'Per collegare più sistemi e più team.', ['Fino a 5 connettori', 'Accesso unico (SSO)', 'Registro degli accessi avanzato', 'Livello di servizio garantito', 'Report di utilizzo mensili'], 'contatti.html', 'Richiedi una demo'),
                    ('Enterprise', 'su misura', 'multi-sede', 'Per infrastrutture complesse.', ['Connettori illimitati', 'Integrazioni su misura', 'Alta disponibilità e ridondanza', 'Regole di governo avanzate', 'Supporto dedicato'], 'contatti.html', 'Parla con il team')], 'Abbina l’hosting MCP agli agenti AI autonomi per far eseguire attività end-to-end sui tuoi sistemi.', ('Scopri gli agenti AI', 'agenti-ai.html'), 'prezzi'),
                ('faq', [
                    ('Che cos’è il Model Context Protocol (MCP)?', 'Uno standard aperto che permette ai modelli di AI di collegarsi a strumenti, dati e applicazioni aziendali in modo uniforme e sicuro. Un server MCP espone in modo controllato le funzioni di un sistema (gestionale, CRM, archivio) perché un modello o un agente possa usarle senza integrazioni su misura per ogni strumento.'),
                    ('Cosa significa hosting MCP on-premise?', 'I server MCP vengono installati e gestiti sulla tua infrastruttura, non su servizi esterni. I dati a cui accede l’AI non lasciano l’azienda: PugliAI cura installazione, aggiornamenti e monitoraggio, tu mantieni il controllo e la conformità al GDPR.'),
                    ('Quanto costa l’hosting MCP?', 'Da €290 al mese per il piano Starter (un server e fino a due connettori), €590 al mese per il piano Business (fino a cinque connettori, SSO e livello di servizio garantito) e prezzo su misura per il piano Enterprise. Aggiornamenti e monitoraggio inclusi.'),
                    ('A quali sistemi si può collegare un server MCP?', 'Gestionali ed ERP italiani (Zucchetti, TeamSystem, SAP), CRM (Salesforce, HubSpot, Zoho), archivi documentali, database SQL, posta elettronica e strumenti interni tramite API REST. Sviluppiamo e manteniamo i connettori necessari.'),
                    ('Che differenza c’è tra hosting MCP e agenti AI?', 'L’hosting MCP è l’infrastruttura che collega l’AI ai tuoi dati e strumenti; gli agenti sono i sistemi che la usano per eseguire attività. Il server MCP è il ponte, l’agente è ciò che lo attraversa. Funzionano bene insieme, ma si possono adottare anche separatamente.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'hosting-mcp.html'), 'Hosting MCP On-Premise', spec['description'], offer(price=290, unit='MONTH'), 'Managed MCP servers')]
    else:
        spec = dict(
            path='en/mcp-hosting.html', alt='hosting-mcp.html', chat=False,
            title='On-premise MCP hosting: managed Model Context Protocol servers | PugliAI',
            description='We host and manage MCP (Model Context Protocol) servers on your infrastructure: your AI agents access ERP, CRM and documents in a controlled, logged way. From €290 per month, VAT excluded.',
            eyebrow='On-premise product · New in 2026', h1='MCP hosting: connect AI to your systems without letting data out.',
            lead='We install, configure and manage Model Context Protocol servers on your infrastructure. AI models and agents access ERP, CRM and documents with granular permissions and a log of every access.',
            cta=('Request a free assessment', 'contact.html'), ghost=('See pricing', '#pricing'),
            image=(IMG_WORK, 'Machine workshop with machine tools in sunset light'), glass=('MCP server · sample', ['ERP connector: read orders', 'CRM connector: read and update', 'Every access logged']),
            breadcrumb=[('Home', 'index.html'), ('Products', 'products.html'), ('MCP hosting', '')], crumb_urls=['en/index.html', 'en/products.html', 'en/mcp-hosting.html'],
            sections=[
                ('answer', '<strong>The Model Context Protocol (MCP) is an open standard</strong> that lets artificial-intelligence models connect to business tools, data and applications in a uniform, secure way. Instead of a custom integration for each system, an MCP server exposes an application’s functions in a controlled way so that a model or agent can use them through a single interface.',
                 [('What MCP hosting is', 'The service with which PugliAI installs, configures and manages MCP servers on your infrastructure or on a private cloud you control.'),
                  ('What it is for', 'AI “sees” the company’s real data and performs tasks on your systems, but that data never leaves your infrastructure.'),
                  ('What it includes', 'Managed and updated servers, custom connectors, permissions per tool and per operation, monitoring, access log, training.'),
                  ('Pricing', 'Starter €290/month, Business €590/month, Enterprise on quotation. VAT excluded, updates and monitoring included.'),
                  ('Works with', 'Autonomous AI agents and KnowledgeAI Enterprise, which use MCP servers as a secure bridge to your systems.')],
                 f'By the PugliAI team · Last updated: {UPDATED_EN}'),
                ('steps', 'How it works', 'From analysis to a server in production.', None, [
                    ('Systems analysis', 'We map the systems to connect (ERP, CRM, documents) and the priority AI use cases.'),
                    ('On-premise installation', 'We install the MCP servers on your infrastructure or on a private cloud you control.'),
                    ('Secure connectors', 'We connect your tools with dedicated connectors, authentication, permissions and access log.'),
                    ('Ongoing management', 'We monitor, update and secure the servers over time.')]),
                ('features', 'What is included', 'A managed service, from installation to maintenance.', None, [
                    ('server', 'Managed MCP servers', 'Installation, configuration and management on your infrastructure, with updates and security patches included.'),
                    ('plug', 'Custom connectors', 'To Italian ERPs, CRMs, databases, document archives and internal APIs.'),
                    ('lock', 'Permissions and log', 'Permissions per tool and per operation, authentication and a full log of every AI access to data.'),
                    ('eye', 'Continuous monitoring', 'Availability and performance under control, with alerts and periodic usage reports.'),
                    ('bolt', 'Ready for agents', 'Infrastructure compatible with autonomous AI agents and conversational assistants.'),
                    ('users', 'Support and training', 'Support for your technical team and documentation: the company governs its own AI infrastructure.')], 3),
                ('features_white', 'Use cases', 'What becomes possible.', None, [
                    ('database', 'ERP assistant', 'An agent reads orders, stock and deadlines and answers the team in natural language, with data staying in the company.'),
                    ('chat', 'Customer service connected to the CRM', 'AI consults the customer history, opens tickets and updates data without copying information to external services.'),
                    ('doc', 'Document search', 'A connector to the document archive feeds precise answers on contracts, procedures and manuals, with access tracking.')], 3),
                ('packages', 'Pricing', 'A transparent monthly fee.', 'Prices exclude VAT. Updates and monitoring always included.', [
                    ('Starter', '€290/month', '1 server', 'To connect AI to the first systems.', ['Up to 2 standard connectors', 'Updates and security patches', 'Availability monitoring', 'Access log', 'Email support'], 'contact.html', 'Request an assessment'),
                    ('Business', '€590/month', 'high availability', 'To connect more systems and teams.', ['Up to 5 connectors', 'Single sign-on', 'Advanced access log', 'Guaranteed service level', 'Monthly usage reports'], 'contact.html', 'Request a demo'),
                    ('Enterprise', 'on quotation', 'multi-site', 'For complex infrastructures.', ['Unlimited connectors', 'Custom integrations', 'High availability and redundancy', 'Advanced governance rules', 'Dedicated support'], 'contact.html', 'Talk to the team')], 'Combine MCP hosting with autonomous AI agents to run end-to-end tasks on your systems.', ('Explore AI agents', 'ai-agents.html'), 'pricing'),
                ('faq', [
                    ('What is the Model Context Protocol (MCP)?', 'An open standard that lets AI models connect to business tools, data and applications in a uniform, secure way. An MCP server exposes a system’s functions (ERP, CRM, archive) in a controlled way so that a model or agent can use them without custom integrations for every tool.'),
                    ('What does on-premise MCP hosting mean?', 'MCP servers are installed and managed on your infrastructure, not on external services. The data AI accesses never leaves the company: PugliAI handles installation, updates and monitoring, you keep control and GDPR compliance.'),
                    ('How much does MCP hosting cost?', 'From €290 per month for the Starter plan (one server and up to two connectors), €590 per month for the Business plan (up to five connectors, SSO and guaranteed service level) and a custom price for the Enterprise plan. Updates and monitoring included.'),
                    ('Which systems can an MCP server connect to?', 'Italian ERPs (Zucchetti, TeamSystem, SAP), CRMs (Salesforce, HubSpot, Zoho), document archives, SQL databases, email and internal tools via REST APIs. We develop and maintain the necessary connectors.'),
                    ('What is the difference between MCP hosting and AI agents?', 'MCP hosting is the infrastructure that connects AI to your data and tools; agents are the systems that use it to perform tasks. The MCP server is the bridge, the agent is what crosses it. They work well together but can also be adopted separately.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'en/mcp-hosting.html'), 'On-Premise MCP Hosting', spec['description'], offer(price=290, unit='MONTH'), 'Managed MCP servers')]
    return detail_page(lang, spec, ld)


# ---------------------------------------------------------------- architettura tecnica

def architettura(lang):
    if lang == 'it':
        spec = dict(
            path='architettura-tecnica.html', alt='en/technical-architecture.html', chat=False,
            title='Architettura tecnica delle soluzioni AI PugliAI | PugliAI',
            description='Come sono costruite le soluzioni AI di PugliAI: livelli di interfaccia, applicazione, modelli, dati e infrastruttura; stack tecnologico, sicurezza e integrazioni con i sistemi aziendali.',
            eyebrow='Architettura tecnica', h1='Come sono costruite le nostre soluzioni.',
            lead='Un’architettura a livelli, con componenti aperti e sostituibili, pensata per integrarsi con i sistemi che l’azienda usa già e per girare dove i dati devono restare.',
            cta=('Parla con il team tecnico', 'contatti.html'), ghost=('Vedi le infrastrutture AI', 'infrastrutture-ai.html'),
            image=(IMG_WORK, 'Officina meccanica con macchine utensili alla luce del tramonto'), glass=('Livelli · esempio', ['Interfaccia: cruscotto web e API', 'Modelli: LLM on-premise', 'Dati: archivio vettoriale locale']),
            breadcrumb=[('Home', 'index.html'), ('Prodotti', 'prodotti.html'), ('Architettura tecnica', '')], crumb_urls=['index.html', 'prodotti.html', 'architettura-tecnica.html'],
            sections=[
                ('features', 'I cinque livelli', 'Dall’interfaccia all’infrastruttura.', None, [
                    ('eye', 'Interfaccia', 'Cruscotti web, chat e API REST per integrare le funzioni AI negli strumenti che il team usa ogni giorno.'),
                    ('cog', 'Applicazione', 'Microservizi in container per orchestrare modelli, regole di business e flussi di lavoro.'),
                    ('cpu', 'Modelli', 'Modelli linguistici, visione artificiale ed elaborazione del linguaggio, ospitati on-premise o in cloud privato.'),
                    ('database', 'Dati', 'Database relazionali e vettoriali, code di messaggi e pipeline per dati strutturati e non.'),
                    ('server', 'Infrastruttura', 'Server on-premise, cloud privato europeo o architetture ibride, con infrastruttura come codice.'),
                    ('plug', 'Integrazioni', 'Connettori MCP verso gestionali, CRM, ERP e archivi documentali.')], 3),
                ('specs', 'Stack tecnologico', 'Componenti aperti, sostituibili, senza vincoli con singoli fornitori.', None, [
                    ('Modelli e orchestrazione', ['Modelli linguistici open e commerciali (OpenAI, Anthropic, Mistral, Meta)', 'PyTorch, Hugging Face, vLLM per l’esecuzione locale', 'LangChain e server MCP per l’orchestrazione', 'MLflow per il ciclo di vita dei modelli']),
                    ('Dati e applicazione', ['PostgreSQL, Redis, database vettoriali', 'Apache Kafka per i flussi in tempo reale', 'FastAPI e Kubernetes per i servizi', 'Docker e Terraform per rilasci ripetibili']),
                    ('Sicurezza e monitoraggio', ['Cifratura a riposo e in transito', 'Controllo degli accessi per ruolo, autenticazione unica (SSO)', 'Registro delle attività per le verifiche GDPR', 'Prometheus e Grafana per il monitoraggio'])]),
                ('features_white', 'Sicurezza', 'Protezione dei dati integrata nel progetto.', None, [
                    ('lock', 'Protezione dei dati', 'Cifratura, mascheramento e gestione sicura delle chiavi.'),
                    ('shield', 'Privacy fin dalla progettazione', 'Minimizzazione dei dati, gestione del consenso e diritto alla cancellazione, come richiesto dal GDPR.'),
                    ('users', 'Controllo degli accessi', 'Permessi per ruolo, autenticazione a più fattori e registro completo delle attività.'),
                    ('flag', 'Conformità', 'GDPR e AI Act europeo; supporto alle verifiche del cliente e dei suoi consulenti.')], 4),
                ('table', 'Integrazioni', 'Sistemi con cui le nostre soluzioni dialogano.', None, ['Categoria', 'Sistemi', 'Modalità'], [
                    ('Gestionali ed ERP', 'Zucchetti, TeamSystem, SAP, Odoo', 'Connettori MCP e API'),
                    ('CRM', 'Salesforce, HubSpot, Zoho, Pipedrive', 'Connettori MCP e API'),
                    ('Collaborazione', 'Microsoft 365, Google Workspace, Slack, Teams', 'API e webhook'),
                    ('Assistenza', 'Zendesk, Freshdesk, ServiceNow', 'API e webhook')]),
                ('faq', [
                    ('Le soluzioni funzionano senza cloud?', 'Sì. Modelli, dati e applicazione possono girare interamente su server in azienda. Il cloud privato europeo è un’opzione, non un requisito.'),
                    ('Posso cambiare modello linguistico in seguito?', 'Sì. L’architettura separa i modelli dall’applicazione: si può passare da un modello open a uno commerciale, o viceversa, senza riscrivere le integrazioni.'),
                    ('Come vengono gestiti gli aggiornamenti?', 'Con rilasci controllati e ripetibili (infrastruttura come codice), test automatici e possibilità di tornare alla versione precedente.')]),
                ('cta_default',),
            ])
    else:
        spec = dict(
            path='en/technical-architecture.html', alt='architettura-tecnica.html', chat=False,
            title='Technical architecture of PugliAI’s AI solutions | PugliAI',
            description='How PugliAI’s AI solutions are built: interface, application, model, data and infrastructure layers; technology stack, security and integrations with business systems.',
            eyebrow='Technical architecture', h1='How our solutions are built.',
            lead='A layered architecture with open, replaceable components, designed to integrate with the systems the company already uses and to run where the data has to stay.',
            cta=('Talk to the technical team', 'contact.html'), ghost=('See AI infrastructure', 'ai-infrastructure.html'),
            image=(IMG_WORK, 'Machine workshop with machine tools in sunset light'), glass=('Layers · sample', ['Interface: web dashboard and API', 'Models: on-premise LLM', 'Data: local vector store']),
            breadcrumb=[('Home', 'index.html'), ('Products', 'products.html'), ('Technical architecture', '')], crumb_urls=['en/index.html', 'en/products.html', 'en/technical-architecture.html'],
            sections=[
                ('features', 'The five layers', 'From interface to infrastructure.', None, [
                    ('eye', 'Interface', 'Web dashboards, chat and REST APIs to integrate AI functions into the tools the team uses every day.'),
                    ('cog', 'Application', 'Containerised microservices orchestrating models, business rules and workflows.'),
                    ('cpu', 'Models', 'Language models, computer vision and language processing, hosted on-premise or in a private cloud.'),
                    ('database', 'Data', 'Relational and vector databases, message queues and pipelines for structured and unstructured data.'),
                    ('server', 'Infrastructure', 'On-premise servers, European private cloud or hybrid architectures, with infrastructure as code.'),
                    ('plug', 'Integrations', 'MCP connectors to ERP, CRM and document archives.')], 3),
                ('specs', 'Technology stack', 'Open, replaceable components, no vendor lock-in.', None, [
                    ('Models and orchestration', ['Open and commercial language models (OpenAI, Anthropic, Mistral, Meta)', 'PyTorch, Hugging Face, vLLM for local execution', 'LangChain and MCP servers for orchestration', 'MLflow for the model lifecycle']),
                    ('Data and application', ['PostgreSQL, Redis, vector databases', 'Apache Kafka for real-time flows', 'FastAPI and Kubernetes for services', 'Docker and Terraform for repeatable releases']),
                    ('Security and monitoring', ['Encryption at rest and in transit', 'Role-based access control, single sign-on', 'Activity log for GDPR audits', 'Prometheus and Grafana for monitoring'])]),
                ('features_white', 'Security', 'Data protection built into the design.', None, [
                    ('lock', 'Data protection', 'Encryption, masking and secure key management.'),
                    ('shield', 'Privacy by design', 'Data minimisation, consent management and right to erasure, as required by GDPR.'),
                    ('users', 'Access control', 'Role-based permissions, multi-factor authentication and a full activity log.'),
                    ('flag', 'Compliance', 'GDPR and EU AI Act; support for audits by the client and its advisers.')], 4),
                ('table', 'Integrations', 'Systems our solutions talk to.', None, ['Category', 'Systems', 'Method'], [
                    ('ERP', 'Zucchetti, TeamSystem, SAP, Odoo', 'MCP connectors and APIs'),
                    ('CRM', 'Salesforce, HubSpot, Zoho, Pipedrive', 'MCP connectors and APIs'),
                    ('Collaboration', 'Microsoft 365, Google Workspace, Slack, Teams', 'APIs and webhooks'),
                    ('Support', 'Zendesk, Freshdesk, ServiceNow', 'APIs and webhooks')]),
                ('faq', [
                    ('Do the solutions work without the cloud?', 'Yes. Models, data and application can run entirely on servers in the company. The European private cloud is an option, not a requirement.'),
                    ('Can I switch language model later?', 'Yes. The architecture separates models from the application: you can move from an open model to a commercial one, or vice versa, without rewriting the integrations.'),
                    ('How are updates managed?', 'With controlled, repeatable releases (infrastructure as code), automated tests and the ability to roll back to the previous version.')]),
                ('cta_default',),
            ])
    return detail_page(lang, spec)


def build_all():
    for lang in ('it', 'en'):
        yield prodotti(lang)
        yield voiceai(lang)
        yield knowledgeai(lang)
        yield hosting_mcp(lang)
        yield architettura(lang)
