"""ROI calculator (IT/EN): transparent, conservative model with stated assumptions."""
import json
from .html import *
from .site import UPDATED_IT, UPDATED_EN
from .templates import detail_page

SECTORS = {
    'it': [('manifatturiero', 'Manifatturiero', 'produzione, qualità, manutenzione', 0.30, 0.55, 0.01),
           ('moda-lusso', 'Moda e lusso', 'vendite, servizio clienti, filiera', 0.35, 0.60, 0.02),
           ('finanza', 'Servizi finanziari', 'istruttorie, documenti, conformità', 0.50, 0.65, 0.01),
           ('retail', 'Retail ed e-commerce', 'assortimento, marketing, assistenza', 0.35, 0.60, 0.02),
           ('sanita', 'Sanità', 'accettazione, refertazione, flussi', 0.35, 0.50, 0.005),
           ('altro', 'Altro settore', 'amministrazione, vendite, supporto', 0.35, 0.55, 0.01)],
    'en': [('manufacturing', 'Manufacturing', 'production, quality, maintenance', 0.30, 0.55, 0.01),
           ('fashion-luxury', 'Fashion and luxury', 'sales, customer service, supply chain', 0.35, 0.60, 0.02),
           ('finance', 'Financial services', 'credit files, documents, compliance', 0.50, 0.65, 0.01),
           ('retail', 'Retail and e-commerce', 'assortment, marketing, support', 0.35, 0.60, 0.02),
           ('healthcare', 'Healthcare', 'admissions, reporting, patient flows', 0.35, 0.50, 0.005),
           ('other', 'Other sector', 'administration, sales, support', 0.35, 0.55, 0.01)],
}

I18N = {
    'it': dict(locale='it-IT', month='mese', months='mesi', over36='oltre 36 mesi',
               pkg=dict(accelerator='AI Accelerator', transformation='AI Transformation', partnership='AI Partnership'),
               rec='In base ai dati inseriti consigliamo il percorso {pkg} ({inv}): risparmio stimato nel primo anno {ben}, con il 70% delle soluzioni a regime.',
               share='Stima ROI con PugliAI: {roi} nel primo anno e {sav} di risparmio annuo a regime. Calcola la tua: https://pugliai.com/roi-calculator.html'),
    'en': dict(locale='en-GB', month='month', months='months', over36='over 36 months',
               pkg=dict(accelerator='AI Accelerator', transformation='AI Transformation', partnership='AI Partnership'),
               rec='Based on your data we recommend the {pkg} programme ({inv}): estimated first-year savings {ben}, with 70% of the solutions at full run rate.',
               share='ROI estimate with PugliAI: {roi} in year one and {sav} of annual savings at run rate. Calculate yours: https://pugliai.com/en/roi-calculator.html'),
}

