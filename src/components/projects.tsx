import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SplitText } from "./split-text";
import projects from "@/data/projects.json";

const { featured, more } = projects;

export function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-[88rem] px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="serif outline-title max-w-6xl text-[clamp(2.5rem,6vw,5.5rem)]">
            <SplitText text="Systems, tools and things I've shipped." />
          </h2>
        </Reveal>

        <ol className="mt-20 border-t border-line">
          {featured.map((p, i) => (
            <li key={p.title} className="border-b border-line">
              <Reveal>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="work-row group grid gap-x-10 gap-y-6 py-12 lg:grid-cols-[4rem_1.15fr_1fr] lg:py-16"
                >
                  <span className="font-mono text-xs text-dim lg:pt-4">0{i + 1}</span>

                  <h3 className="serif work-title text-[clamp(2.25rem,5vw,4.75rem)]">{p.title}</h3>

                  <div className="max-w-xl lg:pt-3">
                    <p className="eyebrow !text-clay">{p.kind}</p>
                    <p className="mt-4 text-base leading-7 text-dim">{p.description}</p>
                    <p className="mt-5 font-mono text-xs text-dim">{p.tags.join("  /  ")}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 border-b border-ink pb-1 text-[11px] font-medium uppercase tracking-[0.2em]">
                      View project
                      <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-24">
          <p className="eyebrow mb-6">More</p>
          <div className="divide-y divide-line border-y border-line">
            {more.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="row group relative grid items-center gap-2 overflow-hidden px-2 py-7 sm:grid-cols-[1fr_2fr_auto] sm:gap-8"
              >
                <span className="row-fill absolute inset-0 bg-ink" aria-hidden />
                <h3 className="serif relative text-3xl sm:text-4xl">
                  <span className="roll">
                    <span>{p.title}</span>
                    <span aria-hidden>{p.title}</span>
                  </span>
                </h3>
                <p className="row-copy relative text-sm leading-6 text-dim">{p.description}</p>
                <ArrowUpRight className="row-copy relative mr-2 hidden transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
