"""Homepage (IT + EN)."""
from .html import *
from .site import Page, ld_org, ld_website, ld_webpage, ld_faq, offer, SITE, UPDATED_IT, UPDATED_EN, url_of

IT = dict(
    title='PugliAI — Consulenza AI, agenti e infrastrutture on-premise per le PMI italiane',
    description='Consulenza AI a prezzo fisso, agenti AI autonomi e prodotti on-premise per le piccole e medie imprese italiane. Sedi a Latiano (BR) e Bergamo. Primi risultati in 2–4 settimane.',
    h1='L’intelligenza artificiale al lavoro nella tua azienda.',
    sub='Consulenza, agenti AI e infrastrutture on-premise per le piccole e medie imprese italiane. Primi risultati in 2–4 settimane.',
    cta='Prenota la sessione strategica gratuita', cta_href='sessione-strategica.html', ghost='Scopri come lavoriamo', ghost_href='servizi.html',
    cardA_title='Agente servizio clienti', cardA_sub='PugliAI · esempio di esecuzione', cardA_tag='Attivo', cardA_num='128',
    cardA_numlabel='richieste gestite oggi', cardA_bar='94% risolte senza intervento umano', cardA_note='Supervisione umana sui passaggi critici',
    cardB_title='Sessione strategica', cardB_sub='45 minuti · gratuita · senza impegno',
    cardB_items=['Analisi dei processi chiave', 'Opportunità AI prioritarie', 'Report scritto con stima del ROI'], cardB_btn='Prenota',
    logos_caption='PMI e partner che lavorano con noi',
    answer_lead='<strong>PugliAI è una società di consulenza AI italiana</strong> che aiuta le piccole e medie imprese ad adottare l’intelligenza artificiale con percorsi a prezzo fisso, agenti AI autonomi e prodotti installati sui server dell’azienda. Opera da Latiano (Brindisi) e Bergamo su tutto il territorio nazionale, in italiano e in inglese.',
    answer_facts=[('Cosa fa', 'Consulenza strategica AI, agenti AI autonomi, hosting MCP on-premise, automazioni pronte all’uso e formazione del team.'),
                  ('Per chi', 'PMI italiane da 10 a 500 dipendenti e startup (tramite il PugliAI Accelerator).'),
                  ('Prezzi', 'Percorsi da €15.000 a oltre €100.000, definiti in offerta prima dell’avvio. Prodotti on-premise da €290/mese.'),
                  ('Tempi', 'Primi risultati in 2–4 settimane con le automazioni pronte all’uso.'),
                  ('Garanzia', 'ROI del 150% entro 12 mesi, misurato sui KPI concordati per iscritto: se non lo raggiungiamo, continuiamo senza costi aggiuntivi.'),
                  ('Dati', 'Opzione on-premise: i dati restano sui server dell’azienda. Conformità al GDPR e all’AI Act europeo.'),
                  ('Contatto', 'sales@pugliai.com — risposta entro 2 ore lavorative, lun–ven 9:00–18:00.')],
    answer_meta=f'Fondata nel 2023 · 50+ PMI seguite dal 2023 · A cura di <a href="gregor-maric.html">Gregor Marić, CEO &amp; Founder</a> · Ultimo aggiornamento: {UPDATED_IT}',
    prod_eyebrow='Prodotti on-premise', prod_h2='Quattro soluzioni pronte, installate sui tuoi server.',
    prod_lead='Ogni prodotto gira nella tua infrastruttura: i dati non lasciano mai l’azienda e i costi sono definiti in anticipo.',
    tabs=[('mic', 'VoiceAI', 'Centralino e assistenza vocale', 'voiceai-on-premise.html'),
          ('book', 'KnowledgeAI', 'Chat sui documenti aziendali', 'knowledgeai-enterprise.html'),
          ('plug', 'Hosting MCP', 'Collega l’AI ai tuoi sistemi', 'hosting-mcp.html'),
          ('bolt', 'Agenti AI', 'Processi eseguiti end-to-end', 'agenti-ai.html')],
    det_tag='Novità 2026 · da €490/mese', det_h3='Agenti AI autonomi',
    det_body='Non semplici chatbot: agenti che leggono i dati dai tuoi sistemi, pianificano ed eseguono attività complete su più strumenti e ti riportano i risultati.',
    det_items=['Eseguono processi end-to-end, non solo rispondono', 'Si collegano al gestionale, al CRM e all’ERP tramite MCP', 'Supervisione umana sui passaggi critici'],
    det_link='Scopri gli agenti AI', det_href='agenti-ai.html',
    run_title='Esecuzione · Solleciti delle fatture scadute',
    run_rows=[('done', 'Lette 42 fatture scadute dal gestionale'), ('done', 'Bozze di sollecito preparate (42)'), ('wait', '3 casi sopra €5.000 in attesa di approvazione')],
    run_foot='Esempio · Ultimo aggiornamento 09:41',
    pk_eyebrow='Percorsi di consulenza', pk_h2='Un percorso a prezzo fisso, definito prima di iniziare.',
    pk_lead='Tre percorsi per PMI da 10 a 500 dipendenti. KPI concordati per iscritto, prezzi IVA esclusa.',
    packages=[('AI Accelerator', '€15.000 – €25.000', '3 mesi', 'Per chi parte da zero.', ['Audit AI iniziale', '2–3 automazioni pronte all’uso', 'Formazione del team', 'Dashboard ROI'], 'servizi.html#ai-accelerator'),
              ('AI Transformation', '€50.000 – €70.000', '6 mesi', 'Per estendere l’AI a più processi.', ['5–7 automazioni', '2–3 soluzioni su misura', 'Formazione fino a 15 persone', 'Change management incluso'], 'servizi.html#ai-transformation'),
              ('AI Partnership', 'da €100.000', '12 mesi', 'Per fare dell’AI un vantaggio duraturo.', ['Team dedicato', 'Modelli AI su misura', 'Nessun limite al numero di automazioni', 'Strategia AI continuativa'], 'servizi.html#ai-partnership')],
    pk_note='Garanzia contrattuale: se entro 12 mesi non raggiungiamo un ROI del 150%, continuiamo a lavorare senza costi aggiuntivi.',
    pk_link='Confronta i percorsi', pk_href='servizi.html', pk_card_link='Scopri',
    dk_eyebrow='On-premise', dk_h2='I tuoi dati restano in azienda.',
    dk_body='Ogni soluzione può girare interamente sui tuoi server: nessun dato nel cloud di terzi, conformità al GDPR e all’AI Act, piena sovranità su modelli e documenti.',
    dk_btn='L’approccio on-premise', dk_href='prodotti.html', dk_chips=['Conformità GDPR', 'Latenza < 200 ms', 'Nessun dato su server terzi'],
    pf_eyebrow='Risultati', pf_h2='Cosa dicono le PMI che lavorano con noi.',
    testimonials=[('Con l’AI Accelerator abbiamo automatizzato la digitalizzazione dei menu e le traduzioni multilingua, riducendo i tempi del 60%. In 6 mesi abbiamo aumentato i ristoranti partner del 40% con dati concreti e misurabili.', 'PR', 'Pietro Ruffoni', 'CEO & Founder, MyCia'),
                  ('Gli AI Agents che abbiamo implementato gestiscono il 70% delle richieste H24, migliorando la soddisfazione clienti del 45%. La piattaforma conversazionale AI ha ridotto i tempi di risposta dell’80% con risultati misurabili e documentati.', 'MP', 'Michele Pomposo', 'Co-Founder & COO, Tiledesk')],
    stats=[('50+', 'PMI seguite dal 2023'), ('2–4', 'settimane ai primi risultati'), ('2', 'sedi: Latiano (BR) e Bergamo'), ('2 ore', 'per la prima risposta, lun–ven')],
    fd_eyebrow='Chi siamo', fd_h3='Gregor Marić, CEO & Founder',
    fd_body='Ex Senior Manager di KPMG Italia e Managing Director di INVOKE, autore di «Oltre il divario digitale». Ha fondato PugliAI nel 2023 per portare l’AI nelle PMI italiane con progetti a prezzo fisso e risultati misurabili.',
    fd_link='Conosci il team', fd_href='chi-siamo.html', fd_alt='Gregor Marić presenta la visione di PugliAI a un evento',
    faq_title='Domande frequenti',
    faq=[('Quanto tempo richiede un progetto AI con PugliAI?', 'Le automazioni pronte all’uso sono attive in 2–4 settimane. Un percorso completo dura da 3 mesi (AI Accelerator) a 12 mesi (AI Partnership), con formazione del team in parallelo e KPI verificati a ogni tappa.'),
         ('Quali requisiti tecnici servono per iniziare?', 'Nessuna competenza tecnica interna. Servono una connessione stabile, l’accesso ai sistemi già in uso (gestionale, CRM) e la disponibilità del team per la formazione. Per le soluzioni on-premise valutiamo insieme i server disponibili.'),
         ('Come funziona la garanzia di ROI del 150%?', 'Prima dell’avvio definiamo insieme KPI misurabili (tempo risparmiato, costi, errori, vendite) e li scriviamo nel contratto. Se entro 12 mesi il ROI del 150% non viene raggiunto, continuiamo a lavorare senza costi aggiuntivi fino all’obiettivo.'),
         ('Come vengono protetti i dati aziendali?', 'Le soluzioni on-premise elaborano tutto sui server dell’azienda. In ogni caso applichiamo il GDPR e l’AI Act europeo, firmiamo accordi di riservatezza prima di ogni progetto e manteniamo un registro delle attività degli agenti.')],
    cta_h2='Parliamo della tua impresa.',
    cta_body='45 minuti con un consulente PugliAI: analisi dei processi, opportunità prioritarie e un report scritto con la stima del ROI. Gratuita e senza impegno.',
    cta_btn='Prenota la sessione strategica', cta_mail='Scrivi a sales@pugliai.com',
)

