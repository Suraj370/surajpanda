"use client";
import { useEffect } from "react";

/** Cursor aura, per-card spotlight coordinates and a scroll progress thread. */
export function Aura() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--ax", `${e.clientX}px`);
        root.style.setProperty("--ay", `${e.clientY}px`);
        const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(".spot");
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
      });
    };

    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="thread" aria-hidden />
      <div className="aura" aria-hidden />
    </>
  );
}
