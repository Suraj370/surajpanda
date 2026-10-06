import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { Embers } from "./embers";

const links = [
  { label: "GitHub", handle: "Suraj370", href: "https://github.com/Suraj370" },
  { label: "LinkedIn", handle: "panda-suraj", href: "https://www.linkedin.com/in/panda-suraj/" },
  { label: "X", handle: "@surajpanda2077", href: "https://x.com/surajpanda2077" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-10 pt-32">
      <div className="glow drift left-1/2 top-10 size-[560px] -translate-x-1/2 bg-mist/60" />
      <div className="glow drift right-[-10%] top-[30%] size-[380px] bg-clay/15" style={{ animationDelay: "-8s" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-clay/20 via-clay/5 to-transparent" />
      <Embers className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 w-full" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="serif text-[clamp(3rem,9vw,8rem)] font-light leading-[0.95]">
            Let&apos;s build
            <br />
            <span className="italic text-clay">something good.</span>
          </h2>
          <a
            href="mailto:surajpanda2077@gmail.com"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-medium text-bg transition-all duration-500 hover:gap-4 hover:bg-sage"
          >
            surajpanda2077@gmail.com <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="spot group flex items-center justify-between rounded-2xl p-6"
            >
              <span>
                <span className="block font-medium">{l.label}</span>
                <span className="font-mono text-xs text-dim">{l.handle}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-clay"
              />
            </a>
          ))}
        </div>
        <footer className="mt-20 flex justify-between border-t border-line py-7 font-mono text-xs text-dim">
          <span>© {new Date().getFullYear()} Suraj Panda</span>
          <a href="#top" className="transition-colors hover:text-clay">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
