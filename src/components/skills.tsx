import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Palette,
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "REST/GraphQL"],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "Docker", "Vercel", "Figma", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(212,175,55,0.06), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-gold/60">
            Toolkit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gold/65">
            The languages, frameworks, and tools I reach for when turning
            ideas into polished, production-ready products.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-gold/20 bg-card/60 p-6 transition-all duration-300 hover:border-gold/45 hover:bg-card"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/10">
                  <Icon className="size-5 text-gold-light" />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-gold">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-gold/25 bg-gold/5 text-gold/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
