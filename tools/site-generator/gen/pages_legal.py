"""Legal pages: privacy policy, cookie policy, terms (IT/EN)."""
from .html import *
from .site import UPDATED_IT, UPDATED_EN
from .templates import detail_page

MAIL = '<a href="mailto:sales@pugliai.com">sales@pugliai.com</a>'


def prose(html_body):
    return section(f'<div class="prose">{html_body}</div>', container='container--narrow', cls='section--flush-top')


def h(t):
    return f'<h2>{t}</h2>'


def ul(items):
    return '<ul>' + ''.join(f'<li>{i}</li>' for i in items) + '</ul>'


def legal(lang, path, alt, title, description, eyebrow, h1, body_html, crumb_label):
    spec = dict(path=path, alt=alt, title=title, description=description, eyebrow=eyebrow, h1=h1,
                lead=(f'Ultimo aggiornamento: {UPDATED_IT}' if lang == 'it' else f'Last updated: {UPDATED_EN}'),
                breadcrumb=[('Home', 'index.html'), (crumb_label, '')], crumb_urls=[('index.html' if lang == 'it' else 'en/index.html'), path],
                sections=[('html', prose(body_html))])
    return detail_page(lang, spec)


# ---------------------------------------------------------------- privacy

def privacy(lang):
    if lang == 'it':
        body = (
            '<p class="lead">Questa informativa descrive come PugliAI S.r.l. tratta i dati personali di chi visita il sito pugliai.com, compila i moduli, usa l’assistente chat o ci scrive, ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR).</p>'
            + h('1. Titolare del trattamento')
            + f'<p>PugliAI S.r.l., sede legale in Via Giovanni Forleo 45, 72022 Latiano (BR), P.IVA IT02735920742, REA BR-170874. Per qualsiasi richiesta relativa ai dati personali scrivi a {MAIL}.</p>'
            + h('2. Quali dati trattiamo')
            + ul(['<strong>Dati forniti tramite i moduli:</strong> nome e cognome, email aziendale, azienda, telefono (facoltativo), messaggio. Per la candidatura all’acceleratore anche ruolo, profilo LinkedIn, esperienza, dati sull’impresa, sul prodotto e sul mercato.',
                  '<strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser e dispositivo, pagine visitate, orari. Sono raccolti dai registri del servizio di hosting per motivi di sicurezza e, solo con il tuo consenso, da Google Analytics 4 in forma aggregata.',
                  '<strong>Conversazioni con l’assistente chat:</strong> il testo che scrivi nel widget di chat presente su alcune pagine, se decidi di usarlo.',
                  '<strong>Email:</strong> i messaggi che invii direttamente a sales@pugliai.com e i relativi allegati.'])
            + h('3. Finalità e basi giuridiche')
            + ul(['<strong>Rispondere alle richieste e organizzare la sessione strategica</strong> — misure precontrattuali adottate su tua richiesta (art. 6.1.b).',
                  '<strong>Valutare le candidature all’acceleratore</strong> — misure precontrattuali (art. 6.1.b). La selezione è svolta da persone: non prendiamo decisioni basate unicamente su trattamenti automatizzati.',
                  '<strong>Erogare i servizi contrattualizzati</strong> e gestire fatturazione e adempimenti fiscali (art. 6.1.b e 6.1.c).',
                  '<strong>Inviare comunicazioni su servizi analoghi a quelli richiesti</strong> — legittimo interesse (art. 6.1.f), con possibilità di opporti in ogni momento. Altre comunicazioni commerciali solo con il tuo consenso (art. 6.1.a).',
                  '<strong>Misurare l’uso del sito</strong> con cookie analitici — consenso (art. 6.1.a), revocabile dal pannello «Gestisci i cookie».',
                  '<strong>Garantire la sicurezza del sito</strong> e prevenire abusi dei moduli — legittimo interesse (art. 6.1.f).'])
            + h('4. Natura del conferimento')
            + '<p>I dati contrassegnati come obbligatori nei moduli sono necessari per dare seguito alla richiesta; senza di essi non possiamo risponderti. Il numero di telefono è facoltativo. Il consenso ai cookie analitici è libero e non condiziona la navigazione.</p>'
            + h('5. Destinatari dei dati')
            + '<p>I dati sono trattati dal personale di PugliAI autorizzato e da fornitori che agiscono come responsabili del trattamento:</p>'
            + ul(['<strong>Formcarry</strong> — ricezione e inoltro dei moduli compilati sul sito.',
                  '<strong>Google Ireland Ltd</strong> — Google Analytics 4, attivo solo con il tuo consenso, con indirizzo IP abbreviato.',
                  '<strong>GitHub, Inc.</strong> — hosting del sito (GitHub Pages) e relativi registri tecnici.',
                  '<strong>Fornitore del widget di chat</strong> — gestione delle conversazioni con l’assistente, se lo utilizzi (infrastruttura Render).',
                  'Consulenti, professionisti e istituti bancari vincolati alla riservatezza, per adempimenti contabili e legali.',
                  'Autorità pubbliche, quando la legge lo richiede.'])
            + '<p>Non vendiamo né cediamo i tuoi dati a terzi per finalità di marketing.</p>'
            + h('6. Trasferimenti fuori dall’Unione europea')
            + '<p>Alcuni fornitori possono trattare i dati negli Stati Uniti. In questi casi il trasferimento avviene sulla base di una decisione di adeguatezza (EU-U.S. Data Privacy Framework) o delle clausole contrattuali standard approvate dalla Commissione europea (artt. 44 e seguenti del GDPR).</p>'
            + h('7. Conservazione')
            + ul(['Richieste di contatto e candidature: 24 mesi dall’ultimo contatto.', 'Dati contrattuali e di fatturazione: 10 anni, per obblighi di legge.', 'Dati di Google Analytics: fino a 14 mesi.', 'Registri tecnici di sicurezza: fino a 12 mesi.', 'Consenso alle comunicazioni commerciali: fino alla revoca.'])
            + h('8. I tuoi diritti')
            + f'<p>Puoi chiedere in ogni momento l’accesso ai dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità, oppure opporti al trattamento e revocare il consenso, senza pregiudicare la liceità del trattamento precedente. Scrivi a {MAIL}: rispondiamo entro 30 giorni. Se ritieni che il trattamento violi la normativa, puoi proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).</p>'
            + h('9. Sicurezza')
            + '<p>Adottiamo misure tecniche e organizzative adeguate al rischio: trasmissione cifrata (HTTPS), controllo degli accessi, protezione dei moduli da invii automatici, minimizzazione dei dati raccolti e formazione del personale.</p>'
            + h('10. Cookie')
            + '<p>Le informazioni sui cookie e sulle tecnologie simili, e su come gestire il consenso, sono nella <a href="cookie.html">cookie policy</a>.</p>'
            + h('11. Modifiche')
            + '<p>Possiamo aggiornare questa informativa; la data in cima alla pagina indica l’ultima revisione. Le modifiche sostanziali saranno segnalate sul sito.</p>'
        )
        return legal('it', 'privacy.html', 'en/privacy.html', 'Informativa sulla privacy | PugliAI',
                     'Come PugliAI S.r.l. tratta i dati personali di chi visita il sito, compila i moduli o ci scrive: titolare, finalità, basi giuridiche, fornitori, conservazione e diritti ai sensi del GDPR.',
                     'Informativa', 'Informativa sulla privacy', body, 'Privacy')
    body = (
        '<p class="lead">This notice explains how PugliAI S.r.l. processes the personal data of people who visit pugliai.com, fill in the forms, use the chat assistant or write to us, under Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR).</p>'
        + h('1. Data controller')
        + f'<p>PugliAI S.r.l., registered office at Via Giovanni Forleo 45, 72022 Latiano (BR), Italy, VAT IT02735920742, REA BR-170874. For any request concerning personal data write to {MAIL}.</p>'
        + h('2. Data we process')
        + ul(['<strong>Data you provide through the forms:</strong> full name, business email, company, phone number (optional), message. For accelerator applications also role, LinkedIn profile, experience, and data about the company, product and market.',
              '<strong>Browsing data:</strong> IP address, browser and device type, pages visited, timestamps. They are collected by the hosting provider’s logs for security purposes and, only with your consent, by Google Analytics 4 in aggregated form.',
              '<strong>Chat conversations:</strong> the text you type into the chat widget available on some pages, if you choose to use it.',
              '<strong>Email:</strong> messages you send directly to sales@pugliai.com and their attachments.'])
        + h('3. Purposes and legal bases')
        + ul(['<strong>Answering requests and arranging the strategy session</strong> — pre-contractual measures taken at your request (Art. 6(1)(b)).',
              '<strong>Assessing accelerator applications</strong> — pre-contractual measures (Art. 6(1)(b)). Selection is carried out by people: we make no decisions based solely on automated processing.',
              '<strong>Delivering contracted services</strong> and handling invoicing and tax obligations (Art. 6(1)(b) and 6(1)(c)).',
              '<strong>Sending communications about services similar to those you requested</strong> — legitimate interest (Art. 6(1)(f)), with the right to object at any time. Other commercial communications only with your consent (Art. 6(1)(a)).',
              '<strong>Measuring how the site is used</strong> with analytics cookies — consent (Art. 6(1)(a)), which you can withdraw from the “Manage cookies” panel.',
              '<strong>Keeping the site secure</strong> and preventing form abuse — legitimate interest (Art. 6(1)(f)).'])
        + h('4. Is providing data mandatory?')
        + '<p>Fields marked as required in the forms are necessary to handle your request; without them we cannot reply. The phone number is optional. Consent to analytics cookies is free and does not affect your use of the site.</p>'
        + h('5. Recipients')
        + '<p>Data is processed by authorised PugliAI staff and by suppliers acting as data processors:</p>'
        + ul(['<strong>Formcarry</strong> — receipt and forwarding of the forms submitted on the site.',
              '<strong>Google Ireland Ltd</strong> — Google Analytics 4, active only with your consent, with truncated IP addresses.',
              '<strong>GitHub, Inc.</strong> — website hosting (GitHub Pages) and the related technical logs.',
              '<strong>Chat widget provider</strong> — handling of conversations with the assistant, if you use it (Render infrastructure).',
              'Advisers, professionals and banks bound by confidentiality, for accounting and legal obligations.',
              'Public authorities, where required by law.'])
        + '<p>We do not sell or pass on your data to third parties for marketing purposes.</p>'
        + h('6. Transfers outside the European Union')
        + '<p>Some suppliers may process data in the United States. In those cases the transfer relies on an adequacy decision (EU-U.S. Data Privacy Framework) or on the Standard Contractual Clauses approved by the European Commission (Articles 44 et seq. GDPR).</p>'
        + h('7. Retention')
        + ul(['Contact requests and applications: 24 months from the last contact.', 'Contract and invoicing data: 10 years, as required by law.', 'Google Analytics data: up to 14 months.', 'Technical security logs: up to 12 months.', 'Consent to commercial communications: until withdrawn.'])
        + h('8. Your rights')
        + f'<p>You can at any time request access to your data, rectification, erasure, restriction of processing or portability, object to processing and withdraw consent, without affecting the lawfulness of processing carried out before. Write to {MAIL}: we reply within 30 days. If you believe the processing breaches the law, you can lodge a complaint with the Italian supervisory authority (Garante per la protezione dei dati personali, www.garanteprivacy.it) or with the authority of your country of residence.</p>'
        + h('9. Security')
        + '<p>We apply technical and organisational measures appropriate to the risk: encrypted transmission (HTTPS), access control, protection of forms against automated submissions, data minimisation and staff training.</p>'
        + h('10. Cookies')
        + '<p>Information on cookies and similar technologies, and on how to manage consent, is in the <a href="cookie.html">cookie policy</a>.</p>'
        + h('11. Changes')
        + '<p>We may update this notice; the date at the top of the page shows the latest revision. Substantial changes will be flagged on the site.</p>'
    )
    return legal('en', 'en/privacy.html', 'privacy.html', 'Privacy policy | PugliAI',
                 'How PugliAI S.r.l. processes the personal data of people who visit the site, fill in the forms or write to us: controller, purposes, legal bases, suppliers, retention and rights under the GDPR.',
                 'Policy', 'Privacy policy', body, 'Privacy')


