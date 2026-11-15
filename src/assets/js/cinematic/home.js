import { a as e, i as t, n, o as r, r as i, t as a } from "./motion-DrBrM923.js";
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
	}, h = a(), g = !1, _ = !0, v = !1, y = !1, b = !1, x = [], S = [], C = /* @__PURE__ */ new Map(), w = () => !h && !s.matches, T = () => w() && !document.hidden && _ && !y && (!u?.saveData || g);
	function E() {
		T() ? (v || (d.querySelectorAll("source").forEach((e) => {
			e.src = e.dataset.src;
		}), v = !0, d.load()), d.play().catch(() => {
			d.classList.remove("is-playing");
		})) : d.pause();
	}
	d.addEventListener("playing", () => d.classList.add("is-playing")), d.addEventListener("error", () => {
		y = !0, d.classList.remove("is-playing");
	});
	let D = new IntersectionObserver(([e]) => {
		_ = e.isIntersecting, S.forEach((e) => _ && w() && !document.hidden ? e.play() : e.pause()), E();
	}, { threshold: 0 });
	D.observe(p);
	function O(e) {
		for (let t of e) C.has(t) || C.set(t, t.getAttribute("style"));
	}
	function k(t, n, r = {}) {
		let i = typeof t == "string" ? [...document.querySelectorAll(t)] : t instanceof Element ? [t] : [...t];
		if (!i.length) return null;
		O(i);
		let a = e(i, n, r);
		return x.push(() => a.cancel()), a;
	}
	function A(e, n, r, i = ["start end", "end start"]) {
		let a = k(e, n, { ease: "linear" });
		a && x.push(t(a, {
			target: r,
			offset: i
		}));
	}
	function j() {
		x.reverse().forEach((e) => e()), x = [], S = [], o.dispatchEvent(new Event("scene-reset")), C.forEach((e, t) => {
			e === null ? t.removeAttribute("style") : t.setAttribute("style", e);
		}), C = /* @__PURE__ */ new Map(), document.querySelectorAll(".is-reading").forEach((e) => e.classList.remove("is-reading"));
	}
	function M() {
		j();
		let n = w();
		if (o.dataset.motion = n ? "active" : s.matches ? "reduced" : "paused", f.hidden = !1, f.disabled = s.matches, f.setAttribute("aria-pressed", String(!n)), f.querySelector(".motion-toggle-label").textContent = s.matches ? m.reduced : n ? m.pause : m.play, f.querySelector(".motion-toggle-icon").textContent = n ? "Ⅱ" : "▷", E(), !n || document.hidden) return;
		let a = l.matches, u = [
			.16,
			1,
			.3,
			1
		];
		window.scrollY < p.offsetHeight && k(".hero-enter", {
			opacity: [0, 1],
			y: [34, 0],
			filter: ["blur(8px)", "blur(0px)"]
		}, {
			duration: .9,
			delay: r(.1, { startDelay: .08 }),
			ease: u
		}), A(document.querySelector(".hero-media"), {
			y: [0, a ? 90 : 200],
			scale: [1.02, 1.22]
		}, p, ["start start", "end start"]), A(document.querySelector(".hero-content"), {
			y: [0, a ? -45 : -140],
			opacity: [1, 0]
		}, p, ["start start", "end start"]), A(document.querySelector(".hero-atmosphere"), {
			y: [0, -240],
			rotate: [0, 9],
			opacity: [.65, 0]
		}, p, ["start start", "end start"]), S.push(k(".light-thread", {
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
			delay: r(.6),
			ease: "easeInOut"
		})), S.push(k(".scroll-cue", { y: [
			0,
			7,
			0
		] }, {
			duration: 1.8,
			repeat: Infinity,
			ease: "easeInOut"
		})), _ || S.forEach((e) => e.pause());
		let d = k(".reading-progress", { scaleX: [0, 1] }, { ease: "linear" });
		x.push(t(d));
		let h = [...document.querySelectorAll(".reveal")].filter((e) => !e.matches(".intro-figure, .method-step, .contact-card"));
		x.push(i(h, (e) => {
			k(e, {
				opacity: [.15, 1],
				y: [42, 0]
			}, {
				duration: .75,
				ease: u
			});
		}, { margin: "0px 0px -45px 0px" }));
		let g = document.querySelector(".intro-figure");
		A(g, { transform: [
			`perspective(1400px) translateY(${a ? 24 : 65}px) rotateX(7deg) rotateY(-9deg) scale(.92)`,
			"perspective(1400px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)",
			"perspective(1400px) translateY(-25px) rotateX(-3deg) rotateY(3deg) scale(1)"
		] }, g, ["start 95%", "end 5%"]), A(g.querySelector("img"), {
			y: ["-5%", "5%"],
			scale: [1.15, 1.15]
		}, g);
		let v = document.querySelector(".human-story");
		A(v.querySelector(".story-image"), {
			y: [a ? -35 : -85, a ? 35 : 85],
			scale: [1.16, 1.16]
		}, v), A(v.querySelector(".story-copy"), { y: [35, -35] }, v);
		let y = document.querySelector(".contact-section");
		if (A(y, { transform: ["perspective(1500px) translateY(65px) rotateX(12deg) scale(.94)", "perspective(1500px) translateY(0px) rotateX(0deg) scale(1)"] }, y, ["start end", "start 30%"]), [...document.querySelectorAll(".method-step")].forEach((e, t) => {
			A(e, { transform: [`perspective(1200px) translateY(30px) rotateX(${a ? 3 : 9}deg) scale(.96)`, "perspective(1200px) translateY(0px) rotateX(0deg) scale(1)"] }, e, ["start 92%", "start 40%"]), x.push(i(e, () => (e.classList.add("is-reading"), () => e.classList.remove("is-reading")), { margin: "-15% 0px -35% 0px" })), e.style.setProperty("--step-index", t);
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
					delay: r(.055),
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
					delay: r(.22),
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
			x.push(i(e, () => {
				let e = k(t, n, r);
				return () => e?.cancel();
			}));
		}), !c.matches) return;
		let b = new AbortController(), C = {
			signal: b.signal,
			passive: !0
		};
		x.push(() => b.abort());
		function T(t, n, r, i = 0) {
			O([n]);
			let a = 0, o;
			t.addEventListener("pointermove", (s) => {
				cancelAnimationFrame(a), a = requestAnimationFrame(() => {
					let a = t.getBoundingClientRect(), c = (s.clientX - a.left) / a.width - .5, l = (s.clientY - a.top) / a.height - .5;
					o?.stop(), o = e(n, {
						rotateX: -l * r,
						rotateY: c * r,
						x: c * i,
						y: l * i
					}, {
						duration: .25,
						ease: "easeOut"
					});
				});
			}, C), t.addEventListener("pointerleave", () => {
				cancelAnimationFrame(a), o?.stop(), o = e(n, {
					rotateX: 0,
					rotateY: 0,
					x: 0,
					y: 0
				}, {
					duration: .4,
					ease: u
				});
			}, C), x.push(() => {
				cancelAnimationFrame(a), o?.stop();
			});
		}
		T(p, document.querySelector(".hero-content-depth"), 5, 14), T(g, g.querySelector(".image-window"), 10);
		let D = document.querySelector(".contact-card");
		T(D, D, 8), document.querySelectorAll(".workflow-demo, .product-visual").forEach((e) => T(e, e, 7));
	}
	f.addEventListener("click", () => {
		h = !h, n(h), g = !h, M();
	}), s.addEventListener("change", M), c.addEventListener("change", M), l.addEventListener("change", M), u?.addEventListener("change", M), document.addEventListener("visibilitychange", () => {
		b || M();
	}), window.addEventListener("pagehide", () => {
		b = !0, j(), d.pause(), D.disconnect();
	}), window.addEventListener("pageshow", (e) => {
		e.persisted && (b = !1, D.observe(p), M());
	}), M();
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
		y: [6, 0]
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
	t.innerHTML = `${f === 2 ? p ? "Restart" : "Ricomincia" : p ? "Next step" : "Passo successivo"} <span aria-hidden="true">${f === 2 ? "↺" : "→"}</span>`, l() && c(document.querySelector(".workflow-steps .is-current .step-icon"), { scale: [.94, 1] }, { duration: .2 });
}), document.querySelectorAll(".question-list details").forEach((e) => {
	e.addEventListener("toggle", () => {
		e.open && l() && c(e.querySelector(".answer"), {
			opacity: [0, 1],
			y: [-4, 0]
		}, { duration: .2 });
	});
}), document.querySelector("#year").textContent = String((/* @__PURE__ */ new Date()).getFullYear());
