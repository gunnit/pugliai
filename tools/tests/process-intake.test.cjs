const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../../src/assets/js/process-intake.js'), 'utf8');

function contactPage(url) {
  const handlers = { window: {}, document: {}, inquiry: {} };
  const input = {
    id: 'process-description', classList: { remove() {} },
    setAttribute() {}, removeAttribute() {}, setCustomValidity() {},
  };
  const fields = { style: {}, querySelectorAll: selector => selector === 'label' ? [] : [input] };
  const inquiry = { value: 'general', addEventListener: (name, fn) => { handlers.inquiry[name] = fn; } };
  const message = { id: 'message' };
  const messageLabel = {};
  const submit = {};
  const elements = {
    '[name="inquiry_type"]': inquiry, '[data-process-fields]': fields,
    '[name="message"]': message, 'label[for="message"]': messageLabel, '[data-submit-label]': submit,
  };
  const form = {
    dataset: { processMessage: 'Process', generalMessage: 'Message', processPlaceholder: 'Describe the process', generalPlaceholder: 'Your enquiry', processSubmit: 'Evaluate', generalSubmit: 'Send' },
    querySelector: selector => elements[selector] || null,
    addEventListener() {},
  };
  const window = { location: new URL(url), addEventListener: (name, fn) => { handlers.window[name] = fn; }, setTimeout: fn => fn() };
  const document = { readyState: 'complete', querySelectorAll: () => [form], addEventListener: (name, fn) => { handlers.document[name] = fn; } };
  vm.runInNewContext(source, { window, document, URL });
  return {
    inquiry, input, fields, message, submit,
    chooseGeneral() { inquiry.value = 'general'; handlers.inquiry.change(); },
    navigateHash(hash) { window.location.hash = hash; handlers.window.hashchange(); },
    click(href, modifiers = {}) {
      const anchor = { href: new URL(href, window.location).href, target: '', hasAttribute: () => false };
      handlers.document.click({ button: 0, target: { closest: () => anchor }, ...modifiers });
    },
  };
}

for (const route of ['/contatti.html', '/en/contact.html']) {
  test(`${route}: a same-page CTA selects process intake and allows a later manual choice`, () => {
    const page = contactPage(`https://pugliai.com${route}`);
    assert.equal(page.fields.hidden, true);
    page.click(`${route}#valuta-processo`);
    assert.equal(page.inquiry.value, 'process');
    assert.equal(page.input.required, true);
    assert.equal(page.fields.disabled, false);
    assert.equal(page.submit.textContent, 'Evaluate');
    page.chooseGeneral();
    assert.equal(page.input.required, false);
    assert.equal(page.fields.hidden, true);
    assert.equal(page.message.placeholder, 'Your enquiry');
  });

  test(`${route}: repeated fragment visits work without reacting to modified/external clicks`, () => {
    const page = contactPage(`https://pugliai.com${route}#valuta-processo`);
    assert.equal(page.inquiry.value, 'process');
    page.chooseGeneral();
    page.click('#valuta-processo', { ctrlKey: true });
    page.click('https://example.com/contatti.html#valuta-processo');
    assert.equal(page.inquiry.value, 'general');
    page.click('#valuta-processo');
    assert.equal(page.inquiry.value, 'process');
    page.chooseGeneral();
    page.navigateHash('#valuta-processo');
    assert.equal(page.inquiry.value, 'process');
  });
}