# ---------------------------------------------------------------- cookie

def cookie_table(lang):
    if lang == 'it':
        head = ['Nome', 'Fornitore', 'Finalità', 'Durata', 'Categoria']
        rows = [['cookieConsent (localStorage)', 'PugliAI', 'Memorizza le tue scelte sul consenso', 'Finché non la modifichi o cancelli i dati del browser', 'Necessario'],
                ['csrf_token (sessionStorage)', 'PugliAI', 'Protegge i moduli da invii automatici', 'Sessione', 'Necessario'],
                ['_ga', 'Google Analytics 4', 'Distingue i visitatori in forma aggregata', '2 anni', 'Analitico (con consenso)'],
                ['_ga_*', 'Google Analytics 4', 'Mantiene lo stato della sessione di misurazione', '2 anni', 'Analitico (con consenso)'],
                ['Memoria del widget di chat', 'Fornitore della chat', 'Conserva la conversazione mentre usi l’assistente', 'Sessione', 'Funzionale (solo se usi la chat)']]
    else:
        head = ['Name', 'Provider', 'Purpose', 'Duration', 'Category']
        rows = [['cookieConsent (localStorage)', 'PugliAI', 'Stores your consent choices', 'Until you change it or clear browser data', 'Necessary'],
                ['csrf_token (sessionStorage)', 'PugliAI', 'Protects forms against automated submissions', 'Session', 'Necessary'],
                ['_ga', 'Google Analytics 4', 'Distinguishes visitors in aggregated form', '2 years', 'Analytics (with consent)'],
                ['_ga_*', 'Google Analytics 4', 'Keeps the measurement session state', '2 years', 'Analytics (with consent)'],
                ['Chat widget storage', 'Chat provider', 'Keeps the conversation while you use the assistant', 'Session', 'Functional (only if you use the chat)']]
    return table(head, rows, brand_col=None)