EN = dict(
    title='PugliAI — AI consulting, agents and on-premise infrastructure for Italian SMEs',
    description='Fixed-price AI consulting, autonomous AI agents and on-premise products for Italian small and mid-sized companies. Offices in Latiano (BR) and Bergamo. First results in 2–4 weeks.',
    h1='Artificial intelligence at work in your business.',
    sub='Consulting, AI agents and on-premise infrastructure for Italian small and mid-sized companies. First results in 2–4 weeks.',
    cta='Book your free strategy session', cta_href='strategy-session.html', ghost='See how we work', ghost_href='services.html',
    cardA_title='Customer service agent', cardA_sub='PugliAI · sample run', cardA_tag='Active', cardA_num='128',
    cardA_numlabel='requests handled today', cardA_bar='94% resolved without human intervention', cardA_note='Human review on critical steps',
    cardB_title='Strategy session', cardB_sub='45 minutes · free · no commitment',
    cardB_items=['Review of your key processes', 'Priority AI opportunities', 'Written report with ROI estimate'], cardB_btn='Book',
    logos_caption='SMEs and partners we work with',
    answer_lead='<strong>PugliAI is an Italian AI consulting firm</strong> that helps small and mid-sized companies adopt artificial intelligence with fixed-price programmes, autonomous AI agents and products installed on the company’s own servers. Based in Latiano (Brindisi) and Bergamo, it serves the whole of Italy in Italian and English.',
    answer_facts=[('What we do', 'AI strategy consulting, autonomous AI agents, on-premise MCP hosting, ready-made automations and team training.'),
                  ('Who it is for', 'Italian SMEs with 10 to 500 employees and startups (through the PugliAI Accelerator).'),
                  ('Pricing', 'Programmes from €15,000 to over €100,000, quoted before the start. On-premise products from €290/month.'),
                  ('Timing', 'First results in 2–4 weeks with ready-made automations.'),
                  ('Guarantee', '150% ROI within 12 months, measured on KPIs agreed in writing: if we miss it, we keep working at no extra cost.'),
                  ('Data', 'On-premise option: data stays on the company’s servers. GDPR and EU AI Act compliance.'),
                  ('Contact', 'sales@pugliai.com — reply within 2 business hours, Mon–Fri 9:00–18:00 CET.')],
    answer_meta=f'Founded in 2023 · 50+ SMEs supported since 2023 · By <a href="gregor-maric.html">Gregor Marić, CEO &amp; Founder</a> · Last updated: {UPDATED_EN}',
    prod_eyebrow='On-premise products', prod_h2='Four ready-made solutions, installed on your servers.',
    prod_lead='Every product runs inside your own infrastructure: data never leaves the company and costs are set upfront.',
    tabs=[('mic', 'VoiceAI', 'Switchboard and voice assistance', 'voiceai-on-premise.html'),
          ('book', 'KnowledgeAI', 'Chat with company documents', 'knowledgeai-enterprise.html'),
          ('plug', 'MCP Hosting', 'Connect AI to your systems', 'mcp-hosting.html'),
          ('bolt', 'AI Agents', 'Processes executed end-to-end', 'ai-agents.html')],
    det_tag='New in 2026 · from €490/month', det_h3='Autonomous AI agents',
    det_body='Not simple chatbots: agents that read data from your systems, plan and execute complete tasks across several tools, then report back to you.',
    det_items=['Execute end-to-end processes, not just answers', 'Connect to your ERP, CRM and management software via MCP', 'Human oversight on critical steps'],
    det_link='Explore AI agents', det_href='ai-agents.html',
    run_title='Run · Overdue invoice reminders',
    run_rows=[('done', 'Read 42 overdue invoices from the ERP'), ('done', 'Reminder drafts prepared (42)'), ('wait', '3 cases above €5,000 awaiting approval')],
    run_foot='Sample · Last update 09:41',
    pk_eyebrow='Consulting programmes', pk_h2='A fixed-price programme, defined before we start.',
    pk_lead='Three formats for companies with 10 to 500 employees. KPIs agreed in writing, prices in euro, VAT excluded.',
    packages=[('AI Accelerator', '€15,000 – €25,000', '3 months', 'For companies starting from zero.', ['Initial AI audit', '2–3 ready-made automations', 'Team training', 'ROI dashboard'], 'services.html#ai-accelerator'),
              ('AI Transformation', '€50,000 – €70,000', '6 months', 'To extend AI to more processes.', ['5–7 automations', '2–3 custom solutions', 'Training for up to 15 people', 'Change management included'], 'services.html#ai-transformation'),
              ('AI Partnership', 'from €100,000', '12 months', 'To make AI a lasting advantage.', ['Dedicated team', 'Custom AI models', 'No limit on the number of automations', 'Ongoing AI strategy'], 'services.html#ai-partnership')],
    pk_note='Contractual guarantee: if 150% ROI is not reached within 12 months, we keep working at no extra cost.',
    pk_link='Compare programmes', pk_href='services.html', pk_card_link='Learn more',
    dk_eyebrow='On-premise', dk_h2='Your data stays in your company.',
    dk_body='Every solution can run entirely on your servers: no data in third-party clouds, GDPR and AI Act compliance, full sovereignty over models and documents.',
    dk_btn='The on-premise approach', dk_href='products.html', dk_chips=['GDPR compliant', 'Latency < 200 ms', 'No third-party servers'],
    pf_eyebrow='Results', pf_h2='What the companies we work with say.',
    testimonials=[('With the AI Accelerator we automated menu digitisation and multilingual translations, cutting turnaround by 60%. In 6 months we increased our partner restaurants by 40%, with concrete, measurable data.', 'PR', 'Pietro Ruffoni', 'CEO & Founder, MyCia'),
                  ('The AI Agents we implemented handle 70% of requests 24/7, improving customer satisfaction by 45%. The conversational AI platform cut response times by 80%, with measurable, documented results.', 'MP', 'Michele Pomposo', 'Co-Founder & COO, Tiledesk')],
    stats=[('50+', 'SMEs supported since 2023'), ('2–4', 'weeks to first results'), ('2', 'offices: Latiano (BR) and Bergamo'), ('2 h', 'to a first reply, Mon–Fri')],
    fd_eyebrow='About us', fd_h3='Gregor Marić, CEO & Founder',
    fd_body='Former Senior Manager at KPMG Italy and Managing Director at INVOKE, author of «Oltre il divario digitale». He founded PugliAI in 2023 to bring AI to Italian SMEs with fixed-price projects and measurable results.',
    fd_link='Meet the team', fd_href='about-us.html', fd_alt='Gregor Marić presenting the PugliAI vision at an event',
    faq_title='Frequently asked questions',
    faq=[('How long does an AI project with PugliAI take?', 'Ready-made automations go live in 2–4 weeks. A full programme lasts from 3 months (AI Accelerator) to 12 months (AI Partnership), with team training in parallel and KPIs checked at every stage.'),
         ('What technical requirements do we need to start?', 'No in-house technical skills. You need a stable connection, access to the systems you already use (ERP, CRM) and your team’s availability for training. For on-premise solutions we assess the available servers together.'),
         ('How does the 150% ROI guarantee work?', 'Before the start we agree measurable KPIs (time saved, costs, errors, sales) and write them into the contract. If 150% ROI is not reached within 12 months, we keep working at no extra cost until the target is met.'),
         ('How is company data protected?', 'On-premise solutions process everything on the company’s servers. In every case we apply GDPR and the EU AI Act, sign confidentiality agreements before each project and keep a log of agent activity.')],
    cta_h2='Let’s talk about your business.',
    cta_body='45 minutes with a PugliAI consultant: process review, priority opportunities and a written report with an ROI estimate. Free and without obligation.',
    cta_btn='Book the strategy session', cta_mail='Email sales@pugliai.com',
)

