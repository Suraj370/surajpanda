import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="glow drift left-[-10%] top-[10%] size-[480px] bg-violet/30" />
      <div
        className="glow drift bottom-[-10%] right-[-5%] size-[520px] bg-amber/20"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto w-full max-w-6xl pt-24">
        <p className="eyebrow mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-amber" /> Software engineer · open to work
        </p>
        <h1 className="serif text-[clamp(3.5rem,11vw,10rem)] font-light leading-[0.9]">
          Suraj
          <br />
          <span className="italic text-amber">Panda</span>
          <span className="caret text-violet">_</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-8 text-dim">
          I build dependable backend systems, safety tooling for AI, and interfaces that feel
          considered. Currently into distributed systems and making LLMs behave.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-amber"
          >
            Explore the work
          </a>
          <a
            href="https://github.com/Suraj370"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-amber hover:text-amber"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dim transition-colors hover:text-amber"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
