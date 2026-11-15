import { animate, scroll, inView, stagger } from 'motion';
import { readMotionPause, writeMotionPause } from './motion-preference.js';

const root = document.documentElement;
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const compact = matchMedia('(max-width: 719px)');
const print = matchMedia('print');
const toggle = document.querySelector('.motion-toggle');
const progress = document.querySelector('.motion-progress');
const english = root.lang === 'en';
const labels = english
  ? { pause: 'Pause effects', play: 'Enable effects', reduced: 'Reduced motion' }
  : { pause: 'Pausa effetti', play: 'Attiva effetti', reduced: 'Effetti ridotti' };
const protectedSelector = 'form, input, select, textarea, output, [contenteditable="true"], [aria-live], [role="status"], [role="alert"], #resultsCard, .result-value';
const safe = (element) => !element.closest(protectedSelector) && !element.querySelector(protectedSelector);
const ease = [0.16, 1, 0.3, 1];
const hero = document.querySelector('.hero--cinematic, .page-head, .article-hero, .has-sticky-cta .hero, .success-hero');
let paused = readMotionPause();
let suspended = false;
let entered = false;
let cleanups = [];
let originals = new Map();

// Optical backgrounds get their own layer; the text and the form remain separate.
let optical;
if (hero?.matches('.page-head, .article-hero, .has-sticky-cta .hero')) {
  hero.classList.add('motion-optical-hero');
  optical = document.createElement('span');
  optical.className = 'motion-optical-layer';
  optical.setAttribute('aria-hidden', 'true');
  hero.prepend(optical);
}
const heroText = hero?.querySelector('.hero__text, .page-head__inner, .article-hero-content') || (hero?.matches('.success-hero') ? hero : null);
const heroItems = heroText ? [...heroText.children].filter(safe) : [];
const photoHero = hero?.querySelector(':scope > .hero__media > img');
const reveals = [...document.querySelectorAll(
  'main .section-head, main .card, main .step, main .stat, main .band__text, main .cta-band__inner, main .cta-box, main .article-content > h2, main .prose > h2'
)].filter((element) => safe(element) && !hero?.contains(element) &&
  !element.parentElement.closest('.card, .cta-band__inner, .cta-box') &&
  (!element.closest('.article-content, .prose') || element.matches('h2, .cta-box')));
const mediaFrames = [...document.querySelectorAll('main .photo-fig, main .band__media')].filter(safe);
const standalonePhotos = [...document.querySelectorAll('main img.photo')].filter((el) =>
  safe(el) && !el.closest('.photo-fig, .band__media, .hero__media'));
for (const figure of mediaFrames.filter((el) => el.matches('figure'))) {
  const image = figure.querySelector('img');
  if (!image) continue;
  const window = document.createElement('div');
  window.className = 'motion-photo-window';
  image.before(window);
  window.append(image);
}
const tiltTargets = [...document.querySelectorAll('main .card, main .hero__glass, main .cta-band__inner, main .cta-box')]
  .filter((el) => safe(el) && !el.closest('.article-content, .prose') &&
    !el.parentElement.closest('.card, .cta-band__inner, .cta-box'));

function remember(elements) {
  for (const element of elements) {
    if (!originals.has(element)) originals.set(element, element.getAttribute('style'));
    element.setAttribute('data-motion-node', '');
  }
}
function run(elements, keyframes, options = {}) {
  const targets = elements instanceof Element ? [elements] : [...elements];
  if (!targets.length) return null;
  remember(targets);
  const animation = animate(targets, keyframes, options);
  cleanups.push(() => animation.cancel());
  return animation;
}
function scrub(element, keyframes, target, offset = ['start end', 'end start']) {
  if (!element) return;
  const animation = run(element, keyframes, { ease: 'linear' });
  cleanups.push(scroll(animation, { target, offset }));
}
function clear() {
  cleanups.reverse().forEach((cleanup) => cleanup());
  cleanups = [];
  originals.forEach((style, element) => {
    if (style === null) element.removeAttribute('style');
    else element.setAttribute('style', style);
  });
  originals.clear();
  document.querySelectorAll('.motion-step-active').forEach((el) => el.classList.remove('motion-step-active'));
}
function depth(element, signal) {
  remember([element]);
  element.classList.add('motion-tilt');
  let bounds;
  let frame = 0;
  let transition;
  const leave = () => {
    cancelAnimationFrame(frame);
    bounds = null;
    transition?.stop();
    transition = animate(element, { rotateX: 0, rotateY: 0 }, { duration: 0.32, ease });
  };
  element.addEventListener('pointerenter', () => { bounds = element.getBoundingClientRect(); }, { signal, passive: true });
  element.addEventListener('pointermove', (event) => {
    if (element.matches(':focus-within')) return;
    bounds ||= element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      transition?.stop();
      transition = animate(element, { rotateX: -y * 7, rotateY: x * 7 }, { duration: 0.2, ease: 'easeOut' });
    });
  }, { signal, passive: true });
  element.addEventListener('pointerleave', leave, { signal, passive: true });
  element.addEventListener('focusin', leave, { signal });
  cleanups.push(() => { cancelAnimationFrame(frame); transition?.stop(); });
}

