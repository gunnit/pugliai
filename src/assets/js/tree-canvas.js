/* =====================================================================
   PUGLIAI — Living Olive Tree canvas
   A procedural, animated olive tree drawn in the brand's orthogonal
   "circuit-trace" style: roots -> trunk -> branches -> glowing AI nodes.
   Grows on load, then breathes: nodes pulse, data flows up the branches,
   and the canopy wires itself into a neural network.
   ===================================================================== */
(function () {
  'use strict';

  // ---- brand palette ----
  const C = {
    green: [27, 144, 50],
    green4: [52, 177, 76],
    blue: [19, 92, 169],
    blue4: [62, 132, 203],
    blue2: [169, 200, 230],
    ink: [11, 26, 45],
  };
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  const lerp = (a, b, t) => a + (b - a) * t;
  const lerpC = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

  // seeded RNG so the tree is stable across resizes
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  class OliveTree {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.t0 = performance.now();
      this.pulses = [];
      this.mouse = { x: 0.5, y: 0.4, tx: 0.5, ty: 0.4 };
      this.cfg = {
        intensity: 7,
        accent: 'balanced', // 'blue' | 'green' | 'balanced'
        density: 1,
        flow: true,
        network: true,
      };
      this._raf = null;
      this._onResize = this.resize.bind(this);
      window.addEventListener('resize', this._onResize);
      if ('ResizeObserver' in window) {
        this._ro = new ResizeObserver(() => this.resize());
        this._ro.observe(canvas);
      }
      window.addEventListener('load', this._onResize);
      window.addEventListener('mousemove', (e) => {
        this.mouse.tx = e.clientX / window.innerWidth;
        this.mouse.ty = e.clientY / window.innerHeight;
      });
      this.resize();
      this.start();
    }

    setConfig(patch) {
      const prevDensity = this.cfg.density;
      Object.assign(this.cfg, patch);
      if (patch.density !== undefined && patch.density !== prevDensity) this.build();
    }

    resize() {
      const r = this.canvas.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return; // layout not ready yet
      this.w = Math.max(1, r.width);
      this.h = Math.max(1, r.height);
      this.canvas.width = Math.round(this.w * this.dpr);
      this.canvas.height = Math.round(this.h * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.build();
    }

    // ---- procedural generation: orthogonal circuit-tree ----
    build() {
      const rnd = mulberry32(1337);
      const W = this.w, H = this.h;
      // scale the tree to the canvas; anchor near bottom, in the open right area
      const baseX = W < 920 ? W * 0.5 : W * 0.66;
      const baseY = H * 0.99;
      const unit = Math.min(W * 0.82, H) * 0.55; // overall scale
      const segs = [];
      const nodes = [];
      const leafPaths = [];

      const maxDepth = 5;
      const self = this;

      // grow a branch: rise vertically, then optionally split into children
      function grow(x, y, dirX, depth, parentChain, dist) {
        // vertical-ish rise (with a small lateral drift for the trunk -> organic)
        const rise = unit * (0.30 - depth * 0.035) * (0.85 + rnd() * 0.3);
        const drift = depth === 0 ? (dirX * unit * 0.05) : 0;
        const x2 = x + drift;
        const y2 = y - rise;
        const seg = { x1: x, y1: y, x2, y2, depth, d0: dist, d1: dist + Math.hypot(x2 - x, y2 - y) };
        segs.push(seg);
        const chain = parentChain.concat(seg);
        let endDist = seg.d1;

        if (depth >= maxDepth) {
          nodes.push({ x: x2, y: y2, depth, leaf: true, phase: rnd() * Math.PI * 2, r: lerp(3.4, 2.2, depth / maxDepth) });
          leafPaths.push(chain);
          return;
        }

        // number of children shrinks with depth
        let nChildren = depth === 0 ? 2 : (rnd() < (0.62 - depth * 0.06) ? 2 : 1);
        if (depth >= 3 && rnd() < 0.28) nChildren = 1;

        // junction node (smaller, structural)
        if (depth >= 1) {
          nodes.push({ x: x2, y: y2, depth, leaf: false, phase: rnd() * Math.PI * 2, r: lerp(2.2, 1.3, depth / maxDepth) });
        }

        const spread = unit * (0.20 - depth * 0.022) * (0.8 + rnd() * 0.5);
        for (let i = 0; i < nChildren; i++) {
          let cdir;
          if (nChildren === 2) cdir = i === 0 ? -1 : 1;
          else cdir = rnd() < 0.5 ? -1 : 1;
          // bias outward from the trunk center
          const outward = x2 < baseX ? -1 : 1;
          if (nChildren === 1) cdir = rnd() < 0.7 ? outward : -outward;

          const hx = x2 + cdir * spread * (0.7 + rnd() * 0.6);
          // horizontal trace segment (the circuit look)
          const hseg = { x1: x2, y1: y2, x2: hx, y2: y2, depth: depth + 1, d0: endDist, d1: endDist + Math.abs(hx - x2) };
          segs.push(hseg);
          const hChain = chain.concat(hseg);
          grow(hx, y2, cdir, depth + 1, hChain, hseg.d1);
        }
      }

      // two trunks rising from a shared root (echoes the brand mark)
      const trunkGap = unit * 0.06;
      grow(baseX - trunkGap, baseY, -1, 0, [], 0);
      grow(baseX + trunkGap, baseY, 1, 0, [], 0);

      // roots: a few short descending traces with green nodes
      const roots = [];
      const nRoots = 5;
      for (let i = 0; i < nRoots; i++) {
        const a = (i / (nRoots - 1) - 0.5);
        const rx = baseX + a * unit * 0.5;
        const ry = baseY + unit * (0.05 + Math.abs(a) * 0.12) + rnd() * 8;
        roots.push({ x1: baseX, y1: baseY, x2: rx, y2: ry });
      }

      // total distance for growth front
      let maxDist = 0;
      for (const s of segs) maxDist = Math.max(maxDist, s.d1);

      this.geo = { segs, nodes, leafPaths, roots, baseX, baseY, unit, maxDist };
      // seed a few pulses spread along the timeline
      this.pulses = [];
    }

    accentFor(depth, maxDepth) {
      // roots greener, canopy bluer; accent tweak shifts the balance
      let t = depth / 5;
      if (this.cfg.accent === 'blue') t = Math.min(1, t + 0.45);
      else if (this.cfg.accent === 'green') t = Math.max(0, t - 0.35);
      return lerpC(C.green4, C.blue4, Math.min(1, Math.max(0, t)));
    }

    spawnPulse() {
      const lp = this.geo.leafPaths;
      if (!lp.length) return;
      const path = lp[(Math.random() * lp.length) | 0];
      // total length of this path
      let len = 0;
      for (const s of path) len += Math.hypot(s.x2 - s.x1, s.y2 - s.y1);
      this.pulses.push({ path, len, pos: 0, speed: (0.9 + Math.random() * 0.7), col: this.accentFor(5, 5) });
    }

    start() {
      const loop = (now) => {
        this._raf = requestAnimationFrame(loop);
        this.draw(now);
      };
      this._raf = requestAnimationFrame(loop);
    }

    draw(now) {
      const ctx = this.ctx, g = this.geo;
      if (!g) return;
      const W = this.w, H = this.h;
      const time = (now - this.t0) / 1000;
      ctx.clearRect(0, 0, W, H);

      const I = this.cfg.intensity / 7; // normalized intensity
      // growth front: 0 -> maxDist over ~2.4s, ease-out
      const growT = Math.min(1, time / 2.4);
      const ease = 1 - Math.pow(1 - growT, 3);
      const front = ease * g.maxDist * 1.02;

      // smooth mouse parallax
      this.mouse.x += (this.mouse.tx - this.mouse.x) * 0.05;
      this.mouse.y += (this.mouse.ty - this.mouse.y) * 0.05;
      const px = (this.mouse.x - 0.5) * 18;
      const py = (this.mouse.y - 0.5) * 10;
      ctx.save();
      ctx.translate(px, py);

      // ---------- roots ----------
      const rootReveal = Math.min(1, time / 1.0);
      ctx.lineCap = 'round';
      for (const r of g.roots) {
        ctx.strokeStyle = rgba(C.green, 0.18 * rootReveal);
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(r.x1, r.y1);
        ctx.lineTo(lerp(r.x1, r.x2, rootReveal), lerp(r.y1, r.y2, rootReveal));
        ctx.stroke();
      }

      // ---------- branches ----------
      for (const s of g.segs) {
        if (front <= s.d0) continue;
        const localT = Math.min(1, (front - s.d0) / Math.max(0.001, s.d1 - s.d0));
        const ex = lerp(s.x1, s.x2, localT);
        const ey = lerp(s.y1, s.y2, localT);
        const col = this.accentFor(s.depth, 5);
        const baseA = lerp(0.5, 0.16, s.depth / 5);
        ctx.strokeStyle = rgba(col, baseA);
        ctx.lineWidth = lerp(3.4, 0.9, s.depth / 5);
        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        // glow at the growing tip
        if (localT < 1 && growT < 1) {
          ctx.save();
          ctx.shadowColor = rgba(col, 0.9);
          ctx.shadowBlur = 12;
          ctx.fillStyle = rgba(col, 0.9);
          ctx.beginPath(); ctx.arc(ex, ey, 1.6, 0, 7); ctx.fill();
          ctx.restore();
        }
      }

      // ---------- neural canopy: wire nearby leaf nodes ----------
      const revealedNodes = g.nodes.filter(n => front >= n.d1ish ? true : true && front >= 0);
      // precompute which nodes are revealed (front passed their position)
      const live = [];
      for (const n of g.nodes) {
        // node revealed when growth front passes its branch end
        if (front >= (n._d == null ? (n._d = nearestDist(g, n)) : n._d)) live.push(n);
      }
      if (this.cfg.network) {
        const R = g.unit * 0.16;
        ctx.lineWidth = 0.7;
        for (let i = 0; i < live.length; i++) {
          const a = live[i];
          if (!a.leaf) continue;
          for (let j = i + 1; j < live.length; j++) {
            const b = live[j];
            if (!b.leaf) continue;
            const dx = a.x - b.x, dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 > R * R) continue;
            const d = Math.sqrt(d2);
            const flick = 0.5 + 0.5 * Math.sin(time * 1.5 + a.phase + b.phase);
            const aA = (1 - d / R) * 0.16 * flick * I;
            if (aA < 0.012) continue;
            ctx.strokeStyle = rgba(C.blue2, aA);
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // ---------- nodes ----------
      for (const n of live) {
        const col = n.leaf ? this.accentFor(5, 5) : this.accentFor(n.depth, 5);
        const pulse = 0.5 + 0.5 * Math.sin(time * (n.leaf ? 1.7 : 1.1) + n.phase);
        const r = n.r * (0.8 + pulse * 0.35);
        const glow = n.leaf ? (10 + pulse * 14 * I) : (4 + pulse * 4);
        ctx.save();
        ctx.shadowColor = rgba(col, 0.9);
        ctx.shadowBlur = glow;
        ctx.fillStyle = rgba(col, n.leaf ? 0.95 : 0.7);
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, 7); ctx.fill();
        ctx.restore();
        if (n.leaf) {
          ctx.fillStyle = rgba([255, 255, 255], 0.85 * pulse);
          ctx.beginPath(); ctx.arc(n.x, n.y, r * 0.4, 0, 7); ctx.fill();
        }
      }

      // ---------- data pulses flowing up ----------
      if (this.cfg.flow && growT > 0.55) {
        const rate = 0.5 * I;
        if (Math.random() < rate * 0.4 && this.pulses.length < 26 * I) this.spawnPulse();
        for (let k = this.pulses.length - 1; k >= 0; k--) {
          const p = this.pulses[k];
          p.pos += p.speed * g.unit * 0.006;
          if (p.pos >= p.len) { this.pulses.splice(k, 1); continue; }
          const pt = pointAlong(p.path, p.pos);
          if (!pt) continue;
          ctx.save();
          ctx.shadowColor = rgba(p.col, 1);
          ctx.shadowBlur = 10;
          ctx.fillStyle = rgba([220, 240, 255], 0.95);
          ctx.beginPath(); ctx.arc(pt.x, pt.y, 1.7, 0, 7); ctx.fill();
          ctx.restore();
          // trailing
          const tail = pointAlong(p.path, Math.max(0, p.pos - g.unit * 0.04));
          if (tail) {
            ctx.strokeStyle = rgba(p.col, 0.35);
            ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(tail.x, tail.y); ctx.lineTo(pt.x, pt.y); ctx.stroke();
          }
        }
      }

      ctx.restore();
    }

    destroy() {
      cancelAnimationFrame(this._raf);
      window.removeEventListener('resize', this._onResize);
    }
  }

  // distance from root to the END of a node (find the segment whose endpoint matches)
  function nearestDist(g, n) {
    let best = Infinity, bestD = 0;
    for (const s of g.segs) {
      const dx = s.x2 - n.x, dy = s.y2 - n.y;
      const d = dx * dx + dy * dy;
      if (d < best) { best = d; bestD = s.d1; }
    }
    return bestD;
  }

  function pointAlong(path, dist) {
    let acc = 0;
    for (const s of path) {
      const segLen = Math.hypot(s.x2 - s.x1, s.y2 - s.y1);
      if (acc + segLen >= dist) {
        const t = (dist - acc) / Math.max(0.001, segLen);
        return { x: lerp(s.x1, s.x2, t), y: lerp(s.y1, s.y2, t) };
      }
      acc += segLen;
    }
    return null;
  }

  window.OliveTree = OliveTree;
})();
