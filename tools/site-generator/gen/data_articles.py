"""Article index data for the resources hub and the CEO guide.

CEO_CATS: (category, [(number, href, title, description, read_time, level)])
RES_CATS: (slug, category, [(href, tag, short_title, short_description, is_new)])
"""

CEO_CATS = [
    ("Fondamenti dell'AI per le Imprese", [
        (1, 'guida-ai/cos-e-intelligenza-artificiale-pmi.html', 'Cos’è l’intelligenza artificiale per le PMI: guida pratica', 'Una guida pratica all’AI per le PMI: modelli generativi, machine learning, NLP e visione artificiale, costi da valutare e controlli per un primo progetto.', '6 min', 'Base'),
        (2, 'guida-ai/ai-generativa-aziende.html', 'AI generativa in azienda: scegliere, provare e controllare gli strumenti', 'Guida pratica all’AI generativa per le PMI: testi, documenti, fonti, dati e confronto degli strumenti. Come misurare qualità e costi senza promesse universali.', '3 min', 'Base'),
    ]),
    ('Normativa e Compliance', [
        (3, 'guida-ai/ai-act-conformita-pmi-2026.html', 'AI Act per le PMI: scadenze e checklist aggiornate al 2026', 'AI Act per PMI: calendario verificato a novembre 2026, ruoli, trasparenza, alfabetizzazione, sanzioni e checklist operativa con fonti ufficiali.', '6 min', 'Intermedio'),
        (4, 'guida-ai/gdpr-intelligenza-artificiale.html', 'GDPR e AI in azienda: dati, controlli e data breach', 'Checklist GDPR per progetti AI: base giuridica, fornitori, DPIA, decisioni automatizzate, dati on-premise e notifica dei data breach con fonti ufficiali.', '4 min', 'Intermedio'),
    ]),
    ('Implementazione Pratica', [
        (5, 'guida-ai/come-iniziare-ai-pmi.html', 'Come iniziare con l’AI: 7 passi per un pilota nella PMI', 'Sette passi per iniziare con l’AI in una PMI: processo, dati, budget, prova, formazione, controlli e decisione. Checklist pratica senza ROI o tempi garantiti.', '5 min', 'Base'),
        (6, 'guida-ai/chatgpt-aziende-guida.html', "ChatGPT per Aziende: Guida Pratica all'Implementazione", 'ChatGPT per aziende: Business, uso manuale e automazioni API. Criteri per scegliere, verificare le risposte e collegare sistemi con approvazione umana.', '7 min', 'Base'),
        (7, 'guida-ai/agenti-ai-pmi-2026.html', "Agenti AI per le PMI Italiane nel 2026: Guida Completa all'Adozione", 'Agenti AI per PMI: scegli un processo, definisci sistemi e permessi, prova le eccezioni e misura gli esiti prima di estendere l’automazione.', '6 min', 'Intermedio'),
    ]),
    ('ROI e Investimenti', [
        (8, 'guida-ai/roi-intelligenza-artificiale-2026.html', 'ROI dell’AI nelle PMI: formula, costi ed esempio di calcolo', 'Come misurare il ROI AI: baseline, costi completi, risparmio di cassa, capacità, margine, payback e un esempio illustrativo con analisi di sensibilità.', '4 min', 'Intermedio'),
        (9, 'guida-ai/costi-ai-pmi-budget.html', "Quanto Costa l'AI per una PMI? Budget e Investimenti 2026", 'Budget AI per PMI: separa licenze, avvio, consumi, integrazione, gestione e tempo interno. Una scheda TCO per stimare un processo senza prezzi universali.', '7 min', 'Base'),
        (10, 'guida-ai/ai-incentivi-finanziamenti-italia.html', 'Incentivi per progetti AI: cosa verificare nel 2026', 'Incentivi AI nel 2026: nuovo iperammortamento, differenze dal precedente Transizione 5.0, spese, scadenze, cumulo e checklist con fonti MIMIT.', '4 min', 'Intermedio'),
    ]),
    ('Competenze e Formazione', [
        (11, 'guida-ai/formazione-ai-dipendenti.html', 'Formazione AI per dipendenti: progettare e verificare il percorso', 'Come formare il team sull’AI: obiettivi per ruolo, esercitazioni sicure e verifiche sul lavoro. Criteri per scegliere corsi, costi e agevolazioni.', '3 min', 'Intermedio'),
        (12, 'guida-ai/competenze-digitali-ai.html', 'Competenze digitali AI: una mappa per i ruoli della PMI', 'Quali competenze AI sviluppare nella PMI: utilizzo, verifica, dati e responsabilità. Una matrice per ruolo e criteri per scegliere formazione e certificazioni.', '3 min', 'Base'),
    ]),
    ('AI per Settore', [
        (13, 'guida-ai/ai-manifatturiero-industria-40.html', 'AI nel Manifatturiero: applicazioni e valutazione per le PMI', 'Manutenzione predittiva, controllo qualità e supply chain: come scegliere un pilota AI manifatturiero, misurare risultati e verificare incentivi nel 2026.', '7 min', 'Intermedio'),
        (14, 'guida-ai/ai-moda-lusso-made-italy.html', 'AI nella moda e nel lusso: una guida pratica per il Made in Italy', 'AI per moda e lusso: archivi, previsioni, prototipi e dati di prodotto. Come verificare qualità, diritti, costi e tracciabilità prima di investire.', '3 min', 'Intermedio'),
        (15, 'guida-ai/ai-servizi-finanziari.html', 'AI nei servizi finanziari: applicazioni e controlli', 'AI per banche, fintech e assicurazioni: antifrode, credito, documenti, assistenza e sinistri. Come valutare qualità, rischio e benefici senza promesse generiche.', '5 min', 'Avanzato'),
        (16, 'guida-ai/ai-agroalimentare-made-italy.html', 'AI nell’agroalimentare: dati, qualità e tracciabilità per il Made in Italy', 'Come valutare un progetto AI nell’agroalimentare: dati di campo, controllo qualità, tracciabilità e prove su lotti reali, senza risparmi garantiti.', '3 min', 'Intermedio'),
        (17, 'guida-ai/ai-turismo-hospitality.html', 'AI nel turismo e hospitality: guida operativa per gli albergatori', 'Come valutare AI in hotel: risposte agli ospiti, PMS, previsioni e revenue management. Checklist di dati, controlli e costi senza ROI garantiti.', '3 min', 'Intermedio'),
        (18, 'guida-ai/ai-sanita-healthcare.html', 'AI nella sanità: applicazioni, evidenze e controlli', 'Come valutare un progetto AI in sanità: usi clinici e amministrativi, validazione, dati sanitari, FSE, EHDS, GDPR e AI Act. Fonti OMS e UE.', '4 min', 'Avanzato'),
        (19, 'guida-ai/ai-retail-ecommerce.html', 'AI per retail ed e-commerce: applicazioni e misurazione', 'AI per negozi ed e-commerce: catalogo, prezzi, scorte, contenuti e assistenza. Come scegliere un pilota, confrontare costi e misurare margine e qualità.', '4 min', 'Intermedio'),
        (20, 'guida-ai/ai-studi-professionali.html', 'AI per studi professionali: applicazioni, dati e regole', 'AI per avvocati, commercialisti e consulenti: articolo 13 della Legge 132/2025, informazione al cliente, formazione, dati e verifica degli output.', '4 min', 'Intermedio'),
    ]),
    ('Applicazioni Aziendali', [
        (21, 'guida-ai/chatbot-ai-customer-service.html', 'Chatbot AI per Customer Service: Guida Completa PMI', 'Chatbot AI per assistenza clienti: FAQ, bozze o azioni nel CRM. Definisci fonti, permessi, passaggio umano e criteri di accettazione; trasparenza dell’articolo 50.', '7 min', 'Intermedio'),
        (22, 'guida-ai/ai-marketing-vendite.html', 'AI per marketing e vendite: dalla nuova richiesta al CRM', 'AI per marketing e vendite: controlla nuove richieste, prepara bozze da approvare e aggiorna il CRM. Misura qualità, tempi e contatti qualificati.', '7 min', 'Base'),
        (23, 'guida-ai/automazione-ai-processi.html', 'Automazione AI: 10 processi aziendali da valutare', 'Dieci processi da valutare per l’automazione AI: criteri di priorità, integrazione, controlli e misurazione dei benefici per le PMI.', '6 min', 'Intermedio'),
        (24, 'guida-ai/ai-hr-recruiting.html', 'AI per HR e recruiting: applicazioni, bias e controlli', 'Come valutare AI e recruiting: annunci, CV, chatbot, bias, video-colloqui, AI Act e GDPR. Criteri per un pilota HR misurabile e controllato.', '4 min', 'Intermedio'),
        (25, 'guida-ai/ai-cybersecurity-aziendale.html', 'AI e cybersecurity aziendale: controlli pratici per le PMI', 'Come valutare l’AI nella cybersecurity di una PMI: log, rilevazione, triage e risposta agli incidenti. Controlli essenziali e prove senza garanzie di protezione.', '3 min', 'Avanzato'),
        (26, 'guida-ai/ai-predittiva-data-analytics.html', 'AI predittiva e data analytics: come valutare le previsioni nella PMI', 'Dati, baseline e test temporali per valutare previsioni AI nelle PMI. Metodo pratico per domanda e scorte, con esempio di errore e costi da misurare.', '3 min', 'Avanzato'),
    ]),
    ('Leadership e Cultura', [
        (27, 'guida-ai/leadership-ai-trasformazione.html', 'Leadership AI nella PMI: responsabilità, decisioni e misure', 'Guida per CEO e responsabili: scegliere i progetti AI, assegnare ruoli, comunicare limiti, controllare budget e decidere se estendere un pilota con prove.', '5 min', 'Avanzato'),
        (28, 'guida-ai/cultura-aziendale-ai.html', 'Cultura aziendale e AI: coinvolgere il team e gestire il cambiamento', 'Come accompagnare l’adozione AI nel team: ascolto, responsabilità, formazione, prove sul processo e metriche. Esempi ipotetici senza percentuali di successo.', '5 min', 'Intermedio'),
    ]),
    ('Trend e Futuro', [
        (29, 'guida-ai/ai-sostenibilita-esg.html', 'AI per sostenibilità ed ESG: misure, dati e obblighi', 'AI e sostenibilità nelle PMI: misurare consumi e sprechi, verificare dati ESG e ambito CSRD. Applicazioni e controlli con fonti istituzionali aggiornate.', '4 min', 'Intermedio'),
        (30, 'guida-ai/trend-ai-2025-2026.html', 'Trend AI 2026–2027 per le PMI: sette decisioni pratiche', 'Sette trend AI per PMI: documenti, agenti, modelli locali, multimodalità, low-code, governance e soluzioni verticali. Fonti e criteri per un pilota misurabile.', '5 min', 'Avanzato'),
    ]),
    ('Scegliere il Partner AI', [
        (31, 'guida-ai/come-scegliere-consulenza-ai-italia.html', 'Come scegliere una consulenza AI: criteri e prove per le PMI', 'Dieci criteri per scegliere una consulenza AI: esperienza, prove, costi, dati, supporto e tempi. Come leggere casi cliente e garanzie contrattuali.', '4 min', 'Base'),
        (32, 'guida-ai/migliori-aziende-ai-italia-2025.html', 'Aziende AI in Italia: come scegliere il partner per la tua PMI', 'Guida PugliAI alla scelta di un partner AI per la tua PMI: processo, sistemi, costi, responsabilità e referenze da verificare, con fonti dei fornitori.', '7 min', 'Base'),
        (33, 'guida-ai/startup-ai-italiane-2025.html', 'Startup e aziende AI italiane: 15 operatori da valutare nel 2026', '15 startup, aziende e marchi AI in Italia: specializzazioni, fonti, acquisizioni e criteri di scelta. Selezione editoriale aggiornata a novembre 2026.', '5 min', 'Base'),
    ]),
    ('AI e Territorio', [
        (34, 'guida-ai/consulenza-ai-puglia.html', 'Consulenza AI in Puglia: come scegliere il partner per la PMI', 'Come scegliere un consulente AI in Puglia: criteri, costi, dati e pilota. PugliAI ha sede a Latiano (Brindisi) e sede operativa a Bergamo.', '4 min', 'Base'),
        (35, 'guida-ai/eccellenze-ai-sud-italia.html', 'Ecosistema AI in Puglia: ricerca, imprese e collaborazioni', 'Come orientarsi nell’ecosistema AI pugliese: università, fornitori, progetti per settore, incentivi e criteri per avviare una collaborazione.', '4 min', 'Base'),
        (36, 'guida-ai/trasformazione-digitale-pmi-puglia.html', 'Trasformazione digitale e AI per le PMI pugliesi: da dove partire', 'Un percorso concreto per le PMI pugliesi: processi, dati, pilota, persone e incentivi da verificare. Applicazioni per turismo, agroalimentare e manifattura.', '3 min', 'Base'),
    ]),
]

