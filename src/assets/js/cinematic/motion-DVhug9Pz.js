// node_modules/motion-utils/dist/es/array.mjs
function e(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function t(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
// node_modules/motion-utils/dist/es/clamp.mjs
var n = (e, t, n) => n > t ? t : n < e ? e : n, r = {}, i = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), a = (e) => typeof e == "object" && !!e, o = (e) => /^0[^.\s]+$/u.test(e);
// node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function s(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
// node_modules/motion-utils/dist/es/noop.mjs
var c = /* @__NO_SIDE_EFFECTS__ */ (e) => e, l = (...e) => e.reduce((e, t) => (n) => t(e(n))), u = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, d = class {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return e(this.subscriptions, t), () => this.remove(t);
	}
	remove(e) {
		t(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) {
			if (r === 1) this.subscriptions[0](e, t, n);
			else for (let i = 0; i < r; i++) {
				let r = this.subscriptions[i];
				r && r(e, t, n);
			}
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, f = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, p = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, m = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, h = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
}, g = (e, t, n) => e * (3 * (1 - e) * ((1 - e) * t + e * n) + e * e);
/*#__NO_SIDE_EFFECTS__*/
function _(e, t, n, r) {
	return e === t && n === r ? c : (i) => {
		let a = 0, o = 1, s = i;
		for (let t = 0;; t++) {
			s >= a && s <= o || (s = (a + o) / 2);
			let r = g(s, e, n) - i;
			if (r * r < 1e-28 || t === 40) break;
			r > 0 ? o = s : a = s, s -= r * 1e-7 / (g(s + 1e-7, e, n) - i - r);
		}
		return g(s, t, r);
	};
}
// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var v = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, y = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), b = /*@__PURE__*/ _(.33, 1.53, .69, .99), x = /*@__PURE__*/ y(b), S = /*@__PURE__*/ v(x), C = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * x(e) : .5 * (2 - 2 ** (-10 * (e - 1))), w = (e) => 1 - Math.sin(Math.acos(e)), T = /* @__PURE__ */ y(w), E = /* @__PURE__ */ v(w), ee = /*@__PURE__*/ _(.42, 0, 1, 1), te = /*@__PURE__*/ _(0, 0, .58, 1), ne = /*@__PURE__*/ _(.42, 0, .58, 1), D = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number";
// node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
/*#__NO_SIDE_EFFECTS__*/
function re(e, t) {
	return /* @__PURE__ */ D(e) ? e[h(0, e.length, t)] : e;
}
// node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var ie = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", ae = {
	linear: c,
	easeIn: ee,
	easeInOut: ne,
	easeOut: te,
	circIn: w,
	circInOut: E,
	circOut: T,
	backIn: x,
	backInOut: S,
	backOut: b,
	anticipate: C
}, oe = (e) => typeof e == "string", O = (e) => {
	if (/* @__PURE__ */ ie(e)) {
		let [t, n, r, i] = e;
		return /* @__PURE__ */ _(t, n, r, i);
	}
	return oe(e) ? ae[e] : e;
}, k = {
	delta: 0,
	timestamp: 0,
	isProcessing: !1
}, A;
function se() {
	A = void 0;
}
var j = {
	now: () => (A === void 0 && j.set(k.isProcessing || r.useManualTiming ? k.timestamp : performance.now()), A),
	set: (e) => {
		A = e, queueMicrotask(se);
	}
}, M = (e) => Math.round(e * 1e5) / 1e5, ce = /*@__PURE__*/ ((e) => (t) => typeof t == "string" && t.startsWith(e))("var(--"), le = (e) => ce(e) ? ue.test(e.split("/*")[0].trim()) : !1, ue = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function de(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var N = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, fe = {
	...N,
	transform: (e) => n(0, 1, e)
}, pe = {
	...N,
	default: 1
}, me = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function he(e) {
	return e == null;
}
// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var ge = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, _e = (e, t) => (n) => !!(typeof n == "string" && ge.test(n) && n.startsWith(e) || t && !he(n) && Object.prototype.hasOwnProperty.call(n, t)), ve = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(me);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, ye = (e) => n(0, 255, e), be = {
	...N,
	transform: (e) => Math.round(ye(e))
}, P = {
	test: /*@__PURE__*/ _e("rgb", "red"),
	parse: /*@__PURE__*/ ve("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + be.transform(e) + ", " + be.transform(t) + ", " + be.transform(n) + ", " + M(fe.transform(r)) + ")"
}, xe = (e, t, n) => {
	let r = e.substring(1 + t * n, 1 + (t + 1) * n);
	return n > 1 ? r : r + r;
};
function Se(e) {
	let t = e.length > 5 ? 2 : 1, n = xe(e, 3, t);
	return {
		red: parseInt(xe(e, 0, t), 16),
		green: parseInt(xe(e, 1, t), 16),
		blue: parseInt(xe(e, 2, t), 16),
		alpha: n ? parseInt(n, 16) / 255 : 1
	};
}
var Ce = {
	test: /*@__PURE__*/ _e("#"),
	parse: Se,
	transform: P.transform
}, we = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), F = /*@__PURE__*/ we("deg"), I = /*@__PURE__*/ we("%"), L = /*@__PURE__*/ we("px"), Te = /*@__PURE__*/ we("vh"), Ee = /*@__PURE__*/ we("vw"), De = {
	...I,
	parse: (e) => I.parse(e) / 100,
	transform: (e) => I.transform(e * 100)
}, R = {
	test: /*@__PURE__*/ _e("hsl", "hue"),
	parse: /*@__PURE__*/ ve("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + I.transform(M(t)) + ", " + I.transform(M(n)) + ", " + M(fe.transform(r)) + ")"
}, z = {
	test: (e) => P.test(e) || Ce.test(e) || R.test(e),
	parse: (e) => P.test(e) ? P.parse(e) : R.test(e) ? R.parse(e) : Ce.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? P.transform(e) : R.transform(e),
	getAnimatableNone: (e) => {
		let t = z.parse(e);
		return t.alpha = 0, z.transform(t);
	}
}, Oe = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, ke = /*@__PURE__*/ new RegExp(me.source), Ae = /*@__PURE__*/ new RegExp(Oe.source, "i");
function je(e) {
	return isNaN(e) && typeof e == "string" && (ke.test(e) || Ae.test(e));
}
var Me = "number", Ne = "color", Pe = "var", Fe = "var(", Ie = "${}", Le = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function Re(e) {
	let t = e.toString();
	return ke.test(t) || Ae.test(t);
}
function ze(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(Le, (e) => (z.test(e) ? (r.color.push(a), i.push(Ne), n.push(z.parse(e))) : e.startsWith(Fe) ? (r.var.push(a), i.push(Pe), n.push(e)) : (r.number.push(a), i.push(Me), n.push(parseFloat(e))), ++a, Ie)).split(Ie),
		indexes: r,
		types: i
	};
}
function Be(e) {
	return ze(e).values;
}
function Ve({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			i += e === Me ? M(r[a]) : e === Ne ? z.transform(r[a]) : r[a];
		}
		return i;
	};
}
function He(e) {
	return Ve(ze(e));
}
var Ue = (e) => typeof e == "number" ? 0 : z.test(e) ? z.getAnimatableNone(e) : e, We = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : Ue(e);
function Ge(e) {
	let t = ze(e);
	return Ve(t)(t.values.map((e, n) => We(e, t.split[n])));
}
var B = {
	test: je,
	parse: Be,
	createTransformer: He,
	getAnimatableNone: Ge
};
// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Ke(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function qe({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Ke(s, r, e + 1 / 3), a = Ke(s, r, e), o = Ke(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function Je(e, t) {
	return (n) => n > 0 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var V = (e, t, n) => e + (t - e) * n, Ye = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, Xe = [
	Ce,
	P,
	R
], Ze = (e) => Xe.find((t) => t.test(e));
function Qe(e) {
	let t = Ze(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === R && (n = qe(n)), n;
}
var $e = (e, t) => {
	let n = Qe(e), r = Qe(t);
	if (!n || !r) return Je(e, t);
	let i = { ...n };
	return (e) => (i.red = Ye(n.red, r.red, e), i.green = Ye(n.green, r.green, e), i.blue = Ye(n.blue, r.blue, e), i.alpha = V(n.alpha, r.alpha, e), P.transform(i));
}, et = /* @__PURE__ */ new Set(["none", "hidden"]);
function tt(e, t) {
	return et.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function nt(e, t) {
	return (n) => V(e, t, n);
}
function rt(e) {
	return typeof e == "number" ? nt : typeof e == "string" ? le(e) ? Je : z.test(e) ? $e : st : Array.isArray(e) ? it : typeof e == "object" ? z.test(e) ? $e : at : Je;
}
function it(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => rt(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function at(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = rt(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function ot(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]], s = e.values[o] ?? 0;
		n[i] = s, r[a]++;
	}
	return n;
}
var st = (e, t) => {
	let n = ze(e), r = ze(t);
	return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? et.has(e) && !r.values.length || et.has(t) && !n.values.length ? tt(e, t) : l(it(ot(n, r), r.values), Ve(r)) : Je(e, t);
}, ct = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function lt(e, t) {
	let n = ct.exec(e);
	if (!n) return;
	let r = ct.exec(t);
	if (!r || n[2] !== r[2]) return;
	let i = n[2], a = parseFloat(n[1]), o = parseFloat(r[1]);
	return (e) => M(V(a, o, e)) + i;
}
function ut(e, t, n) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number") return V(e, t, n);
	if (typeof e == "string" && typeof t == "string") {
		let n = lt(e, t);
		if (n) return n;
	}
	return rt(e)(e, t);
}
// node_modules/motion-dom/dist/es/frameloop/order.mjs
var dt = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function ft(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1, a, o = /* @__PURE__ */ new Set(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function c(t) {
		o.has(t) && (n.add(t), e()), (a = t)(s);
	}
	let l = {
		schedule: (e, i = !1, s = !1) => {
			let c = s && r, l = c ? t : n;
			return i && o.add(e), c && e !== a && l.delete(e), l.add(e), e;
		},
		cancel: (e) => {
			n.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, r) {
				i = !0;
				return;
			}
			r = !0;
			let o = t;
			t = n, n = o, t.forEach(c), t.clear(), a = void 0, r = !1, i && (i = !1, l.process(e));
		}
	};
	return l;
}
// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var pt = 40;
function mt(e, t, n = {
	delta: 0,
	timestamp: 0,
	isProcessing: !1
}) {
	let i = !1, a = !0, o = () => i = !0, s = dt.reduce((e, t) => (e[t] = ft(o), e), {}), { setup: c, read: l, resolveKeyframes: u, preUpdate: d, update: f, preRender: p, render: m, postRender: h } = s, g = () => {
		let o = r.useManualTiming, s = o ? n.timestamp : performance.now();
		i = !1, o || (n.delta = a ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, pt), 1)), n.timestamp = s, n.isProcessing = !0, c.process(n), l.process(n), u.process(n), d.process(n), f.process(n), p.process(n), m.process(n), h.process(n), n.isProcessing = !1, i && t && (a = !1, e(g));
	}, _ = () => {
		i = !0, a = !0, n.isProcessing || e(g);
	};
	return {
		schedule: dt.reduce((e, t) => {
			let n = s[t];
			return e[t] = (e, t = !1, r = !1) => (i || _(), n.schedule(e, t, r)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < dt.length; t++) s[dt[t]].cancel(e);
		},
		state: n,
		steps: s
	};
}
// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: H, cancel: ht, steps: gt } = /* @__PURE__ */ mt(typeof requestAnimationFrame < "u" ? requestAnimationFrame : c, !0, k), _t = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => H.update(t, e),
		stop: () => ht(t),
		now: () => k.isProcessing ? k.timestamp : j.now()
	};
}, vt = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, yt = 2e4;
function bt(e, t = 50, n = yt, r) {
	let i = 0, a = e.next(i);
	for (r?.push(a.value); !a.done && i < n;) i += t, a = e.next(i), r?.push(a.value);
	return i >= n ? Infinity : i;
}
// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function xt(e, t = 100, n) {
	let { keyframes: r, velocity: i } = e, a = r && r[r.length - 1] - r[0], o = n({
		...e,
		velocity: i && a ? i * t / a : i,
		keyframes: [0, t]
	}), s = Math.min(bt(o), yt);
	return {
		type: "keyframes",
		ease: (e) => o.next(s * e).value / t,
		duration: /* @__PURE__ */ p(s)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var St = 100, Ct = 10, wt = 1, Tt = 800, Et = .3, Dt = .3, Ot = .01, kt = 2, At = .005, jt = .5, Mt = .01, Nt = 10, Pt = .05, Ft = (e) => e < 0 ? 1 / Math.max(1 + e, Pt) : Math.max(1 - e, Pt);
function It(e, t) {
	if (!(e > 1)) return 1;
	let n = Math.sqrt(e * e - 1), r = e - n, i = e + n, a = 2 * n * Math.exp(-t) * (1 + t);
	return zt((e) => i * Math.exp(-r * e) - r * Math.exp(-i * e) - a, (e) => Math.exp(-i * e) - Math.exp(-r * e), t) / t;
}
function Lt(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Rt = 12;
function zt(e, t, n) {
	let r = n;
	for (let n = 1; n < Rt; n++) r -= e(r) / t(r);
	return r;
}
var Bt = .001;
function Vt({ duration: e = Tt, bounce: t = Et }) {
	let r, i, a = Ft(t);
	e = n(Mt, Nt, /* @__PURE__ */ p(e)), a < 1 ? (r = (t) => {
		let n = t * a, r = n * e, i = Lt(t, a), o = Math.exp(-r);
		return Bt - n / i * o;
	}, i = (t) => {
		let n = t * a * e, i = a * a * t * t * e, o = Math.exp(-n), s = Lt(t * t, a);
		return (-r(t) + Bt > 0 ? -1 : 1) * -i * o / s;
	}) : (r = (t) => -.001 + Math.exp(-t * e) * (t * e + 1), i = (t) => Math.exp(-t * e) * (-t * (e * e)));
	let o = 5 / e, s = zt(r, i, o), c = s * It(a, s * e), l = c * c;
	return {
		stiffness: l,
		damping: a * 2 * Math.sqrt(l),
		duration: /* @__PURE__ */ f(e)
	};
}
var Ht = (e, t) => (t ? e >= 0 : e > 0) && e < Infinity;
function Ut(e, t) {
	if (Ht(e, t)) return e;
}
function Wt(e) {
	let t = Ut(e.stiffness), n = Ut(e.damping, !0), r = Ut(e.mass), i = {
		...e,
		stiffness: t ?? St,
		damping: n ?? Ct,
		mass: r ?? wt,
		isResolvedFromDuration: !1,
		isTimeDefined: (t ?? n ?? r) === void 0 && (e.duration !== void 0 || e.bounce !== void 0)
	};
	if (i.isTimeDefined) {
		if (e.visualDuration) {
			let t = Ft(e.bounce || 0), n = 2 * Math.PI / (e.visualDuration * 1.2) * It(t, 2 * Math.PI / 1.2);
			i.stiffness = n * n, i.damping = 2 * t * Math.sqrt(i.stiffness);
		} else Object.assign(i, Vt(i)), i.isResolvedFromDuration = !0;
		Ht(i.stiffness) && Ht(i.damping, !0) || (i.stiffness = St, i.damping = Ct);
	}
	return i;
}
function Gt(e = Dt, t = Et) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, r = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = {
		done: !1,
		value: r
	}, { stiffness: o, damping: s, mass: c, duration: l, isResolvedFromDuration: u, isTimeDefined: d } = Wt({ ...n }), m = (e) => u ? 0 : -/* @__PURE__ */ p(e), h = s / (2 * Math.sqrt(o * c)), g = /* @__PURE__ */ p(Math.sqrt(o / c)), _ = h * g, v = {
		target: i,
		delta: i - r,
		velocity: m(n.velocity) || 0,
		restSpeed: 0,
		restDelta: 0
	}, y = () => {
		let e = Math.abs(v.delta) < 5;
		v.restSpeed = n.restSpeed || (e ? Ot : kt), v.restDelta = n.restDelta || (e ? At : jt);
	};
	y();
	let b, x, S;
	if (h < 1) {
		let e = Lt(g, h), t = {
			A: 0,
			sinC: 0,
			cosC: 0,
			t: -1,
			env: 0,
			sin: 0,
			cos: 0
		};
		S = () => {
			t.A = (v.velocity + _ * v.delta) / e, t.sinC = _ * t.A + v.delta * e, t.cosC = _ * v.delta - t.A * e;
		};
		let n = (n) => {
			n !== t.t && (t.t = n, t.env = Math.exp(-_ * n), t.sin = Math.sin(e * n), t.cos = Math.cos(e * n));
		};
		b = (e) => (n(e), v.target - t.env * (t.A * t.sin + v.delta * t.cos)), x = (e) => (n(e), t.env * (t.sinC * t.sin + t.cosC * t.cos));
	} else if (h === 1) {
		b = (e) => v.target - Math.exp(-g * e) * (v.delta + (v.velocity + g * v.delta) * e);
		let e = { C: 0 };
		S = () => {
			e.C = v.velocity + g * v.delta;
		}, x = (t) => Math.exp(-g * t) * (g * e.C * t - v.velocity);
	} else {
		let e = g * Math.sqrt(h * h - 1), t = _ - e, n = _ + e, r = e < 1 || d ? Infinity : 300 / e, i = (e, t) => Math.exp(t > r ? (_ - e) * r - _ * t : -e * t), a = {
			S: 0,
			F: 0
		};
		S = () => {
			let t = (v.velocity + _ * v.delta) / e;
			a.S = (v.delta + t) / 2, a.F = (v.delta - t) / 2;
		}, b = (e) => v.target - a.S * i(t, e) - a.F * i(n, e), x = (e) => t * a.S * i(t, e) + n * a.F * i(n, e);
	}
	S();
	let C = u && l || null, w = {
		calculatedDuration: C,
		retarget: (e, t) => {
			v.target = e[e.length - 1], v.delta = v.target - e[0], v.velocity = m(t), n.restSpeed && n.restDelta || y(), w.calculatedDuration = C, a.done = !1, S();
		},
		velocity: (e) => /* @__PURE__ */ f(x(e)),
		next: (e) => {
			let t = b(e);
			if (u) a.done = e >= l;
			else {
				let n = /* @__PURE__ */ f(x(e));
				a.done = Math.abs(n) <= v.restSpeed && Math.abs(v.target - t) <= v.restDelta;
			}
			return a.value = a.done ? v.target : t, a;
		},
		toString: () => {
			let e = Math.min(bt(w), yt), t = vt((t) => w.next(e * t).value, e, 30);
			return e + "ms " + t;
		}
	};
	return w;
}
var Kt = /* @__PURE__ */ Object.assign(Gt, { applyToOptions: (e) => {
	let t = xt(e, 100, Gt);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ f(t.duration), e.type = "keyframes", e;
} });
// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function qt({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => e < s || e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o ? o(g) : g;
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => {
		let t = v(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : e ? _ + t : d;
	}, b, x, S = (e) => {
		p(f.value) && (b = e, x = Kt({
			keyframes: [f.value, m(f.value)],
			velocity: -v(e) / r * 1e3,
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return S(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !x && b === void 0 && (t = !0, y(e), S(e)), b !== void 0 && e >= b ? x.next(e - b) : (!t && y(e), f);
		}
	};
}
// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Jt(e, t, n) {
	let i = [], a = r.mix || ut, o = e.length - 1;
	for (let r = 0; r < o; r++) {
		let o = n?.(e[r], e[r + 1]) || a(e[r], e[r + 1]);
		t && (o = l(Array.isArray(t) ? t[r] || c : t, o)), i.push(o);
	}
	return i;
}
function Yt(e, t, { clamp: r = !0, ease: i, mixer: a } = {}) {
	let o = e.length;
	if (o === 1) return () => t[0];
	if (o === 2 && t[0] === t[1]) return () => t[1];
	let s = e[0] === e[1];
	e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let c = Jt(t, i, a), l = c.length, d = (n) => {
		if (s && n < e[0]) return t[0];
		let r = 0;
		if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ u(e[r], e[r + 1], n);
		return c[r](i);
	};
	return r ? (t) => d(n(e[0], e[o - 1], t)) : d;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Xt(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ u(0, t, r);
		e.push(V(n, 1, i));
	}
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function U(e) {
	let t = [0];
	return Xt(t, e.length - 1), t;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Zt(e, t) {
	return e.map((e) => e * t);
}
// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Qt(e, t) {
	return e.map(() => t || ne).splice(0, e.length - 1);
}
function W({ duration: e = 300, keyframes: t, times: n, ease: i = "easeInOut", mixer: a }) {
	let o = typeof t[0] == "number" ? void 0 : a, s = /* @__PURE__ */ D(i) ? i.map(O) : O(i) || ne, c = {
		done: !1,
		value: t[0]
	}, l = -1;
	if (!o) {
		for (let e = 1; e < t.length; e++) if (t[e] !== t[e - 1]) {
			if (l >= 0) {
				l = -2;
				break;
			}
			l = e - 1;
		}
	}
	if (l >= 0) {
		let i = n && n.length === t.length ? n : U(t), a = i[l] * e, o = i[l + 1] * e, u = t[l], d = t[l + 1], f = Array.isArray(s) ? s[l] : s, p = (r.mix || ut)(u, d), m = t.length - 2;
		return {
			calculatedDuration: e,
			next: (t) => (c.value = l && t < a ? p(0) : l < m && (t >= o || !e) ? typeof d == "number" ? d : p(1) : p(f(t >= o || !e ? 1 : t <= a ? 0 : (t - a) / (o - a))), c.done = t >= e, c)
		};
	}
	let u = Yt(Zt(n && n.length === t.length ? n : U(t), e), t, {
		ease: Array.isArray(s) ? s : Qt(t, s),
		mixer: o
	});
	return {
		calculatedDuration: e,
		next: (t) => (c.value = u(t), c.done = t >= e, c)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var $t = 5;
function en(e, t, n) {
	let r = Math.max(t - $t, 0);
	return /* @__PURE__ */ m(n - e(r), t - r);
}
function tn(e, t, n = 0) {
	return t <= 0 ? n : e.velocity ? e.velocity(t) : en((t) => e.next(t).value, t, e.next(t).value);
}
// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function nn(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a, o, s = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		n !== null && (s++ || (a = n), o = n);
	}
	let c = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : s - 1;
	return !c || r === void 0 ? c ? o : a : r;
}
// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var rn = {
	decay: qt,
	inertia: qt,
	tween: W,
	keyframes: W,
	spring: Kt
};
function an(e) {
	typeof e.type == "string" && (e.type = rn[e.type]);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-start-time.mjs
var on = 40, sn = (e, t) => t - e > on && !r.useManualTiming ? t : e;
// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function cn(e, t) {
	return {
		kind: e,
		animation: t,
		timestamp: j.now(),
		frameTimestamp: k.timestamp,
		frameIsProcessing: k.isProcessing
	};
}
function ln(e, t, n) {
	let r = globalThis.__MOTION_INSPECT__;
	if (r) try {
		r({
			...cn("animation-start", e),
			options: n ? {
				...t,
				...n
			} : t
		});
	} catch {}
}
// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var un = class {
	constructor() {
		this.isResolved = !1;
	}
	get finished() {
		return this._finished ||= this.isResolved ? Promise.resolve() : new Promise((e) => {
			this._resolve = e;
		}), this._finished;
	}
	updateFinished() {
		this._finished = this._resolve = void 0, this.isResolved = !1;
	}
	notifyFinished() {
		this.isResolved = !0, this._resolve?.();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, dn = (e) => e / 100, fn = (e) => Math.round(e * 1e4) / 1e4, G = class extends un {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options, t = j.now();
			e && e.updatedAt !== t && this.tick(e.updatedAt = t), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause(), ln(this, this.options);
	}
	initAnimation() {
		let { options: e } = this;
		an(e);
		let { type: t = W, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || W;
		this.mixKeyframes = void 0, s !== W && typeof o[0] != "number" && (this.mixKeyframes = l(dn, e.mixer?.(o[0], o[1]) || ut(o[0], o[1])), o = [0, 100]);
		let c = s(o === e.keyframes ? e : {
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = bt(c));
		let { calculatedDuration: u } = c;
		this.calculatedDuration = u, this.resolvedDuration = u + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		this.currentTime = this.holdTime ?? Math.round(e - this.startTime) * this.playbackSpeed;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, calculatedDuration: i } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: a = 0, keyframes: o, type: s, onUpdate: c, finalKeyframe: l } = this.options;
		this.startTime === this.pendingStartTime && (this.startTime = sn(this.startTime, e)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let u = this.currentTime - a * (this.playbackSpeed >= 0 ? 1 : -1), d = this.playbackSpeed >= 0 ? u < 0 : u > r;
		this.currentTime = Math.max(u, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let f = this.generate(this.currentTime, d), { done: p } = f;
		d || (p = this.playbackSpeed >= 0 ? i < Infinity ? this.currentTime >= r : p : this.currentTime <= 0);
		let m = this.holdTime === null && (this.state === "finished" || this.state === "running" && p);
		return m && s !== qt && (f.value = nn(o, this.options, l, this.speed)), c && c(f.value), m && this.finish(), f;
	}
	at(e) {
		return this.holdTime ?? fn((e - this.startTime) * this.playbackSpeed);
	}
	sampleAt(e, t) {
		let { options: n, totalDuration: r } = this, i = this.at(e) - (n.delay || 0);
		return i >= r && n.type !== qt ? nn(n.keyframes, n, t ? void 0 : n.finalKeyframe) : this.generate(Math.max(i, 0), i < 0).value;
	}
	generate(e, t) {
		let { generator: r, totalDuration: i, mixKeyframes: a, mirroredGenerator: o, resolvedDuration: s } = this, { keyframes: c, repeat: l, repeatType: u, repeatDelay: d } = this.options, f = e, p = r;
		if (l) {
			let t = Math.min(e, i) / s, r = Math.floor(t), a = t % 1;
			!a && t >= 1 && (a = 1), a === 1 && r--, r = Math.min(r, l + 1), r % 2 && (u === "reverse" ? (a = 1 - a, d && (a -= d / s)) : u === "mirror" && (p = o)), f = n(0, 1, a) * s;
		}
		let m;
		return t ? (this.delayState.value = c[0], m = this.delayState) : m = p.next(f), a && !t && (m.value = a(m.value)), m;
	}
	get duration() {
		return /* @__PURE__ */ p(this.calculatedDuration);
	}
	get iterationDuration() {
		return this.duration + /* @__PURE__ */ p(this.options.delay ?? 0);
	}
	get time() {
		return /* @__PURE__ */ p(this.currentTime);
	}
	set time(e) {
		this.state === "finished" && this.updateFinished(), e = /* @__PURE__ */ f(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		return tn(this.generator, this.currentTime, this.options.velocity);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(j.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ p(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = _t, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? (this.pendingStartTime = n) : this.startTime = n - this.holdTime / (this.playbackSpeed || 1), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(j.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.driver?.stop(), this.driver = void 0, this.startTime = this.holdTime = null;
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
}, pn = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function mn(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(me) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!pn.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var hn = /\b([a-z-]*)\(.*?\)/gu, gn = {
	...B,
	getAnimatableNone: (e) => {
		let t = e.match(hn);
		return t ? t.map(mn).join(" ") : e;
	}
}, _n = {
	...B,
	getAnimatableNone: (e) => {
		let t = B.parse(e);
		return B.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, vn = {
	...N,
	transform: Math.round
}, yn = {
	rotate: F,
	pathRotation: F,
	rotateX: F,
	rotateY: F,
	rotateZ: F,
	scale: pe,
	scaleX: pe,
	scaleY: pe,
	scaleZ: pe,
	skew: F,
	skewX: F,
	skewY: F,
	distance: L,
	translateX: L,
	translateY: L,
	translateZ: L,
	x: L,
	y: L,
	z: L,
	perspective: L,
	transformPerspective: L,
	opacity: fe,
	originX: De,
	originY: De,
	originZ: L
}, K = {
	borderWidth: L,
	borderTopWidth: L,
	borderRightWidth: L,
	borderBottomWidth: L,
	borderLeftWidth: L,
	borderRadius: L,
	borderTopLeftRadius: L,
	borderTopRightRadius: L,
	borderBottomRightRadius: L,
	borderBottomLeftRadius: L,
	width: L,
	maxWidth: L,
	height: L,
	maxHeight: L,
	top: L,
	right: L,
	bottom: L,
	left: L,
	inset: L,
	insetBlock: L,
	insetBlockStart: L,
	insetBlockEnd: L,
	insetInline: L,
	insetInlineStart: L,
	insetInlineEnd: L,
	padding: L,
	paddingTop: L,
	paddingRight: L,
	paddingBottom: L,
	paddingLeft: L,
	paddingBlock: L,
	paddingBlockStart: L,
	paddingBlockEnd: L,
	paddingInline: L,
	paddingInlineStart: L,
	paddingInlineEnd: L,
	margin: L,
	marginTop: L,
	marginRight: L,
	marginBottom: L,
	marginLeft: L,
	marginBlock: L,
	marginBlockStart: L,
	marginBlockEnd: L,
	marginInline: L,
	marginInlineStart: L,
	marginInlineEnd: L,
	fontSize: L,
	backgroundPositionX: L,
	backgroundPositionY: L,
	...yn,
	zIndex: vn,
	fillOpacity: fe,
	strokeOpacity: fe,
	numOctaves: vn
}, bn = {
	...K,
	color: z,
	backgroundColor: z,
	outlineColor: z,
	fill: z,
	stroke: z,
	borderColor: z,
	borderTopColor: z,
	borderRightColor: z,
	borderBottomColor: z,
	borderLeftColor: z,
	filter: gn,
	WebkitFilter: gn,
	mask: _n,
	WebkitMask: _n
}, xn = (e) => bn[e], Sn = /*@__PURE__*/ new Set([gn, _n]), Cn, wn, Tn;
function En(e, t) {
	if (e === Cn && t === wn) return Tn;
	let n = xn(e);
	return Sn.has(n) || (n = B), Tn = n.getAnimatableNone ? n.getAnimatableNone(t) : void 0, Cn = e, wn = t, Tn;
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function Dn(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var q = (e) => e * 180 / Math.PI, On = (e) => An(q(Math.atan2(e[1], e[0]))), kn = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scaleZ: () => 1,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: On,
	rotateZ: On,
	skewX: (e) => q(Math.atan(e[1])),
	skewY: (e) => q(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, An = (e) => (e %= 360, e < 0 && (e += 360), e), jn = On, Mn = (e) => Math.hypot(e[0], e[1]), Nn = (e) => Math.hypot(e[4], e[5]), Pn = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Mn,
	scaleY: Nn,
	scaleZ: (e) => Math.hypot(e[8], e[9], e[10]),
	scale: (e) => (Mn(e) + Nn(e)) / 2,
	rotateX: (e) => An(q(Math.atan2(e[6], e[5]))),
	rotateY: (e) => An(q(Math.atan2(-e[2], e[0]))),
	rotateZ: jn,
	rotate: jn,
	skewX: (e) => q(Math.atan(e[4])),
	skewY: (e) => q(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Fn(e) {
	return +!!e.includes("scale");
}
function In(e, t) {
	if (!e || e === "none") return Fn(t);
	let n = e.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
	if (!n) return Fn(t);
	let r = (n[1] ? Pn : kn)[t], i = n[2].split(",").map((e) => parseFloat(e));
	return typeof r == "function" ? r(i) : i[r];
}
var Ln = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return In(n, t);
}, J = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"scaleZ",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], Y = /* @__PURE__ */ new Set([...J, "pathRotation"]), Rn = (e) => e === N || e === L, zn = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), Bn = /* @__PURE__ */ J.filter((e) => !zn.has(e));
function Vn(e) {
	let t = [];
	return Bn.forEach((n) => {
		let r = e.getValue(n);
		if (r !== void 0) {
			let e = r.get(), i = +!!n.startsWith("scale");
			if (e === i) return;
			t.push([n, e]), r.set(i);
		}
	}), t;
}
var Hn = /* @__PURE__ */ new Set(["bottom", "right"]);
function Un(e, t, n, r, i, a) {
	let o = parseFloat(e);
	if (!isNaN(o)) return o;
	let { min: s, max: c } = t()[n], l = c - s;
	return a === "border-box" ? l : l - parseFloat(r) - parseFloat(i);
}
var Wn = ({ transform: e }) => In(e, "x"), Gn = ({ transform: e }) => In(e, "y"), Kn = {
	width: ({ width: e, paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }, i) => Un(e, i, "x", t, n, r),
	height: ({ height: e, paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }, i) => Un(e, i, "y", t, n, r),
	top: ({ top: e }) => parseFloat(e),
	left: ({ left: e }) => parseFloat(e),
	bottom: ({ top: e }, t) => {
		let { y: n } = t();
		return parseFloat(e) + (n.max - n.min);
	},
	right: ({ left: e }, t) => {
		let { x: n } = t();
		return parseFloat(e) + (n.max - n.min);
	},
	x: Wn,
	y: Gn,
	translateX: Wn,
	translateY: Gn
}, X = /* @__PURE__ */ new Set(), qn = !1, Jn = !1, Yn = !1;
function Xn() {
	if (Jn) {
		let e = [], t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		X.forEach((r) => {
			r.needsMeasurement && (e.push(r), t.add(r.element), Hn.has(r.name) && n.add(r.element));
		});
		let r = /* @__PURE__ */ new Map();
		n.forEach((e) => {
			let t = Vn(e);
			t.length && (r.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = r.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Jn = !1, qn = !1, X.forEach((e) => e.complete(Yn)), X.clear();
}
function Zn() {
	X.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Jn = !0);
	});
}
function Qn() {
	Yn = !0, Zn(), Xn(), Yn = !1;
}
function $n(e, t, n) {
	if (typeof e == "string") {
		if (i(e) || o(e)) return parseFloat(e);
		if (!B.test(e) && B.test(n)) return En(t, n);
	}
	return e ?? void 0;
}
var er = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (X.add(this), qn || (qn = !0, H.read(Zn), H.resolveKeyframes(Xn))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = $n(n.readValue(t, a), t, a);
				r !== void 0 && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		Dn(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), X.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (X.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, tr = (e) => e.startsWith("--");
// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function nr(e, t, n) {
	tr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var rr = {};
// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function ir(e, t) {
	let n = /* @__PURE__ */ s(e);
	return () => rr[t] ?? n();
}
// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var ar = /* @__PURE__ */ ir(() => window.ScrollTimeline !== void 0, "scrollTimeline"), or = /* @__PURE__ */ ir(() => window.ViewTimeline !== void 0, "viewTimeline"), sr = /*@__PURE__*/ ir(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, lr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ cr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ cr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ cr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ cr([
		.33,
		1.53,
		.69,
		.99
	])
};
// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function ur(e, t) {
	if (e) return typeof e == "function" ? sr() ? vt(e, t) : "ease-out" : /* @__PURE__ */ ie(e) ? cr(e) : Array.isArray(e) ? e.map((e) => ur(e, t) || lr.easeOut) : lr[e];
}
// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function dr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = ur(s, i);
	Array.isArray(d) && (u.easing = d);
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	return l && (f.pseudoElement = l), e.animate(u, f);
}
// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function fr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function pr({ type: e, ...t }) {
	return fr(e) && sr() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var mr = class extends un {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e;
		let c = pr(e);
		this.animation = dr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = this.onFinish = () => {
			if (this.animation.onfinish = null, this.finishedTime = this.time, !i) {
				let e = nn(r, this.options, o, this.speed);
				this.updateMotionValue?.(e), nr(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		}, ln(this, e, c);
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.onfinish = this.onFinish, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.isStopped || (this.animation.onfinish = this.onFinish), this.animation.finish?.();
	}
	cancel() {
		this.animation.onfinish = null;
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		this.isStopped || (this.isStopped = !0, this.state !== "idle" && this.finishedTime === null && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel()));
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ p(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ p(e);
	}
	get time() {
		return /* @__PURE__ */ p(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ f(e), t && (this.animation.pause(), this.updateFinished());
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, onAttach: t, observe: n }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = this.onFinish = null, e && ar() ? (this.animation.timeline = e, t?.(this.animation), c) : n(this);
	}
}, hr = {
	anticipate: C,
	backInOut: S,
	circInOut: E
};
function gr(e) {
	return e in hr;
}
function _r(e) {
	typeof e.ease == "string" && gr(e.ease) && (e.ease = hr[e.ease]);
}
var vr = class extends mr {
	constructor(e) {
		_r(e), an(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	elapsed() {
		return this.state === "running" ? (j.now() - this.startTime) * this.speed : this.time * 1e3;
	}
	sample(e) {
		if (!this.sampler) {
			let { motionValue: e, onUpdate: t, onComplete: n, onPlay: r, onStop: i, element: a, ...o } = this.options;
			this.sampler = new G({
				...o,
				autoplay: !1
			}), this.sampler.stop();
		}
		return this.sampler.sample(Math.max(0, e)).value;
	}
	liveValue() {
		let { state: e } = this;
		if (e === "running" || e === "paused") return this.sample(this.elapsed());
	}
	updateMotionValue(e) {
		let { motionValue: t, element: r, name: i } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let { speed: a } = this, o = this.elapsed(), s = this.state === "running" && a ? n(0, 10, o) : 0, c = this.sample(o);
		r && i && nr(r, i, c), t.setWithVelocity(this.sample(o - s * Math.sign(a)), c, s / Math.abs(a || 1));
	}
}, yr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (B.test(e) || e === "0") && !e.startsWith("url("));
// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function br(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function xr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = yr(i, t), s = yr(a, t);
	return !o || !s ? !1 : br(e) || (n === "spring" || fr(n)) && r;
}
// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Sr(e) {
	e.duration = 0, e.type = "keyframes";
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var Cr = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), wr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Tr(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && wr.test(e[t])) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/needs-mixer.mjs
var Er = ({ mixer: e, keyframes: t }) => e && typeof t[0] != "number" && t.some((n, r) => r && e(t[r - 1], n)), Dr = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), Or = () => !r.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function kr(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!n || !(Cr.has(n) || Dr.has(n))) return !1;
	let c = t?.owner?.current;
	if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
	let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
	return Or() && (Cr.has(n) || Dr.has(n) && Tr(s)) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && a !== 0 && o !== "inertia" && !Er(e);
}
// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Ar = (e, t) => t && typeof e == "number" ? t.transform(e) : e, jr = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
J.length;
var Mr = {}, Nr = (e, t, n = Ar(t, yn[e])) => (Mr[e] || (Mr[e] = (jr[e] || e) + "(")) + n + ")", Pr = (e, t) => (typeof t == "number" ? t : parseFloat(t)) === +!!e.startsWith("scale"), Fr = /* @__PURE__ */ new WeakMap(), Ir = 200, Lr = .001, Rr = .1, zr = .001, Br = 100, Vr = 100, Hr = /* @__PURE__ */ new Set([
	"linear",
	"easeIn",
	"easeOut",
	"easeInOut"
]), Ur = (e) => Hr.has(e), Wr = /* @__PURE__ */ new WeakMap(), Gr = (e, t) => {
	let n = Wr.get(e);
	return n?.[0] !== t && (n = [t, "linear(" + U(Array(t + 1)).map((t) => fn(e(t)) + " " + fn(t * 100) + "%") + ")"], Wr.set(e, n)), n[1];
}, Kr = (e, t) => Math.min(Ir, Math.max(2, Math.ceil((t - e) / 10))), qr = (e, t) => Math.abs(e - t) <= Lr, Jr = (e, t) => e - t, Yr = (e, t, n) => U(Array(n + 1)).map((n) => V(e, t, n)), Xr = (e) => e.motionValue.owner, Zr = (e) => Fr.get(e), Qr = ({ state: e }) => e === "idle" || e === "finished", Z = (e, t) => e.latestValues ? e.latestValues[t] : e.getValue(t)?.get(), $r = ({ name: e, motionValue: t }) => e && J.includes(e) && t?.owner?.current instanceof HTMLElement && Or() && sr();
function ei(e) {
	let t = Xr(e), { onUpdate: n, transformTemplate: r } = t.getProps();
	return !e.isHandoff && !n && !e.hasOnUpdate && !r && e.type !== "inertia" && (Z(t, "transform") || "none") === "none" && !Z(t, "pathRotation") && !t.projection?.isProjecting() && !Er(e);
}
var ti = class {
	constructor(e, t, n, r) {
		this.element = e, this.update = t, this.makeDriver = n, this.animation = r;
	}
	get js() {
		return this.driver ||= this.makeDriver(this.update);
	}
	now() {
		return this.driver || this.makeDriver !== _t ? this.js.now() : k.isProcessing ? k.timestamp : j.now();
	}
	start(e = !0) {
		let t = Zr(this.element);
		!t || t.isJS ? this.js.start(e) : t.schedule(!1, !e);
	}
	stopJS() {
		this.driver?.stop();
	}
	stop() {
		this.stopJS();
		let e = Zr(this.element);
		e && !e.isFinishing && e.release(this.animation);
	}
}, ni, ri = class extends G {
	constructor(e) {
		let t = Xr(e).current, { driver: n = _t } = e, r, i = ei(e);
		e.driver = (e) => new ti(t, e, n, r), super(e), r = this;
		let a = this.driver;
		a && (a.animation = this), this.canAccelerate = i;
		let { stop: o } = this;
		this.stop = () => {
			this.isAccelerated() && this.sync(), o();
		};
	}
	offsets() {
		let { keyframes: e, times: t } = this.options;
		return t || (this.offsetsOf !== e && (this.offsetsOf = e, this.cachedOffsets = U(e)), this.cachedOffsets);
	}
	get group() {
		return Zr(Xr(this.options).current);
	}
	get js() {
		return this.driver?.js;
	}
	stopJS() {
		this.driver?.stopJS();
	}
	get name() {
		return this.options.name;
	}
	timing() {
		let { startTime: e, speed: t, totalDuration: n } = this, { delay: r = 0, repeatType: i } = this.options;
		return this.holdTime === null ? n === Infinity ? [e + r / t, this.resolvedDuration * (i === "loop" ? 1 : 2) / t || 1] : [e + (r + n) / t, 0] : [Infinity, 0];
	}
	isAccelerated() {
		let { group: e, state: t } = this;
		return e?.tracks.has(this) && !e.isJS && this.canAccelerate && (t === "running" || t === "paused");
	}
	liveValue() {
		return this.isAccelerated() ? this.sampleAt(j.now()) : void 0;
	}
	tween() {
		let { keyframes: e, type: t, repeat: n, delay: r = 0 } = this.options, i = -1;
		if (n || t !== W || this.holdTime !== null) return;
		for (let t = 1; t < e.length; t++) if (e[t] !== e[t - 1]) {
			if (i >= 0) return;
			i = t - 1;
		}
		let { ease: a } = this.options;
		/* @__PURE__ */ D(a) && (a = a[i]);
		let o = this.offsets(), s = (e) => this.startTime + (r + o[e] * this.totalDuration) / this.speed;
		if (i >= 0) {
			let e = /* @__PURE__ */ ie(a) ? cr(a) : Ur(a) ? lr[a] : O(a);
			return [
				s(i),
				s(i + 1),
				typeof e == "string" || qr(e(0), 0) && qr(e(1), 1) ? e : void 0
			];
		}
	}
	boundaries(e, t) {
		let { startTime: n, speed: r, resolvedDuration: i, options: a } = this, { delay: o = 0, repeat: s = 0, repeatDelay: c = 0, repeatType: l, type: u } = a, d = (u || W) === W ? this.offsets() : [0, 1], f = n + o / r, p = [];
		if (this.holdTime !== null || !(i > 0)) return p;
		for (let n = Math.max(0, Math.floor((e - f) * r / i)); n <= s; n++) {
			let a = f + n * i / r;
			if (a > t) break;
			for (let o of d) {
				let s = a + (n % 2 && l && l !== "loop" ? 1 - o : o) * (i - c) / r;
				s > e && s < t && p.push(s);
			}
		}
		return p;
	}
	numberAt(e) {
		return parseFloat(this.sampleAt(e, !0));
	}
	sync() {
		let e = j.now(), t = this.sampleAt(e, !0);
		this.options.motionValue.setWithVelocity(this.holdTime === null ? this.sampleAt(e - 10, !0) : t, t, 10);
	}
	play() {
		this.isStopped || ((this.group || oi(Xr(this.options))).tracks.add(this), super.play());
	}
	pause() {
		super.pause(), this.isAccelerated() && this.group.schedule(!1);
	}
	complete() {
		super.complete();
		let { group: e } = this;
		e && !e.isJS && this.tick(j.now());
	}
	get time() {
		return this.isAccelerated() ? /* @__PURE__ */ p(n(0, this.totalDuration, this.at(j.now()) - (this.options.delay || 0))) : super.time;
	}
	set time(e) {
		(ni ??= Object.getOwnPropertyDescriptor(G.prototype, "time").set).call(this, e);
	}
	attachTimeline(e) {
		return this.canAccelerate = !1, this.group?.demote(!0), super.attachTimeline(e);
	}
}, ii, ai = (e) => {
	ii || queueMicrotask(() => {
		let e = ii;
		ii = void 0, e.forEach((e) => e());
	}), (ii ||= []).push(e);
};
function oi(e) {
	let t = e.current, n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = {}, a = [], o = /* @__PURE__ */ new Map(), s = [], c = !1, l = !1, d = !1, f = !1, p = -Infinity, m, h = Infinity, g, _ = (e) => {
		for (let t of n) if (t.name === e) return !0;
	}, v = (t, n) => {
		let o = {};
		for (let s of t === void 0 ? J : a) {
			let a = r.get(s), c = t === void 0 ? Z(e, s) : a ? a.sampleAt(n > t && !a.timing()[1] ? n : t) : i[s];
			c !== void 0 && (o[s] = c);
		}
		return o;
	}, y = (e, t) => {
		let n = "";
		for (let r in e) {
			let i = e[r];
			t && Pr(r, i) || (n += Nr(r, i) + " ");
		}
		return (t ? n.trim() : n) || "none";
	}, b = (e, t) => y(v(e, t)), x = (e = v()) => {
		t.style.transform = y(e, !0);
	}, S = (e) => {
		e.onfinish = e.oncancel = null, e.cancel();
	}, C = (e = !0) => {
		clearTimeout(m), h = Infinity, g = void 0, e && x(), s.forEach(({ animation: e }) => S(e)), s = [];
	}, w = (e, n) => new Animation(new KeyframeEffect(t, e, n)), T = (e, t, n = Infinity) => {
		let r = {
			animation: e,
			offset: t,
			end: n
		};
		e.startTime = j.now() + t, n < Infinity && (e.onfinish = () => {
			r.isDone = !0, s.some((e) => e.end === Infinity) && (S(e), s = s.filter((e) => e !== r)), A.schedule(!1);
		}), e.oncancel = () => s.includes(r) && A.demote(), s.push(r);
	}, E = (e, t, n) => {
		let r = (t, n) => Math.abs(e(n) - e(t)), i = r(t, n);
		for (; n - t > .01;) {
			let e = (t + n) / 2;
			r(t, e) > r(e, n) ? n = e : t = e;
		}
		return r(t, n) > i / 2 ? [t, n] : [];
	}, ee = (e, t, n, r) => {
		let i = Kr(t, n);
		if (r.length * 4 > i) return;
		let a;
		for (let r of e) {
			let e = r.numberAt(t), i = (r.numberAt((t + n) / 2) - e) / (r.numberAt(n) - e);
			if (i === i) {
				if (a === void 0) a = i;
				else if (!qr(i, a)) return;
			}
		}
		let o = Yr(t, n, i).concat(r).sort(Jr), s = (e) => /* @__PURE__ */ u(t, n, e), c, l;
		for (let n of e) {
			let e = n.numberAt(t), r = o.map((t) => n.numberAt(t) - e), i = r[r.length - 1], a = r.some((e) => Math.abs(e) * Lr > Math.abs(i)) ? 0 : i, s = r.map((e) => a ? e / a : e);
			if (a && !c) c = s, l = (t) => (n.numberAt(t) - e) / a;
			else if (s.some((e, t) => !qr(e, a && c[t]))) return;
		}
		if (!c || c.every((e, t) => qr(e, s(o[t])))) return "linear";
		let d = [], f = (e, t = l(e)) => d.push(fn(t) + " " + fn(s(e) * 100) + "%");
		return c.forEach((e, t) => {
			t && Math.abs(e - c[t - 1]) > .2 && E(l, o[t - 1], o[t]).forEach((e) => f(e)), f(o[t], e);
		}), "linear(" + d + ")";
	}, te = (e, t, n, r) => {
		let i = [t], a = [], o = n, s = t;
		for (let r of e) {
			let e = r.tween();
			if (e?.[2] !== "linear") {
				let [i, c] = r.timing(), [l, u] = e || [t, c ? n : i];
				o = Math.min(o, l), s = Math.max(s, u), a.push(r);
			}
		}
		o = Math.max(t, o), s = Math.min(n, s);
		let c = (e, t) => a.every((n) => !(Math.abs(n.numberAt((e + t) / 2) - (n.numberAt(e) + n.numberAt(t)) / 2) > (n.name.startsWith("scale") ? zr : Rr))), l = (t, n, r) => {
			if (n - t < 1 || c(t, n)) i.push(n);
			else if (r < 4) l(t, (t + n) / 2, r + 1), l((t + n) / 2, n, r + 1);
			else {
				for (let r of e) i.push(...E((e) => r.numberAt(e), t, n));
				i.push(n);
			}
		}, u = s > o ? Yr(o, s, Math.ceil((s - o) / 100)) : [];
		u.push(n);
		for (let e of r) u.push(e, Math.min(e + .01, n));
		let d = t;
		for (let e of u.sort(Jr)) e > d && l(d, e, 0), d = e;
		return i.sort(Jr);
	}, ne = (e) => {
		let t;
		for (let n of e) {
			let e = n.tween();
			if (!e || t && (Math.abs(e[0] - t[0]) > 1 || Math.abs(e[1] - t[1]) > 1)) return;
			t = [
				e[0],
				e[1],
				!t || e[2] === t[2] ? e[2] : void 0
			];
		}
		return t;
	}, D = (e, t, n, r, i = { fill: "both" }, a) => {
		let o = r ? [] : e.flatMap((e) => e.boundaries(t, n)), s = r || ee(e, t, n, o), c = s ? [t, n] : te(e, t, n, o), l = c.map((e) => b(e, a)), d = { transform: l };
		return s || (d.offset = c.map((e) => /* @__PURE__ */ u(t, n, e))), l.every((e) => e === l[0]) && (x(v(t, a)), d = null), w(d, {
			...i,
			duration: n - t,
			easing: s || "linear"
		});
	}, re = (e) => {
		let t = j.now() + e;
		t < h && (clearTimeout(m), h = t, m = setTimeout(() => {
			h = Infinity, A.schedule(!1);
		}, e));
	}, ie = (t) => {
		let c = t, l = 0, u = 0, d = [], f = [], p = /* @__PURE__ */ new Set();
		r.clear(), o = /* @__PURE__ */ new Map();
		for (let e of n) {
			r.set(e.name, e);
			let [n, i] = e.timing(), a = n === Infinity;
			if (o.set(e, [
				e.at(t),
				e.speed,
				a
			]), !a) {
				if (e.speed < 0) return;
				if (i) {
					if (l) {
						let e = (n - u) / i;
						if (Math.abs(i - l) > 1 || Math.abs(e - Math.round(e)) * l > 1) return;
					} else l = i, u = n;
					f.push(e);
				} else p.add(n);
				d.push(e), c = Math.max(c, n);
			}
		}
		i = {}, a = J.filter((t) => {
			if (r.has(t)) return !0;
			let n = i[t] = Z(e, t);
			return n !== void 0 && !Pr(t, n);
		}), C(!1);
		let m = !l && ne(d);
		try {
			if (c > t) {
				let e;
				if (m && m[1] > t) {
					let [n, r, i] = m;
					if (n - t > Vr) return d.forEach((e) => e.sync()), re(g = n - t - Vr), !0;
					e = typeof i == "string" ? i : i ? Gr(i, Kr(n, r)) : ee(d, n, r, []), e && T(D(d, n, r, e, {
						fill: "both",
						endDelay: c - r
					}), n - t, c - n);
				}
				e || T(D(d, t, c), 0, c - t), p.forEach((e) => e < c - 1 && T(w(null, { duration: e - t }), 0, e - t));
			}
			if (l) {
				let e = u + Math.floor((c - u) / l) * l;
				T(D(f, e, e + l, void 0, {
					iterations: Infinity,
					iterationStart: (c - e) / l,
					fill: "forwards"
				}, c), c - t);
			}
		} catch {
			return;
		}
		return s.length || C(), !0;
	}, ae = (e, t) => {
		let r, i = 0;
		for (let t of n) {
			let n = o.get(t);
			if (!n) return !1;
			let [a, c, l] = n, u = t.at(e), d = t.timing()[0] === Infinity;
			if (l) {
				if (d && (u === a || !s.length)) continue;
				return !1;
			}
			let f = (u - a) / c, p = d ? 0 : t.speed / c;
			if (r === void 0) r = f, i = p;
			else if (Math.abs(f - r) > 1 || p !== i) return !1;
		}
		if (r === void 0) return !0;
		if (!s.length) {
			if (g === void 0 || t && i) return !1;
			if (i) {
				let e = (g - r) / i;
				if (e < 1) return !1;
				re(e);
			}
			return !0;
		}
		for (let { offset: e, end: n, isDone: i } of s) {
			let a = r - e;
			if (n < Infinity && (i ? a < n - 1 : a < 0 && (t || e <= 0) || a >= n)) return !1;
		}
		for (let { animation: t, offset: n, isDone: a } of s) {
			if (a) continue;
			let o = r - n;
			i && t.updatePlaybackRate && t.playState === "running" && Math.abs(Number(t.currentTime) - o) < 20 ? t.playbackRate !== i && t.updatePlaybackRate(i) : i ? (t.playbackRate !== i && (t.playbackRate = i), t.startTime = e - o / i) : (t.startTime = null, t.currentTime = o);
		}
		return !0;
	}, oe = () => !n.size && (d = !0, Zr(t) === A && Fr.delete(t), A.isJS || C(), !0), O = () => {
		let t = j.now();
		if (A.isJS || (A.isFinishing = !0, n.forEach((n) => {
			let [r, a] = n.timing();
			n.state === "running" && n.speed > 0 && !a && r <= t + 1 && (n.complete(), i[n.name] = Z(e, n.name), o.has(n) || (c = !0));
		}), A.isFinishing = !1), l = !1, d || (n.forEach((e) => Qr(e) && n.delete(e)), oe())) return;
		for (let e of n) if (!e.canAccelerate) return A.demote(!0);
		A.isJS && (A.isJS = !1, c = !0, n.forEach((e) => e.stopJS()));
		let r = c, a = f;
		if (c = f = !1, r || !ae(t, a)) {
			if (a) {
				if (t - p < Br) return A.demote();
				p = t;
			}
			if (!ie(t)) return A.demote();
		} else if (g !== void 0 && !a) return;
		n.forEach((e) => e.timing()[0] === Infinity && e.sync());
	}, A = {
		tracks: n,
		isJS: !1,
		isFinishing: !1,
		schedule(e, t) {
			d || (c ||= e, f ||= !!t, l || (l = !0, k.isProcessing ? H.render(O, !1, !0) : ai(O)));
		},
		release(e) {
			Qr(e) && n.delete(e), oe() || A.schedule(!0);
		},
		check() {
			if (!A.isJS) {
				for (let t in i) if (Z(e, t) !== i[t] && !_(t)) return A.schedule(!0, !0);
			}
		},
		demote(e) {
			if (!(A.isJS || d)) return n.forEach((t) => {
				t.isAccelerated() && t.sync(), e || (t.canAccelerate = !1);
			}), A.isJS = !0, o = /* @__PURE__ */ new Map(), C(), n.forEach((e) => e.state === "running" && e.js?.start()), !0;
		}
	};
	return Fr.set(t, A), A;
}
// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var si = class extends un {
	constructor(e) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = j.now();
		let { keyframes: t, name: n, motionValue: r, element: i } = e, a = e;
		a.autoplay ??= !0, a.delay ??= 0, a.type ??= "keyframes", a.repeat ??= 0, a.repeatDelay ??= 0, a.repeatType ??= "loop";
		let o = i?.KeyframeResolver || er;
		this.keyframeResolver = new o(t, (e, t, n) => this.onKeyframesResolved(e, t, a, !n), n, r, i), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, i) {
		this.keyframeResolver = void 0;
		let { name: a, type: o, velocity: s, delay: c, isHandoff: l, onUpdate: u } = n;
		this.resolvedAt = j.now();
		let d = xr(e, a, o, s);
		d || ((r.instantAnimations || !c) && u?.(nn(e, n, t)), e[0] = e[e.length - 1], Sr(n), n.repeat = 0);
		let { onComplete: f } = n;
		n.finalKeyframe = t, n.keyframes = e, n.onComplete = () => {
			f?.(), this.notifyFinished();
		};
		let p = d && !l && kr(n), m = !p && $r(n);
		i && (p || m || this.resolvedAt !== this.createdAt) && (n.startTime ??= sn(this.createdAt, this.resolvedAt));
		let h;
		if (p) {
			n.element = n.motionValue?.owner?.current;
			try {
				h = new vr(n);
			} catch {
				h = new G(n);
			}
		} else h = m ? new ri(n) : new G(n);
		this.pendingTimeline &&= (this.stopTimeline = h.attachTimeline(this.pendingTimeline), void 0), this._animation = h;
	}
	get finished() {
		return this._animation ? this._animation.finished : super.finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	liveValue() {
		return this._animation?.liveValue?.();
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), Qn()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation?.cancel(), this.keyframeResolver?.cancel();
	}
}, ci = class {
	constructor(e) {
		this.stop = () => {
			for (let e of this.animations) e.stop();
		}, this.animations = e.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((e) => e.finished));
	}
	getAll(e) {
		return this.animations[0][e];
	}
	attachTimeline(e) {
		let t = this.animations.map((t) => t.attachTimeline(e));
		return () => {
			t.forEach((e, t) => {
				e && e(), this.animations[t].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(e) {
		for (let t of this.animations) t.time = e;
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(e) {
		for (let t of this.animations) t.speed = e;
	}
	get state() {
		return this.getAll("state");
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		return li(this.animations, "duration");
	}
	get iterationDuration() {
		return li(this.animations, "iterationDuration");
	}
	play() {
		for (let e of this.animations) e.play();
	}
	pause() {
		for (let e of this.animations) e.pause();
	}
	cancel() {
		for (let e of this.animations) e.cancel();
	}
	complete() {
		for (let e of this.animations) e.complete();
	}
};
function li(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
// node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var ui = class extends ci {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
}, di = 30, fi = (e) => !isNaN(parseFloat(e)), pi = { current: void 0 }, mi = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = j.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.dirty(), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = j.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = fi(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on("change", e);
	}
	on(e, t) {
		var n;
		return e === "change" ? this.onChangeSubscribe(t) : ((n = this.events)[e] || (n[e] = new d())).add(t);
	}
	onChangeSubscribe(e) {
		let { events: t } = this;
		return !t.change && !this.changeSubscriber ? this.changeSubscriber = e : (t.change || (t.change = new d(), t.change.add(this.changeSubscriber), this.changeSubscriber = void 0), t.change.add(e)), () => {
			this.changeSubscriber === e ? this.changeSubscriber = void 0 : t.change?.remove(e), this.stopIfUnobserved();
		};
	}
	stopIfUnobserved() {
		H.read(() => {
			!this.changeSubscriber && !this.events.change?.getSize() && this.stop();
		});
	}
	clearListeners() {
		this.changeSubscriber = void 0;
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		t && (this.updatedAt = j.now(), this.stop()), this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, this.stopPassiveEffect?.();
	}
	dirty() {
		let { current: e, changeSubscriber: t } = this;
		t ? t(e) : this.events.change?.notify(e);
	}
	addDependent(e) {
		(this.dependents ||= /* @__PURE__ */ new Set()).add(e);
	}
	removeDependent(e) {
		this.dependents?.delete(e);
	}
	get() {
		pi.current?.push(this);
		let e = this.animation?.liveValue?.();
		return e === void 0 ? this.current : e;
	}
	getCurrent() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = j.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > di) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, di);
		return /* @__PURE__ */ m(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return new Promise((t) => this.run(e, t));
	}
	run(e, t) {
		this.stop(), this.hasAnimated = !0;
		let n = !1, r;
		r = e(() => {
			n = !0, this.events.animationComplete?.notify(), this.animation === r && (this.animation = void 0), t?.();
		}), n || (this.animation = r), this.events.animationStart?.notify();
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel?.notify()), this.animation = void 0;
	}
	isAnimating() {
		return !!this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect?.();
	}
};
function hi(e, t) {
	return new mi(e, t);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function gi(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function _i(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : gi(n, e);
}
// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var vi = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, yi = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), bi = {
	type: "keyframes",
	duration: .8
}, xi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Si = (e, { keyframes: t }) => t.length > 2 ? bi : Y.has(e) ? e.startsWith("scale") ? yi(t[1]) : vi : xi, Ci = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed",
	"out",
	"mixer"
]);
function wi(e) {
	for (let t in e) if (!Ci.has(t)) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Ti = (e, t, n, i = {}, a, o) => (s) => {
	let c = _i(i, e) || {}, l = c.delay || i.delay || 0, { elapsed: u = 0 } = i;
	u -= /* @__PURE__ */ f(l);
	let d = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...c,
		delay: -u,
		onUpdate: (e) => {
			t.set(e), c.onUpdate && c.onUpdate(e);
		},
		onComplete: () => {
			s(), c.onComplete && c.onComplete();
		},
		name: e,
		motionValue: t,
		element: o ? void 0 : a,
		hasOnUpdate: !!c.onUpdate
	};
	wi(c) || Object.assign(d, Si(e, d)), d.duration &&= /* @__PURE__ */ f(d.duration), d.repeatDelay &&= /* @__PURE__ */ f(d.repeatDelay), d.from !== void 0 && (d.keyframes[0] = d.from);
	let p = !1;
	if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (Sr(d), d.delay === 0 && (p = !0)), (r.instantAnimations || r.skipAnimations || a?.shouldSkipAnimations || c.skipAnimations) && (p = !0, Sr(d), d.delay = 0), d.allowFlatten = !c.type && !c.ease, p && !o && t.get() !== void 0) {
		let e = nn(d.keyframes, c);
		if (e !== void 0) {
			H.update(() => {
				d.onUpdate(e), d.onComplete();
			});
			return;
		}
	}
	return c.isSync ? new G(d) : new si(d);
}, Ei = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Di(e) {
	let t = Ei.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function Oi(e, t, n = 1) {
	let [r, a] = Di(e);
	if (!r) return;
	let o = window.getComputedStyle(t).getPropertyValue(r);
	if (o) {
		let e = o.trim();
		return i(e) ? parseFloat(e) : e;
	}
	return le(a) ? Oi(a, t, n + 1) : a;
}
// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var ki = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...J
]), Ai = (e) => !!(e && e.getVelocity), ji = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Mi = (e) => (t) => t.test(e), Ni = [
	N,
	L,
	I,
	F,
	Ee,
	Te,
	ji
], Pi = (e) => Ni.find(Mi(e));
// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Fi(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || o(e);
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Ii = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function Li(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Ii.has(t) && Re(t) && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] !== i && (e[r] = En(n, i));
}
// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Ri = class extends er {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	scheduleResolve() {
		if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement)) return this.complete();
		super.scheduleResolve();
	}
	canReadNow() {
		let { unresolvedKeyframes: e, element: t, motionValue: n } = this, r = e[0] ?? n?.get();
		if (!t?.current || r === void 0) return !1;
		for (let t = 0; t < e.length; t++) if (de(t ? e[t] : r)) return !1;
		return !0;
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t?.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), le(r))) {
				let i = Oi(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !ki.has(n) || e.length !== 2) return;
		let [r, i] = e;
		if (typeof r == "number" && typeof i == "number") return;
		let a = Pi(r), o = Pi(i);
		if (de(r) !== de(i) && Kn[n]) this.needsMeasurement = !0;
		else if (a !== o) {
			if (Rn(a) && Rn(o)) for (let t = 0; t < e.length; t++) {
				let n = e[t];
				typeof n == "string" && (e[t] = parseFloat(n));
			}
			else Kn[n] && (this.needsMeasurement = !0);
		}
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Fi(e[t])) && n.push(t);
		n.length && Li(e, n, t);
	}
	measure() {
		let { element: e, name: t } = this;
		return Kn[t](window.getComputedStyle(e.current), () => e.measureViewportBox());
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e?.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && this.motionValue?.jump(r, !1);
	}
	measureEndState() {
		let { element: e, unresolvedKeyframes: t } = this;
		if (!e?.current) return;
		this.motionValue?.jump(this.measuredOrigin, !1);
		let n = t.length - 1, r = t[n];
		t[n] = this.measure(), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.resolveNoneKeyframes();
	}
}, zi = [];
function Bi(e) {
	Vi(e), zi.unshift(e);
}
function Vi(e) {
	t(zi, e);
}
function Hi(e) {
	return zi.find((t) => t.test(e));
}
function Ui(e, t, n = {}, r) {
	let i = [], { velocity: a, path: o } = n, s = n.reduceMotion ?? r?.shouldReduceMotion;
	o?.animateValues && r && (t = { ...t }, o.animateValues(e, t, n, 0, i));
	for (let o in t) {
		if (o === "transition" || o === "transitionEnd") continue;
		let c = t[o];
		if (c === void 0) continue;
		let l = e(o), u = l.get();
		u !== void 0 && !l.isAnimating() && !Array.isArray(c) && c === u && !a ? H.update(() => l.set(c)) : (l.run(Ti(o, l, c, s && ki.has(o) ? { type: !1 } : n, r)), l.animation && i.push(l.animation));
	}
	let { transitionEnd: c } = t;
	if (c) {
		let t = () => H.update(() => {
			for (let t in c) e(t).set(c[t]);
		});
		i.length ? Promise.all(i).then(t) : t();
	}
	return i;
}
function Wi(e, t, n, r, i) {
	let a, o = !1, s = Ui((r) => {
		let s = a?.[r] ?? e.get(t, r);
		if (!s) {
			let c;
			if (!i) {
				let i = n[r];
				c = Gi(i) ?? e.read(t, r, i);
			}
			s = hi(c, { owner: i }), o ? e(t, { [r]: s }) : (a ||= {})[r] = s;
		}
		return s;
	}, n, r, i);
	return o = !0, a && e(t, a), s;
}
function Gi(e) {
	let t = Array.isArray(e) ? e[0] : void 0;
	return t === null ? void 0 : t;
}
// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Ki(e) {
	return a(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function qi(e) {
	return a(e) && "ownerSVGElement" in e;
}
// node_modules/motion-dom/dist/es/scope/active.mjs
var Q = {};
function Ji(e) {
	return Q.current?.add(e), e;
}
var Yi = (e) => Q.current ? Q.current.bind(e) : e;
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function Xi(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = t ? t.current : Q.current?.root || document, i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
// node_modules/motion-dom/dist/es/effects/MotionValueState.mjs
var Zi = class {
	constructor(e = H.render) {
		this.step = e, this.values = /* @__PURE__ */ new Map(), this.pending = [], this.numPending = 0, this.flush = () => {
			let { pending: e, numPending: t } = this;
			this.numPending = 0;
			for (let n = 0; n < t; n++) e[n]();
		};
	}
	set(e, t, n, r) {
		if (this.values.get(e)?.onRemove(), r) for (let e of this.values.values()) e.value === r && (n = e.render);
		let i = () => n && this.schedule(n);
		t.get() !== void 0 && i();
		let a = t.on("change", i), o = () => {
			a(), n && !r && this.cancel(n), this.values.get(e)?.onRemove === o && this.values.delete(e);
		};
		return this.values.set(e, {
			value: t,
			render: r ? void 0 : n,
			onRemove: o
		}), o;
	}
	get(e) {
		return this.values.get(e)?.value;
	}
	release() {
		let e = /* @__PURE__ */ new Map();
		return this.values.forEach((t, n) => {
			e.set(n, t.value), t.onRemove();
		}), this.transformKeys = this.transformValues = void 0, e;
	}
	schedule(e) {
		let { pending: t, numPending: n } = this;
		for (let r = 0; r < n; r++) if (t[r] === e) return;
		n || this.step(this.flush), t[this.numPending++] = e;
	}
	cancel(e) {
		let { pending: t } = this;
		for (let n = 0; n < this.numPending; n++) if (t[n] === e) {
			t[n] = t[--this.numPending];
			return;
		}
	}
};
// node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs
function Qi(e, { step: t, ...n } = {}) {
	let r = /* @__PURE__ */ new WeakMap();
	return Object.assign((n, i) => {
		let a = r.get(n) ?? new Zi(t);
		r.set(n, a);
		let o = [];
		for (let t in i) {
			let r = i[t], s = e(n, a, t, r);
			o.push(s);
		}
		return () => {
			for (let e of o) e();
		};
	}, n, {
		get: (e, t) => r.get(e)?.get(t),
		flush: (e) => r.get(e)?.flush(),
		state: (e) => r.get(e)
	});
}
// node_modules/motion-dom/dist/es/effects/style/transform.mjs
function $i(e) {
	let t = "", { transformKeys: n = [], transformValues: r = {} } = e;
	for (let e = 0; e < n.length; e++) {
		let i = n[e], a = r[i].getCurrent();
		a !== void 0 && (Pr(i, a) || (t += (t && " ") + Nr(i, a)));
	}
	let i = e.get("pathRotation")?.get();
	return i && (t += (t && " ") + Nr("rotate", i)), t || "none";
}
// node_modules/motion-dom/dist/es/effects/style/index.mjs
var ea = /* @__PURE__ */ new Set([
	"originX",
	"originY",
	"originZ"
]), ta = (e, t) => Ar(e.get(t)?.get(), K[t]), na = (e, t, n, r) => {
	let i, a;
	if (Y.has(n)) {
		if (n !== "pathRotation") {
			let e = t.transformKeys ??= [];
			(t.transformValues ??= {})[n] = r, e.includes(n) || (e.push(n), e.sort((e, t) => J.indexOf(e) - J.indexOf(t)));
		}
		t.get("transform") || (!Ki(e) && !t.get("transformBox") && na(e, t, "transformBox", new mi("fill-box")), t.set("transform", new mi("none"), () => {
			Fr.get(e)?.check(), e.style.transform = $i(t);
		})), a = t.get("transform");
	} else ea.has(n) ? (t.get("transformOrigin") || t.set("transformOrigin", new mi(""), () => {
		let n = ta(t, "originX") ?? "50%", r = ta(t, "originY") ?? "50%", i = ta(t, "originZ") ?? 0;
		e.style.transformOrigin = `${n} ${r} ${i}`;
	}), a = t.get("transformOrigin")) : i = tr(n) ? () => {
		e.style.setProperty(n, r.getCurrent());
	} : () => {
		e.style[n] = Ar(r.getCurrent(), K[n]);
	};
	return t.set(n, r, i, a);
}, ra = (e) => Ki(e) || qi(e), ia = (e, t) => {
	if (Y.has(t)) return Ln(e, t);
	let n = getComputedStyle(e), r = tr(t) ? n.getPropertyValue(t) : n[t];
	return typeof r == "string" && r.trim() || 0;
}, aa = /*@__PURE__*/ Qi(na, {
	test: ra,
	read: ia
});
// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function oa(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var sa = [
	"transform",
	"opacity",
	"clipPath",
	"filter",
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
// node_modules/motion-dom/dist/es/effects/attr/index.mjs
function ca(e, t) {
	if (!(t in e)) return !1;
	let n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t) || Object.getOwnPropertyDescriptor(e, t);
	return n && typeof n.set == "function";
}
var la = (e, t, n, r, i = n) => {
	let a = ca(e, i);
	!a && (i.startsWith("data") || i.startsWith("aria")) && (i = oa(i));
	let o = K[n] || K[i], s = a ? () => {
		e[i] = Ar(r.get(), K[n]);
	} : () => {
		let t = Ar(r.get(), o);
		t == null ? e.removeAttribute(i) : e.setAttribute(i, String(t));
	};
	return t.set(n, r, s);
};
// node_modules/motion-dom/dist/es/effects/svg/index.mjs
function ua(e, t, n, r) {
	return H.render(() => e.setAttribute("pathLength", "1")), n === "pathOffset" ? t.set(n, r, () => {
		let t = r.get();
		e.setAttribute("stroke-dashoffset", `${-t}`);
	}) : (t.get("stroke-dasharray") || t.set("stroke-dasharray", new mi("1 1"), () => {
		let n = t.get("pathLength")?.get() ?? 1, r = t.get("pathSpacing")?.get();
		e.setAttribute("stroke-dasharray", `${n} ${r ?? 1 - Number(n)}`);
	}), t.set(n, r, void 0, t.get("stroke-dasharray")));
}
var da = /*@__PURE__*/ Qi((e, t, n, r) => n.startsWith("path") && !Y.has(n) ? ua(e, t, n, r) : n.startsWith("attr") ? la(e, t, n, r, fa(n)) : n === "d" ? t.set(n, r, () => {
	let t = r.get()?.replace(/path\(|["')]/g, "");
	t === void 0 ? e.removeAttribute(n) : e.setAttribute(n, t);
}) : (Y.has(n) || ea.has(n) || tr(n) || n in e.style ? na : la)(e, t, n, r), {
	test: qi,
	read: (e, t) => Y.has(t) ? K[t]?.default || 0 : tr(t) || sa.includes(t) ? ia(e, t) || e.getAttribute(oa(t)) || 0 : (t = fa(t), e.getAttribute(oa(t)) ?? e.getAttribute(t) ?? void 0)
});
function fa(e) {
	return e.replace(/^attr([A-Z])/, (e, t) => t.toLowerCase());
}
// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function pa({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function ma(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function ha(e, t) {
	return pa(ma(e.getBoundingClientRect(), t));
}
// node_modules/motion-dom/dist/es/animation/animate/element.mjs
var ga = {}, _a = (e) => qi(e) ? da : aa, va = class {
	constructor(e, t) {
		this.effect = e, this.current = t, this.KeyframeResolver = Ri;
	}
	getValue(e) {
		return this.effect.get(this.current, e);
	}
	readValue(e, t) {
		return this.effect.read(this.current, e, t);
	}
	render() {
		this.effect.flush(this.current);
	}
	measureViewportBox() {
		return ha(this.current);
	}
	getProps() {
		return ga;
	}
};
function ya(e, t, n, r) {
	if (Q.current?.track(e), r) return Ui((e) => r.getValue(e, null), t, n, r);
	let i = _a(e);
	return Wi(i, e, t, n, new va(i, e));
}
// node_modules/motion-dom/dist/es/effects/prop/index.mjs
var ba = /*@__PURE__*/ Qi((e, t, n, r) => t.set(n, r, () => {
	e[n] = r.get();
}), {
	test: (e) => a(e),
	read: (e, t) => {
		let n = e[t];
		return typeof n == "string" || typeof n == "number" ? n : void 0;
	}
});
// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function xa(e, t, n) {
	let r = Ai(e) ? e : hi(e);
	return r.run(Ti("", r, t, n)), r.animation;
}
// node_modules/motion-dom/dist/es/render/store.mjs
var Sa = /* @__PURE__ */ new WeakMap();
// node_modules/motion-dom/dist/es/utils/stagger.mjs
function Ca(e = .1, { startDelay: t = 0, from: n = 0, ease: r, grid: i } = {}) {
	let a = {};
	return (o, s) => {
		let c = a[s];
		if (!c) {
			let [e, t] = i || [Infinity, 1], r = Math.min(e, s) - 1, o = Math.max(t, Math.ceil(s / e)) - 1, l = typeof n == "number", u = n === "first" ? 0 : n === "last" ? 1 : .5, d = l ? n % e : r * u, f = l ? Math.floor(n / e) : o * u;
			c = a[s] = [];
			for (let t = 0; t < s; t++) {
				let i = t % e, a = Math.floor(t / e), s = Math.min(i, r - i), l = Math.min(a, o - a);
				if (n === "random") {
					let e = Math.random() * (t + 1) | 0;
					c[t] = c[e], c[e] = t;
				} else c[t] = n === "edges" ? Math.min(r ? s : l, o ? l : s) : Math.hypot(i - d, a - f);
			}
			c.push(i ? Math.max(...c) : s);
		}
		let l = e * c[o], u = e * c[s];
		return r && u && (l = O(r)(l / u) * u), t + l;
	};
}
// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function wa(e) {
	return typeof e == "object" && !Array.isArray(e);
}
// node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function Ta(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && wa(t) ? Xi(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function Ea(e, t, n) {
	return e * (t + 1) + n * t;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function Da(e, t) {
	if (t.has(e)) return t.get(e);
	let [, n, r] = e.match(/^(.+?)([+-][\d.]+)$/) || [];
	return t.has(n) ? Math.max(0, t.get(n) + parseFloat(r)) : void 0;
}
function Oa(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : Da(t, r) ?? e;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function ka(e, n, r) {
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a.at > n && a.at < r && (t(e, a), i--);
	}
}
function Aa(e, t, n, r, i, a) {
	ka(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: V(i, a, r[o]),
		easing: /* @__PURE__ */ re(n, o)
	});
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function ja(e, t, n = 0) {
	let r = t + 1 + t * n;
	for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function Ma(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var Na = "easeInOut", Pa = 20;
function Fa(e, { defaultTransition: t = {}, ...n } = {}, r, i, a) {
	let o = t.duration || .3, s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, d = /* @__PURE__ */ new Map(), p = 0, m = 0, h = 0, g = (e, n) => {
		let a = n, s = (e) => typeof e == "number" ? n + e : Oa(m, e, p, d);
		for (let n = 0; n < e.length; n++) {
			let u = e[n];
			if (typeof u == "string") {
				d.set(u, m);
				continue;
			}
			if (!Array.isArray(u)) {
				let e = u.at === void 0 ? m : s(u.at);
				"sequence" in u ? (p = m = e, m = g(u.sequence, e), p = e, a = Math.max(a, m)) : d.set(u.name, e);
				continue;
			}
			let [_, v, b = {}] = u;
			b.at !== void 0 && (m = s(b.at));
			let x = 0, S = (e, n, r, a = 0, s = 0) => {
				let c = Ra(e), { delay: l = 0, times: u = U(c), type: d = t.type || "keyframes", repeat: p, repeatType: g, repeatDelay: _ = 0, ...v } = n, { ease: b = t.ease || "easeOut", duration: S } = n;
				r.mixer ||= n.mixer;
				let C = typeof l == "function" ? l(a, s) : l, w = c.length, T = fr(d) ? d : i?.[d || "keyframes"];
				if (w <= 2 && T) {
					let e = 100;
					if (w === 2 && Va(c)) {
						let t = c[1] - c[0];
						e = Math.abs(t);
					}
					let n = {
						...t,
						...v
					};
					S !== void 0 && (n.duration = /* @__PURE__ */ f(S));
					let r = xt(n, e, T);
					b = r.ease, S = r.duration;
				}
				S ??= o;
				let E = m + C;
				u.length === 1 && u[0] === 0 && (u[1] = 1);
				let ee = u.length - c.length;
				if (ee > 0 && Xt(u, ee), c.length === 1 && c.unshift(null), p && p < Pa) {
					let e = S > 0 ? _ / S : 0;
					S = Ea(S, p, _);
					let t = [...c], n = [...u];
					b = Array.isArray(b) ? [...b] : [b];
					let r = [...b], i = g === "reverse" || g === "mirror", a = t, o = r;
					i && (a = [...t].reverse(), g === "reverse" && (o = [...r].reverse().map((e) => typeof e == "function" ? /* @__PURE__ */ y(e) : e)));
					for (let s = 0; s < p; s++) {
						let l = i && s % 2 == 0, d = l ? a : t, f = l ? o : r, p = (s + 1) * (1 + e);
						e > 0 && (c.push(c[c.length - 1]), u.push(p), b.push("linear")), c.push(...d);
						for (let e = 0; e < d.length; e++) u.push(n[e] + p), b.push(e === 0 ? "linear" : /* @__PURE__ */ re(f, e - 1));
					}
					ja(u, p, e);
				}
				let te = E + S;
				Aa(r, c, b, u, E, te), x = Math.max(C + S, x), h = Math.max(te, h);
			};
			if (Ai(_)) {
				let e = Ia(_, c);
				S(v, b, La("default", e));
			} else {
				let e = Ta(_, v, r, l), t = e.length;
				for (let n = 0; n < t; n++) {
					v = v, b = b;
					let r = e[n], i = Ia(r, c);
					for (let e in v) S(v[e], za(b, e), La(e, i), n, t);
				}
			}
			p = m, m += x, a = Math.max(a, m);
		}
		return a;
	};
	g(e, 0), a && (a.duration = h, a.labels = d);
	let { type: _, ...v } = t;
	return c.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(Ma);
			let o = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				o.push(n), c.push(/* @__PURE__ */ u(0, h, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), o.unshift(o[0]), l.unshift(Na)), c[c.length - 1] !== 1 && (c.push(1), o.push(null)), s.has(r) || s.set(r, {
				keyframes: {},
				transition: {}
			});
			let d = s.get(r);
			d.keyframes[i] = o, d.transition[i] = {
				...v,
				duration: h,
				ease: l,
				times: c,
				mixer: a.mixer || t.mixer,
				...n
			};
		}
	}), s;
}
function Ia(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function La(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function Ra(e) {
	return Array.isArray(e) ? e : [e];
}
function za(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var Ba = (e) => typeof e == "number", Va = (e) => e.every(Ba);
// node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function Ha(e, t) {
	return Ai(e) || typeof e == "number" || typeof e == "string" && !wa(t);
}
function Ua(e, t, n, r) {
	let i = [];
	if (Ha(e, t)) i.push(xa(e, wa(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = Ta(e, t, r), o = a.length;
		for (let e = 0; e < o; e++) {
			let r = a[e], s = { ...n };
			"delay" in s && typeof s.delay == "function" && (s.delay = s.delay(e, o)), r instanceof Element ? i.push(...ya(r, t, s, Sa.get(r))) : i.push(...Wi(Hi(r) ?? ba, r, t, s));
		}
	}
	return i;
}
// node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function Wa(e, t, n, r) {
	let i = [], a = Fa(e.map((e) => {
		if (Array.isArray(e) && typeof e[0] == "function") {
			let t = e[0], n = hi(0);
			return n.on("change", t), e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [
				n,
				[0, 1],
				e[1]
			] : [
				n,
				e[1],
				e[2]
			];
		}
		return e;
	}), t, n, { spring: Kt }, r), o = t?.reduceMotion ?? t?.defaultTransition?.reduceMotion;
	return a.forEach(({ keyframes: e, transition: t }, n) => {
		i.push(...Ua(n, e, {
			...t,
			reduceMotion: o
		}));
	}), i;
}
// node_modules/framer-motion/dist/es/animation/timeline/index.mjs
var Ga = 0;
function $({ repeat: e = 0, repeatDelay: t = 0, repeatType: n = "loop", delay: r = 0 }, i, a, o) {
	let s = i + t, c = o === void 0;
	if (c) {
		let t = Math.max(0, a - r);
		o = s && t > 0 ? Math.min(e, Math.ceil(t / s - 1e-9) - 1) : 0, a = Math.min(t - o * s, i);
	}
	return n !== "loop" && o % 2 && (a = i - a), [o, c ? a : r + o * s + a];
}
function Ka(e, t) {
	let n = [...e], r = typeof n[0] == "function" ? Math.max(1, n.length - 1) : 2;
	return n[r] = {
		...n[r],
		at: t
	}, n;
}
var qa = (e, t) => t === void 0 ? e : {
	name: e,
	at: t
};
function Ja(e) {
	e.pause(), e.time = 0, e.stop();
}
var Ya = class e {
	constructor(e = [], t = {}, n) {
		this.options = t, this.entries = [], this.repeatIndex = 0, this.prevTime = 0, this.markers = [], this.labels = /* @__PURE__ */ new Map(), this.totalDuration = 0, this.isDirty = !1, this.isDone = !1, this.isRebuilding = !1, this.playbackSpeed = 1, this.motionScope = Q.current, this.isKilled = !1, this.isWrapped = !1, this.stop = () => {
			this.flush(), this.group?.stop();
		}, this.isPaused = t.autoplay === !1, this.newFinished(), e.forEach((e) => this.add(e)), n ? (this.isDirty = !1, this.isWrapped = !0, this.group = new ui(n), this.watch()) : (this.invalidate(), this.flush());
	}
	add(t, n) {
		return t instanceof e && t.adopt(this), this.push({
			item: t,
			at: n
		});
	}
	call(e, t) {
		return this.push({
			item: e,
			at: t,
			marker: {
				name: "_m" + Ga++,
				time: 0,
				callback: e
			}
		});
	}
	addPause(e, t) {
		return this.push({
			item: t || {},
			at: e,
			marker: {
				name: "_m" + Ga++,
				time: 0,
				callback: t,
				pause: !0
			}
		});
	}
	move(e, t) {
		return this.entries.forEach((n) => {
			n.item === e && (n.at = t);
		}), this.invalidate();
	}
	remove(t) {
		return t instanceof e && (t.parent = void 0), this.entries = this.entries.filter((e) => e.item !== t), this.invalidate();
	}
	clear() {
		return this.entries = [], this.invalidate();
	}
	getLabelTime(e) {
		return this.flush(), this.labels.get(e);
	}
	seek(e) {
		return this.time = this.resolve(e), this;
	}
	playTo(e) {
		let t = this.resolve(e), n = this.iterationDuration, r = this.time, [i] = $(this.options, n, r), a = $(this.options, n, t, i)[1], o = Math.abs(this.speed);
		return this.speed = a < r ? -o : o, this.stopAt = t, this.clock || this.invalidate(), this.play(), this;
	}
	reverse() {
		return this.speed = -this.speed, this.play(), this;
	}
	get progress() {
		return this.duration ? this.time / this.duration : 0;
	}
	set progress(e) {
		this.time = e * this.duration;
	}
	get time() {
		return this.active()?.time ?? 0;
	}
	set time(e) {
		this.flush(), this.prevTime = e, this.group && (this.group.time = e), this.repeatIndex = this.currentRepeat();
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		this.playbackSpeed = e, this.group && (this.group.speed = e);
	}
	get duration() {
		return this.flush(), this.isWrapped ? this.group.duration : this.totalDuration;
	}
	get iterationDuration() {
		return this.flush(), this.isWrapped ? this.group.iterationDuration : this.totalDuration;
	}
	get state() {
		return this.active()?.state ?? "idle";
	}
	get startTime() {
		return this.active()?.startTime ?? null;
	}
	play() {
		this.flush(), this.isPaused = !1, this.group?.play(), this.isDone && (this.newFinished(), this.watch());
	}
	pause() {
		this.flush(), this.isPaused = !0, this.group?.pause();
	}
	cancel() {
		this.flush(), this.group?.cancel();
	}
	complete() {
		this.flush(), this.group?.complete();
	}
	attachTimeline(e) {
		return this.flush(), this.scrollTimeline = e, this.detachScroll = this.group?.attachTimeline(e), () => {
			this.scrollTimeline = void 0, this.detachScroll?.();
		};
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	active() {
		return this.flush(), this.group?.animations.length ? this.group : void 0;
	}
	push(e) {
		return this.entries.push(e), this.invalidate();
	}
	invalidate() {
		return this.parent ? this.parent.invalidate() : this.isDirty || (this.isDirty = !0, queueMicrotask(() => this.flush())), this;
	}
	flush() {
		this.isDirty && !this.parent && !this.isKilled && this.build();
	}
	adopt(e) {
		this.group &&= (Ja(this.group), void 0), this.isDirty = !1, this.parent = e;
	}
	build() {
		let e = this.isWrapped ? this.group.iterationDuration : this.totalDuration;
		this.isDirty = !1, this.isWrapped = !1;
		let t = this.group, n = 0;
		t && (this.isRebuilding = !0, this.scrollTimeline ? (this.detachScroll?.(), t.cancel()) : (n = t.animations.length ? t.time : 0, Ja(t)), this.isRebuilding = !1);
		let { defaultTransition: r, onComplete: i, onUpdate: a, onRepeat: o, onReverseComplete: s, autoplay: c, scope: l, ...u } = this.options, d = {};
		l?.reduceMotion !== void 0 && (d.reduceMotion = l.reduceMotion), l?.skipAnimations !== void 0 && (d.skipAnimations = l.skipAnimations), Object.assign(d, u);
		let f = /* @__PURE__ */ new Map(), p = {}, m = Q.current;
		Q.current = this.motionScope;
		let h;
		try {
			h = Wa(this.toSequence(f), {
				defaultTransition: r,
				...d
			}, l, p);
		} finally {
			Q.current = m;
		}
		let g = p.labels, _ = d.duration ?? p.duration, v = p.duration ? _ / p.duration : 1;
		if (g.forEach((e, t) => g.set(t, e * v)), this.markers = [], f.forEach((e, t) => {
			e.time = g.get(t), g.delete(t), _ = Math.max(_, e.time), this.markers.push(e);
		}), this.markers.sort((e, t) => e.time - t.time), this.labels = g, this.totalDuration = _, this.clock = this.clockAnimation = void 0, this.markers.length || this.stopAt !== void 0 || a || o) {
			let e = this.clock = hi(0);
			e.on("change", (t) => e === this.clock && this.onClock(t)), h.unshift(this.clockAnimation = xa(e, [0, _], {
				...d,
				duration: _,
				ease: "linear"
			}));
		}
		let y = this.group = new ui(h), { delay: b = 0, repeat: x = 0, repeatDelay: S = 0 } = this.options, [C, w] = $(this.options, e, n);
		n > b && (n = $(this.options, _, Math.min(w, _), C)[1]), this.isDone && n < b + (x + 1) * (_ + S) - S && this.newFinished(), this.scrollTimeline ? this.detachScroll = y.attachTimeline(this.scrollTimeline) : (y.speed = this.playbackSpeed, this.isPaused && y.pause(), n && (y.time = n)), this.repeatIndex = this.currentRepeat(), this.prevTime = n || -1, this.watch();
	}
	toSequence(t) {
		return this.entries.map(({ item: n, at: r, marker: i }) => i ? (t.set(i.name, i), qa(i.name, r)) : n instanceof e ? {
			sequence: n.toSequence(t),
			at: r
		} : typeof n == "string" ? qa(n, r) : r === void 0 ? n : Array.isArray(n) ? Ka(n, r) : {
			...n,
			at: r
		});
	}
	resolve(e) {
		return this.flush(), typeof e == "number" ? e : Da(e, this.labels) ?? this.time;
	}
	currentRepeat() {
		return $(this.options, this.totalDuration, this.clockAnimation?.time ?? 0)[0];
	}
	onClock(e) {
		let t = this.prevTime;
		if (this.prevTime = e, this.isRebuilding) return;
		let { onUpdate: n, onRepeat: r, repeatType: i = "loop" } = this.options;
		n?.(e);
		let a = this.currentRepeat(), o = a > this.repeatIndex ? 1 : -1;
		for (; a !== this.repeatIndex;) {
			let e = this.speed > 0 == (i === "loop" || !(this.repeatIndex % 2)), n = e ? this.totalDuration : 0;
			if (this.cross(t, n)) return;
			this.repeatIndex += o, r?.(), t = i === "loop" ? e ? -1 : Infinity : n;
		}
		this.cross(t, e);
	}
	cross(e, t) {
		if (e === t) return;
		let n = t > e, r = (r) => n ? r > e && r <= t : r < e && r >= t, i = n ? this.markers : [...this.markers].reverse();
		for (let e of i) if (r(e.time) && (e.callback?.(n ? 1 : -1), e.pause)) return this.pauseAt(e.time);
		if (this.stopAt !== void 0 && r(this.stopAt)) return this.pauseAt(this.stopAt), this.stopAt = void 0, !0;
	}
	pauseAt(e) {
		return this.pause(), this.time = $(this.options, this.totalDuration, e, this.repeatIndex)[1], !0;
	}
	watch() {
		let e = this.group;
		e.finished.then(() => {
			if (e !== this.group || this.isDone) return;
			this.isDone = !0;
			let { onComplete: t, onReverseComplete: n } = this.options, r = this.speed < 0 && n || t, i = this.resolveFinished;
			r?.(), i();
		});
	}
	newFinished() {
		this.isDone = !1, this.finished = new Promise((e) => {
			this.resolveFinished = e;
		});
		let { scope: e } = this.options, n = this.motionScope?.add(() => {
			this.isKilled = !0, this.stop();
		});
		e?.animations.push(this), this.finished.then(() => {
			n?.(), e && t(e.animations, this);
		});
	}
};
// node_modules/framer-motion/dist/es/animation/animate/index.mjs
function Xa(e) {
	return Array.isArray(e) && e.some((e) => Array.isArray(e) || e?.sequence);
}
function Za(e = {}) {
	let { scope: t, reduceMotion: n, skipAnimations: r } = e;
	function i(e, i, a) {
		let o = Q.current?.transition, s = {};
		n !== void 0 && (s.reduceMotion = n), r !== void 0 && (s.skipAnimations = r);
		let c;
		if (Xa(e)) {
			let r = {
				...s,
				...i,
				scope: t
			};
			o && (r.defaultTransition = {
				...o,
				...r.defaultTransition
			}), r.reduceMotion = i?.reduceMotion ?? r.defaultTransition?.reduceMotion ?? n, c = new Ya(e, r);
		} else {
			let { onComplete: n, ...r } = a || {}, l = {
				...s,
				...o,
				...r
			}, { onUpdate: u } = r;
			c = new Ya([typeof e == "number" || typeof e == "string" && (typeof i == "string" || Array.isArray(i)) ? [
				u || (() => {}),
				Array.isArray(i) ? i : [e, i],
				{
					...l,
					onUpdate: void 0
				}
			] : [
				e,
				i,
				l
			]], {
				...s,
				onComplete: n,
				scope: t
			}, Ua(e, i, l, t));
		}
		return c;
	}
	return i;
}
var Qa = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Za(), {
	addEffect: Bi,
	removeEffect: Vi
}), $a = {
	some: 0,
	all: 1
};
function eo(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
	let a = Xi(e);
	t = Yi(t);
	let o = /* @__PURE__ */ new WeakMap(), s = new IntersectionObserver((e) => {
		e.forEach((e) => {
			let n = o.get(e.target);
			if (e.isIntersecting !== !!n) {
				if (e.isIntersecting) {
					let n = t(e.target, e);
					typeof n == "function" ? o.set(e.target, n) : s.unobserve(e.target);
				} else typeof n == "function" && (n(e), o.delete(e.target));
			}
		});
	}, {
		root: n,
		rootMargin: r,
		threshold: typeof i == "number" ? i : $a[i]
	});
	return a.forEach((e) => s.observe(e)), Ji(() => s.disconnect());
}
export { n as _, Ji as a, Ki as c, ht as d, H as f, c as g, u as h, Xi as i, ar as l, m, Qa as n, Yi as o, k as p, Ca as r, qi as s, eo as t, or as u };
