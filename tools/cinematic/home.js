import { animate as motionAnimate } from 'motion/mini';

import { setupScene } from './scene-motion.js';

const uiAnimations = new Set();
function animate(...args) {
  const animation = motionAnimate(...args);
  uiAnimations.add(animation);
  animation.then(() => uiAnimations.delete(animation));
  return animation;
}
document.documentElement.addEventListener('scene-reset', () => {
  uiAnimations.forEach((animation) => animation.cancel());
  uiAnimations.clear();
});

const motionAllowed = () => document.documentElement.dataset.motion === 'active';
setupScene();

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
    list.scrollTo({ left: Math.max(0, left - 12), behavior: motionAllowed() ? 'smooth' : 'instant' });
  }
  if (motionAllowed()) {
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    animate(panel, { opacity: [0, 1], transform: ['translateY(6px)', 'translateY(0px)'] }, { duration: 0.22, ease: 'easeOut' });
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
  if (motionAllowed()) animate(document.querySelector('.workflow-steps .is-current .step-icon'), { transform: ['scale(.94)', 'scale(1)'] }, { duration: 0.2 });
});

document.querySelectorAll('.question-list details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open && motionAllowed()) {
      animate(detail.querySelector('.answer'), { opacity: [0, 1], transform: ['translateY(-4px)', 'translateY(0px)'] }, { duration: 0.2 });
    }
  });
});

// Use the displayed client year as a fallback; no analytics or third-party embeds.
document.querySelector('#year').textContent = String(new Date().getFullYear());
