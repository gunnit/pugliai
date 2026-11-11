import { animate, inView, stagger } from 'motion';

// The same entrance rhythm as the homepage, applied only to editorial content.
// No element is hidden in CSS or before it enters the viewport: the entire page
// remains readable when JavaScript is unavailable or reduced motion is enabled.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const ease = [0.2, 0.7, 0.2, 1];
const animatedElements = new Set();
const runningAnimations = new Set();
let stopObserving = () => {};
let suspended = false;

const hero = document.querySelector('.hero--inner, .hero, .page-head, .lp-hero, .article-hero');
const heroItems = hero ? [...hero.querySelectorAll(
  '.hero__text > .eyebrow, .hero__text > h1, .hero__text > .lead, .hero__text > .hero__actions, ' +
  '.page-head__inner > .eyebrow, .page-head__inner > h1, .page-head__inner > .lead, .page-head__inner > .hero__actions, ' +
  '.lp-hero h1, .lp-hero > .lead, .article-category, .article-hero h1, .article-meta-hero'
)] : [];

// Keep forms, calculator values and long article prose entirely stationary.
const revealItems = [...document.querySelectorAll(
  'main .section-head, main .photo-fig, main .band__media, main .band__text, ' +
  'main .cta-band__inner, main .cta-box, main .article-content > h2'
)].filter((element) => !hero?.contains(element) && !element.closest('form') &&
  !element.querySelector('form, input, select, textarea, [role="status"], [aria-live]'));

function play(elements, keyframes, options) {
  const targets = Array.isArray(elements) ? elements : [elements];
  if (!targets.length) return;
  targets.forEach((element) => animatedElements.add(element));
  const animation = animate(elements, keyframes, { ease, ...options });
  runningAnimations.add(animation);
  animation.then(() => runningAnimations.delete(animation));
}

function clearMotion() {
  stopObserving();
  stopObserving = () => {};
  runningAnimations.forEach((animation) => animation.stop());
  runningAnimations.clear();
  animatedElements.forEach((element) => {
    element.style.opacity = '1';
    element.style.transform = 'none';
  });
  animatedElements.clear();
}

function setupMotion({ enter = false } = {}) {
  clearMotion();
  if (suspended || motionPreference.matches) return;

  if (enter && window.scrollY < 80) {
    play(heroItems, { opacity: [0.25, 1], y: [14, 0] }, {
      duration: 0.48, delay: stagger(0.065),
    });
  }

  const seen = new WeakSet();
  stopObserving = inView(revealItems, (element) => {
    if (seen.has(element)) return;
    seen.add(element);
    play(element, { opacity: [0.45, 1], y: [12, 0] }, { duration: 0.42 });
  }, { margin: '0px 0px -28px 0px' });
}

// Native <details> continues to own focus, keyboard input and disclosure state.
document.querySelectorAll('details.faq__item').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (suspended || motionPreference.matches || !detail.open) return;
    const answer = detail.querySelector('.faq__a');
    if (answer) play(answer, { opacity: [0.4, 1], y: [-4, 0] }, { duration: 0.18 });
  });
});

motionPreference.addEventListener('change', () => setupMotion());
window.addEventListener('pagehide', () => {
  suspended = true;
  clearMotion();
});
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    suspended = false;
    setupMotion();
  }
});

setupMotion({ enter: true });
