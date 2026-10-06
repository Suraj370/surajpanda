import { ArrowDown } from "lucide-react";
import { Rotator } from "./rotator";
import { AsciiOrb } from "./ascii-orb";


export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="glow drift left-[-12%] top-[8%] size-[520px] bg-mist/60" />
      <div
        className="glow drift bottom-[-15%] right-[-8%] size-[560px] bg-dusk/25"
        style={{ animationDelay: "-9s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 pt-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-sage" /> Software engineer · open to work
          </p>
          <h1 className="serif text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.92]">
            Suraj
            <br />
            <span className="italic text-clay">Panda</span>
          </h1>
          <p className="serif mt-8 text-2xl font-light text-ink/80 sm:text-3xl">
            I make{" "}
            <Rotator words={["dependable backends", "safer AI", "calm interfaces", "distributed systems"]} />.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-dim">
            I build dependable backend systems, safety tooling for AI, and interfaces that feel
            considered. Currently into distributed systems and making LLMs behave.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-sage"
            >
              Explore the work
            </a>
            <a
              href="https://github.com/Suraj370"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-sage hover:bg-mist/40"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* ASCII-shaded orb */}
        <div className="relative mx-auto hidden w-full max-w-[520px] lg:block">
          <div className="glow absolute inset-[15%] bg-mist/70" />
          <AsciiOrb className="relative aspect-[2/1] w-full" />
          <p className="eyebrow mt-3 text-center text-dim!">move your cursor · it listens</p>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="bob absolute bottom-8 left-1/2 text-dim transition-colors hover:text-sage"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
