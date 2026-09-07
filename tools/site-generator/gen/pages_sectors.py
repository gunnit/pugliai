"""Sectors hub + sector pages (IT/EN)."""
from .html import *
from .site import ld_service, UPDATED_IT, UPDATED_EN, url_of
from .templates import detail_page

IMG_WORK = 'src/assets/img/2026/officina.jpg'
IMG_DESK = 'src/assets/img/2026/scrivania.jpg'
IMG_MEET = 'src/assets/img/2026/incontro.jpg'


class _P:
    def __init__(self, lang, path):
        self.lang = lang
        self.url = url_of(path)


def settori(lang):
    if lang == 'it':
        spec = dict(
            path='settori.html', alt='en/sectors.html', chat=True,
            title='Settori: AI per manifatturiero, moda, finanza | PugliAI',
            description='Soluzioni di intelligenza artificiale per i settori delle PMI italiane: manifatturiero, moda e lusso, servizi finanziari, sanità, turismo, agroalimentare, retail e studi professionali.',
            eyebrow='Settori', h1='Ogni settore ha i suoi processi. L’AI si adatta a loro.',
            lead='Partiamo dai processi che contano nel tuo comparto, non da una tecnologia da piazzare. Tre settori in cui abbiamo la maggiore esperienza, e soluzioni trasversali per tutti gli altri.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Vedi i casi studio', 'casi-studio.html'),
            image=(IMG_WORK, 'Tecnica che controlla un tablet accanto a una macchina utensile in officina'), glass=('Manifatturiero · esempio', ['Manutenzione predittiva su 12 macchine', 'Controllo qualità con visione artificiale', 'Dati dal MES, elaborati in azienda']),
            sections=[
                ('answer', '<strong>PugliAI lavora con PMI di tutti i settori</strong>, con esperienza diretta in manifatturiero, moda e lusso e servizi finanziari. Le soluzioni trasversali (automazione dei processi, previsioni, assistenti conversazionali, ricerca sui documenti) si adattano a sanità, turismo, agroalimentare, retail e studi professionali.',
                 [('Settori principali', 'Manifatturiero, moda e lusso, servizi finanziari.'),
                  ('Altri settori serviti', 'Sanità privata, turismo e ospitalità, agroalimentare, retail ed e-commerce, logistica, studi professionali.'),
                  ('Metodo', 'Sessione strategica gratuita, progetto pilota su un singolo processo, poi estensione. KPI concordati per iscritto.'),
                  ('Garanzia', 'ROI del 150% entro 12 mesi, misurato sui KPI concordati: se non lo raggiungiamo, continuiamo senza costi aggiuntivi.')],
                 f'A cura del team PugliAI · Ultimo aggiornamento: {UPDATED_IT}'),
                ('features', 'Settori principali', 'Dove abbiamo la maggiore esperienza.', None, [
                    ('factory', 'Manifatturiero', 'Manutenzione predittiva, controllo qualità con visione artificiale, ottimizzazione di scorte e filiera, integrazione con MES ed ERP.', 'manifatturiero.html', 'Scopri'),
                    ('scissors', 'Moda e lusso', 'Previsione delle tendenze, personalizzazione dell’esperienza cliente, gestione delle scorte e tracciabilità della filiera.', 'moda-lusso.html', 'Scopri'),
                    ('bank', 'Servizi finanziari', 'Rilevamento delle frodi, analisi del rischio, conformità (KYC, antiriciclaggio) e consulenza assistita dall’AI.', 'servizi-finanziari.html', 'Scopri')], 3),
                ('features_white', 'Soluzioni trasversali', 'Funzionano in ogni comparto.', 'Configurate sui processi e sui sistemi specifici di ogni azienda.', [
                    ('bolt', 'Automazione dei processi', 'Preventivi, ordini, fatture e pratiche ripetitive gestiti da agenti AI collegati ai tuoi sistemi.'),
                    ('trend', 'Previsioni', 'Domanda, scorte, manutenzione e rischio: modelli che anticipano i problemi.'),
                    ('chat', 'Assistenti conversazionali', 'Servizio clienti e supporto interno in linguaggio naturale, in più lingue.'),
                    ('book', 'Ricerca sui documenti', 'Risposte con fonte citata da manuali, contratti e procedure.'),
                    ('search', 'Anomalie e frodi', 'Segnalazione in tempo reale di transazioni e comportamenti anomali.'),
                    ('truck', 'Filiera e logistica', 'Ottimizzazione di scorte, percorsi e fornitori.')], 3),
                ('features', 'Altri settori', 'Esperienza applicata anche in:', None, [
                    ('heart', 'Sanità privata', 'Prenotazioni, triage delle richieste e documentazione.', 'guida-ai/ai-sanita-healthcare.html', 'Leggi la guida'),
                    ('plane', 'Turismo e ospitalità', 'Prenotazioni, risposte agli ospiti e gestione delle recensioni.', 'guida-ai/ai-turismo-hospitality.html', 'Leggi la guida'),
                    ('leaf', 'Agroalimentare', 'Qualità, tracciabilità e previsione della domanda.', 'guida-ai/ai-agroalimentare-made-italy.html', 'Leggi la guida'),
                    ('bag', 'Retail ed e-commerce', 'Raccomandazioni, scorte e servizio clienti.', 'guida-ai/ai-retail-ecommerce.html', 'Leggi la guida'),
                    ('building', 'Studi professionali', 'Ricerca su pratiche, bozze e scadenze.', 'guida-ai/ai-studi-professionali.html', 'Leggi la guida'),
                    ('users', 'Risorse umane', 'Selezione, inserimento e formazione.', 'guida-ai/ai-hr-recruiting.html', 'Leggi la guida')], 3),
                ('faq', [
                    ('Quali settori beneficiano di più dell’intelligenza artificiale?', 'Quelli con processi ripetitivi e molti dati: manifatturiero (manutenzione predittiva, controllo qualità), servizi finanziari (frodi, rischio), moda e retail (previsioni, personalizzazione), sanità (prenotazioni, documentazione) e logistica (percorsi, scorte).'),
                    ('L’AI può funzionare anche nel mio settore?', 'Sì: le soluzioni trasversali si configurano sui processi di ogni azienda. Partiamo sempre da una sessione strategica gratuita per individuare i casi d’uso con il maggiore impatto per la tua realtà.'),
                    ('Quanto tempo serve per un progetto nel mio settore?', 'Le automazioni pronte all’uso sono attive in 2–4 settimane; un progetto pilota completo richiede 8 settimane; l’estensione a più processi da 3 a 12 mesi.'),
                    ('Quali garanzie offrite sui risultati?', 'La garanzia contrattuale di ROI del 150% entro 12 mesi, misurata su KPI concordati prima dell’avvio: se l’obiettivo non viene raggiunto, proseguiamo senza costi aggiuntivi.')]),
                ('cta_default',),
            ])
    else:
        spec = dict(
            path='en/sectors.html', alt='settori.html', chat=True,
            title='Sectors: AI for manufacturing, fashion, finance | PugliAI',
            description='Artificial-intelligence solutions for the sectors of Italian SMEs: manufacturing, fashion and luxury, financial services, healthcare, tourism, agrifood, retail and professional firms.',
            eyebrow='Sectors', h1='Every sector has its own processes. AI adapts to them.',
            lead='We start from the processes that matter in your industry, not from a technology to place. Three sectors where we have the deepest experience, and cross-sector solutions for all the others.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('See the case studies', 'case-studies.html'),
            image=(IMG_WORK, 'Technician checking a tablet next to a machine tool in a workshop'), glass=('Manufacturing · sample', ['Predictive maintenance on 12 machines', 'Quality control with computer vision', 'MES data, processed on site']),
            sections=[
                ('answer', '<strong>PugliAI works with SMEs across all sectors</strong>, with direct experience in manufacturing, fashion and luxury and financial services. Cross-sector solutions (process automation, forecasting, conversational assistants, document search) adapt to healthcare, tourism, agrifood, retail and professional firms.',
                 [('Main sectors', 'Manufacturing, fashion and luxury, financial services.'),
                  ('Other sectors served', 'Private healthcare, tourism and hospitality, agrifood, retail and e-commerce, logistics, professional firms.'),
                  ('Method', 'Free strategy session, pilot on a single process, then roll-out. KPIs agreed in writing.'),
                  ('Guarantee', '150% ROI within 12 months, measured on agreed KPIs: if we miss it, we keep working at no extra cost.')],
                 f'By the PugliAI team · Last updated: {UPDATED_EN}'),
                ('features', 'Main sectors', 'Where we have the deepest experience.', None, [
                    ('factory', 'Manufacturing', 'Predictive maintenance, quality control with computer vision, stock and supply-chain optimisation, MES and ERP integration.', 'manufacturing.html', 'Learn more'),
                    ('scissors', 'Fashion and luxury', 'Trend forecasting, personalised customer experience, stock management and supply-chain traceability.', 'fashion-luxury.html', 'Learn more'),
                    ('bank', 'Financial services', 'Fraud detection, risk analysis, compliance (KYC, anti-money laundering) and AI-assisted advice.', 'financial-services.html', 'Learn more')], 3),
                ('features_white', 'Cross-sector solutions', 'They work in every industry.', 'Configured on each company’s specific processes and systems.', [
                    ('bolt', 'Process automation', 'Quotes, orders, invoices and repetitive files handled by AI agents connected to your systems.'),
                    ('trend', 'Forecasting', 'Demand, stock, maintenance and risk: models that anticipate problems.'),
                    ('chat', 'Conversational assistants', 'Customer service and internal support in natural language, in several languages.'),
                    ('book', 'Document search', 'Answers with cited sources from manuals, contracts and procedures.'),
                    ('search', 'Anomalies and fraud', 'Real-time flagging of anomalous transactions and behaviour.'),
                    ('truck', 'Supply chain and logistics', 'Optimisation of stock, routes and suppliers.')], 3),
                ('features', 'Other sectors', 'Experience applied also in:', None, [
                    ('heart', 'Private healthcare', 'Bookings, request triage and documentation.', 'case-studies.html', 'See the scenarios'),
                    ('plane', 'Tourism and hospitality', 'Bookings, guest replies and review management.', 'case-studies.html', 'See the scenarios'),
                    ('leaf', 'Agrifood', 'Quality, traceability and demand forecasting.', 'case-studies.html', 'See the scenarios'),
                    ('bag', 'Retail and e-commerce', 'Recommendations, stock and customer service.', 'case-studies.html', 'See the scenarios'),
                    ('building', 'Professional firms', 'Research on files, drafts and deadlines.', 'case-studies.html', 'See the scenarios'),
                    ('users', 'Human resources', 'Recruiting, onboarding and training.', 'case-studies.html', 'See the scenarios')], 3),
                ('faq', [
                    ('Which sectors benefit most from artificial intelligence?', 'Those with repetitive processes and plenty of data: manufacturing (predictive maintenance, quality control), financial services (fraud, risk), fashion and retail (forecasting, personalisation), healthcare (bookings, documentation) and logistics (routes, stock).'),
                    ('Can AI work in my sector too?', 'Yes: cross-sector solutions are configured on each company’s processes. We always start with a free strategy session to identify the use cases with the highest impact for your business.'),
                    ('How long does a project in my sector take?', 'Ready-made automations are live in 2–4 weeks; a complete pilot takes 8 weeks; extension to more processes from 3 to 12 months.'),
                    ('What guarantees do you offer on results?', 'The contractual 150% ROI guarantee within 12 months, measured on KPIs agreed before the start: if the target is not reached, we keep working at no extra cost.')]),
                ('cta_default',),
            ])
    return detail_page(lang, spec)


