import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Aven.",
    description:
      "A visually rich landing page for a luxury makeup brand, blending elegant typography, product storytelling, and a boutique-inspired feel to create a premium first impression.",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "https://boutique-website-landing-page.vercel.app/",
    githubUrl: "https://github.com/Suraj370/boutique-website-landing-page",
  },
  {
    title: "Nova Dashboard",
    description:
      "Analytics dashboard with interactive charts, role-based access, and a refined dark UI optimized for data-heavy workflows.",
    tags: ["React", "Node.js", "Recharts", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Pulse Design System",
    description:
      "A reusable component library and design tokens package used across multiple products for consistent UI/UX.",
    tags: ["Storybook", "Figma", "React", "CSS Tokens"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Orbit Chat",
    description:
      "Real-time messaging app with typing indicators, media sharing, and end-to-end encrypted private rooms.",
    tags: ["Next.js", "WebSockets", "Redis", "Auth"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-gold/60">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gold/65">
            A selection of work spanning full-stack products, polished
            interfaces, and systems designed with craft in mind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group border-gold/20 bg-card/80 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
            >
              <CardHeader>
                <div className="mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-300 group-hover:w-20" />
                <CardTitle className="text-xl text-gold group-hover:text-gold-light">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gold/60">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-gold/25 bg-gold/5 text-gold/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  nativeButton={false}
                  className="border-gold/30 text-gold hover:bg-gold/10 hover:text-gold-light"
                  render={
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <ExternalLink data-icon="inline-start" />
                  Live Demo
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  nativeButton={false}
                  className="text-gold/70 hover:bg-gold/10 hover:text-gold"
                  render={
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <GitBranch data-icon="inline-start" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
