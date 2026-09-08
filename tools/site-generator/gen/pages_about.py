"""Chi siamo / About us and founder profile (IT/EN)."""
from .html import *
from .site import Page, ld_org, ld_webpage, ld_faq, ld_person, ld_breadcrumb, url_of, UPDATED_IT, UPDATED_EN, SITE, ORG
from .templates import CTA_DEFAULT, FAQ_TITLE

IT = dict(
    path='chi-siamo.html', alt='en/about-us.html',
    title='Chi siamo: consulenza AI per le PMI italiane | PugliAI',
    description='Consulenza AI fondata nel 2023 da Gregor Marić, con sedi a Latiano (BR) e Bergamo: affianchiamo le PMI italiane con percorsi AI a prezzo fisso.',
    eyebrow='Chi siamo', h1='Un team italiano che porta l’AI nelle PMI.',
    lead='Fondata nel 2023 da Gregor Marić, PugliAI ha sede a Latiano (Brindisi) e a Bergamo. Affianchiamo le piccole e medie imprese italiane nell’adozione dell’intelligenza artificiale.',
    photo_alt='Il team PugliAI riunito all’aperto in una masseria pugliese', photo_caption='Il team al lavoro in masseria, in Puglia',
    answer_lead='<strong>PugliAI è una società di consulenza AI italiana fondata nel 2023 da Gregor Marić.</strong> Ha sede legale a Latiano (Brindisi, Puglia) e sede operativa a Bergamo (Lombardia), e affianca le PMI italiane nell’adozione dell’intelligenza artificiale.',
    answer_facts=[('Ragione sociale', 'PugliAI S.r.l. — P.IVA IT02735920742'), ('Fondazione', '2023, da Gregor Marić (CEO & Founder)'),
                  ('Sedi', 'Via Giovanni Forleo 45, 72022 Latiano (BR) · Via Angelo Maj 16, 24121 Bergamo (BG)'),
                  ('Area servita', 'Tutta Italia, con presenza diretta in Puglia e Lombardia. Assistenza in italiano e inglese.'),
                  ('Clienti', '50+ PMI italiane seguite dal 2023 in manifatturiero, moda e lusso, servizi finanziari, sanità e turismo.'),
                  ('Riconoscimenti', 'Vincitori della Comtel Startup Challenge 2024. Microsoft for Startups e Plug and Play Summit nel 2026.'),
                  ('Contatto', 'sales@pugliai.com — risposta entro 2 ore lavorative, lun–ven 9:00–18:00.')],
    answer_meta=f'A cura della redazione PugliAI · Ultimo aggiornamento: {UPDATED_IT}',
    mv=[('La nostra missione', 'Rendere l’intelligenza artificiale accessibile alle PMI italiane, trasformando la complessità tecnologica in risultati concreti e misurabili.'),
        ('La nostra visione', 'Un’Italia in cui imprese, talenti e ricerca collaborano per un’innovazione responsabile e sostenibile.')],
    tl_eyebrow='La nostra storia', tl_h2='Dal 2023, un passo alla volta.',
    timeline=[('2023', 'Fondazione', 'PugliAI nasce a Latiano (BR) con l’obiettivo di portare l’AI nelle PMI italiane.'),
              ('2024', 'Primi riconoscimenti', 'Partnership con Feedel Ventures, vittoria alla Comtel Startup Challenge, distribuzione esclusiva di Automa per l’Italia.'),
              ('2025', 'Oltre 50 PMI seguite', 'Progetti in manifatturiero, moda e lusso, servizi finanziari, sanità e turismo.'),
              ('2026', 'Ecosistema e certificazioni', 'Microsoft for Startups, Plug and Play Summit in Germania, certificazione ISO/IEC 42001 per la gestione dell’AI.')],
    fd_eyebrow='Il fondatore', fd_h3='Gregor Marić, CEO & Founder',
    fd_body='Imprenditore e autore di «Oltre il divario digitale», ha dedicato la sua carriera all’automazione dei processi e all’AI applicata. Con PugliAI crea un ponte tra l’innovazione globale e le esigenze concrete delle imprese italiane.',
    fd_items=['Ex Senior Manager di KPMG Italia e Managing Director di INVOKE', 'Fondatore di ProcessLenz', 'Speaker su AI, RPA e trasformazione digitale'],
    fd_link='Profilo completo', fd_href='gregor-maric.html', fd_alt='Gregor Marić presenta la visione di PugliAI a un evento',
    partners_eyebrow='Partner e alleanze', partners_h2='Un ecosistema che moltiplica il valore.',
    partners=[('Feedel Ventures', 'Partner strategico dal 2024: accesso a un ecosistema di startup e innovazione.'),
              ('OpenWork (Jamio)', 'Integrazione dei nostri agenti AI nella piattaforma BPM Jamio per orchestrare i processi.'),
              ('Automa', 'Distributori esclusivi per l’Italia della piattaforma RPA Automa.'),
              ('Comtel', 'Collaborazione nata dalla vittoria della Startup Challenge 2024 nel settore delle telecomunicazioni.'),
              ('Get Your Grant', 'Spin-off nato da PugliAI per semplificare l’accesso ai fondi Erasmus con l’AI.'),
              ('Hausme', 'Agenti AI su misura per una startup del settore immobiliare.')],
    life_h3='Lavorare in PugliAI', life_caption1='Riunione del team nella masseria che ci ospita', life_caption2='Uliveti tra Latiano e Brindisi: qui è nata PugliAI',
    rec_eyebrow='Riconoscimenti', recs=[('star', 'Comtel Startup Challenge', 'Vincitori 2024'), ('cpu', 'Microsoft for Startups', 'Membri dal 2026'), ('plane', 'Plug and Play Summit', 'Selezionati, Germania 2026'), ('shield', 'ISO/IEC 42001', 'Gestione dell’AI, 2026')],
    info_h3='Informazioni societarie',
    info=[('Ragione sociale', 'PugliAI S.r.l.'), ('P.IVA', 'IT02735920742'), ('REA', 'BR-170874'), ('Capitale sociale', '€10.000 i.v.'),
          ('Sede legale', 'Via Giovanni Forleo 45, 72022 Latiano (BR)'), ('Sede operativa', 'Via Angelo Maj 16, 24121 Bergamo (BG)')],
    faq=[('Chi è PugliAI e cosa fa?', 'Una società di consulenza AI italiana specializzata nelle PMI. Fondata nel 2023, con sedi a Latiano (Brindisi) e Bergamo, aiuta le piccole e medie imprese ad adottare l’intelligenza artificiale con percorsi a prezzo fisso a partire da €15.000 e una garanzia di ROI del 150% definita nel contratto.'),
         ('Quante aziende ha seguito PugliAI?', 'Dal 2023 oltre 50 PMI italiane in diversi settori: manifatturiero, moda e lusso, servizi finanziari, sanità e turismo. Su ogni progetto i KPI vengono definiti prima dell’avvio e messi per iscritto nel contratto.'),
         ('Chi ha fondato PugliAI?', 'Gregor Marić, imprenditore con oltre quindici anni di esperienza nell’automazione e nell’AI, autore del libro «Oltre il divario digitale», fondatore del canale YouTube RPA Champion e vincitore della Comtel Startup Challenge 2024.'),
         ('Dove si trovano gli uffici?', 'Sede legale a Latiano (Brindisi) in Via Giovanni Forleo 45 e sede operativa a Bergamo in Via Angelo Maj 16. Serviamo clienti in tutta Italia, con particolare presenza in Puglia e Lombardia.')],
)

