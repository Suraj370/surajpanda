import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Code2, Palette, Trophy, Users, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description:
      "First place at a national-level hackathon for building a real-time collaboration tool under 24 hours.",
  },
  {
    icon: Award,
    title: "Open Source Contributor",
    description:
      "Active contributor to popular open-source libraries with merged PRs impacting thousands of developers.",
  },
  {
    icon: Code2,
    title: "50+ Projects Shipped",
    description:
      "Delivered production-grade web apps across startups and freelance clients with strong performance metrics.",
  },
  {
    icon: Palette,
    title: "Design-to-Dev Excellence",
    description:
      "Recognized for bridging UI/UX design and engineering — turning Figma systems into pixel-perfect products.",
  },
  {
    icon: Users,
    title: "Community Mentor",
    description:
      "Mentored junior developers and designers through workshops, code reviews, and portfolio feedback sessions.",
  },
  {
    icon: Zap,
    title: "Performance Champion",
    description:
      "Improved Core Web Vitals and load times by 60%+ on high-traffic applications through targeted optimization.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 sm:px-6">
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
            Milestones
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">
            Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gold/65">
            Highlights from a journey of building, designing, shipping, and
            giving back to the community.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="border-gold/20 bg-card/60 transition-all duration-300 hover:border-gold/45 hover:bg-card"
              >
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/10">
                    <Icon className="size-5 text-gold-light" />
                  </div>
                  <CardTitle className="text-lg text-gold">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gold/60">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