RES_CATS = [
    ('fondamenti-ai', 'Fondamenti AI', [
        ('guida-ai/cos-e-intelligenza-artificiale-pmi.html', 'Fondamenti', 'Cos’è l’intelligenza artificiale per le PMI: guida pratica', 'Una guida pratica all’AI per le PMI: modelli generativi, machine learning, NLP e visione artificiale, costi da valutare e controlli per un primo progetto.', False),
        ('guida-ai/ai-generativa-aziende.html', 'Fondamenti', 'AI generativa in azienda: scegliere, provare e controllare gli strumenti', 'Guida pratica all’AI generativa per le PMI: testi, documenti, fonti, dati e confronto degli strumenti. Come misurare qualità e costi senza promesse universali.', False),
        ('guida-ai/trend-ai-2025-2026.html', 'Fondamenti', 'Trend AI 2026–2027 per le PMI: sette decisioni pratiche', 'Sette trend AI per PMI: documenti, agenti, modelli locali, multimodalità, low-code, governance e soluzioni verticali. Fonti e criteri per un pilota misurabile.', False),
    ]),
    ('normative-e-compliance', 'Normative e Compliance', [
        ('guida-ai/ai-act-conformita-pmi-2026.html', 'Compliance', 'AI Act per le PMI: scadenze e checklist aggiornate al 2026', 'AI Act per PMI: calendario verificato a novembre 2026, ruoli, trasparenza, alfabetizzazione, sanzioni e checklist operativa con fonti ufficiali.', True),
        ('guida-ai/gdpr-intelligenza-artificiale.html', 'Compliance', 'GDPR e AI in azienda: dati, controlli e data breach', 'Checklist GDPR per progetti AI: base giuridica, fornitori, DPIA, decisioni automatizzate, dati on-premise e notifica dei data breach con fonti ufficiali.', False),
        ('guida-ai/cultura-aziendale-ai.html', 'Compliance', 'Cultura aziendale e AI: coinvolgere il team e gestire il cambiamento', 'Come accompagnare l’adozione AI nel team: ascolto, responsabilità, formazione, prove sul processo e metriche. Esempi ipotetici senza percentuali di successo.', False),
    ]),
    ('strategia-e-implementazione', 'Strategia e Implementazione', [
        ('guida-ai/come-iniziare-ai-pmi.html', 'Strategia', 'Come iniziare con l’AI: 7 passi per un pilota nella PMI', 'Sette passi per iniziare con l’AI in una PMI: processo, dati, budget, prova, formazione, controlli e decisione. Checklist pratica senza ROI o tempi garantiti.', False),
        ('guida-ai/roi-intelligenza-artificiale-2026.html', 'ROI', 'ROI dell’AI nelle PMI: formula, costi ed esempio di calcolo', 'Come misurare il ROI AI: baseline, costi completi, risparmio di cassa, capacità, margine, payback e un esempio illustrativo con analisi di sensibilità.', True),
        ('guida-ai/costi-ai-pmi-budget.html', 'Budget', "Quanto Costa l'AI per una PMI? Budget e Investimenti 2026", 'Budget AI per PMI: separa licenze, avvio, consumi, integrazione, gestione e tempo interno. Una scheda TCO per stimare un processo senza prezzi universali.', False),
        ('guida-ai/leadership-ai-trasformazione.html', 'Leadership', 'Leadership AI nella PMI: responsabilità, decisioni e misure', 'Guida per CEO e responsabili: scegliere i progetti AI, assegnare ruoli, comunicare limiti, controllare budget e decidere se estendere un pilota con prove.', False),
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
        ('guida-ai/ai-predittiva-data-analytics.html', 'Data Analytics', 'AI predittiva e data analytics: come valutare le previsioni nella PMI', 'Dati, baseline e test temporali per valutare previsioni AI nelle PMI. Metodo pratico per domanda e scorte, con esempio di errore e costi da misurare.', False),
        ('guida-ai/ai-cybersecurity-aziendale.html', 'Cybersecurity', 'AI e cybersecurity aziendale: controlli pratici per le PMI', 'Come valutare l’AI nella cybersecurity di una PMI: log, rilevazione, triage e risposta agli incidenti. Controlli essenziali e prove senza garanzie di protezione.', False),
        ('guida-ai/ai-sostenibilita-esg.html', 'ESG', 'AI per sostenibilità ed ESG: misure, dati e obblighi', 'AI e sostenibilità nelle PMI: misurare consumi e sprechi, verificare dati ESG e ambito CSRD. Applicazioni e controlli con fonti istituzionali aggiornate.', False),
    ]),
    ('ai-per-settore', 'AI per Settore', [
        ('guida-ai/ai-manifatturiero-industria-40.html', 'Manifatturiero', 'AI nel Manifatturiero: applicazioni e valutazione per le PMI', 'Manutenzione predittiva, controllo qualità e supply chain: come scegliere un pilota AI manifatturiero, misurare risultati e verificare incentivi nel 2026.', False),
        ('guida-ai/ai-moda-lusso-made-italy.html', 'Moda e Lusso', 'AI nella moda e nel lusso: una guida pratica per il Made in Italy', 'AI per moda e lusso: archivi, previsioni, prototipi e dati di prodotto. Come verificare qualità, diritti, costi e tracciabilità prima di investire.', False),
        ('guida-ai/ai-servizi-finanziari.html', 'Finanza', 'AI nei servizi finanziari: applicazioni e controlli', 'AI per banche, fintech e assicurazioni: antifrode, credito, documenti, assistenza e sinistri. Come valutare qualità, rischio e benefici senza promesse generiche.', False),
        ('guida-ai/ai-agroalimentare-made-italy.html', 'Agroalimentare', 'AI nell’agroalimentare: dati, qualità e tracciabilità per il Made in Italy', 'Come valutare un progetto AI nell’agroalimentare: dati di campo, controllo qualità, tracciabilità e prove su lotti reali, senza risparmi garantiti.', False),
        ('guida-ai/ai-turismo-hospitality.html', 'Turismo', 'AI nel turismo e hospitality: guida operativa per gli albergatori', 'Come valutare AI in hotel: risposte agli ospiti, PMS, previsioni e revenue management. Checklist di dati, controlli e costi senza ROI garantiti.', False),
        ('guida-ai/ai-sanita-healthcare.html', 'Sanità', 'AI nella sanità: applicazioni, evidenze e controlli', 'Come valutare un progetto AI in sanità: usi clinici e amministrativi, validazione, dati sanitari, FSE, EHDS, GDPR e AI Act. Fonti OMS e UE.', False),
        ('guida-ai/ai-retail-ecommerce.html', 'Retail', 'AI per retail ed e-commerce: applicazioni e misurazione', 'AI per negozi ed e-commerce: catalogo, prezzi, scorte, contenuti e assistenza. Come scegliere un pilota, confrontare costi e misurare margine e qualità.', False),
        ('guida-ai/ai-studi-professionali.html', 'Studi Professionali', 'AI per studi professionali: applicazioni, dati e regole', 'AI per avvocati, commercialisti e consulenti: articolo 13 della Legge 132/2025, informazione al cliente, formazione, dati e verifica degli output.', False),
    ]),
    ('formazione-e-persone', 'Formazione e Persone', [
        ('guida-ai/formazione-ai-dipendenti.html', 'Formazione', 'Formazione AI per dipendenti: progettare e verificare il percorso', 'Come formare il team sull’AI: obiettivi per ruolo, esercitazioni sicure e verifiche sul lavoro. Criteri per scegliere corsi, costi e agevolazioni.', False),
        ('guida-ai/competenze-digitali-ai.html', 'Competenze', 'Competenze digitali AI: una mappa per i ruoli della PMI', 'Quali competenze AI sviluppare nella PMI: utilizzo, verifica, dati e responsabilità. Una matrice per ruolo e criteri per scegliere formazione e certificazioni.', False),
    ]),
    ('mercato-e-aziende', 'Mercato e Aziende', [
        ('guida-ai/migliori-aziende-ai-italia-2025.html', 'Mercato', 'Aziende AI in Italia: come scegliere il partner per la tua PMI', 'Guida PugliAI alla scelta di un partner AI per la tua PMI: processo, sistemi, costi, responsabilità e referenze da verificare, con fonti dei fornitori.', False),
        ('guida-ai/startup-ai-italiane-2025.html', 'Startup', 'Startup e aziende AI italiane: 15 operatori da valutare nel 2026', '15 startup, aziende e marchi AI in Italia: specializzazioni, fonti, acquisizioni e criteri di scelta. Selezione editoriale aggiornata a novembre 2026.', False),
        ('guida-ai/come-scegliere-consulenza-ai-italia.html', 'Consulenza', 'Come scegliere una consulenza AI: criteri e prove per le PMI', 'Dieci criteri per scegliere una consulenza AI: esperienza, prove, costi, dati, supporto e tempi. Come leggere casi cliente e garanzie contrattuali.', False),
        ('guida-ai/eccellenze-ai-sud-italia.html', 'Sud Italia', 'Ecosistema AI in Puglia: ricerca, imprese e collaborazioni', 'Come orientarsi nell’ecosistema AI pugliese: università, fornitori, progetti per settore, incentivi e criteri per avviare una collaborazione.', False),
        ('guida-ai/trasformazione-digitale-pmi-puglia.html', 'Puglia', 'Trasformazione digitale e AI per le PMI pugliesi: da dove partire', 'Un percorso concreto per le PMI pugliesi: processi, dati, pilota, persone e incentivi da verificare. Applicazioni per turismo, agroalimentare e manifattura.', False),
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