EN = dict(
    path='en/about-us.html', alt='chi-siamo.html',
    title='About us: the AI consulting team for Italian SMEs | PugliAI',
    description='AI consulting firm founded in 2023 by Gregor Marić, based in Latiano (Brindisi) and Bergamo: we help Italian SMEs adopt AI with fixed-price programmes.',
    eyebrow='About us', h1='An Italian team bringing AI to SMEs.',
    lead='Founded in 2023 by Gregor Marić, PugliAI is based in Latiano (Brindisi) and Bergamo. We support Italian small and mid-sized companies in adopting artificial intelligence.',
    photo_alt='The PugliAI team gathered outdoors at a farmhouse in Puglia', photo_caption='The team at work in a masseria, Puglia',
    answer_lead='<strong>PugliAI is an Italian AI consulting firm founded in 2023 by Gregor Marić.</strong> Its registered office is in Latiano (Brindisi, Puglia) and its operating office in Bergamo (Lombardy); it supports Italian SMEs in adopting artificial intelligence.',
    answer_facts=[('Company name', 'PugliAI S.r.l. — VAT IT02735920742'), ('Founded', '2023, by Gregor Marić (CEO & Founder)'),
                  ('Offices', 'Via Giovanni Forleo 45, 72022 Latiano (BR) · Via Angelo Maj 16, 24121 Bergamo (BG)'),
                  ('Area served', 'All of Italy, with a direct presence in Puglia and Lombardy. Support in Italian and English.'),
                  ('Clients', '50+ Italian SMEs supported since 2023 in manufacturing, fashion and luxury, financial services, healthcare and tourism.'),
                  ('Recognition', 'Winners of the Comtel Startup Challenge 2024. Microsoft for Startups and Plug and Play Summit in 2026.'),
                  ('Contact', 'sales@pugliai.com — reply within 2 business hours, Mon–Fri 9:00–18:00 CET.')],
    answer_meta=f'By the PugliAI editorial team · Last updated: {UPDATED_EN}',
    mv=[('Our mission', 'To make artificial intelligence accessible to Italian SMEs, turning technological complexity into concrete, measurable results.'),
        ('Our vision', 'An Italy where companies, talent and research work together for responsible, sustainable innovation.')],
    tl_eyebrow='Our story', tl_h2='Since 2023, one step at a time.',
    timeline=[('2023', 'Foundation', 'PugliAI is founded in Latiano (BR) with the goal of bringing AI to Italian SMEs.'),
              ('2024', 'First recognition', 'Partnership with Feedel Ventures, Comtel Startup Challenge win, exclusive distribution of Automa in Italy.'),
              ('2025', 'Over 50 SMEs supported', 'Projects in manufacturing, fashion and luxury, financial services, healthcare and tourism.'),
              ('2026', 'Ecosystem and certifications', 'Microsoft for Startups, Plug and Play Summit in Germany, ISO/IEC 42001 certification for AI management.')],
    fd_eyebrow='The founder', fd_h3='Gregor Marić, CEO & Founder',
    fd_body='Entrepreneur and author of «Oltre il divario digitale», he has devoted his career to process automation and applied AI. With PugliAI he builds a bridge between global innovation and the concrete needs of Italian companies.',
    fd_items=['Former Senior Manager at KPMG Italy and Managing Director at INVOKE', 'Founder of ProcessLenz', 'Speaker on AI, RPA and digital transformation'],
    fd_link='Full profile', fd_href='gregor-maric.html', fd_alt='Gregor Marić presenting the PugliAI vision at an event',
    partners_eyebrow='Partners and alliances', partners_h2='An ecosystem that multiplies value.',
    partners=[('Feedel Ventures', 'Strategic partner since 2024: access to a startup and innovation ecosystem.'),
              ('OpenWork (Jamio)', 'Integration of our AI agents into the Jamio BPM platform to orchestrate processes.'),
              ('Automa', 'Exclusive distributors in Italy of the Automa RPA platform.'),
              ('Comtel', 'Collaboration born from the 2024 Startup Challenge win in the telecommunications sector.'),
              ('Get Your Grant', 'A PugliAI spin-off simplifying access to Erasmus funding with AI.'),
              ('Hausme', 'Custom AI agents for a real-estate startup.')],
    life_h3='Working at PugliAI', life_caption1='Team meeting in the farmhouse that hosts us', life_caption2='Olive groves between Latiano and Brindisi: where PugliAI was born',
    rec_eyebrow='Recognition', recs=[('star', 'Comtel Startup Challenge', 'Winners 2024'), ('cpu', 'Microsoft for Startups', 'Members since 2026'), ('plane', 'Plug and Play Summit', 'Selected, Germany 2026'), ('shield', 'ISO/IEC 42001', 'AI management, 2026')],
    info_h3='Company details',
    info=[('Company name', 'PugliAI S.r.l.'), ('VAT', 'IT02735920742'), ('REA', 'BR-170874'), ('Share capital', '€10,000 fully paid'),
          ('Registered office', 'Via Giovanni Forleo 45, 72022 Latiano (BR)'), ('Operating office', 'Via Angelo Maj 16, 24121 Bergamo (BG)')],
    faq=[('Who is PugliAI and what does it do?', 'An Italian AI consulting firm specialised in SMEs. Founded in 2023, with offices in Latiano (Brindisi) and Bergamo, it helps small and mid-sized companies adopt artificial intelligence with fixed-price programmes from €15,000 and a 150% ROI guarantee defined in the contract.'),
         ('How many companies has PugliAI supported?', 'Over 50 Italian SMEs since 2023 across manufacturing, fashion and luxury, financial services, healthcare and tourism. On every project the KPIs are defined before the start and written into the contract.'),
         ('Who founded PugliAI?', 'Gregor Marić, an entrepreneur with over fifteen years of experience in automation and AI, author of the book «Oltre il divario digitale», founder of the RPA Champion YouTube channel and winner of the Comtel Startup Challenge 2024.'),
         ('Where are the offices?', 'Registered office in Latiano (Brindisi) at Via Giovanni Forleo 45 and operating office in Bergamo at Via Angelo Maj 16. We serve clients across Italy, with a particular presence in Puglia and Lombardy.')],
)


