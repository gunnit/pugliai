/**
 * PugliAI — motion runtime (2026 design system)
 *
 * A small, dependency-free implementation of the declarative animation model
 * popularised by Framer Motion (initial / animate / whileInView, variants,
 * staggered children, spring easing), rebuilt for a static site that ships no
 * framework and no runtime dependencies.
 *
 * Division of labour:
 *   - the markup declares intent through data-motion* attributes;
 *   - the stylesheet owns every resting state, easing curve and transition, so
 *     a reveal costs nothing but a compositor-only opacity/transform change;
 *   - this file only decides *when* an element should move, and toggles
 *     `.is-inview` on it.
 *
 * Progressive enhancement contract:
 *   1. The blocking snippet in <head> adds `.motion` to <html> — but only when
 *      the browser has IntersectionObserver and the visitor has not asked for
 *      reduced motion. Every rule in the stylesheet is scoped to that class, so
 *      a page without JavaScript renders in its finished state.
 *   2. That snippet also arms a watchdog. If this file never executes, the
 *      watchdog adds `.motion-failsafe`, which forces every element visible.
 *   3. Removing `.motion` at any point (feature failure, or the visitor turning
 *      on reduced motion mid-session) restores the finished state immediately.
 *
 * See the "Motion system" section of src/assets/css/stylesheet.css for the
 * attribute reference and the variant list.
 */

