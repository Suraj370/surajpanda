import { Reveal } from "./reveal";

const roles = [
  {
    title: "Full-stack Developer",
    company: "AIMERZ",
    type: "Internship",
    dates: "Apr 2025 — Jul 2025 · 4 mos",
    location: "Bengaluru, Karnataka, India · Remote",
    summary:
      "Architected and built a type-safe savings platform from zero, enabling users to create and manage multiple savings goals with automated deposit allocation.",
    skills: ["Front-End Development", "Agile Methodologies"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="serif max-w-2xl text-5xl font-light leading-[1.05] sm:text-6xl">
            Where I&apos;ve <span className="italic text-clay">worked.</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 ml-2 border-l border-line pl-8 sm:pl-12">
          {roles.map((r) => (
            <Reveal key={r.company + r.dates}>
              <div className="relative grid gap-4 py-6 md:grid-cols-[1fr_2fr] md:gap-12">
                <span className="absolute -left-[39px] top-9 size-3 rounded-full bg-clay ring-8 ring-clay/15 sm:-left-[55px]" />
                <div>
                  <p className="font-mono text-xs text-dim">{r.dates}</p>
                  <p className="mt-2 font-mono text-xs text-dim">{r.location}</p>
                </div>
                <div className="spot rounded-3xl p-7">
                  <h3 className="serif text-3xl font-light">{r.title}</h3>
                  <p className="eyebrow mt-2 !text-dusk">
                    {r.company} · {r.type}
                  </p>
                  <p className="mt-5 max-w-xl leading-7 text-dim">{r.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {r.skills.map((s) => (
                      <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-dim">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
