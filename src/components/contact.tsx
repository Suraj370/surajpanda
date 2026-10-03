import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const links = [
  { label: "GitHub", handle: "Suraj370", href: "https://github.com/Suraj370" },
  { label: "LinkedIn", handle: "panda-suraj", href: "https://www.linkedin.com/in/panda-suraj/" },
  { label: "X", handle: "@surajpanda2077", href: "https://x.com/surajpanda2077" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-10 pt-32">
      <div className="glow left-1/2 top-10 size-[500px] -translate-x-1/2 bg-violet/20" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="serif text-[clamp(3rem,9vw,8rem)] font-light leading-[0.95]">
            Let&apos;s build
            <br />
            <span className="italic text-amber">something good.</span>
          </h2>
          <a
            href="mailto:surajpanda2077@gmail.com"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-medium text-bg transition-colors hover:bg-amber"
          >
            surajpanda2077@gmail.com <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-bg p-6 transition-colors hover:bg-surface"
            >
              <span>
                <span className="block font-medium">{l.label}</span>
                <span className="font-mono text-xs text-dim">{l.handle}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-dim transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber"
              />
            </a>
          ))}
        </div>
        <footer className="mt-20 flex justify-between border-t border-line py-7 font-mono text-xs text-dim">
          <span>© {new Date().getFullYear()} Suraj Panda</span>
          <a href="#top" className="hover:text-amber">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
