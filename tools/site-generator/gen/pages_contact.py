"""Contact page, strategy-session landing, success and login pages (IT/EN)."""
from .html import *
from .site import Page, ld_webpage, ld_faq, ld_org, FORMCARRY, SITE, UPDATED_IT, UPDATED_EN, ORG
from .templates import FAQ_TITLE

C_IT = dict(
    path='contatti.html', alt='en/contact.html',
    title='Contatti: prenota la sessione strategica AI gratuita | PugliAI',
    description='Scrivi a sales@pugliai.com o compila il modulo: rispondiamo entro 2 ore lavorative e fissiamo una sessione strategica gratuita di 45 minuti. Sedi a Latiano (BR) e Bergamo.',
    eyebrow='Contatti', h1='Parliamo della tua impresa.',
    lead='Scrivici o prenota la sessione strategica gratuita: rispondiamo entro 2 ore lavorative.',
    answer_lead='<strong>Puoi contattare PugliAI scrivendo a sales@pugliai.com o compilando il modulo in questa pagina.</strong> Rispondiamo entro 2 ore lavorative e fissiamo una sessione strategica AI gratuita di 45 minuti, senza impegno.',
    answer_facts=[('Email', 'sales@pugliai.com — unico indirizzo ufficiale.'), ('Tempi di risposta', 'Entro 2 ore lavorative, lun–ven 9:00–18:00. Le richieste del fine settimana ricevono risposta il lunedì mattina.'),
                  ('Sede legale', 'Via Giovanni Forleo 45, 72022 Latiano (BR), Puglia'), ('Sede operativa', 'Via Angelo Maj 16, 24121 Bergamo (BG), Lombardia'),
                  ('Cosa succede dopo', '1) Risposta entro 2 ore lavorative. 2) Sessione strategica gratuita di 45 minuti. 3) Report scritto con le opportunità AI prioritarie e una stima del ROI.'),
                  ('Costo', 'La sessione strategica è gratuita e senza obbligo di acquisto.'), ('Lingue', 'Italiano e inglese.')],
    answer_meta=f'Ultimo aggiornamento: {UPDATED_IT}',
    form_h2='Prenota la sessione strategica',
    fields=[('Nome e cognome', 'name', 'name', 'text', 'name'), ('Email aziendale', 'email', 'email', 'email', 'email'), ('Azienda', 'company', 'company', 'text', 'organization'), ('Telefono (facoltativo)', 'phone', 'phone', 'tel', 'tel')],
    message='Come possiamo aiutarti?', message_ph='Raccontaci in due righe i processi che vorresti migliorare.',
    consent_html='Ho letto l’<a href="privacy.html" target="_blank" rel="noopener">informativa sulla privacy</a> e acconsento al trattamento dei dati per rispondere alla mia richiesta (Reg. UE 2016/679).',
    submit='Prenota la sessione strategica gratuita', helper='Nessun obbligo di acquisto. Dopo la sessione ricevi un report scritto con le opportunità AI e una stima del ROI.',
    success_h3='Grazie, richiesta ricevuta.', success_p='Ti rispondiamo entro 2 ore lavorative per fissare la sessione.',
    info=[('mail', 'Email', 'sales@pugliai.com'), ('clock', 'Tempi di risposta', 'Entro 2 ore lavorative, lun–ven 9:00–18:00'), ('pin', 'Sede legale', 'Via Giovanni Forleo 45, 72022 Latiano (BR)'), ('pin', 'Sede operativa', 'Via Angelo Maj 16, 24121 Bergamo (BG)')],
    next_h3='Cosa succede dopo', next=['Ti rispondiamo entro 2 ore lavorative.', 'Fissiamo la sessione strategica gratuita di 45 minuti.', 'Ricevi un report scritto con le opportunità AI e una stima del ROI.'],
    faq=[('Cosa devo preparare per la sessione?', 'Una panoramica dei processi principali, le sfide operative, gli obiettivi di crescita e gli strumenti digitali già in uso. Non servono dati tecnici.'),
         ('La sessione è davvero gratuita?', 'Sì, e senza obbligo di acquisto: serve a capire se e da dove conviene partire con l’AI nella tua impresa.'),
         ('In quanto tempo ricevo risposta?', 'Entro 2 ore lavorative, dal lunedì al venerdì dalle 9:00 alle 18:00, spesso prima. Le richieste inviate nel fine settimana ricevono risposta il lunedì mattina.'),
         ('La consulenza è adatta alla mia PMI?', 'Lavoriamo con PMI da 10 a 500 dipendenti in tutti i settori. Durante la sessione valutiamo insieme le opportunità più promettenti per il tuo caso.')],
)