LOGOS = [('clients/mycia_logo.svg', 'MyCia'), ('clients/tiledesk-logo.png', 'Tiledesk'), ('clients/comtel.png', 'Comtel'),
         ('partners/assist_digital_logo.png', 'Assist Digital'), ('clients/bcc_studio_logo.png', 'BCC Studio'), ('partners/plug_and_play_logo.png', 'Plug and Play')]


def glass_agent(c):
    return glass(
        f'<div class="glass__head">{avatar("AI")}<div style="flex:1;min-width:0;"><p class="label">{esc(c["cardA_title"])}</p>'
        f'<p class="caption">{esc(c["cardA_sub"])}</p></div>{tag(c["cardA_tag"])}</div>'
        f'<p class="glass__num">{esc(c["cardA_num"])}</p><p class="caption muted" style="margin:4px 0 0;">{esc(c["cardA_numlabel"])}</p>'
        f'<div class="bar" role="img" aria-label="94%"><span style="width:94%"></span></div>'
        f'<p class="body-sm" style="margin:0;">{esc(c["cardA_bar"])}</p><p class="caption muted" style="margin:4px 0 0;">{esc(c["cardA_note"])}</p>',
        'hero-photo__card hero-photo__card--top')


def glass_session(c):
    return glass(
        f'<div class="glass__head">{icon_badge("calendar")}<div><p class="label">{esc(c["cardB_title"])}</p><p class="caption">{esc(c["cardB_sub"])}</p></div></div>'
        f'{checks(c["cardB_items"], "checks--sm")}<a class="btn btn--primary btn--sm" href="{esc(c["cta_href"])}">{esc(c["cardB_btn"])}{icon("arrow", 14, 1.75)}</a>',
        'hero-photo__card hero-photo__card--bottom')


