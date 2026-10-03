import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const featured = [
  {
    title: "SafeSQL Proxy",
    kind: "Governed semantic layer · MCP gateway",
    description:
      "Sits between LLM agents and your warehouse so text-to-SQL stops producing wrong joins and fan-out inflation. Compiles requests into safe SQL while enforcing RBAC, masking and row-level security, with audit trails across Postgres, MySQL, Snowflake and Databricks.",
    tags: ["Go", "MCP", "REST", "Postgres", "Snowflake"],
    url: "https://github.com/Suraj370/SafeSQL-Proxy",
    snippet: ["agent → revenue by region", "compile → fan-out safe SQL", "policy → mask(email) ok, rls ok"],
  },
  {
    title: "Distributed Message Queue",
    kind: "Fault-tolerant broker",
    description:
      "A Kafka-style queue with partitioned topics, a persistent write-ahead log, consumer groups with offset tracking, and a custom HTTP Raft implementation for leader election, replication and crash recovery. Observable with Prometheus and Grafana.",
    tags: ["Java", "Spring Boot", "Raft", "Docker", "Testcontainers"],
    url: "https://github.com/Suraj370/distributed-message-queue",
    snippet: ["raft → elect leader (term 7)", "append → replicate to followers", "crash → recover from WAL"],
  },
  {
    title: "ContractGuard",
    kind: "AI contract analysis CLI",
    description:
      "Reads PDF and Word contracts, classifies them, and surfaces red flags, warnings, protections and missing clauses with a fairness score. Includes jurisdiction-aware statute checks, batch scans, version comparison and exports to Markdown, JSON, PDF and HTML.",
    tags: ["Python", "Pydantic", "LLM APIs", "pdfplumber"],
    url: "https://github.com/Suraj370/contractguard",
    snippet: ["contractguard scan lease.pdf", "red flag → auto-renewal clause", "fairness score → see report"],
  },
];

const more = [
  {
    title: "GuardrailKit",
    description:
      "Rules, classifiers and adversarial testing in one toolkit for teams building safer language-model applications.",
    url: "https://github.com/Suraj370/GuardrailKit",
  },
  {
    title: "Seoye-chi",
    description:
      "A calm, pressure-sensitive brush experience that brings Korean calligraphy and rice paper to the browser.",
    url: "https://seoye-chi.vercel.app",
  },
  {
    title: "Aven.",
    description:
      "An editorial, soft-toned storefront for a luxury beauty brand, built around typography and product story.",
    url: "https://boutique-website-landing-page.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="serif max-w-2xl text-5xl font-light leading-[1.05] sm:text-6xl">
            Systems, tools and <span className="italic text-amber">things</span> I&apos;ve shipped.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {featured.map((p, i) => (
            <Reveal key={p.title}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="card group grid gap-8 rounded-3xl p-6 sm:p-9 lg:grid-cols-[1.2fr_1fr]"
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between font-mono text-xs text-dim">
                    <span>0{i + 1}</span>
                    <ArrowUpRight
                      size={22}
                      className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber"
                    />
                  </div>
                  <h3 className="serif mt-10 text-4xl font-light sm:text-5xl">{p.title}</h3>
                  <p className="eyebrow mt-3 !text-violet">{p.kind}</p>
                  <p className="mt-5 leading-7 text-dim">{p.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-dim">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="self-center rounded-2xl border border-line bg-surface p-5 font-mono text-[13px] leading-7 text-dim">
                  <div className="mb-4 flex gap-1.5">
                    <i className="size-2.5 rounded-full bg-[#ff6b6b]/70" />
                    <i className="size-2.5 rounded-full bg-amber/70" />
                    <i className="size-2.5 rounded-full bg-[#5fd38d]/70" />
                  </div>
                  {p.snippet.map((line) => (
                    <p key={line}>
                      <span className="text-amber">$</span> {line}
                    </p>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="eyebrow mb-6">More</p>
          <div className="divide-y divide-line border-y border-line">
            {more.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group grid items-center gap-2 py-7 transition-colors hover:text-amber sm:grid-cols-[1fr_2fr_auto] sm:gap-8"
              >
                <h3 className="serif text-3xl font-light">{p.title}</h3>
                <p className="text-sm leading-6 text-dim">{p.description}</p>
                <ArrowUpRight className="hidden transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