def chi_siamo(lang):
    c = IT if lang == 'it' else EN
    page = Page(lang=lang, path=c['path'], title=c['title'], description=c['description'], alt=c['alt'], chat=True)
    a = page.asset
    head = page_head(c['eyebrow'], c['h1'], c['lead'])
    photo = section(f'<figure class="photo-fig"><img class="photo photo--cover" src="{a("src/assets/img/2026/team-masseria.jpg")}" alt="{esc(c["photo_alt"])}" width="1600" height="700" fetchpriority="high"><figcaption>{esc(c["photo_caption"])}</figcaption></figure>', cls='section--flush-top')
    answer = section(answer_block(c['answer_lead'], c['answer_facts'], c['answer_meta']), cls='section--tight section--flush-bottom', container='container--narrow')
    mv = section(grid([card(f'<h2 class="h4">{esc(t)}</h2><p class="card__text" style="margin-top:12px;">{esc(d)}</p>', cls='card--pad-lg') for t, d in c['mv']], 2))
    tl = section(section_head(c['tl_eyebrow'], c['tl_h2']) + steps([(t, d, y) for y, t, d in c['timeline']], cols=4, years=True), cls='section--white')
    fd = section(
        f'<div class="grid grid--5-7 card card--flush" style="gap:0;">'
        f'<img src="{a("src/assets/img/2026/founder-stage.jpg")}" alt="{esc(c["fd_alt"])}" loading="lazy" style="width:100%;height:100%;min-height:320px;object-fit:cover;">'
        f'<div class="stack" style="padding:40px;justify-content:center;">{eyebrow(c["fd_eyebrow"])}<h2 class="h3">{esc(c["fd_h3"])}</h2>'
        f'<p class="muted" style="margin:0;">{esc(c["fd_body"])}</p>{checks(c["fd_items"], "checks--sm")}'
        f'<div class="cluster">{link(c["fd_link"], c["fd_href"])}<a class="btn btn--ghost" href="{ORG["founder_linkedin"]}" rel="noopener" target="_blank">LinkedIn</a></div></div></div>')
    partners = section(section_head(c['partners_eyebrow'], c['partners_h2']) + grid([card(f'<h3 class="h5" style="margin:0 0 8px;">{esc(n)}</h3><p class="card__text body-sm">{esc(d)}</p>') for n, d in c['partners']], 3), cls='section--flush-top')
    life = section(f'<h2 class="h3 mb-8">{esc(c["life_h3"])}</h2><div class="grid grid--2">'
                   f'<figure class="photo-fig"><img class="photo photo--tall" src="{a("src/assets/img/2026/team-olive-arch.jpg")}" alt="" loading="lazy" width="1200" height="900"><figcaption>{esc(c["life_caption1"])}</figcaption></figure>'
                   f'<figure class="photo-fig"><img class="photo photo--tall" src="{a("src/assets/img/2026/uliveti.jpg")}" alt="" loading="lazy" width="1600" height="900"><figcaption>{esc(c["life_caption2"])}</figcaption></figure></div>', cls='section--flush-top')
    recs = ''.join(f'<div class="card" style="display:flex;align-items:center;gap:14px;padding:20px 24px;">{icon_badge(ic)}<div><p class="label" style="margin:0;">{esc(t)}</p><p class="caption muted" style="margin:0;">{esc(d)}</p></div></div>' for ic, t, d in c['recs'])
    info = card(f'<h2 class="h4" style="margin-bottom:24px;">{esc(c["info_h3"])}</h2>{spec_grid(c["info"], 3)}', cls='card--pad-lg')
    recsec = section(eyebrow(c['rec_eyebrow']) + f'<div class="grid grid--4 mb-12" style="gap:16px;">{recs}</div>' + info, cls='section--flush-top')
    faqs = faq_section(c['faq'], FAQ_TITLE[lang])
    d = CTA_DEFAULT[lang]
    cta = cta_band(d['h2'], d['lead'], d['btn'], d['href'], d['ghost'], 'mailto:sales@pugliai.com')
    body = head + photo + answer + mv + tl + fd + partners + life + recsec + faqs + cta
    org = ld_org(lang)
    org['@type'] = ['Organization', 'ProfessionalService'] if False else 'Organization'
    page.jsonld = [ld_webpage(page, c['title'], types='AboutPage', extra={'mainEntity': {'@id': SITE + '/#organization'}}), org, ld_person(), ld_faq(c['faq'])]
    return page, body


