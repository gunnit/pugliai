// node_modules/motion-utils/dist/es/clamp.mjs
var e = (e, t, n) => n > t ? t : n < e ? e : n, t = {}, n = (e) => typeof e == "object" && !!e;
// node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function r(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
// node_modules/motion-utils/dist/es/noop.mjs
var i = /* @__NO_SIDE_EFFECTS__ */ (e) => e, a = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, o = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, s = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, c = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, l = (e, t, n) => e * (3 * (1 - e) * ((1 - e) * t + e * n) + e * e);
/*#__NO_SIDE_EFFECTS__*/
function u(e, t, n, r) {
	return e === t && n === r ? i : (i) => {
		let a = 0, o = 1, s = i;
		for (let t = 0;; t++) {
			s >= a && s <= o || (s = (a + o) / 2);
			let r = l(s, e, n) - i;
			if (r * r < 1e-28 || t === 40) break;
			r > 0 ? o = s : a = s, s -= r * 1e-7 / (l(s + 1e-7, e, n) - i - r);
		}
		return l(s, t, r);
	};
}
// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var d = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, f = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), p = /*@__PURE__*/ u(.33, 1.53, .69, .99), m = /*@__PURE__*/ f(p), h = /*@__PURE__*/ d(m), g = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * m(e) : .5 * (2 - 2 ** (-10 * (e - 1))), _ = (e) => 1 - Math.sin(Math.acos(e)), ee = /* @__PURE__ */ f(_), te = /* @__PURE__ */ d(_), ne = /*@__PURE__*/ u(.42, 0, 1, 1), re = /*@__PURE__*/ u(0, 0, .58, 1), ie = /*@__PURE__*/ u(.42, 0, .58, 1), v = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", ae = {
	linear: i,
	easeIn: ne,
	easeInOut: ie,
	easeOut: re,
	circIn: _,
	circInOut: te,
	circOut: ee,
	backIn: m,
	backInOut: h,
	backOut: p,
	anticipate: g
}, oe = (e) => typeof e == "string", se = (e) => {
	if (/* @__PURE__ */ v(e)) {
		let [t, n, r, i] = e;
		return /* @__PURE__ */ u(t, n, r, i);
	}
	return oe(e) ? ae[e] : e;
}, y = {
	delta: 0,
	timestamp: 0,
	isProcessing: !1
}, b;
function ce() {
	b = void 0;
}
var x = {
	now: () => (b === void 0 && x.set(y.isProcessing || t.useManualTiming ? y.timestamp : performance.now()), b),
	set: (e) => {
		b = e, queueMicrotask(ce);
	}
}, S = [
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
function le(e) {
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
var ue = 40;
function de(e, n, r = {
	delta: 0,
	timestamp: 0,
	isProcessing: !1
}) {
	let i = !1, a = !0, o = () => i = !0, s = S.reduce((e, t) => (e[t] = le(o), e), {}), { setup: c, read: l, resolveKeyframes: u, preUpdate: d, update: f, preRender: p, render: m, postRender: h } = s, g = () => {
		let o = t.useManualTiming, s = o ? r.timestamp : performance.now();
		i = !1, o || (r.delta = a ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, ue), 1)), r.timestamp = s, r.isProcessing = !0, c.process(r), l.process(r), u.process(r), d.process(r), f.process(r), p.process(r), m.process(r), h.process(r), r.isProcessing = !1, i && n && (a = !1, e(g));
	}, _ = () => {
		i = !0, a = !0, r.isProcessing || e(g);
	};
	return {
		schedule: S.reduce((e, t) => {
			let n = s[t];
			return e[t] = (e, t = !1, r = !1) => (i || _(), n.schedule(e, t, r)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < S.length; t++) s[S[t]].cancel(e);
		},
		state: r,
		steps: s
	};
}
// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: C, cancel: w, steps: fe } = /* @__PURE__ */ de(typeof requestAnimationFrame < "u" ? requestAnimationFrame : i, !0, y), pe = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
};
// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function me(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a, o, s = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		n !== null && (s++ || (a = n), o = n);
	}
	let c = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : s - 1;
	return !c || r === void 0 ? c ? o : a : r;
}
// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function he(e, t) {
	return {
		kind: e,
		animation: t,
		timestamp: x.now(),
		frameTimestamp: y.timestamp,
		frameIsProcessing: y.isProcessing
	};
}
function ge(e, t, n) {
	let r = globalThis.__MOTION_INSPECT__;
	if (r) try {
		r({
			...he("animation-start", e),
			options: n ? {
				...t,
				...n
			} : t
		});
	} catch {}
}
// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var _e = class {
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
};
// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function ve(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
// node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var T = (e) => e.startsWith("--");
// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function ye(e, t, n) {
	T(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var be = {};
// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function E(e, t) {
	let n = /* @__PURE__ */ r(e);
	return () => be[t] ?? n();
}
// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var D = /* @__PURE__ */ E(() => window.ScrollTimeline !== void 0, "scrollTimeline"), xe = /* @__PURE__ */ E(() => window.ViewTimeline !== void 0, "viewTimeline"), O = /*@__PURE__*/ E(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), k = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, A = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ k([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ k([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ k([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ k([
		.33,
		1.53,
		.69,
		.99
	])
};
// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Se(e, t) {
	if (e) return typeof e == "function" ? O() ? pe(e, t) : "ease-out" : /* @__PURE__ */ v(e) ? k(e) : Array.isArray(e) ? e.map((e) => Se(e, t) || A.easeOut) : A[e];
}
// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Ce(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Se(s, i);
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
function we(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Te({ type: e, ...t }) {
	return we(e) && O() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Ee = class extends _e {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e;
		let c = Te(e);
		this.animation = Ce(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = this.onFinish = () => {
			if (this.animation.onfinish = null, this.finishedTime = this.time, !i) {
				let e = me(r, this.options, o, this.speed);
				this.updateMotionValue?.(e), ye(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		}, ge(this, e, c);
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
		return /* @__PURE__ */ s(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ s(e);
	}
	get time() {
		return /* @__PURE__ */ s(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ o(e), t && (this.animation.pause(), this.updateFinished());
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
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = this.onFinish = null, e && D() ? (this.animation.timeline = e, t?.(this.animation), i) : n(this);
	}
}, De = class {
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
		return Oe(this.animations, "duration");
	}
	get iterationDuration() {
		return Oe(this.animations, "iterationDuration");
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
function Oe(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
// node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var ke = class extends De {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
}, Ae = /* @__PURE__ */ new WeakMap(), je = (e, t = "") => `${e}:${t}`;
function Me(e) {
	let t = Ae.get(e);
	return t || (t = /* @__PURE__ */ new Map(), Ae.set(e, t)), t;
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function Ne(e, t) {
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
function Pe(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : Ne(n, e);
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/px-values.mjs
var Fe = /* @__PURE__ */ new Set(/* @__PURE__ */ "borderWidth.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderRadius.borderTopLeftRadius.borderTopRightRadius.borderBottomRightRadius.borderBottomLeftRadius.width.maxWidth.height.maxHeight.top.right.bottom.left.inset.insetBlock.insetBlockStart.insetBlockEnd.insetInline.insetInlineStart.insetInlineEnd.padding.paddingTop.paddingRight.paddingBottom.paddingLeft.paddingBlock.paddingBlockStart.paddingBlockEnd.paddingInline.paddingInlineStart.paddingInlineEnd.margin.marginTop.marginRight.marginBottom.marginLeft.marginBlock.marginBlockStart.marginBlockEnd.marginInline.marginInlineStart.marginInlineEnd.fontSize.backgroundPositionX.backgroundPositionY".split("."));
// node_modules/motion-dom/dist/es/animation/keyframes/utils/apply-px-defaults.mjs
function Ie(e, t) {
	for (let n = 0; n < e.length; n++) typeof e[n] == "number" && Fe.has(t) && (e[n] = e[n] + "px");
}
// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Le(e) {
	return n(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Re(e) {
	return n(e) && "ownerSVGElement" in e;
}
// node_modules/motion-dom/dist/es/scope/active.mjs
var j = {};
function M(e) {
	return j.current?.add(e), e;
}
var N = (e) => j.current ? j.current.bind(e) : e;
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function P(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = t ? t.current : j.current?.root || document, i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var F = /* @__PURE__ */ new WeakMap(), I, L = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Re(r) && "getBBox" in r ? r.getBBox()[t] : r[n], ze = /*@__PURE__*/ L("inline", "width", "offsetWidth"), Be = /*@__PURE__*/ L("block", "height", "offsetHeight");
function Ve({ target: e, borderBoxSize: t }) {
	F.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return ze(e, t);
			},
			get height() {
				return Be(e, t);
			}
		});
	});
}
function He(e) {
	e.forEach(Ve);
}
function Ue() {
	typeof ResizeObserver < "u" && (I = new ResizeObserver(He));
}
function We(e, t) {
	I || Ue();
	let n = P(e);
	return n.forEach((e) => {
		let n = F.get(e);
		n || (n = /* @__PURE__ */ new Set(), F.set(e, n)), n.add(t), I?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = F.get(e);
			n?.delete(t), n?.size || I?.unobserve(e);
		});
	};
}
// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var R = /* @__PURE__ */ new Set(), z;
function Ge() {
	z = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		R.forEach((t) => t(e));
	}, window.addEventListener("resize", z);
}
function Ke(e) {
	return R.add(e), z || Ge(), () => {
		R.delete(e), !R.size && typeof z == "function" && (window.removeEventListener("resize", z), z = void 0);
	};
}
// node_modules/motion-dom/dist/es/resize/index.mjs
function B(e, t) {
	return M(typeof e == "function" ? Ke(e) : We(e, t));
}
// node_modules/motion-dom/dist/es/render/dom/style-computed.mjs
function V(e, t) {
	let n = window.getComputedStyle(e);
	return T(t) ? n.getPropertyValue(t) : n[t];
}
// node_modules/motion-dom/dist/es/utils/stagger.mjs
function qe(e = .1, { startDelay: t = 0, from: n = 0, ease: r, grid: i } = {}) {
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
		return r && u && (l = se(r)(l / u) * u), t + l;
	};
}
// node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs
function Je(e, t, n, r) {
	let i = [];
	return Ye(i, e, t, n, r), Xe(i);
}
function Ye(e, t, n, r, i) {
	if (t == null) return;
	let a = P(t, i), s = a.length;
	for (let t = 0; t < s; t++) {
		let i = a[t], c = { ...r };
		typeof c.delay == "function" && (c.delay = c.delay(t, s));
		for (let t in n) {
			let r = n[t];
			Array.isArray(r) || (r = [r]);
			let a = { ...Pe(c, t) };
			a.duration &&= /* @__PURE__ */ o(a.duration), a.delay &&= /* @__PURE__ */ o(a.delay);
			let s = Me(i), l = je(t, a.pseudoElement || ""), u = s.get(l);
			u && u.stop(), e.push({
				map: s,
				key: l,
				unresolvedKeyframes: r,
				options: {
					...a,
					element: i,
					name: t,
					allowFlatten: !c.type && !c.ease
				}
			});
		}
	}
}
function Xe(e) {
	for (let t = 0; t < e.length; t++) {
		let { unresolvedKeyframes: n, options: r } = e[t], { element: i, name: a, pseudoElement: o } = r;
		!o && n[0] === null && (n[0] = V(i, a)), ve(n), Ie(n, a), !o && n.length < 2 && n.unshift(V(i, a)), r.keyframes = n;
	}
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let { map: r, key: i, options: a } = e[n], o = new Ee(a);
		r.set(i, o), o.finished.finally(() => r.delete(i)), t.push(o);
	}
	return t;
}
var Ze = /*@__PURE__*/ ((e) => {
	function t(t, n, r) {
		return new ke(Je(t, n, r, e));
	}
	return t;
})(), Qe = 50, H = () => ({
	current: 0,
	offset: [],
	progress: 0,
	scrollLength: 0,
	targetOffset: 0,
	targetLength: 0,
	containerLength: 0,
	velocity: 0
}), U = () => ({
	time: 0,
	x: H(),
	y: H()
}), W = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
}, G = /* @__PURE__ */ new WeakMap();
function $e(e, t) {
	let n = e === document.scrollingElement, r = n && document.body || e, i = G.get(r);
	i || G.set(r, i = getComputedStyle(r));
	let { writingMode: a, flexDirection: o } = i, s = t === "x" !== /^[vs]/.test(a);
	return (s ? i.direction === "rtl" != (a === "sideways-lr") : a.endsWith("rl")) !== (!n && i.display.includes("flex") && (s === (o[0] === "c") ? i.flexWrap : o).endsWith("reverse"));
}
function et(t, n, r, i) {
	let o = r[n], { length: s, position: l } = W[n], u = o.current, d = r.time, f = t[`scroll${l}`];
	o.current = $e(t, n) ? -f || 0 : f, o.containerLength = t[`client${s}`], o.targetLength = t[`scroll${s}`], o.scrollLength = o.targetLength - o.containerLength, o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = e(0, 1, /* @__PURE__ */ a(0, o.scrollLength, o.current));
	let p = i - d;
	o.velocity = p > Qe ? 0 : /* @__PURE__ */ c(o.current - u, p);
}
function tt(e, t, n) {
	for (let r in W) et(e, r, t, n);
	t.time = n;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var K = {
	start: 0,
	center: .5,
	end: 1
};
function q(e, t, n = 0) {
	let r = 0;
	if (e in K && (e = K[e]), typeof e == "string") {
		let t = parseFloat(e);
		e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t;
	}
	return typeof e == "number" && (r = t * e), n + r;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var nt = [0, 0];
function J(e, t, n, r) {
	let i = Array.isArray(e) ? e : nt, a = 0, o = 0;
	return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), i = e.includes(" ") ? e.split(" ") : [e, K[e] ? e : "0"]), a = q(i[0], n, r), o = q(i[1], t), a - o;
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var Y = { All: [[0, 0], [1, 1]] };
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
function rt(e, t) {
	let n = e.length - 1;
	if (n < 1) return 0;
	let r = e[0] > e[n], i = (t) => e[r ? n - t : t];
	if (e[0] === e[1] && t < i(0)) return +!!r;
	let o = 0;
	for (; o < n - 1 && t >= i(o + 1);) o++;
	let s = (o + /* @__PURE__ */ a(i(o), i(o + 1), t)) / n;
	return r ? 1 - s : s;
}
function it(t, { offset: n = Y.All }) {
	for (let r in W) {
		let i = t[r];
		i.offset.length = 0;
		for (let e = 0; e < n.length; e++) i.offset[e] = J(n[e], i.containerLength, i.targetLength, i.targetOffset);
		i.progress = e(0, 1, rt(i.offset, i.current));
	}
}
// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function at(e, t) {
	let n = {
		x: 0,
		y: 0
	}, r = e;
	for (; r && r !== t;) if (Le(r)) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
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
function ot(e) {
	return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function st(e, t, n, r = {}) {
	let { target: i } = r, a = i || r.offset;
	return {
		measure: (t) => {
			if (a) {
				n.time = t.time;
				for (let e in W) {
					let r = e, { offset: i } = n[r];
					Object.assign(n[r], t[r]), n[r].offset = i;
				}
				if (i && i !== e) {
					let t = at(i, e), r = ot(i);
					n.x.targetOffset = t.x, n.y.targetOffset = t.y, n.x.targetLength = r.width, n.y.targetLength = r.height;
				}
				it(n, r);
			}
		},
		notify: (e) => t(a ? n : e)
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var X = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), ct = (e) => e === document.scrollingElement ? window : e;
function lt(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...r } = {}) {
	if (!t) return i;
	let a = Q.get(t);
	a || (a = /* @__PURE__ */ new Set(), Q.set(t, a));
	let o = st(t, e, U(), r);
	if (a.add(o), !X.has(t)) {
		let e = U(), n = () => {
			tt(t, e, y.timestamp);
			for (let t of a) t.measure(e);
			C.preUpdate(r);
		}, r = () => {
			for (let t of a) t.notify(e);
		}, i = () => C.read(n);
		X.set(t, i);
		let o = ct(t);
		window.addEventListener("resize", i), t !== document.documentElement && Z.set(t, B(t, i)), o.addEventListener("scroll", i), i();
	}
	if (n && !$.has(t)) {
		let e = X.get(t), n = {
			width: t.scrollWidth,
			height: t.scrollHeight
		}, r = C.read(() => {
			let r = t.scrollWidth, i = t.scrollHeight;
			(n.width !== r || n.height !== i) && (e(), n.width = r, n.height = i);
		}, !0);
		$.set(t, r);
	}
	let s = X.get(t);
	return C.read(s, !1, !0), () => {
		w(s);
		let e = Q.get(t);
		if (!e || (e.delete(o), e.size)) return;
		Q.delete(t);
		let n = X.get(t);
		X.delete(t), n && (ct(t).removeEventListener("scroll", n), Z.get(t)?.(), window.removeEventListener("resize", n));
		let r = $.get(t);
		r && (w(r), $.delete(t));
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs
function ut(e) {
	return typeof window > "u" ? !1 : e ? xe() : D();
}
// node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs
var dt = /* @__PURE__ */ new Map();
function ft({ container: e, target: t, axis: n }) {
	let r = dt.get(e);
	r || (r = /* @__PURE__ */ new Map(), dt.set(e, r));
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
var pt = (e) => {
	if (/v/u.test(e)) return [];
	let t = J(e, 0, 0, 0);
	return [
		J(e, 0, 1, 0) - t,
		t - J(e, 1, 0, 0),
		t
	];
}, mt = ([e, t, n]) => !n && (t === 0 || t === 1) && `${t ? "entry" : "exit"}-crossing ${e * 100}%`;
function ht(e = Y.All) {
	if (e.length !== 2) return;
	let [t, n] = e.map(pt), r = [mt(t), mt(n)], i = n[0] - t[0], a = t[1] - n[1];
	if (r[0] && r[1] && (i || a)) return {
		points: r,
		a: i,
		b: a,
		cover: !t[0] && i === 1 && a === 1
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs
function gt(e, t) {
	let { target: n, container: r, axis: i } = t, a = n && ht(t.offset), o = ut(n) && (n ? !!a : !t.offset), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), l, u = !1, d = (e, t) => {
		let [n, r] = a.points;
		t.effect.updateTiming({ direction: u ? e === "normal" ? "reverse" : "alternate-reverse" : e }), Object.assign(t, {
			rangeStart: u ? r : n,
			rangeEnd: u ? n : r
		}), t.play();
	}, f = [e.attachTimeline({
		get timeline() {
			return o ? ft(t) : void 0;
		},
		onAttach: a && ((e) => {
			let t = e.effect.getTiming().direction;
			s.set(e, t), d(t, e);
		}),
		observe: (e) => (e.pause(), c.add(e), l ||= lt((e) => {
			c.forEach((t) => {
				t.time = t.iterationDuration * e[i].progress;
			});
		}, t), () => c.delete(e))
	})];
	if (o && a) {
		let { a: e, b: t } = a, o = i === "y" ? "clientHeight" : "clientWidth", c = () => {
			u !== (u = e * n[o] + t * r[o] < 0) && s.forEach(d);
		};
		c(), e * t < 0 && f.push(B(c), B([n, r], c));
	}
	return () => {
		f.forEach((e) => e()), l?.();
	};
}
// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function _t(e, { axis: t = "y", source: n, container: r = document.scrollingElement, ...a } = {}) {
	if (!r) return i;
	let o = {
		axis: t,
		container: n || r,
		...a
	};
	if (typeof e == "function") {
		let n = N(e);
		return M(lt((e) => n(e[t].progress, e), o));
	}
	return M(gt(e, o));
}
// node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var vt = {
	some: 0,
	all: 1
};
function yt(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
	let a = P(e);
	t = N(t);
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
		threshold: typeof i == "number" ? i : vt[i]
	});
	return a.forEach((e) => s.observe(e)), M(() => s.disconnect());
}
// tools/cinematic/motion-preference.js
var bt = "pugliai-motion-paused";
function xt() {
	try {
		return sessionStorage.getItem(bt) === "true";
	} catch {
		return !1;
	}
}
function St(e) {
	try {
		sessionStorage.setItem(bt, String(e));
	} catch {}
}
export { Ze as a, _t as i, St as n, qe as o, yt as r, xt as t };