JS = r"""
(function () {
  var T = __I18N__;
  var fmtN = new Intl.NumberFormat(T.locale, { maximumFractionDigits: 0 });
  var fmtC = function (n) { return '€' + fmtN.format(Math.round(n)); };
  var fill = function (s, m) { return s.replace(/\{(\w+)\}/g, function (_, k) { return m[k]; }); };
  var sel = null;
  var opts = Array.prototype.slice.call(document.querySelectorAll('.industry-option'));
  opts.forEach(function (o) {
    o.addEventListener('click', function () {
      opts.forEach(function (x) { x.classList.remove('selected'); x.setAttribute('aria-pressed', 'false'); });
      o.classList.add('selected'); o.setAttribute('aria-pressed', 'true'); sel = o.dataset;
      document.getElementById('sectorError').hidden = true;
    });
  });
  function bindRange(id, outId) {
    var r = document.getElementById(id), o = document.getElementById(outId);
    r.addEventListener('input', function () { o.textContent = r.value; });
  }
  bindRange('processes', 'processesValue'); bindRange('hours', 'hoursValue');
  function set(id, v) { document.getElementById(id).textContent = v; }
  function calc() {
    if (!sel) { document.getElementById('sectorError').hidden = false; opts[0].focus(); return; }
    var revenue = parseFloat(document.getElementById('revenue').value) || 0;
    var employees = parseInt(document.getElementById('employees').value, 10) || 0;
    var processes = parseInt(document.getElementById('processes').value, 10) || 1;
    var hours = parseInt(document.getElementById('hours').value, 10) || 1;
    var share = parseFloat(sel.share), auto = parseFloat(sel.auto), uplift = parseFloat(sel.uplift);
    var hoursFreed = employees * share * hours * 46 * auto;
    var runRate = hoursFreed * 28 + processes * 4000;
    var year1 = runRate * 0.7;
    var investment, pkg;
    if (revenue > 50000000 || employees > 500) { investment = 100000; pkg = T.pkg.partnership; }
    else if (revenue > 10000000 || employees > 100) { investment = 60000; pkg = T.pkg.transformation; }
    else { investment = 20000; pkg = T.pkg.accelerator; }
    var roi = (year1 - investment) / investment * 100;
    var payback = year1 > 0 ? Math.ceil(investment / (year1 / 12)) : null;
    var cum3 = runRate * 2.7;
    set('hoursFreed', fmtN.format(Math.round(hoursFreed)));
    set('annualSavings', fmtC(runRate));
    set('firstYearSavings', fmtC(year1));
    set('roiPercentage', (roi < 0 ? '−' : '+') + fmtN.format(Math.abs(Math.round(roi))) + '%');
    set('paybackTime', payback === null ? '—' : (payback > 36 ? T.over36 : payback + ' ' + (payback === 1 ? T.month : T.months)));
    set('investment', fmtC(investment));
    set('revenueUplift', fmtC(revenue * uplift));
    set('recommendedPackage', fill(T.rec, { pkg: pkg, inv: fmtC(investment), ben: fmtC(year1) }));
    set('cumSavings3y', fmtC(cum3)); set('netBenefit3y', fmtC(cum3 - investment)); set('monthlyCost', fmtC(runRate / 12));
    document.getElementById('resultsCard').hidden = false;
    document.getElementById('projection').hidden = false;
    document.getElementById('initialMessage').hidden = true;
    if (window.innerWidth < 1024) document.getElementById('resultsCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof gtag === 'function') gtag('event', 'roi_calculated', { sector: sel.industry, package: pkg });
  }
  document.getElementById('calcForm').addEventListener('submit', function (e) { e.preventDefault(); calc(); });
  document.getElementById('copyBtn').addEventListener('click', function () {
    var text = fill(T.share, { roi: document.getElementById('roiPercentage').textContent, sav: document.getElementById('annualSavings').textContent });
    var msg = document.getElementById('copyMsg');
    var done = function () { msg.hidden = false; setTimeout(function () { msg.hidden = true; }, 3000); };
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, done); } else { done(); }
  });
})();
"""


def numbered(items):
    return '<ol class="numbered">' + ''.join(f'<li>{esc(t)}</li>' for t in items) + '</ol>'