# ---------------------------------------------------------------- founder

FD_IT = dict(
    path='gregor-maric.html', alt='en/gregor-maric.html',
    title='Gregor Marić — Fondatore e CEO di PugliAI | PugliAI',
    description='Fondatore e CEO di PugliAI, autore di «Oltre il divario digitale» e speaker: da oltre quindici anni lavora su automazione e AI applicate ai processi aziendali.',
    eyebrow='Il fondatore', h1='Gregor Marić, fondatore e CEO di PugliAI.',
    lead='Imprenditore, autore e speaker. Da oltre quindici anni lavora su automazione e intelligenza artificiale applicate ai processi aziendali; dal 2023 guida PugliAI nell’adozione dell’AI da parte delle PMI italiane.',
    img_alt='Gregor Marić parla al microfono durante un evento',
    facts=[('Ruolo', 'Co-Founder e CEO di PugliAI S.r.l.'), ('Esperienza', 'Oltre quindici anni in intelligenza artificiale e automazione dei processi aziendali.'),
           ('Percorso', 'Ex Senior Manager in KPMG Italia e Managing Director di INVOKE. Ha fondato ProcessLenz, poi acquisita.'),
           ('Formazione', 'Bachelor in International Economics, American University of Paris.'),
           ('Autore', '«Oltre il divario digitale», libro sulla trasformazione digitale delle imprese italiane.'),
           ('Riconoscimenti', 'Vincitore della Comtel Startup Challenge 2024 con PugliAI.'),
           ('Divulgazione', 'Fondatore del canale YouTube RPA Champion; speaker su AI, RPA e trasformazione digitale.'),
           ('Lingue', 'Italiano, inglese.'), ('Contatto', 'sales@pugliai.com')],
    story_eyebrow='Il percorso', story_h2='Dal processo alla tecnologia, non il contrario.',
    story=['Gregor Marić ha costruito la propria carriera sull’automazione dei processi, molto prima che l’intelligenza artificiale generativa diventasse un tema da consiglio di amministrazione. Questo percorso spiega l’approccio di PugliAI: partire dal processo, non dalla tecnologia.',
           'Arriva alla consulenza AI dalla consulenza tradizionale: Senior Manager in KPMG Italia, poi Managing Director di INVOKE. Nel frattempo fonda ProcessLenz, da cui esce con un’acquisizione. È la combinazione di metodo da grande società di consulenza ed esperienza diretta da imprenditore che definisce il modo di lavorare di PugliAI con le PMI.',
           'Nel 2023 fonda PugliAI con un obiettivo preciso: rendere l’AI accessibile alle piccole e medie imprese italiane, spina dorsale dell’economia del Paese ma raramente dotate dei budget e dei team interni delle grandi aziende. Nel 2024 PugliAI vince la Comtel Startup Challenge.',
           'Con il libro «Oltre il divario digitale» e il canale YouTube RPA Champion porta lo stesso lavoro sul piano divulgativo, in italiano e per un pubblico di imprenditori e manager.'],
    areas_eyebrow='Aree di competenza', areas_h2='I temi su cui lavora ogni giorno con le PMI.',
    areas=[('bolt', 'Agenti AI e automazione', 'Progettazione di agenti che eseguono processi end-to-end sui sistemi aziendali.', 'agenti-ai.html', 'Agenti AI'),
           ('server', 'Infrastrutture AI', 'Architetture on-premise e ibride per aziende con vincoli di sovranità del dato.', 'infrastrutture-ai.html', 'Infrastrutture AI'),
           ('chart', 'Strategia e adozione', 'Roadmap AI, business case e change management per PMI.', 'consulenza-strategica.html', 'Consulenza strategica')],
    links=[('LinkedIn', ORG['founder_linkedin']), ('Il libro', 'https://oltreildivariodigitale.it/')],
    cta_h2='Parliamo del tuo processo.', cta_lead='Una sessione strategica gratuita per capire dove l’AI può produrre un risultato misurabile nella tua azienda.', cta_btn='Prenota la sessione', cta_href='sessione-strategica.html',
)

