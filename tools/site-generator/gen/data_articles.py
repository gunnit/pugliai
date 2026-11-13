"""Article index data for the resources hub and the CEO guide.

CEO_CATS: (category, [(number, href, title, description, read_time, level)])
RES_CATS: (slug, category, [(href, tag, short_title, short_description, is_new)])
"""

CEO_CATS = [
    ("Fondamenti dell'AI per le Imprese", [
        (1, 'guida-ai/cos-e-intelligenza-artificiale-pmi.html', 'Cos’è l’intelligenza artificiale per le PMI: guida pratica', 'Una guida pratica all’AI per le PMI: modelli generativi, machine learning, NLP e visione artificiale, costi da valutare e controlli per un primo progetto.', '6 min', 'Base'),
        (2, 'guida-ai/ai-generativa-aziende.html', "AI Generativa: Cos'è e Come Usarla in Azienda nel 2025", 'ChatGPT, Claude, Gemini: come funzionano gli strumenti di AI generativa e quali applicazioni concrete offrono per marketing, vendite e operazioni aziendali.', '15 min', 'Base'),
    ]),
    ('Normativa e Compliance', [
        (3, 'guida-ai/ai-act-conformita-pmi-2026.html', 'AI Act per le PMI: scadenze e checklist aggiornate al 2026', 'AI Act per PMI: calendario verificato a novembre 2026, ruoli, trasparenza, alfabetizzazione, sanzioni e checklist operativa con fonti ufficiali.', '6 min', 'Intermedio'),
        (4, 'guida-ai/gdpr-intelligenza-artificiale.html', 'GDPR e AI in azienda: dati, controlli e data breach', 'Checklist GDPR per progetti AI: base giuridica, fornitori, DPIA, decisioni automatizzate, dati on-premise e notifica dei data breach con fonti ufficiali.', '4 min', 'Intermedio'),
    ]),
    ('Implementazione Pratica', [
        (5, 'guida-ai/come-iniziare-ai-pmi.html', "Come Iniziare con l'AI: 7 Primi Passi per le PMI", 'Guida step-by-step per avviare il percorso AI: dalla valutazione della maturità digitale ai primi progetti pilota. Con checklist scaricabile.', '16 min', 'Base'),
        (6, 'guida-ai/chatgpt-aziende-guida.html', "ChatGPT per Aziende: Guida Pratica all'Implementazione", 'ChatGPT per aziende: Business, uso manuale e automazioni API. Criteri per scegliere, verificare le risposte e collegare sistemi con approvazione umana.', '7 min', 'Base'),
        (7, 'guida-ai/agenti-ai-pmi-2026.html', "Agenti AI per le PMI Italiane nel 2026: Guida Completa all'Adozione", 'Agenti AI per PMI: scegli un processo, definisci sistemi e permessi, prova le eccezioni e misura gli esiti prima di estendere l’automazione.', '6 min', 'Intermedio'),
    ]),
    ('ROI e Investimenti', [
        (8, 'guida-ai/roi-intelligenza-artificiale-2026.html', 'ROI dell’AI nelle PMI: formula, costi ed esempio di calcolo', 'Come misurare il ROI AI: baseline, costi completi, risparmio di cassa, capacità, margine, payback e un esempio illustrativo con analisi di sensibilità.', '4 min', 'Intermedio'),
        (9, 'guida-ai/costi-ai-pmi-budget.html', "Quanto Costa l'AI per una PMI? Budget e Investimenti 2026", 'Budget AI per PMI: separa licenze, avvio, consumi, integrazione, gestione e tempo interno. Una scheda TCO per stimare un processo senza prezzi universali.', '7 min', 'Base'),
        (10, 'guida-ai/ai-incentivi-finanziamenti-italia.html', 'Incentivi per progetti AI: cosa verificare nel 2026', 'Incentivi AI nel 2026: nuovo iperammortamento, differenze dal precedente Transizione 5.0, spese, scadenze, cumulo e checklist con fonti MIMIT.', '4 min', 'Intermedio'),
    ]),
    ('Competenze e Formazione', [
        (11, 'guida-ai/formazione-ai-dipendenti.html', 'Formazione AI per Dipendenti: Come Preparare il Team', 'Come preparare il team all’AI: competenze, esercitazioni, percorsi per ruolo e verifica delle agevolazioni. Le durate proposte non sono requisiti legali.', '13 min', 'Intermedio'),
        (12, 'guida-ai/competenze-digitali-ai.html', 'Competenze Digitali AI: Quali Servono nel 2026', 'Quali competenze AI servono nel 2026: oltre metà delle aziende non trova talenti IT. Framework di AI literacy, certificazioni e percorsi di formazione.', '12 min', 'Base'),
    ]),
    ('AI per Settore', [
        (13, 'guida-ai/ai-manifatturiero-industria-40.html', 'AI nel Manifatturiero: applicazioni e valutazione per le PMI', 'Manutenzione predittiva, controllo qualità e supply chain: come scegliere un pilota AI manifatturiero, misurare risultati e verificare incentivi nel 2026.', '7 min', 'Intermedio'),
        (14, 'guida-ai/ai-moda-lusso-made-italy.html', 'AI nel Settore Moda e Lusso: Made in Italy Digitale', "Come i brand italiani stanno usando l'AI: design, personalizzazione, anticontraffazione e customer experience. Case study Prada e altri.", '16 min', 'Intermedio'),
        (15, 'guida-ai/ai-servizi-finanziari.html', 'AI nei servizi finanziari: applicazioni e controlli', 'AI per banche, fintech e assicurazioni: antifrode, credito, documenti, assistenza e sinistri. Come valutare qualità, rischio e benefici senza promesse generiche.', '5 min', 'Avanzato'),
        (16, 'guida-ai/ai-agroalimentare-made-italy.html', "AI nell'Agroalimentare: Made in Italy e Agricoltura 4.0", "Tracciabilità blockchain, precision farming, controllo qualità e lotta all'Italian sounding. Come l'AI protegge e valorizza il food italiano.", '17 min', 'Intermedio'),
        (17, 'guida-ai/ai-turismo-hospitality.html', "AI nel Turismo e Hospitality: Innovare l'Accoglienza Italiana", "Concierge virtuali, dynamic pricing, personalizzazione esperienze e revenue management. L'AI per hotel, ristoranti e tour operator.", '16 min', 'Intermedio'),
        (18, 'guida-ai/ai-sanita-healthcare.html', 'AI nella sanità: applicazioni, evidenze e controlli', 'Come valutare un progetto AI in sanità: usi clinici e amministrativi, validazione, dati sanitari, FSE, EHDS, GDPR e AI Act. Fonti OMS e UE.', '4 min', 'Avanzato'),
        (19, 'guida-ai/ai-retail-ecommerce.html', 'AI per retail ed e-commerce: applicazioni e misurazione', 'AI per negozi ed e-commerce: catalogo, prezzi, scorte, contenuti e assistenza. Come scegliere un pilota, confrontare costi e misurare margine e qualità.', '4 min', 'Intermedio'),
        (20, 'guida-ai/ai-studi-professionali.html', 'AI per studi professionali: applicazioni, dati e regole', 'AI per avvocati, commercialisti e consulenti: articolo 13 della Legge 132/2025, informazione al cliente, formazione, dati e verifica degli output.', '4 min', 'Intermedio'),
    ]),
    ('Applicazioni Aziendali', [
        (21, 'guida-ai/chatbot-ai-customer-service.html', 'Chatbot AI per Customer Service: Guida Completa PMI', 'Chatbot AI per assistenza clienti: FAQ, bozze o azioni nel CRM. Definisci fonti, permessi, passaggio umano e criteri di accettazione; trasparenza dell’articolo 50.', '7 min', 'Intermedio'),
        (22, 'guida-ai/ai-marketing-vendite.html', 'AI per marketing e vendite: dalla nuova richiesta al CRM', 'AI per marketing e vendite: controlla nuove richieste, prepara bozze da approvare e aggiorna il CRM. Misura qualità, tempi e contatti qualificati.', '7 min', 'Base'),
        (23, 'guida-ai/automazione-ai-processi.html', 'Automazione AI: 10 processi aziendali da valutare', 'Dieci processi da valutare per l’automazione AI: criteri di priorità, integrazione, controlli e misurazione dei benefici per le PMI.', '6 min', 'Intermedio'),
        (24, 'guida-ai/ai-hr-recruiting.html', 'AI per HR e recruiting: applicazioni, bias e controlli', 'Come valutare AI e recruiting: annunci, CV, chatbot, bias, video-colloqui, AI Act e GDPR. Criteri per un pilota HR misurabile e controllato.', '4 min', 'Intermedio'),
        (25, 'guida-ai/ai-cybersecurity-aziendale.html', "AI e Cybersecurity Aziendale: Proteggere l'Impresa nell'Era Digitale", "Threat detection, risposta automatica agli incidenti, antifrode e protezione dati. Come l'AI difende le PMI dalle minacce cyber.", '18 min', 'Avanzato'),
        (26, 'guida-ai/ai-predittiva-data-analytics.html', 'AI Predittiva e Data Analytics: Decisioni Basate sui Dati', 'Forecasting, analisi tendenze, manutenzione predittiva e business intelligence. Come trasformare i dati aziendali in vantaggio competitivo.', '16 min', 'Avanzato'),
    ]),
    ('Leadership e Cultura', [
        (27, 'guida-ai/leadership-ai-trasformazione.html', 'Leadership AI: Come Guidare la Trasformazione Digitale', "Il ruolo del CEO nell'era dell'AI: vision, comunicazione, governance e decisioni strategiche. Framework per leader che vogliono fare la differenza.", '15 min', 'Avanzato'),
        (28, 'guida-ai/cultura-aziendale-ai.html', 'Cultura Aziendale e AI: Superare le Resistenze al Cambiamento', "Come affrontare le paure dei dipendenti, costruire fiducia e creare una cultura che abbraccia l'innovazione. Strategie di change management.", '13 min', 'Intermedio'),
    ]),
    ('Trend e Futuro', [
        (29, 'guida-ai/ai-sostenibilita-esg.html', 'AI per sostenibilità ed ESG: misure, dati e obblighi', 'AI e sostenibilità nelle PMI: misurare consumi e sprechi, verificare dati ESG e ambito CSRD. Applicazioni e controlli con fonti istituzionali aggiornate.', '4 min', 'Intermedio'),
        (30, 'guida-ai/trend-ai-2025-2026.html', 'Trend AI 2026–2027 per le PMI: sette decisioni pratiche', 'Sette trend AI per PMI: documenti, agenti, modelli locali, multimodalità, low-code, governance e soluzioni verticali. Fonti e criteri per un pilota misurabile.', '5 min', 'Avanzato'),
    ]),
    ('Scegliere il Partner AI', [
        (31, 'guida-ai/come-scegliere-consulenza-ai-italia.html', 'Come scegliere una consulenza AI: criteri e prove per le PMI', 'Dieci criteri per scegliere una consulenza AI: esperienza, prove, costi, dati, supporto e tempi. Come leggere casi cliente e garanzie contrattuali.', '4 min', 'Base'),
        (32, 'guida-ai/migliori-aziende-ai-italia-2025.html', 'Aziende AI in Italia: come scegliere il partner per la tua PMI', 'Criteri per definire il processo, confrontare costi e responsabilità e verificare le referenze di un partner AI.', '13 min', 'Base'),
        (33, 'guida-ai/startup-ai-italiane-2025.html', 'Startup e aziende AI italiane: 15 operatori da valutare nel 2026', '15 startup, aziende e marchi AI in Italia: specializzazioni, fonti, acquisizioni e criteri di scelta. Selezione editoriale aggiornata a novembre 2026.', '5 min', 'Base'),
    ]),
    ('AI e Territorio', [
        (34, 'guida-ai/consulenza-ai-puglia.html', 'Consulenza AI in Puglia: come scegliere il partner per la PMI', 'Come scegliere un consulente AI in Puglia: criteri, costi, dati e pilota. PugliAI ha sede a Latiano (Brindisi) e sede operativa a Bergamo.', '4 min', 'Base'),
        (35, 'guida-ai/eccellenze-ai-sud-italia.html', 'Ecosistema AI in Puglia: ricerca, imprese e collaborazioni', 'Come orientarsi nell’ecosistema AI pugliese: università, fornitori, progetti per settore, incentivi e criteri per avviare una collaborazione.', '4 min', 'Base'),
        (36, 'guida-ai/trasformazione-digitale-pmi-puglia.html', 'Trasformazione Digitale e AI per le PMI Pugliesi: Guida Completa 2026', 'Trasformazione digitale e AI per le PMI pugliesi nel 2026: opportunità, incentivi regionali, finanziamenti e strategie per digitalizzare la tua impresa.', '15 min', 'Base'),
    ]),
]

