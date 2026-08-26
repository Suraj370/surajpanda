import { ArrowUpRight, ExternalLink, GitBranch, Mail, Share2 } from "lucide-react";

const EMAIL_DISPLAY = "surajpanda2077 [@] gmail [.] com";
const links = [
  { label: "X / Twitter", handle: "@surajpanda2077", href: "https://x.com/surajpanda2077", icon: Share2 },
  { label: "LinkedIn", handle: "/in/panda-suraj", href: "https://www.linkedin.com/in/panda-suraj/", icon: ExternalLink },
  { label: "GitHub", handle: "Suraj370", href: "https://github.com/Suraj370", icon: GitBranch },
];

export function Contact() {
  return (
    <section id="contact" className="section-rule px-5 pb-8 pt-24 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="eyebrow mb-3 text-coral">Have a good one?</p>
        <h2 className="display-type max-w-3xl text-6xl font-bold leading-[.95] text-ink sm:text-8xl">
          Let&apos;s make<br /><em className="font-normal text-coral">something useful.</em>
        </h2>
        <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">
          Whether you have a sharp idea, a messy problem, or just want to say hello — my inbox is open.
        </p>
        <a href="mailto:surajpanda2077@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-coral">
          <Mail size={17} /> Send me a note <ArrowUpRight size={16} />
        </a>
        <p className="mt-4 font-mono text-sm tracking-wide text-muted-foreground" aria-label="Email address">
          {EMAIL_DISPLAY}
        </p>
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-5">
          {links.map(({ label, handle, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border-b border-ink/20 pb-1.5 text-left transition-colors hover:border-coral">
              <span className="text-ink/70 group-hover:text-coral"><Icon size={16} /></span>
              <span><span className="block text-sm font-bold text-ink">{label}</span><span className="font-mono text-[11px] text-muted-foreground">{handle}</span></span>
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-coral" />
            </a>
          ))}
        </div>
        <footer className="mt-24 w-full border-t border-border py-7 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Suraj Panda. Built with care.</p>
        </footer>
      </div>
    </section>
  );
}
