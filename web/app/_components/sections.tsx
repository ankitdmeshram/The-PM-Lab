import {
  assessment,
  audiences,
  capstone,
  certificateRules,
  classFormat,
  course,
  curriculum,
  deliverables,
  enquiryStatuses,
  faqs,
  careerLevels,
  site,
  tools,
} from "../_content/home";
import { ArrowIcon, CheckIcon, LogoMark, PlusIcon, WhatsAppIcon, audienceIcons } from "./icons";

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-ink-soft">{body}</p>}
    </div>
  );
}

/* ---------- Who it's for ---------- */
export function Audience() {
  const tones = ["bg-brand-soft text-brand", "bg-accent-soft text-accent", "bg-mint-soft text-mint"];
  return (
    <section id="audience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for the start of your career"
          body="Whether you're still in college or just starting work, this course gives you a clear path into project management."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = audienceIcons[a.icon];
            return (
              <a
                key={a.title}
                href="#course"
                className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-ink/30 hover:shadow-xl hover:shadow-ink/5"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tones[i]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{a.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{a.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {a.cta}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Course overview ---------- */
export function Course() {
  return (
    <section id="course" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-brand text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">The course</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {course.title}
              </h2>
              <p className="mt-3 font-display text-xl font-semibold text-accent">{course.tagline}</p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{course.intro}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {course.facts.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-white/10 p-4">
                    <dt className="sr-only">{f.label}</dt>
                    <dd className="font-display text-2xl font-bold">{f.value}</dd>
                    <dd className="mt-1 text-xs leading-snug text-white/70">{f.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl bg-white p-7 text-ink">
              <p className="font-display text-lg font-bold">What&apos;s included</p>
              <ul className="mt-5 space-y-3">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book-call"
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-white transition-colors hover:bg-brand"
              >
                Talk to us about the next batch
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Week-by-week curriculum + capstone ---------- */
export function Curriculum() {
  return (
    <section id="curriculum" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Curriculum"
          title="8 weeks, from fundamentals to delivery"
          body="Three live classes a week. Every class ends with a practical activity."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {curriculum.map((w) => (
            <details
              key={w.week}
              className="group rounded-3xl border border-line bg-white p-6 transition open:shadow-lg open:shadow-ink/5"
            >
              <summary className="flex cursor-pointer items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <span className="text-[10px] font-semibold uppercase leading-none">Week</span>
                  <span className="font-display text-lg font-bold leading-tight">{w.week}</span>
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-bold leading-snug">{w.title}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{w.outcome}</span>
                </span>
                <PlusIcon className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition-transform group-open:rotate-45" />
              </summary>
              <ol className="mt-5 space-y-2.5 border-t border-line pt-5">
                {w.sessions.map((s, i) => (
                  <li key={s} className="flex gap-3 text-[15px]">
                    <span className="font-display font-bold text-accent">{(w.week - 1) * 3 + i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </details>
          ))}
        </div>

        {/* Capstone */}
        <div className="mt-8 rounded-3xl border border-line bg-accent-soft p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent">
                + 4 hours of live workshops
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{capstone.title}</h3>
              <p className="mt-2 font-semibold">{capstone.example}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{capstone.body}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capstone.workshops.map((ws) => (
                <div key={ws.title} className="rounded-2xl bg-white p-6">
                  <p className="font-display font-bold">{ws.title}</p>
                  <ul className="mt-4 space-y-2.5">
                    {ws.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio + tools ---------- */
export function Build() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Your portfolio</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Finish with real project documents, not just notes
            </h2>
            <p className="mt-4 text-lg text-white/70">
              You&apos;ll create the same documents project managers prepare at work. Show them in interviews
              to prove you can do the job.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {tools.map((t) => (
                <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="mt-1 text-sm text-white/60">{t.use}</p>
                </div>
              ))}
            </div>
          </div>

          <ul className="grid gap-px self-start overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {deliverables.map((d, i) => (
              <li key={d} className="flex items-center gap-4 bg-ink p-5">
                <span className="font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium">{d}</span>
              </li>
            ))}
            {deliverables.length % 2 === 1 && <li aria-hidden className="hidden bg-ink sm:block" />}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- How each class runs ---------- */
export function ClassFormat() {
  const total = classFormat.reduce((sum, c) => sum + c.minutes, 0);
  const tones = ["bg-ink-soft/30", "bg-brand", "bg-accent", "bg-mint", "bg-ink-soft/30"];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How you'll learn"
          title="60% practice, 40% theory"
          body="Every class follows the same five-step format, explained in Hinglish with real-world examples and live tool demos."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex h-4 overflow-hidden rounded-full">
            {classFormat.map((c, i) => (
              <div key={c.title} className={tones[i]} style={{ width: `${(c.minutes / total) * 100}%` }} />
            ))}
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-5">
            {classFormat.map((c, i) => (
              <li key={c.title} className="rounded-2xl border border-line bg-white p-4">
                <span className={`block h-1.5 w-8 rounded-full ${tones[i]}`} />
                <p className="mt-3 font-display text-2xl font-bold">{c.minutes} min</p>
                <p className="mt-1 text-sm text-ink-soft">{c.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Certificate + assessment ---------- */
export function Certificate() {
  return (
    <section id="certificate" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certificate"
          title="Earn your course completion certificate"
          body="Your certificate is based on the work you do throughout the course, not a single exam."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <CertificatePreview />

          <div>
            <h3 className="font-display text-xl font-bold">To earn your certificate</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {certificateRules.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-2xl border border-line bg-paper p-4 text-[15px] font-medium">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                  {r}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-bold">How you&apos;re assessed</h3>
            {/* One bar that adds up to 100%, so each part is shown at its true size */}
            <div className="mt-5 flex h-3 gap-1 overflow-hidden rounded-full">
              {assessment.map((a, i) => (
                <div key={a.label} className={assessmentTones[i]} style={{ width: `${a.weight}%` }} />
              ))}
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
              {assessment.map((a, i) => (
                <li key={a.label} className="flex items-start gap-3">
                  <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${assessmentTones[i]}`} />
                  <span>
                    <span className="block font-display text-xl font-bold">{a.weight}%</span>
                    <span className="text-sm text-ink-soft">{a.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const assessmentTones = ["bg-brand", "bg-accent", "bg-mint", "bg-ink"];

/** Illustration of the certificate learners receive. */
function CertificatePreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/15 via-accent/10 to-transparent blur-2xl" />
      <div className="-rotate-1 rounded-3xl bg-white p-3 shadow-2xl shadow-ink/10 ring-1 ring-line">
        <div className="relative overflow-hidden rounded-2xl border-2 border-brand/20 px-6 py-8 text-center sm:px-10 sm:py-10">
          {/* corner accents */}
          <span aria-hidden className="absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-accent" />
          <span aria-hidden className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-accent" />
          <span aria-hidden className="absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-accent" />
          <span aria-hidden className="absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-accent" />

          <div className="flex items-center justify-center gap-2">
            <LogoMark className="h-7 w-7 text-ink" />
            <span className="font-display font-bold">{site.name}</span>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
            Certificate of completion
          </p>
          <p className="mt-4 text-sm text-ink-soft">This is to certify that</p>
          <p className="mt-2 font-display text-3xl font-bold text-brand sm:text-4xl">Your Name</p>
          <div className="mx-auto mt-2 h-px w-48 bg-line" />
          <p className="mt-4 text-sm text-ink-soft">has successfully completed</p>
          <p className="mx-auto mt-1 max-w-sm font-display text-lg font-bold leading-snug">{course.title}</p>
          <p className="mt-2 text-xs text-ink-soft">8 weeks · 40+ hours of live training · Capstone project</p>

          <div className="mt-8 flex items-end justify-between text-left">
            <div>
              <div className="h-px w-24 bg-ink/30" />
              <p className="mt-1.5 text-[11px] text-ink-soft">Lead Instructor</p>
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
              <CheckIcon className="h-7 w-7" />
            </span>
            <div className="text-right">
              <div className="ml-auto h-px w-24 bg-ink/30" />
              <p className="mt-1.5 text-[11px] text-ink-soft">Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Career ladder: entry level to leadership ---------- */
export function Roles() {
  const tones = [
    { dot: "bg-mint", badge: "bg-mint-soft text-mint" },
    { dot: "bg-brand", badge: "bg-brand-soft text-brand" },
    { dot: "bg-accent", badge: "bg-accent-soft text-accent" },
  ];
  return (
    <section id="roles" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career paths"
          title="Start your career, then grow into leadership"
          body="This course gets you ready for entry-level roles. From there, experience takes you to project manager and beyond."
        />

        <ol className="mt-14">
          {careerLevels.map((level, i) => (
            <li key={level.stage} className="relative pb-12 pl-14 last:pb-0 sm:pl-20">
              {/* line connecting this level to the next one */}
              {i < careerLevels.length - 1 && (
                <span aria-hidden className="absolute bottom-0 left-5 top-10 w-px bg-line sm:left-6 sm:top-12" />
              )}
              <span
                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full font-display font-bold text-white ring-8 ring-paper sm:h-12 sm:w-12 sm:text-lg ${tones[i].dot}`}
              >
                {i + 1}
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl font-bold">{level.step}</h3>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tones[i].badge}`}>
                  {level.stage} · typically {level.years}
                </span>
              </div>
              {i === 0 && (
                <p className="mt-2 text-sm text-ink-soft">Roles you can apply for after this course.</p>
              )}

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {level.roles.map((r) => (
                  <article key={r.title} className="rounded-2xl border border-line bg-white p-5">
                    <h4 className="font-display text-lg font-bold leading-snug">{r.title}</h4>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{r.body}</p>
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions we get asked a lot" />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold">
                {f.q}
                <PlusIcon className="h-5 w-5 shrink-0 text-ink-soft transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final call to action / lead form ---------- */
export function BookCall() {
  return (
    <section id="book-call" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative grid gap-10 overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-12 lg:grid-cols-2">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Not sure if this course is right for you? Talk to us, free.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              In a 20-minute call we&apos;ll understand your background, answer your questions about the course
              and the next batch. No pressure.
            </p>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 font-semibold text-ink transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp instead
            </a>
          </div>

          {/* TODO: connect this form to a server action, Google Sheet or CRM */}
          <form className="relative grid gap-3 rounded-2xl bg-white p-6 text-ink">
            <Field id="name" label="Full name" placeholder="Your name" />
            <Field id="phone" label="Phone number" placeholder="+91" type="tel" />
            <div>
              <label htmlFor="status" className="text-sm font-medium">I am a…</label>
              <select
                id="status"
                name="status"
                className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3 outline-none focus:border-brand"
                defaultValue=""
              >
                <option value="" disabled>Select one</option>
                {enquiryStatuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 h-12 rounded-xl bg-accent font-semibold text-white transition hover:brightness-95"
            >
              Book my free call
            </button>
            <p className="text-center text-xs text-ink-soft">We&apos;ll call you within 24 hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, placeholder, type = "text" }: { id: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3 outline-none focus:border-brand"
      />
    </div>
  );
}