C_EN = dict(
    path='en/contact.html', alt='contatti.html',
    title='Contact: book your free AI strategy session | PugliAI',
    description='Email sales@pugliai.com or fill in the form: we reply within 2 business hours and schedule a free 45-minute strategy session. Offices in Latiano (BR) and Bergamo.',
    eyebrow='Contact', h1='Let’s talk about your business.',
    lead='Write to us or book the free strategy session: we reply within 2 business hours.',
    answer_lead='<strong>You can contact PugliAI by writing to sales@pugliai.com or by filling in the form on this page.</strong> We reply within 2 business hours and schedule a free 45-minute AI strategy session, with no commitment.',
    answer_facts=[('Email', 'sales@pugliai.com — the only official address.'), ('Response time', 'Within 2 business hours, Mon–Fri 9:00–18:00 CET. Weekend requests are answered on Monday morning.'),
                  ('Registered office', 'Via Giovanni Forleo 45, 72022 Latiano (BR), Puglia, Italy'), ('Operating office', 'Via Angelo Maj 16, 24121 Bergamo (BG), Lombardy, Italy'),
                  ('What happens next', '1) Reply within 2 business hours. 2) Free 45-minute strategy session. 3) Written report with priority AI opportunities and an ROI estimate.'),
                  ('Cost', 'The strategy session is free and carries no obligation to buy.'), ('Languages', 'Italian and English.')],
    answer_meta=f'Last updated: {UPDATED_EN}',
    form_h2='Book the strategy session',
    fields=[('Full name', 'name', 'name', 'text', 'name'), ('Business email', 'email', 'email', 'email', 'email'), ('Company', 'company', 'company', 'text', 'organization'), ('Phone (optional)', 'phone', 'phone', 'tel', 'tel')],
    message='How can we help?', message_ph='Tell us in two lines which processes you would like to improve.',
    consent_html='I have read the <a href="privacy.html" target="_blank" rel="noopener">privacy policy</a> and consent to the processing of my data to answer my request (EU Reg. 2016/679).',
    submit='Book the free strategy session', helper='No obligation to buy. After the session you receive a written report with AI opportunities and an ROI estimate.',
    success_h3='Thank you, request received.', success_p='We will reply within 2 business hours to schedule the session.',
    info=[('mail', 'Email', 'sales@pugliai.com'), ('clock', 'Response time', 'Within 2 business hours, Mon–Fri 9:00–18:00 CET'), ('pin', 'Registered office', 'Via Giovanni Forleo 45, 72022 Latiano (BR)'), ('pin', 'Operating office', 'Via Angelo Maj 16, 24121 Bergamo (BG)')],
    next_h3='What happens next', next=['We reply within 2 business hours.', 'We schedule the free 45-minute strategy session.', 'You receive a written report with AI opportunities and an ROI estimate.'],
    faq=[('What should I prepare for the session?', 'An overview of your main processes, operational challenges, growth goals and the digital tools already in use. No technical data needed.'),
         ('Is the session really free?', 'Yes, and with no obligation to buy: it helps you understand whether and where it makes sense to start with AI in your company.'),
         ('How quickly will I get a reply?', 'Within 2 business hours, Monday to Friday from 9:00 to 18:00 CET, often sooner. Requests sent over the weekend are answered on Monday morning.'),
         ('Is the consulting right for my company?', 'We work with SMEs from 10 to 500 employees across all sectors. During the session we assess together the most promising opportunities for your case.')],
)


