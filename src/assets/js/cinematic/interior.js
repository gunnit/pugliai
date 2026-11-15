import { a as e, i as t, n, o as r, r as i, t as a } from "./motion-D0x9o2OA.js";
// tools/cinematic/interior.js
var o = document.documentElement, s = matchMedia("(prefers-reduced-motion: reduce)"), c = matchMedia("(hover: hover) and (pointer: fine)"), l = matchMedia("(max-width: 719px)"), u = matchMedia("print"), d = document.querySelector(".motion-toggle"), f = document.querySelector(".motion-progress"), p = o.lang === "en" ? {
	pause: "Pause effects",
	play: "Enable effects",
	reduced: "Reduced motion"
} : {
	pause: "Pausa effetti",
	play: "Attiva effetti",
	reduced: "Effetti ridotti"
}, m = "form, input, select, textarea, output, [contenteditable=\"true\"], [aria-live], [role=\"status\"], [role=\"alert\"], #resultsCard, .result-value", h = (e) => !e.closest(m) && !e.querySelector(m), g = [
	.16,
	1,
	.3,
	1
], _ = document.querySelector(".hero--cinematic, .page-head, .article-hero, .has-sticky-cta .hero, .success-hero"), v = a(), y = !1, b = !1, x = [], S = /* @__PURE__ */ new Map(), C;
_?.matches(".page-head, .article-hero, .has-sticky-cta .hero") && (_.classList.add("motion-optical-hero"), C = _.querySelector(":scope > .motion-optical-layer"), C || (C = document.createElement("span"), C.className = "motion-optical-layer", C.setAttribute("aria-hidden", "true"), _.prepend(C)));
var w = _?.querySelector(".hero__text, .page-head__inner, .article-hero-content") || (_?.matches(".success-hero") ? _ : null), T = w ? [...w.children].filter(h) : [], E = _?.querySelector(":scope > .hero__media > img"), D = [...document.querySelectorAll("main .section-head, main .card, main .step, main .stat, main .band__text, main .cta-band__inner, main .cta-box, main .article-content > h2, main .prose > h2")].filter((e) => h(e) && !_?.contains(e) && !e.parentElement.closest(".card, .cta-band__inner, .cta-box") && (!e.closest(".article-content, .prose") || e.matches("h2, .cta-box"))), O = [...document.querySelectorAll("main .photo-fig, main .band__media")].filter(h), k = [...document.querySelectorAll("main img.photo")].filter((e) => h(e) && !e.closest(".photo-fig, .band__media, .hero__media"));
for (let e of O.filter((e) => e.matches("figure"))) {
	let t = e.querySelector("img");
	if (!t) continue;
	let n = document.createElement("div");
	n.className = "motion-photo-window", t.before(n), n.append(t);
}
var A = [...document.querySelectorAll("main .card, main .hero__glass, main .cta-band__inner, main .cta-box")].filter((e) => h(e) && !e.closest(".article-content, .prose") && !e.parentElement.closest(".card, .cta-band__inner, .cta-box"));
function j(e) {
	for (let t of e) S.has(t) || S.set(t, t.getAttribute("style")), t.setAttribute("data-motion-node", "");
}
function M(t, n, r = {}) {
	let i = t instanceof Element ? [t] : [...t];
	if (!i.length) return null;
	j(i);
	let a = e(i, n, r);
	return x.push(() => a.cancel()), a;
}
function N(e, n, r, i = ["start end", "end start"]) {
	if (!e) return;
	let a = M(e, n, { ease: "linear" });
	x.push(t(a, {
		target: r,
		offset: i
	}));
}
function P() {
	x.reverse().forEach((e) => e()), x = [], S.forEach((e, t) => {
		e === null ? t.removeAttribute("style") : t.setAttribute("style", e);
	}), S.clear(), document.querySelectorAll(".motion-step-active").forEach((e) => e.classList.remove("motion-step-active"));
}
function F(t, n) {
	j([t]), t.classList.add("motion-tilt");
	let r, i = 0, a, o = () => {
		cancelAnimationFrame(i), r = null, a?.stop(), a = e(t, { transform: "rotateX(0deg) rotateY(0deg)" }, {
			duration: .32,
			ease: g
		});
	};
	t.addEventListener("pointerenter", () => {
		r = t.getBoundingClientRect();
	}, {
		signal: n,
		passive: !0
	}), t.addEventListener("pointermove", (n) => {
		if (t.matches(":focus-within")) return;
		r ||= t.getBoundingClientRect();
		let o = (n.clientX - r.left) / r.width - .5, s = (n.clientY - r.top) / r.height - .5;
		cancelAnimationFrame(i), i = requestAnimationFrame(() => {
			a?.stop(), a = e(t, { transform: `rotateX(${-s * 7}deg) rotateY(${o * 7}deg)` }, {
				duration: .2,
				ease: "easeOut"
			});
		});
	}, {
		signal: n,
		passive: !0
	}), t.addEventListener("pointerleave", o, {
		signal: n,
		passive: !0
	}), t.addEventListener("focusin", o, { signal: n }), x.push(() => {
		cancelAnimationFrame(i), a?.stop();
	});
}
function I() {
	P();
	let e = !v && !s.matches && !u.matches;
	if (o.dataset.motion = e ? "active" : s.matches ? "reduced" : "paused", d && (d.hidden = !1, d.disabled = s.matches, d.setAttribute("aria-pressed", String(!e)), d.querySelector(".motion-toggle-label").textContent = s.matches ? p.reduced : e ? p.pause : p.play, d.querySelector(".motion-toggle-icon").textContent = e ? "Ⅱ" : "▷"), !e || y || document.hidden) return;
	let n = l.matches;
	if (!b && window.scrollY < 100 && (M(T, {
		opacity: [.15, 1],
		transform: ["translateY(26px)", "translateY(0px)"]
	}, {
		duration: .7,
		delay: r(.075),
		ease: g
	}), b = !0), f) {
		let e = M(f, { transform: ["scaleX(0)", "scaleX(1)"] }, { ease: "linear" });
		x.push(t(e));
	}
	_ && (N(E || C, { transform: ["translateY(0px) scale(1.16)", `translateY(${n ? 55 : 130}px) scale(1.26)`] }, _, ["start start", "end start"]), w && h(w) && N(w, { transform: ["translateY(0px)", `translateY(${n ? -24 : -55}px)`] }, _, ["start start", "end start"]));
	let a = /* @__PURE__ */ new WeakSet();
	x.push(i(D, (e) => {
		if (a.has(e)) return;
		a.add(e);
		let t = [...e.parentElement.children], n = e.matches(".card, .step, .stat") ? t.indexOf(e) % 4 * .055 : 0, r = !!e.closest(".article-content, .prose");
		M(e, A.includes(e) ? { opacity: [.12, 1] } : {
			opacity: [.12, 1],
			transform: [`translateY(${r ? 8 : 32}px)`, "translateY(0px)"]
		}, {
			duration: r ? .35 : .65,
			delay: n,
			ease: g
		}), e.matches(".step") && e.classList.add("motion-step-active");
	}, { margin: "0px 0px -30px 0px" }));
	for (let e of O) e.classList.add("motion-photo-frame"), N(e.querySelector("img"), { transform: ["translateY(-4%) scale(1.12)", "translateY(4%) scale(1.12)"] }, e);
	for (let e of k) N(e, { transform: [
		"perspective(1400px) translateY(28px) rotateY(-5deg) rotateX(4deg) scale(.95)",
		"perspective(1400px) translateY(0px) rotateY(0deg) rotateX(0deg) scale(1)",
		"perspective(1400px) translateY(-15px) rotateY(2deg) rotateX(-2deg) scale(.98)"
	] }, e);
	if (c.matches) {
		let e = new AbortController();
		x.push(() => e.abort()), A.forEach((t) => F(t, e.signal));
	}
}
document.querySelectorAll("details.faq__item").forEach((e) => {
	e.addEventListener("toggle", () => {
		let t = e.querySelector(".faq__a");
		e.open && t && h(t) && o.dataset.motion === "active" && !y && M(t, {
			opacity: [.25, 1],
			transform: ["translateY(-4px)", "translateY(0px)"]
		}, {
			duration: .2,
			ease: g
		});
	});
}), d?.addEventListener("click", () => {
	v = !v, n(v), I();
});
for (let e of [
	s,
	l,
	c,
	u
]) e.addEventListener("change", I);
document.addEventListener("visibilitychange", I), window.addEventListener("pagehide", () => {
	y = !0, P();
}), window.addEventListener("pageshow", (e) => {
	e.persisted && (v = a(), y = !1, I());
}), I();
