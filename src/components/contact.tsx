import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import contact from "@/data/contact.json";
import { SplitText } from "./split-text";
import { MagneticLink } from "./magnetic-link";

const { email, links } = contact;

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-10 pt-32">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="serif text-[clamp(3.25rem,11vw,10rem)]">
            <SplitText text="Let's build" />
            <br />
            <SplitText text="something good." start={2} className="text-clay" />
          </h2>
          <MagneticLink
            href={`mailto:${email}`}
            strength={0.18}
            className="mt-12 !inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-medium text-bg hover:gap-4 hover:bg-sage"
          >
            {email} <ArrowUpRight size={18} />
          </MagneticLink>
        </Reveal>
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="spot group flex items-center justify-between rounded-2xl p-6"
            >
              <span>
                <span className="block font-medium">{l.label}</span>
                <span className="font-mono text-xs text-dim">{l.handle}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-clay"
              />
            </a>
          ))}
        </div>
        <footer className="mt-20 flex justify-between border-t border-line py-7 font-mono text-xs text-dim">
          <span>© {new Date().getFullYear()} Suraj Panda</span>
          <a href="#top" className="transition-colors hover:text-clay">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