def manifatturiero(lang):
    if lang == 'it':
        spec = dict(
            path='manifatturiero.html', alt='en/manufacturing.html', chat=True,
            title='AI per il manifatturiero: manutenzione e qualità | PugliAI',
            description='Soluzioni AI per le PMI manifatturiere: manutenzione predittiva, controllo qualità con visione artificiale, scorte e filiera, integrazione con MES ed ERP, on-premise.',
            eyebrow='Settori · Manifatturiero', h1='Intelligenza artificiale per la fabbrica, con i dati che restano in fabbrica.',
            lead='Manutenzione predittiva, controllo qualità con visione artificiale e ottimizzazione della filiera, integrati con MES, SCADA ed ERP ed elaborati on-premise.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Calcola il ROI', 'roi-calculator.html'),
            image=(IMG_WORK, 'Tecnica che controlla un tablet accanto a una macchina utensile in officina'), glass=('Linea 2 · esempio', ['Vibrazioni anomale sul mandrino 4', 'Intervento suggerito: venerdì', 'Fermo evitato: 6 ore stimate']),
            breadcrumb=[('Home', 'index.html'), ('Settori', 'settori.html'), ('Manifatturiero', '')], crumb_urls=['index.html', 'settori.html', 'manifatturiero.html'],
            sections=[
                ('features', 'Soluzioni', 'Tre applicazioni con impatto misurabile.', None, [
                    ('cog', 'Manutenzione predittiva', 'Analizza i dati dei sensori per anticipare i guasti, ridurre i fermi non pianificati e ottimizzare i cicli di manutenzione.'),
                    ('eye', 'Controllo qualità con visione artificiale', 'Individua i difetti in linea, in tempo reale, con una costanza che l’occhio umano non può garantire su un turno intero.'),
                    ('truck', 'Ottimizzazione della filiera', 'Previsione della domanda, scorte ottimizzate e logistica automatizzata per una filiera più resiliente.')], 3),
                ('steps', 'Il metodo', 'Un approccio ingegneristico in quattro fasi.', None, [
                    ('Analisi dell’impianto e dei dati', 'Impianti, flussi produttivi e dati disponibili (MES, ERP, SCADA) per individuare i casi d’uso a maggiore potenziale.'),
                    ('Simulazione', 'Un gemello digitale dei processi per testare le soluzioni in un ambiente virtuale prima dell’implementazione reale.'),
                    ('Integrazione on-premise', 'Modelli AI installati sui tuoi sistemi, con prestazioni in tempo reale e integrazione tra OT e IT.'),
                    ('Monitoraggio continuo', 'KPI di fabbrica (OEE, MTBF) sotto controllo e modelli addestrati di continuo sulle nuove condizioni.')]),
                ('features_white', 'Perché PugliAI', 'Parliamo la lingua della produzione.', None, [
                    ('factory', 'Competenza di processo', 'OEE, produzione snella e vincoli degli ambienti industriali: partiamo dal processo, non dalla tecnologia.'),
                    ('plug', 'Integrazione OT/IT', 'Colleghiamo l’AI a MES, SCADA e PLC senza interrompere la produzione.'),
                    ('chart', 'Obiettivi misurabili', 'Ogni progetto è guidato da KPI concordati: costi, produttività, qualità.'),
                    ('shield', 'Soluzioni robuste', 'Progettate per operare 24 ore su 24 in contesti industriali esigenti, con i dati che restano in fabbrica.')], 4),
                ('links', 'Approfondimenti', 'Letture per chi produce.', [
                    ('AI nel manifatturiero e Industria 4.0', 'Casi d’uso, tecnologie e incentivi per la fabbrica intelligente.', 'guida-ai/ai-manifatturiero-industria-40.html'),
                    ('AI predittiva e analisi dei dati', 'Dai dati dei sensori alle decisioni di manutenzione.', 'guida-ai/ai-predittiva-data-analytics.html'),
                    ('Incentivi e finanziamenti', 'Strumenti pubblici per i progetti di innovazione.', 'guida-ai/ai-incentivi-finanziamenti-italia.html')]),
                ('faq', [
                    ('Come può l’AI aiutare un’azienda manifatturiera?', 'Anticipando i guasti con la manutenzione predittiva, rilevando i difetti in linea con la visione artificiale, ottimizzando scorte e filiera e collegando i dati di fabbrica alle decisioni. I risultati si misurano sui KPI concordati prima dell’avvio.'),
                    ('Cos’è la manutenzione predittiva?', 'L’uso di sensori e modelli di apprendimento automatico per analizzare in tempo reale il funzionamento dei macchinari e prevedere i guasti prima che si verifichino, sostituendo gli interventi a intervalli fissi con interventi mirati.'),
                    ('Quanto costa implementare l’AI nel manifatturiero?', 'Dipende dalla complessità. Consigliamo di partire con un progetto pilota su un singolo caso d’uso ad alto impatto, con investimento contenuto e risultati misurabili in 8 settimane; i progetti tipici per PMI partono da €25.000, IVA esclusa.'),
                    ('L’AI si integra con MES e SCADA esistenti?', 'Sì. Le soluzioni sono progettate per integrarsi con MES, SCADA, PLC ed ERP in modo non invasivo, con modelli installati on-premise o sul bordo della rete per prestazioni in tempo reale e sicurezza dei dati.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'manifatturiero.html'), 'AI per il manifatturiero', spec['description'], 'AI for manufacturing')]
    else:
        spec = dict(
            path='en/manufacturing.html', alt='manifatturiero.html', chat=True,
            title='AI for manufacturing SMEs: maintenance, quality | PugliAI',
            description='AI solutions for manufacturing SMEs: predictive maintenance, quality control with computer vision, stock and supply-chain optimisation, MES, SCADA and ERP integration, with on-premise processing.',
            eyebrow='Sectors · Manufacturing', h1='Artificial intelligence for the factory, with data that stays in the factory.',
            lead='Predictive maintenance, quality control with computer vision and supply-chain optimisation, integrated with MES, SCADA and ERP and processed on-premise.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('Calculate the ROI', 'roi-calculator.html'),
            image=(IMG_WORK, 'Technician checking a tablet next to a machine tool in a workshop'), glass=('Line 2 · sample', ['Abnormal vibration on spindle 4', 'Suggested intervention: Friday', 'Downtime avoided: 6 hours estimated']),
            breadcrumb=[('Home', 'index.html'), ('Sectors', 'sectors.html'), ('Manufacturing', '')], crumb_urls=['en/index.html', 'en/sectors.html', 'en/manufacturing.html'],
            sections=[
                ('features', 'Solutions', 'Three applications with measurable impact.', None, [
                    ('cog', 'Predictive maintenance', 'Analyses sensor data to anticipate failures, reduce unplanned downtime and optimise maintenance cycles.'),
                    ('eye', 'Quality control with computer vision', 'Detects defects in line, in real time, with a consistency the human eye cannot guarantee over a whole shift.'),
                    ('truck', 'Supply-chain optimisation', 'Demand forecasting, optimised stock and automated logistics for a more resilient supply chain.')], 3),
                ('steps', 'The method', 'An engineering approach in four phases.', None, [
                    ('Plant and data analysis', 'Plants, production flows and available data (MES, ERP, SCADA) to identify the highest-potential use cases.'),
                    ('Simulation', 'A digital twin of the processes to test solutions in a virtual environment before real implementation.'),
                    ('On-premise integration', 'AI models installed on your systems, with real-time performance and OT/IT integration.'),
                    ('Continuous monitoring', 'Factory KPIs (OEE, MTBF) under control and models continuously trained on new conditions.')]),
                ('features_white', 'Why PugliAI', 'We speak the language of production.', None, [
                    ('factory', 'Process expertise', 'OEE, lean manufacturing and the constraints of industrial environments: we start from the process, not the technology.'),
                    ('plug', 'OT/IT integration', 'We connect AI to MES, SCADA and PLCs without interrupting production.'),
                    ('chart', 'Measurable goals', 'Every project is driven by agreed KPIs: costs, productivity, quality.'),
                    ('shield', 'Robust solutions', 'Designed to run around the clock in demanding industrial settings, with data staying in the factory.')], 4),
                ('links', 'Further reading', 'Reading for manufacturers.', [
                    ('Case studies', 'Six representative AI scenarios by sector.', 'case-studies.html'),
                    ('AI infrastructure', 'On-premise, private-cloud and hybrid architectures.', 'ai-infrastructure.html'),
                    ('ROI calculator', 'Estimate the potential return of AI for your company.', 'roi-calculator.html')]),
                ('faq', [
                    ('How can AI help a manufacturing company?', 'By anticipating failures with predictive maintenance, detecting defects in line with computer vision, optimising stock and supply chain and connecting factory data to decisions. Results are measured on KPIs agreed before the start.'),
                    ('What is predictive maintenance?', 'The use of sensors and machine-learning models to analyse machine operation in real time and predict failures before they occur, replacing fixed-interval interventions with targeted ones.'),
                    ('How much does implementing AI in manufacturing cost?', 'It depends on complexity. We recommend starting with a pilot on a single high-impact use case, with a contained investment and measurable results in 8 weeks; typical projects for SMEs start at €25,000, VAT excluded.'),
                    ('Does AI integrate with existing MES and SCADA?', 'Yes. Solutions are designed to integrate with MES, SCADA, PLCs and ERP non-invasively, with models installed on-premise or at the network edge for real-time performance and data security.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'en/manufacturing.html'), 'AI for manufacturing', spec['description'], 'AI for manufacturing')]
    return detail_page(lang, spec, ld)


def moda(lang):
    if lang == 'it':
        spec = dict(
            path='moda-lusso.html', alt='en/fashion-luxury.html', chat=True,
            title='AI per moda e lusso: tendenze, personalizzazione, filiera | PugliAI',
            description='Soluzioni AI per i marchi di moda e lusso: previsione delle tendenze, esperienza cliente personalizzata, gestione delle scorte e tracciabilità della filiera.',
            eyebrow='Settori · Moda e lusso', h1='L’AI su misura per il tuo marchio, con la riservatezza che il lusso richiede.',
            lead='Previsione delle tendenze, esperienza cliente personalizzata e una filiera più efficiente e tracciabile. Integrata con PLM, ERP e sistemi di negozio.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Calcola il ROI', 'roi-calculator.html'),
            image=(IMG_MEET, 'Due persone a colloquio di lavoro a un tavolo davanti a una finestra'), glass=('Collezione AI 2027 · esempio', ['Domanda prevista per 240 referenze', 'Riassortimento suggerito: 18 negozi', 'Scorte in eccesso ridotte']),
            breadcrumb=[('Home', 'index.html'), ('Settori', 'settori.html'), ('Moda e lusso', '')], crumb_urls=['index.html', 'settori.html', 'moda-lusso.html'],
            sections=[
                ('features', 'Applicazioni', 'Dal disegno alla vendita.', None, [
                    ('trend', 'Previsione delle tendenze', 'Analisi di social, sfilate e vendite storiche per anticipare le tendenze e assistere i designer nelle collezioni.'),
                    ('star', 'Esperienza cliente personalizzata', 'Raccomandazioni su misura, assistenza alla vendita e servizio clienti di livello, in negozio e online.'),
                    ('truck', 'Filiera intelligente', 'Scorte ottimizzate, meno invenduto grazie a previsioni accurate e tracciabilità per una filiera più sostenibile.')], 3),
                ('steps', 'L’approccio', 'Un percorso in quattro fasi.', None, [
                    ('Immersione e analisi', 'Patrimonio del marchio, collezioni passate, dati di vendita e sentiment dei clienti per scoprire le opportunità.'),
                    ('Strategia', 'Roadmap con KPI specifici (tempo di arrivo sul mercato, scontrino medio, invenduto) e prototipi rapidi.'),
                    ('Integrazione', 'Soluzioni integrate con PLM, ERP e sistemi di negozio, unendo fisico e digitale.'),
                    ('Ottimizzazione', 'Modelli che si affinano con le nuove stagioni per mantenere il vantaggio nel tempo.')]),
                ('features_white', 'Perché PugliAI', 'Comprendiamo il vostro mondo.', None, [
                    ('scissors', 'Competenza verticale', 'Dal patrimonio dei marchi storici alla velocità del pronto moda: conosciamo le sfide del settore.'),
                    ('hand', 'Approccio sartoriale', 'Nessuna soluzione «taglia unica»: ogni progetto rispetta l’identità del marchio e i suoi obiettivi.'),
                    ('lock', 'Riservatezza', 'Dati, collezioni e strategie creative trattati con la massima riservatezza, anche on-premise.'),
                    ('users', 'Trasferimento di competenze', 'Lavoriamo con il vostro team e lasciamo in azienda il know-how.')], 4),
                ('links', 'Approfondimenti', 'Letture per il settore.', [
                    ('AI per moda e lusso Made in Italy', 'Casi d’uso e tecnologie per i marchi italiani.', 'guida-ai/ai-moda-lusso-made-italy.html'),
                    ('AI per retail ed e-commerce', 'Raccomandazioni, scorte e servizio clienti.', 'guida-ai/ai-retail-ecommerce.html'),
                    ('AI per marketing e vendite', 'Contenuti, campagne e previsioni.', 'guida-ai/ai-marketing-vendite.html')]),
                ('faq', [
                    ('Come può l’AI aiutare un marchio di moda?', 'Prevedendo le tendenze e la domanda, personalizzando l’esperienza del cliente in negozio e online, riducendo l’invenduto e rendendo la filiera più tracciabile. Ogni progetto parte dai dati e dai sistemi che il marchio già usa.'),
                    ('I nostri dati creativi restano riservati?', 'Sì. Collezioni, bozzetti e strategie sono trattati con accordi di riservatezza e possono essere elaborati on-premise, senza inviare nulla a servizi esterni.'),
                    ('Da dove si comincia?', 'Da una sessione strategica gratuita e da un progetto pilota su un singolo processo, per esempio la previsione della domanda su una categoria di prodotto, con KPI concordati per iscritto.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'moda-lusso.html'), 'AI per moda e lusso', spec['description'], 'AI for fashion and luxury')]
    else:
        spec = dict(
            path='en/fashion-luxury.html', alt='moda-lusso.html', chat=True,
            title='AI for fashion and luxury: trends, personalisation | PugliAI',
            description='AI solutions for fashion and luxury brands: trend forecasting, personalised customer experience, stock management and supply-chain traceability, with the confidentiality the sector demands.',
            eyebrow='Sectors · Fashion and luxury', h1='AI tailored to your brand, with the confidentiality luxury demands.',
            lead='Trend forecasting, personalised customer experience and a more efficient, traceable supply chain. Integrated with PLM, ERP and store systems.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('Calculate the ROI', 'roi-calculator.html'),
            image=(IMG_MEET, 'Two people in a business conversation at a table by a window'), glass=('AI collection 2027 · sample', ['Demand forecast for 240 references', 'Restock suggested: 18 stores', 'Excess stock reduced']),
            breadcrumb=[('Home', 'index.html'), ('Sectors', 'sectors.html'), ('Fashion and luxury', '')], crumb_urls=['en/index.html', 'en/sectors.html', 'en/fashion-luxury.html'],
            sections=[
                ('features', 'Applications', 'From design to sale.', None, [
                    ('trend', 'Trend forecasting', 'Analysis of social media, runways and sales history to anticipate trends and assist designers with collections.'),
                    ('star', 'Personalised customer experience', 'Tailored recommendations, sales assistance and high-level customer service, in store and online.'),
                    ('truck', 'Intelligent supply chain', 'Optimised stock, less unsold product through accurate forecasts and traceability for a more sustainable chain.')], 3),
                ('steps', 'The approach', 'A four-phase programme.', None, [
                    ('Immersion and analysis', 'Brand heritage, past collections, sales data and customer sentiment to uncover opportunities.'),
                    ('Strategy', 'Roadmap with specific KPIs (time to market, average basket, unsold stock) and rapid prototypes.'),
                    ('Integration', 'Solutions integrated with PLM, ERP and store systems, uniting physical and digital.'),
                    ('Optimisation', 'Models refined with each new season to keep the advantage over time.')]),
                ('features_white', 'Why PugliAI', 'We understand your world.', None, [
                    ('scissors', 'Vertical expertise', 'From the heritage of historic houses to the pace of fast fashion: we know the sector’s challenges.'),
                    ('hand', 'Tailored approach', 'No one-size-fits-all: every project respects the brand’s identity and goals.'),
                    ('lock', 'Confidentiality', 'Data, collections and creative strategies handled with maximum confidentiality, on-premise if needed.'),
                    ('users', 'Skills transfer', 'We work with your team and leave the know-how in the company.')], 4),
                ('links', 'Further reading', 'Reading for the sector.', [
                    ('Case studies', 'Six representative AI scenarios by sector.', 'case-studies.html'),
                    ('AI agents', 'Assistants and agents for customer service and operations.', 'ai-agents.html'),
                    ('CEO AI guide', 'What business leaders need to know before adopting AI.', 'ceo-ai-guide-2025.html')]),
                ('faq', [
                    ('How can AI help a fashion brand?', 'By forecasting trends and demand, personalising the customer experience in store and online, reducing unsold stock and making the supply chain more traceable. Every project starts from the data and systems the brand already uses.'),
                    ('Does our creative data stay confidential?', 'Yes. Collections, sketches and strategies are handled under confidentiality agreements and can be processed on-premise, without sending anything to external services.'),
                    ('Where do we start?', 'With a free strategy session and a pilot on a single process, for example demand forecasting for one product category, with KPIs agreed in writing.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'en/fashion-luxury.html'), 'AI for fashion and luxury', spec['description'], 'AI for fashion and luxury')]
    return detail_page(lang, spec, ld)


def finanza(lang):
    if lang == 'it':
        spec = dict(
            path='servizi-finanziari.html', alt='en/financial-services.html', chat=True,
            title='AI per servizi finanziari: frodi, rischio, conformità | PugliAI',
            description='Soluzioni AI per banche, assicurazioni e fintech: rilevamento delle frodi, analisi del rischio, conformità (KYC, antiriciclaggio) e consulenza assistita.',
            eyebrow='Settori · Servizi finanziari', h1='AI per la finanza: decisioni rapide, spiegabili e conformi.',
            lead='Rilevamento delle frodi, analisi del rischio, conformità e consulenza assistita. Modelli spiegabili, integrati con i sistemi principali in sicurezza.',
            cta=('Prenota la sessione strategica', 'sessione-strategica.html'), ghost=('Calcola il ROI', 'roi-calculator.html'),
            image=(IMG_DESK, 'Scrivania con computer portatile e quaderno di appunti'), glass=('Controllo transazioni · esempio', ['3 operazioni segnalate su 12.400', 'Motivazione disponibile per ogni segnalazione', 'Elaborazione in azienda']),
            breadcrumb=[('Home', 'index.html'), ('Settori', 'settori.html'), ('Servizi finanziari', '')], crumb_urls=['index.html', 'settori.html', 'servizi-finanziari.html'],
            sections=[
                ('features', 'Soluzioni', 'Per banche, assicurazioni e fintech.', None, [
                    ('search', 'Rilevamento delle frodi', 'Modelli che analizzano le transazioni in tempo reale e segnalano schemi anomali, con una motivazione per ogni segnalazione.'),
                    ('chart', 'Analisi del rischio e conformità', 'Rischio di credito, di mercato e operativo; procedure KYC e antiriciclaggio più rapide e documentate.'),
                    ('users', 'Consulenza assistita', 'Strumenti che aiutano i consulenti a proporre strategie personalizzate a una clientela più ampia.')], 3),
                ('steps', 'Il metodo', 'Rigore in quattro fasi.', None, [
                    ('Dati e conformità', 'Qualità dei dati e contesto normativo per definire un perimetro sicuro ed efficace.'),
                    ('Modelli e verifica', 'Sviluppo dei modelli e test rigorosi su dati storici per validarne accuratezza e robustezza.'),
                    ('Integrazione sicura', 'Integrazione con i sistemi principali con attenzione a sicurezza, riservatezza e continuità operativa.'),
                    ('Monitoraggio e spiegabilità', 'Prestazioni sotto controllo e decisioni degli algoritmi trasparenti e interpretabili.')]),
                ('features_white', 'Perché PugliAI', 'La lingua dei dati e della conformità.', None, [
                    ('bank', 'Competenza di dominio', 'Normative, dati e sicurezza del settore, dalle banche tradizionali alle fintech.'),
                    ('eye', 'AI spiegabile', 'Modelli trasparenti e interpretabili, requisito per la conformità e per la fiducia dei regolatori.'),
                    ('lock', 'Sicurezza fin dalla progettazione', 'GDPR, PSD2 e MiFID II alla base di ogni soluzione.'),
                    ('server', 'Prestazioni', 'Infrastrutture per grandi volumi di dati e transazioni in tempo reale.')], 4),
                ('links', 'Approfondimenti', 'Letture per il settore.', [
                    ('AI per i servizi finanziari', 'Casi d’uso, normativa e tecnologie.', 'guida-ai/ai-servizi-finanziari.html'),
                    ('GDPR e intelligenza artificiale', 'Come garantire la conformità dei progetti AI.', 'guida-ai/gdpr-intelligenza-artificiale.html'),
                    ('AI Act: conformità per le PMI', 'Cosa cambia e come prepararsi.', 'guida-ai/ai-act-conformita-pmi-2026.html')]),
                ('faq', [
                    ('Come funziona il rilevamento delle frodi con l’AI?', 'Modelli di apprendimento automatico analizzano le transazioni in tempo reale e riconoscono schemi anomali, aggiornandosi sulle nuove tipologie di frode. Ogni segnalazione è accompagnata da una motivazione leggibile dall’operatore.'),
                    ('L’AI è conforme alle normative finanziarie?', 'Le soluzioni sono progettate con la conformità fin dalla progettazione: GDPR, PSD2, MiFID II, antiriciclaggio e KYC. Usiamo tecniche di AI spiegabile per rendere le decisioni trasparenti, come richiesto dai regolatori.'),
                    ('Quanto tempo serve per un progetto?', 'Un progetto pilota su frodi o rischio di credito può essere operativo in 8–12 settimane; l’integrazione completa con i sistemi principali richiede tipicamente 4–6 mesi, con verifica su dati storici prima della messa in produzione.'),
                    ('Cos’è l’AI spiegabile e perché conta?', 'Sono tecniche che rendono comprensibili le decisioni degli algoritmi. Nella finanza sono indispensabili perché le decisioni automatizzate, come il rifiuto di un finanziamento, devono essere motivate e verificabili.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'servizi-finanziari.html'), 'AI per i servizi finanziari', spec['description'], 'AI for financial services')]
    else:
        spec = dict(
            path='en/financial-services.html', alt='servizi-finanziari.html', chat=True,
            title='AI for financial services: fraud, risk, compliance | PugliAI',
            description='AI solutions for banks, insurers and fintechs: real-time fraud detection, risk analysis, compliance (KYC, anti-money laundering) and assisted advice, with explainable models and security by design.',
            eyebrow='Sectors · Financial services', h1='AI for finance: fast, explainable, compliant decisions.',
            lead='Fraud detection, risk analysis, compliance and assisted advice. Explainable models, securely integrated with core systems.',
            cta=('Book the strategy session', 'strategy-session.html'), ghost=('Calculate the ROI', 'roi-calculator.html'),
            image=(IMG_DESK, 'Desk with a laptop and a notebook'), glass=('Transaction screening · sample', ['3 operations flagged out of 12,400', 'Explanation available for every flag', 'Processed on site']),
            breadcrumb=[('Home', 'index.html'), ('Sectors', 'sectors.html'), ('Financial services', '')], crumb_urls=['en/index.html', 'en/sectors.html', 'en/financial-services.html'],
            sections=[
                ('features', 'Solutions', 'For banks, insurers and fintechs.', None, [
                    ('search', 'Fraud detection', 'Models that analyse transactions in real time and flag anomalous patterns, with an explanation for every flag.'),
                    ('chart', 'Risk analysis and compliance', 'Credit, market and operational risk; faster, documented KYC and anti-money-laundering procedures.'),
                    ('users', 'Assisted advice', 'Tools that help advisers propose personalised strategies to a wider client base.')], 3),
                ('steps', 'The method', 'Rigour in four phases.', None, [
                    ('Data and compliance', 'Data quality and regulatory context to define a safe, effective scope.'),
                    ('Models and validation', 'Model development and rigorous back-testing on historical data to validate accuracy and robustness.'),
                    ('Secure integration', 'Integration with core systems with attention to security, confidentiality and business continuity.'),
                    ('Monitoring and explainability', 'Performance under control and algorithmic decisions that are transparent and interpretable.')]),
                ('features_white', 'Why PugliAI', 'The language of data and compliance.', None, [
                    ('bank', 'Domain expertise', 'Regulation, data and security of the sector, from traditional banks to fintechs.'),
                    ('eye', 'Explainable AI', 'Transparent, interpretable models, a requirement for compliance and for regulators’ trust.'),
                    ('lock', 'Security by design', 'GDPR, PSD2 and MiFID II at the foundation of every solution.'),
                    ('server', 'Performance', 'Infrastructure for large data volumes and real-time transactions.')], 4),
                ('links', 'Further reading', 'Reading for the sector.', [
                    ('Case studies', 'Six representative AI scenarios by sector.', 'case-studies.html'),
                    ('Technical architecture', 'How our solutions are built.', 'technical-architecture.html'),
                    ('CEO AI guide', 'What business leaders need to know before adopting AI.', 'ceo-ai-guide-2025.html')]),
                ('faq', [
                    ('How does AI fraud detection work?', 'Machine-learning models analyse transactions in real time and recognise anomalous patterns, updating on new fraud types. Every flag comes with an explanation the operator can read.'),
                    ('Is AI compliant with financial regulation?', 'Solutions are designed with compliance by design: GDPR, PSD2, MiFID II, anti-money laundering and KYC. We use explainable-AI techniques to make decisions transparent, as regulators require.'),
                    ('How long does a project take?', 'A pilot on fraud or credit risk can be operational in 8–12 weeks; full integration with core systems typically takes 4–6 months, with back-testing on historical data before going live.'),
                    ('What is explainable AI and why does it matter?', 'Techniques that make algorithmic decisions understandable. In finance they are essential because automated decisions, such as declining a loan, must be justified and verifiable.')]),
                ('cta_default',),
            ])
        ld = [ld_service(_P(lang, 'en/financial-services.html'), 'AI for financial services', spec['description'], 'AI for financial services')]
    return detail_page(lang, spec, ld)


def build_all():
    for lang in ('it', 'en'):
        yield settori(lang)
        yield manifatturiero(lang)
        yield moda(lang)
        yield finanza(lang)
