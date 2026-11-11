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
}, ce = (e) => Math.round(e * 1e5) / 1e5, le = /*@__PURE__*/ ((e) => (t) => typeof t == "string" && t.startsWith(e))("var(--"), ue = (e) => le(e) ? de.test(e.split("/*")[0].trim()) : !1, de = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function fe(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var pe = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, me = {
	...pe,
	transform: (e) => n(0, 1, e)
}, he = {
	...pe,
	default: 1
}, ge = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function _e(e) {
	return e == null;
}
// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var ve = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ye = (e, t) => (n) => !!(typeof n == "string" && ve.test(n) && n.startsWith(e) || t && !_e(n) && Object.prototype.hasOwnProperty.call(n, t)), be = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(ge);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, xe = (e) => n(0, 255, e), Se = {
	...pe,
	transform: (e) => Math.round(xe(e))
}, M = {
	test: /*@__PURE__*/ ye("rgb", "red"),
	parse: /*@__PURE__*/ be("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Se.transform(e) + ", " + Se.transform(t) + ", " + Se.transform(n) + ", " + ce(me.transform(r)) + ")"
}, Ce = (e, t, n) => {
	let r = e.substring(1 + t * n, 1 + (t + 1) * n);
	return n > 1 ? r : r + r;
};
function we(e) {
	let t = e.length > 5 ? 2 : 1, n = Ce(e, 3, t);
	return {
		red: parseInt(Ce(e, 0, t), 16),
		green: parseInt(Ce(e, 1, t), 16),
		blue: parseInt(Ce(e, 2, t), 16),
		alpha: n ? parseInt(n, 16) / 255 : 1
	};
}
var Te = {
	test: /*@__PURE__*/ ye("#"),
	parse: we,
	transform: M.transform
}, Ee = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), N = /*@__PURE__*/ Ee("deg"), P = /*@__PURE__*/ Ee("%"), F = /*@__PURE__*/ Ee("px"), De = /*@__PURE__*/ Ee("vh"), Oe = /*@__PURE__*/ Ee("vw"), ke = {
	...P,
	parse: (e) => P.parse(e) / 100,
	transform: (e) => P.transform(e * 100)
}, Ae = {
	test: /*@__PURE__*/ ye("hsl", "hue"),
	parse: /*@__PURE__*/ be("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + P.transform(ce(t)) + ", " + P.transform(ce(n)) + ", " + ce(me.transform(r)) + ")"
}, I = {
	test: (e) => M.test(e) || Te.test(e) || Ae.test(e),
	parse: (e) => M.test(e) ? M.parse(e) : Ae.test(e) ? Ae.parse(e) : Te.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? M.transform(e) : Ae.transform(e),
	getAnimatableNone: (e) => {
		let t = I.parse(e);
		return t.alpha = 0, I.transform(t);
	}
}, je = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Me = /*@__PURE__*/ new RegExp(ge.source), Ne = /*@__PURE__*/ new RegExp(je.source, "i");
function Pe(e) {
	return isNaN(e) && typeof e == "string" && (Me.test(e) || Ne.test(e));
}
var Fe = "number", Ie = "color", Le = "var", Re = "var(", ze = "${}", Be = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function Ve(e) {
	let t = e.toString();
	return Me.test(t) || Ne.test(t);
}
function He(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(Be, (e) => (I.test(e) ? (r.color.push(a), i.push(Ie), n.push(I.parse(e))) : e.startsWith(Re) ? (r.var.push(a), i.push(Le), n.push(e)) : (r.number.push(a), i.push(Fe), n.push(parseFloat(e))), ++a, ze)).split(ze),
		indexes: r,
		types: i
	};
}
function Ue(e) {
	return He(e).values;
}
function We({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			i += e === Fe ? ce(r[a]) : e === Ie ? I.transform(r[a]) : r[a];
		}
		return i;
	};
}
function Ge(e) {
	return We(He(e));
}
var Ke = (e) => typeof e == "number" ? 0 : I.test(e) ? I.getAnimatableNone(e) : e, qe = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : Ke(e);
function Je(e) {
	let t = He(e);
	return We(t)(t.values.map((e, n) => qe(e, t.split[n])));
}
var L = {
	test: Pe,
	parse: Ue,
	createTransformer: Ge,
	getAnimatableNone: Je
};
// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Ye(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Xe({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Ye(s, r, e + 1 / 3), a = Ye(s, r, e), o = Ye(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function Ze(e, t) {
	return (n) => n > 0 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var R = (e, t, n) => e + (t - e) * n, Qe = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, $e = [
	Te,
	M,
	Ae
], et = (e) => $e.find((t) => t.test(e));
function tt(e) {
	let t = et(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === Ae && (n = Xe(n)), n;
}
var nt = (e, t) => {
	let n = tt(e), r = tt(t);
	if (!n || !r) return Ze(e, t);
	let i = { ...n };
	return (e) => (i.red = Qe(n.red, r.red, e), i.green = Qe(n.green, r.green, e), i.blue = Qe(n.blue, r.blue, e), i.alpha = R(n.alpha, r.alpha, e), M.transform(i));
}, rt = /* @__PURE__ */ new Set(["none", "hidden"]);
function it(e, t) {
	return rt.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function at(e, t) {
	return (n) => R(e, t, n);
}
function ot(e) {
	return typeof e == "number" ? at : typeof e == "string" ? ue(e) ? Ze : I.test(e) ? nt : ut : Array.isArray(e) ? st : typeof e == "object" ? I.test(e) ? nt : ct : Ze;
}
function st(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => ot(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function ct(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = ot(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function lt(e, t) {
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
var ut = (e, t) => {
	let n = He(e), r = He(t);
	return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? rt.has(e) && !r.values.length || rt.has(t) && !n.values.length ? it(e, t) : l(st(lt(n, r), r.values), We(r)) : Ze(e, t);
}, dt = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function ft(e, t) {
	let n = dt.exec(e);
	if (!n) return;
	let r = dt.exec(t);
	if (!r || n[2] !== r[2]) return;
	let i = n[2], a = parseFloat(n[1]), o = parseFloat(r[1]);
	return (e) => ce(R(a, o, e)) + i;
}
function pt(e, t, n) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number") return R(e, t, n);
	if (typeof e == "string" && typeof t == "string") {
		let n = ft(e, t);
		if (n) return n;
	}
	return ot(e)(e, t);
}
// node_modules/motion-dom/dist/es/frameloop/order.mjs
var mt = [
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
function ht(e) {
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
var gt = 40;
function _t(e, t, n = {
	delta: 0,
	timestamp: 0,
	isProcessing: !1
}) {
	let i = !1, a = !0, o = () => i = !0, s = mt.reduce((e, t) => (e[t] = ht(o), e), {}), { setup: c, read: l, resolveKeyframes: u, preUpdate: d, update: f, preRender: p, render: m, postRender: h } = s, g = () => {
		let o = r.useManualTiming, s = o ? n.timestamp : performance.now();
		i = !1, o || (n.delta = a ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, gt), 1)), n.timestamp = s, n.isProcessing = !0, c.process(n), l.process(n), u.process(n), d.process(n), f.process(n), p.process(n), m.process(n), h.process(n), n.isProcessing = !1, i && t && (a = !1, e(g));
	}, _ = () => {
		i = !0, a = !0, n.isProcessing || e(g);
	};
	return {
		schedule: mt.reduce((e, t) => {
			let n = s[t];
			return e[t] = (e, t = !1, r = !1) => (i || _(), n.schedule(e, t, r)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < mt.length; t++) s[mt[t]].cancel(e);
		},
		state: n,
		steps: s
	};
}
// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: z, cancel: vt, steps: yt } = /* @__PURE__ */ _t(typeof requestAnimationFrame < "u" ? requestAnimationFrame : c, !0, k), bt = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => z.update(t, e),
		stop: () => vt(t),
		now: () => k.isProcessing ? k.timestamp : j.now()
	};
}, xt = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, St = 2e4;
function Ct(e, t = 50, n = St, r) {
	let i = 0, a = e.next(i);
	for (r?.push(a.value); !a.done && i < n;) i += t, a = e.next(i), r?.push(a.value);
	return i >= n ? Infinity : i;
}
// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function wt(e, t = 100, n) {
	let { keyframes: r, velocity: i } = e, a = r && r[r.length - 1] - r[0], o = n({
		...e,
		velocity: i && a ? i * t / a : i,
		keyframes: [0, t]
	}), s = Math.min(Ct(o), St);
	return {
		type: "keyframes",
		ease: (e) => o.next(s * e).value / t,
		duration: /* @__PURE__ */ p(s)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var Tt = 100, Et = 10, Dt = 1, Ot = 800, kt = .3, At = .3, jt = .01, Mt = 2, Nt = .005, Pt = .5, Ft = .01, It = 10, Lt = .05, Rt = (e) => e < 0 ? 1 / Math.max(1 + e, Lt) : Math.max(1 - e, Lt);
function zt(e, t) {
	if (!(e > 1)) return 1;
	let n = Math.sqrt(e * e - 1), r = e - n, i = e + n, a = 2 * n * Math.exp(-t) * (1 + t);
	return Ht((e) => i * Math.exp(-r * e) - r * Math.exp(-i * e) - a, (e) => Math.exp(-i * e) - Math.exp(-r * e), t) / t;
}
function Bt(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Vt = 12;
function Ht(e, t, n) {
	let r = n;
	for (let n = 1; n < Vt; n++) r -= e(r) / t(r);
	return r;
}
var Ut = .001;
function Wt({ duration: e = Ot, bounce: t = kt }) {
	let r, i, a = Rt(t);
	e = n(Ft, It, /* @__PURE__ */ p(e)), a < 1 ? (r = (t) => {
		let n = t * a, r = n * e, i = Bt(t, a), o = Math.exp(-r);
		return Ut - n / i * o;
	}, i = (t) => {
		let n = t * a * e, i = a * a * t * t * e, o = Math.exp(-n), s = Bt(t * t, a);
		return (-r(t) + Ut > 0 ? -1 : 1) * -i * o / s;
	}) : (r = (t) => -.001 + Math.exp(-t * e) * (t * e + 1), i = (t) => Math.exp(-t * e) * (-t * (e * e)));
	let o = 5 / e, s = Ht(r, i, o), c = s * zt(a, s * e), l = c * c;
	return {
		stiffness: l,
		damping: a * 2 * Math.sqrt(l),
		duration: /* @__PURE__ */ f(e)
	};
}
var Gt = (e, t) => (t ? e >= 0 : e > 0) && e < Infinity;
function Kt(e, t) {
	if (Gt(e, t)) return e;
}
function qt(e) {
	let t = Kt(e.stiffness), n = Kt(e.damping, !0), r = Kt(e.mass), i = {
		...e,
		stiffness: t ?? Tt,
		damping: n ?? Et,
		mass: r ?? Dt,
		isResolvedFromDuration: !1,
		isTimeDefined: (t ?? n ?? r) === void 0 && (e.duration !== void 0 || e.bounce !== void 0)
	};
	if (i.isTimeDefined) {
		if (e.visualDuration) {
			let t = Rt(e.bounce || 0), n = 2 * Math.PI / (e.visualDuration * 1.2) * zt(t, 2 * Math.PI / 1.2);
			i.stiffness = n * n, i.damping = 2 * t * Math.sqrt(i.stiffness);
		} else Object.assign(i, Wt(i)), i.isResolvedFromDuration = !0;
		Gt(i.stiffness) && Gt(i.damping, !0) || (i.stiffness = Tt, i.damping = Et);
	}
	return i;
}
function Jt(e = At, t = kt) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, r = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = {
		done: !1,
		value: r
	}, { stiffness: o, damping: s, mass: c, duration: l, isResolvedFromDuration: u, isTimeDefined: d } = qt({ ...n }), m = (e) => u ? 0 : -/* @__PURE__ */ p(e), h = s / (2 * Math.sqrt(o * c)), g = /* @__PURE__ */ p(Math.sqrt(o / c)), _ = h * g, v = {
		target: i,
		delta: i - r,
		velocity: m(n.velocity) || 0,
		restSpeed: 0,
		restDelta: 0
	}, y = () => {
		let e = Math.abs(v.delta) < 5;
		v.restSpeed = n.restSpeed || (e ? jt : Mt), v.restDelta = n.restDelta || (e ? Nt : Pt);
	};
	y();
	let b, x, S;
	if (h < 1) {
		let e = Bt(g, h), t = {
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
			let e = Math.min(Ct(w), St), t = xt((t) => w.next(e * t).value, e, 30);
			return e + "ms " + t;
		}
	};
	return w;
}
var Yt = /* @__PURE__ */ Object.assign(Jt, { applyToOptions: (e) => {
	let t = wt(e, 100, Jt);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ f(t.duration), e.type = "keyframes", e;
} });
// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Xt({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => e < s || e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o ? o(g) : g;
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => {
		let t = v(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : e ? _ + t : d;
	}, b, x, S = (e) => {
		p(f.value) && (b = e, x = Yt({
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
function Zt(e, t, n) {
	let i = [], a = r.mix || pt, o = e.length - 1;
	for (let r = 0; r < o; r++) {
		let o = n?.(e[r], e[r + 1]) || a(e[r], e[r + 1]);
		t && (o = l(Array.isArray(t) ? t[r] || c : t, o)), i.push(o);
	}
	return i;
}
function Qt(e, t, { clamp: r = !0, ease: i, mixer: a } = {}) {
	let o = e.length;
	if (o === 1) return () => t[0];
	if (o === 2 && t[0] === t[1]) return () => t[1];
	let s = e[0] === e[1];
	e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let c = Zt(t, i, a), l = c.length, d = (n) => {
		if (s && n < e[0]) return t[0];
		let r = 0;
		if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ u(e[r], e[r + 1], n);
		return c[r](i);
	};
	return r ? (t) => d(n(e[0], e[o - 1], t)) : d;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function $t(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ u(0, t, r);
		e.push(R(n, 1, i));
	}
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function B(e) {
	let t = [0];
	return $t(t, e.length - 1), t;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function en(e, t) {
	return e.map((e) => e * t);
}
// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function tn(e, t) {
	return e.map(() => t || ne).splice(0, e.length - 1);
}
function V({ duration: e = 300, keyframes: t, times: n, ease: i = "easeInOut", mixer: a }) {
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
		let i = n && n.length === t.length ? n : B(t), a = i[l] * e, o = i[l + 1] * e, u = t[l], d = t[l + 1], f = Array.isArray(s) ? s[l] : s, p = (r.mix || pt)(u, d), m = t.length - 2;
		return {
			calculatedDuration: e,
			next: (t) => (c.value = l && t < a ? p(0) : l < m && (t >= o || !e) ? typeof d == "number" ? d : p(1) : p(f(t >= o || !e ? 1 : t <= a ? 0 : (t - a) / (o - a))), c.done = t >= e, c)
		};
	}
	let u = Qt(en(n && n.length === t.length ? n : B(t), e), t, {
		ease: Array.isArray(s) ? s : tn(t, s),
		mixer: o
	});
	return {
		calculatedDuration: e,
		next: (t) => (c.value = u(t), c.done = t >= e, c)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var nn = 5;
function rn(e, t, n) {
	let r = Math.max(t - nn, 0);
	return /* @__PURE__ */ m(n - e(r), t - r);
}
function an(e, t, n = 0) {
	return t <= 0 ? n : e.velocity ? e.velocity(t) : rn((t) => e.next(t).value, t, e.next(t).value);
}
// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function on(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a, o, s = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		n !== null && (s++ || (a = n), o = n);
	}
	let c = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : s - 1;
	return !c || r === void 0 ? c ? o : a : r;
}
// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var sn = {
	decay: Xt,
	inertia: Xt,
	tween: V,
	keyframes: V,
	spring: Yt
};
function cn(e) {
	typeof e.type == "string" && (e.type = sn[e.type]);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-start-time.mjs
var ln = 40, un = (e, t) => t - e > ln && !r.useManualTiming ? t : e;
// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function dn(e, t) {
	return {
		kind: e,
		animation: t,
		timestamp: j.now(),
		frameTimestamp: k.timestamp,
		frameIsProcessing: k.isProcessing
	};
}
function fn(e, t, n) {
	let r = globalThis.__MOTION_INSPECT__;
	if (r) try {
		r({
			...dn("animation-start", e),
			options: n ? {
				...t,
				...n
			} : t
		});
	} catch {}
}
// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var pn = class {
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
}, mn = (e) => e / 100, hn = (e) => Math.round(e * 1e4) / 1e4, H = class extends pn {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options, t = j.now();
			e && e.updatedAt !== t && this.tick(e.updatedAt = t), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause(), fn(this, this.options);
	}
	initAnimation() {
		let { options: e } = this;
		cn(e);
		let { type: t = V, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || V;
		this.mixKeyframes = void 0, s !== V && typeof o[0] != "number" && (this.mixKeyframes = l(mn, e.mixer?.(o[0], o[1]) || pt(o[0], o[1])), o = [0, 100]);
		let c = s(o === e.keyframes ? e : {
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Ct(c));
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
		this.startTime === this.pendingStartTime && (this.startTime = un(this.startTime, e)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let u = this.currentTime - a * (this.playbackSpeed >= 0 ? 1 : -1), d = this.playbackSpeed >= 0 ? u < 0 : u > r;
		this.currentTime = Math.max(u, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let f = this.generate(this.currentTime, d), { done: p } = f;
		d || (p = this.playbackSpeed >= 0 ? i < Infinity ? this.currentTime >= r : p : this.currentTime <= 0);
		let m = this.holdTime === null && (this.state === "finished" || this.state === "running" && p);
		return m && s !== Xt && (f.value = on(o, this.options, l, this.speed)), c && c(f.value), m && this.finish(), f;
	}
	at(e) {
		return this.holdTime ?? hn((e - this.startTime) * this.playbackSpeed);
	}
	sampleAt(e, t) {
		let { options: n, totalDuration: r } = this, i = this.at(e) - (n.delay || 0);
		return i >= r && n.type !== Xt ? on(n.keyframes, n, t ? void 0 : n.finalKeyframe) : this.generate(Math.max(i, 0), i < 0).value;
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
		return an(this.generator, this.currentTime, this.options.velocity);
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
		let { driver: e = bt, startTime: t } = this.options;
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
}, gn = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function _n(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(ge) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!gn.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var vn = /\b([a-z-]*)\(.*?\)/gu, yn = {
	...L,
	getAnimatableNone: (e) => {
		let t = e.match(vn);
		return t ? t.map(_n).join(" ") : e;
	}
}, bn = {
	...L,
	getAnimatableNone: (e) => {
		let t = L.parse(e);
		return L.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, xn = {
	...pe,
	transform: Math.round
}, Sn = {
	rotate: N,
	pathRotation: N,
	rotateX: N,
	rotateY: N,
	rotateZ: N,
	scale: he,
	scaleX: he,
	scaleY: he,
	scaleZ: he,
	skew: N,
	skewX: N,
	skewY: N,
	distance: F,
	translateX: F,
	translateY: F,
	translateZ: F,
	x: F,
	y: F,
	z: F,
	perspective: F,
	transformPerspective: F,
	opacity: me,
	originX: ke,
	originY: ke,
	originZ: F
}, U = {
	borderWidth: F,
	borderTopWidth: F,
	borderRightWidth: F,
	borderBottomWidth: F,
	borderLeftWidth: F,
	borderRadius: F,
	borderTopLeftRadius: F,
	borderTopRightRadius: F,
	borderBottomRightRadius: F,
	borderBottomLeftRadius: F,
	width: F,
	maxWidth: F,
	height: F,
	maxHeight: F,
	top: F,
	right: F,
	bottom: F,
	left: F,
	inset: F,
	insetBlock: F,
	insetBlockStart: F,
	insetBlockEnd: F,
	insetInline: F,
	insetInlineStart: F,
	insetInlineEnd: F,
	padding: F,
	paddingTop: F,
	paddingRight: F,
	paddingBottom: F,
	paddingLeft: F,
	paddingBlock: F,
	paddingBlockStart: F,
	paddingBlockEnd: F,
	paddingInline: F,
	paddingInlineStart: F,
	paddingInlineEnd: F,
	margin: F,
	marginTop: F,
	marginRight: F,
	marginBottom: F,
	marginLeft: F,
	marginBlock: F,
	marginBlockStart: F,
	marginBlockEnd: F,
	marginInline: F,
	marginInlineStart: F,
	marginInlineEnd: F,
	fontSize: F,
	backgroundPositionX: F,
	backgroundPositionY: F,
	...Sn,
	zIndex: xn,
	fillOpacity: me,
	strokeOpacity: me,
	numOctaves: xn
}, Cn = {
	...U,
	color: I,
	backgroundColor: I,
	outlineColor: I,
	fill: I,
	stroke: I,
	borderColor: I,
	borderTopColor: I,
	borderRightColor: I,
	borderBottomColor: I,
	borderLeftColor: I,
	filter: yn,
	WebkitFilter: yn,
	mask: bn,
	WebkitMask: bn
}, wn = (e) => Cn[e], Tn = /*@__PURE__*/ new Set([yn, bn]), En, Dn, On;
function kn(e, t) {
	if (e === En && t === Dn) return On;
	let n = wn(e);
	return Tn.has(n) || (n = L), On = n.getAnimatableNone ? n.getAnimatableNone(t) : void 0, En = e, Dn = t, On;
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function An(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var W = (e) => e * 180 / Math.PI, jn = (e) => Nn(W(Math.atan2(e[1], e[0]))), Mn = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scaleZ: () => 1,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: jn,
	rotateZ: jn,
	skewX: (e) => W(Math.atan(e[1])),
	skewY: (e) => W(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Nn = (e) => (e %= 360, e < 0 && (e += 360), e), Pn = jn, Fn = (e) => Math.hypot(e[0], e[1]), In = (e) => Math.hypot(e[4], e[5]), Ln = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Fn,
	scaleY: In,
	scaleZ: (e) => Math.hypot(e[8], e[9], e[10]),
	scale: (e) => (Fn(e) + In(e)) / 2,
	rotateX: (e) => Nn(W(Math.atan2(e[6], e[5]))),
	rotateY: (e) => Nn(W(Math.atan2(-e[2], e[0]))),
	rotateZ: Pn,
	rotate: Pn,
	skewX: (e) => W(Math.atan(e[4])),
	skewY: (e) => W(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Rn(e) {
	return +!!e.includes("scale");
}
function zn(e, t) {
	if (!e || e === "none") return Rn(t);
	let n = e.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
	if (!n) return Rn(t);
	let r = (n[1] ? Ln : Mn)[t], i = n[2].split(",").map((e) => parseFloat(e));
	return typeof r == "function" ? r(i) : i[r];
}
var Bn = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return zn(n, t);
}, G = [
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
], K = /* @__PURE__ */ new Set([...G, "pathRotation"]), Vn = (e) => e === pe || e === F, Hn = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), Un = /* @__PURE__ */ G.filter((e) => !Hn.has(e));
function Wn(e) {
	let t = [];
	return Un.forEach((n) => {
		let r = e.getValue(n);
		if (r !== void 0) {
			let e = r.get(), i = +!!n.startsWith("scale");
			if (e === i) return;
			t.push([n, e]), r.set(i);
		}
	}), t;
}
var Gn = /* @__PURE__ */ new Set(["bottom", "right"]);
function Kn(e, t, n, r, i, a) {
	let o = parseFloat(e);
	if (!isNaN(o)) return o;
	let { min: s, max: c } = t()[n], l = c - s;
	return a === "border-box" ? l : l - parseFloat(r) - parseFloat(i);
}
var qn = ({ transform: e }) => zn(e, "x"), Jn = ({ transform: e }) => zn(e, "y"), Yn = {
	width: ({ width: e, paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }, i) => Kn(e, i, "x", t, n, r),
	height: ({ height: e, paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }, i) => Kn(e, i, "y", t, n, r),
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
	x: qn,
	y: Jn,
	translateX: qn,
	translateY: Jn
}, q = /* @__PURE__ */ new Set(), Xn = !1, Zn = !1, Qn = !1;
function $n() {
	if (Zn) {
		let e = [], t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		q.forEach((r) => {
			r.needsMeasurement && (e.push(r), t.add(r.element), Gn.has(r.name) && n.add(r.element));
		});
		let r = /* @__PURE__ */ new Map();
		n.forEach((e) => {
			let t = Wn(e);
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
	Zn = !1, Xn = !1, q.forEach((e) => e.complete(Qn)), q.clear();
}
function er() {
	q.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Zn = !0);
	});
}
function tr() {
	Qn = !0, er(), $n(), Qn = !1;
}
function nr(e, t, n) {
	if (typeof e == "string") {
		if (i(e) || o(e)) return parseFloat(e);
		if (!L.test(e) && L.test(n)) return kn(t, n);
	}
	return e ?? void 0;
}
var rr = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (q.add(this), Xn || (Xn = !0, z.read(er), z.resolveKeyframes($n))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = nr(n.readValue(t, a), t, a);
				r !== void 0 && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		An(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), q.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (q.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, ir = (e) => e.startsWith("--");
// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function ar(e, t, n) {
	ir(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var or = {};
// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function sr(e, t) {
	let n = /* @__PURE__ */ s(e);
	return () => or[t] ?? n();
}
// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var cr = /* @__PURE__ */ sr(() => window.ScrollTimeline !== void 0, "scrollTimeline"), lr = /* @__PURE__ */ sr(() => window.ViewTimeline !== void 0, "viewTimeline"), ur = /*@__PURE__*/ sr(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), J = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, dr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ J([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ J([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ J([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ J([
		.33,
		1.53,
		.69,
		.99
	])
};
// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function fr(e, t) {
	if (e) return typeof e == "function" ? ur() ? xt(e, t) : "ease-out" : /* @__PURE__ */ ie(e) ? J(e) : Array.isArray(e) ? e.map((e) => fr(e, t) || dr.easeOut) : dr[e];
}
// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function pr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = fr(s, i);
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
function mr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function hr({ type: e, ...t }) {
	return mr(e) && ur() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var gr = class extends pn {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e;
		let c = hr(e);
		this.animation = pr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = this.onFinish = () => {
			if (this.animation.onfinish = null, this.finishedTime = this.time, !i) {
				let e = on(r, this.options, o, this.speed);
				this.updateMotionValue?.(e), ar(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		}, fn(this, e, c);
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
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = this.onFinish = null, e && cr() ? (this.animation.timeline = e, t?.(this.animation), c) : n(this);
	}
}, _r = {
	anticipate: C,
	backInOut: S,
	circInOut: E
};
function vr(e) {
	return e in _r;
}
function yr(e) {
	typeof e.ease == "string" && vr(e.ease) && (e.ease = _r[e.ease]);
}
var br = class extends gr {
	constructor(e) {
		yr(e), cn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	elapsed() {
		return this.state === "running" ? (j.now() - this.startTime) * this.speed : this.time * 1e3;
	}
	sample(e) {
		if (!this.sampler) {
			let { motionValue: e, onUpdate: t, onComplete: n, onPlay: r, onStop: i, element: a, ...o } = this.options;
			this.sampler = new H({
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
		r && i && ar(r, i, c), t.setWithVelocity(this.sample(o - s * Math.sign(a)), c, s / Math.abs(a || 1));
	}
}, xr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (L.test(e) || e === "0") && !e.startsWith("url("));
// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Sr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Cr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = xr(i, t), s = xr(a, t);
	return !o || !s ? !1 : Sr(e) || (n === "spring" || mr(n)) && r;
}
// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function wr(e) {
	e.duration = 0, e.type = "keyframes";
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var Tr = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Er = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Dr(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && Er.test(e[t])) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/needs-mixer.mjs
var Or = ({ mixer: e, keyframes: t }) => e && typeof t[0] != "number" && t.some((n, r) => r && e(t[r - 1], n)), kr = /* @__PURE__ */ new Set([
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
]), Ar = () => !r.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function jr(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!n || !(Tr.has(n) || kr.has(n))) return !1;
	let c = t?.owner?.current;
	if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
	let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
	return Ar() && (Tr.has(n) || kr.has(n) && Dr(s)) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && a !== 0 && o !== "inertia" && !Or(e);
}
// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Mr = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Nr = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
G.length;
var Pr = {}, Fr = (e, t, n = Mr(t, Sn[e])) => (Pr[e] || (Pr[e] = (Nr[e] || e) + "(")) + n + ")", Ir = (e, t) => (typeof t == "number" ? t : parseFloat(t)) === +!!e.startsWith("scale"), Lr = /* @__PURE__ */ new WeakMap(), Rr = 200, zr = .001, Br = .1, Vr = .001, Hr = 100, Ur = 100, Wr = /* @__PURE__ */ new Set([
	"linear",
	"easeIn",
	"easeOut",
	"easeInOut"
]), Gr = (e) => Wr.has(e), Kr = /* @__PURE__ */ new WeakMap(), qr = (e, t) => {
	let n = Kr.get(e);
	return n?.[0] !== t && (n = [t, "linear(" + B(Array(t + 1)).map((t) => hn(e(t)) + " " + hn(t * 100) + "%") + ")"], Kr.set(e, n)), n[1];
}, Jr = (e, t) => Math.min(Rr, Math.max(2, Math.ceil((t - e) / 10))), Yr = (e, t) => Math.abs(e - t) <= zr, Xr = (e, t) => e - t, Zr = (e, t, n) => B(Array(n + 1)).map((n) => R(e, t, n)), Qr = (e) => e.motionValue.owner, $r = (e) => Lr.get(e), ei = ({ state: e }) => e === "idle" || e === "finished", ti = (e, t) => e.latestValues ? e.latestValues[t] : e.getValue(t)?.get(), ni = ({ name: e, motionValue: t }) => e && G.includes(e) && t?.owner?.current instanceof HTMLElement && Ar() && ur();
function ri(e) {
	let t = Qr(e), { onUpdate: n, transformTemplate: r } = t.getProps();
	return !e.isHandoff && !n && !e.hasOnUpdate && !r && e.type !== "inertia" && (ti(t, "transform") || "none") === "none" && !ti(t, "pathRotation") && !t.projection?.isProjecting() && !Or(e);
}
var ii = class {
	constructor(e, t, n, r) {
		this.element = e, this.update = t, this.makeDriver = n, this.animation = r;
	}
	get js() {
		return this.driver ||= this.makeDriver(this.update);
	}
	now() {
		return this.driver || this.makeDriver !== bt ? this.js.now() : k.isProcessing ? k.timestamp : j.now();
	}
	start(e = !0) {
		let t = $r(this.element);
		!t || t.isJS ? this.js.start(e) : t.schedule(!1, !e);
	}
	stopJS() {
		this.driver?.stop();
	}
	stop() {
		this.stopJS();
		let e = $r(this.element);
		e && !e.isFinishing && e.release(this.animation);
	}
}, ai, oi = class extends H {
	constructor(e) {
		let t = Qr(e).current, { driver: n = bt } = e, r, i = ri(e);
		e.driver = (e) => new ii(t, e, n, r), super(e), r = this;
		let a = this.driver;
		a && (a.animation = this), this.canAccelerate = i;
		let { stop: o } = this;
		this.stop = () => {
			this.isAccelerated() && this.sync(), o();
		};
	}
	offsets() {
		let { keyframes: e, times: t } = this.options;
		return t || (this.offsetsOf !== e && (this.offsetsOf = e, this.cachedOffsets = B(e)), this.cachedOffsets);
	}
	get group() {
		return $r(Qr(this.options).current);
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
		if (n || t !== V || this.holdTime !== null) return;
		for (let t = 1; t < e.length; t++) if (e[t] !== e[t - 1]) {
			if (i >= 0) return;
			i = t - 1;
		}
		let { ease: a } = this.options;
		/* @__PURE__ */ D(a) && (a = a[i]);
		let o = this.offsets(), s = (e) => this.startTime + (r + o[e] * this.totalDuration) / this.speed;
		if (i >= 0) {
			let e = /* @__PURE__ */ ie(a) ? J(a) : Gr(a) ? dr[a] : O(a);
			return [
				s(i),
				s(i + 1),
				typeof e == "string" || Yr(e(0), 0) && Yr(e(1), 1) ? e : void 0
			];
		}
	}
	boundaries(e, t) {
		let { startTime: n, speed: r, resolvedDuration: i, options: a } = this, { delay: o = 0, repeat: s = 0, repeatDelay: c = 0, repeatType: l, type: u } = a, d = (u || V) === V ? this.offsets() : [0, 1], f = n + o / r, p = [];
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
		this.isStopped || ((this.group || li(Qr(this.options))).tracks.add(this), super.play());
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
		(ai ??= Object.getOwnPropertyDescriptor(H.prototype, "time").set).call(this, e);
	}
	attachTimeline(e) {
		return this.canAccelerate = !1, this.group?.demote(!0), super.attachTimeline(e);
	}
}, si, ci = (e) => {
	si || queueMicrotask(() => {
		let e = si;
		si = void 0, e.forEach((e) => e());
	}), (si ||= []).push(e);
};
function li(e) {
	let t = e.current, n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = {}, a = [], o = /* @__PURE__ */ new Map(), s = [], c = !1, l = !1, d = !1, f = !1, p = -Infinity, m, h = Infinity, g, _ = (e) => {
		for (let t of n) if (t.name === e) return !0;
	}, v = (t, n) => {
		let o = {};
		for (let s of t === void 0 ? G : a) {
			let a = r.get(s), c = t === void 0 ? ti(e, s) : a ? a.sampleAt(n > t && !a.timing()[1] ? n : t) : i[s];
			c !== void 0 && (o[s] = c);
		}
		return o;
	}, y = (e, t) => {
		let n = "";
		for (let r in e) {
			let i = e[r];
			t && Ir(r, i) || (n += Fr(r, i) + " ");
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
		let i = Jr(t, n);
		if (r.length * 4 > i) return;
		let a;
		for (let r of e) {
			let e = r.numberAt(t), i = (r.numberAt((t + n) / 2) - e) / (r.numberAt(n) - e);
			if (i === i) {
				if (a === void 0) a = i;
				else if (!Yr(i, a)) return;
			}
		}
		let o = Zr(t, n, i).concat(r).sort(Xr), s = (e) => /* @__PURE__ */ u(t, n, e), c, l;
		for (let n of e) {
			let e = n.numberAt(t), r = o.map((t) => n.numberAt(t) - e), i = r[r.length - 1], a = r.some((e) => Math.abs(e) * zr > Math.abs(i)) ? 0 : i, s = r.map((e) => a ? e / a : e);
			if (a && !c) c = s, l = (t) => (n.numberAt(t) - e) / a;
			else if (s.some((e, t) => !Yr(e, a && c[t]))) return;
		}
		if (!c || c.every((e, t) => Yr(e, s(o[t])))) return "linear";
		let d = [], f = (e, t = l(e)) => d.push(hn(t) + " " + hn(s(e) * 100) + "%");
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
		let c = (e, t) => a.every((n) => !(Math.abs(n.numberAt((e + t) / 2) - (n.numberAt(e) + n.numberAt(t)) / 2) > (n.name.startsWith("scale") ? Vr : Br))), l = (t, n, r) => {
			if (n - t < 1 || c(t, n)) i.push(n);
			else if (r < 4) l(t, (t + n) / 2, r + 1), l((t + n) / 2, n, r + 1);
			else {
				for (let r of e) i.push(...E((e) => r.numberAt(e), t, n));
				i.push(n);
			}
		}, u = s > o ? Zr(o, s, Math.ceil((s - o) / 100)) : [];
		u.push(n);
		for (let e of r) u.push(e, Math.min(e + .01, n));
		let d = t;
		for (let e of u.sort(Xr)) e > d && l(d, e, 0), d = e;
		return i.sort(Xr);
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
		i = {}, a = G.filter((t) => {
			if (r.has(t)) return !0;
			let n = i[t] = ti(e, t);
			return n !== void 0 && !Ir(t, n);
		}), C(!1);
		let m = !l && ne(d);
		try {
			if (c > t) {
				let e;
				if (m && m[1] > t) {
					let [n, r, i] = m;
					if (n - t > Ur) return d.forEach((e) => e.sync()), re(g = n - t - Ur), !0;
					e = typeof i == "string" ? i : i ? qr(i, Jr(n, r)) : ee(d, n, r, []), e && T(D(d, n, r, e, {
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
	}, oe = () => !n.size && (d = !0, $r(t) === A && Lr.delete(t), A.isJS || C(), !0), O = () => {
		let t = j.now();
		if (A.isJS || (A.isFinishing = !0, n.forEach((n) => {
			let [r, a] = n.timing();
			n.state === "running" && n.speed > 0 && !a && r <= t + 1 && (n.complete(), i[n.name] = ti(e, n.name), o.has(n) || (c = !0));
		}), A.isFinishing = !1), l = !1, d || (n.forEach((e) => ei(e) && n.delete(e)), oe())) return;
		for (let e of n) if (!e.canAccelerate) return A.demote(!0);
		A.isJS && (A.isJS = !1, c = !0, n.forEach((e) => e.stopJS()));
		let r = c, a = f;
		if (c = f = !1, r || !ae(t, a)) {
			if (a) {
				if (t - p < Hr) return A.demote();
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
			d || (c ||= e, f ||= !!t, l || (l = !0, k.isProcessing ? z.render(O, !1, !0) : ci(O)));
		},
		release(e) {
			ei(e) && n.delete(e), oe() || A.schedule(!0);
		},
		check() {
			if (!A.isJS) {
				for (let t in i) if (ti(e, t) !== i[t] && !_(t)) return A.schedule(!0, !0);
			}
		},
		demote(e) {
			if (!(A.isJS || d)) return n.forEach((t) => {
				t.isAccelerated() && t.sync(), e || (t.canAccelerate = !1);
			}), A.isJS = !0, o = /* @__PURE__ */ new Map(), C(), n.forEach((e) => e.state === "running" && e.js?.start()), !0;
		}
	};
	return Lr.set(t, A), A;
}
// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var ui = class extends pn {
	constructor(e) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = j.now();
		let { keyframes: t, name: n, motionValue: r, element: i } = e, a = e;
		a.autoplay ??= !0, a.delay ??= 0, a.type ??= "keyframes", a.repeat ??= 0, a.repeatDelay ??= 0, a.repeatType ??= "loop";
		let o = i?.KeyframeResolver || rr;
		this.keyframeResolver = new o(t, (e, t, n) => this.onKeyframesResolved(e, t, a, !n), n, r, i), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, i) {
		this.keyframeResolver = void 0;
		let { name: a, type: o, velocity: s, delay: c, isHandoff: l, onUpdate: u } = n;
		this.resolvedAt = j.now();
		let d = Cr(e, a, o, s);
		d || ((r.instantAnimations || !c) && u?.(on(e, n, t)), e[0] = e[e.length - 1], wr(n), n.repeat = 0);
		let { onComplete: f } = n;
		n.finalKeyframe = t, n.keyframes = e, n.onComplete = () => {
			f?.(), this.notifyFinished();
		};
		let p = d && !l && jr(n), m = !p && ni(n);
		i && (p || m || this.resolvedAt !== this.createdAt) && (n.startTime ??= un(this.createdAt, this.resolvedAt));
		let h;
		if (p) {
			n.element = n.motionValue?.owner?.current;
			try {
				h = new br(n);
			} catch {
				h = new H(n);
			}
		} else h = m ? new oi(n) : new H(n);
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
		return this._animation || (this.keyframeResolver?.resume(), tr()), this._animation;
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
}, di = class {
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
		return fi(this.animations, "duration");
	}
	get iterationDuration() {
		return fi(this.animations, "iterationDuration");
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
function fi(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
// node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var pi = class extends di {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
}, mi = 30, hi = (e) => !isNaN(parseFloat(e)), gi = { current: void 0 }, _i = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = j.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.dirty(), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = j.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = hi(this.current));
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
		z.read(() => {
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
		gi.current?.push(this);
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
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > mi) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, mi);
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
function vi(e, t) {
	return new _i(e, t);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function yi(e, t) {
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
function bi(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : yi(n, e);
}
// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var xi = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Si = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Ci = {
	type: "keyframes",
	duration: .8
}, wi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Ti = (e, { keyframes: t }) => t.length > 2 ? Ci : K.has(e) ? e.startsWith("scale") ? Si(t[1]) : xi : wi, Ei = /* @__PURE__ */ new Set([
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
function Di(e) {
	for (let t in e) if (!Ei.has(t)) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Oi = (e, t, n, i = {}, a, o) => (s) => {
	let c = bi(i, e) || {}, l = c.delay || i.delay || 0, { elapsed: u = 0 } = i;
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
	Di(c) || Object.assign(d, Ti(e, d)), d.duration &&= /* @__PURE__ */ f(d.duration), d.repeatDelay &&= /* @__PURE__ */ f(d.repeatDelay), d.from !== void 0 && (d.keyframes[0] = d.from);
	let p = !1;
	if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (wr(d), d.delay === 0 && (p = !0)), (r.instantAnimations || r.skipAnimations || a?.shouldSkipAnimations || c.skipAnimations) && (p = !0, wr(d), d.delay = 0), d.allowFlatten = !c.type && !c.ease, p && !o && t.get() !== void 0) {
		let e = on(d.keyframes, c);
		if (e !== void 0) {
			z.update(() => {
				d.onUpdate(e), d.onComplete();
			});
			return;
		}
	}
	return c.isSync ? new H(d) : new ui(d);
}, ki = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Ai(e) {
	let t = ki.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function ji(e, t, n = 1) {
	let [r, a] = Ai(e);
	if (!r) return;
	let o = window.getComputedStyle(t).getPropertyValue(r);
	if (o) {
		let e = o.trim();
		return i(e) ? parseFloat(e) : e;
	}
	return ue(a) ? ji(a, t, n + 1) : a;
}
// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Mi = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...G
]), Ni = (e) => !!(e && e.getVelocity), Pi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Fi = (e) => (t) => t.test(e), Ii = [
	pe,
	F,
	P,
	N,
	Oe,
	De,
	Pi
], Li = (e) => Ii.find(Fi(e));
// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Ri(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || o(e);
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var zi = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function Bi(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !zi.has(t) && Ve(t) && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] !== i && (e[r] = kn(n, i));
}
// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Vi = class extends rr {
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
		for (let t = 0; t < e.length; t++) if (fe(t ? e[t] : r)) return !1;
		return !0;
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t?.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), ue(r))) {
				let i = ji(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Mi.has(n) || e.length !== 2) return;
		let [r, i] = e;
		if (typeof r == "number" && typeof i == "number") return;
		let a = Li(r), o = Li(i);
		if (fe(r) !== fe(i) && Yn[n]) this.needsMeasurement = !0;
		else if (a !== o) {
			if (Vn(a) && Vn(o)) for (let t = 0; t < e.length; t++) {
				let n = e[t];
				typeof n == "string" && (e[t] = parseFloat(n));
			}
			else Yn[n] && (this.needsMeasurement = !0);
		}
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Ri(e[t])) && n.push(t);
		n.length && Bi(e, n, t);
	}
	measure() {
		let { element: e, name: t } = this;
		return Yn[t](window.getComputedStyle(e.current), () => e.measureViewportBox());
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
}, Hi = [];
function Ui(e) {
	Wi(e), Hi.unshift(e);
}
function Wi(e) {
	t(Hi, e);
}
function Gi(e) {
	return Hi.find((t) => t.test(e));
}
function Ki(e, t, n = {}, r) {
	let i = [], { velocity: a, path: o } = n, s = n.reduceMotion ?? r?.shouldReduceMotion;
	o?.animateValues && r && (t = { ...t }, o.animateValues(e, t, n, 0, i));
	for (let o in t) {
		if (o === "transition" || o === "transitionEnd") continue;
		let c = t[o];
		if (c === void 0) continue;
		let l = e(o), u = l.get();
		u !== void 0 && !l.isAnimating() && !Array.isArray(c) && c === u && !a ? z.update(() => l.set(c)) : (l.run(Oi(o, l, c, s && Mi.has(o) ? { type: !1 } : n, r)), l.animation && i.push(l.animation));
	}
	let { transitionEnd: c } = t;
	if (c) {
		let t = () => z.update(() => {
			for (let t in c) e(t).set(c[t]);
		});
		i.length ? Promise.all(i).then(t) : t();
	}
	return i;
}
function qi(e, t, n, r, i) {
	let a, o = !1, s = Ki((r) => {
		let s = a?.[r] ?? e.get(t, r);
		if (!s) {
			let c;
			if (!i) {
				let i = n[r];
				c = Ji(i) ?? e.read(t, r, i);
			}
			s = vi(c, { owner: i }), o ? e(t, { [r]: s }) : (a ||= {})[r] = s;
		}
		return s;
	}, n, r, i);
	return o = !0, a && e(t, a), s;
}
function Ji(e) {
	let t = Array.isArray(e) ? e[0] : void 0;
	return t === null ? void 0 : t;
}
// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Yi(e) {
	return a(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Xi(e) {
	return a(e) && "ownerSVGElement" in e;
}
// node_modules/motion-dom/dist/es/scope/active.mjs
var Y = {};
function Zi(e) {
	return Y.current?.add(e), e;
}
var Qi = (e) => Y.current ? Y.current.bind(e) : e;
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function $i(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = t ? t.current : Y.current?.root || document, i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
// node_modules/motion-dom/dist/es/effects/MotionValueState.mjs
var ea = class {
	constructor(e = z.render) {
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
function ta(e, { step: t, ...n } = {}) {
	let r = /* @__PURE__ */ new WeakMap();
	return Object.assign((n, i) => {
		let a = r.get(n) ?? new ea(t);
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
function na(e) {
	let t = "", { transformKeys: n = [], transformValues: r = {} } = e;
	for (let e = 0; e < n.length; e++) {
		let i = n[e], a = r[i].getCurrent();
		a !== void 0 && (Ir(i, a) || (t += (t && " ") + Fr(i, a)));
	}
	let i = e.get("pathRotation")?.get();
	return i && (t += (t && " ") + Fr("rotate", i)), t || "none";
}
// node_modules/motion-dom/dist/es/effects/style/index.mjs
var ra = /* @__PURE__ */ new Set([
	"originX",
	"originY",
	"originZ"
]), ia = (e, t) => Mr(e.get(t)?.get(), U[t]), aa = (e, t, n, r) => {
	let i, a;
	if (K.has(n)) {
		if (n !== "pathRotation") {
			let e = t.transformKeys ??= [];
			(t.transformValues ??= {})[n] = r, e.includes(n) || (e.push(n), e.sort((e, t) => G.indexOf(e) - G.indexOf(t)));
		}
		t.get("transform") || (!Yi(e) && !t.get("transformBox") && aa(e, t, "transformBox", new _i("fill-box")), t.set("transform", new _i("none"), () => {
			Lr.get(e)?.check(), e.style.transform = na(t);
		})), a = t.get("transform");
	} else ra.has(n) ? (t.get("transformOrigin") || t.set("transformOrigin", new _i(""), () => {
		let n = ia(t, "originX") ?? "50%", r = ia(t, "originY") ?? "50%", i = ia(t, "originZ") ?? 0;
		e.style.transformOrigin = `${n} ${r} ${i}`;
	}), a = t.get("transformOrigin")) : i = ir(n) ? () => {
		e.style.setProperty(n, r.getCurrent());
	} : () => {
		e.style[n] = Mr(r.getCurrent(), U[n]);
	};
	return t.set(n, r, i, a);
}, oa = (e) => Yi(e) || Xi(e), sa = (e, t) => {
	if (K.has(t)) return Bn(e, t);
	let n = getComputedStyle(e), r = ir(t) ? n.getPropertyValue(t) : n[t];
	return typeof r == "string" && r.trim() || 0;
}, ca = /*@__PURE__*/ ta(aa, {
	test: oa,
	read: sa
});
// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function la(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var ua = [
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
function da(e, t) {
	if (!(t in e)) return !1;
	let n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t) || Object.getOwnPropertyDescriptor(e, t);
	return n && typeof n.set == "function";
}
var fa = (e, t, n, r, i = n) => {
	let a = da(e, i);
	!a && (i.startsWith("data") || i.startsWith("aria")) && (i = la(i));
	let o = U[n] || U[i], s = a ? () => {
		e[i] = Mr(r.get(), U[n]);
	} : () => {
		let t = Mr(r.get(), o);
		t == null ? e.removeAttribute(i) : e.setAttribute(i, String(t));
	};
	return t.set(n, r, s);
};
// node_modules/motion-dom/dist/es/effects/svg/index.mjs
function pa(e, t, n, r) {
	return z.render(() => e.setAttribute("pathLength", "1")), n === "pathOffset" ? t.set(n, r, () => {
		let t = r.get();
		e.setAttribute("stroke-dashoffset", `${-t}`);
	}) : (t.get("stroke-dasharray") || t.set("stroke-dasharray", new _i("1 1"), () => {
		let n = t.get("pathLength")?.get() ?? 1, r = t.get("pathSpacing")?.get();
		e.setAttribute("stroke-dasharray", `${n} ${r ?? 1 - Number(n)}`);
	}), t.set(n, r, void 0, t.get("stroke-dasharray")));
}
var ma = /*@__PURE__*/ ta((e, t, n, r) => n.startsWith("path") && !K.has(n) ? pa(e, t, n, r) : n.startsWith("attr") ? fa(e, t, n, r, ha(n)) : n === "d" ? t.set(n, r, () => {
	let t = r.get()?.replace(/path\(|["')]/g, "");
	t === void 0 ? e.removeAttribute(n) : e.setAttribute(n, t);
}) : (K.has(n) || ra.has(n) || ir(n) || n in e.style ? aa : fa)(e, t, n, r), {
	test: Xi,
	read: (e, t) => K.has(t) ? U[t]?.default || 0 : ir(t) || ua.includes(t) ? sa(e, t) || e.getAttribute(la(t)) || 0 : (t = ha(t), e.getAttribute(la(t)) ?? e.getAttribute(t) ?? void 0)
});
function ha(e) {
	return e.replace(/^attr([A-Z])/, (e, t) => t.toLowerCase());
}
// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function ga({ top: e, left: t, right: n, bottom: r }) {
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
function _a(e, t) {
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
function va(e, t) {
	return ga(_a(e.getBoundingClientRect(), t));
}
// node_modules/motion-dom/dist/es/animation/animate/element.mjs
var ya = {}, ba = (e) => Xi(e) ? ma : ca, xa = class {
	constructor(e, t) {
		this.effect = e, this.current = t, this.KeyframeResolver = Vi;
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
		return va(this.current);
	}
	getProps() {
		return ya;
	}
};
function Sa(e, t, n, r) {
	if (Y.current?.track(e), r) return Ki((e) => r.getValue(e, null), t, n, r);
	let i = ba(e);
	return qi(i, e, t, n, new xa(i, e));
}
// node_modules/motion-dom/dist/es/effects/prop/index.mjs
var Ca = /*@__PURE__*/ ta((e, t, n, r) => t.set(n, r, () => {
	e[n] = r.get();
}), {
	test: (e) => a(e),
	read: (e, t) => {
		let n = e[t];
		return typeof n == "string" || typeof n == "number" ? n : void 0;
	}
});
// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function wa(e, t, n) {
	let r = Ni(e) ? e : vi(e);
	return r.run(Oi("", r, t, n)), r.animation;
}
// node_modules/motion-dom/dist/es/render/store.mjs
var Ta = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Da, Oa = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Xi(r) && "getBBox" in r ? r.getBBox()[t] : r[n], ka = /*@__PURE__*/ Oa("inline", "width", "offsetWidth"), Aa = /*@__PURE__*/ Oa("block", "height", "offsetHeight");
function ja({ target: e, borderBoxSize: t }) {
	Ea.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return ka(e, t);
			},
			get height() {
				return Aa(e, t);
			}
		});
	});
}
function Ma(e) {
	e.forEach(ja);
}
function Na() {
	typeof ResizeObserver < "u" && (Da = new ResizeObserver(Ma));
}
function Pa(e, t) {
	Da || Na();
	let n = $i(e);
	return n.forEach((e) => {
		let n = Ea.get(e);
		n || (n = /* @__PURE__ */ new Set(), Ea.set(e, n)), n.add(t), Da?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = Ea.get(e);
			n?.delete(t), n?.size || Da?.unobserve(e);
		});
	};
}
// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var Fa = /* @__PURE__ */ new Set(), Ia;
function La() {
	Ia = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		Fa.forEach((t) => t(e));
	}, window.addEventListener("resize", Ia);
}
function Ra(e) {
	return Fa.add(e), Ia || La(), () => {
		Fa.delete(e), !Fa.size && typeof Ia == "function" && (window.removeEventListener("resize", Ia), Ia = void 0);
	};
}
// node_modules/motion-dom/dist/es/resize/index.mjs
function za(e, t) {
	return Zi(typeof e == "function" ? Ra(e) : Pa(e, t));
}
// node_modules/motion-dom/dist/es/utils/stagger.mjs
function Ba(e = .1, { startDelay: t = 0, from: n = 0, ease: r, grid: i } = {}) {
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
function Va(e) {
	return typeof e == "object" && !Array.isArray(e);
}
// node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function Ha(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && Va(t) ? $i(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function Ua(e, t, n) {
	return e * (t + 1) + n * t;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function Wa(e, t) {
	if (t.has(e)) return t.get(e);
	let [, n, r] = e.match(/^(.+?)([+-][\d.]+)$/) || [];
	return t.has(n) ? Math.max(0, t.get(n) + parseFloat(r)) : void 0;
}
function Ga(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : Wa(t, r) ?? e;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function Ka(e, n, r) {
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a.at > n && a.at < r && (t(e, a), i--);
	}
}
function qa(e, t, n, r, i, a) {
	Ka(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: R(i, a, r[o]),
		easing: /* @__PURE__ */ re(n, o)
	});
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function Ja(e, t, n = 0) {
	let r = t + 1 + t * n;
	for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function Ya(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var Xa = "easeInOut", Za = 20;
function Qa(e, { defaultTransition: t = {}, ...n } = {}, r, i, a) {
	let o = t.duration || .3, s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, d = /* @__PURE__ */ new Map(), p = 0, m = 0, h = 0, g = (e, n) => {
		let a = n, s = (e) => typeof e == "number" ? n + e : Ga(m, e, p, d);
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
				let c = to(e), { delay: l = 0, times: u = B(c), type: d = t.type || "keyframes", repeat: p, repeatType: g, repeatDelay: _ = 0, ...v } = n, { ease: b = t.ease || "easeOut", duration: S } = n;
				r.mixer ||= n.mixer;
				let C = typeof l == "function" ? l(a, s) : l, w = c.length, T = mr(d) ? d : i?.[d || "keyframes"];
				if (w <= 2 && T) {
					let e = 100;
					if (w === 2 && io(c)) {
						let t = c[1] - c[0];
						e = Math.abs(t);
					}
					let n = {
						...t,
						...v
					};
					S !== void 0 && (n.duration = /* @__PURE__ */ f(S));
					let r = wt(n, e, T);
					b = r.ease, S = r.duration;
				}
				S ??= o;
				let E = m + C;
				u.length === 1 && u[0] === 0 && (u[1] = 1);
				let ee = u.length - c.length;
				if (ee > 0 && $t(u, ee), c.length === 1 && c.unshift(null), p && p < Za) {
					let e = S > 0 ? _ / S : 0;
					S = Ua(S, p, _);
					let t = [...c], n = [...u];
					b = Array.isArray(b) ? [...b] : [b];
					let r = [...b], i = g === "reverse" || g === "mirror", a = t, o = r;
					i && (a = [...t].reverse(), g === "reverse" && (o = [...r].reverse().map((e) => typeof e == "function" ? /* @__PURE__ */ y(e) : e)));
					for (let s = 0; s < p; s++) {
						let l = i && s % 2 == 0, d = l ? a : t, f = l ? o : r, p = (s + 1) * (1 + e);
						e > 0 && (c.push(c[c.length - 1]), u.push(p), b.push("linear")), c.push(...d);
						for (let e = 0; e < d.length; e++) u.push(n[e] + p), b.push(e === 0 ? "linear" : /* @__PURE__ */ re(f, e - 1));
					}
					Ja(u, p, e);
				}
				let te = E + S;
				qa(r, c, b, u, E, te), x = Math.max(C + S, x), h = Math.max(te, h);
			};
			if (Ni(_)) {
				let e = $a(_, c);
				S(v, b, eo("default", e));
			} else {
				let e = Ha(_, v, r, l), t = e.length;
				for (let n = 0; n < t; n++) {
					v = v, b = b;
					let r = e[n], i = $a(r, c);
					for (let e in v) S(v[e], no(b, e), eo(e, i), n, t);
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
			a.sort(Ya);
			let o = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				o.push(n), c.push(/* @__PURE__ */ u(0, h, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), o.unshift(o[0]), l.unshift(Xa)), c[c.length - 1] !== 1 && (c.push(1), o.push(null)), s.has(r) || s.set(r, {
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
function $a(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function eo(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function to(e) {
	return Array.isArray(e) ? e : [e];
}
function no(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var ro = (e) => typeof e == "number", io = (e) => e.every(ro);
// node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function ao(e, t) {
	return Ni(e) || typeof e == "number" || typeof e == "string" && !Va(t);
}
function oo(e, t, n, r) {
	let i = [];
	if (ao(e, t)) i.push(wa(e, Va(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = Ha(e, t, r), o = a.length;
		for (let e = 0; e < o; e++) {
			let r = a[e], s = { ...n };
			"delay" in s && typeof s.delay == "function" && (s.delay = s.delay(e, o)), r instanceof Element ? i.push(...Sa(r, t, s, Ta.get(r))) : i.push(...qi(Gi(r) ?? Ca, r, t, s));
		}
	}
	return i;
}
// node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function so(e, t, n, r) {
	let i = [], a = Qa(e.map((e) => {
		if (Array.isArray(e) && typeof e[0] == "function") {
			let t = e[0], n = vi(0);
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
	}), t, n, { spring: Yt }, r), o = t?.reduceMotion ?? t?.defaultTransition?.reduceMotion;
	return a.forEach(({ keyframes: e, transition: t }, n) => {
		i.push(...oo(n, e, {
			...t,
			reduceMotion: o
		}));
	}), i;
}
// node_modules/framer-motion/dist/es/animation/timeline/index.mjs
var co = 0;
function lo({ repeat: e = 0, repeatDelay: t = 0, repeatType: n = "loop", delay: r = 0 }, i, a, o) {
	let s = i + t, c = o === void 0;
	if (c) {
		let t = Math.max(0, a - r);
		o = s && t > 0 ? Math.min(e, Math.ceil(t / s - 1e-9) - 1) : 0, a = Math.min(t - o * s, i);
	}
	return n !== "loop" && o % 2 && (a = i - a), [o, c ? a : r + o * s + a];
}
function uo(e, t) {
	let n = [...e], r = typeof n[0] == "function" ? Math.max(1, n.length - 1) : 2;
	return n[r] = {
		...n[r],
		at: t
	}, n;
}
var fo = (e, t) => t === void 0 ? e : {
	name: e,
	at: t
};
function po(e) {
	e.pause(), e.time = 0, e.stop();
}
var mo = class e {
	constructor(e = [], t = {}, n) {
		this.options = t, this.entries = [], this.repeatIndex = 0, this.prevTime = 0, this.markers = [], this.labels = /* @__PURE__ */ new Map(), this.totalDuration = 0, this.isDirty = !1, this.isDone = !1, this.isRebuilding = !1, this.playbackSpeed = 1, this.motionScope = Y.current, this.isKilled = !1, this.isWrapped = !1, this.stop = () => {
			this.flush(), this.group?.stop();
		}, this.isPaused = t.autoplay === !1, this.newFinished(), e.forEach((e) => this.add(e)), n ? (this.isDirty = !1, this.isWrapped = !0, this.group = new pi(n), this.watch()) : (this.invalidate(), this.flush());
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
				name: "_m" + co++,
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
				name: "_m" + co++,
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
		let t = this.resolve(e), n = this.iterationDuration, r = this.time, [i] = lo(this.options, n, r), a = lo(this.options, n, t, i)[1], o = Math.abs(this.speed);
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
		this.group &&= (po(this.group), void 0), this.isDirty = !1, this.parent = e;
	}
	build() {
		let e = this.isWrapped ? this.group.iterationDuration : this.totalDuration;
		this.isDirty = !1, this.isWrapped = !1;
		let t = this.group, n = 0;
		t && (this.isRebuilding = !0, this.scrollTimeline ? (this.detachScroll?.(), t.cancel()) : (n = t.animations.length ? t.time : 0, po(t)), this.isRebuilding = !1);
		let { defaultTransition: r, onComplete: i, onUpdate: a, onRepeat: o, onReverseComplete: s, autoplay: c, scope: l, ...u } = this.options, d = {};
		l?.reduceMotion !== void 0 && (d.reduceMotion = l.reduceMotion), l?.skipAnimations !== void 0 && (d.skipAnimations = l.skipAnimations), Object.assign(d, u);
		let f = /* @__PURE__ */ new Map(), p = {}, m = Y.current;
		Y.current = this.motionScope;
		let h;
		try {
			h = so(this.toSequence(f), {
				defaultTransition: r,
				...d
			}, l, p);
		} finally {
			Y.current = m;
		}
		let g = p.labels, _ = d.duration ?? p.duration, v = p.duration ? _ / p.duration : 1;
		if (g.forEach((e, t) => g.set(t, e * v)), this.markers = [], f.forEach((e, t) => {
			e.time = g.get(t), g.delete(t), _ = Math.max(_, e.time), this.markers.push(e);
		}), this.markers.sort((e, t) => e.time - t.time), this.labels = g, this.totalDuration = _, this.clock = this.clockAnimation = void 0, this.markers.length || this.stopAt !== void 0 || a || o) {
			let e = this.clock = vi(0);
			e.on("change", (t) => e === this.clock && this.onClock(t)), h.unshift(this.clockAnimation = wa(e, [0, _], {
				...d,
				duration: _,
				ease: "linear"
			}));
		}
		let y = this.group = new pi(h), { delay: b = 0, repeat: x = 0, repeatDelay: S = 0 } = this.options, [C, w] = lo(this.options, e, n);
		n > b && (n = lo(this.options, _, Math.min(w, _), C)[1]), this.isDone && n < b + (x + 1) * (_ + S) - S && this.newFinished(), this.scrollTimeline ? this.detachScroll = y.attachTimeline(this.scrollTimeline) : (y.speed = this.playbackSpeed, this.isPaused && y.pause(), n && (y.time = n)), this.repeatIndex = this.currentRepeat(), this.prevTime = n || -1, this.watch();
	}
	toSequence(t) {
		return this.entries.map(({ item: n, at: r, marker: i }) => i ? (t.set(i.name, i), fo(i.name, r)) : n instanceof e ? {
			sequence: n.toSequence(t),
			at: r
		} : typeof n == "string" ? fo(n, r) : r === void 0 ? n : Array.isArray(n) ? uo(n, r) : {
			...n,
			at: r
		});
	}
	resolve(e) {
		return this.flush(), typeof e == "number" ? e : Wa(e, this.labels) ?? this.time;
	}
	currentRepeat() {
		return lo(this.options, this.totalDuration, this.clockAnimation?.time ?? 0)[0];
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
		return this.pause(), this.time = lo(this.options, this.totalDuration, e, this.repeatIndex)[1], !0;
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
function ho(e) {
	return Array.isArray(e) && e.some((e) => Array.isArray(e) || e?.sequence);
}
function go(e = {}) {
	let { scope: t, reduceMotion: n, skipAnimations: r } = e;
	function i(e, i, a) {
		let o = Y.current?.transition, s = {};
		n !== void 0 && (s.reduceMotion = n), r !== void 0 && (s.skipAnimations = r);
		let c;
		if (ho(e)) {
			let r = {
				...s,
				...i,
				scope: t
			};
			o && (r.defaultTransition = {
				...o,
				...r.defaultTransition
			}), r.reduceMotion = i?.reduceMotion ?? r.defaultTransition?.reduceMotion ?? n, c = new mo(e, r);
		} else {
			let { onComplete: n, ...r } = a || {}, l = {
				...s,
				...o,
				...r
			}, { onUpdate: u } = r;
			c = new mo([typeof e == "number" || typeof e == "string" && (typeof i == "string" || Array.isArray(i)) ? [
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
			}, oo(e, i, l, t));
		}
		return c;
	}
	return i;
}
var _o = /* @__PURE__ */ Object.assign(/* @__PURE__ */ go(), {
	addEffect: Ui,
	removeEffect: Wi
}), vo = 50, yo = () => ({
	current: 0,
	offset: [],
	progress: 0,
	scrollLength: 0,
	targetOffset: 0,
	targetLength: 0,
	containerLength: 0,
	velocity: 0
}), bo = () => ({
	time: 0,
	x: yo(),
	y: yo()
}), xo = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
}, So = /* @__PURE__ */ new WeakMap();
function Co(e, t) {
	let n = e === document.scrollingElement, r = n && document.body || e, i = So.get(r);
	i || So.set(r, i = getComputedStyle(r));
	let { writingMode: a, flexDirection: o } = i, s = t === "x" !== /^[vs]/.test(a);
	return (s ? i.direction === "rtl" != (a === "sideways-lr") : a.endsWith("rl")) !== (!n && i.display.includes("flex") && (s === (o[0] === "c") ? i.flexWrap : o).endsWith("reverse"));
}
function wo(e, t, r, i) {
	let a = r[t], { length: o, position: s } = xo[t], c = a.current, l = r.time, d = e[`scroll${s}`];
	a.current = Co(e, t) ? -d || 0 : d, a.containerLength = e[`client${o}`], a.targetLength = e[`scroll${o}`], a.scrollLength = a.targetLength - a.containerLength, a.offset.length = 0, a.offset[0] = 0, a.offset[1] = a.scrollLength, a.progress = n(0, 1, /* @__PURE__ */ u(0, a.scrollLength, a.current));
	let f = i - l;
	a.velocity = f > vo ? 0 : /* @__PURE__ */ m(a.current - c, f);
}
function To(e, t, n) {
	for (let r in xo) wo(e, r, t, n);
	t.time = n;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var Eo = {
	start: 0,
	center: .5,
	end: 1
};
function Do(e, t, n = 0) {
	let r = 0;
	if (e in Eo && (e = Eo[e]), typeof e == "string") {
		let t = parseFloat(e);
		e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t;
	}
	return typeof e == "number" && (r = t * e), n + r;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var Oo = [0, 0];
function ko(e, t, n, r) {
	let i = Array.isArray(e) ? e : Oo, a = 0, o = 0;
	return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), i = e.includes(" ") ? e.split(" ") : [e, Eo[e] ? e : "0"]), a = Do(i[0], n, r), o = Do(i[1], t), a - o;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var Ao = { All: [[0, 0], [1, 1]] };
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
function jo(e, t) {
	let n = e.length - 1;
	if (n < 1) return 0;
	let r = e[0] > e[n], i = (t) => e[r ? n - t : t];
	if (e[0] === e[1] && t < i(0)) return +!!r;
	let a = 0;
	for (; a < n - 1 && t >= i(a + 1);) a++;
	let o = (a + /* @__PURE__ */ u(i(a), i(a + 1), t)) / n;
	return r ? 1 - o : o;
}
function Mo(e, { offset: t = Ao.All }) {
	for (let r in xo) {
		let i = e[r];
		i.offset.length = 0;
		for (let e = 0; e < t.length; e++) i.offset[e] = ko(t[e], i.containerLength, i.targetLength, i.targetOffset);
		i.progress = n(0, 1, jo(i.offset, i.current));
	}
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function No(e, t) {
	let n = {
		x: 0,
		y: 0
	}, r = e;
	for (; r && r !== t;) if (Yi(r)) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
	else if (r.tagName === "svg") {
		let e = r.getBoundingClientRect();
		r = r.parentElement;
		let t = r.getBoundingClientRect();
		n.x += e.left - t.left, n.y += e.top - t.top;
	} else if (r instanceof SVGGraphicsElement) {
		let { x: e, y: t } = r.getBBox();
		n.x += e, n.y += t;
		let i = null, a = r.parentNode;
		for (; !i;) a.tagName === "svg" && (i = a), a = r.parentNode;
		r = i;
	} else break;
	return n;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function Po(e) {
	return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function Fo(e, t, n, r = {}) {
	let { target: i } = r, a = i || r.offset;
	return {
		measure: (t) => {
			if (a) {
				n.time = t.time;
				for (let e in xo) {
					let r = e, { offset: i } = n[r];
					Object.assign(n[r], t[r]), n[r].offset = i;
				}
				if (i && i !== e) {
					let t = No(i, e), r = Po(i);
					n.x.targetOffset = t.x, n.y.targetOffset = t.y, n.x.targetLength = r.width, n.y.targetLength = r.height;
				}
				Mo(n, r);
			}
		},
		notify: (e) => t(a ? n : e)
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var Io = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), Bo = (e) => e === document.scrollingElement ? window : e;
function Vo(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...r } = {}) {
	if (!t) return c;
	let i = Ro.get(t);
	i || (i = /* @__PURE__ */ new Set(), Ro.set(t, i));
	let a = Fo(t, e, bo(), r);
	if (i.add(a), !Io.has(t)) {
		let e = bo(), n = () => {
			To(t, e, k.timestamp);
			for (let t of i) t.measure(e);
			z.preUpdate(r);
		}, r = () => {
			for (let t of i) t.notify(e);
		}, a = () => z.read(n);
		Io.set(t, a);
		let o = Bo(t);
		window.addEventListener("resize", a), t !== document.documentElement && Lo.set(t, za(t, a)), o.addEventListener("scroll", a), a();
	}
	if (n && !zo.has(t)) {
		let e = Io.get(t), n = {
			width: t.scrollWidth,
			height: t.scrollHeight
		}, r = z.read(() => {
			let r = t.scrollWidth, i = t.scrollHeight;
			(n.width !== r || n.height !== i) && (e(), n.width = r, n.height = i);
		}, !0);
		zo.set(t, r);
	}
	let o = Io.get(t);
	return z.read(o, !1, !0), () => {
		vt(o);
		let e = Ro.get(t);
		if (!e || (e.delete(a), e.size)) return;
		Ro.delete(t);
		let n = Io.get(t);
		Io.delete(t), n && (Bo(t).removeEventListener("scroll", n), Lo.get(t)?.(), window.removeEventListener("resize", n));
		let r = zo.get(t);
		r && (vt(r), zo.delete(t));
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs
function Ho(e) {
	return typeof window > "u" ? !1 : e ? lr() : cr();
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs
var Uo = /* @__PURE__ */ new Map();
function Wo({ container: e, target: t, axis: n }) {
	let r = Uo.get(e);
	r || (r = /* @__PURE__ */ new Map(), Uo.set(e, r));
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
var Go = (e) => {
	if (/v/u.test(e)) return [];
	let t = ko(e, 0, 0, 0);
	return [
		ko(e, 0, 1, 0) - t,
		t - ko(e, 1, 0, 0),
		t
	];
}, Ko = ([e, t, n]) => !n && (t === 0 || t === 1) && `${t ? "entry" : "exit"}-crossing ${e * 100}%`;
function qo(e = Ao.All) {
	if (e.length !== 2) return;
	let [t, n] = e.map(Go), r = [Ko(t), Ko(n)], i = n[0] - t[0], a = t[1] - n[1];
	if (r[0] && r[1] && (i || a)) return {
		points: r,
		a: i,
		b: a,
		cover: !t[0] && i === 1 && a === 1
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs
function Jo(e, t) {
	let { target: n, container: r, axis: i } = t, a = n && qo(t.offset), o = Ho(n) && (n ? !!a : !t.offset), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), l, u = !1, d = (e, t) => {
		let [n, r] = a.points;
		t.effect.updateTiming({ direction: u ? e === "normal" ? "reverse" : "alternate-reverse" : e }), Object.assign(t, {
			rangeStart: u ? r : n,
			rangeEnd: u ? n : r
		}), t.play();
	}, f = [e.attachTimeline({
		get timeline() {
			return o ? Wo(t) : void 0;
		},
		onAttach: a && ((e) => {
			let t = e.effect.getTiming().direction;
			s.set(e, t), d(t, e);
		}),
		observe: (e) => (e.pause(), c.add(e), l ||= Vo((e) => {
			c.forEach((t) => {
				t.time = t.iterationDuration * e[i].progress;
			});
		}, t), () => c.delete(e))
	})];
	if (o && a) {
		let { a: e, b: t } = a, o = i === "y" ? "clientHeight" : "clientWidth", c = () => {
			u !== (u = e * n[o] + t * r[o] < 0) && s.forEach(d);
		};
		c(), e * t < 0 && f.push(za(c), za([n, r], c));
	}
	return () => {
		f.forEach((e) => e()), l?.();
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function Yo(e, { axis: t = "y", source: n, container: r = document.scrollingElement, ...i } = {}) {
	if (!r) return c;
	let a = {
		axis: t,
		container: n || r,
		...i
	};
	if (typeof e == "function") {
		let n = Qi(e);
		return Zi(Vo((e) => n(e[t].progress, e), a));
	}
	return Zi(Jo(e, a));
}
// node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var Xo = {
	some: 0,
	all: 1
};
function Zo(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
	let a = $i(e);
	t = Qi(t);
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
		threshold: typeof i == "number" ? i : Xo[i]
	});
	return a.forEach((e) => s.observe(e)), Zi(() => s.disconnect());
}
// tools/cinematic/home.js
var X = window.matchMedia("(prefers-reduced-motion: reduce)"), Z = [], Qo = [...document.querySelectorAll(".hero-enter")], $o = [...document.querySelectorAll(".reveal")];
function es() {
	if (Z.forEach((e) => e()), Z = [], [...Qo, ...$o].forEach((e) => {
		e.style.opacity = "1", e.style.transform = "none";
	}), document.querySelector(".hero-media").style.transform = "none", X.matches) return;
	let e = _o(Qo, {
		opacity: [0, 1],
		y: [18, 0]
	}, {
		duration: .65,
		delay: Ba(.09, { startDelay: .08 }),
		ease: [
			.2,
			.7,
			.2,
			1
		]
	});
	Z.push(() => e.stop());
	let t = Zo($o, (e) => {
		let t = _o(e, {
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
		Z.push(() => t.stop());
	}, { margin: "0px 0px -40px 0px" });
	Z.push(t);
	let n = _o(document.querySelector(".hero-media"), {
		y: [0, 70],
		scale: [1, 1.05]
	}, { ease: "linear" }), r = Yo(n, {
		target: document.querySelector(".hero"),
		offset: ["start start", "end start"]
	});
	Z.push(() => {
		r(), n.stop();
	});
}
es(), X.addEventListener("change", es);
var Q = [...document.querySelectorAll("[role=\"tab\"]")];
function ts(e, t = !1) {
	Q.forEach((t) => {
		let n = t === e;
		t.setAttribute("aria-selected", String(n)), t.tabIndex = n ? 0 : -1, document.getElementById(t.getAttribute("aria-controls")).hidden = !n;
	}), t && e.focus({ preventScroll: !0 });
	let n = e.parentElement, r = e.offsetLeft - n.offsetLeft;
	(r < n.scrollLeft || r + e.offsetWidth > n.scrollLeft + n.clientWidth) && n.scrollTo({
		left: Math.max(0, r - 12),
		behavior: X.matches ? "instant" : "smooth"
	}), X.matches || _o(document.getElementById(e.getAttribute("aria-controls")), {
		opacity: [0, 1],
		y: [6, 0]
	}, {
		duration: .22,
		ease: "easeOut"
	});
}
Q.forEach((e, t) => {
	e.addEventListener("click", () => ts(e)), e.addEventListener("keydown", (e) => {
		let n;
		e.key === "ArrowRight" && (n = (t + 1) % Q.length), e.key === "ArrowLeft" && (n = (t - 1 + Q.length) % Q.length), e.key === "Home" && (n = 0), e.key === "End" && (n = Q.length - 1), n !== void 0 && (e.preventDefault(), ts(Q[n], !0));
	});
});
var $ = 0, ns = document.documentElement.lang === "en", rs = ns ? [
	"The information becomes a draft to review.",
	"The team reviews and decides what happens next.",
	"The process starts with a request."
] : [
	"Le informazioni diventano una bozza da verificare.",
	"Il team verifica e decide come procedere.",
	"Il processo parte dalla richiesta."
];
document.querySelector(".demo-next").addEventListener("click", () => {
	let e = rs[$];
	$ = ($ + 1) % 3, document.querySelectorAll(".workflow-steps li").forEach((e, t) => {
		e.classList.toggle("is-current", t === $), e.classList.toggle("is-complete", t < $);
	}), document.querySelector(".demo-status").textContent = `0${$ + 1} / 03`, document.querySelector("#demo-live").textContent = e;
	let t = document.querySelector(".demo-next");
	t.innerHTML = `${$ === 2 ? ns ? "Restart" : "Ricomincia" : ns ? "Next step" : "Passo successivo"} <span aria-hidden="true">${$ === 2 ? "↺" : "→"}</span>`, X.matches || _o(document.querySelector(".workflow-steps .is-current .step-icon"), { scale: [.94, 1] }, { duration: .2 });
}), document.querySelectorAll("details").forEach((e) => {
	e.addEventListener("toggle", () => {
		e.open && !X.matches && _o(e.querySelector(".answer"), {
			opacity: [0, 1],
			y: [-4, 0]
		}, { duration: .2 });
	});
}), document.querySelector("#year").textContent = String((/* @__PURE__ */ new Date()).getFullYear()), window.addEventListener("pagehide", () => {
	Z.forEach((e) => e()), X.removeEventListener("change", es);
}), window.addEventListener("pageshow", (e) => {
	e.persisted && (es(), X.addEventListener("change", es));
});