FD_EN = dict(
    path='en/gregor-maric.html', alt='gregor-maric.html',
    title='Gregor Marić — Founder and CEO of PugliAI | PugliAI',
    description='Founder and CEO of PugliAI, author of «Oltre il divario digitale» and speaker: over fifteen years of automation and AI applied to business processes.',
    eyebrow='The founder', h1='Gregor Marić, founder and CEO of PugliAI.',
    lead='Entrepreneur, author and speaker. For over fifteen years he has worked on automation and artificial intelligence applied to business processes; since 2023 he has led PugliAI in helping Italian SMEs adopt AI.',
    img_alt='Gregor Marić speaking into a microphone at an event',
    facts=[('Role', 'Co-Founder and CEO of PugliAI S.r.l.'), ('Experience', 'Over fifteen years in artificial intelligence and business process automation.'),
           ('Career', 'Former Senior Manager at KPMG Italy and Managing Director at INVOKE. Founded ProcessLenz, later acquired.'),
           ('Education', 'Bachelor in International Economics, American University of Paris.'),
           ('Author', '«Oltre il divario digitale», a book on the digital transformation of Italian companies.'),
           ('Recognition', 'Winner of the Comtel Startup Challenge 2024 with PugliAI.'),
           ('Outreach', 'Founder of the RPA Champion YouTube channel; speaker on AI, RPA and digital transformation.'),
           ('Languages', 'Italian, English.'), ('Contact', 'sales@pugliai.com')],
    story_eyebrow='The journey', story_h2='From process to technology, not the other way round.',
    story=['Gregor Marić built his career on process automation, long before generative AI became a boardroom topic. That journey explains PugliAI’s approach: start from the process, not from the technology.',
           'He came to AI consulting from traditional consulting: Senior Manager at KPMG Italy, then Managing Director at INVOKE. Meanwhile he founded ProcessLenz, which he exited through an acquisition. It is the combination of big-firm method and first-hand entrepreneurial experience that defines how PugliAI works with SMEs.',
           'In 2023 he founded PugliAI with a precise goal: to make AI accessible to Italian small and mid-sized companies, the backbone of the country’s economy but rarely equipped with the budgets and in-house teams of large corporations. In 2024 PugliAI won the Comtel Startup Challenge.',
           'With the book «Oltre il divario digitale» and the RPA Champion YouTube channel he brings the same work to a wider audience of entrepreneurs and managers, in Italian.'],
    areas_eyebrow='Areas of expertise', areas_h2='The topics he works on every day with SMEs.',
    areas=[('bolt', 'AI agents and automation', 'Design of agents that run end-to-end processes on business systems.', 'ai-agents.html', 'AI agents'),
           ('server', 'AI infrastructure', 'On-premise and hybrid architectures for companies with data-sovereignty constraints.', 'ai-infrastructure.html', 'AI infrastructure'),
           ('chart', 'Strategy and adoption', 'AI roadmap, business case and change management for SMEs.', 'strategic-consulting.html', 'Strategic consulting')],
    links=[('LinkedIn', ORG['founder_linkedin']), ('The book', 'https://oltreildivariodigitale.it/')],
    cta_h2='Let’s talk about your process.', cta_lead='A free strategy session to understand where AI can produce a measurable result in your company.', cta_btn='Book the session', cta_href='strategy-session.html',
)