def contact_form(c, source, extra_fields_html='', select_html=''):
    fields = ''.join(field(l, i, n, t, autocomplete=ac, required=(t != 'tel')) for l, i, n, t, ac in c['fields'])
    consent = (f'<div class="form-checkbox-group required"><input type="checkbox" id="privacy-consent" name="privacy_consent" class="form-checkbox" required aria-required="true" aria-describedby="privacy-error">'
               f'<label for="privacy-consent" class="form-checkbox-label">{c["consent_html"]}</label></div><span id="privacy-error" class="form-error" style="display:none;" aria-live="polite"></span>')
    return (f'<form action="{FORMCARRY}" method="POST" class="contact-form form" id="contact-form" data-ajax="true">'
            f'<input type="hidden" name="source" value="{source}"><div class="form__row form__row--2">{fields}</div>{select_html}'
            f'{field(c["message"], "message", "message", "textarea", placeholder=c["message_ph"])}{extra_fields_html}{consent}'
            f'<button type="submit" class="btn btn--primary btn--block btn--lg">{esc(c["submit"])}{icon("arrow", 16, 1.75)}</button>'
            f'<p class="caption muted" style="margin:0;">{esc(c["helper"])}</p></form>'
            f'<div id="form-success" class="form-success" style="display:none;" role="status"><h3>{esc(c["success_h3"])}</h3><p>{esc(c["success_p"])}</p></div>')


def contatti(lang):
    c = C_IT if lang == 'it' else C_EN
    page = Page(lang=lang, path=c['path'], title=c['title'], description=c['description'], alt=c['alt'], chat=True, form_source='contatti')
    a = page.asset
    head = page_head(c['eyebrow'], c['h1'], c['lead'])
    form = card(f'<h2 class="h3" style="margin-bottom:24px;">{esc(c["form_h2"])}</h2>' + contact_form(c, 'contatti'), cls='card--pad-lg')
    info = card('<div class="stack stack--lg">' + ''.join(f'<div class="info-row">{icon_badge(ic)}<div><p class="caption">{esc(k)}</p><p class="label">{esc(v)}</p></div></div>' for ic, k, v in c['info']) + '</div>', cls='card--pad-lg')
    nxt = card(f'<h3 class="h4" style="margin-bottom:16px;">{esc(c["next_h3"])}</h3><ol class="numbered">' + ''.join(f'<li>{esc(s)}</li>' for s in c['next']) + '</ol>', cls='card--pad-lg')
    side = f'<div class="stack stack--lg">{info}{nxt}<img class="photo" src="{a("src/assets/img/2026/incontro.jpg")}" alt="" loading="lazy" width="1600" height="900" style="aspect-ratio:16/9;"></div>'
    main = section(f'<div class="grid grid--7-5" style="align-items:start;">{form}{side}</div>', cls='section--flush-top')
    answer = section(answer_block(c['answer_lead'], c['answer_facts'], c['answer_meta']), cls='section--flush-top', container='container--narrow')
    faqs = faq_section(c['faq'], FAQ_TITLE[lang])
    body = head + main + answer + faqs
    org = ld_org(lang)
    page.jsonld = [ld_webpage(page, c['title'], types='ContactPage', extra={'mainEntity': {'@id': SITE + '/#organization'}}), org, ld_faq(c['faq'])]
    return page, body


# ---------------------------------------------------------------- strategy-session landing