RES_CATS = [
    ('fondamenti-ai', 'Fondamenti AI', [
        ('guida-ai/cos-e-intelligenza-artificiale-pmi.html', 'Fondamenti', 'Cos’è l’intelligenza artificiale per le PMI: guida pratica', 'Una guida pratica all’AI per le PMI: modelli generativi, machine learning, NLP e visione artificiale, costi da valutare e controlli per un primo progetto.', False),
        ('guida-ai/ai-generativa-aziende.html', 'Fondamenti', 'AI Generativa per Aziende', 'ChatGPT, Claude, Gemini: come funzionano e quali applicazioni concrete offrono per il business.', False),
        ('guida-ai/trend-ai-2025-2026.html', 'Fondamenti', 'Trend AI 2026–2027 per le PMI: sette decisioni pratiche', 'Sette trend AI per PMI: documenti, agenti, modelli locali, multimodalità, low-code, governance e soluzioni verticali. Fonti e criteri per un pilota misurabile.', False),
    ]),
    ('normative-e-compliance', 'Normative e Compliance', [
        ('guida-ai/ai-act-conformita-pmi-2026.html', 'Compliance', 'AI Act per le PMI: scadenze e checklist aggiornate al 2026', 'AI Act per PMI: calendario verificato a novembre 2026, ruoli, trasparenza, alfabetizzazione, sanzioni e checklist operativa con fonti ufficiali.', True),
        ('guida-ai/gdpr-intelligenza-artificiale.html', 'Compliance', 'GDPR e AI in azienda: dati, controlli e data breach', 'Checklist GDPR per progetti AI: base giuridica, fornitori, DPIA, decisioni automatizzate, dati on-premise e notifica dei data breach con fonti ufficiali.', False),
        ('guida-ai/cultura-aziendale-ai.html', 'Compliance', 'Cultura Aziendale e AI', "Come costruire una cultura aziendale aperta all'innovazione AI e gestire il cambiamento.", False),
    ]),
    ('strategia-e-implementazione', 'Strategia e Implementazione', [
        ('guida-ai/come-iniziare-ai-pmi.html', 'Strategia', "Come Iniziare con l'AI", 'Guida step-by-step: dalla valutazione della maturità digitale ai primi progetti pilota.', False),
        ('guida-ai/roi-intelligenza-artificiale-2026.html', 'ROI', 'ROI dell’AI nelle PMI: formula, costi ed esempio di calcolo', 'Come misurare il ROI AI: baseline, costi completi, risparmio di cassa, capacità, margine, payback e un esempio illustrativo con analisi di sensibilità.', True),
        ('guida-ai/costi-ai-pmi-budget.html', 'Budget', "Quanto Costa l'AI per una PMI? Budget e Investimenti 2026", 'Budget AI per PMI: separa licenze, avvio, consumi, integrazione, gestione e tempo interno. Una scheda TCO per stimare un processo senza prezzi universali.', False),
        ('guida-ai/leadership-ai-trasformazione.html', 'Leadership', 'Leadership AI', 'Come guidare la trasformazione AI in azienda: competenze, governance e gestione del cambiamento.', False),
        ('guida-ai/ai-incentivi-finanziamenti-italia.html', 'Finanziamenti', 'Incentivi per progetti AI: cosa verificare nel 2026', 'Incentivi AI nel 2026: nuovo iperammortamento, differenze dal precedente Transizione 5.0, spese, scadenze, cumulo e checklist con fonti MIMIT.', False),
        ('guida-ai/consulenza-ai-puglia.html', 'Consulenza', 'Consulenza AI in Puglia: come scegliere il partner per la PMI', 'Come scegliere un consulente AI in Puglia: criteri, costi, dati e pilota. PugliAI ha sede a Latiano (Brindisi) e sede operativa a Bergamo.', False),
    ]),
    ('automazione-e-tecnologia', 'Automazione e Tecnologia', [
        ('guida-ai/agenti-ai-pmi-2026.html', 'Automazione', "Agenti AI per le PMI Italiane nel 2026: Guida Completa all'Adozione", 'Agenti AI per PMI: scegli un processo, definisci sistemi e permessi, prova le eccezioni e misura gli esiti prima di estendere l’automazione.', True),
        ('guida-ai/chatgpt-aziende-guida.html', 'Strumenti', "ChatGPT per Aziende: Guida Pratica all'Implementazione", 'ChatGPT per aziende: Business, uso manuale e automazioni API. Criteri per scegliere, verificare le risposte e collegare sistemi con approvazione umana.', False),
        ('guida-ai/chatbot-ai-customer-service.html', 'Customer Service', 'Chatbot AI per Customer Service: Guida Completa PMI', 'Chatbot AI per assistenza clienti: FAQ, bozze o azioni nel CRM. Definisci fonti, permessi, passaggio umano e criteri di accettazione; trasparenza dell’articolo 50.', False),
        ('guida-ai/automazione-ai-processi.html', 'Automazione', 'Automazione AI: 10 processi aziendali da valutare', 'Dieci processi da valutare per l’automazione AI: criteri di priorità, integrazione, controlli e misurazione dei benefici per le PMI.', False),
    ]),
    ('funzioni-aziendali', 'Funzioni Aziendali', [
        ('guida-ai/ai-marketing-vendite.html', 'Marketing', 'AI per marketing e vendite: dalla nuova richiesta al CRM', 'AI per marketing e vendite: controlla nuove richieste, prepara bozze da approvare e aggiorna il CRM. Misura qualità, tempi e contatti qualificati.', False),
        ('guida-ai/ai-hr-recruiting.html', 'HR', 'AI per HR e recruiting: applicazioni, bias e controlli', 'Come valutare AI e recruiting: annunci, CV, chatbot, bias, video-colloqui, AI Act e GDPR. Criteri per un pilota HR misurabile e controllato.', False),
        ('guida-ai/ai-predittiva-data-analytics.html', 'Data Analytics', 'AI Predittiva e Data Analytics', "Analisi predittiva, business intelligence e decisioni data-driven con l'AI per le PMI.", False),
        ('guida-ai/ai-cybersecurity-aziendale.html', 'Cybersecurity', 'AI Cybersecurity Aziendale', "Proteggere l'azienda con l'AI: threat detection, prevenzione attacchi e sicurezza dei dati.", False),
        ('guida-ai/ai-sostenibilita-esg.html', 'ESG', 'AI per sostenibilità ed ESG: misure, dati e obblighi', 'AI e sostenibilità nelle PMI: misurare consumi e sprechi, verificare dati ESG e ambito CSRD. Applicazioni e controlli con fonti istituzionali aggiornate.', False),
    ]),
    ('ai-per-settore', 'AI per Settore', [
        ('guida-ai/ai-manifatturiero-industria-40.html', 'Manifatturiero', 'AI nel Manifatturiero: applicazioni e valutazione per le PMI', 'Manutenzione predittiva, controllo qualità e supply chain: come scegliere un pilota AI manifatturiero, misurare risultati e verificare incentivi nel 2026.', False),
        ('guida-ai/ai-moda-lusso-made-italy.html', 'Moda e Lusso', 'AI Moda e Lusso', "Trend forecasting, personalizzazione e supply chain nel Made in Italy potenziati dall'AI.", False),
        ('guida-ai/ai-servizi-finanziari.html', 'Finanza', 'AI nei servizi finanziari: applicazioni e controlli', 'AI per banche, fintech e assicurazioni: antifrode, credito, documenti, assistenza e sinistri. Come valutare qualità, rischio e benefici senza promesse generiche.', False),
        ('guida-ai/ai-agroalimentare-made-italy.html', 'Agroalimentare', 'AI Agroalimentare', "Agricoltura di precisione, tracciabilità e qualità nel Made in Italy agroalimentare con l'AI.", False),
        ('guida-ai/ai-turismo-hospitality.html', 'Turismo', 'AI Turismo e Hospitality', "Revenue management, guest experience e marketing turistico potenziati dall'intelligenza artificiale.", False),
        ('guida-ai/ai-sanita-healthcare.html', 'Sanità', 'AI nella sanità: applicazioni, evidenze e controlli', 'Come valutare un progetto AI in sanità: usi clinici e amministrativi, validazione, dati sanitari, FSE, EHDS, GDPR e AI Act. Fonti OMS e UE.', False),
        ('guida-ai/ai-retail-ecommerce.html', 'Retail', 'AI per retail ed e-commerce: applicazioni e misurazione', 'AI per negozi ed e-commerce: catalogo, prezzi, scorte, contenuti e assistenza. Come scegliere un pilota, confrontare costi e misurare margine e qualità.', False),
        ('guida-ai/ai-studi-professionali.html', 'Studi Professionali', 'AI per studi professionali: applicazioni, dati e regole', 'AI per avvocati, commercialisti e consulenti: articolo 13 della Legge 132/2025, informazione al cliente, formazione, dati e verifica degli output.', False),
    ]),
    ('formazione-e-persone', 'Formazione e Persone', [
        ('guida-ai/formazione-ai-dipendenti.html', 'Formazione', 'Formazione AI per Dipendenti: Come Preparare il Team', 'Come preparare il team all’AI: competenze, esercitazioni, percorsi per ruolo e verifica delle agevolazioni. Le durate proposte non sono requisiti legali.', False),
        ('guida-ai/competenze-digitali-ai.html', 'Competenze', 'Competenze Digitali AI: Quali Servono nel 2026', 'Quali competenze AI servono nel 2026: oltre metà delle aziende non trova talenti IT. Framework di AI literacy, certificazioni e percorsi di formazione.', False),
    ]),
    ('mercato-e-aziende', 'Mercato e Aziende', [
        ('guida-ai/migliori-aziende-ai-italia-2025.html', 'Mercato', 'Aziende AI in Italia: criteri di scelta per le PMI', 'Una guida per confrontare ambito, sistemi, costi, responsabilità e referenze verificabili di un partner AI.', False),
        ('guida-ai/startup-ai-italiane-2025.html', 'Startup', 'Startup e aziende AI italiane: 15 operatori da valutare nel 2026', '15 startup, aziende e marchi AI in Italia: specializzazioni, fonti, acquisizioni e criteri di scelta. Selezione editoriale aggiornata a novembre 2026.', False),
        ('guida-ai/come-scegliere-consulenza-ai-italia.html', 'Consulenza', 'Come scegliere una consulenza AI: criteri e prove per le PMI', 'Dieci criteri per scegliere una consulenza AI: esperienza, prove, costi, dati, supporto e tempi. Come leggere casi cliente e garanzie contrattuali.', False),
        ('guida-ai/eccellenze-ai-sud-italia.html', 'Sud Italia', 'Ecosistema AI in Puglia: ricerca, imprese e collaborazioni', 'Come orientarsi nell’ecosistema AI pugliese: università, fornitori, progetti per settore, incentivi e criteri per avviare una collaborazione.', False),
        ('guida-ai/trasformazione-digitale-pmi-puglia.html', 'Puglia', 'Trasformazione Digitale e AI per le PMI Pugliesi: Guida Completa 2026', 'Trasformazione digitale e AI per le PMI pugliesi nel 2026: opportunità, incentivi regionali, finanziamenti e strategie per digitalizzare la tua impresa.', False),
    ]),
]

