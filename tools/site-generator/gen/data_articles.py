"""Article index data for the resources hub and the CEO guide (extracted from the 2025 pages, kept verbatim).

CEO_CATS: (category, [(number, href, title, description, read_time, level)])
RES_CATS: (slug, category, [(href, tag, short_title, short_description, is_new)])
"""

CEO_CATS = [
    ("Fondamenti dell'AI per le Imprese", [
        (1, 'guida-ai/cos-e-intelligenza-artificiale-pmi.html', "Cos'è l'Intelligenza Artificiale per le PMI: Guida Completa 2025", 'Definizioni chiare, tipologie di AI (machine learning, deep learning, AI generativa) e perché sono cruciali per la competitività delle piccole e medie imprese italiane.', '12 min', 'Base'),
        (2, 'guida-ai/ai-generativa-aziende.html', "AI Generativa: Cos'è e Come Usarla in Azienda nel 2025", 'ChatGPT, Claude, Gemini: come funzionano gli strumenti di AI generativa e quali applicazioni concrete offrono per marketing, vendite e operazioni aziendali.', '15 min', 'Base'),
    ]),
    ('Normativa e Compliance', [
        (3, 'guida-ai/ai-act-conformita-pmi-2026.html', 'AI Act 2025: Cosa Devono Sapere le PMI Italiane', "La normativa europea sull'AI spiegata in modo pratico: scadenze, obblighi, classificazione dei rischi e sanzioni. Come prepararsi senza stress.", '18 min', 'Intermedio'),
        (4, 'guida-ai/gdpr-intelligenza-artificiale.html', 'GDPR e Intelligenza Artificiale: Come Garantire la Compliance', "L'intersezione tra privacy e AI: come usare strumenti di intelligenza artificiale rispettando il GDPR. Checklist pratica per le aziende italiane.", '14 min', 'Intermedio'),
    ]),
    ('Implementazione Pratica', [
        (5, 'guida-ai/come-iniziare-ai-pmi.html', "Come Iniziare con l'AI: 7 Primi Passi per le PMI", 'Guida step-by-step per avviare il percorso AI: dalla valutazione della maturità digitale ai primi progetti pilota. Con checklist scaricabile.', '16 min', 'Base'),
        (6, 'guida-ai/chatgpt-aziende-guida.html', "ChatGPT per Aziende: Guida Pratica all'Implementazione", "Come integrare ChatGPT nei processi aziendali: piani disponibili, casi d'uso, prompt efficaci e best practice per massimizzare i risultati.", '20 min', 'Base'),
        (7, 'guida-ai/agenti-ai-pmi-2026.html', 'Agenti AI: Come Automatizzare i Processi Aziendali', "La nuova frontiera dell'automazione intelligente: cosa sono gli agenti AI, come funzionano e quali processi possono gestire autonomamente.", '17 min', 'Intermedio'),
    ]),
    ('ROI e Investimenti', [
        (8, 'guida-ai/roi-intelligenza-artificiale-2026.html', "ROI dell'Intelligenza Artificiale: Come Calcolarlo e Massimizzarlo", "Metodologie per misurare il ritorno sull'investimento AI: metriche chiave, benchmark di settore e strategie per accelerare il payback.", '15 min', 'Intermedio'),
        (9, 'guida-ai/costi-ai-pmi-budget.html', "Quanto Costa l'AI per una PMI? Budget e Investimenti 2025", 'Analisi dettagliata dei costi: licenze software, implementazione, formazione e manutenzione. Come pianificare il budget AI in modo realistico.', '14 min', 'Base'),
        (10, 'guida-ai/ai-incentivi-finanziamenti-italia.html', 'Incentivi e Finanziamenti AI Italia 2025: Transizione 5.0 e Agevolazioni', "Guida completa a Transizione 5.0, crediti d'imposta fino al 45%, bandi regionali e fondi europei. Come finanziare i progetti AI nella tua PMI.", '18 min', 'Intermedio'),
    ]),
    ('Competenze e Formazione', [
        (11, 'guida-ai/formazione-ai-dipendenti.html', 'Formazione AI per Dipendenti: Come Preparare il Team', "Strategie di upskilling e reskilling per preparare i collaboratori all'era dell'AI. Programmi formativi, risorse gratuite e best practice.", '13 min', 'Intermedio'),
        (12, 'guida-ai/competenze-digitali-ai.html', 'Competenze Digitali AI: Quali Servono nel 2025', "Mappa delle competenze richieste dal mercato: dall'AI literacy alle skill tecniche avanzate. Come colmare il gap di competenze in azienda.", '12 min', 'Base'),
    ]),
    ('AI per Settore', [
        (13, 'guida-ai/ai-manifatturiero-industria-40.html', 'AI nel Manifatturiero: Industria 4.0 per le PMI Italiane', "Applicazioni concrete dell'AI nella produzione: manutenzione predittiva, controllo qualità, ottimizzazione supply chain. Con incentivi Transizione 5.0.", '18 min', 'Intermedio'),
        (14, 'guida-ai/ai-moda-lusso-made-italy.html', 'AI nel Settore Moda e Lusso: Made in Italy Digitale', "Come i brand italiani stanno usando l'AI: design, personalizzazione, anticontraffazione e customer experience. Case study Prada e altri.", '16 min', 'Intermedio'),
        (15, 'guida-ai/ai-servizi-finanziari.html', 'AI per i Servizi Finanziari: Innovazione nel Settore Bancario', "L'AI nel fintech italiano: antifrode, credit scoring, robo-advisory e automazione back-office. Compliance e opportunità per banche e assicurazioni.", '15 min', 'Avanzato'),
        (16, 'guida-ai/ai-agroalimentare-made-italy.html', "AI nell'Agroalimentare: Made in Italy e Agricoltura 4.0", "Tracciabilità blockchain, precision farming, controllo qualità e lotta all'Italian sounding. Come l'AI protegge e valorizza il food italiano.", '17 min', 'Intermedio'),
        (17, 'guida-ai/ai-turismo-hospitality.html', "AI nel Turismo e Hospitality: Innovare l'Accoglienza Italiana", "Concierge virtuali, dynamic pricing, personalizzazione esperienze e revenue management. L'AI per hotel, ristoranti e tour operator.", '16 min', 'Intermedio'),
        (18, 'guida-ai/ai-sanita-healthcare.html', 'AI nella Sanità: Healthcare Italiano tra Innovazione e Privacy', "Diagnostica AI, telemedicina, gestione cartelle cliniche e ottimizzazione risorse. Come le strutture sanitarie italiane adottano l'AI.", '19 min', 'Avanzato'),
        (19, 'guida-ai/ai-retail-ecommerce.html', 'AI per Retail ed E-commerce: Trasformare le Vendite', "Personalizzazione, gestione inventario, pricing dinamico e customer experience omnicanale. L'AI per negozi fisici e online.", '16 min', 'Intermedio'),
        (20, 'guida-ai/ai-studi-professionali.html', 'AI per Studi Professionali: Avvocati, Commercialisti e Consulenti', "Legal tech, automazione contabile, due diligence e gestione documentale. Come l'AI trasforma il lavoro dei professionisti italiani.", '15 min', 'Intermedio'),
    ]),
    ('Applicazioni Aziendali', [
        (21, 'guida-ai/chatbot-ai-customer-service.html', 'Chatbot AI per Customer Service: Guida Completa PMI', 'Come implementare chatbot efficaci: piattaforme consigliate, integrazione con CRM, metriche di successo. Da assistente base ad agente conversazionale.', '19 min', 'Intermedio'),
        (22, 'guida-ai/ai-marketing-vendite.html', 'AI per Marketing e Vendite: Strategie che Funzionano', "Personalizzazione, lead scoring, content creation e campagne automatizzate. Come l'AI sta trasformando il marketing delle PMI italiane.", '17 min', 'Base'),
        (23, 'guida-ai/automazione-ai-processi.html', 'Automazione AI: Processi Aziendali da Automatizzare', "I 10 processi con maggiore potenziale di automazione: dall'amministrazione alle vendite. ROI atteso e complessità di implementazione.", '14 min', 'Intermedio'),
        (24, 'guida-ai/ai-hr-recruiting.html', 'AI per HR e Recruiting: Rivoluzionare la Gestione delle Risorse Umane', "Screening CV automatico, analisi predittiva turnover, onboarding intelligente e gestione performance. L'AI per HR nelle PMI italiane.", '17 min', 'Intermedio'),
        (25, 'guida-ai/ai-cybersecurity-aziendale.html', "AI e Cybersecurity Aziendale: Proteggere l'Impresa nell'Era Digitale", "Threat detection, risposta automatica agli incidenti, antifrode e protezione dati. Come l'AI difende le PMI dalle minacce cyber.", '18 min', 'Avanzato'),
        (26, 'guida-ai/ai-predittiva-data-analytics.html', 'AI Predittiva e Data Analytics: Decisioni Basate sui Dati', 'Forecasting, analisi tendenze, manutenzione predittiva e business intelligence. Come trasformare i dati aziendali in vantaggio competitivo.', '16 min', 'Avanzato'),
    ]),
    ('Leadership e Cultura', [
        (27, 'guida-ai/leadership-ai-trasformazione.html', 'Leadership AI: Come Guidare la Trasformazione Digitale', "Il ruolo del CEO nell'era dell'AI: vision, comunicazione, governance e decisioni strategiche. Framework per leader che vogliono fare la differenza.", '15 min', 'Avanzato'),
        (28, 'guida-ai/cultura-aziendale-ai.html', 'Cultura Aziendale e AI: Superare le Resistenze al Cambiamento', "Come affrontare le paure dei dipendenti, costruire fiducia e creare una cultura che abbraccia l'innovazione. Strategie di change management.", '13 min', 'Intermedio'),
    ]),
    ('Trend e Futuro', [
        (29, 'guida-ai/ai-sostenibilita-esg.html', 'AI per la Sostenibilità e ESG: Innovazione Responsabile', "Ottimizzazione energetica, economia circolare, supply chain sostenibile e reporting ESG automatizzato. L'AI al servizio della transizione green.", '17 min', 'Intermedio'),
        (30, 'guida-ai/trend-ai-2025-2026.html', 'Trend AI 2025-2026: Cosa Aspettarsi per le PMI Italiane', 'Le tendenze emergenti: AI agentica, multimodalita, edge AI e democratizzazione. Come prepararsi oggi per le opportunità di domani.', '16 min', 'Avanzato'),
    ]),
    ('Scegliere il Partner AI', [
        (31, 'guida-ai/come-scegliere-consulenza-ai-italia.html', 'Come Scegliere una Società di Consulenza AI in Italia', 'I criteri che contano davvero: specializzazione, referenze verificabili, trasparenza sui prezzi e garanzie contrattuali. Con le domande da porre prima di firmare.', '14 min', 'Base'),
        (32, 'guida-ai/migliori-aziende-ai-italia-2025.html', 'Migliori Aziende AI in Italia 2026: Classifica e Guida', 'Panoramica delle società AI italiane per PMI, startup ed enterprise, con confronto di servizi, specializzazioni e fasce di prezzo.', '13 min', 'Base'),
        (33, 'guida-ai/startup-ai-italiane-2025.html', 'Startup AI Italiane 2026: Le Migliori 15 da Conoscere', "Chi sono le startup che stanno costruendo l'AI italiana, cosa fanno e come valutarle come fornitori o partner tecnologici.", '12 min', 'Base'),
    ]),
    ('AI e Territorio', [
        (34, 'guida-ai/consulenza-ai-puglia.html', 'Consulenza AI in Puglia: Aziende e Criteri di Scelta', 'Il panorama della consulenza AI in Puglia: chi opera sul territorio, quali competenze cercare e come valutare un partner locale.', '11 min', 'Base'),
        (35, 'guida-ai/eccellenze-ai-sud-italia.html', 'Eccellenze AI nel Sud Italia: la Puglia in Prima Linea', "Poli di innovazione, centri di ricerca e imprese che stanno costruendo l'ecosistema AI del Mezzogiorno.", '12 min', 'Base'),
        (36, 'guida-ai/trasformazione-digitale-pmi-puglia.html', 'Trasformazione Digitale e AI per le PMI Pugliesi', 'Come le piccole e medie imprese pugliesi possono affrontare la digitalizzazione, fra incentivi regionali, competenze e casi concreti.', '14 min', 'Base'),
    ]),
]

