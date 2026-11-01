"use client";
import { useEffect, useRef } from "react";

/**
 * Letters rise in on load, ripple through font weights while idle (CSS), and swell toward
 * the cursor as it approaches (variable-font weight). Skipped for touch and reduced motion.
 */
export function WeightText({ text, className = "" }: { text: string; className?: string }) {
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const letters = Array.from(el.querySelectorAll<HTMLElement>(".w"));
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.classList.add("tracking");
        for (const l of letters) {
          const r = l.getBoundingClientRect();
          const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
          const k = Math.max(0, 1 - d / 320);
          l.style.fontWeight = String(Math.round(550 + k * k * 300));
        }
      });
    };
    const onLeave = () => {
      el.classList.remove("tracking");
      letters.forEach((l) => (l.style.fontWeight = ""));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <span ref={root} className={`split load wt ${className}`} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="w" aria-hidden style={{ "--i": i } as React.CSSProperties}>
          <span style={{ "--i": i } as React.CSSProperties}>{ch}</span>
        </span>
      ))}
    </span>
  );
}
