import { animate } from 'motion/mini';
import { scroll, inView, stagger } from 'motion';
import { readMotionPause, writeMotionPause } from './motion-preference.js';

// One owner for ambient motion: pause, preferences and back/forward all rebuild
// from the same static page. Content is never hidden while waiting for JavaScript.
export function setupScene() {
  const root = document.documentElement;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const compact = matchMedia('(max-width: 700px)');
  const connection = navigator.connection;
  const video = document.querySelector('.hero-video');
  const toggle = document.querySelector('.motion-toggle');
  const hero = document.querySelector('.hero');
  const english = root.lang === 'en';
  const labels = english ? { reduced: 'Reduced motion', pause: 'Pause effects', play: 'Enable effects' } : { reduced: 'Effetti ridotti', pause: 'Pausa effetti', play: 'Attiva effetti' };
  let userPaused = readMotionPause();
  let explicitPlayback = false;
  let heroVisible = true;
  let loaded = false;
  let videoFailed = false;
  let disposed = false;
  let entered = false;
  let videoReady = false;
  let videoFrame = 0;
  let cleanups = [];
  let heroLoops = [];
  let originals = new Map();

  const allowed = () => !userPaused && !preference.matches;
  const mayPlay = () => videoReady && allowed() && !document.hidden && heroVisible && !videoFailed && (!connection?.saveData || explicitPlayback);
  function syncVideo() {
    if (!mayPlay()) { video.pause(); return; }
    if (!loaded) {
      video.querySelectorAll('source').forEach((source) => { source.src = compact.matches ? source.dataset.srcMobile || source.dataset.src : source.dataset.src; });
      loaded = true;
      video.load();
    }
    // Autoplay can be refused by a browser or device power-saving policy.
    video.play().catch(() => { video.classList.remove('is-playing'); });
  }
  // Let the poster, headline and fonts paint before starting the film download.
  const prepareVideo = () => {
    if (disposed) return;
    videoFrame = requestAnimationFrame(() => {
      videoFrame = requestAnimationFrame(() => { videoReady = true; syncVideo(); });
    });
  };
  const poster = document.querySelector('.hero-image');
  Promise.all([document.fonts.ready, poster.decode().catch(() => {})]).then(prepareVideo);
  const onPlaying = () => video.classList.add('is-playing');
  const onVideoError = () => { videoFailed = true; video.classList.remove('is-playing'); };
  video.addEventListener('playing', onPlaying);
  video.addEventListener('error', onVideoError);
  const heroObserver = new IntersectionObserver(([entry]) => {
    heroVisible = entry.isIntersecting;
    heroLoops.forEach((animation) => heroVisible && allowed() && !document.hidden ? animation.play() : animation.pause());
    syncVideo();
  }, { threshold: 0 });
  heroObserver.observe(hero);

  function remember(elements) {
    for (const element of elements) {
      if (!originals.has(element)) originals.set(element, element.getAttribute('style'));
    }
  }
  function run(elements, keyframes, options = {}) {
    const targets = typeof elements === 'string' ? [...document.querySelectorAll(elements)] : elements instanceof Element ? [elements] : [...elements];
    if (!targets.length) return null;
    remember(targets);
    const animation = animate(targets, keyframes, options);
    cleanups.push(() => animation.cancel());
    return animation;
  }
  function scrub(element, keyframes, target, offset = ['start end', 'end start']) {
    const animation = run(element, keyframes, { ease: 'linear' });
    if (animation) cleanups.push(scroll(animation, { target, offset }));
  }
  function clear() {
    cleanups.reverse().forEach((cleanup) => cleanup());
    cleanups = [];
    heroLoops = [];
    root.dispatchEvent(new Event('scene-reset'));
    originals.forEach((style, element) => {
      if (style === null) element.removeAttribute('style');
      else element.setAttribute('style', style);
    });
    originals = new Map();
    document.querySelectorAll('.is-reading').forEach((element) => element.classList.remove('is-reading'));
  }

  function build() {
    clear();
    const active = allowed();
    root.dataset.motion = active ? 'active' : preference.matches ? 'reduced' : 'paused';
    toggle.hidden = false;
    toggle.disabled = preference.matches;
    toggle.setAttribute('aria-pressed', String(!active));
    toggle.querySelector('.motion-toggle-label').textContent = preference.matches ? labels.reduced : active ? labels.pause : labels.play;
    toggle.querySelector('.motion-toggle-icon').textContent = active ? 'Ⅱ' : '▷';
    syncVideo();
    if (!active || document.hidden) return;
    const small = compact.matches;
    const ease = [0.16, 1, 0.3, 1];

    // Separate layers let camera travel and pointer depth coexist.
    if (!entered && window.scrollY < hero.offsetHeight) {
      entered = true;
      run('.hero-enter', { transform: ['translateY(24px)', 'translateY(0px)'] }, {
        duration: 0.9, delay: stagger(0.1, { startDelay: 0.08 }), ease,
      });
    }
    scrub(document.querySelector('.hero-media'), { transform: ['translateY(0px) scale(1.02)', `translateY(${small ? 90 : 200}px) scale(1.22)`] }, hero, ['start start', 'end start']);
    scrub(document.querySelector('.hero-content'), { transform: ['translateY(0px)', `translateY(${small ? -45 : -140}px)`], opacity: [1, 0] }, hero, ['start start', 'end start']);
    scrub(document.querySelector('.hero-atmosphere'), { transform: ['translateY(0px) rotate(0deg)', 'translateY(-240px) rotate(9deg)'], opacity: [0.65, 0] }, hero, ['start start', 'end start']);
    document.querySelectorAll('.light-thread').forEach((thread, index) => {
      const angle = [60, 65, 72][index];
      heroLoops.push(run(thread, { transform: [`translateX(-25px) rotate(${angle}deg)`, `translateX(25px) rotate(${angle}deg)`], opacity: [0.1, 0.55, 0.1] }, { duration: 6, repeat: Infinity, repeatType: 'reverse', delay: index * 0.6, ease: 'easeInOut' }));
    });
    heroLoops.push(run('.scroll-cue', { transform: ['translateY(0px)', 'translateY(7px)', 'translateY(0px)'] }, { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }));
    if (!heroVisible) heroLoops.forEach((animation) => animation.pause());
    const progressAnimation = run('.reading-progress', { transform: ['scaleX(0)', 'scaleX(1)'] }, { ease: 'linear' });
    cleanups.push(scroll(progressAnimation));

    const revealTargets = [...document.querySelectorAll('.reveal')].filter((el) => !el.matches('.intro-figure, .method-step, .contact-card'));
    cleanups.push(inView(revealTargets, (element) => {
      run(element, { opacity: [0.15, 1], transform: ['translateY(42px)', 'translateY(0px)'] }, { duration: 0.75, ease });
    }, { margin: '0px 0px -45px 0px' }));

    const intro = document.querySelector('.intro-figure');
    scrub(intro, { transform: [
      `perspective(1400px) translateY(${small ? 24 : 65}px) rotateX(7deg) rotateY(-9deg) scale(.92)`,
      'perspective(1400px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)',
      'perspective(1400px) translateY(-25px) rotateX(-3deg) rotateY(3deg) scale(1)',
    ] }, intro, ['start 95%', 'end 5%']);
    scrub(intro.querySelector('img'), { transform: ['translateY(-5%) scale(1.15)', 'translateY(5%) scale(1.15)'] }, intro);
    const story = document.querySelector('.human-story');
    scrub(story.querySelector('.story-image'), { transform: [`translateY(${small ? -35 : -85}px) scale(1.16)`, `translateY(${small ? 35 : 85}px) scale(1.16)`] }, story);
    scrub(story.querySelector('.story-copy'), { transform: ['translateY(35px)', 'translateY(-35px)'] }, story);
    const contact = document.querySelector('.contact-section');
    scrub(contact, { transform: [
      'perspective(1500px) translateY(65px) rotateX(12deg) scale(.94)',
      'perspective(1500px) translateY(0px) rotateX(0deg) scale(1)',
    ] }, contact, ['start end', 'start 30%']);

    const steps = [...document.querySelectorAll('.method-step')];
    steps.forEach((step, index) => {
      scrub(step, { transform: [
        `perspective(1200px) translateY(30px) rotateX(${small ? 3 : 9}deg) scale(.96)`,
        'perspective(1200px) translateY(0px) rotateX(0deg) scale(1)',
      ] }, step, ['start 92%', 'start 40%']);
      cleanups.push(inView(step, () => {
        step.classList.add('is-reading');
        return () => step.classList.remove('is-reading');
      }, { margin: '-15% 0px -35% 0px' }));
      step.style.setProperty('--step-index', index);
    });

    // Small illustrative loops only run when the active tab is on screen.
    const loopTargets = [
      ['.voice-visual', '.voice-wave i', { transform: ['scaleY(.3)', 'scaleY(1)', 'scaleY(.45)', 'scaleY(.8)', 'scaleY(.3)'] }, { duration: 1.5, delay: stagger(0.055), repeat: Infinity, ease: 'easeInOut' }],
      ['.knowledge-visual', '.document-stack > span', { transform: ['translateY(0px)', 'translateY(-9px)', 'translateY(0px)'] }, { duration: 2.8, delay: stagger(0.22), repeat: Infinity, ease: 'easeInOut' }],
      ['.mcp-visual', '.connection-hub', { transform: ['scale(1)', 'scale(1.025)', 'scale(1)'] }, { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }],
    ];
    loopTargets.forEach(([container, selector, keyframes, options]) => {
      cleanups.push(inView(container, () => {
        const animation = run(selector, keyframes, options);
        return () => animation?.cancel();
      }));
    });

    if (!finePointer.matches) return;
    const abort = new AbortController();
    const events = { signal: abort.signal, passive: true };
    cleanups.push(() => abort.abort());
    function depth(zone, target, maxRotate, maxTravel = 0) {
      remember([target]);
      let frame = 0;
      let transition;
      let rect;
      zone.addEventListener('pointerenter', () => { rect = zone.getBoundingClientRect(); }, events);
      const move = (event) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          rect ||= zone.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          transition?.stop();
          transition = animate(target, {
            transform: `translate(${x * maxTravel}px, ${y * maxTravel}px) rotateX(${-y * maxRotate}deg) rotateY(${x * maxRotate}deg)`,
          }, { duration: 0.25, ease: 'easeOut' });
        });
      };
      const leave = () => {
        cancelAnimationFrame(frame);
        rect = null;
        transition?.stop();
        transition = animate(target, { transform: 'translate(0px, 0px) rotateX(0deg) rotateY(0deg)' }, { duration: 0.4, ease });
      };
      zone.addEventListener('pointermove', move, events);
      zone.addEventListener('pointerleave', leave, events);
      cleanups.push(() => { cancelAnimationFrame(frame); transition?.stop(); });
    }
    depth(hero, document.querySelector('.hero-content-depth'), 5, 14);
    depth(intro, intro.querySelector('.image-window'), 10);
    const card = document.querySelector('.contact-card');
    depth(card, card, 8);
    document.querySelectorAll('.workflow-demo, .product-visual').forEach((el) => depth(el, el, 7));
  }

  const onToggle = () => { userPaused = !userPaused; writeMotionPause(userPaused); explicitPlayback = !userPaused; build(); };
  const onVisibility = () => { if (!disposed) build(); };
  toggle.addEventListener('click', onToggle);
  preference.addEventListener('change', build);
  finePointer.addEventListener('change', build);
  compact.addEventListener('change', build);
  connection?.addEventListener('change', build);
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('pagehide', () => { disposed = true; cancelAnimationFrame(videoFrame); clear(); video.pause(); heroObserver.disconnect(); });
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) { userPaused = readMotionPause(); disposed = false; heroObserver.observe(hero); if (!videoReady) prepareVideo(); build(); }
  });
  build();
}
