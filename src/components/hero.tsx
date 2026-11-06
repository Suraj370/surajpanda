import { ArrowDown } from "lucide-react";
import { Rotator } from "./rotator";
import { SplitText } from "./split-text";
import { WeightText } from "./weight-text";
import { MagneticLink } from "./magnetic-link";

const ticker = [
  "Distributed systems",
  "LLM safety",
  "Go",
  "Raft",
  "Java",
  "Python",
  "TypeScript",
  "Kubernetes",
  "Text-to-SQL",
  "MCP",
];

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="hero-out relative z-10 mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-between px-6 pb-8 pt-28 sm:px-10">
        <div className="enter flex items-center justify-between" style={d(0)}>
          <p className="eyebrow flex items-center gap-3 !text-ink">
            <span className="live-dot" aria-hidden /> Open to work
          </p>
          <p className="eyebrow hidden sm:block">Backend · AI safety · Interfaces</p>
        </div>

        <h1 className="serif my-6 text-[clamp(5rem,min(24vw,28vh),18rem)]" aria-label="Suraj Panda">
          <WeightText text="Suraj" />
          <br />
          <SplitText text="Panda" load start={5} className="text-clay" />
        </h1>

        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="serif enter text-2xl sm:text-4xl" style={d(5)}>
              I make <Rotator words={["dependable backends", "safer AI", "calm interfaces", "distributed systems"]} />.
            </p>
            <p className="enter mt-5 max-w-[58ch] text-dim" style={d(6)}>
              I build dependable backend systems, safety tooling for AI, and interfaces that feel
              considered. Currently into distributed systems and making LLMs behave.
            </p>
          </div>
          <div className="enter flex flex-wrap items-center gap-3 lg:justify-end" style={d(7)}>
            <MagneticLink
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-7 py-4 text-sm font-medium text-bg transition-colors hover:bg-clay"
            >
              Resume
            </MagneticLink>
            <MagneticLink
              href="https://github.com/Suraj370"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-7 py-4 text-sm font-medium transition-colors hover:border-clay"
            >
              GitHub ↗
            </MagneticLink>
            <a href="#work" aria-label="Scroll to work" className="bob ml-2 hidden text-dim transition-colors hover:text-clay lg:block">
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="marquee-wrap enter relative z-10 border-y border-line py-3" style={d(10)} aria-hidden>
        <div className="marquee flex w-max gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-dim">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              {t} <span className="size-1 rounded-full bg-clay" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
