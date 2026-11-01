import { Reveal } from "./reveal";
import { SplitText } from "./split-text";
import skills from "@/data/skills.json";

const groups = skills;

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Toolkit</p>
          <h2 className="serif outline-title max-w-6xl text-[clamp(2.5rem,6vw,5.5rem)]">
            <SplitText text="What I reach for daily." />
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div className="spot h-full rounded-3xl p-7">
                <h3 className="serif text-2xl">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s, si) => (
                    <li key={s} style={{ "--c": si } as React.CSSProperties} className="chip rounded-full bg-mist px-3 py-1.5 text-sm text-ink">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