def run_log(c):
    rows = ''.join(f'<li class="runlog__row"><span class="runlog__dot{" runlog__dot--wait" if s == "wait" else ""}" aria-hidden="true"></span><span>{esc(t)}</span></li>' for s, t in c['run_rows'])
    return glass(f'<p class="label" style="display:flex;align-items:center;gap:8px;margin:0 0 12px;font-size:13px;">{icon("bolt", 16, 1.75)}{esc(c["run_title"])}</p>'
                 f'<ul class="runlog">{rows}</ul><p class="caption muted" style="margin:0;">{esc(c["run_foot"])}</p>', 'panel__glass')


def build(lang):
    c = IT if lang == 'it' else EN
    path = 'index.html' if lang == 'it' else 'en/index.html'
    alt = 'en/index.html' if lang == 'it' else 'index.html'
    page = Page(lang=lang, path=path, title=c['title'], description=c['description'], alt=alt, chat=True)
    a = page.asset
    hero_img = a('src/assets/img/2026/hero-masseria.jpg')
    page.extra_head = f'\n    <link rel="preload" as="image" href="{hero_img}" fetchpriority="high">'

    hero = (f'<section class="hero-photo"><img class="hero-photo__media" src="{hero_img}" alt="" width="1920" height="960" fetchpriority="high">'
            f'<div class="hero-photo__scrim" aria-hidden="true"></div><div class="hero-photo__inner">'
            f'<h1 class="display hero-photo__title">{esc(c["h1"])}</h1><p class="sub hero-photo__sub">{esc(c["sub"])}</p>'
            f'<div class="hero-photo__actions">{btn(c["cta"], c["cta_href"])}{ghost_link(c["ghost"], c["ghost_href"])}</div>'
            f'{glass_agent(c)}{glass_session(c)}</div></section>')

    logos = (f'<section class="logo-strip" aria-label="{esc(c["logos_caption"])}"><div class="container"><p class="logo-strip__caption">{esc(c["logos_caption"])}</p>'
             f'<div class="logo-strip__grid">' + ''.join(
                 f'<div class="logo-strip__cell"><img src="{a("src/assets/img/" + f)}" alt="{esc(n)}" loading="lazy"></div>' for f, n in LOGOS) + '</div></div></section>')

    answer = section(answer_block(c['answer_lead'], c['answer_facts'], c['answer_meta']), cls='section--tight section--flush-bottom', container='container--narrow')

    tabs = '<nav class="tabs" aria-label="' + esc(c['prod_eyebrow']) + '">' + ''.join(
        ('<a class="tabs__item is-active" aria-current="true"' if i == 3 else '<a class="tabs__item"') + f' href="{esc(h)}">{icon(ic, 20)}<span><span class="tabs__name">{esc(n)}</span><span class="tabs__desc">{esc(d)}</span></span></a>'
        for i, (ic, n, d, h) in enumerate(c['tabs'])) + '</nav>'
    panel = (f'<div class="panel"><div class="panel__text"><div>{tag(c["det_tag"])}</div><h3 class="h3">{esc(c["det_h3"])}</h3>'
             f'<p class="muted">{esc(c["det_body"])}</p>{checks(c["det_items"])}<div>{link(c["det_link"], c["det_href"])}</div></div>'
             f'<div class="panel__media"><img src="{a("src/assets/img/2026/scrivania.jpg")}" alt="" loading="lazy" width="1600" height="1067">{run_log(c)}</div></div>')
    products = section(section_head(c['prod_eyebrow'], c['prod_h2'], c['prod_lead']) + tabs + panel, id_='prodotti' if lang == 'it' else 'products')

    pk = section(section_head(c['pk_eyebrow'], c['pk_h2'], c['pk_lead']) + grid(
        [price_card(n, p, d, o, items, href, c['pk_card_link']) for n, p, d, o, items, href in c['packages']], 3)
        + f'<div class="packages__note"><p>{esc(c["pk_note"])}</p>{link(c["pk_link"], c["pk_href"])}</div>')

    dark = band(c['dk_eyebrow'], c['dk_h2'], c['dk_body'], c['dk_btn'], c['dk_href'], c['dk_chips'], a('src/assets/img/2026/officina.jpg'))

    proof = section(section_head(c['pf_eyebrow'], c['pf_h2']) + grid([quote_card(*t) for t in c['testimonials']], 2, 'mb-12') + stats(c['stats']))

    founder = section(
        f'<div class="grid grid--5-7 card card--flush" style="gap:0;">'
        f'<img src="{a("src/assets/img/2026/founder-stage.jpg")}" alt="{esc(c["fd_alt"])}" loading="lazy" style="width:100%;height:100%;min-height:280px;object-fit:cover;">'
        f'<div class="stack" style="padding:32px;justify-content:center;">{eyebrow(c["fd_eyebrow"])}<h2 class="h3">{esc(c["fd_h3"])}</h2>'
        f'<p class="muted" style="margin:0;">{esc(c["fd_body"])}</p><div>{link(c["fd_link"], c["fd_href"])}</div></div></div>', cls='section--flush-top')

    faqs = faq_section(c['faq'], c['faq_title'])

    cta = cta_band(c['cta_h2'], c['cta_body'], c['cta_btn'], c['cta_href'], c['cta_mail'], 'mailto:sales@pugliai.com')

    body = hero + logos + answer + products + pk + dark + proof + founder + faqs + cta

    products_ld = {'@context': 'https://schema.org', '@type': 'ItemList', 'name': 'Prodotti AI on-premise PugliAI' if lang == 'it' else 'PugliAI on-premise AI products',
                   'url': page.url, 'numberOfItems': 4, 'itemListElement': [
                       {'@type': 'Product', 'position': 1, 'name': 'VoiceAI On-Premise', 'url': url_of(('' if lang == 'it' else 'en/') + 'voiceai-on-premise.html'), 'offers': offer(low=25000, high=75000)},
                       {'@type': 'Product', 'position': 2, 'name': 'KnowledgeAI Enterprise', 'url': url_of(('' if lang == 'it' else 'en/') + 'knowledgeai-enterprise.html'), 'offers': offer(low=30000, high=85000)},
                       {'@type': 'Product', 'position': 3, 'name': 'Hosting MCP On-Premise' if lang == 'it' else 'On-Premise MCP Hosting', 'url': url_of('hosting-mcp.html' if lang == 'it' else 'en/mcp-hosting.html'), 'offers': offer(price=290, unit='MONTH')},
                       {'@type': 'Product', 'position': 4, 'name': 'Agenti AI autonomi' if lang == 'it' else 'Autonomous AI agents', 'url': url_of('agenti-ai.html' if lang == 'it' else 'en/ai-agents.html'), 'offers': offer(price=490, unit='MONTH')}]}
    page.jsonld = [ld_website(lang), ld_org(lang), ld_webpage(page, c['title']), products_ld, ld_faq(c['faq'])]
    return page, body
