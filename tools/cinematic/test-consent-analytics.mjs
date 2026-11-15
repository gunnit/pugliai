// Verify consent races without contacting Google or altering browser state.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source = fs.readFileSync('src/assets/js/consent-analytics.js', 'utf8');
async function harness(initial = null, blocked = false) {
  let choice = initial;
  const events = new Map(), scripts = [], idle = [];
  const window = {
    addEventListener: (name, fn) => events.set(name, fn),
    PugliAIConsent: { read: () => choice },
    requestIdleCallback: true,
  };
  const document = {
    currentScript: { dataset: { analyticsId: 'G-L7711R1PDP' } },
    fonts: { ready: Promise.resolve() },
    querySelector: () => ({ decode: () => Promise.resolve() }),
    createElement: () => ({ addEventListener(name, fn) { this[name] = fn; } }),
    head: { append: (script) => scripts.push(script) },
  };
  vm.runInNewContext(source, { window, document,
    localStorage: { getItem() { if (blocked) throw Error('unavailable'); return JSON.stringify(choice); } },
    requestAnimationFrame: (fn) => fn(), requestIdleCallback: (fn) => idle.push(fn), setTimeout: (fn) => idle.push(fn),
  });
  return { scripts, async settle() { await new Promise(setImmediate); },
    flush() { while (idle.length) idle.shift()(); },
    choose(value) { choice = value; events.get('pugliai:consent-change')(); },
    storage(value) { choice = value; events.get('storage')({ key: 'cookieConsent' }); },
  };
}
const fresh = await harness(); await fresh.settle(); fresh.flush(); assert.equal(fresh.scripts.length, 0);
fresh.choose({ analytics: true }); await fresh.settle(); fresh.flush(); assert.equal(fresh.scripts.length, 1);
assert.equal(fresh.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-L7711R1PDP');
fresh.choose({ analytics: true }); await fresh.settle(); fresh.flush(); assert.equal(fresh.scripts.length, 1);
const withdrawn = await harness(); withdrawn.choose({ analytics: true }); await withdrawn.settle(); withdrawn.choose({ analytics: false }); withdrawn.flush(); assert.equal(withdrawn.scripts.length, 0);
withdrawn.choose({ analytics: true }); await withdrawn.settle(); withdrawn.flush(); assert.equal(withdrawn.scripts.length, 1);
const returning = await harness({ analytics: true }); await returning.settle(); returning.flush(); assert.equal(returning.scripts.length, 1);
const unsaved = await harness(null, true); unsaved.choose({ analytics: true }); await unsaved.settle(); unsaved.flush(); assert.equal(unsaved.scripts.length, 1);
const tab = await harness(); tab.storage({ marketing: true }); await tab.settle(); tab.flush(); assert.equal(tab.scripts.length, 1);
const failed = await harness({ analytics: true }); await failed.settle(); failed.flush(); failed.scripts[0].error(); failed.choose({ analytics: true }); await failed.settle(); failed.flush(); assert.equal(failed.scripts.length, 2);
console.log('PASS: no-consent, grant, duplicate guard, withdrawal race, returning consent, blocked storage, cross-tab consent and error retry.');