L_IT = dict(
    path='sessione-strategica.html', alt='en/strategy-session.html',
    title='Sessione strategica AI gratuita per PMI (45 minuti) | PugliAI',
    description='Prenota una sessione strategica gratuita di 45 minuti con un consulente senior PugliAI: 2–3 opportunità AI concrete per i tuoi processi, stima del ROI sui tuoi numeri e una mini-roadmap entro 48 ore. Senza impegno.',
    tag='Posti limitati ogni mese', h1='Quanto vale l’AI per la tua impresa? Scoprilo in 45 minuti, gratis.',
    lead='Sessione strategica 1:1 con un consulente senior: 2–3 opportunità AI concrete per i tuoi processi, stima del ROI sui tuoi numeri e una mini-roadmap entro 48 ore. Senza impegno.',
    bullets=['Risposta entro 2 ore lavorative', 'Nessun obbligo di acquisto', 'Dati trattati secondo il GDPR'],
    form_h2='Prenota la tua sessione gratuita', form_p='Ti rispondiamo entro 2 ore lavorative, lun–ven 9:00–18:00.',
    fields=[('Nome e cognome', 'name', 'name', 'text', 'name'), ('Email aziendale', 'email', 'email', 'email', 'email'), ('Azienda', 'company', 'company', 'text', 'organization'), ('Telefono (facoltativo)', 'phone', 'phone', 'tel', 'tel')],
    when_label='Quando vorresti partire?', when=[('subito', 'Il prima possibile'), ('3-mesi', 'Nei prossimi tre mesi'), ('valutazione', 'Sto solo valutando')],
    message='Cosa vorresti migliorare?', message_ph='Due righe sui processi che ti fanno perdere più tempo.',
    consent_html='Ho letto l’<a href="privacy.html" target="_blank" rel="noopener">informativa sulla privacy</a> e acconsento al trattamento dei dati per rispondere alla mia richiesta (Reg. UE 2016/679).',
    submit='Prenota la sessione gratuita', helper='Gratuita · Senza impegno · Nessuna comunicazione indesiderata',
    success_h3='Richiesta ricevuta.', success_p='Ti ricontattiamo entro 2 ore lavorative per fissare la sessione.',
    logos_caption='Lavorano con noi',
    stats=[('50+', 'PMI seguite dal 2023'), ('150%', 'ROI garantito per contratto, entro 12 mesi'), ('45 min', 'durata della sessione'), ('48 h', 'per ricevere la mini-roadmap')],
    why_eyebrow='Perché adesso', why_h2='Tre motivi per non rimandare.',
    why=[('clock', 'I processi manuali costano ogni settimana', 'Preventivi, ordini, email, reportistica: decine di ore perse ogni settimana in attività ripetitive che l’AI può gestire in autonomia.'),
         ('flag', 'Senza roadmap, l’AI resta un’idea', 'La maggior parte dei progetti si ferma alla fase pilota. Serve un piano con priorità chiare e un ROI misurabile fin dal primo passo.'),
         ('trend', 'Chi pianifica prima, parte prima', 'Le aziende che progettano ora arrivano alla prossima stagione con le automazioni già in funzione.')],
    get_eyebrow='Cosa ottieni', get_h2='Valore concreto, nessuna pressione commerciale.',
    get=['Valutazione preliminare dei tuoi processi: dove si perdono ore e margine oggi', '2–3 opportunità AI concrete per il tuo settore, non soluzioni generiche', 'Stima del ROI sui tuoi numeri, non su medie di mercato', 'Mini-roadmap operativa entro 48 ore: priorità, tempi e prossimi passi'],
    get_note='Nessun contratto da firmare. Se non emergono opportunità concrete, te lo diciamo con chiarezza.',
    how_eyebrow='Come funziona', how_h2='Tre passaggi.',
    how=[('Compila il modulo', 'Bastano due minuti. Ti ricontattiamo entro 2 ore lavorative per fissare la data.'), ('Sessione strategica 1:1', '45 minuti in videochiamata con un consulente senior, nel giorno che preferisci.'), ('Ricevi la mini-roadmap', 'Entro 48 ore: opportunità prioritarie, stima del ROI e prossimi passi.')],
    who_eyebrow='Chi tiene la sessione', who_h2='Un consulente senior, non un commerciale.',
    who_p='Il team di consulenza è guidato da Gregor Marić, Co-Founder e CEO di PugliAI:',
    who=['Oltre quindici anni di esperienza in automazione e intelligenza artificiale per le imprese', 'Autore del libro «Oltre il divario digitale»', 'Vincitore della Comtel Startup Challenge 2024', 'Fondatore del canale YouTube RPA Champion'],
    faq=[('La sessione strategica è davvero gratuita?', 'Sì, completamente gratuita e senza obbligo di acquisto. Dura 45 minuti e comprende una valutazione preliminare, l’analisi delle opportunità AI per il tuo settore, una stima del ROI e una mini-roadmap.'),
         ('La mia azienda è troppo piccola per l’AI?', 'Lavoriamo con PMI da 10 a 500 dipendenti in tutti i settori. Durante la sessione valutiamo insieme le opportunità adatte alle tue dimensioni e al tuo budget.'),
         ('Cosa devo preparare?', 'Una panoramica dei processi principali, le sfide operative, gli obiettivi di crescita e un budget indicativo per l’innovazione. Non servono dati tecnici.')],
    final_h2='Quarantacinque minuti oggi, una roadmap AI concreta domani.', final_lead='Prenota ora la tua sessione strategica gratuita.',
    sticky='Prenota la sessione gratuita', header_cta='Prenota ora', lang_link='EN',
)

