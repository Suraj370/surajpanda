"use client";
import { useRef } from "react";

/** Anchor that leans toward the cursor. No-op for touch and reduced-motion users. */
export function MagneticLink({
  className = "",
  strength = 0.25,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { strength?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const enabled = () =>
    window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches;

  return (
    <a
      ref={ref}
      className={`magnetic ${className}`}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || !enabled()) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.translate = `${x}px ${y}px`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.translate = "";
      }}
      {...props}
    />
  );
}
