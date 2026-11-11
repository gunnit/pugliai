import { n as e, r as t, t as n } from "./motion-DVhug9Pz.js";
// tools/cinematic/interior.js
var r = window.matchMedia("(prefers-reduced-motion: reduce)"), i = [
	.2,
	.7,
	.2,
	1
], a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = () => {}, c = !1, l = document.querySelector(".hero--inner, .hero, .page-head, .lp-hero, .article-hero"), u = l ? [...l.querySelectorAll(".hero__text > .eyebrow, .hero__text > h1, .hero__text > .lead, .hero__text > .hero__actions, .page-head__inner > .eyebrow, .page-head__inner > h1, .page-head__inner > .lead, .page-head__inner > .hero__actions, .lp-hero h1, .lp-hero > .lead, .article-category, .article-hero h1, .article-meta-hero")] : [], d = [...document.querySelectorAll("main .section-head, main .photo-fig, main .band__media, main .band__text, main .cta-band__inner, main .cta-box, main .article-content > h2")].filter((e) => !l?.contains(e) && !e.closest("form") && !e.querySelector("form, input, select, textarea, [role=\"status\"], [aria-live]"));
function f(t, n, r) {
	let s = Array.isArray(t) ? t : [t];
	if (!s.length) return;
	s.forEach((e) => a.add(e));
	let c = e(t, n, {
		ease: i,
		...r
	});
	o.add(c), c.then(() => o.delete(c));
}
function p() {
	s(), s = () => {}, o.forEach((e) => e.stop()), o.clear(), a.forEach((e) => {
		e.style.opacity = "1", e.style.transform = "none";
	}), a.clear();
}
function m({ enter: e = !1 } = {}) {
	if (p(), c || r.matches) return;
	e && window.scrollY < 80 && f(u, {
		opacity: [.25, 1],
		y: [14, 0]
	}, {
		duration: .48,
		delay: t(.065)
	});
	let i = /* @__PURE__ */ new WeakSet();
	s = n(d, (e) => {
		i.has(e) || (i.add(e), f(e, {
			opacity: [.45, 1],
			y: [12, 0]
		}, { duration: .42 }));
	}, { margin: "0px 0px -28px 0px" });
}
document.querySelectorAll("details.faq__item").forEach((e) => {
	e.addEventListener("toggle", () => {
		if (c || r.matches || !e.open) return;
		let t = e.querySelector(".faq__a");
		t && f(t, {
			opacity: [.4, 1],
			y: [-4, 0]
		}, { duration: .18 });
	});
}), r.addEventListener("change", () => m()), window.addEventListener("pagehide", () => {
	c = !0, p();
}), window.addEventListener("pageshow", (e) => {
	e.persisted && (c = !1, m());
}), m({ enter: !0 });