def calculator(lang):
    it = lang == 'it'
    sectors = ''.join(
        f'<button type="button" class="industry-option" aria-pressed="false" data-industry="{k}" data-share="{sh}" data-auto="{au}" data-uplift="{up}"><strong>{esc(n)}</strong><span>{esc(d)}</span></button>'
        for k, n, d, sh, au, up in SECTORS[lang])
    L = dict(
        it=dict(h2='I dati della tua impresa', sector='Settore', sector_err='Seleziona il settore per calcolare la stima.', revenue='Fatturato annuo (€)', employees='Numero di dipendenti',
                processes='Processi da automatizzare', hours='Ore a settimana di attività ripetitive, per persona coinvolta', calc='Calcola il ROI',
                note='Stima indicativa basata sulle ipotesi descritte sotto. Non è un’offerta.',
                init_h='Inserisci i dati', init_p='Scegli il settore e compila i campi: la stima appare qui.',
                res_h='La tua stima', r_hours='Ore liberate all’anno', r_sav='Risparmio annuo a regime', r_y1='Risparmio nel primo anno', r_roi='ROI nel primo anno', r_pay='Tempo di rientro', r_inv='Investimento consigliato', r_up='Potenziale sui ricavi (non incluso nel ROI)',
                cta='Richiedi un’analisi dettagliata', cta_href='sessione-strategica.html', copy='Copia i risultati', copied='Risultati copiati negli appunti.',
                proj_h='Proiezione a 3 anni', p_cum='Risparmi cumulati in 3 anni', p_net='Beneficio netto dopo l’investimento', p_month='Costo di ogni mese di attesa',
                proj_note='70% del risparmio a regime nel primo anno, poi 100% nel secondo e nel terzo, meno l’investimento iniziale. Esclude eventuali canoni successivi.'),
        en=dict(h2='Your company data', sector='Sector', sector_err='Select a sector to run the estimate.', revenue='Annual revenue (€)', employees='Number of employees',
                processes='Processes to automate', hours='Hours a week of repetitive work, per person involved', calc='Calculate the ROI',
                note='Indicative estimate based on the assumptions described below. This is not an offer.',
                init_h='Enter your data', init_p='Choose the sector and fill in the fields: the estimate appears here.',
                res_h='Your estimate', r_hours='Hours freed per year', r_sav='Annual savings at run rate', r_y1='First-year savings', r_roi='First-year ROI', r_pay='Payback time', r_inv='Recommended investment', r_up='Revenue potential (not included in the ROI)',
                cta='Request a detailed analysis', cta_href='strategy-session.html', copy='Copy the results', copied='Results copied to the clipboard.',
                proj_h='Three-year projection', p_cum='Cumulative savings over 3 years', p_net='Net benefit after the investment', p_month='Cost of every month of waiting',
                proj_note='70% of run-rate savings in year one, then 100% in years two and three, minus the initial investment. Excludes any later fees.'),
    )[lang]
    form = (f'<form id="calcForm" class="card card--pad-lg" novalidate><h2 class="h4" style="margin:0 0 20px;">{L["h2"]}</h2>'
            f'<div class="field"><span class="label">{L["sector"]}</span><div class="industry-grid">{sectors}</div><p id="sectorError" class="caption" style="color:#b3261e;margin:6px 0 0;" hidden>{L["sector_err"]}</p></div>'
            f'<div class="grid grid--2 mt-6" style="gap:16px;">'
            f'<div class="field"><label for="revenue">{L["revenue"]}</label><input class="form-input" type="number" id="revenue" inputmode="numeric" min="100000" step="50000" value="5000000"></div>'
            f'<div class="field"><label for="employees">{L["employees"]}</label><input class="form-input" type="number" id="employees" inputmode="numeric" min="1" max="5000" value="50"></div></div>'
            f'<div class="field mt-6"><div class="range-row"><label for="processes">{L["processes"]}</label><output id="processesValue" for="processes">3</output></div><input type="range" id="processes" min="1" max="10" value="3"></div>'
            f'<div class="field mt-6"><div class="range-row"><label for="hours">{L["hours"]}</label><output id="hoursValue" for="hours">6</output></div><input type="range" id="hours" min="1" max="15" value="6"></div>'
            f'<div class="mt-8"><button class="btn btn--primary btn--block" type="submit">{L["calc"]}{icon("arrow", 16, 1.75)}</button></div>'
            f'<p class="caption muted mt-4" style="margin-bottom:0;">{L["note"]}</p></form>')
    proj_grid = grid([f'<dl class="spec"><dt>{esc(l)}</dt><dd id="{i}">—</dd></dl>' for l, i in [(L['p_cum'], 'cumSavings3y'), (L['p_net'], 'netBenefit3y'), (L['p_month'], 'monthlyCost')]], 3)
    results = (f'<div id="initialMessage" class="card card--pad-lg center-block" style="align-items:flex-start;text-align:left;max-width:none;">{icon_badge("chart")}<h3 class="h4" style="margin:0;">{L["init_h"]}</h3><p class="muted" style="margin:0;">{L["init_p"]}</p></div>'
               f'<div id="resultsCard" class="card card--pad-lg" hidden><h2 class="h4" style="margin:0 0 20px;">{L["res_h"]}</h2><div class="result-grid">'
               + ''.join(f'<div class="result-item"><span class="result-value" id="{i}">—</span><span class="result-label">{l}</span></div>' for i, l in
                         [('hoursFreed', L['r_hours']), ('annualSavings', L['r_sav']), ('firstYearSavings', L['r_y1']), ('roiPercentage', L['r_roi']), ('paybackTime', L['r_pay']), ('investment', L['r_inv'])])
               + f'</div><div class="result-item mt-4" style="background:var(--color-lilac-soft);"><span class="result-value" id="revenueUplift">—</span><span class="result-label">{L["r_up"]}</span></div>'
               f'<p id="recommendedPackage" class="mt-6" style="margin-bottom:0;"></p>'
               f'<div class="cluster mt-6">{btn(L["cta"], L["cta_href"], "primary")}<button type="button" class="btn btn--ghost" id="copyBtn">{L["copy"]}</button></div>'
               f'<p id="copyMsg" class="caption muted mt-2" hidden>{L["copied"]}</p></div>'
               f'<div id="projection" class="card card--pad-lg mt-6" hidden><h3 class="h5" style="margin:0 0 16px;">{L["proj_h"]}</h3>'
               + proj_grid +
               f'<p class="caption muted mt-4" style="margin-bottom:0;">{L["proj_note"]}</p></div>')
    return f'<div class="grid grid--5-7" style="align-items:start;">{form}<div>{results}</div></div>'


