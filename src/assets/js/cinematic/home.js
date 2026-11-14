import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as l, n as u, o as d, p as f, r as p, s as m, t as h, u as g } from "./motion-DVhug9Pz.js";
// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var _ = /* @__PURE__ */ new WeakMap(), v, y = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : m(r) && "getBBox" in r ? r.getBBox()[t] : r[n], b = /*@__PURE__*/ y("inline", "width", "offsetWidth"), x = /*@__PURE__*/ y("block", "height", "offsetHeight");
function S({ target: e, borderBoxSize: t }) {
	_.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return b(e, t);
			},
			get height() {
				return x(e, t);
			}
		});
	});
}
function C(e) {
	e.forEach(S);
}
function w() {
	typeof ResizeObserver < "u" && (v = new ResizeObserver(C));
}
function T(e, t) {
	v || w();
	let n = s(e);
	return n.forEach((e) => {
		let n = _.get(e);
		n || (n = /* @__PURE__ */ new Set(), _.set(e, n)), n.add(t), v?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = _.get(e);
			n?.delete(t), n?.size || v?.unobserve(e);
		});
	};
}
// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var E = /* @__PURE__ */ new Set(), D;
function O() {
	D = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		E.forEach((t) => t(e));
	}, window.addEventListener("resize", D);
}
function k(e) {
	return E.add(e), D || O(), () => {
		E.delete(e), !E.size && typeof D == "function" && (window.removeEventListener("resize", D), D = void 0);
	};
}
// node_modules/motion-dom/dist/es/resize/index.mjs
function A(e, n) {
	return t(typeof e == "function" ? k(e) : T(e, n));
}
// node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
var ee = 50, j = () => ({
	current: 0,
	offset: [],
	progress: 0,
	scrollLength: 0,
	targetOffset: 0,
	targetLength: 0,
	containerLength: 0,
	velocity: 0
}), M = () => ({
	time: 0,
	x: j(),
	y: j()
}), N = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
}, te = /* @__PURE__ */ new WeakMap();
function ne(e, t) {
	let n = e === document.scrollingElement, r = n && document.body || e, i = te.get(r);
	i || te.set(r, i = getComputedStyle(r));
	let { writingMode: a, flexDirection: o } = i, s = t === "x" !== /^[vs]/.test(a);
	return (s ? i.direction === "rtl" != (a === "sideways-lr") : a.endsWith("rl")) !== (!n && i.display.includes("flex") && (s === (o[0] === "c") ? i.flexWrap : o).endsWith("reverse"));
}
function re(t, n, r, i) {
	let a = r[n], { length: s, position: c } = N[n], u = a.current, d = r.time, f = t[`scroll${c}`];
	a.current = ne(t, n) ? -f || 0 : f, a.containerLength = t[`client${s}`], a.targetLength = t[`scroll${s}`], a.scrollLength = a.targetLength - a.containerLength, a.offset.length = 0, a.offset[0] = 0, a.offset[1] = a.scrollLength, a.progress = e(0, 1, o(0, a.scrollLength, a.current));
	let p = i - d;
	a.velocity = p > ee ? 0 : l(a.current - u, p);
}
function ie(e, t, n) {
	for (let r in N) re(e, r, t, n);
	t.time = n;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var P = {
	start: 0,
	center: .5,
	end: 1
};
function F(e, t, n = 0) {
	let r = 0;
	if (e in P && (e = P[e]), typeof e == "string") {
		let t = parseFloat(e);
		e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t;
	}
	return typeof e == "number" && (r = t * e), n + r;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var ae = [0, 0];
function I(e, t, n, r) {
	let i = Array.isArray(e) ? e : ae, a = 0, o = 0;
	return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), i = e.includes(" ") ? e.split(" ") : [e, P[e] ? e : "0"]), a = F(i[0], n, r), o = F(i[1], t), a - o;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var L = { All: [[0, 0], [1, 1]] };
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
function oe(e, t) {
	let n = e.length - 1;
	if (n < 1) return 0;
	let r = e[0] > e[n], i = (t) => e[r ? n - t : t];
	if (e[0] === e[1] && t < i(0)) return +!!r;
	let a = 0;
	for (; a < n - 1 && t >= i(a + 1);) a++;
	let s = (a + o(i(a), i(a + 1), t)) / n;
	return r ? 1 - s : s;
}
function se(t, { offset: n = L.All }) {
	for (let r in N) {
		let i = t[r];
		i.offset.length = 0;
		for (let e = 0; e < n.length; e++) i.offset[e] = I(n[e], i.containerLength, i.targetLength, i.targetOffset);
		i.progress = e(0, 1, oe(i.offset, i.current));
	}
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function ce(e, t) {
	let r = {
		x: 0,
		y: 0
	}, i = e;
	for (; i && i !== t;) if (n(i)) r.x += i.offsetLeft, r.y += i.offsetTop, i = i.offsetParent;
	else if (i.tagName === "svg") {
		let e = i.getBoundingClientRect();
		i = i.parentElement;
		let t = i.getBoundingClientRect();
		r.x += e.left - t.left, r.y += e.top - t.top;
	} else if (i instanceof SVGGraphicsElement) {
		let { x: e, y: t } = i.getBBox();
		r.x += e, r.y += t;
		let n = null, a = i.parentNode;
		for (; !n;) a.tagName === "svg" && (n = a), a = i.parentNode;
		i = n;
	} else break;
	return r;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function le(e) {
	return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function ue(e, t, n, r = {}) {
	let { target: i } = r, a = i || r.offset;
	return {
		measure: (t) => {
			if (a) {
				n.time = t.time;
				for (let e in N) {
					let r = e, { offset: i } = n[r];
					Object.assign(n[r], t[r]), n[r].offset = i;
				}
				if (i && i !== e) {
					let t = ce(i, e), r = le(i);
					n.x.targetOffset = t.x, n.y.targetOffset = t.y, n.x.targetLength = r.width, n.y.targetLength = r.height;
				}
				se(n, r);
			}
		},
		notify: (e) => t(a ? n : e)
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var R = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), H = (e) => e === document.scrollingElement ? window : e;
function U(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...o } = {}) {
	if (!t) return a;
	let s = B.get(t);
	s || (s = /* @__PURE__ */ new Set(), B.set(t, s));
	let c = ue(t, e, M(), o);
	if (s.add(c), !R.has(t)) {
		let e = M(), n = () => {
			ie(t, e, f.timestamp);
			for (let t of s) t.measure(e);
			i.preUpdate(r);
		}, r = () => {
			for (let t of s) t.notify(e);
		}, a = () => i.read(n);
		R.set(t, a);
		let o = H(t);
		window.addEventListener("resize", a), t !== document.documentElement && z.set(t, A(t, a)), o.addEventListener("scroll", a), a();
	}
	if (n && !V.has(t)) {
		let e = R.get(t), n = {
			width: t.scrollWidth,
			height: t.scrollHeight
		}, r = i.read(() => {
			let r = t.scrollWidth, i = t.scrollHeight;
			(n.width !== r || n.height !== i) && (e(), n.width = r, n.height = i);
		}, !0);
		V.set(t, r);
	}
	let l = R.get(t);
	return i.read(l, !1, !0), () => {
		r(l);
		let e = B.get(t);
		if (!e || (e.delete(c), e.size)) return;
		B.delete(t);
		let n = R.get(t);
		R.delete(t), n && (H(t).removeEventListener("scroll", n), z.get(t)?.(), window.removeEventListener("resize", n));
		let i = V.get(t);
		i && (r(i), V.delete(t));
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs
function de(e) {
	return typeof window > "u" ? !1 : e ? g() : c();
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs
var W = /* @__PURE__ */ new Map();
function fe({ container: e, target: t, axis: n }) {
	let r = W.get(e);
	r || (r = /* @__PURE__ */ new Map(), W.set(e, r));
	let i = t ?? "self", a = r.get(i);
	return a || (a = {}, r.set(i, a)), a[n] || (a[n] = t ? new ViewTimeline({
		subject: t,
		axis: n
	}) : new ScrollTimeline({
		source: e,
		axis: n
	}));
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs
var pe = (e) => {
	if (/v/u.test(e)) return [];
	let t = I(e, 0, 0, 0);
	return [
		I(e, 0, 1, 0) - t,
		t - I(e, 1, 0, 0),
		t
	];
}, G = ([e, t, n]) => !n && (t === 0 || t === 1) && `${t ? "entry" : "exit"}-crossing ${e * 100}%`;
function me(e = L.All) {
	if (e.length !== 2) return;
	let [t, n] = e.map(pe), r = [G(t), G(n)], i = n[0] - t[0], a = t[1] - n[1];
	if (r[0] && r[1] && (i || a)) return {
		points: r,
		a: i,
		b: a,
		cover: !t[0] && i === 1 && a === 1
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs
function he(e, t) {
	let { target: n, container: r, axis: i } = t, a = n && me(t.offset), o = de(n) && (n ? !!a : !t.offset), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), l, u = !1, d = (e, t) => {
		let [n, r] = a.points;
		t.effect.updateTiming({ direction: u ? e === "normal" ? "reverse" : "alternate-reverse" : e }), Object.assign(t, {
			rangeStart: u ? r : n,
			rangeEnd: u ? n : r
		}), t.play();
	}, f = [e.attachTimeline({
		get timeline() {
			return o ? fe(t) : void 0;
		},
		onAttach: a && ((e) => {
			let t = e.effect.getTiming().direction;
			s.set(e, t), d(t, e);
		}),
		observe: (e) => (e.pause(), c.add(e), l ||= U((e) => {
			c.forEach((t) => {
				t.time = t.iterationDuration * e[i].progress;
			});
		}, t), () => c.delete(e))
	})];
	if (o && a) {
		let { a: e, b: t } = a, o = i === "y" ? "clientHeight" : "clientWidth", c = () => {
			u !== (u = e * n[o] + t * r[o] < 0) && s.forEach(d);
		};
		c(), e * t < 0 && f.push(A(c), A([n, r], c));
	}
	return () => {
		f.forEach((e) => e()), l?.();
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function K(e, { axis: n = "y", source: r, container: i = document.scrollingElement, ...o } = {}) {
	if (!i) return a;
	let s = {
		axis: n,
		container: r || i,
		...o
	};
	if (typeof e == "function") {
		let r = d(e);
		return t(U((e) => r(e[n].progress, e), s));
	}
	return t(he(e, s));
}
// tools/cinematic/scene-motion.js
function ge() {
	let e = document.documentElement, t = matchMedia("(prefers-reduced-motion: reduce)"), n = matchMedia("(hover: hover) and (pointer: fine)"), r = matchMedia("(max-width: 700px)"), i = navigator.connection, a = document.querySelector(".hero-video"), o = document.querySelector(".motion-toggle"), s = document.querySelector(".hero"), c = e.lang === "en" ? {
		reduced: "Reduced motion",
		pause: "Pause effects",
		play: "Enable effects"
	} : {
		reduced: "Effetti ridotti",
		pause: "Pausa effetti",
		play: "Attiva effetti"
	}, l = !1, d = !1, f = !0, m = !1, g = !1, _ = !1, v = [], y = [], b = /* @__PURE__ */ new Map(), x = () => !l && !t.matches, S = () => x() && !document.hidden && f && !g && (!i?.saveData || d);
	function C() {
		S() ? (m || (a.querySelectorAll("source").forEach((e) => {
			e.src = e.dataset.src;
		}), m = !0, a.load()), a.play().catch(() => {
			a.classList.remove("is-playing");
		})) : a.pause();
	}
	a.addEventListener("playing", () => a.classList.add("is-playing")), a.addEventListener("error", () => {
		g = !0, a.classList.remove("is-playing");
	});
	let w = new IntersectionObserver(([e]) => {
		f = e.isIntersecting, y.forEach((e) => f && x() && !document.hidden ? e.play() : e.pause()), C();
	}, { threshold: 0 });
	w.observe(s);
	function T(e) {
		for (let t of e) b.has(t) || b.set(t, t.getAttribute("style"));
	}
	function E(e, t, n = {}) {
		let r = typeof e == "string" ? [...document.querySelectorAll(e)] : e instanceof Element ? [e] : [...e];
		if (!r.length) return null;
		T(r);
		let i = u(r, t, n);
		return v.push(() => i.cancel()), i;
	}
	function D(e, t, n, r = ["start end", "end start"]) {
		let i = E(e, t, { ease: "linear" });
		i && v.push(K(i, {
			target: n,
			offset: r
		}));
	}
	function O() {
		v.reverse().forEach((e) => e()), v = [], y = [], e.dispatchEvent(new Event("scene-reset")), b.forEach((e, t) => {
			e === null ? t.removeAttribute("style") : t.setAttribute("style", e);
		}), b = /* @__PURE__ */ new Map(), document.querySelectorAll(".is-reading").forEach((e) => e.classList.remove("is-reading"));
	}
	function k() {
		O();
		let i = x();
		if (e.dataset.motion = i ? "active" : t.matches ? "reduced" : "paused", o.hidden = !1, o.disabled = t.matches, o.setAttribute("aria-pressed", String(!i)), o.querySelector(".motion-toggle-label").textContent = t.matches ? c.reduced : i ? c.pause : c.play, o.querySelector(".motion-toggle-icon").textContent = i ? "Ⅱ" : "▷", C(), !i || document.hidden) return;
		let a = r.matches, l = [
			.16,
			1,
			.3,
			1
		];
		window.scrollY < s.offsetHeight && E(".hero-enter", {
			opacity: [0, 1],
			y: [34, 0],
			filter: ["blur(8px)", "blur(0px)"]
		}, {
			duration: .9,
			delay: p(.1, { startDelay: .08 }),
			ease: l
		}), D(document.querySelector(".hero-media"), {
			y: [0, a ? 90 : 200],
			scale: [1.02, 1.22]
		}, s, ["start start", "end start"]), D(document.querySelector(".hero-content"), {
			y: [0, a ? -45 : -140],
			opacity: [1, 0]
		}, s, ["start start", "end start"]), D(document.querySelector(".hero-atmosphere"), {
			y: [0, -240],
			rotate: [0, 9],
			opacity: [.65, 0]
		}, s, ["start start", "end start"]), y.push(E(".light-thread", {
			x: [-25, 25],
			opacity: [
				.1,
				.55,
				.1
			]
		}, {
			duration: 6,
			repeat: Infinity,
			repeatType: "reverse",
			delay: p(.6),
			ease: "easeInOut"
		})), y.push(E(".scroll-cue", { y: [
			0,
			7,
			0
		] }, {
			duration: 1.8,
			repeat: Infinity,
			ease: "easeInOut"
		})), f || y.forEach((e) => e.pause());
		let d = E(".reading-progress", { scaleX: [0, 1] }, { ease: "linear" });
		v.push(K(d));
		let m = [...document.querySelectorAll(".reveal")].filter((e) => !e.matches(".intro-figure, .method-step, .contact-card"));
		v.push(h(m, (e) => {
			E(e, {
				opacity: [.15, 1],
				y: [42, 0]
			}, {
				duration: .75,
				ease: l
			});
		}, { margin: "0px 0px -45px 0px" }));
		let g = document.querySelector(".intro-figure");
		D(g, { transform: [
			`perspective(1400px) translateY(${a ? 24 : 65}px) rotateX(7deg) rotateY(-9deg) scale(.92)`,
			"perspective(1400px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)",
			"perspective(1400px) translateY(-25px) rotateX(-3deg) rotateY(3deg) scale(1)"
		] }, g, ["start 95%", "end 5%"]), D(g.querySelector("img"), {
			y: ["-5%", "5%"],
			scale: [1.15, 1.15]
		}, g);
		let _ = document.querySelector(".human-story");
		D(_.querySelector(".story-image"), {
			y: [a ? -35 : -85, a ? 35 : 85],
			scale: [1.16, 1.16]
		}, _), D(_.querySelector(".story-copy"), { y: [35, -35] }, _);
		let b = document.querySelector(".contact-section");
		if (D(b, { transform: ["perspective(1500px) translateY(65px) rotateX(12deg) scale(.94)", "perspective(1500px) translateY(0px) rotateX(0deg) scale(1)"] }, b, ["start end", "start 30%"]), [...document.querySelectorAll(".method-step")].forEach((e, t) => {
			D(e, { transform: [`perspective(1200px) translateY(30px) rotateX(${a ? 3 : 9}deg) scale(.96)`, "perspective(1200px) translateY(0px) rotateX(0deg) scale(1)"] }, e, ["start 92%", "start 40%"]), v.push(h(e, () => (e.classList.add("is-reading"), () => e.classList.remove("is-reading")), { margin: "-15% 0px -35% 0px" })), e.style.setProperty("--step-index", t);
		}), [
			[
				".voice-visual",
				".voice-wave i",
				{ scaleY: [
					.3,
					1,
					.45,
					.8,
					.3
				] },
				{
					duration: 1.5,
					delay: p(.055),
					repeat: Infinity,
					ease: "easeInOut"
				}
			],
			[
				".knowledge-visual",
				".document-stack > span",
				{ y: [
					0,
					-9,
					0
				] },
				{
					duration: 2.8,
					delay: p(.22),
					repeat: Infinity,
					ease: "easeInOut"
				}
			],
			[
				".mcp-visual",
				".connection-hub",
				{ scale: [
					1,
					1.025,
					1
				] },
				{
					duration: 2.5,
					repeat: Infinity,
					ease: "easeInOut"
				}
			]
		].forEach(([e, t, n, r]) => {
			v.push(h(e, () => {
				let e = E(t, n, r);
				return () => e?.cancel();
			}));
		}), !n.matches) return;
		let S = new AbortController(), w = {
			signal: S.signal,
			passive: !0
		};
		v.push(() => S.abort());
		function k(e, t, n, r = 0) {
			T([t]);
			let i = 0, a;
			e.addEventListener("pointermove", (o) => {
				cancelAnimationFrame(i), i = requestAnimationFrame(() => {
					let i = e.getBoundingClientRect(), s = (o.clientX - i.left) / i.width - .5, c = (o.clientY - i.top) / i.height - .5;
					a?.stop(), a = u(t, {
						rotateX: -c * n,
						rotateY: s * n,
						x: s * r,
						y: c * r
					}, {
						duration: .25,
						ease: "easeOut"
					});
				});
			}, w), e.addEventListener("pointerleave", () => {
				cancelAnimationFrame(i), a?.stop(), a = u(t, {
					rotateX: 0,
					rotateY: 0,
					x: 0,
					y: 0
				}, {
					duration: .4,
					ease: l
				});
			}, w), v.push(() => {
				cancelAnimationFrame(i), a?.stop();
			});
		}
		k(s, document.querySelector(".hero-content-depth"), 5, 14), k(g, g.querySelector(".image-window"), 10);
		let A = document.querySelector(".contact-card");
		k(A, A, 8), document.querySelectorAll(".workflow-demo, .product-visual").forEach((e) => k(e, e, 7));
	}
	o.addEventListener("click", () => {
		l = !l, d = !l, k();
	}), t.addEventListener("change", k), n.addEventListener("change", k), r.addEventListener("change", k), i?.addEventListener("change", k), document.addEventListener("visibilitychange", () => {
		_ || k();
	}), window.addEventListener("pagehide", () => {
		_ = !0, O(), a.pause(), w.disconnect();
	}), window.addEventListener("pageshow", (e) => {
		e.persisted && (_ = !1, w.observe(s), k());
	}), k();
}
// tools/cinematic/home.js
var q = /* @__PURE__ */ new Set();
function J(...e) {
	let t = u(...e);
	return q.add(t), t.then(() => q.delete(t)), t;
}
document.documentElement.addEventListener("scene-reset", () => {
	q.forEach((e) => e.cancel()), q.clear();
});
var Y = () => document.documentElement.dataset.motion === "active";
ge();
var X = [...document.querySelectorAll("[role=\"tab\"]")];
function Z(e, t = !1) {
	X.forEach((t) => {
		let n = t === e;
		t.setAttribute("aria-selected", String(n)), t.tabIndex = n ? 0 : -1, document.getElementById(t.getAttribute("aria-controls")).hidden = !n;
	}), t && e.focus({ preventScroll: !0 });
	let n = e.parentElement, r = e.offsetLeft - n.offsetLeft;
	(r < n.scrollLeft || r + e.offsetWidth > n.scrollLeft + n.clientWidth) && n.scrollTo({
		left: Math.max(0, r - 12),
		behavior: Y() ? "smooth" : "instant"
	}), Y() && J(document.getElementById(e.getAttribute("aria-controls")), {
		opacity: [0, 1],
		y: [6, 0]
	}, {
		duration: .22,
		ease: "easeOut"
	});
}
X.forEach((e, t) => {
	e.addEventListener("click", () => Z(e)), e.addEventListener("keydown", (e) => {
		let n;
		e.key === "ArrowRight" && (n = (t + 1) % X.length), e.key === "ArrowLeft" && (n = (t - 1 + X.length) % X.length), e.key === "Home" && (n = 0), e.key === "End" && (n = X.length - 1), n !== void 0 && (e.preventDefault(), Z(X[n], !0));
	});
});
var Q = 0, $ = document.documentElement.lang === "en", _e = $ ? [
	"The information becomes a draft to review.",
	"The team reviews and decides what happens next.",
	"The process starts with a request."
] : [
	"Le informazioni diventano una bozza da verificare.",
	"Il team verifica e decide come procedere.",
	"Il processo parte dalla richiesta."
];
document.querySelector(".demo-next").addEventListener("click", () => {
	let e = _e[Q];
	Q = (Q + 1) % 3, document.querySelectorAll(".workflow-steps li").forEach((e, t) => {
		e.classList.toggle("is-current", t === Q), e.classList.toggle("is-complete", t < Q);
	}), document.querySelector(".demo-status").textContent = `0${Q + 1} / 03`, document.querySelector("#demo-live").textContent = e;
	let t = document.querySelector(".demo-next");
	t.innerHTML = `${Q === 2 ? $ ? "Restart" : "Ricomincia" : $ ? "Next step" : "Passo successivo"} <span aria-hidden="true">${Q === 2 ? "↺" : "→"}</span>`, Y() && J(document.querySelector(".workflow-steps .is-current .step-icon"), { scale: [.94, 1] }, { duration: .2 });
}), document.querySelectorAll(".question-list details").forEach((e) => {
	e.addEventListener("toggle", () => {
		e.open && Y() && J(e.querySelector(".answer"), {
			opacity: [0, 1],
			y: [-4, 0]
		}, { duration: .2 });
	});
}), document.querySelector("#year").textContent = String((/* @__PURE__ */ new Date()).getFullYear());
