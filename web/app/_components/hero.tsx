import { site, stats } from "../_content/home";
import { ArrowIcon, CheckIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:pb-20 lg:pt-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-mint" />
            Next batch starts {site.nextBatch}
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Become a <span className="whitespace-nowrap">job-ready</span>{" "}
            <span className="relative whitespace-nowrap text-brand">
              Project Manager
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                preserveAspectRatio="none"
              >
                <path d="M2 9c60-6 160-8 296-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            , even with zero experience.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Live, mentor-led project management training for college students and early-career professionals.
            An 8-week live course, taught in Hinglish. Learn planning, Agile, Scrum and Jira by running a
            real project from start to finish.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.enrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark"
            >
              Enroll now
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 font-semibold transition-colors hover:border-ink"
            >
              See the curriculum
            </a>
          </div>

          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="whitespace-nowrap font-display text-xl font-bold sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-ink-soft sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroBoard />
      </div>
    </section>
  );
}

/** A small "project board" illustration that shows what learners will do. */
function HeroBoard() {
  const columns = [
    {
      title: "To do",
      dot: "bg-ink-soft/40",
      cards: [{ text: "Draft project charter", tag: "Week 1", tone: "bg-brand-soft text-brand" }],
    },
    {
      title: "In progress",
      dot: "bg-accent",
      cards: [
        { text: "Sprint 2 planning", tag: "Scrum", tone: "bg-accent-soft text-accent" },
        { text: "Risk register (RAID)", tag: "Risk", tone: "bg-brand-soft text-brand" },
      ],
    },
    {
      title: "Done",
      dot: "bg-mint",
      cards: [
        { text: "Stakeholder map", tag: "Done", tone: "bg-mint-soft text-mint", done: true },
        { text: "WBS & timeline", tag: "Done", tone: "bg-mint-soft text-mint", done: true },
      ],
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/15 via-accent/10 to-transparent blur-2xl" />

      <div className="rotate-1 rounded-3xl border border-line bg-white p-5 shadow-2xl shadow-ink/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-ink-soft">Capstone project</p>
            <p className="font-display text-lg font-bold">E-commerce Website Launch</p>
          </div>
          <span className="rounded-full bg-mint-soft px-2.5 py-1 text-xs font-semibold text-mint">On track</span>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-ink-soft">
            <span>Sprint progress</span>
            <span className="font-semibold text-ink">68%</span>
          </div>
          <div className="mt-1.5 h-2 rounded-full bg-paper">
            <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-brand to-accent" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {columns.map((col) => (
            <div key={col.title} className="rounded-2xl bg-paper p-2.5">
              <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
                {col.title}
              </p>
              <div className="space-y-2">
                {col.cards.map((card) => (
                  <div key={card.text} className="rounded-xl border border-line bg-white p-2 shadow-sm">
                    <p className={`text-[11px] font-medium leading-snug sm:text-xs ${"done" in card ? "text-ink-soft line-through" : ""}`}>
                      {card.text}
                    </p>
                    <span className={`mt-1.5 inline-block rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${card.tone}`}>
                      {card.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-6 -left-2 flex -rotate-2 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-xl sm:-left-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-white">
          <CheckIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold">Offer received</p>
          <p className="text-xs text-ink-soft">Associate Project Manager</p>
        </div>
      </div>
    </div>
  );
}