(function () {
    'use strict';

    var root = document.documentElement;
    if (!root.classList || !root.classList.contains('motion')) return;

    /* Defaults, in milliseconds unless noted. */
    var DEFAULT_STAGGER = 80;
    var DEFAULT_WORD_STAGGER = 34;
    var COUNT_DURATION = 1100;
    /* Longest entrance the stylesheet declares, plus slack. Used to decide when
       an element has arrived and can be handed back to its own component rules. */
    var SETTLE_MS = 1400;
    /* Trigger line: fire once the element's top has crossed 88% of the viewport.
       Expressed as a root margin rather than a visible-fraction threshold so the
       behaviour does not change with the height of the element. */
    var TRIGGER_MARGIN = '0px 0px -12% 0px';
    /* Parallax travel as a fraction of the element height. The CSS rests the
       hero media at scale(1.06), i.e. 3% of overflow on each edge; 2.6% scaled
       up by 1.06 stays inside that, so no edge can ever be exposed. */
    var PARALLAX_RANGE = 0.026;

    var reduceQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var observers = [];
    var parallax = [];
    var rafId = null;
    var disabled = false;

    /* ------------------------------------------------------------------ *
     * Lifecycle
     * ------------------------------------------------------------------ */

    /**
     * Tell the head snippet that this file reached the end of its work, so its
     * failsafe stands down. The flag is what the snippet checks on
     * DOMContentLoaded; the timer is only a last-resort backstop.
     */
    function standDown() {
        window.__pugliaiMotionReady = true;
        if (window.__pugliaiMotionWatchdog) {
            clearTimeout(window.__pugliaiMotionWatchdog);
            window.__pugliaiMotionWatchdog = null;
        }
    }

    /** Hand the page back to CSS: every element snaps to its finished state. */
    function disable() {
        if (disabled) return;
        disabled = true;
        standDown();
        while (observers.length) observers.pop().disconnect();
        if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
        parallax.length = 0;
        root.classList.remove('motion');
    }

    if (!('IntersectionObserver' in window) || !('requestAnimationFrame' in window)) {
        disable();
        return;
    }

    if (reduceQuery) {
        var onPreferenceChange = function () { if (reduceQuery.matches) disable(); };
        if (reduceQuery.addEventListener) reduceQuery.addEventListener('change', onPreferenceChange);
        else if (reduceQuery.addListener) reduceQuery.addListener(onPreferenceChange);
        if (reduceQuery.matches) { disable(); return; }
    }

    /* ------------------------------------------------------------------ *
     * Helpers
     * ------------------------------------------------------------------ */

    function attr(el, name) {
        return el.getAttribute('data-motion-' + name);
    }

    function num(el, name, fallback) {
        var v = parseFloat(attr(el, name));
        return isNaN(v) ? fallback : v;
    }

    function children(el) {
        var out = [], nodes = el.children, i;
        for (i = 0; i < nodes.length; i++) out.push(nodes[i]);
        return out;
    }

    /** Write the resolved timing, then let the stylesheet animate the change. */
    function show(el, delay, duration) {
        if (delay) el.style.setProperty('--m-delay', Math.round(delay) + 'ms');
        if (duration) el.style.setProperty('--m-dur', Math.round(duration) + 'ms');
        el.classList.add('is-inview');
    }

    function hide(el) {
        el.classList.remove('is-inview');
    }

    var DRIVERS = ['data-motion', 'data-motion-group', 'data-motion-reveal', 'data-motion-bar'];

    /**
     * Once an element has arrived, drop the attribute that drives it and the
     * inline timing. Every rule in the motion layer stops matching, so the
     * element goes back to the transitions its own component rules declare —
     * otherwise a revealed card would keep hovering at entrance speed. Skipped
     * for data-motion-once="false", which has to be able to replay.
     */
    function settle(nodes, after) {
        setTimeout(function () {
            if (disabled) return;
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].style.removeProperty('--m-delay');
                nodes[i].style.removeProperty('--m-dur');
                for (var j = 0; j < DRIVERS.length; j++) nodes[i].removeAttribute(DRIVERS[j]);
            }
        }, after);
    }

    /**
     * Watch `el` and call `run()` when it crosses the trigger line. With
     * data-motion-once="false" it also calls `run.reset()` on the way out, so
     * the animation replays — the equivalent of `viewport={{ once: false }}`.
     *
     * data-motion-amount switches to a visible-fraction threshold instead,
     * for elements that should only fire once they are properly on screen.
     */
    function watch(el, run) {
        var once = attr(el, 'once') !== 'false';
        var amount = parseFloat(attr(el, 'amount'));
        var options = isNaN(amount)
            ? { threshold: 0, rootMargin: TRIGGER_MARGIN }
            : { threshold: Math.min(Math.max(amount, 0), 1) };

        var io = new IntersectionObserver(function (entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    run();
                    if (once) io.unobserve(entries[i].target);
                } else if (!once && run.reset) {
                    run.reset();
                }
            }
        }, options);
        io.observe(el);
        observers.push(io);
    }

    /** Two frames in, so the first paint has landed before anything moves. */
    function onLoad(run) {
        requestAnimationFrame(function () { requestAnimationFrame(run); });
    }

    /** data-motion-start="load" plays on load; everything else plays on scroll. */
    function start(el, run) {
        if (attr(el, 'start') === 'load') onLoad(run);
        else watch(el, run);
    }

    /* ------------------------------------------------------------------ *
     * Single elements and staggered groups
     * ------------------------------------------------------------------ */

    function initElement(el) {
        var delay = num(el, 'delay', 0);
        var duration = num(el, 'duration', 0);
        var replays = attr(el, 'once') === 'false';
        var run = function () {
            show(el, delay, duration);
            if (!replays) settle([el], delay + (duration || SETTLE_MS) + 200);
        };
        run.reset = function () { hide(el); };
        start(el, run);
    }

    function initGroup(group) {
        var kids = children(group);
        if (!kids.length) return;
        var base = num(group, 'delay', 0);
        var step = num(group, 'stagger', DEFAULT_STAGGER);
        var duration = num(group, 'duration', 0);

        var replays = attr(group, 'once') === 'false';
        var run = function () {
            var last = 0;
            for (var i = 0; i < kids.length; i++) {
                // A child may override the group timing with its own attributes.
                var d = num(kids[i], 'delay', base + i * step);
                show(kids[i], d, num(kids[i], 'duration', duration));
                if (d > last) last = d;
            }
            if (!replays) settle(kids.concat([group]), last + (duration || SETTLE_MS) + 200);
        };
        run.reset = function () {
            for (var i = 0; i < kids.length; i++) hide(kids[i]);
        };
        start(group, run);
    }

    /* ------------------------------------------------------------------ *
     * Word-by-word headings
     * ------------------------------------------------------------------ */

    /**
     * Wrap each word in a masked span. Whitespace is preserved as real text
     * nodes between the wrappers, so line breaking, text selection and the
     * accessible name of the heading are all unchanged.
     */
    function splitWords(el) {
        if (el.children.length) return null;              // plain-text headings only
        var parts = el.textContent.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        var words = [];
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (!part) continue;
            if (/^\s+$/.test(part)) {
                frag.appendChild(document.createTextNode(part));
                continue;
            }
            var outer = document.createElement('span');
            outer.className = 'm-word';
            var inner = document.createElement('span');
            inner.textContent = part;
            outer.appendChild(inner);
            frag.appendChild(outer);
            words.push(outer);
        }
        if (!words.length) return null;
        el.textContent = '';
        el.appendChild(frag);
        return words;
    }

    function initSplit(el) {
        var words = splitWords(el);
        if (!words) { initElement(el); return; }
        // The heading itself was hidden before first paint to avoid a flash of
        // unsplit text; now that the words carry their own masks, reveal it.
        el.classList.add('m-split-ready');

        var base = num(el, 'delay', 0);
        var step = num(el, 'stagger', DEFAULT_WORD_STAGGER);
        var duration = num(el, 'duration', 0);

        var run = function () {
            for (var i = 0; i < words.length; i++) show(words[i], base + i * step, duration);
        };
        run.reset = function () {
            for (var i = 0; i < words.length; i++) hide(words[i]);
        };
        start(el, run);
    }

    /* ------------------------------------------------------------------ *
     * Counters
     * ------------------------------------------------------------------ */

    /**
     * Count up to the value already in the DOM. Anything that is not a single
     * integer with an optional prefix/suffix ("50+", "2 h", "128") is left
     * alone, so ranges such as "2–4" never animate.
     */
    function initCount(el) {
        var text = (attr(el, 'count') || el.textContent).trim();
        var match = /^(\D*?)(\d+)(\D*)$/.exec(text);
        if (!match) return;

        var prefix = match[1], target = parseInt(match[2], 10), suffix = match[3];
        var delay = num(el, 'delay', 0);
        var duration = num(el, 'duration', COUNT_DURATION);
        var started = false;

        function render(v) { el.textContent = prefix + v + suffix; }
        render(0);

        var run = function () {
            if (started) return;
            started = true;
            setTimeout(function () {
                var t0 = null;
                requestAnimationFrame(function frame(now) {
                    if (t0 === null) t0 = now;
                    var p = Math.min((now - t0) / duration, 1);
                    render(Math.round(target * (1 - Math.pow(1 - p, 3))));
                    if (p < 1) requestAnimationFrame(frame);
                });
            }, delay);
        };
        start(el, run);
    }

    /* ------------------------------------------------------------------ *
     * Hero media: settle out of the over-scale, then scroll parallax
     * ------------------------------------------------------------------ */

    function initZoom(el) {
        start(el, function () { el.classList.add('is-inview'); });

        var entry = { el: el, active: false };
        parallax.push(entry);

        var io = new IntersectionObserver(function (entries) {
            entry.active = entries[0].isIntersecting;
            if (entry.active) requestTick();
        }, { threshold: 0 });
        io.observe(el);
        observers.push(io);
    }

    /** One pass over the on-screen parallax elements. Runs per scroll frame. */
    function tick() {
        rafId = null;
        var viewport = window.innerHeight || root.clientHeight;
        for (var i = 0; i < parallax.length; i++) {
            var p = parallax[i];
            if (!p.active) continue;
            var rect = p.el.getBoundingClientRect();
            if (!rect.height) continue;
            // -0.5 while the element sits below the fold, +0.5 once it has left above.
            var progress = (viewport / 2 - (rect.top + rect.height / 2)) / (viewport + rect.height);
            p.el.style.setProperty('--m-py', (progress * rect.height * PARALLAX_RANGE * 2).toFixed(1) + 'px');
        }
    }

    function requestTick() {
        if (rafId === null && !disabled && parallax.length) rafId = requestAnimationFrame(tick);
    }

    /* ------------------------------------------------------------------ *
     * Boot
     * ------------------------------------------------------------------ */

    function each(selector, fn) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) fn(nodes[i]);
    }

    function init() {
        each('[data-motion-split="words"]', initSplit);
        each('[data-motion]:not([data-motion-split])', initElement);
        each('[data-motion-group]', initGroup);
        each('[data-motion-reveal]', initElement);
        each('[data-motion-count]', initCount);
        each('[data-motion-bar]', initElement);
        each('[data-motion-zoom]', initZoom);

        if (parallax.length) {
            window.addEventListener('scroll', requestTick, { passive: true });
            window.addEventListener('resize', requestTick);
            requestTick();
        }
        standDown();
    }

    if (document.readyState === 'loading') {
        // Only reachable if this file is ever loaded without `defer`. The DOM is
        // not ready yet, so stand the failsafe down now and set up afterwards.
        standDown();
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
