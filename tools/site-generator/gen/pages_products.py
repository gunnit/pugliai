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
    'it': ('band', 'On-premise', 'Più controllo sui tuoi dati.', 'Modelli e documenti possono restare sui tuoi server. Definiamo il perimetro dei dati e le eventuali integrazioni esterne; la conformità a GDPR e AI Act richiede una valutazione del caso d’uso, delle responsabilità e delle misure adottate.', 'Richiedi una demo', 'contatti.html', ['Elaborazione locale', 'Accessi tracciati', 'Integrazioni sotto controllo'], IMG_WORK),
    'en': ('band', 'On-premise', 'More control over your data.', 'Models and documents can stay on your servers. We define the data boundary and any external integrations; GDPR and AI Act compliance requires an assessment of the use case, responsibilities and measures in place.', 'Request a demo', 'contact.html', ['Local processing', 'Logged access', 'Controlled integrations'], IMG_WORK),
}


# ---------------------------------------------------------------- prodotti / products

def prodotti(lang):
    if lang == 'it':
        products = [
            ('mic', 'VoiceAI On-Premise', 'Assistente vocale che risponde per la tua azienda 24 ore su 24: centralino intelligente, servizio clienti automatizzato, trascrizione delle chiamate. Elaborazione vocale locale e integrazioni configurabili.', ['Risposta automatica in italiano naturale', 'Integrazione con CRM, gestionale e ticketing', 'Latenza misurata sul carico concordato', 'Controllo degli accessi e trattamento locale'], 'voiceai-on-premise.html', 'Scopri VoiceAI', 'da €25.000'),
            ('book', 'KnowledgeAI Enterprise', 'Chat aziendale che interroga i tuoi documenti (manuali, contratti, procedure) con tecnologia RAG. Risposte corredate di riferimenti ai documenti, da verificare nel contesto della richiesta.', ['PDF, Word, Excel, email e database indicizzati', 'Riferimenti ai documenti consultati', 'Permessi per ruolo e per documento', 'Tracciabilità completa delle richieste'], 'knowledgeai-enterprise.html', 'Scopri KnowledgeAI', 'da €30.000'),
            ('plug', 'Hosting MCP', 'Ospitiamo e gestiamo i server Model Context Protocol sulla tua infrastruttura: gli agenti AI accedono al gestionale, al CRM e ai documenti in sicurezza.', ['Connettori per gestionale, CRM ed ERP', 'Server monitorati e aggiornati per te', 'Permessi per strumento e per operazione', 'Flussi dati e accessi configurabili'], 'hosting-mcp.html', 'Scopri l’hosting MCP', 'da €290/mese'),
            ('bolt', 'Agenti AI autonomi', 'Agenti che leggono i dati dai tuoi sistemi, pianificano ed eseguono attività complete su più strumenti, con supervisione umana sui passaggi critici.', ['Processi eseguiti end-to-end', 'Integrazione con i tuoi strumenti tramite MCP', 'Supervisione umana sui passaggi critici', 'Registro completo delle attività'], 'agenti-ai.html', 'Scopri gli agenti AI', 'da €490/mese'),
        ]
        spec = dict(
            path='prodotti.html', alt='en/products.html', chat=True,
            title='Prodotti AI on-premise: VoiceAI, KnowledgeAI, MCP | PugliAI',
            description='Quattro prodotti AI sui server della tua azienda: VoiceAI On-Premise, KnowledgeAI Enterprise, hosting MCP e agenti autonomi. Accessi e integrazioni controllati.',
            eyebrow='Prodotti on-premise', h1='Soluzioni AI pronte, installate sui tuoi server.',
            lead='Quattro prodotti che girano nella tua infrastruttura: elaborazione locale, integrazioni controllate e costi definiti in anticipo.',
            cta=('Richiedi una demo', 'contatti.html'), ghost=('On-premise o cloud?', '#confronto'),
            image=(IMG_WORK, 'Tecnica che controlla un tablet accanto a una macchina utensile in officina'), glass=('Server MCP · esempio', ['Connettori: gestionale, CRM, PEC, archivio', 'Aggiornamenti e monitoraggio inclusi']),
            sections=[
                ('answer', '<strong>PugliAI offre quattro prodotti AI on-premise per le PMI italiane</strong>: VoiceAI, KnowledgeAI Enterprise, hosting MCP e agenti AI autonomi. «On-premise» significa che il software gira sui server dell’azienda; è disponibile anche il cloud privato. I flussi verso servizi esterni dipendono da modelli, connettori e configurazione scelti.',
                 [('VoiceAI On-Premise', 'Centralino intelligente e servizio clienti vocale, integrato con CRM, gestionale e ticketing. Da €25.000 a €75.000.'),
                  ('KnowledgeAI Enterprise', 'Chat sui documenti aziendali con tecnologia RAG e fonti citate. Da €30.000 a €85.000.'),
                  ('Hosting MCP', 'Server MCP gestiti, aggiornati e monitorati per collegare l’AI ai sistemi aziendali. Da €290 al mese.'),
                  ('Agenti AI autonomi', 'Eseguono processi end-to-end sui tuoi strumenti tramite MCP, con supervisione umana. Da €490 al mese.'),
                  ('Dove girano', 'Sui server dell’azienda o in cloud privato europeo. Il perimetro locale e le integrazioni esterne vengono definiti nel progetto.'),
                  ('Supporto alla conformità', 'Registro delle attività e controllo degli accessi. Obblighi GDPR e AI Act da valutare per uso, dati e ruoli coinvolti.')],
                 f'A cura del team PugliAI · Prezzi IVA esclusa · Ultimo aggiornamento: {UPDATED_IT}'),
                ('services', 'I prodotti', 'Quattro soluzioni, una regola: i dati restano tuoi.', 'Acquistabili singolarmente o insieme ai percorsi di consulenza.', products),
                ('table', 'Confronto', 'On-premise o cloud: le differenze che contano.', None, ['', 'On-premise PugliAI', 'Cloud di terzi'], [
                    ('Dove risiedono i dati', 'Sui tuoi server', 'Su server di terzi'),
                    ('Latenza', 'Dipende da hardware, modello e carico locale', 'Dipende da servizio, carico e connessione'),
                    ('GDPR e AI Act', 'Valutazione di uso, dati, ruoli e misure locali', 'Valutazione di uso, dati, ruoli, fornitori e trasferimenti'),
                    ('Costi', 'Progetto e gestione definiti nel preventivo', 'Abbonamento, consumo o accordo con il fornitore')], 'confronto'),
                BAND['it'],
                ('faq', [
                    ('Cosa sono i prodotti AI on-premise?', 'Soluzioni di intelligenza artificiale installate nell’infrastruttura IT della tua azienda. L’elaborazione può restare locale, ma eventuali modelli cloud, connettori o servizi esterni vanno valutati per conoscere tutti i flussi di dati.'),
                    ('Perché scegliere l’on-premise invece del cloud?', 'Per avere controllo diretto su dati, accessi e infrastruttura e ridurre la dipendenza dalla connessione per le funzioni locali. La scelta dipende da dati trattati, integrazioni, competenze IT e costi; l’on-premise non rende automaticamente conforme un trattamento.'),
                    ('L’on-premise garantisce la conformità a GDPR e AI Act?', '<p>No. L’hosting locale è una scelta tecnica, non una certificazione di conformità. Occorre valutare finalità e basi giuridiche, ruoli, misure di sicurezza, diritti delle persone e, per l’AI Act, tipo di sistema e obblighi applicabili. Riferimenti: <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita">GDPR</a> e <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ita">AI Act</a>.</p>'),
                    ('Quanto costano i prodotti on-premise di PugliAI?', 'VoiceAI On-Premise da €25.000 a €75.000; KnowledgeAI Enterprise da €30.000 a €85.000; hosting MCP da €290 al mese; agenti AI autonomi da €490 al mese. Il costo dipende da utenti, volumi e integrazioni richieste. Prezzi IVA esclusa.'),
                    ('I prodotti si integrano con i sistemi aziendali esistenti?', 'Sì. VoiceAI si collega a CRM, gestionale e ticketing; KnowledgeAI indicizza PDF, Word, Excel, email e database; l’hosting MCP fornisce connettori verso gestionali ed ERP italiani (Zucchetti, TeamSystem, SAP), CRM e archivi documentali.'),
                    ('Serve hardware dedicato?', 'Per VoiceAI e KnowledgeAI serve un server con GPU; forniamo i requisiti oppure un server preconfigurato in opzione. L’hosting MCP e gli agenti possono girare anche su un cloud privato europeo che controlli tu.')]),
                ('cta_default',),
            ])
        page, body = detail_page(lang, spec)
        page.jsonld.append({'@context': 'https://schema.org', '@type': 'ItemList', 'name': 'Prodotti AI on-premise PugliAI', 'url': page.url, 'numberOfItems': 4, 'itemListElement': [
            {'@type': 'ListItem', 'position': 1, 'name': 'VoiceAI On-Premise', 'url': url_of('voiceai-on-premise.html')},
            {'@type': 'ListItem', 'position': 2, 'name': 'KnowledgeAI Enterprise', 'url': url_of('knowledgeai-enterprise.html')},
            {'@type': 'ListItem', 'position': 3, 'name': 'Hosting MCP On-Premise', 'url': url_of('hosting-mcp.html')},
            {'@type': 'ListItem', 'position': 4, 'name': 'Agenti AI autonomi', 'url': url_of('agenti-ai.html')}]})
        return page, body
    products = [
        ('mic', 'VoiceAI On-Premise', 'A voice assistant that answers for your company around the clock: intelligent switchboard, automated customer service, call transcription. Local voice processing and configurable integrations.', ['Automatic answers in natural Italian and English', 'Integration with CRM, ERP and ticketing', 'Latency measured on the agreed workload', 'Access control and local processing'], 'voiceai-on-premise.html', 'Explore VoiceAI', 'from €25,000'),
        ('book', 'KnowledgeAI Enterprise', 'A company chat that queries your documents (manuals, contracts, procedures) with RAG technology. Answers with document references to verify in the context of the request.', ['PDF, Word, Excel, email and databases indexed', 'References to the documents consulted', 'Permissions per role and per document', 'Full traceability of requests'], 'knowledgeai-enterprise.html', 'Explore KnowledgeAI', 'from €30,000'),
        ('plug', 'MCP Hosting', 'We host and manage Model Context Protocol servers on your infrastructure: AI agents access your ERP, CRM and documents securely.', ['Connectors for ERP, CRM and management software', 'Servers monitored and updated for you', 'Permissions per tool and per operation', 'Configurable data flows and access'], 'mcp-hosting.html', 'Explore MCP hosting', 'from €290/month'),
        ('bolt', 'Autonomous AI agents', 'Agents that read data from your systems, plan and execute complete tasks across several tools, with human oversight on critical steps.', ['End-to-end processes', 'Integration with your tools via MCP', 'Human oversight on critical steps', 'Full activity log'], 'ai-agents.html', 'Explore AI agents', 'from €490/month'),
    ]
    spec = dict(
        path='en/products.html', alt='prodotti.html', chat=True,
        title='On-premise AI products: VoiceAI, KnowledgeAI, MCP | PugliAI',
        description='Four AI products installed on your servers: VoiceAI On-Premise, KnowledgeAI Enterprise, MCP hosting and autonomous agents. Controlled access and integrations.',
        eyebrow='On-premise products', h1='Ready-made AI solutions, installed on your servers.',
        lead='Four products that run inside your infrastructure: local processing, controlled integrations and costs set upfront.',
        cta=('Request a demo', 'contact.html'), ghost=('On-premise or cloud?', '#comparison'),
        image=(IMG_WORK, 'Technician checking a tablet next to a machine tool in a workshop'), glass=('MCP server · sample', ['Connectors: ERP, CRM, certified email, archive', 'Updates and monitoring included']),
        sections=[
            ('answer', '<strong>PugliAI offers four on-premise AI products for Italian SMEs</strong>: VoiceAI, KnowledgeAI Enterprise, MCP hosting and autonomous AI agents. “On-premise” means the software runs on the company’s servers; private cloud is also available. Data flows to external services depend on the models, connectors and configuration selected.',
             [('VoiceAI On-Premise', 'Intelligent switchboard and voice customer service, integrated with CRM, ERP and ticketing. From €25,000 to €75,000.'),
              ('KnowledgeAI Enterprise', 'Chat with company documents using RAG technology and cited sources. From €30,000 to €85,000.'),
              ('MCP Hosting', 'Managed, updated and monitored MCP servers connecting AI to business systems. From €290 per month.'),
              ('Autonomous AI agents', 'Run end-to-end processes on your tools via MCP, with human oversight. From €490 per month.'),
              ('Where they run', 'On the company’s servers or in a European private cloud. The local data boundary and external integrations are defined for each project.'),
              ('Compliance support', 'Activity log and access control. GDPR and AI Act obligations must be assessed for the use, data and roles involved.')],
             f'By the PugliAI team · Prices exclude VAT · Last updated: {UPDATED_EN}'),
            ('services', 'The products', 'Four solutions, one rule: the data stays yours.', 'Available individually or together with the consulting programmes.', products),
            ('table', 'Comparison', 'On-premise or cloud: the differences that matter.', None, ['', 'PugliAI on-premise', 'Third-party cloud'], [
                ('Where data lives', 'On your servers', 'On third-party servers'),
                ('Latency', 'Depends on hardware, model and local load', 'Depends on service, load and connection'),
                ('GDPR and AI Act', 'Assess use, data, roles and local safeguards', 'Assess use, data, roles, vendors and transfers'),
                ('Costs', 'Project and operation specified in the quote', 'Subscription, usage or vendor agreement')], 'comparison'),
            BAND['en'],
            ('faq', [
                ('What are on-premise AI products?', 'Artificial-intelligence solutions installed in your company’s IT infrastructure. Processing can stay local, but any cloud models, connectors or external services must be assessed to understand all data flows.'),
                ('Why choose on-premise over the cloud?', 'For direct control over data, access and infrastructure, and less dependence on connectivity for local functions. The choice depends on the data, integrations, IT capabilities and costs; on-premise deployment does not automatically make processing compliant.'),
                ('Does on-premise deployment guarantee GDPR and AI Act compliance?', '<p>No. Local hosting is a technical choice, not a compliance certification. Purposes and lawful bases, roles, security measures, individual rights and, under the AI Act, the system type and applicable obligations must be assessed. References: <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng">GDPR</a> and <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng">AI Act</a>.</p>'),
                ('How much do PugliAI’s on-premise products cost?', 'VoiceAI On-Premise from €25,000 to €75,000; KnowledgeAI Enterprise from €30,000 to €85,000; MCP hosting from €290 per month; autonomous AI agents from €490 per month. Cost depends on users, volumes and required integrations. Prices exclude VAT.'),
                ('Do the products integrate with existing business systems?', 'Yes. VoiceAI connects to CRM, ERP and ticketing; KnowledgeAI indexes PDF, Word, Excel, email and databases; MCP hosting provides connectors to Italian ERPs (Zucchetti, TeamSystem, SAP), CRMs and document archives.'),
                ('Is dedicated hardware required?', 'VoiceAI and KnowledgeAI need a server with a GPU; we provide the requirements or an optional pre-configured server. MCP hosting and agents can also run on a European private cloud you control.')]),
            ('cta_default',),
        ])
    page, body = detail_page(lang, spec)
    page.jsonld.append({'@context': 'https://schema.org', '@type': 'ItemList', 'name': 'PugliAI on-premise AI products', 'url': page.url, 'numberOfItems': 4, 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'VoiceAI On-Premise', 'url': url_of('en/voiceai-on-premise.html')},
        {'@type': 'ListItem', 'position': 2, 'name': 'KnowledgeAI Enterprise', 'url': url_of('en/knowledgeai-enterprise.html')},
        {'@type': 'ListItem', 'position': 3, 'name': 'On-Premise MCP Hosting', 'url': url_of('en/mcp-hosting.html')},
        {'@type': 'ListItem', 'position': 4, 'name': 'Autonomous AI agents', 'url': url_of('en/ai-agents.html')}]})
    return page, body


