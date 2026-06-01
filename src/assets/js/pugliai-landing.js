/* =====================================================================
   PUGLIAI — landing interactions: nav, mobile menu, reveals, counters, trees
   (Content & language are server-rendered per URL: IT at root, EN at /en/.
    Language switch is handled by plain links in the nav, not JS.)
   ===================================================================== */
(function () {
  'use strict';

  /* ---------------- nav: shrink/glass on scroll ---------------- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 24); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- mobile menu ---------------- */
  var burger = document.getElementById('burger');
  var mmenu = document.getElementById('mmenu');
  if (burger && mmenu) {
    burger.addEventListener('click', function () {
      var open = mmenu.classList.toggle('open');
      document.body.classList.toggle('no-scroll', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mmenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mmenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------- reveal on scroll ---------------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var revealAll = function () { revealEls.forEach(function (el) { el.classList.add('in'); }); };
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealAll();
  }
  // Safety net: never let anything stay invisible.
  var revealedAll = false;
  var kick = function () { if (revealedAll) return; revealedAll = true; revealAll(); };
  ['scroll', 'wheel', 'touchmove', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, kick, { once: true, passive: true });
  });
  setTimeout(revealAll, 4000);

  /* ---------------- count up ---------------- */
  var countEls = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && countEls.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        cio.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var pre = el.getAttribute('data-prefix') || '';
        var suf = el.getAttribute('data-suffix') || '';
        var dur = 1300, t0 = performance.now();
        var tick = function (now) {
          var p = Math.min(1, (now - t0) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = pre + Math.round(target * eased) + suf;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    countEls.forEach(function (el) { cio.observe(el); });
  }

  /* ---------------- living olive-tree canvases ---------------- */
  function initTrees() {
    if (!window.OliveTree) return;
    var hero = document.getElementById('heroTree');
    var fin = document.getElementById('finaleTree');
    if (hero) { window.__heroTree = new window.OliveTree(hero); }
    if (fin) {
      var t = new window.OliveTree(fin);
      t.setConfig({ density: 0.7 });
      window.__finaleTree = t;
    }
  }
  initTrees();
})();
