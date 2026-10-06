const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-line bg-surface/60 py-1.5 pl-5 pr-1.5 shadow-[0_10px_40px_-20px_rgba(31,44,43,.4)] backdrop-blur-xl">
        <a href="#top" className="serif mr-3 text-lg font-medium">
          sp<span className="text-clay">.</span>
        </a>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hidden rounded-full px-4 py-2 text-sm text-dim transition-colors hover:bg-mist/40 hover:text-ink sm:block"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-sage"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