def cookie(lang):
    if lang == 'it':
        body = (
            '<p class="lead">Questa pagina spiega quali cookie e tecnologie simili usa pugliai.com, con quali finalità e come puoi gestire il consenso.</p>'
            + h('Cosa sono i cookie')
            + '<p>I cookie sono piccoli file di testo che il sito salva sul tuo dispositivo. Tecnologie simili, come localStorage e sessionStorage, memorizzano informazioni nel browser senza inviarle automaticamente a un server. Li usiamo per far funzionare il sito, ricordare le tue scelte e, solo con il tuo consenso, misurare come viene usato.</p>'
            + h('Come gestiamo il consenso')
            + '<p>Al primo accesso compare un banner con tre opzioni: accettare tutti i cookie, usare solo quelli necessari o personalizzare le categorie. La scelta viene salvata nel tuo browser. I tag di misurazione di Google restano disattivati finché non dai il consenso (Google Consent Mode v2). Puoi cambiare idea in ogni momento:</p>'
            + '<p><button type="button" class="btn btn--secondary" data-cookie-prefs>Gestisci le preferenze sui cookie</button></p>'
            + h('Cookie e tecnologie utilizzate')
            + cookie_table('it')
            + h('Cookie di marketing')
            + '<p>Al momento non usiamo cookie di marketing o di profilazione pubblicitaria. Se in futuro li introdurremo, saranno attivati solo con il tuo consenso e questa pagina verrà aggiornata.</p>'
            + h('Terze parti')
            + ul(['<strong>Google Analytics 4</strong> (Google Ireland Ltd): statistiche aggregate sull’uso del sito, con indirizzo IP abbreviato. Informativa: policies.google.com/privacy. Puoi disattivare Google Analytics anche con il componente aggiuntivo ufficiale per il browser (tools.google.com/dlpage/gaoptout).',
                  '<strong>Widget di chat</strong>: presente su alcune pagine, si carica solo quando la pagina lo include e conserva la conversazione per la durata della sessione.'])
            + h('Come disattivare i cookie dal browser')
            + '<p>Oltre al pannello delle preferenze, puoi bloccare o cancellare i cookie dalle impostazioni del browser (Chrome, Firefox, Safari, Edge). Disattivare i cookie necessari può impedire il corretto funzionamento dei moduli.</p>'
            + h('Contatti')
            + f'<p>Per domande su questa cookie policy o sul trattamento dei dati scrivi a {MAIL}. Per i dettagli sui tuoi diritti consulta l’<a href="privacy.html">informativa sulla privacy</a>.</p>'
        )
        return legal('it', 'cookie.html', 'en/cookie.html', 'Cookie policy | PugliAI',
                     'Quali cookie e tecnologie simili usa pugliai.com, con quali finalità, per quanto tempo e come gestire il consenso: cookie necessari, Google Analytics 4 con consenso, nessun cookie di marketing.',
                     'Informativa', 'Cookie policy', body, 'Cookie')
    body = (
        '<p class="lead">This page explains which cookies and similar technologies pugliai.com uses, for what purposes, and how you can manage your consent.</p>'
        + h('What cookies are')
        + '<p>Cookies are small text files the site saves on your device. Similar technologies, such as localStorage and sessionStorage, store information in the browser without automatically sending it to a server. We use them to make the site work, remember your choices and, only with your consent, measure how the site is used.</p>'
        + h('How we manage consent')
        + '<p>On your first visit a banner offers three options: accept all cookies, use only the necessary ones, or customise the categories. Your choice is saved in your browser. Google measurement tags stay off until you give consent (Google Consent Mode v2). You can change your mind at any time:</p>'
        + '<p><button type="button" class="btn btn--secondary" data-cookie-prefs>Manage cookie preferences</button></p>'
        + h('Cookies and technologies we use')
        + cookie_table('en')
        + h('Marketing cookies')
        + '<p>We currently use no marketing or advertising-profiling cookies. If we introduce them in the future they will be activated only with your consent, and this page will be updated.</p>'
        + h('Third parties')
        + ul(['<strong>Google Analytics 4</strong> (Google Ireland Ltd): aggregated statistics on the use of the site, with truncated IP addresses. Policy: policies.google.com/privacy. You can also disable Google Analytics with the official browser add-on (tools.google.com/dlpage/gaoptout).',
              '<strong>Chat widget</strong>: available on some pages, it loads only where the page includes it and keeps the conversation for the duration of the session.'])
        + h('Disabling cookies in your browser')
        + '<p>Besides the preferences panel, you can block or delete cookies from your browser settings (Chrome, Firefox, Safari, Edge). Disabling necessary cookies may stop the forms from working properly.</p>'
        + h('Contact')
        + f'<p>For questions about this cookie policy or about data processing write to {MAIL}. For details on your rights see the <a href="privacy.html">privacy policy</a>.</p>'
    )
    return legal('en', 'en/cookie.html', 'cookie.html', 'Cookie policy | PugliAI',
                 'Which cookies and similar technologies pugliai.com uses, for what purposes, for how long and how to manage consent: necessary cookies, Google Analytics 4 with consent, no marketing cookies.',
                 'Policy', 'Cookie policy', body, 'Cookies')


