import Link from "next/link";
import { aiCourse } from "../_content/ai-fullstack";
import { course, site } from "../_content/home";
import { landing, whyUs } from "../_content/landing";
import { ArrowIcon, BoardIcon, CheckIcon, SparkleIcon } from "./icons";
import { LogoBadge } from "./logo";
import { SectionHeading, formatPrice } from "./sections";

/* ---------- Hero ---------- */
export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 pb-14 pt-14 text-center sm:px-6 sm:pt-20">
        <LogoBadge className="mx-auto h-24 w-24 rounded-full shadow-xl shadow-brand/20 sm:h-28 sm:w-28" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-accent">{landing.tagline}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {landing.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{landing.body}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#courses"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark"
          >
            Explore courses
            <ArrowIcon className="h-4 w-4 rotate-90" />
          </a>
          <a
            href="#updates"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 font-semibold transition-colors hover:border-ink"
          >
            Get daily updates
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Course cards ---------- */
export function CourseCards() {
  const cards = [
    {
      href: "/ai-project-management",
      icon: BoardIcon,
      tone: "bg-brand",
      soft: "bg-brand-soft text-brand",
      tag: "8 weeks · Live",
      name: "Project Management",
      title: course.title,
      body: "Learn planning, Agile, Scrum and Jira by running a real project from start to finish.",
      facts: ["8 weeks", "40+ hours of live training", "Taught in Hinglish", "Course certificate"],
      price: site.price,
      cta: "View course",
    },
    {
      href: aiCourse.slug,
      icon: SparkleIcon,
      tone: "bg-accent",
      soft: "bg-accent-soft text-accent",
      tag: "6 months · Internship",
      name: "AI Full Stack Development",
      title: aiCourse.name,
      body: "Build full stack apps with React, Node.js and MySQL, then add AI with OpenAI, RAG and AI agents.",
      facts: ["6 months", "96 hours of live training", "Full-time internship from Day\u00a01", "Two certificates"],
      price: aiCourse.price,
      cta: "View programme",
    },
  ];

  return (
    <section id="courses" className="scroll-mt-20 pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-ink-soft">Our courses</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-line bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10"
              >
                <div className={`relative overflow-hidden px-7 pb-7 pt-7 text-white ${c.tone}`}>
                  <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{c.tag}</span>
                  </div>
                  <h2 className="relative mt-6 font-display text-3xl font-bold">{c.name}</h2>
                  <p className="relative mt-1 text-sm text-white/80">{c.title}</p>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="leading-relaxed text-ink-soft">{c.body}</p>
                  <ul className="mb-7 mt-5 grid gap-2.5 sm:grid-cols-2">
                    {c.facts.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[15px]">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                    {c.price ? (
                      <span className="flex items-baseline gap-2">
                        <span className="font-display text-3xl font-bold">{formatPrice(c.price.offer)}</span>
                        <span className="text-ink-soft line-through">{formatPrice(c.price.original)}</span>
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-ink-soft">Fees on enquiry</span>
                    )}
                    <span className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold ${c.soft}`}>
                      {c.cta}
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why The PM Lab ---------- */
export function WhyUs() {
  const tones = ["bg-brand-soft text-brand", "bg-accent-soft text-accent", "bg-mint-soft text-mint", "bg-paper text-ink"];
  return (
    <section id="why" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={`Why ${site.name}`} title="Built for students who want to get hired" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <div key={w.title} className="rounded-3xl border border-line bg-paper p-6">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl font-display font-bold ${tones[i]}`}>
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