def founder(lang):
    c = FD_IT if lang == 'it' else FD_EN
    page = Page(lang=lang, path=c['path'], title=c['title'], description=c['description'], alt=c['alt'], chat=True)
    a = page.asset
    links_html = ''.join(f'<a class="btn btn--secondary" href="{esc(h)}" rel="noopener" target="_blank">{esc(l)}</a>' for l, h in c['links'])
    hero = inner_hero(c['eyebrow'], c['h1'], c['lead'], links_html, a('src/assets/img/2026/founder-stage.jpg'), c['img_alt'], img_w=1200, img_h=800)
    facts = section(card(f'<dl class="answer-block__facts" style="margin:0;">' + ''.join(f'<dt>{esc(k)}</dt><dd>{esc(v)}</dd>' for k, v in c['facts']) + '</dl>', cls='card--pad-lg'), cls='section--tight section--flush-bottom', container='container--narrow')
    story = section(section_head(c['story_eyebrow'], c['story_h2']) + '<div class="prose" style="max-width:760px;">' + ''.join(f'<p>{esc(p)}</p>' for p in c['story']) + '</div>', container='container--narrow')
    areas = section(section_head(c['areas_eyebrow'], c['areas_h2']) + grid([feature_card(*it) for it in c['areas']], 3), cls='section--white')
    cta = cta_band(c['cta_h2'], c['cta_lead'], c['cta_btn'], c['cta_href'], 'sales@pugliai.com', 'mailto:sales@pugliai.com')
    body = hero + facts + story + areas + cta
    person = ld_person()
    person['description'] = c['description']
    person['image'] = SITE + '/src/assets/img/2026/founder-stage.jpg'
    page.jsonld = [ld_webpage(page, c['title'], types='ProfilePage', extra={'mainEntity': {'@id': SITE + '/gregor-maric.html#person'}}), person,
                   ld_breadcrumb([('Home', url_of('index.html' if lang == 'it' else 'en/index.html')), ('Chi siamo' if lang == 'it' else 'About us', url_of('chi-siamo.html' if lang == 'it' else 'en/about-us.html')), ('Gregor Marić', page.url)])]
    return page, body


def build_all():
    for lang in ('it', 'en'):
        yield chi_siamo(lang)
        yield founder(lang)