# ---------------------------------------------------------------- VoiceAI

def voiceai(lang):
    if lang == 'it':
        spec = dict(
            path='voiceai-on-premise.html', alt='en/voiceai-on-premise.html', chat=False,
            title='VoiceAI On-Premise: assistente vocale AI aziendale | PugliAI',
            description='Assistente vocale AI sui server della tua azienda: centralino intelligente, servizio clienti 24 ore su 24, integrazione con CRM e gestionale. Da €25.000.',
            eyebrow='Prodotto on-premise', h1='VoiceAI On-Premise: l’assistente vocale che risponde per la tua azienda.',
            lead='Centralino intelligente, servizio clienti 24 ore su 24 e trascrizione delle chiamate. Motore vocale sui tuoi server, con integrazioni definite nel progetto.',
            cta=('Richiedi una demo', 'contatti.html'), ghost=('Vedi i prezzi', '#prezzi'),
            image=(IMG_MEET, 'Due persone a colloquio di lavoro a un tavolo davanti a una finestra'), glass=('Chiamata in corso · esempio', ['Richiesta riconosciuta: stato ordine', 'Dati letti dal gestionale', 'Passaggio a operatore non necessario']),
            breadcrumb=[('Home', 'index.html'), ('Prodotti', 'prodotti.html'), ('VoiceAI On-Premise', '')], crumb_urls=['index.html', 'prodotti.html', 'voiceai-on-premise.html'],
            sections=[
                ('features', 'Casi d’uso', 'Cosa fa VoiceAI per la tua azienda.', 'Gestisce le comunicazioni vocali con elaborazione locale e accessi controllati.', [
                    ('phone', 'Centralino intelligente', 'Risponde alle chiamate, smista ai reparti giusti, prende appuntamenti e gestisce le richieste ricorrenti in autonomia.'),
                    ('clock', 'Servizio clienti 24 ore su 24', 'Risolve le richieste di primo livello, raccoglie le informazioni per i casi complessi e passa la chiamata a un operatore quando serve.'),
                    ('doc', 'Trascrizione e archivio', 'Trascrive e analizza le conversazioni, estrae i dati utili e archivia tutto con la riservatezza richiesta dai settori regolamentati.'),
                    ('globe', 'Italiano e inglese', 'Voce naturale in italiano, inglese fluente per la clientela internazionale, riconoscimento automatico della lingua. Altre lingue su richiesta.'),
                    ('plug', 'Integrazione con i sistemi', 'Crea contatti, aggiorna ticket e sincronizza i dati con CRM, gestionale e agenda in tempo reale.'),
                    ('chart', 'Cruscotto e report', 'Monitoraggio in tempo reale di chiamate, risoluzioni e tempi, con report periodici per la direzione.')], 3),
                ('features_white', 'Perché on-premise', 'Sei ragioni per tenere le voci dei clienti in azienda.', None, [
                    ('lock', 'Sovranità dei dati', 'Il motore vocale elabora le conversazioni sui tuoi server. Telefonia, CRM e altre integrazioni richiedono una verifica dei rispettivi flussi di dati.'),
                    ('bolt', 'Elaborazione locale', 'Tempi di risposta da validare su hardware, modello, rete e numero di chiamate contemporanee previsti.'),
                    ('shield', 'Controlli per la protezione dei dati', 'Registro delle attività, conservazione e cancellazione configurabili. Basi giuridiche, informative e procedure vanno definite e verificate nel progetto.'),
                    ('wallet', 'Costi prevedibili', 'Investimento iniziale e manutenzione fissa: nessun costo per minuto o per chiamata.'),
                    ('server', 'Funzioni locali', 'Il motore vocale può funzionare senza accesso a internet. Telefonia e integrazioni mantengono i propri requisiti di connettività.'),
                    ('hand', 'Controllo dell’infrastruttura', 'Gestisci i server e puoi valutare componenti sostituibili. Licenze e servizi collegati restano soggetti alle condizioni dei fornitori.')], 3),
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
                    ('Quanto tempo serve per attivarlo?', 'La stima iniziale è di 4–6 settimane, comprese integrazioni e formazione. La pianificazione viene confermata dopo la verifica di hardware, accessi, dati e sistemi da collegare.'),
                    ('I dati vocali restano davvero in azienda?', 'Riconoscimento vocale, sintesi e trascrizione possono girare sul server aziendale o in un cloud privato. I flussi verso telefonia, CRM e altri servizi collegati vengono definiti nella configurazione: l’installazione locale da sola non esclude trasferimenti esterni.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'voiceai-on-premise.html'), 'VoiceAI On-Premise', spec['description'], offer(low=25000, high=75000), 'Voice AI')]
    else:
        spec = dict(
            path='en/voiceai-on-premise.html', alt='voiceai-on-premise.html', chat=False,
            title='VoiceAI On-Premise: AI voice assistant | PugliAI',
            description='An AI voice assistant on your company’s servers: intelligent switchboard, 24/7 customer service, call transcription, CRM and ERP integration. From €25,000.',
            eyebrow='On-premise product', h1='VoiceAI On-Premise: the voice assistant that answers for your company.',
            lead='Intelligent switchboard, 24/7 customer service and call transcription. Voice engine on your servers, with integrations defined for the project.',
            cta=('Request a demo', 'contact.html'), ghost=('See pricing', '#pricing'),
            image=(IMG_MEET, 'Two people in a business conversation at a table by a window'), glass=('Call in progress · sample', ['Request recognised: order status', 'Data read from the ERP', 'No hand-off needed']),
            breadcrumb=[('Home', 'index.html'), ('Products', 'products.html'), ('VoiceAI On-Premise', '')], crumb_urls=['en/index.html', 'en/products.html', 'en/voiceai-on-premise.html'],
            sections=[
                ('features', 'Use cases', 'What VoiceAI does for your company.', 'It handles voice communications with local processing and controlled access.', [
                    ('phone', 'Intelligent switchboard', 'Answers calls, routes them to the right department, books appointments and handles recurring requests on its own.'),
                    ('clock', '24/7 customer service', 'Resolves first-level requests, collects information for complex cases and hands the call to an operator when needed.'),
                    ('doc', 'Transcription and archive', 'Transcribes and analyses conversations, extracts useful data and archives everything with the confidentiality regulated sectors require.'),
                    ('globe', 'Italian and English', 'Natural Italian voice, fluent English for international customers, automatic language detection. Other languages on request.'),
                    ('plug', 'Systems integration', 'Creates contacts, updates tickets and syncs data with CRM, ERP and calendars in real time.'),
                    ('chart', 'Dashboard and reports', 'Real-time monitoring of calls, resolutions and timing, with periodic reports for management.')], 3),
                ('features_white', 'Why on-premise', 'Six reasons to keep customers’ voices in the company.', None, [
                    ('lock', 'Data sovereignty', 'The voice engine processes conversations on your servers. Telephony, CRM and other integrations require a review of their respective data flows.'),
                    ('bolt', 'Local processing', 'Response times to validate against the planned hardware, model, network and number of concurrent calls.'),
                    ('shield', 'Data protection controls', 'Activity log, configurable retention and deletion. Lawful bases, privacy notices and procedures must be defined and verified for the project.'),
                    ('wallet', 'Predictable costs', 'Upfront investment and fixed maintenance: no cost per minute or per call.'),
                    ('server', 'Local functions', 'The voice engine can run without internet access. Telephony and integrations retain their own connectivity requirements.'),
                    ('hand', 'Infrastructure control', 'You manage the servers and can evaluate replaceable components. Licences and connected services remain subject to vendor terms.')], 3),
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
                    ('How long does activation take?', 'The initial estimate is 4–6 weeks, including integrations and training. The schedule is confirmed after reviewing hardware, access, data and the systems to connect.'),
                    ('Does voice data really stay in the company?', 'Speech recognition, synthesis and transcription can run on the company server or in a private cloud. Flows to telephony, CRM and other connected services are defined in the configuration: local installation alone does not exclude external transfers.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'en/voiceai-on-premise.html'), 'VoiceAI On-Premise', spec['description'], offer(low=25000, high=75000), 'Voice AI')]
    return detail_page(lang, spec, ld)


# ---------------------------------------------------------------- KnowledgeAI

def knowledgeai(lang):
    if lang == 'it':
        spec = dict(
            path='knowledgeai-enterprise.html', alt='en/knowledgeai-enterprise.html', chat=False,
            title='KnowledgeAI Enterprise: chat RAG on-premise | PugliAI',
            description='Chat aziendale che interroga manuali, contratti e procedure con tecnologia RAG, sui tuoi server: fonte citata, permessi per ruolo. Da €30.000.',
            eyebrow='Prodotto on-premise', h1='KnowledgeAI Enterprise: le risposte sono nei tuoi documenti.',
            lead='Una chat che interroga manuali, contratti e procedure con tecnologia RAG e collega le risposte ai documenti consultati. Installata sui tuoi server, con permessi per ruolo e tracciabilità completa.',
            cta=('Richiedi una demo', 'contatti.html'), ghost=('Vedi i prezzi', '#prezzi'),
            image=(IMG_DESK, 'Scrivania con computer portatile e quaderno di appunti'), glass=('Risposta · esempio', ['Domanda: garanzia sui pezzi di ricambio?', 'Fonte: Condizioni generali 2026, art. 7', 'Consultabile solo dal team commerciale']),
            breadcrumb=[('Home', 'index.html'), ('Prodotti', 'prodotti.html'), ('KnowledgeAI Enterprise', '')], crumb_urls=['index.html', 'prodotti.html', 'knowledgeai-enterprise.html'],
            sections=[
                ('features', 'Casi d’uso', 'Dove KnowledgeAI fa risparmiare tempo.', 'La conoscenza aziendale diventa accessibile con una domanda in linguaggio naturale.', [
                    ('book', 'Base di conoscenza interna', 'Procedure, regolamenti e buone pratiche interrogabili senza cercare tra i documenti. Utile per l’inserimento dei nuovi assunti.'),
                    ('cog', 'Documentazione tecnica', 'Tecnici e progettisti trovano specifiche, manuali e schemi senza sfogliare centinaia di PDF.'),
                    ('doc', 'Contratti e ufficio legale', 'Ricerca di clausole, confronto tra contratti, scadenze e rinnovi con riferimenti ai documenti, a supporto della verifica professionale.'),
                    ('users', 'Risorse umane', 'Risposte su ferie, permessi, welfare e procedure di rimborso senza passare dall’ufficio personale.'),
                    ('chart', 'Analisi e report', 'La direzione interroga report, analisi di mercato e dati storici per decidere rapidamente.'),
                    ('chat', 'Supporto interno al servizio clienti', 'Gli operatori trovano subito guide, storico dei casi e procedure di escalation.')], 3),
                ('steps', 'Come funziona la tecnologia RAG', 'Cerca nei tuoi documenti, poi genera la risposta.', 'RAG (Retrieval Augmented Generation) fornisce al modello passaggi recuperati dai tuoi documenti. La qualità dipende dalle fonti, dal recupero e dalla generazione: le citazioni aiutano a verificarla, ma non escludono errori.', [
                    ('Indicizzazione', 'PDF, Word, email e database vengono elaborati e indicizzati in un archivio vettoriale locale.'),
                    ('Ricerca semantica', 'Alla domanda, il sistema trova i passaggi più pertinenti anche senza le parole esatte.'),
                    ('Generazione con contesto', 'Il modello riceve i passaggi recuperati e viene configurato per basare la risposta su quel contesto.'),
                    ('Risposta con citazioni', 'I riferimenti permettono di aprire i passaggi recuperati e controllare se sostengono la risposta.')]),
                ('table', 'Criteri di scelta', 'Come confrontare un assistente sui documenti.', 'Le funzioni degli altri prodotti dipendono da piano e configurazione: verificare ogni alternativa sulla stessa prova.', ['', 'KnowledgeAI Enterprise', 'Cosa verificare in un’alternativa'], [
                    ('Fonte delle risposte', 'Documenti collegati al contesto del modello, con riferimenti', 'Fonti utilizzate, citazioni e gestione delle informazioni mancanti'),
                    ('Dove vanno i dati', 'Elaborazione locale; flussi dei connettori da definire', 'Luogo del trattamento, destinatari e conservazione'),
                    ('Controllo degli accessi', 'Permessi per ruolo, team e documento da configurare', 'Rispetto dei permessi originali e prove tra ruoli diversi'),
                    ('Tracciabilità', 'Registro di domande e documenti consultati', 'Contenuto, esportabilità e conservazione dei log')]),
                ('features_white', 'Funzioni', 'Pensato per l’uso in azienda.', None, [
                    ('lock', 'Permessi per ruolo', 'Ogni utente vede solo i documenti autorizzati. Integrazione con Active Directory, LDAP e SAML.'),
                    ('doc', 'Tutti i formati', 'PDF, Word, Excel, PowerPoint, email, HTML e Markdown, con riconoscimento del testo nelle scansioni e accesso ai database SQL.'),
                    ('plug', 'Connettori', 'SharePoint, Google Drive, Confluence, Notion e Dropbox, con indicizzazione automatica dei nuovi documenti.'),
                    ('eye', 'Tracciabilità completa', 'Registro di ogni domanda, risposta e documento consultato, esportabile per le verifiche GDPR.'),
                    ('chat', 'Più canali', 'Applicazione web, Slack, Microsoft Teams, widget da integrare nel sito e API REST.'),
                    ('chart', 'Analisi d’uso', 'Domande più frequenti, lacune nella documentazione e tendenze di utilizzo.')], 3),
                ('steps', 'Collaudo prima del rilascio', 'Una prova ripetibile sui tuoi documenti.', 'Definisci prima del test il campione, i criteri di accettazione e chi verifica le risposte. È un metodo di valutazione, non un risultato già ottenuto.', [
                    ('Prepara le domande', 'Raccogli richieste reali, risposte attese e passaggi di riferimento. Includi domande senza risposta nei documenti, versioni obsolete e ruoli con accessi diversi.'),
                    ('Misura qualità e fonti', 'Sul campione fisso conta risposte corrette, citazioni che sostengono la risposta e casi senza contesto gestiti correttamente. Riporta numeratore e totale, con revisione umana.'),
                    ('Prova permessi e carico', 'Verifica che un ruolo non recuperi documenti riservati ad altri. Registra errori e tempi di risposta mediani e al 95° percentile con il carico previsto.'),
                    ('Confronta tempo e costo', 'Misura il tempo per completare lo stesso compito prima e dopo, includendo la verifica umana. Considera implementazione, hardware e gestione nel costo totale.')]),
                ('links', 'Estendi il progetto', 'Documenti, voce e azioni collegate.', [
                    ('VoiceAI On-Premise', 'Porta le informazioni approvate nel servizio clienti vocale, definendo quando passare a un operatore.', 'voiceai-on-premise.html'),
                    ('Hosting MCP', 'Collega gli strumenti aziendali con permessi e registrazione degli accessi.', 'hosting-mcp.html'),
                    ('Agenti AI', 'Aggiungi azioni sui sistemi solo dopo avere definito approvazioni e controlli.', 'agenti-ai.html')]),
                ('packages', 'Prezzi', 'Tre formule in base a utenti e archivio.', 'Prezzi IVA esclusa. Nessun costo per singola domanda.', [
                    ('Team', '€30.000', 'fino a 50 utenti', 'Per un team o un reparto.', ['10 GB di documenti indicizzati', 'PDF, Word ed Excel', 'Applicazione web', 'Supporto via email', 'Formazione del team (4 ore)'], 'contatti.html', 'Richiedi un preventivo'),
                    ('Business', '€55.000', 'fino a 200 utenti', 'Per aziende con esigenze di controllo degli accessi.', ['100 GB di documenti', 'Permessi per ruolo', 'Tutti i formati e riconoscimento del testo', 'Connettori SharePoint e Drive, Slack e Teams', 'Formazione del team (8 ore)'], 'contatti.html', 'Richiedi una demo'),
                    ('Enterprise', 'da €85.000', 'utenti illimitati', 'Per organizzazioni con requisiti avanzati.', ['Archivio illimitato', 'Accesso unico (SSO) e Active Directory', 'Modelli personalizzati', 'Livello di servizio garantito e supporto dedicato', 'Server preconfigurato incluso'], 'contatti.html', 'Parla con il team')], 'Abbinando KnowledgeAI a VoiceAI On-Premise si ottiene uno sconto del 15% sul totale.', ('Scopri VoiceAI', 'voiceai-on-premise.html'), 'prezzi'),
                ('specs', 'Specifiche', 'Cosa serve per l’installazione.', None, [
                    ('Requisiti hardware', ['GPU NVIDIA RTX 4090 o A100, 24 GB di VRAM (48 GB per i modelli più grandi)', 'RAM 128 GB (256 GB consigliati)', 'Archiviazione 2 TB NVMe SSD', 'CPU 32+ core per l’indicizzazione', 'Rete locale 1 Gbps', 'I requisiti crescono con il volume dei documenti']),
                    ('Integrazioni supportate', ['Archivi: SharePoint, Google Drive, Confluence', 'Chat: Slack, Microsoft Teams', 'Autenticazione: Active Directory, LDAP, SAML, OAuth', 'Database: PostgreSQL, MySQL, SQL Server', 'Gestionali: Zucchetti, TeamSystem, SAP', 'API REST, webhook, GraphQL'])]),
                ('faq', [
                    ('Quanto costa KnowledgeAI Enterprise?', 'Da €30.000 (Team, fino a 50 utenti) a €55.000 (Business, fino a 200 utenti con permessi per ruolo) fino a oltre €85.000 per la versione Enterprise senza limiti. Prezzi IVA esclusa, nessun costo per domanda.'),
                    ('Cosa vuol dire «risposte con fonte citata»?', 'Le risposte includono riferimenti ai passaggi recuperati. Una citazione permette la verifica, ma non prova da sola che la risposta sia corretta. Configuriamo il sistema per segnalare quando il contesto non è sufficiente; questo comportamento e gli eventuali errori vanno misurati nel collaudo.'),
                    ('I documenti restano in azienda?', 'Indicizzazione, ricerca e generazione possono avvenire sul server aziendale o in un cloud privato. Connettori ad archivi esterni e canali come Slack o Teams hanno flussi propri: il progetto deve definire dove transitano e vengono conservati documenti, domande e risposte.'),
                    ('Quanto tempo serve per l’attivazione?', 'La stima iniziale è di 4–8 settimane per installazione, archivi, indicizzazione, permessi e formazione. Volumi, qualità dei documenti e integrazioni possono modificare la pianificazione.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'knowledgeai-enterprise.html'), 'KnowledgeAI Enterprise', spec['description'], offer(low=30000, high=85000), 'Enterprise knowledge assistant')]
    else:
        spec = dict(
            path='en/knowledgeai-enterprise.html', alt='knowledgeai-enterprise.html', chat=False,
            title='KnowledgeAI Enterprise: on-premise RAG chat | PugliAI',
            description='A company chat that queries manuals, contracts and procedures with RAG, on your own servers: cited sources, role-based permissions. From €30,000.',
            eyebrow='On-premise product', h1='KnowledgeAI Enterprise: the answers are in your documents.',
            lead='A chat that queries manuals, contracts and procedures with RAG technology and links answers to the documents consulted. Installed on your servers, with permissions per role and full traceability.',
            cta=('Request a demo', 'contact.html'), ghost=('See pricing', '#pricing'),
            image=(IMG_DESK, 'Desk with a laptop and a notebook'), glass=('Answer · sample', ['Question: warranty on spare parts?', 'Source: General terms 2026, art. 7', 'Visible to the sales team only']),
            breadcrumb=[('Home', 'index.html'), ('Products', 'products.html'), ('KnowledgeAI Enterprise', '')], crumb_urls=['en/index.html', 'en/products.html', 'en/knowledgeai-enterprise.html'],
            sections=[
                ('features', 'Use cases', 'Where KnowledgeAI saves time.', 'Company knowledge becomes accessible with a question in natural language.', [
                    ('book', 'Internal knowledge base', 'Procedures, policies and best practices queried without searching through documents. Useful for onboarding new hires.'),
                    ('cog', 'Technical documentation', 'Technicians and designers find specifications, manuals and drawings without leafing through hundreds of PDFs.'),
                    ('doc', 'Contracts and legal', 'Clause search, contract comparison, deadlines and renewals with document references to support professional review.'),
                    ('users', 'Human resources', 'Answers on leave, benefits and expense procedures without going through the HR office.'),
                    ('chart', 'Analysis and reports', 'Management queries reports, market analyses and historical data to decide quickly.'),
                    ('chat', 'Internal customer-service support', 'Operators immediately find guides, case history and escalation procedures.')], 3),
                ('steps', 'How RAG technology works', 'It searches your documents, then generates the answer.', 'RAG (Retrieval Augmented Generation) supplies the model with passages retrieved from your documents. Quality depends on the sources, retrieval and generation: citations help verify it but do not rule out errors.', [
                    ('Indexing', 'PDF, Word, email and databases are processed and indexed in a local vector store.'),
                    ('Semantic search', 'For each question the system finds the most relevant passages, even without the exact words.'),
                    ('Generation with context', 'The model receives the retrieved passages and is configured to ground its answer in that context.'),
                    ('Answer with citations', 'References let you open the retrieved passages and check whether they support the answer.')]),
                ('table', 'Selection criteria', 'How to compare document assistants.', 'Other products vary by plan and configuration: evaluate each alternative with the same test.', ['', 'KnowledgeAI Enterprise', 'What to check in an alternative'], [
                    ('Source of answers', 'Documents supplied as model context, with references', 'Sources used, citations and handling of missing information'),
                    ('Where data goes', 'Local processing; connector data flows to be defined', 'Processing location, recipients and retention'),
                    ('Access control', 'Configurable permissions per role, team and document', 'Source permissions preserved and tests across different roles'),
                    ('Traceability', 'Log of questions and documents consulted', 'Log contents, export and retention')]),
                ('features_white', 'Features', 'Built for company use.', None, [
                    ('lock', 'Permissions per role', 'Every user sees only authorised documents. Integration with Active Directory, LDAP and SAML.'),
                    ('doc', 'All formats', 'PDF, Word, Excel, PowerPoint, email, HTML and Markdown, with text recognition on scans and access to SQL databases.'),
                    ('plug', 'Connectors', 'SharePoint, Google Drive, Confluence, Notion and Dropbox, with automatic indexing of new documents.'),
                    ('eye', 'Full traceability', 'Log of every question, answer and document consulted, exportable for GDPR audits.'),
                    ('chat', 'Multiple channels', 'Web app, Slack, Microsoft Teams, embeddable website widget and REST API.'),
                    ('chart', 'Usage analytics', 'Most frequent questions, documentation gaps and usage trends.')], 3),
                ('steps', 'Acceptance testing', 'A repeatable test on your documents.', 'Define the sample, acceptance criteria and answer reviewers before testing. This is an evaluation method, not an achieved result.', [
                    ('Prepare the questions', 'Collect real requests, expected answers and reference passages. Include questions not answered by the documents, outdated versions and roles with different access.'),
                    ('Measure quality and sources', 'On the fixed sample, count correct answers, citations that support the answer and insufficient-context cases handled correctly. Report numerator and total, with human review.'),
                    ('Test permissions and load', 'Check that one role cannot retrieve documents restricted to another. Record errors and median and 95th-percentile response times under the expected load.'),
                    ('Compare time and cost', 'Measure time to complete the same task before and after, including human verification. Include implementation, hardware and operation in total cost.')]),
                ('links', 'Extend the project', 'Connect documents, voice and actions.', [
                    ('VoiceAI On-Premise', 'Bring approved information into voice customer service, defining when to hand off to an operator.', 'voiceai-on-premise.html'),
                    ('MCP hosting', 'Connect business tools with permissions and access logging.', 'mcp-hosting.html'),
                    ('AI agents', 'Add actions in business systems after defining approvals and controls.', 'ai-agents.html')]),
                ('packages', 'Pricing', 'Three formats based on users and archive size.', 'Prices exclude VAT. No cost per question.', [
                    ('Team', '€30,000', 'up to 50 users', 'For a team or department.', ['10 GB of indexed documents', 'PDF, Word and Excel', 'Web application', 'Email support', 'Team training (4 hours)'], 'contact.html', 'Request a quote'),
                    ('Business', '€55,000', 'up to 200 users', 'For companies needing access control.', ['100 GB of documents', 'Permissions per role', 'All formats and text recognition', 'SharePoint and Drive, Slack and Teams connectors', 'Team training (8 hours)'], 'contact.html', 'Request a demo'),
                    ('Enterprise', 'from €85,000', 'unlimited users', 'For organisations with advanced requirements.', ['Unlimited archive', 'Single sign-on and Active Directory', 'Custom models', 'Guaranteed service level and dedicated support', 'Pre-configured server included'], 'contact.html', 'Talk to the team')], 'Combining KnowledgeAI with VoiceAI On-Premise gives a 15% discount on the total.', ('Explore VoiceAI', 'voiceai-on-premise.html'), 'pricing'),
                ('specs', 'Specifications', 'What the installation requires.', None, [
                    ('Hardware requirements', ['NVIDIA RTX 4090 or A100 GPU, 24 GB VRAM (48 GB for larger models)', '128 GB RAM (256 GB recommended)', '2 TB NVMe SSD storage', '32+ core CPU for indexing', '1 Gbps local network', 'Requirements grow with document volume']),
                    ('Supported integrations', ['Repositories: SharePoint, Google Drive, Confluence', 'Chat: Slack, Microsoft Teams', 'Authentication: Active Directory, LDAP, SAML, OAuth', 'Databases: PostgreSQL, MySQL, SQL Server', 'ERP: Zucchetti, TeamSystem, SAP', 'REST API, webhooks, GraphQL'])]),
                ('faq', [
                    ('How much does KnowledgeAI Enterprise cost?', 'From €30,000 (Team, up to 50 users) to €55,000 (Business, up to 200 users with permissions per role) up to over €85,000 for the unlimited Enterprise version. Prices exclude VAT, no cost per question.'),
                    ('What does “answers with cited sources” mean?', 'Answers include references to retrieved passages. A citation enables verification but does not by itself prove that the answer is correct. We configure the system to flag insufficient context; this behaviour and any errors must be measured during acceptance testing.'),
                    ('Do the documents stay in the company?', 'Indexing, search and generation can run on the company server or in a private cloud. External repositories and channels such as Slack or Teams have their own data flows: the project must define where documents, questions and answers travel and are stored.'),
                    ('How long does activation take?', 'The initial estimate is 4–8 weeks for installation, repositories, indexing, permissions and training. Document volume, quality and integrations can change the schedule.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'en/knowledgeai-enterprise.html'), 'KnowledgeAI Enterprise', spec['description'], offer(low=30000, high=85000), 'Enterprise knowledge assistant')]
    return detail_page(lang, spec, ld)


# ---------------------------------------------------------------- Hosting MCP

def hosting_mcp(lang):
    if lang == 'it':
        spec = dict(
            path='hosting-mcp.html', alt='en/mcp-hosting.html', chat=False,
            title='Hosting MCP on-premise: server MCP gestiti | PugliAI',
            description='Server MCP (Model Context Protocol) gestiti sulla tua infrastruttura: gli agenti AI accedono a gestionale, CRM e documenti in modo tracciato. Da €290 al mese.',
            eyebrow='Prodotto on-premise · Novità 2026', h1='Hosting MCP: collega l’AI ai tuoi sistemi, con accessi controllati.',
            lead='Installiamo, configuriamo e gestiamo i server Model Context Protocol sulla tua infrastruttura. Modelli e agenti AI accedono a gestionale, CRM, ERP e documenti con permessi granulari e registro di ogni accesso.',
            cta=('Richiedi una valutazione gratuita', 'contatti.html'), ghost=('Vedi i prezzi', '#prezzi'),
            image=(IMG_WORK, 'Officina meccanica con macchine utensili alla luce del tramonto'), glass=('Server MCP · esempio', ['Connettore gestionale: lettura ordini', 'Connettore CRM: lettura e aggiornamento', 'Ogni accesso registrato']),
            breadcrumb=[('Home', 'index.html'), ('Prodotti', 'prodotti.html'), ('Hosting MCP', '')], crumb_urls=['index.html', 'prodotti.html', 'hosting-mcp.html'],
            sections=[
                ('answer', '<strong>Il Model Context Protocol (MCP) è uno standard aperto</strong> che permette ai modelli di intelligenza artificiale di collegarsi a strumenti, dati e applicazioni aziendali in modo uniforme e sicuro. Invece di un’integrazione su misura per ogni sistema, un server MCP espone in modo controllato le funzioni di un’applicazione, così che un modello o un agente possa usarle attraverso un’unica interfaccia.',
                 [('Cos’è l’hosting MCP', 'Il servizio con cui PugliAI installa, configura e gestisce i server MCP sulla tua infrastruttura o su un cloud privato che controlli tu.'),
                  ('A cosa serve', 'L’AI accede ai dati aziendali ed esegue attività sui tuoi sistemi con permessi definiti. Modelli e connettori scelti determinano dove vengono elaborati i dati.'),
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
                    ('database', 'Assistente sul gestionale', 'Un agente legge ordini, giacenze e scadenze e risponde al team in linguaggio naturale, entro i permessi e i flussi dati configurati.'),
                    ('chat', 'Servizio clienti collegato al CRM', 'L’AI consulta lo storico del cliente, apre ticket e aggiorna i dati nei sistemi autorizzati, con tracciamento delle operazioni.'),
                    ('doc', 'Ricerca sui documenti', 'Un connettore verso l’archivio documentale alimenta risposte precise su contratti, procedure e manuali, con tracciamento delle consultazioni.')], 3),
                ('packages', 'Prezzi', 'Un canone mensile trasparente.', 'Prezzi IVA esclusa. Aggiornamenti e monitoraggio sempre inclusi.', [
                    ('Starter', '€290/mese', '1 server', 'Per collegare l’AI ai primi sistemi.', ['Fino a 2 connettori standard', 'Aggiornamenti e correzioni di sicurezza', 'Monitoraggio della disponibilità', 'Registro degli accessi', 'Supporto via email'], 'contatti.html', 'Richiedi una valutazione'),
                    ('Business', '€590/mese', 'alta affidabilità', 'Per collegare più sistemi e più team.', ['Fino a 5 connettori', 'Accesso unico (SSO)', 'Registro degli accessi avanzato', 'Livello di servizio garantito', 'Report di utilizzo mensili'], 'contatti.html', 'Richiedi una demo'),
                    ('Enterprise', 'su misura', 'multi-sede', 'Per infrastrutture complesse.', ['Connettori illimitati', 'Integrazioni su misura', 'Alta disponibilità e ridondanza', 'Regole di governo avanzate', 'Supporto dedicato'], 'contatti.html', 'Parla con il team')], 'Abbina l’hosting MCP agli agenti AI autonomi per far eseguire attività end-to-end sui tuoi sistemi.', ('Scopri gli agenti AI', 'agenti-ai.html'), 'prezzi'),
                ('faq', [
                    ('Che cos’è il Model Context Protocol (MCP)?', 'Uno standard aperto che permette ai modelli di AI di collegarsi a strumenti, dati e applicazioni aziendali in modo uniforme e sicuro. Un server MCP espone in modo controllato le funzioni di un sistema (gestionale, CRM, archivio) perché un modello o un agente possa usarle senza integrazioni su misura per ogni strumento.'),
                    ('Cosa significa hosting MCP on-premise?', 'I server MCP vengono installati e gestiti sulla tua infrastruttura. PugliAI cura installazione, aggiornamenti e monitoraggio. Un modello remoto o un connettore cloud può comportare trasferimenti di dati: permessi, destinatari e obblighi GDPR vanno valutati per la configurazione scelta.'),
                    ('Quanto costa l’hosting MCP?', 'Da €290 al mese per il piano Starter (un server e fino a due connettori), €590 al mese per il piano Business (fino a cinque connettori, SSO e livello di servizio garantito) e prezzo su misura per il piano Enterprise. Aggiornamenti e monitoraggio inclusi.'),
                    ('A quali sistemi si può collegare un server MCP?', 'Gestionali ed ERP italiani (Zucchetti, TeamSystem, SAP), CRM (Salesforce, HubSpot, Zoho), archivi documentali, database SQL, posta elettronica e strumenti interni tramite API REST. Sviluppiamo e manteniamo i connettori necessari.'),
                    ('Che differenza c’è tra hosting MCP e agenti AI?', 'L’hosting MCP è l’infrastruttura che collega l’AI ai tuoi dati e strumenti; gli agenti sono i sistemi che la usano per eseguire attività. Il server MCP è il ponte, l’agente è ciò che lo attraversa. Funzionano bene insieme, ma si possono adottare anche separatamente.')]),
                ('cta_default',),
            ])
        ld = [ld_product(_pg(lang, 'hosting-mcp.html'), 'Hosting MCP On-Premise', spec['description'], offer(price=290, unit='MONTH'), 'Managed MCP servers')]
    else:
        spec = dict(
            path='en/mcp-hosting.html', alt='hosting-mcp.html', chat=False,
            title='On-premise MCP hosting: managed MCP servers | PugliAI',
            description='Managed MCP (Model Context Protocol) servers on your infrastructure: your AI agents reach ERP, CRM and documents in a controlled, logged way. From €290/month.',
            eyebrow='On-premise product · New in 2026', h1='MCP hosting: connect AI to your systems with controlled access.',
            lead='We install, configure and manage Model Context Protocol servers on your infrastructure. AI models and agents access ERP, CRM and documents with granular permissions and a log of every access.',
            cta=('Request a free assessment', 'contact.html'), ghost=('See pricing', '#pricing'),
            image=(IMG_WORK, 'Machine workshop with machine tools in sunset light'), glass=('MCP server · sample', ['ERP connector: read orders', 'CRM connector: read and update', 'Every access logged']),
            breadcrumb=[('Home', 'index.html'), ('Products', 'products.html'), ('MCP hosting', '')], crumb_urls=['en/index.html', 'en/products.html', 'en/mcp-hosting.html'],
            sections=[
                ('answer', '<strong>The Model Context Protocol (MCP) is an open standard</strong> that lets artificial-intelligence models connect to business tools, data and applications in a uniform, secure way. Instead of a custom integration for each system, an MCP server exposes an application’s functions in a controlled way so that a model or agent can use them through a single interface.',
                 [('What MCP hosting is', 'The service with which PugliAI installs, configures and manages MCP servers on your infrastructure or on a private cloud you control.'),
                  ('What it is for', 'AI accesses company data and performs tasks on your systems with defined permissions. The selected models and connectors determine where data is processed.'),
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
                    ('database', 'ERP assistant', 'An agent reads orders, stock and deadlines and answers the team in natural language, within the configured permissions and data flows.'),
                    ('chat', 'Customer service connected to the CRM', 'AI consults customer history, opens tickets and updates data in authorised systems, with operations logged.'),
                    ('doc', 'Document search', 'A connector to the document archive feeds precise answers on contracts, procedures and manuals, with access tracking.')], 3),
                ('packages', 'Pricing', 'A transparent monthly fee.', 'Prices exclude VAT. Updates and monitoring always included.', [
                    ('Starter', '€290/month', '1 server', 'To connect AI to the first systems.', ['Up to 2 standard connectors', 'Updates and security patches', 'Availability monitoring', 'Access log', 'Email support'], 'contact.html', 'Request an assessment'),
                    ('Business', '€590/month', 'high availability', 'To connect more systems and teams.', ['Up to 5 connectors', 'Single sign-on', 'Advanced access log', 'Guaranteed service level', 'Monthly usage reports'], 'contact.html', 'Request a demo'),
                    ('Enterprise', 'on quotation', 'multi-site', 'For complex infrastructures.', ['Unlimited connectors', 'Custom integrations', 'High availability and redundancy', 'Advanced governance rules', 'Dedicated support'], 'contact.html', 'Talk to the team')], 'Combine MCP hosting with autonomous AI agents to run end-to-end tasks on your systems.', ('Explore AI agents', 'ai-agents.html'), 'pricing'),
                ('faq', [
                    ('What is the Model Context Protocol (MCP)?', 'An open standard that lets AI models connect to business tools, data and applications in a uniform, secure way. An MCP server exposes a system’s functions (ERP, CRM, archive) in a controlled way so that a model or agent can use them without custom integrations for every tool.'),
                    ('What does on-premise MCP hosting mean?', 'MCP servers are installed and managed on your infrastructure. PugliAI handles installation, updates and monitoring. A remote model or cloud connector may transfer data: permissions, recipients and GDPR obligations must be assessed for the chosen configuration.'),
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
            description='Come sono costruite le soluzioni AI di PugliAI: livelli di interfaccia, applicazione, modelli, dati e infrastruttura; stack, sicurezza e integrazioni.',
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
                ('specs', 'Stack tecnologico', 'Componenti sostituibili, con licenze e dipendenze esplicite.', None, [
                    ('Modelli e orchestrazione', ['Modelli linguistici open e commerciali (OpenAI, Anthropic, Mistral, Meta)', 'PyTorch, Hugging Face, vLLM per l’esecuzione locale', 'LangChain e server MCP per l’orchestrazione', 'MLflow per il ciclo di vita dei modelli']),
                    ('Dati e applicazione', ['PostgreSQL, Redis, database vettoriali', 'Apache Kafka per i flussi in tempo reale', 'FastAPI e Kubernetes per i servizi', 'Docker e Terraform per rilasci ripetibili']),
                    ('Sicurezza e monitoraggio', ['Cifratura a riposo e in transito', 'Controllo degli accessi per ruolo, autenticazione unica (SSO)', 'Registro delle attività per le verifiche GDPR', 'Prometheus e Grafana per il monitoraggio'])]),
                ('features_white', 'Sicurezza', 'Protezione dei dati integrata nel progetto.', None, [
                    ('lock', 'Protezione dei dati', 'Cifratura, mascheramento e gestione sicura delle chiavi.'),
                    ('shield', 'Privacy fin dalla progettazione', 'Minimizzazione dei dati, tempi di conservazione e gestione dei diritti. Basi giuridiche e misure di protezione vengono valutate in base al trattamento.'),
                    ('users', 'Controllo degli accessi', 'Permessi per ruolo, autenticazione a più fattori e registro completo delle attività.'),
                    ('flag', 'Conformità', 'Supporto alle verifiche GDPR e AI Act del cliente e dei suoi consulenti, in base a uso, dati, ruoli e rischi del sistema.')], 4),
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
            description='How PugliAI’s AI solutions are built: interface, application, model, data and infrastructure layers; technology stack, security and integrations.',
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
                ('specs', 'Technology stack', 'Replaceable components, with explicit licences and dependencies.', None, [
                    ('Models and orchestration', ['Open and commercial language models (OpenAI, Anthropic, Mistral, Meta)', 'PyTorch, Hugging Face, vLLM for local execution', 'LangChain and MCP servers for orchestration', 'MLflow for the model lifecycle']),
                    ('Data and application', ['PostgreSQL, Redis, vector databases', 'Apache Kafka for real-time flows', 'FastAPI and Kubernetes for services', 'Docker and Terraform for repeatable releases']),
                    ('Security and monitoring', ['Encryption at rest and in transit', 'Role-based access control, single sign-on', 'Activity log for GDPR audits', 'Prometheus and Grafana for monitoring'])]),
                ('features_white', 'Security', 'Data protection built into the design.', None, [
                    ('lock', 'Data protection', 'Encryption, masking and secure key management.'),
                    ('shield', 'Privacy by design', 'Data minimisation, retention periods and rights management. Lawful bases and safeguards are assessed for the processing involved.'),
                    ('users', 'Access control', 'Role-based permissions, multi-factor authentication and a full activity log.'),
                    ('flag', 'Compliance', 'Support for GDPR and AI Act assessments by the client and its advisers, based on the system’s use, data, roles and risks.')], 4),
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