FEATURED = [
    ('guida-ai/agenti-ai-pmi-2026.html', 'Automazione', "Agenti AI per le PMI Italiane nel 2026: Guida Completa all'Adozione", 'Agenti AI per PMI: scegli un processo, definisci sistemi e permessi, prova le eccezioni e misura gli esiti prima di estendere l’automazione.'),
    ('guida-ai/ai-act-conformita-pmi-2026.html', 'Compliance', 'AI Act per le PMI: scadenze e checklist aggiornate al 2026', 'AI Act per PMI: calendario verificato a novembre 2026, ruoli, trasparenza, alfabetizzazione, sanzioni e checklist operativa con fonti ufficiali.'),
    ('guida-ai/roi-intelligenza-artificiale-2026.html', 'Strategia e ROI', 'ROI dell’AI nelle PMI: formula, costi ed esempio di calcolo', 'Come misurare il ROI AI: baseline, costi completi, risparmio di cassa, capacità, margine, payback e un esempio illustrativo con analisi di sensibilità.'),
]

RES_CATS_EN = {
    'fondamenti-ai': 'AI fundamentals', 'normative-e-compliance': 'Regulation and compliance', 'strategia-e-implementazione': 'Strategy and implementation',
    'automazione-e-tecnologia': 'Automation and technology', 'funzioni-aziendali': 'Business functions', 'ai-per-settore': 'AI by sector',
    'formazione-e-persone': 'Training and people', 'mercato-e-aziende': 'Market and companies',
}
