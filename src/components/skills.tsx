import {
  siDocker,
  siFigma,
  siGo,
  siGrafana,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPrometheus,
  siPython,
  siReact,
  siSpringboot,
  siSui,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import { Reveal } from "./reveal";
import { SplitText } from "./split-text";
import skills from "@/data/skills.json";

const groups = skills;

// Brand logos by skill name. Black logos fall back to the text color so they survive dark mode;
// Java's OpenJDK mark is black, so it borrows Java's orange.
const logos: Record<string, { icon: SimpleIcon; color?: string }> = {
  Go: { icon: siGo },
  Java: { icon: siOpenjdk, color: "#ED8B00" },
  Python: { icon: siPython },
  TypeScript: { icon: siTypescript },
  "Spring Boot": { icon: siSpringboot },
  "Node.js": { icon: siNodedotjs },
  PostgreSQL: { icon: siPostgresql },
  MCP: { icon: siModelcontextprotocol },
  Docker: { icon: siDocker },
  Prometheus: { icon: siPrometheus },
  Grafana: { icon: siGrafana },
  "Next.js": { icon: siNextdotjs },
  React: { icon: siReact },
  Tailwind: { icon: siTailwindcss },
  Figma: { icon: siFigma },
  Sui: { icon: siSui },
};

function Logo({ name }: { name: string }) {
  const logo = logos[name];
  if (!logo) return <span aria-hidden className="skill-dot" />;
  const color = logo.color ?? (logo.icon.hex === "000000" ? "currentColor" : `#${logo.icon.hex}`);
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="skill-logo" fill={color}>
      <path d={logo.icon.path} />
    </svg>
  );
}

export function Skills() {
  let n = 0;
  return (
    <section id="skills" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Toolkit</p>
          <h2 className="serif outline-title max-w-6xl text-[clamp(2.5rem,6vw,5.5rem)]">
            <SplitText text="What I reach for daily." />
          </h2>
        </Reveal>
        <Reveal className="mt-14">
          <ul className="border-b border-line">
            {groups.map((g, i) => (
              <li
                key={g.title}
                className="skill-row grid grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-4 border-t border-line py-7 md:grid-cols-[3rem_16rem_minmax(0,1fr)] md:items-center"
              >
                <span className="skill-ix font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="skill-title serif text-2xl md:text-3xl">{g.title}</h3>
                <ul className="col-start-2 flex flex-wrap gap-x-6 gap-y-3 md:col-start-3">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      style={{ "--c": n++ } as React.CSSProperties}
                      className="skill-item inline-flex items-center gap-2 text-base text-dim"
                    >
                      <Logo name={s} />
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
