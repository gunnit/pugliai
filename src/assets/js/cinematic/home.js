import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as l, n as u, o as d, p as f, r as p, s as m, t as ee, u as te } from "./motion-DVhug9Pz.js";
// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var h = /* @__PURE__ */ new WeakMap(), g, _ = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : m(r) && "getBBox" in r ? r.getBBox()[t] : r[n], v = /*@__PURE__*/ _("inline", "width", "offsetWidth"), y = /*@__PURE__*/ _("block", "height", "offsetHeight");
function b({ target: e, borderBoxSize: t }) {
	h.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return v(e, t);
			},
			get height() {
				return y(e, t);
			}
		});
	});
}
function ne(e) {
	e.forEach(b);
}
function re() {
	typeof ResizeObserver < "u" && (g = new ResizeObserver(ne));
}
function ie(e, t) {
	g || re();
	let n = s(e);
	return n.forEach((e) => {
		let n = h.get(e);
		n || (n = /* @__PURE__ */ new Set(), h.set(e, n)), n.add(t), g?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = h.get(e);
			n?.delete(t), n?.size || g?.unobserve(e);
		});
	};
}
// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var x = /* @__PURE__ */ new Set(), S;
function C() {
	S = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		x.forEach((t) => t(e));
	}, window.addEventListener("resize", S);
}
function w(e) {
	return x.add(e), S || C(), () => {
		x.delete(e), !x.size && typeof S == "function" && (window.removeEventListener("resize", S), S = void 0);
	};
}
// node_modules/motion-dom/dist/es/resize/index.mjs
function T(e, n) {
	return t(typeof e == "function" ? w(e) : ie(e, n));
}
// node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
var ae = 50, E = () => ({
	current: 0,
	offset: [],
	progress: 0,
	scrollLength: 0,
	targetOffset: 0,
	targetLength: 0,
	containerLength: 0,
	velocity: 0
}), D = () => ({
	time: 0,
	x: E(),
	y: E()
}), O = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
}, k = /* @__PURE__ */ new WeakMap();
function oe(e, t) {
	let n = e === document.scrollingElement, r = n && document.body || e, i = k.get(r);
	i || k.set(r, i = getComputedStyle(r));
	let { writingMode: a, flexDirection: o } = i, s = t === "x" !== /^[vs]/.test(a);
	return (s ? i.direction === "rtl" != (a === "sideways-lr") : a.endsWith("rl")) !== (!n && i.display.includes("flex") && (s === (o[0] === "c") ? i.flexWrap : o).endsWith("reverse"));
}
function se(t, n, r, i) {
	let a = r[n], { length: s, position: c } = O[n], u = a.current, d = r.time, f = t[`scroll${c}`];
	a.current = oe(t, n) ? -f || 0 : f, a.containerLength = t[`client${s}`], a.targetLength = t[`scroll${s}`], a.scrollLength = a.targetLength - a.containerLength, a.offset.length = 0, a.offset[0] = 0, a.offset[1] = a.scrollLength, a.progress = e(0, 1, o(0, a.scrollLength, a.current));
	let p = i - d;
	a.velocity = p > ae ? 0 : l(a.current - u, p);
}
function A(e, t, n) {
	for (let r in O) se(e, r, t, n);
	t.time = n;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var j = {
	start: 0,
	center: .5,
	end: 1
};
function M(e, t, n = 0) {
	let r = 0;
	if (e in j && (e = j[e]), typeof e == "string") {
		let t = parseFloat(e);
		e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t;
	}
	return typeof e == "number" && (r = t * e), n + r;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var ce = [0, 0];
function N(e, t, n, r) {
	let i = Array.isArray(e) ? e : ce, a = 0, o = 0;
	return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), i = e.includes(" ") ? e.split(" ") : [e, j[e] ? e : "0"]), a = M(i[0], n, r), o = M(i[1], t), a - o;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var P = { All: [[0, 0], [1, 1]] };
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
function le(e, t) {
	let n = e.length - 1;
	if (n < 1) return 0;
	let r = e[0] > e[n], i = (t) => e[r ? n - t : t];
	if (e[0] === e[1] && t < i(0)) return +!!r;
	let a = 0;
	for (; a < n - 1 && t >= i(a + 1);) a++;
	let s = (a + o(i(a), i(a + 1), t)) / n;
	return r ? 1 - s : s;
}
function ue(t, { offset: n = P.All }) {
	for (let r in O) {
		let i = t[r];
		i.offset.length = 0;
		for (let e = 0; e < n.length; e++) i.offset[e] = N(n[e], i.containerLength, i.targetLength, i.targetOffset);
		i.progress = e(0, 1, le(i.offset, i.current));
	}
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function de(e, t) {
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
function F(e) {
	return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function I(e, t, n, r = {}) {
	let { target: i } = r, a = i || r.offset;
	return {
		measure: (t) => {
			if (a) {
				n.time = t.time;
				for (let e in O) {
					let r = e, { offset: i } = n[r];
					Object.assign(n[r], t[r]), n[r].offset = i;
				}
				if (i && i !== e) {
					let t = de(i, e), r = F(i);
					n.x.targetOffset = t.x, n.y.targetOffset = t.y, n.x.targetLength = r.width, n.y.targetLength = r.height;
				}
				ue(n, r);
			}
		},
		notify: (e) => t(a ? n : e)
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var L = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), V = (e) => e === document.scrollingElement ? window : e;
function H(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...o } = {}) {
	if (!t) return a;
	let s = z.get(t);
	s || (s = /* @__PURE__ */ new Set(), z.set(t, s));
	let c = I(t, e, D(), o);
	if (s.add(c), !L.has(t)) {
		let e = D(), n = () => {
			A(t, e, f.timestamp);
			for (let t of s) t.measure(e);
			i.preUpdate(r);
		}, r = () => {
			for (let t of s) t.notify(e);
		}, a = () => i.read(n);
		L.set(t, a);
		let o = V(t);
		window.addEventListener("resize", a), t !== document.documentElement && R.set(t, T(t, a)), o.addEventListener("scroll", a), a();
	}
	if (n && !B.has(t)) {
		let e = L.get(t), n = {
			width: t.scrollWidth,
			height: t.scrollHeight
		}, r = i.read(() => {
			let r = t.scrollWidth, i = t.scrollHeight;
			(n.width !== r || n.height !== i) && (e(), n.width = r, n.height = i);
		}, !0);
		B.set(t, r);
	}
	let l = L.get(t);
	return i.read(l, !1, !0), () => {
		r(l);
		let e = z.get(t);
		if (!e || (e.delete(c), e.size)) return;
		z.delete(t);
		let n = L.get(t);
		L.delete(t), n && (V(t).removeEventListener("scroll", n), R.get(t)?.(), window.removeEventListener("resize", n));
		let i = B.get(t);
		i && (r(i), B.delete(t));
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs
function fe(e) {
	return typeof window > "u" ? !1 : e ? te() : c();
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs
var U = /* @__PURE__ */ new Map();
function pe({ container: e, target: t, axis: n }) {
	let r = U.get(e);
	r || (r = /* @__PURE__ */ new Map(), U.set(e, r));
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
var me = (e) => {
	if (/v/u.test(e)) return [];
	let t = N(e, 0, 0, 0);
	return [
		N(e, 0, 1, 0) - t,
		t - N(e, 1, 0, 0),
		t
	];
}, W = ([e, t, n]) => !n && (t === 0 || t === 1) && `${t ? "entry" : "exit"}-crossing ${e * 100}%`;
function he(e = P.All) {
	if (e.length !== 2) return;
	let [t, n] = e.map(me), r = [W(t), W(n)], i = n[0] - t[0], a = t[1] - n[1];
	if (r[0] && r[1] && (i || a)) return {
		points: r,
		a: i,
		b: a,
		cover: !t[0] && i === 1 && a === 1
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs
function ge(e, t) {
	let { target: n, container: r, axis: i } = t, a = n && he(t.offset), o = fe(n) && (n ? !!a : !t.offset), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), l, u = !1, d = (e, t) => {
		let [n, r] = a.points;
		t.effect.updateTiming({ direction: u ? e === "normal" ? "reverse" : "alternate-reverse" : e }), Object.assign(t, {
			rangeStart: u ? r : n,
			rangeEnd: u ? n : r
		}), t.play();
	}, f = [e.attachTimeline({
		get timeline() {
			return o ? pe(t) : void 0;
		},
		onAttach: a && ((e) => {
			let t = e.effect.getTiming().direction;
			s.set(e, t), d(t, e);
		}),
		observe: (e) => (e.pause(), c.add(e), l ||= H((e) => {
			c.forEach((t) => {
				t.time = t.iterationDuration * e[i].progress;
			});
		}, t), () => c.delete(e))
	})];
	if (o && a) {
		let { a: e, b: t } = a, o = i === "y" ? "clientHeight" : "clientWidth", c = () => {
			u !== (u = e * n[o] + t * r[o] < 0) && s.forEach(d);
		};
		c(), e * t < 0 && f.push(T(c), T([n, r], c));
	}
	return () => {
		f.forEach((e) => e()), l?.();
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function _e(e, { axis: n = "y", source: r, container: i = document.scrollingElement, ...o } = {}) {
	if (!i) return a;
	let s = {
		axis: n,
		container: r || i,
		...o
	};
	if (typeof e == "function") {
		let r = d(e);
		return t(H((e) => r(e[n].progress, e), s));
	}
	return t(ge(e, s));
}
// tools/cinematic/home.js
var G = window.matchMedia("(prefers-reduced-motion: reduce)"), K = [], q = [...document.querySelectorAll(".hero-enter")], J = [...document.querySelectorAll(".reveal")];
function Y() {
	if (K.forEach((e) => e()), K = [], [...q, ...J].forEach((e) => {
		e.style.opacity = "1", e.style.transform = "none";
	}), document.querySelector(".hero-media").style.transform = "none", G.matches) return;
	let e = u(q, {
		opacity: [0, 1],
		y: [18, 0]
	}, {
		duration: .65,
		delay: p(.09, { startDelay: .08 }),
		ease: [
			.2,
			.7,
			.2,
			1
		]
	});
	K.push(() => e.stop());
	let t = ee(J, (e) => {
		let t = u(e, {
			opacity: [.25, 1],
			y: [20, 0]
		}, {
			duration: .55,
			ease: [
				.2,
				.7,
				.2,
				1
			]
		});
		K.push(() => t.stop());
	}, { margin: "0px 0px -40px 0px" });
	K.push(t);
	let n = document.querySelector(".hero-media"), r = u(n, {
		y: [0, 70],
		scale: [1, 1.05]
	}, { ease: "linear" }), i = _e(r, {
		target: document.querySelector(".hero"),
		offset: ["start start", "end start"]
	});
	K.push(() => {
		i(), r.stop();
	});
}
Y(), G.addEventListener("change", Y);
var X = [...document.querySelectorAll("[role=\"tab\"]")];
function Z(e, t = !1) {
	X.forEach((t) => {
		let n = t === e;
		t.setAttribute("aria-selected", String(n)), t.tabIndex = n ? 0 : -1, document.getElementById(t.getAttribute("aria-controls")).hidden = !n;
	}), t && e.focus({ preventScroll: !0 });
	let n = e.parentElement, r = e.offsetLeft - n.offsetLeft;
	if ((r < n.scrollLeft || r + e.offsetWidth > n.scrollLeft + n.clientWidth) && n.scrollTo({
		left: Math.max(0, r - 12),
		behavior: G.matches ? "instant" : "smooth"
	}), !G.matches) {
		let t = document.getElementById(e.getAttribute("aria-controls"));
		u(t, {
			opacity: [0, 1],
			y: [6, 0]
		}, {
			duration: .22,
			ease: "easeOut"
		});
	}
}
X.forEach((e, t) => {
	e.addEventListener("click", () => Z(e)), e.addEventListener("keydown", (e) => {
		let n;
		e.key === "ArrowRight" && (n = (t + 1) % X.length), e.key === "ArrowLeft" && (n = (t - 1 + X.length) % X.length), e.key === "Home" && (n = 0), e.key === "End" && (n = X.length - 1), n !== void 0 && (e.preventDefault(), Z(X[n], !0));
	});
});
var Q = 0, $ = document.documentElement.lang === "en", ve = $ ? [
	"The information becomes a draft to review.",
	"The team reviews and decides what happens next.",
	"The process starts with a request."
] : [
	"Le informazioni diventano una bozza da verificare.",
	"Il team verifica e decide come procedere.",
	"Il processo parte dalla richiesta."
];
document.querySelector(".demo-next").addEventListener("click", () => {
	let e = ve[Q];
	Q = (Q + 1) % 3, document.querySelectorAll(".workflow-steps li").forEach((e, t) => {
		e.classList.toggle("is-current", t === Q), e.classList.toggle("is-complete", t < Q);
	}), document.querySelector(".demo-status").textContent = `0${Q + 1} / 03`, document.querySelector("#demo-live").textContent = e;
	let t = document.querySelector(".demo-next");
	t.innerHTML = `${Q === 2 ? $ ? "Restart" : "Ricomincia" : $ ? "Next step" : "Passo successivo"} <span aria-hidden="true">${Q === 2 ? "↺" : "→"}</span>`, G.matches || u(document.querySelector(".workflow-steps .is-current .step-icon"), { scale: [.94, 1] }, { duration: .2 });
}), document.querySelectorAll("details").forEach((e) => {
	e.addEventListener("toggle", () => {
		e.open && !G.matches && u(e.querySelector(".answer"), {
			opacity: [0, 1],
			y: [-4, 0]
		}, { duration: .2 });
	});
}), document.querySelector("#year").textContent = String((/* @__PURE__ */ new Date()).getFullYear()), window.addEventListener("pagehide", () => {
	K.forEach((e) => e()), G.removeEventListener("change", Y);
}), window.addEventListener("pageshow", (e) => {
	e.persisted && (Y(), G.addEventListener("change", Y));
});