L_EN = dict(
    path='en/strategy-session.html', alt='sessione-strategica.html',
    title='Free AI strategy session for SMEs (45 minutes) | PugliAI',
    description='Book a free 45-minute strategy session with a senior PugliAI consultant: 2–3 concrete AI opportunities for your processes, an ROI estimate on your numbers and a mini-roadmap within 48 hours. No commitment.',
    tag='Limited slots each month', h1='How much is AI worth to your business? Find out in 45 minutes, free.',
    lead='A 1:1 strategy session with a senior consultant: 2–3 concrete AI opportunities for your processes, an ROI estimate on your numbers and a mini-roadmap within 48 hours. No commitment.',
    bullets=['Reply within 2 business hours', 'No obligation to buy', 'Data handled under GDPR'],
    form_h2='Book your free session', form_p='We reply within 2 business hours, Mon–Fri 9:00–18:00 CET.',
    fields=[('Full name', 'name', 'name', 'text', 'name'), ('Business email', 'email', 'email', 'email', 'email'), ('Company', 'company', 'company', 'text', 'organization'), ('Phone (optional)', 'phone', 'phone', 'tel', 'tel')],
    when_label='When would you like to start?', when=[('subito', 'As soon as possible'), ('3-mesi', 'Within the next three months'), ('valutazione', 'Just evaluating')],
    message='What would you like to improve?', message_ph='Two lines on the processes that cost you the most time.',
    consent_html='I have read the <a href="privacy.html" target="_blank" rel="noopener">privacy policy</a> and consent to the processing of my data to answer my request (EU Reg. 2016/679).',
    submit='Book the free session', helper='Free · No commitment · No unwanted messages',
    success_h3='Request received.', success_p='We will contact you within 2 business hours to schedule the session.',
    logos_caption='They work with us',
    stats=[('50+', 'SMEs supported since 2023'), ('150%', 'ROI guaranteed by contract, within 12 months'), ('45 min', 'session length'), ('48 h', 'to receive the mini-roadmap')],
    why_eyebrow='Why now', why_h2='Three reasons not to postpone.',
    why=[('clock', 'Manual processes cost you every week', 'Quotes, orders, emails, reports: dozens of hours lost each week on repetitive tasks that AI can handle on its own.'),
         ('flag', 'Without a roadmap, AI stays an idea', 'Most projects stop at the pilot stage. You need a plan with clear priorities and a measurable ROI from the first step.'),
         ('trend', 'Those who plan first, start first', 'Companies that design now reach the next season with automations already running.')],
    get_eyebrow='What you get', get_h2='Concrete value, no sales pressure.',
    get=['Preliminary review of your processes: where hours and margin are lost today', '2–3 concrete AI opportunities for your sector, not generic solutions', 'ROI estimate on your numbers, not on market averages', 'Operational mini-roadmap within 48 hours: priorities, timing and next steps'],
    get_note='No contract to sign. If no concrete opportunities emerge, we tell you clearly.',
    how_eyebrow='How it works', how_h2='Three steps.',
    how=[('Fill in the form', 'It takes two minutes. We contact you within 2 business hours to set the date.'), ('1:1 strategy session', '45 minutes on a video call with a senior consultant, on the day you prefer.'), ('Receive the mini-roadmap', 'Within 48 hours: priority opportunities, ROI estimate and next steps.')],
    who_eyebrow='Who runs the session', who_h2='A senior consultant, not a salesperson.',
    who_p='The consulting team is led by Gregor Marić, Co-Founder and CEO of PugliAI:',
    who=['Over fifteen years of experience in automation and artificial intelligence for businesses', 'Author of the book «Oltre il divario digitale»', 'Winner of the Comtel Startup Challenge 2024', 'Founder of the RPA Champion YouTube channel'],
    faq=[('Is the strategy session really free?', 'Yes, completely free and with no obligation to buy. It lasts 45 minutes and includes a preliminary review, an analysis of the AI opportunities for your sector, an ROI estimate and a mini-roadmap.'),
         ('Is my company too small for AI?', 'We work with SMEs from 10 to 500 employees across all sectors. During the session we assess together the opportunities suited to your size and budget.'),
         ('What should I prepare?', 'An overview of your main processes, operational challenges, growth goals and an indicative innovation budget. No technical data needed.')],
    final_h2='Forty-five minutes today, a concrete AI roadmap tomorrow.', final_lead='Book your free strategy session now.',
    sticky='Book the free session', header_cta='Book now', lang_link='IT',
)

