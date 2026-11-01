"use client";
import { useEffect, useRef } from "react";

/**
 * A ring that follows the pointer on a spring and snaps onto links and buttons,
 * leaning slightly toward the pointer. Only for fine pointers without reduced motion.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    const cur = { x: -100, y: -100, w: 28, h: 28, r: 14 };
    const tgt = { ...cur };
    let raf = 0;

    const tick = () => {
      cur.x += (tgt.x - cur.x) * 0.22;
      cur.y += (tgt.y - cur.y) * 0.22;
      cur.w += (tgt.w - cur.w) * 0.2;
      cur.h += (tgt.h - cur.h) * 0.2;
      cur.r += (tgt.r - cur.r) * 0.2;
      el.style.width = `${cur.w}px`;
      el.style.height = `${cur.h}px`;
      el.style.borderRadius = `${cur.r}px`;
      el.style.transform = `translate3d(${cur.x - cur.w / 2}px, ${cur.y - cur.h / 2}px, 0)`;
      const settled = Math.abs(tgt.x - cur.x) + Math.abs(tgt.y - cur.y) + Math.abs(tgt.w - cur.w) + Math.abs(tgt.h - cur.h) < 0.3;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      el.dataset.on = "1";
      const hit = (e.target as Element | null)?.closest<HTMLElement>("a, button, [data-cursor]");
      if (hit) {
        const r = hit.getBoundingClientRect();
        // big surfaces (cards) just get the plain ring, small controls get snapped to
        if (r.width < 420 && r.height < 140) {
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          tgt.x = cx + (e.clientX - cx) * 0.18;
          tgt.y = cy + (e.clientY - cy) * 0.18;
          tgt.w = r.width + 14;
          tgt.h = r.height + 14;
          tgt.r = Math.min(parseFloat(getComputedStyle(hit).borderTopLeftRadius) + 7 || 14, tgt.h / 2);
          el.dataset.lock = "1";
          kick();
          return;
        }
      }
      delete el.dataset.lock;
      Object.assign(tgt, { x: e.clientX, y: e.clientY, w: 28, h: 28, r: 14 });
      if (cur.x < 0) Object.assign(cur, { x: e.clientX, y: e.clientY });
      kick();
    };
    const down = () => (el.dataset.down = "1");
    const up = () => delete el.dataset.down;
    const leave = () => delete el.dataset.on;

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden />;
}
