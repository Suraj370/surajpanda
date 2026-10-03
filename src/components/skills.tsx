import { Reveal } from "./reveal";

const groups = [
  { title: "Languages", items: ["Go", "Java", "Python", "TypeScript"] },
  { title: "Backend & data", items: ["Spring Boot", "Node.js", "PostgreSQL", "REST", "MCP"] },
  { title: "Infrastructure", items: ["Docker", "Raft consensus", "Prometheus", "Grafana", "Testcontainers"] },
  { title: "Frontend & design", items: ["Next.js", "React", "Tailwind", "Figma"] },
  { title: "AI", items: ["LLM APIs", "Guardrails", "Prompt-injection testing", "Text-to-SQL"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Toolkit</p>
          <h2 className="serif max-w-2xl text-5xl font-light leading-[1.05] sm:text-6xl">
            What I reach for <span className="italic text-amber">daily.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="card h-full rounded-2xl p-7">
                <h3 className="serif text-2xl">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full bg-ink/[0.06] px-3 py-1.5 text-sm text-ink/75">
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