LOGOS = [('clients/mycia_logo.svg', 'MyCia'), ('clients/tiledesk-logo.png', 'Tiledesk'), ('clients/comtel.png', 'Comtel'),
         ('partners/assist_digital_logo.png', 'Assist Digital'), ('clients/bcc_studio_logo.png', 'BCC Studio'), ('partners/plug_and_play_logo.png', 'Plug and Play')]


def landing(lang):
    c = L_IT if lang == 'it' else L_EN
    page = Page(lang=lang, path=c['path'], title=c['title'], description=c['description'], alt=c['alt'], form_source='landing-sessione-strategica', own_header=True, body_class='has-sticky-cta')
    a = page.asset
    alt_href = '/en/strategy-session.html' if lang == 'it' else '/sessione-strategica.html'
    header = (f'<a href="#main-content" class="skip-link">{"Vai al contenuto principale" if lang == "it" else "Skip to main content"}</a>'
              f'<header class="lp-header" role="banner"><div class="lp-header__inner"><a href="{a("index.html")}" class="logo" aria-label="PugliAI">'
              f'<img class="logo__mark" src="{a("src/assets/img/2026/mark.png")}" alt="" width="157" height="152"><img class="logo__word" src="{a("src/assets/img/2026/wordmark.png")}" alt="PugliAI" width="298" height="96"></a>'
              f'<div class="lp-header__actions"><a class="btn btn--ghost header__contact" href="mailto:sales@pugliai.com">sales@pugliai.com</a>'
              f'<a class="lang" href="{alt_href}" hreflang="{"en" if lang == "it" else "it"}">{icon("globe", 15)}<strong>{c["lang_link"]}</strong></a>'
              f'<a class="btn btn--primary btn--sm" href="#prenota">{esc(c["header_cta"])}</a></div></div></header>')
    when = (f'<div class="field form-group"><label for="timing" class="form-label">{esc(c["when_label"])}</label><select id="timing" name="timing" class="form-input">'
            + ''.join(f'<option value="{v}">{esc(l)}</option>' for v, l in c['when']) + '</select></div>')
    form = card(f'<h2 class="h3" style="margin-bottom:6px;">{esc(c["form_h2"])}</h2><p class="muted body-sm" style="margin-bottom:20px;">{esc(c["form_p"])}</p>' + contact_form(c, 'landing-sessione-strategica', select_html=when), cls='card--pad-lg')
    hero_text = (f'<div class="hero__text"><div>{tag(c["tag"])}</div><h1 class="h1">{esc(c["h1"])}</h1><p class="lead">{esc(c["lead"])}</p>{checks(c["bullets"])}</div>')
    hero = f'<section class="hero" id="prenota"><div class="container"><div class="hero__grid" style="align-items:start;">{hero_text}<div>{form}</div></div></div></section>'
    logos = (f'<section class="logo-strip" aria-label="{esc(c["logos_caption"])}"><div class="container"><p class="logo-strip__caption">{esc(c["logos_caption"])}</p><div class="logo-strip__grid">'
             + ''.join(f'<div class="logo-strip__cell"><img src="{a("src/assets/img/" + f)}" alt="{esc(n)}" loading="lazy"></div>' for f, n in LOGOS) + '</div></div></section>')
    st = section(stats(c['stats']), cls='section--tight')
    why = section(section_head(c['why_eyebrow'], c['why_h2']) + grid([feature_card(*w) for w in c['why']], 3))
    get = section(f'<div class="grid grid--2" style="align-items:center;"><div>{section_head(c["get_eyebrow"], c["get_h2"])}{checks(c["get"])}<p class="muted body-sm mt-6">{esc(c["get_note"])}</p></div>'
                  f'<img class="photo photo--tall" src="{a("src/assets/img/2026/incontro.jpg")}" alt="" loading="lazy" width="1600" height="900"></div>', cls='section--white')
    how = section(section_head(c['how_eyebrow'], c['how_h2']) + steps(c['how'], cols=3))
    who = section(f'<div class="grid grid--5-7 card card--flush" style="gap:0;"><img src="{a("src/assets/img/2026/founder-stage.jpg")}" alt="Gregor Marić" loading="lazy" style="width:100%;height:100%;min-height:280px;object-fit:cover;">'
                  f'<div class="stack" style="padding:40px;justify-content:center;">{eyebrow(c["who_eyebrow"])}<h2 class="h3">{esc(c["who_h2"])}</h2><p class="muted" style="margin:0;">{esc(c["who_p"])}</p>{checks(c["who"], "checks--sm")}</div></div>', cls='section--flush-top')
    faqs = faq_section(c['faq'], FAQ_TITLE[lang])
    final = cta_band(c['final_h2'], c['final_lead'], c['sticky'], '#prenota')
    page.sticky_cta = f'<div class="lp-sticky-cta"><a class="btn btn--primary btn--block" href="#prenota">{esc(c["sticky"])}</a></div>'
    body = header + hero + logos + st + why + get + how + who + faqs + final
    body = body.replace('<a href="#main-content" class="skip-link">', '<a href="#prenota" class="skip-link">', 1)
    page.jsonld = [ld_webpage(page, c['title']), ld_faq(c['faq'])]
    return page, body


