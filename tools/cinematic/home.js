import { animate, scroll, inView, stagger } from 'motion';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let cleanups = [];
const heroItems = [...document.querySelectorAll('.hero-enter')];
const revealItems = [...document.querySelectorAll('.reveal')];

function setupMotion() {
  cleanups.forEach((cleanup) => cleanup());
  cleanups = [];
  [...heroItems, ...revealItems].forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  document.querySelector('.hero-media').style.transform = 'none';
  if (reducedMotion.matches) return;

  const heroAnimation = animate(heroItems, { opacity: [0, 1], y: [18, 0] }, {
    duration: 0.65, delay: stagger(0.09, { startDelay: 0.08 }), ease: [0.2, 0.7, 0.2, 1],
  });
  cleanups.push(() => heroAnimation.stop());

  // Only animate an element when it enters; content remains visible without JS.
  const stopInView = inView(revealItems, (element) => {
    const animation = animate(element, { opacity: [0.25, 1], y: [20, 0] }, { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] });
    cleanups.push(() => animation.stop());
  }, { margin: '0px 0px -40px 0px' });
  cleanups.push(stopInView);

  const media = document.querySelector('.hero-media');
  const mediaAnimation = animate(media, { y: [0, 70], scale: [1, 1.05] }, { ease: 'linear' });
  const stopScroll = scroll(mediaAnimation, { target: document.querySelector('.hero'), offset: ['start start', 'end start'] });
  cleanups.push(() => { stopScroll(); mediaAnimation.stop(); });
}

setupMotion();
reducedMotion.addEventListener('change', setupMotion);

const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab, moveFocus = false) {
  tabs.forEach((item) => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
  if (moveFocus) tab.focus({ preventScroll: true });
  // Keep the active option visible in the narrow-screen horizontal tab list.
  const list = tab.parentElement;
  const left = tab.offsetLeft - list.offsetLeft;
  if (left < list.scrollLeft || left + tab.offsetWidth > list.scrollLeft + list.clientWidth) {
    list.scrollTo({ left: Math.max(0, left - 12), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  if (!reducedMotion.matches) {
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    animate(panel, { opacity: [0, 1], y: [6, 0] }, { duration: 0.22, ease: 'easeOut' });
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabs[next], true); }
  });
});

let demoStep = 0;
const isEnglish = document.documentElement.lang === 'en';
const demoMessages = isEnglish
  ? ['The information becomes a draft to review.', 'The team reviews and decides what happens next.', 'The process starts with a request.']
  : ['Le informazioni diventano una bozza da verificare.', 'Il team verifica e decide come procedere.', 'Il processo parte dalla richiesta.'];
document.querySelector('.demo-next').addEventListener('click', () => {
  const message = demoMessages[demoStep];
  demoStep = (demoStep + 1) % 3;
  document.querySelectorAll('.workflow-steps li').forEach((item, index) => {
    item.classList.toggle('is-current', index === demoStep);
    item.classList.toggle('is-complete', index < demoStep);
  });
  document.querySelector('.demo-status').textContent = `0${demoStep + 1} / 03`;
  document.querySelector('#demo-live').textContent = message;
  const button = document.querySelector('.demo-next');
  button.innerHTML = `${demoStep === 2 ? (isEnglish ? 'Restart' : 'Ricomincia') : (isEnglish ? 'Next step' : 'Passo successivo')} <span aria-hidden="true">${demoStep === 2 ? '↺' : '→'}</span>`;
  if (!reducedMotion.matches) animate(document.querySelector('.workflow-steps .is-current .step-icon'), { scale: [0.94, 1] }, { duration: 0.2 });
});

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open && !reducedMotion.matches) {
      animate(detail.querySelector('.answer'), { opacity: [0, 1], y: [-4, 0] }, { duration: 0.2 });
    }
  });
});

// Use the displayed client year as a fallback; no analytics or third-party embeds.
document.querySelector('#year').textContent = String(new Date().getFullYear());
window.addEventListener('pagehide', () => {
  cleanups.forEach((cleanup) => cleanup());
  reducedMotion.removeEventListener('change', setupMotion);
});
window.addEventListener('pageshow', (event) => {
  if (event.persisted) { setupMotion(); reducedMotion.addEventListener('change', setupMotion); }
});