# ---------------------------------------------------------------- termini / terms

def terms(lang):
    if lang == 'it':
        body = (
            '<p class="lead">Questi termini regolano l’uso del sito pugliai.com e descrivono le condizioni generali dei servizi di PugliAI S.r.l. I contratti con i clienti sono regolati dalle offerte sottoscritte, che prevalgono su questa pagina.</p>'
            + h('1. Accettazione')
            + '<p>Navigando sul sito o inviando una richiesta accetti questi termini. Se non li condividi, ti invitiamo a non usare il sito.</p>'
            + h('2. Servizi')
            + '<p>PugliAI S.r.l. offre servizi di consulenza sull’intelligenza artificiale per le imprese: consulenza strategica, sviluppo di agenti AI e automazioni, progettazione di infrastrutture e prodotti AI on-premise, formazione, e un programma di accelerazione per startup. Il perimetro, i tempi e i corrispettivi di ogni servizio sono definiti nell’offerta o nel contratto sottoscritto.</p>'
            + h('3. Contenuti del sito')
            + ul(['I contenuti del sito hanno finalità informative. I prezzi indicati sono di listino, IVA esclusa, e possono variare in base al perimetro: un’offerta è vincolante solo se sottoscritta.',
                  'Gli scenari per settore sono esempi illustrativi e non descrivono clienti reali. Il calcolatore ROI fornisce stime indicative basate su ipotesi dichiarate e non costituisce un’offerta né una garanzia di risultato.',
                  'Le guide e gli articoli non sostituiscono una consulenza legale, fiscale o tecnica sul caso specifico. I dati di mercato citati sono indicativi e possono cambiare.'])
            + h('4. Obblighi dell’utente')
            + ul(['Fornire informazioni veritiere e complete nei moduli.', 'Non usare il sito o i servizi per scopi illeciti né tentare di comprometterne la sicurezza.', 'Rispettare i diritti di proprietà intellettuale di PugliAI e di terzi.', 'Pagare i corrispettivi nei termini concordati nel contratto.'])
            + h('5. Proprietà intellettuale')
            + '<p>Testi, immagini, marchi, software e materiali del sito sono di PugliAI S.r.l. o dei rispettivi titolari. La titolarità di quanto sviluppato per i clienti, e la licenza d’uso concessa, sono regolate dal contratto; in mancanza di accordo scritto diverso, i materiali restano di proprietà di PugliAI e il cliente ottiene una licenza d’uso non esclusiva.</p>'
            + h('6. Garanzia sul ritorno dell’investimento')
            + '<p>La garanzia contrattuale sul ROI descritta sul sito è valida esclusivamente nei termini, con i KPI e con il metodo di misura definiti nel contratto sottoscritto con il cliente.</p>'
            + h('7. Limitazione di responsabilità')
            + '<p>Nei limiti consentiti dalla legge, PugliAI non risponde di danni indiretti o consequenziali derivanti dall’uso del sito o dei servizi. La responsabilità complessiva verso il cliente è limitata all’importo pagato per i servizi nei 12 mesi precedenti l’evento, salvo dolo o colpa grave.</p>'
            + h('8. Riservatezza e dati personali')
            + '<p>PugliAI tratta le informazioni dei clienti con riservatezza. Il trattamento dei dati personali è descritto nell’<a href="privacy.html">informativa sulla privacy</a> e nella <a href="cookie.html">cookie policy</a>.</p>'
            + h('9. Legge applicabile e foro competente')
            + '<p>Questi termini sono regolati dalla legge italiana. Per ogni controversia è competente il Foro di Milano, fatto salvo il foro inderogabile previsto dalla legge per i consumatori.</p>'
            + h('10. Modifiche')
            + '<p>Possiamo aggiornare questi termini; la data in cima alla pagina indica l’ultima revisione. L’uso del sito dopo la pubblicazione delle modifiche ne comporta l’accettazione.</p>'
            + h('11. Contatti')
            + f'<p>Per domande su questi termini scrivi a {MAIL}. PugliAI S.r.l., Via Giovanni Forleo 45, 72022 Latiano (BR), P.IVA IT02735920742.</p>'
        )
        return legal('it', 'termini.html', 'en/terms.html', 'Termini e condizioni | PugliAI',
                     'Termini di utilizzo del sito pugliai.com e condizioni generali dei servizi di PugliAI S.r.l.: contenuti, obblighi, proprietà intellettuale, garanzia ROI, responsabilità, legge applicabile.',
                     'Termini', 'Termini e condizioni', body, 'Termini')
    body = (
        '<p class="lead">These terms govern the use of pugliai.com and describe the general conditions of the services of PugliAI S.r.l. Contracts with clients are governed by the signed proposals, which prevail over this page.</p>'
        + h('1. Acceptance')
        + '<p>By browsing the site or sending a request you accept these terms. If you do not agree with them, please do not use the site.</p>'
        + h('2. Services')
        + '<p>PugliAI S.r.l. provides artificial-intelligence consulting for businesses: strategic consulting, development of AI agents and automations, design of on-premise AI infrastructure and products, training, and an acceleration programme for startups. Scope, timing and fees of each service are defined in the signed proposal or contract.</p>'
        + h('3. Site content')
        + ul(['Site content is for information purposes. Prices shown are list prices, excluding VAT, and may vary with the scope: a proposal is binding only once signed.',
              'Sector scenarios are illustrative examples and do not describe real clients. The ROI calculator provides indicative estimates based on stated assumptions and is neither an offer nor a guarantee of results.',
              'Guides and articles do not replace legal, tax or technical advice on a specific case. Market figures quoted are indicative and may change.'])
        + h('4. User obligations')
        + ul(['Provide truthful and complete information in the forms.', 'Do not use the site or the services for unlawful purposes or attempt to compromise their security.', 'Respect the intellectual property rights of PugliAI and third parties.', 'Pay fees within the terms agreed in the contract.'])
        + h('5. Intellectual property')
        + '<p>Texts, images, trademarks, software and materials on the site belong to PugliAI S.r.l. or their respective owners. Ownership of work developed for clients, and the licence granted, are governed by the contract; unless otherwise agreed in writing, materials remain the property of PugliAI and the client obtains a non-exclusive licence to use them.</p>'
        + h('6. Return-on-investment guarantee')
        + '<p>The contractual ROI guarantee described on the site applies exclusively under the terms, KPIs and measurement method defined in the contract signed with the client.</p>'
        + h('7. Limitation of liability')
        + '<p>To the extent permitted by law, PugliAI is not liable for indirect or consequential damages arising from the use of the site or the services. Total liability towards the client is limited to the amount paid for the services in the 12 months preceding the event, except in cases of wilful misconduct or gross negligence.</p>'
        + h('8. Confidentiality and personal data')
        + '<p>PugliAI treats client information confidentially. The processing of personal data is described in the <a href="privacy.html">privacy policy</a> and the <a href="cookie.html">cookie policy</a>.</p>'
        + h('9. Governing law and jurisdiction')
        + '<p>These terms are governed by Italian law. Any dispute falls under the jurisdiction of the Court of Milan, without prejudice to the mandatory forum provided by law for consumers.</p>'
        + h('10. Changes')
        + '<p>We may update these terms; the date at the top of the page shows the latest revision. Using the site after changes are published implies acceptance.</p>'
        + h('11. Contact')
        + f'<p>For questions about these terms write to {MAIL}. PugliAI S.r.l., Via Giovanni Forleo 45, 72022 Latiano (BR), Italy, VAT IT02735920742.</p>'
    )
    return legal('en', 'en/terms.html', 'termini.html', 'Terms and conditions | PugliAI',
                 'Terms of use of pugliai.com and general conditions of PugliAI S.r.l. services: content, obligations, intellectual property, ROI guarantee, liability, governing law.',
                 'Terms', 'Terms and conditions', body, 'Terms')


def build_all():
    for lang in ('it', 'en'):
        yield privacy(lang)
        yield cookie(lang)
        yield terms(lang)
