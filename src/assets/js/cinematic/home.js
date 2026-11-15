import { a as e, i as t, n, o as r, r as i, t as a } from "./motion-D0x9o2OA.js";
// tools/cinematic/scene-motion.js
function o() {
	let o = document.documentElement, s = matchMedia("(prefers-reduced-motion: reduce)"), c = matchMedia("(hover: hover) and (pointer: fine)"), l = matchMedia("(max-width: 700px)"), u = navigator.connection, d = document.querySelector(".hero-video"), f = document.querySelector(".motion-toggle"), p = document.querySelector(".hero"), m = o.lang === "en" ? {
		reduced: "Reduced motion",
		pause: "Pause effects",
		play: "Enable effects"
	} : {
		reduced: "Effetti ridotti",
		pause: "Pausa effetti",
		play: "Attiva effetti"
	}, h = a(), g = !1, _ = !0, v = !1, y = !1, b = !1, x = !1, S = !1, C = 0, w = [], T = [], E = /* @__PURE__ */ new Map(), D = () => !h && !s.matches, O = () => S && D() && !document.hidden && _ && !y && (!u?.saveData || g);
	function k() {
		O() ? (v || (d.querySelectorAll("source").forEach((e) => {
			e.src = l.matches && e.dataset.srcMobile || e.dataset.src;
		}), v = !0, d.load()), d.play().catch(() => {
			d.classList.remove("is-playing");
		})) : d.pause();
	}
	let A = () => {
		b || (C = requestAnimationFrame(() => {
			C = requestAnimationFrame(() => {
				S = !0, k();
			});
		}));
	}, j = document.querySelector(".hero-image");
	Promise.all([document.fonts.ready, j.decode().catch(() => {})]).then(A), d.addEventListener("playing", () => d.classList.add("is-playing")), d.addEventListener("error", () => {
		y = !0, d.classList.remove("is-playing");
	});
	let M = new IntersectionObserver(([e]) => {
		_ = e.isIntersecting, T.forEach((e) => _ && D() && !document.hidden ? e.play() : e.pause()), k();
	}, { threshold: 0 });
	M.observe(p);
	function N(e) {
		for (let t of e) E.has(t) || E.set(t, t.getAttribute("style"));
	}
	function P(t, n, r = {}) {
		let i = typeof t == "string" ? [...document.querySelectorAll(t)] : t instanceof Element ? [t] : [...t];
		if (!i.length) return null;
		N(i);
		let a = e(i, n, r);
		return w.push(() => a.cancel()), a;
	}
	function F(e, n, r, i = ["start end", "end start"]) {
		let a = P(e, n, { ease: "linear" });
		a && w.push(t(a, {
			target: r,
			offset: i
		}));
	}
	function I() {
		w.reverse().forEach((e) => e()), w = [], T = [], o.dispatchEvent(new Event("scene-reset")), E.forEach((e, t) => {
			e === null ? t.removeAttribute("style") : t.setAttribute("style", e);
		}), E = /* @__PURE__ */ new Map(), document.querySelectorAll(".is-reading").forEach((e) => e.classList.remove("is-reading"));
	}
	function L() {
		I();
		let n = D();
		if (o.dataset.motion = n ? "active" : s.matches ? "reduced" : "paused", f.hidden = !1, f.disabled = s.matches, f.setAttribute("aria-pressed", String(!n)), f.querySelector(".motion-toggle-label").textContent = s.matches ? m.reduced : n ? m.pause : m.play, f.querySelector(".motion-toggle-icon").textContent = n ? "Ⅱ" : "▷", k(), !n || document.hidden) return;
		let a = l.matches, u = [
			.16,
			1,
			.3,
			1
		];
		!x && window.scrollY < p.offsetHeight && (x = !0, P(".hero-enter", { transform: ["translateY(24px)", "translateY(0px)"] }, {
			duration: .9,
			delay: r(.1, { startDelay: .08 }),
			ease: u
		})), F(document.querySelector(".hero-media"), { transform: ["translateY(0px) scale(1.02)", `translateY(${a ? 90 : 200}px) scale(1.22)`] }, p, ["start start", "end start"]), F(document.querySelector(".hero-content"), {
			transform: ["translateY(0px)", `translateY(${a ? -45 : -140}px)`],
			opacity: [1, 0]
		}, p, ["start start", "end start"]), F(document.querySelector(".hero-atmosphere"), {
			transform: ["translateY(0px) rotate(0deg)", "translateY(-240px) rotate(9deg)"],
			opacity: [.65, 0]
		}, p, ["start start", "end start"]), document.querySelectorAll(".light-thread").forEach((e, t) => {
			let n = [
				60,
				65,
				72
			][t];
			T.push(P(e, {
				transform: [`translateX(-25px) rotate(${n}deg)`, `translateX(25px) rotate(${n}deg)`],
				opacity: [
					.1,
					.55,
					.1
				]
			}, {
				duration: 6,
				repeat: Infinity,
				repeatType: "reverse",
				delay: t * .6,
				ease: "easeInOut"
			}));
		}), T.push(P(".scroll-cue", { transform: [
			"translateY(0px)",
			"translateY(7px)",
			"translateY(0px)"
		] }, {
			duration: 1.8,
			repeat: Infinity,
			ease: "easeInOut"
		})), _ || T.forEach((e) => e.pause());
		let d = P(".reading-progress", { transform: ["scaleX(0)", "scaleX(1)"] }, { ease: "linear" });
		w.push(t(d));
		let h = [...document.querySelectorAll(".reveal")].filter((e) => !e.matches(".intro-figure, .method-step, .contact-card"));
		w.push(i(h, (e) => {
			P(e, {
				opacity: [.15, 1],
				transform: ["translateY(42px)", "translateY(0px)"]
			}, {
				duration: .75,
				ease: u
			});
		}, { margin: "0px 0px -45px 0px" }));
		let g = document.querySelector(".intro-figure");
		F(g, { transform: [
			`perspective(1400px) translateY(${a ? 24 : 65}px) rotateX(7deg) rotateY(-9deg) scale(.92)`,
			"perspective(1400px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)",
			"perspective(1400px) translateY(-25px) rotateX(-3deg) rotateY(3deg) scale(1)"
		] }, g, ["start 95%", "end 5%"]), F(g.querySelector("img"), { transform: ["translateY(-5%) scale(1.15)", "translateY(5%) scale(1.15)"] }, g);
		let v = document.querySelector(".human-story");
		F(v.querySelector(".story-image"), { transform: [`translateY(${a ? -35 : -85}px) scale(1.16)`, `translateY(${a ? 35 : 85}px) scale(1.16)`] }, v), F(v.querySelector(".story-copy"), { transform: ["translateY(35px)", "translateY(-35px)"] }, v);
		let y = document.querySelector(".contact-section");
		if (F(y, { transform: ["perspective(1500px) translateY(65px) rotateX(12deg) scale(.94)", "perspective(1500px) translateY(0px) rotateX(0deg) scale(1)"] }, y, ["start end", "start 30%"]), [...document.querySelectorAll(".method-step")].forEach((e, t) => {
			F(e, { transform: [`perspective(1200px) translateY(30px) rotateX(${a ? 3 : 9}deg) scale(.96)`, "perspective(1200px) translateY(0px) rotateX(0deg) scale(1)"] }, e, ["start 92%", "start 40%"]), w.push(i(e, () => (e.classList.add("is-reading"), () => e.classList.remove("is-reading")), { margin: "-15% 0px -35% 0px" })), e.style.setProperty("--step-index", t);
		}), [
			[
				".voice-visual",
				".voice-wave i",
				{ transform: [
					"scaleY(.3)",
					"scaleY(1)",
					"scaleY(.45)",
					"scaleY(.8)",
					"scaleY(.3)"
				] },
				{
					duration: 1.5,
					delay: r(.055),
					repeat: Infinity,
					ease: "easeInOut"
				}
			],
			[
				".knowledge-visual",
				".document-stack > span",
				{ transform: [
					"translateY(0px)",
					"translateY(-9px)",
					"translateY(0px)"
				] },
				{
					duration: 2.8,
					delay: r(.22),
					repeat: Infinity,
					ease: "easeInOut"
				}
			],
			[
				".mcp-visual",
				".connection-hub",
				{ transform: [
					"scale(1)",
					"scale(1.025)",
					"scale(1)"
				] },
				{
					duration: 2.5,
					repeat: Infinity,
					ease: "easeInOut"
				}
			]
		].forEach(([e, t, n, r]) => {
			w.push(i(e, () => {
				let e = P(t, n, r);
				return () => e?.cancel();
			}));
		}), !c.matches) return;
		let b = new AbortController(), S = {
			signal: b.signal,
			passive: !0
		};
		w.push(() => b.abort());
		function C(t, n, r, i = 0) {
			N([n]);
			let a = 0, o, s;
			t.addEventListener("pointerenter", () => {
				s = t.getBoundingClientRect();
			}, S), t.addEventListener("pointermove", (c) => {
				cancelAnimationFrame(a), a = requestAnimationFrame(() => {
					s ||= t.getBoundingClientRect();
					let a = (c.clientX - s.left) / s.width - .5, l = (c.clientY - s.top) / s.height - .5;
					o?.stop(), o = e(n, { transform: `translate(${a * i}px, ${l * i}px) rotateX(${-l * r}deg) rotateY(${a * r}deg)` }, {
						duration: .25,
						ease: "easeOut"
					});
				});
			}, S), t.addEventListener("pointerleave", () => {
				cancelAnimationFrame(a), s = null, o?.stop(), o = e(n, { transform: "translate(0px, 0px) rotateX(0deg) rotateY(0deg)" }, {
					duration: .4,
					ease: u
				});
			}, S), w.push(() => {
				cancelAnimationFrame(a), o?.stop();
			});
		}
		C(p, document.querySelector(".hero-content-depth"), 5, 14), C(g, g.querySelector(".image-window"), 10);
		let E = document.querySelector(".contact-card");
		C(E, E, 8), document.querySelectorAll(".workflow-demo, .product-visual").forEach((e) => C(e, e, 7));
	}
	f.addEventListener("click", () => {
		h = !h, n(h), g = !h, L();
	}), s.addEventListener("change", L), c.addEventListener("change", L), l.addEventListener("change", L), u?.addEventListener("change", L), document.addEventListener("visibilitychange", () => {
		b || L();
	}), window.addEventListener("pagehide", () => {
		b = !0, cancelAnimationFrame(C), I(), d.pause(), M.disconnect();
	}), window.addEventListener("pageshow", (e) => {
		e.persisted && (h = a(), b = !1, M.observe(p), S || A(), L());
	}), L();
}
// tools/cinematic/home.js
var s = /* @__PURE__ */ new Set();
function c(...t) {
	let n = e(...t);
	return s.add(n), n.then(() => s.delete(n)), n;
}
document.documentElement.addEventListener("scene-reset", () => {
	s.forEach((e) => e.cancel()), s.clear();
});
var l = () => document.documentElement.dataset.motion === "active";
o();
var u = [...document.querySelectorAll("[role=\"tab\"]")];
function d(e, t = !1) {
	u.forEach((t) => {
		let n = t === e;
		t.setAttribute("aria-selected", String(n)), t.tabIndex = n ? 0 : -1, document.getElementById(t.getAttribute("aria-controls")).hidden = !n;
	}), t && e.focus({ preventScroll: !0 });
	let n = e.parentElement, r = e.offsetLeft - n.offsetLeft;
	(r < n.scrollLeft || r + e.offsetWidth > n.scrollLeft + n.clientWidth) && n.scrollTo({
		left: Math.max(0, r - 12),
		behavior: l() ? "smooth" : "instant"
	}), l() && c(document.getElementById(e.getAttribute("aria-controls")), {
		opacity: [0, 1],
		transform: ["translateY(6px)", "translateY(0px)"]
	}, {
		duration: .22,
		ease: "easeOut"
	});
}
u.forEach((e, t) => {
	e.addEventListener("click", () => d(e)), e.addEventListener("keydown", (e) => {
		let n;
		e.key === "ArrowRight" && (n = (t + 1) % u.length), e.key === "ArrowLeft" && (n = (t - 1 + u.length) % u.length), e.key === "Home" && (n = 0), e.key === "End" && (n = u.length - 1), n !== void 0 && (e.preventDefault(), d(u[n], !0));
	});
});
var f = 0, p = document.documentElement.lang === "en", m = p ? [
	"The information becomes a draft to review.",
	"The team reviews and decides what happens next.",
	"The process starts with a request."
] : [
	"Le informazioni diventano una bozza da verificare.",
	"Il team verifica e decide come procedere.",
	"Il processo parte dalla richiesta."
];
document.querySelector(".demo-next").addEventListener("click", () => {
	let e = m[f];
	f = (f + 1) % 3, document.querySelectorAll(".workflow-steps li").forEach((e, t) => {
		e.classList.toggle("is-current", t === f), e.classList.toggle("is-complete", t < f);
	}), document.querySelector(".demo-status").textContent = `0${f + 1} / 03`, document.querySelector("#demo-live").textContent = e;
	let t = document.querySelector(".demo-next");
	t.innerHTML = `${f === 2 ? p ? "Restart" : "Ricomincia" : p ? "Next step" : "Passo successivo"} <span aria-hidden="true">${f === 2 ? "↺" : "→"}</span>`, l() && c(document.querySelector(".workflow-steps .is-current .step-icon"), { transform: ["scale(.94)", "scale(1)"] }, { duration: .2 });
}), document.querySelectorAll(".question-list details").forEach((e) => {
	e.addEventListener("toggle", () => {
		e.open && l() && c(e.querySelector(".answer"), {
			opacity: [0, 1],
			transform: ["translateY(-4px)", "translateY(0px)"]
		}, { duration: .2 });
	});
}), document.querySelector("#year").textContent = String((/* @__PURE__ */ new Date()).getFullYear());