# ---------------------------------------------------------------- success + login

def success(lang):
    if lang == 'it':
        page = Page(lang='it', path='success.html', title='Messaggio inviato | PugliAI', description='Grazie per averci contattato: abbiamo ricevuto il tuo messaggio e ti risponderemo entro 2 ore lavorative.', alt='en/success.html', noindex=True)
        h1, p, btn_l, li = 'Messaggio inviato.', 'Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 2 ore lavorative.', 'Torna alla home', 'Nel frattempo, seguici su LinkedIn.'
    else:
        page = Page(lang='en', path='en/success.html', title='Message sent | PugliAI', description='Thank you for contacting us: we have received your message and will reply within 2 business hours.', alt='success.html', noindex=True)
        h1, p, btn_l, li = 'Message sent.', 'Thank you for contacting us. We have received your message and will reply within 2 business hours.', 'Back to the homepage', 'In the meantime, follow us on LinkedIn.'
    body = section(f'<div class="center-block success-hero"><div class="stack" style="align-items:center;">{icon_badge("check", "lg")}<h1 class="h1">{esc(h1)}</h1><p class="lead">{esc(p)}</p>'
                   f'<div class="cluster cluster--center">{btn(btn_l, "index.html")}<a class="btn btn--ghost" href="{ORG["linkedin"]}" rel="noopener" target="_blank">{esc(li)}</a></div></div></div>')
    page.jsonld = [ld_webpage(page, page.title)]
    return page, body


def login():
    page = Page(lang='it', path='login.html', title='Area riservata | PugliAI', description='Area riservata PugliAI: accesso per i clienti ai materiali di progetto.', noindex=True)
    body = section(f'<div class="center-block" style="min-height:60vh;justify-content:center;"><div class="card card--pad-lg" style="width:100%;max-width:420px;text-align:left;">'
                   f'<h1 class="h3" style="margin-bottom:8px;">Area riservata</h1><p class="muted body-sm" style="margin-bottom:20px;">Accesso riservato ai clienti PugliAI. Per ricevere le credenziali scrivi a <a href="mailto:sales@pugliai.com">sales@pugliai.com</a>.</p>'
                   f'<form class="form" action="#" method="post" onsubmit="return false;">{field("Email", "login-email", "email", "email", autocomplete="email")}{field("Password", "login-password", "password", "password", autocomplete="current-password")}'
                   f'<button type="submit" class="btn btn--primary btn--block">Accedi{icon("arrow", 16, 1.75)}</button></form></div></div>')
    page.jsonld = [ld_webpage(page, page.title)]
    return page, body


def build_all():
    for lang in ('it', 'en'):
        yield contatti(lang)
        yield landing(lang)
        yield success(lang)
    yield login()
