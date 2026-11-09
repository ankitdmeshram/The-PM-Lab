import Link from "next/link";
import { nav, site } from "../_content/home";
import { LogoMark, MenuIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8 text-ink" />
          <span className="font-display text-lg font-bold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book-call"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand sm:inline-block"
          >
            Book a free call
          </a>

          {/* Mobile menu: native <details> so no client JS is needed */}
          <details className="group relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-white"
            >
              <MenuIcon className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 top-12 w-56 rounded-2xl border border-line bg-white p-2 shadow-xl">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-paper"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book-call"
                className="mt-1 block rounded-xl bg-ink px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book a free call
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
