import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-28 lg:px-8">
      <div aria-hidden className="feather-decoration" />
      <div aria-hidden className="absolute left-[8%] top-[22%] size-3 rounded-full bg-lime shadow-[0_0_24px_8px_rgba(216,238,130,.45)]" />
      <div aria-hidden className="absolute right-[12%] top-[30%] size-2 rounded-full bg-[#ffe2a1] shadow-[0_0_22px_8px_rgba(255,226,161,.5)]" />
      <div aria-hidden className="absolute bottom-[18%] left-[18%] h-px w-24 rotate-[-24deg] bg-white/40" />
      <div aria-hidden className="absolute bottom-[22%] right-[13%] h-px w-32 rotate-[25deg] bg-white/40" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-4 py-2 text-xs font-bold text-ink shadow-sm backdrop-blur-sm">
          <span className="size-2 animate-pulse rounded-full bg-coral" />
          Available for new opportunities
        </div>
        <p className="eyebrow animate-fade-up mb-5 text-coral" style={{ animationDelay: ".08s" }}>
          Hello, I&apos;m Suraj Panda
        </p>
        <h1 className="display-type animate-fade-up max-w-5xl text-6xl font-bold leading-[.9] text-ink sm:text-8xl lg:text-[9.5rem]" style={{ animationDelay: ".16s" }}>
          I build things<br />
          <em className="font-normal text-coral">people enjoy</em> using.
        </h1>
        <p className="animate-fade-up mt-9 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl" style={{ animationDelay: ".24s" }}>
          Full-stack engineer and UI/UX designer turning complex ideas into clear, useful, and memorable digital experiences.
        </p>
        <div className="animate-fade-up mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: ".32s" }}>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-1">
            See my work <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/50 px-6 py-3.5 text-sm font-bold text-ink backdrop-blur-sm transition-transform hover:-translate-y-1">
            Get in touch
          </a>
        </div>
        <div className="mt-16 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-ink/55">
          <Sparkles size={15} className="text-coral" />
          Engineer × Designer
        </div>
      </div>

      <a href="#skills" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-ink/60 hover:text-ink">
        <span className="flex size-8 items-center justify-center rounded-full border border-ink/20"><ArrowDown size={14} /></span>
        Scroll to explore
      </a>
    </section>
  );
}