def roi(lang):
    it = lang == 'it'
    rows = [(n, f'{int(sh * 100)}%', f'{int(au * 100)}%', ('%g' % (up * 100)).replace('.', ',' if it else '.') + '%') for _k, n, _d, sh, au, up in SECTORS[lang]]
    if it:
        how = [
            'Ore liberate all’anno = dipendenti × quota di personale impegnata in processi ripetitivi (30–50% secondo il settore) × ore ripetitive a settimana per persona × 46 settimane × tasso di automazione (50–65% secondo il settore).',
            'Valore del tempo = ore liberate × €28 all’ora, costo aziendale medio di un’ora di lavoro impiegatizio (stima prudente).',
            'Risparmi di qualità = €4.000 per processo all’anno: errori, rilavorazioni e ritardi evitati.',
            'Risparmio a regime = valore del tempo + risparmi di qualità. Nel primo anno contiamo il 70% del valore a regime, perché le soluzioni entrano in produzione gradualmente.',
            'Investimento consigliato: AI Accelerator (€20.000) fino a 100 dipendenti o €10 milioni di fatturato; AI Transformation (€60.000) fino a 500 dipendenti o €50 milioni; AI Partnership (€100.000) oltre.',
            'ROI nel primo anno = (risparmio del primo anno − investimento) / investimento. Tempo di rientro = investimento / risparmio mensile del primo anno.',
            'Potenziale sui ricavi = 0,5–2% del fatturato secondo il settore. È mostrato a parte e non entra nel ROI.',
        ]
        thead = ['Settore', 'Personale nei processi ripetitivi', 'Tasso di automazione', 'Potenziale sui ricavi']
        how_html = section(section_head('Come calcoliamo', 'Ipotesi dichiarate, numeri prudenti.', 'Il calcolatore usa sette regole semplici. Le riportiamo per intero perché una stima si giudica dalle ipotesi.')
                           + '<div class="grid grid--7-5" style="align-items:start;">' + card(numbered(how), cls='card--pad-lg') + card('<p class="label" style="margin:0 0 12px;">Parametri per settore</p>' + table(thead, rows, brand_col=None), cls='card--pad-lg') + '</div>', cls='section--white')
        sections = [
            ('html', section(calculator('it'), cls='section--flush-top', id_='calcolatore')),
            ('html', how_html),
            ('faq', [
                ('Quanto è affidabile la stima?', 'È una stima indicativa, costruita con ipotesi prudenti e dichiarate: serve a capire l’ordine di grandezza, non a sostituire un’analisi. Nella sessione strategica gratuita costruiamo la stima sui tuoi processi reali.'),
                ('Perché il potenziale sui ricavi non è incluso nel ROI?', 'Perché dipende da fattori commerciali che il calcolatore non conosce: mercato, canali, stagionalità. Lo mostriamo a parte, come ordine di grandezza, e contiamo nel ROI solo i risparmi di costo, più facili da misurare.'),
                ('Cosa succede dopo il calcolo?', 'Puoi copiare i risultati e, se vuoi, prenotare la sessione strategica gratuita di 45 minuti: analizziamo i tuoi processi e ti consegniamo un report scritto con una stima del ROI più precisa.'),
            ]),
            ('cta_default',),
        ]
        spec = dict(path='roi-calculator.html', alt='en/roi-calculator.html',
                    title='Calcolatore ROI dell’AI per PMI: risparmi e rientro | PugliAI',
                    description='Calcola in due minuti quanto può rendere l’AI nella tua PMI: ore liberate, risparmio annuo, ROI nel primo anno e tempo di rientro. Ipotesi dichiarate, senza registrazione.',
                    eyebrow='Calcolatore ROI', h1='Quanto può rendere l’AI nella tua impresa.',
                    lead='Inserisci quattro dati e ottieni una stima di ore liberate, risparmio annuo, ROI e tempo di rientro. Ipotesi dichiarate, nessuna registrazione.',
                    breadcrumb=[('Home', 'index.html'), ('Risorse', 'risorse.html'), ('Calcolatore ROI', '')], crumb_urls=['index.html', 'risorse.html', 'roi-calculator.html'],
                    sections=sections)
        page, body = detail_page('it', spec)
    else:
        how = [
            'Hours freed per year = employees × share of staff on repetitive processes (30–50% depending on the sector) × repetitive hours a week per person × 46 weeks × automation rate (50–65% depending on the sector).',
            'Value of time = hours freed × €28 an hour, the average fully loaded cost of an hour of office work in Italy (a conservative estimate).',
            'Quality savings = €4,000 per process per year: errors, rework and delays avoided.',
            'Run-rate savings = value of time + quality savings. In year one we count 70% of the run rate, because solutions go into production gradually.',
            'Recommended investment: AI Accelerator (€20,000) up to 100 employees or €10 million revenue; AI Transformation (€60,000) up to 500 employees or €50 million; AI Partnership (€100,000) above that.',
            'First-year ROI = (first-year savings − investment) / investment. Payback time = investment / first-year monthly savings.',
            'Revenue potential = 0.5–2% of revenue depending on the sector. It is shown separately and is not part of the ROI.',
        ]
        thead = ['Sector', 'Staff on repetitive processes', 'Automation rate', 'Revenue potential']
        how_html = section(section_head('How we calculate', 'Stated assumptions, conservative numbers.', 'The calculator uses seven simple rules. We list them in full because an estimate is only as good as its assumptions.')
                           + '<div class="grid grid--7-5" style="align-items:start;">' + card(numbered(how), cls='card--pad-lg') + card('<p class="label" style="margin:0 0 12px;">Parameters by sector</p>' + table(thead, rows, brand_col=None), cls='card--pad-lg') + '</div>', cls='section--white')
        sections = [
            ('html', section(calculator('en'), cls='section--flush-top', id_='calculator')),
            ('html', how_html),
            ('faq', [
                ('How reliable is the estimate?', 'It is an indicative estimate built on conservative, stated assumptions: it tells you the order of magnitude, it does not replace an analysis. In the free strategy session we build the estimate on your real processes.'),
                ('Why is the revenue potential not part of the ROI?', 'Because it depends on commercial factors the calculator does not know: market, channels, seasonality. We show it separately as an order of magnitude and count only cost savings in the ROI, which are easier to measure.'),
                ('What happens after the calculation?', 'You can copy the results and, if you wish, book the free 45-minute strategy session: we review your processes and deliver a written report with a more precise ROI estimate.'),
            ]),
            ('cta_default',),
        ]
        spec = dict(path='en/roi-calculator.html', alt='roi-calculator.html',
                    title='AI ROI calculator for SMEs: savings and payback | PugliAI',
                    description='Estimate in two minutes what artificial intelligence could return in your company: hours freed, annual savings, first-year ROI and payback time. Stated, conservative assumptions, no sign-up.',
                    eyebrow='ROI calculator', h1='What AI could return in your company.',
                    lead='Enter four figures and get an estimate of hours freed, annual savings, ROI and payback time. Stated assumptions, no sign-up.',
                    breadcrumb=[('Home', 'index.html'), ('Resources', 'resources.html'), ('ROI calculator', '')], crumb_urls=['en/index.html', 'en/resources.html', 'en/roi-calculator.html'],
                    sections=sections)
        page, body = detail_page('en', spec)
    page.extra_scripts = '<script>' + JS.replace('__I18N__', json.dumps(I18N[lang], ensure_ascii=False)) + '</script>'
    return page, body


def build_all():
    yield roi('it')
    yield roi('en')