RES_CATS = [
    ('fondamenti-ai', 'Fondamenti AI', [
        ('guida-ai/cos-e-intelligenza-artificiale-pmi.html', 'Fondamenti', "Cos'è l'Intelligenza Artificiale per le PMI", 'Definizioni chiare, tipologie di AI e perché sono cruciali per la competitività delle PMI italiane.', False),
        ('guida-ai/ai-generativa-aziende.html', 'Fondamenti', 'AI Generativa per Aziende', 'ChatGPT, Claude, Gemini: come funzionano e quali applicazioni concrete offrono per il business.', False),
        ('guida-ai/trend-ai-2025-2026.html', 'Fondamenti', 'Trend AI 2025-2026', 'Le tendenze emergenti: AI agentica, multimodalita, edge AI e democratizzazione per le PMI.', False),
    ]),
    ('normative-e-compliance', 'Normative e Compliance', [
        ('guida-ai/ai-act-conformita-pmi-2026.html', 'Compliance', 'AI Act 2026: Checklist Conformità', "Checklist aggiornata al 2026 per adeguarsi all'AI Act: nuove scadenze e azioni concrete per le PMI.", True),
        ('guida-ai/gdpr-intelligenza-artificiale.html', 'Compliance', 'GDPR e Intelligenza Artificiale', 'Come usare strumenti AI rispettando il GDPR: checklist pratica per le aziende italiane.', False),
        ('guida-ai/cultura-aziendale-ai.html', 'Compliance', 'Cultura Aziendale e AI', "Come costruire una cultura aziendale aperta all'innovazione AI e gestire il cambiamento.", False),
    ]),
    ('strategia-e-implementazione', 'Strategia e Implementazione', [
        ('guida-ai/come-iniziare-ai-pmi.html', 'Strategia', "Come Iniziare con l'AI", 'Guida step-by-step: dalla valutazione della maturità digitale ai primi progetti pilota.', False),
        ('guida-ai/roi-intelligenza-artificiale-2026.html', 'ROI', "ROI dell'AI 2026", "Dati aggiornati al 2026: nuovi benchmark, strategie e casi studio italiani sul ritorno dell'AI.", True),
        ('guida-ai/costi-ai-pmi-budget.html', 'Budget', 'Costi AI per PMI', 'Analisi dettagliata dei costi: licenze, implementazione, formazione e come pianificare il budget.', False),
        ('guida-ai/leadership-ai-trasformazione.html', 'Leadership', 'Leadership AI', 'Come guidare la trasformazione AI in azienda: competenze, governance e gestione del cambiamento.', False),
        ('guida-ai/ai-incentivi-finanziamenti-italia.html', 'Finanziamenti', 'Incentivi e Finanziamenti AI', "Transizione 5.0, crediti d'imposta, bandi regionali e fondi europei per finanziare i progetti AI.", False),
        ('guida-ai/consulenza-ai-puglia.html', 'Consulenza', 'Consulenza AI in Puglia', "L'ecosistema AI pugliese: competenze locali, progetti di successo e opportunità per le imprese.", False),
    ]),
    ('automazione-e-tecnologia', 'Automazione e Tecnologia', [
        ('guida-ai/agenti-ai-pmi-2026.html', 'Automazione', 'Agenti AI per PMI 2026', 'La nuova generazione di agenti AI: come automatizzare processi complessi nelle PMI italiane.', True),
        ('guida-ai/chatgpt-aziende-guida.html', 'Strumenti', 'ChatGPT per Aziende', "Come integrare ChatGPT nei processi aziendali: piani, casi d'uso e prompt efficaci.", False),
        ('guida-ai/chatbot-ai-customer-service.html', 'Customer Service', 'Chatbot AI Customer Service', 'Implementare chatbot AI per il servizio clienti: piattaforme, best practice e risultati misurabili.', False),
        ('guida-ai/automazione-ai-processi.html', 'Automazione', 'Automazione AI Processi', "Automatizzare i processi aziendali con l'AI: dalla mappatura alla misurazione dei risultati.", False),
    ]),
    ('funzioni-aziendali', 'Funzioni Aziendali', [
        ('guida-ai/ai-marketing-vendite.html', 'Marketing', 'AI Marketing e Vendite', "Personalizzazione, lead scoring, content marketing e automazione vendite con l'intelligenza artificiale.", False),
        ('guida-ai/ai-hr-recruiting.html', 'HR', 'AI HR e Recruiting', "Screening CV, talent acquisition, onboarding e gestione HR potenziati dall'intelligenza artificiale.", False),
        ('guida-ai/ai-predittiva-data-analytics.html', 'Data Analytics', 'AI Predittiva e Data Analytics', "Analisi predittiva, business intelligence e decisioni data-driven con l'AI per le PMI.", False),
        ('guida-ai/ai-cybersecurity-aziendale.html', 'Cybersecurity', 'AI Cybersecurity Aziendale', "Proteggere l'azienda con l'AI: threat detection, prevenzione attacchi e sicurezza dei dati.", False),
        ('guida-ai/ai-sostenibilita-esg.html', 'ESG', 'AI Sostenibilità e ESG', "Ottimizzazione energetica, economia circolare e reporting ESG automatizzato con l'AI.", False),
    ]),
    ('ai-per-settore', 'AI per Settore', [
        ('guida-ai/ai-manifatturiero-industria-40.html', 'Manifatturiero', 'AI nel Manifatturiero', "Industria 4.0, manutenzione predittiva, quality control e ottimizzazione della produzione con l'AI.", False),
        ('guida-ai/ai-moda-lusso-made-italy.html', 'Moda e Lusso', 'AI Moda e Lusso', "Trend forecasting, personalizzazione e supply chain nel Made in Italy potenziati dall'AI.", False),
        ('guida-ai/ai-servizi-finanziari.html', 'Finanza', 'AI Servizi Finanziari', 'Risk management, fraud detection e consulenza automatizzata nei servizi finanziari italiani.', False),
        ('guida-ai/ai-agroalimentare-made-italy.html', 'Agroalimentare', 'AI Agroalimentare', "Agricoltura di precisione, tracciabilità e qualità nel Made in Italy agroalimentare con l'AI.", False),
        ('guida-ai/ai-turismo-hospitality.html', 'Turismo', 'AI Turismo e Hospitality', "Revenue management, guest experience e marketing turistico potenziati dall'intelligenza artificiale.", False),
        ('guida-ai/ai-sanita-healthcare.html', 'Sanità', 'AI Sanità e Healthcare', 'Diagnostica AI, gestione pazienti e ottimizzazione delle strutture sanitarie italiane.', False),
        ('guida-ai/ai-retail-ecommerce.html', 'Retail', 'AI Retail ed E-commerce', "Personalizzazione, gestione inventario e customer experience nel retail con l'AI.", False),
        ('guida-ai/ai-studi-professionali.html', 'Studi Professionali', 'AI per Studi Professionali', "Come avvocati, commercialisti e consulenti possono usare l'AI per aumentare produttività e qualità.", False),
    ]),
    ('formazione-e-persone', 'Formazione e Persone', [
        ('guida-ai/formazione-ai-dipendenti.html', 'Formazione', 'Formazione AI per Dipendenti', "Strategie di upskilling e reskilling per preparare il team all'era dell'AI: programmi e risorse.", False),
        ('guida-ai/competenze-digitali-ai.html', 'Competenze', 'Competenze Digitali AI', "Le competenze chiave per lavorare con l'AI: prompt engineering, data literacy e pensiero critico.", False),
    ]),
    ('mercato-e-aziende', 'Mercato e Aziende', [
        ('guida-ai/migliori-aziende-ai-italia-2025.html', 'Mercato', 'Migliori Aziende AI Italia 2025', 'La classifica delle aziende AI più innovative in Italia: chi sono, cosa fanno e perché contano.', False),
        ('guida-ai/startup-ai-italiane-2025.html', 'Startup', 'Startup AI Italiane 2025', "Le startup AI più promettenti d'Italia: settori, tecnologie e opportunità di collaborazione.", False),
        ('guida-ai/come-scegliere-consulenza-ai-italia.html', 'Consulenza', 'Come Scegliere Consulenza AI', 'Criteri di valutazione, domande da fare e red flag per scegliere il partner AI giusto in Italia.', False),
        ('guida-ai/eccellenze-ai-sud-italia.html', 'Sud Italia', 'Eccellenze AI nel Sud Italia', 'Hub tecnologici, centri di ricerca e aziende AI che stanno trasformando il Mezzogiorno.', False),
        ('guida-ai/trasformazione-digitale-pmi-puglia.html', 'Puglia', 'Trasformazione Digitale PMI Puglia', 'Lo stato della digitalizzazione in Puglia: bandi, incentivi e casi di successo delle PMI locali.', False),
    ]),
]

