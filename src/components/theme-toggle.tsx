"use client";
import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";

/** Light/dark switch. The initial theme is set by an inline script in the layout, so there is no flash. */
export function ThemeToggle() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.setAttribute("aria-checked", String(document.documentElement.dataset.theme === "dark"));
  }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
      ref.current?.setAttribute("aria-checked", String(next === "dark"));
    };

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }
    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() =>
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)", pseudoElement: "::view-transition-new(root)" },
      ),
    );
  };

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked="false"
      aria-label="Dark mode"
      onClick={toggle}
      className="theme-toggle grid size-11 place-items-center rounded-full text-dim transition-colors hover:bg-mist hover:text-ink"
    >
      <Sun size={17} className="sun" aria-hidden />
      <Moon size={17} className="moon" aria-hidden />
    </button>
  );
}
