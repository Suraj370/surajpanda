"use client";
import { useEffect, useRef } from "react";

type Spark = { x: number; y: number; vy: number; size: number; layer: number; phase: number; life: number };

type Props = {
  className?: string;
  /** number of depth layers (parallax) */
  layers?: number;
  /** sparks per layer, scaled by width */
  density?: number;
  speed?: number;
  /** spark colour as [r, g, b] in 0-255 */
  color?: [number, number, number];
  /** 0 disables smoke */
  smoke?: number;
};

/** A gentle take on Canvas UI "Blaze": embers and smoke drifting up from the bottom edge. */
export function Embers({
  className = "",
  layers = 4,
  density = 14,
  speed = 1,
  color = [192, 105, 75],
  smoke = 0.5,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const [cr, cg, cb] = color;
    let w = 0;
    let h = 0;
    let visible = false;
    let raf = 0;
    let sparks: Spark[] = [];
    let puffs: { x: number; y: number; r: number; v: number }[] = [];

    const spawn = (layer: number, anywhere: boolean, x?: number, y?: number): Spark => ({
      x: x ?? Math.random() * w,
      y: y ?? (anywhere ? Math.random() * h : h + 10),
      vy: (0.12 + Math.random() * 0.25) * (0.5 + layer / layers),
      size: (0.8 + Math.random() * 1.6) * (0.6 + layer / layers),
      layer,
      phase: Math.random() * Math.PI * 2,
      life: 0.5 + Math.random() * 0.5,
    });

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const perLayer = Math.max(6, Math.round((w / 1000) * density));
      sparks = Array.from({ length: layers * perLayer }, (_, i) => spawn(i % layers, true));
      puffs = Array.from({ length: 5 }, (_, i) => ({
        x: (i / 4) * w,
        y: h * (0.7 + Math.random() * 0.4),
        r: 140 + Math.random() * 120,
        v: 0.05 + Math.random() * 0.06,
      }));
    };

    const draw = (time: number) => {
      const t = time / 1000;
      ctx.clearRect(0, 0, w, h);

      if (smoke > 0) {
        for (const p of puffs) {
          p.y -= p.v * speed;
          if (p.y < h * 0.35) p.y = h * 1.1;
          const fade = Math.max(0, 1 - Math.abs(p.y - h * 0.8) / (h * 0.55));
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
          g.addColorStop(0, `rgba(${cr},${cg},${cb},${0.1 * smoke * fade})`);
          g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
          ctx.fillStyle = g;
          ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
        }
      }

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.y -= s.vy * speed * 1.4;
        const x = s.x + Math.sin(t * 0.8 + s.phase) * 14 * (s.layer / layers + 0.3);
        const rise = 1 - s.y / h;
        if (s.y < -10 || rise > s.life + 0.45) {
          sparks[i] = spawn(s.layer, false);
          continue;
        }
        const alpha = Math.max(0, Math.min(1, (1 - rise / (s.life + 0.45)) * 1.2)) * (0.35 + 0.5 * (s.layer / layers));
        ctx.beginPath();
        ctx.arc(x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
        ctx.shadowColor = `rgba(${cr},${cg},${cb},${alpha})`;
        ctx.shadowBlur = s.size * 4;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      raf = requestAnimationFrame(loop);
    };

    // a gentle nudge: sparks lift off wherever the cursor passes through
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x < 0 || y < 0 || x > w || y > h || Math.random() > 0.15) return;
      sparks[Math.floor(Math.random() * sparks.length)] = spawn(layers - 1, false, x, y);
    };

    setup();
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    window.addEventListener("resize", setup);

    if (reduced) {
      visible = true;
      draw(4000);
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", setup);
      window.removeEventListener("pointermove", onMove);
    };
  }, [layers, density, speed, color, smoke]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