function setup() {
  clear();
  const active = !paused && !preference.matches && !print.matches;
  root.dataset.motion = active ? 'active' : preference.matches ? 'reduced' : 'paused';
  if (toggle) {
    toggle.hidden = false;
    toggle.disabled = preference.matches;
    toggle.setAttribute('aria-pressed', String(!active));
    toggle.querySelector('.motion-toggle-label').textContent = preference.matches ? labels.reduced : active ? labels.pause : labels.play;
    toggle.querySelector('.motion-toggle-icon').textContent = active ? 'Ⅱ' : '▷';
  }
  if (!active || suspended || document.hidden) return;
  const small = compact.matches;
  if (!entered && window.scrollY < 100) {
    run(heroItems, { opacity: [0.15, 1], y: [26, 0] }, { duration: 0.7, delay: stagger(0.075), ease });
    entered = true;
  }
  if (progress) {
    const animation = run(progress, { scaleX: [0, 1] }, { ease: 'linear' });
    cleanups.push(scroll(animation));
  }
  if (hero) {
    scrub(photoHero || optical, { y: [0, small ? 55 : 130], scale: [1.16, 1.26] }, hero, ['start start', 'end start']);
    if (heroText && safe(heroText)) scrub(heroText, { y: [0, small ? -24 : -55] }, hero, ['start start', 'end start']);
  }
  const seen = new WeakSet();
  cleanups.push(inView(reveals, (element) => {
    if (seen.has(element)) return;
    seen.add(element);
    const children = [...element.parentElement.children];
    const delay = element.matches('.card, .step, .stat') ? (children.indexOf(element) % 4) * 0.055 : 0;
    const proseHeading = !!element.closest('.article-content, .prose');
    // Scroll and pointer transforms have separate targets: the card owns hover,
    // while its opacity is the only entrance property when it also tilts.
    run(element, tiltTargets.includes(element) ? { opacity: [0.12, 1] } : {
      opacity: [0.12, 1], y: [proseHeading ? 8 : 32, 0],
    }, { duration: proseHeading ? 0.35 : 0.65, delay, ease });
    if (element.matches('.step')) element.classList.add('motion-step-active');
  }, { margin: '0px 0px -30px 0px' }));
  for (const frame of mediaFrames) {
    frame.classList.add('motion-photo-frame');
    const image = frame.querySelector('img');
    scrub(image, { y: ['-4%', '4%'], scale: [1.12, 1.12] }, frame);
  }
  for (const image of standalonePhotos) {
    scrub(image, { transform: [
      'perspective(1400px) translateY(28px) rotateY(-5deg) rotateX(4deg) scale(.95)',
      'perspective(1400px) translateY(0px) rotateY(0deg) rotateX(0deg) scale(1)',
      'perspective(1400px) translateY(-15px) rotateY(2deg) rotateX(-2deg) scale(.98)',
    ] }, image);
  }
  if (finePointer.matches) {
    const abort = new AbortController();
    cleanups.push(() => abort.abort());
    tiltTargets.forEach((el) => depth(el, abort.signal));
  }
}

// Native details keep disclosure and keyboard behavior; only the answer fades.
document.querySelectorAll('details.faq__item').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    const answer = detail.querySelector('.faq__a');
    if (detail.open && answer && safe(answer) && root.dataset.motion === 'active' && !suspended) {
      run(answer, { opacity: [0.25, 1], y: [-4, 0] }, { duration: 0.2, ease });
    }
  });
});
toggle?.addEventListener('click', () => { paused = !paused; writeMotionPause(paused); setup(); });
for (const media of [preference, compact, finePointer, print]) media.addEventListener('change', setup);
document.addEventListener('visibilitychange', setup);
window.addEventListener('pagehide', () => { suspended = true; clear(); });
window.addEventListener('pageshow', (event) => {
  if (event.persisted) { paused = readMotionPause(); suspended = false; setup(); }
});
setup();