FEATURED = [
    ('guida-ai/agenti-ai-pmi-2026.html', 'Automazione', 'Agenti AI per le PMI 2026: guida completa all’automazione intelligente', 'Come gli agenti AI stanno trasformando le PMI italiane nel 2026: casi d’uso, piattaforme e strategie di implementazione.'),
    ('guida-ai/ai-act-conformita-pmi-2026.html', 'Compliance', 'AI Act 2026: checklist di conformità per le PMI italiane', 'Checklist pratica e aggiornata per adeguarsi all’AI Act: scadenze, obblighi e azioni concrete per le PMI.'),
    ('guida-ai/roi-intelligenza-artificiale-2026.html', 'Strategia e ROI', 'ROI dell’AI 2026: benchmark e strategie per le PMI', 'Dati aggiornati al 2026 sul ritorno dell’investimento AI: benchmark di settore, metriche e casi italiani.'),
]

RES_CATS_EN = {
    'fondamenti-ai': 'AI fundamentals', 'normative-e-compliance': 'Regulation and compliance', 'strategia-e-implementazione': 'Strategy and implementation',
    'automazione-e-tecnologia': 'Automation and technology', 'funzioni-aziendali': 'Business functions', 'ai-per-settore': 'AI by sector',
    'formazione-e-persone': 'Training and people', 'mercato-e-aziende': 'Market and companies',
}
