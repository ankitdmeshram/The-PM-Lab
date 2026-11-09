import Link from "next/link";
import { Footer } from "./footer";
import { Header } from "./header";

export const legalLastUpdated = "9 November 2026";

/** Shared layout for the refund, terms and privacy pages. */
export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Link href="/" className="text-sm font-semibold text-brand hover:underline">
            ← Back to home
          </Link>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-ink-soft">Last updated: {legalLastUpdated}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>
          <div className="mt-10 space-y-8">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

/** One numbered section of a legal page. */
export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:text-ink [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
