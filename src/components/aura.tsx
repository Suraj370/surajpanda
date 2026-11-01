"use client";
import { useEffect } from "react";

/** Scroll progress bar. */
export function Aura() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="thread" aria-hidden />;
}
