"use client";
import { useEffect, useRef } from "react";

const RAMP = " .,:;-~=+*#%@";

/** An orb shaded with text characters (Canvas UI "Asciify"-style), lit by a slowly turning light. */
export function AsciiOrb({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cols = 56;
    const rows = 28;
    let w = 0;
    let h = 0;
    let visible = true;
    let raf = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = time / 1000;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      ctx.clearRect(0, 0, w, h);
      const cw = w / cols;
      const ch = h / rows;
      ctx.font = `${ch * 0.95}px ui-monospace, "JetBrains Mono", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const lx = Math.cos(t * 0.35) * 0.8 + pointer.x * 0.9;
      const ly = Math.sin(t * 0.27) * 0.5 - 0.35 + pointer.y * 0.9;
      const lz = 0.7;
      const ll = Math.hypot(lx, ly, lz);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // normalised coordinates, corrected for the character cell aspect ratio
          const x = ((c + 0.5) / cols) * 2 - 1;
          const y = (((r + 0.5) / rows) * 2 - 1) * (h / w) * (cols / rows) * 0.5 * 2;
          // soft breathing surface wobble
          const wob = 1 + 0.045 * Math.sin(x * 4 + t * 1.1) * Math.cos(y * 3.5 - t * 0.9);
          const d2 = (x * x + y * y) / (0.8 * 0.8 * wob * wob);
          if (d2 > 1) continue;
          const z = Math.sqrt(1 - d2);
          const nx = x / 0.8 / wob;
          const ny = y / 0.8 / wob;
          const light = Math.max(0, (nx * lx + ny * ly + z * lz) / ll);
          const rim = Math.pow(1 - z, 3) * 0.25;
          const v = Math.min(1, light * 0.95 + rim);
          const ch_ = RAMP[Math.min(RAMP.length - 1, Math.floor(v * RAMP.length))];
          if (ch_ === " ") continue;
          // sage in shadow, warming to clay where the light lands
          const warm = Math.max(0, v - 0.55) / 0.45;
          const rC = Math.round(63 + (192 - 63) * warm);
          const gC = Math.round(100 + (105 - 100) * warm);
          const bC = Math.round(94 + (75 - 94) * warm);
          ctx.fillStyle = `rgba(${rC},${gC},${bC},${0.35 + v * 0.65})`;
          ctx.fillText(ch_, c * cw + cw / 2, r * ch + ch / 2);
        }
      }
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };

    resize();
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    window.addEventListener("resize", resize);

    if (reduced) {
      draw(2000);
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
