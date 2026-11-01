"use client";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/** Section links with a pill that slides to whichever section is in view. */
export function NavLinks() {
  const [active, setActive] = useState<string | null>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });
    const top = document.getElementById("top");
    const topIo = new IntersectionObserver(([e]) => e.isIntersecting && setActive(null), {
      rootMargin: "-45% 0px -50% 0px",
    });
    if (top) topIo.observe(top);
    return () => {
      io.disconnect();
      topIo.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = active ? refs.current[active] : null;
    setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
  }, [active]);

  return (
    <div className="relative hidden items-center gap-8 md:flex lg:gap-12">
      <span
        aria-hidden
        className="pill absolute bottom-0 h-px bg-clay"
        style={{ left: pill?.left ?? 0, width: pill?.width ?? 0, opacity: pill ? 1 : 0 }}
      />
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          ref={(el) => {
            refs.current[l.href] = el;
          }}
          aria-current={active === l.href ? "true" : undefined}
          className="relative py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-dim transition-colors hover:text-ink aria-[current]:text-ink"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
