import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto grid h-16 max-w-[88rem] grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-10">
        <a href="#top" className="justify-self-start text-lg font-semibold tracking-tight">
          S<span className="text-clay">/</span>P
        </a>
        <NavLinks />
        <div className="col-start-3 flex items-center justify-self-end gap-2 sm:gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="border-b border-clay pb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-clay transition-colors hover:text-ink"
          >
            Say hello
          </a>
        </div>
      </nav>
    </header>
  );
}
