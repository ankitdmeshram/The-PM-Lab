import Link from "next/link";
import {
  aiAssessment,
  aiAudience,
  aiCapstoneIdeas,
  aiCertificates,
  aiCourse,
  aiInternship,
  aiModules,
  aiPrerequisites,
  aiProgramme,
  aiProjects,
  aiStack,
  aiStats,
  aiSupport,
} from "../_content/ai-fullstack";
import { site } from "../_content/home";
import {
  ArrowIcon,
  CheckIcon,
  DatabaseIcon,
  MonitorIcon,
  PlusIcon,
  ServerIcon,
  SparkleIcon,
  WhatsAppIcon,
  WrenchIcon,
  audienceIcons,
} from "./icons";
import { SectionHeading, formatPrice } from "./sections";

/** Enroll on Cashfree once a link is set; until then, enquire on WhatsApp. */
export function aiCta() {
  if (aiCourse.enrollUrl) {
    return { label: "Enroll now", href: aiCourse.enrollUrl, external: true };
  }
  return {
    label: "Enquire now",
    href: `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(aiCourse.whatsappMessage)}`,
    external: true,
  };
}

const ext = { target: "_blank", rel: "noopener noreferrer" };

/* ---------- Hero ---------- */
export function AiHero() {
  const cta = aiCta();
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:pb-20 lg:pt-14">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {aiCourse.nextBatch ? `Next batch starts ${aiCourse.nextBatch}` : "New programme · Full Stack + AI"}
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Become an <span className="text-brand">AI Full Stack</span> Developer.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Build complete web apps with React, TypeScript, Node.js and MySQL, then add AI with OpenAI, RAG and AI
            agents. Live training in Hinglish, 9+ projects and a full-time team internship from Day 1.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={cta.href}
              {...ext}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark"
            >
              {cta.label}
              {aiCourse.price && <> · {formatPrice(aiCourse.price.offer)}</>}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 font-semibold transition-colors hover:border-ink"
            >
              See the curriculum
            </a>
          </div>

          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-6">
            {aiStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="whitespace-nowrap font-display text-lg font-bold sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-ink-soft sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CodeWindow />
      </div>
    </section>
  );
}

/** Illustration: a small code editor showing the kind of AI feature learners build. */
function CodeWindow() {
  const kw = "text-[#c792ea]";
  const fn = "text-[#82aaff]";
  const str = "text-[#c3e88d]";
  const cm = "text-white/40";
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-lg">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-accent/10 to-transparent blur-2xl" />
      <div className="rotate-1 overflow-hidden rounded-3xl bg-ink shadow-2xl shadow-ink/20">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-white/50">document-assistant.ts</span>
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-6 text-white/90 sm:text-[13px]">
          <code>
            <span className={cm}>{"// Week 13 · AI Document Assistant (RAG)"}</span>
            {"\n"}
            <span className={kw}>const</span> context = <span className={kw}>await</span> chroma.
            <span className={fn}>query</span>(question);
            {"\n"}
            <span className={kw}>const</span> answer = <span className={kw}>await</span> openai.
            <span className={fn}>chat</span>({"{"}
            {"\n"}
            {"  "}system: <span className={str}>&quot;Answer from the docs only&quot;</span>,
            {"\n"}
            {"  "}messages: [...context, question],
            {"\n"}
            {"}"});
            {"\n"}
            res.<span className={fn}>json</span>({"{"} answer {"}"});
          </code>
        </pre>
        <div className="flex flex-wrap gap-1.5 border-t border-white/10 px-5 py-4">
          {["React", "TypeScript", "Node.js", "MySQL", "OpenAI", "RAG"].map((t) => (
            <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-[11px] font-semibold text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute -left-2 -top-8 flex -rotate-2 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-xl sm:-left-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-white">
          <CheckIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold">Answer generated</p>
          <p className="text-xs text-ink-soft">From 3 uploaded documents</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Who it's for + prerequisites ---------- */
export function AiAudience() {
  const tones = ["bg-brand-soft text-brand", "bg-accent-soft text-accent", "bg-mint-soft text-mint"];
  return (
    <section id="audience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for students and freshers who want to build"
          body="If you want to go from basic web knowledge to shipping AI-powered apps, this programme is for you."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aiAudience.map((a, i) => {
            const Icon = audienceIcons[a.icon];
            return (
              <div key={a.title} className="rounded-3xl border border-line bg-white p-7">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tones[i]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{a.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-3xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:p-7">
          <p className="shrink-0 font-display text-lg font-bold">You&apos;ll need:</p>
          <ul className="flex flex-wrap gap-2">
            {aiPrerequisites.required.map((r) => (
              <li key={r} className="rounded-full bg-paper px-3 py-1.5 text-sm font-medium">{r}</li>
            ))}
          </ul>
          <p className="text-sm text-ink-soft sm:ml-auto sm:max-w-[16rem]">{aiPrerequisites.notRequired}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Programme overview, price and enroll ---------- */
export function AiProgramme() {
  const cta = aiCta();
  return (
    <section id="programme" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] bg-brand text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">The programme</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {aiCourse.name}
              </h2>
              <p className="mt-3 font-display text-lg font-semibold text-accent">{aiCourse.tagline}</p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{aiCourse.positioning}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {aiProgramme.facts.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-white/10 p-4">
                    <dt className="sr-only">{f.label}</dt>
                    <dd className="whitespace-nowrap font-display text-2xl font-bold">{f.value}</dd>
                    <dd className="mt-1 text-xs leading-snug text-white/70">{f.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8">
                <div className="flex h-3 gap-1 overflow-hidden rounded-full">
                  <div className="bg-white" style={{ width: `${aiProgramme.split[0].weight}%` }} />
                  <div className="bg-accent" style={{ width: `${aiProgramme.split[1].weight}%` }} />
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span>
                    <strong className="font-display">{aiProgramme.split[0].weight}%</strong>{" "}
                    <span className="text-white/75">{aiProgramme.split[0].label}</span>
                  </span>
                  <span>
                    <strong className="font-display text-accent">{aiProgramme.split[1].weight}%</strong>{" "}
                    <span className="text-white/75">{aiProgramme.split[1].label}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 text-ink">
              <p className="font-display text-lg font-bold">What&apos;s included</p>
              <ul className="mt-5 space-y-3">
                {aiProgramme.included.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {aiCourse.price && (
                <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1 border-t border-line pt-6">
                  <span className="font-display text-4xl font-bold">{formatPrice(aiCourse.price.offer)}</span>
                  <span className="pb-1 text-lg text-ink-soft line-through">{formatPrice(aiCourse.price.original)}</span>
                  <span className="mb-1.5 rounded-full bg-mint-soft px-2.5 py-1 text-xs font-bold text-mint">
                    Save {Math.round((1 - aiCourse.price.offer / aiCourse.price.original) * 100)}%
                  </span>
                </div>
              )}

              <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-brand-soft px-3.5 py-3 text-sm font-medium">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {aiCourse.trustLine}
              </p>

              <a
                href={cta.href}
                {...ext}
                className={`mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold transition ${
                  aiCourse.enrollUrl
                    ? "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark"
                    : "bg-[#25d366] text-ink hover:brightness-95"
                }`}
              >
                {!aiCourse.enrollUrl && <WhatsAppIcon className="h-5 w-5" />}
                {aiCourse.enrollUrl ? "Enroll now" : "Enquire about fees & next batch"}
                {aiCourse.enrollUrl && <ArrowIcon className="h-4 w-4" />}
              </a>
              {aiCourse.enrollUrl && (
                <p className="mt-3 text-center text-xs text-ink-soft">
                  By enrolling, you agree to our{" "}
                  <Link href="/terms" className="underline hover:text-ink">Terms</Link> and{" "}
                  <Link href="/refund-policy" className="underline hover:text-ink">Refund Policy</Link> (fees are
                  non-refundable).
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech stack: the layers of an app ---------- */
export function AiStack() {
  const layerIcons = { frontend: MonitorIcon, backend: ServerIcon, database: DatabaseIcon };
  const layerTones = {
    frontend: "bg-[#82aaff]/15 text-[#82aaff]",
    backend: "bg-mint/20 text-[#5ee0b0]",
    database: "bg-[#c792ea]/15 text-[#c792ea]",
  };
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tech stack</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Every layer of a modern AI app
          </h2>
          <p className="mt-4 text-lg text-white/70">
            You&apos;ll build the full stack yourself, then plug AI into it, using the tools real product teams use.
          </p>
        </div>

        {/* Frontend -> Backend -> Database */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:gap-10">
          {aiStack.layers.map((layer, i) => {
            const Icon = layerIcons[layer.key as keyof typeof layerIcons];
            return (
              <div key={layer.key} className="relative">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:h-full">
                  <div className="flex items-start justify-between gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${layerTones[layer.key as keyof typeof layerTones]}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/70">
                      {layer.weeks}
                    </span>
                  </div>
                  <p className="mt-4 font-display text-xl font-bold">{layer.group}</p>
                  <p className="mt-1 text-sm text-white/60">{layer.role}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {layer.items.map((t) => (
                      <li key={t} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/85">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* connector to the next layer */}
                {i < aiStack.layers.length - 1 && (
                  <>
                    <span aria-hidden className="absolute -right-8 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink text-white/60 lg:flex">
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                    <span aria-hidden className="mx-auto -mb-2 mt-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 lg:hidden">
                      <ArrowIcon className="h-4 w-4 rotate-90" />
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* AI plugs into the backend */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <span aria-hidden className="h-8 w-px bg-gradient-to-b from-white/20 to-accent" />
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              AI features plug into your backend
            </span>
            <span aria-hidden className="h-8 w-px bg-accent" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/60 via-brand/60 to-[#c792ea]/50 p-px">
          <div className="relative rounded-[calc(1.5rem-1px)] bg-[#161a3d] p-6 sm:p-8">
            <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="lg:w-64 lg:shrink-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-white">
                    <SparkleIcon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/70">
                    {aiStack.ai.weeks}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl font-bold">{aiStack.ai.group}</p>
                <p className="mt-1 text-sm text-white/65">{aiStack.ai.role}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {aiStack.ai.items.map((t) => (
                  <li key={t} className="rounded-lg border border-accent/25 bg-accent/10 px-3 py-1.5 text-sm font-medium text-white">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tools used throughout */}
        <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center">
          <p className="flex shrink-0 items-center gap-3 font-display font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/80">
              <WrenchIcon className="h-5 w-5" />
            </span>
            {aiStack.tools.group}
          </p>
          <ul className="flex flex-wrap gap-1.5 sm:ml-2">
            {aiStack.tools.items.map((t) => (
              <li key={t} className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-white/85">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Curriculum ---------- */
export function AiCurriculum() {
  const tracks = [
    { key: "fullstack", label: "Full Stack Development", sub: "Weeks 1–10", tone: "bg-brand-soft text-brand" },
    { key: "ai", label: "AI Development", sub: "Weeks 11–16", tone: "bg-accent-soft text-accent" },
  ];
  return (
    <section id="curriculum" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Curriculum"
          title="11 modules over 16 weeks"
          body="Live training 3 days a week, 2 hours a day, for 16 weeks. Every module ends with something you build, and you use it right away in your internship."
        />

        {tracks.map((t) => (
          <div key={t.key} className="mt-12">
            <div className="flex items-baseline gap-3">
              <h3 className="font-display text-2xl font-bold">{t.label}</h3>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${t.tone}`}>{t.sub}</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {aiModules
                .filter((m) => m.track === t.key)
                .map((m) => (
                  <details
                    key={m.module}
                    className="group rounded-3xl border border-line bg-white p-6 transition open:shadow-lg open:shadow-ink/5"
                  >
                    <summary className="flex cursor-pointer items-start gap-4">
                      <span className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl ${t.tone}`}>
                        <span className="text-[10px] font-semibold uppercase leading-none">Mod</span>
                        <span className="font-display text-lg font-bold leading-tight">{m.module}</span>
                      </span>
                      <span className="flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-soft">{m.weeks}</span>
                        <span className="mt-0.5 block font-display text-lg font-bold leading-snug">{m.title}</span>
                      </span>
                      <PlusIcon className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition-transform group-open:rotate-45" />
                    </summary>
                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {m.topics.map((topic) => (
                        <li key={topic} className="flex gap-3 text-[15px]">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 rounded-2xl bg-paper px-4 py-3 text-sm">
                      <span className="font-semibold">You&apos;ll build:</span> {m.project}
                    </p>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
export function AiProjects() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Your portfolio"
          title="9 projects and a capstone to show employers"
          body="Finish with 3–4 strong individual portfolio projects, plus a team project from your internship."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((p, i) => (
            <li key={p.name} className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-5">
              <span className="font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-display font-bold">{p.name}</span>
                <span className="text-sm text-ink-soft">{p.skills}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl bg-accent-soft p-8 sm:p-10">
          <h3 className="font-display text-2xl font-bold">Final capstone: pick your own AI-powered product</h3>
          <p className="mt-2 text-ink-soft">
            Choose from approved industry ideas (with mentor approval) and build it with React, TypeScript, Node.js,
            MySQL, Prisma, authentication, OpenAI and Docker.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {aiCapstoneIdeas.map((idea) => (
              <li key={idea} className="rounded-full bg-white px-3.5 py-2 text-sm font-medium">{idea}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Internship: 6-month track + team board ---------- */
const TOTAL_WEEKS = 26;
const TRAINING_WEEKS = 16;
const phaseTones = ["bg-[#82aaff]", "bg-mint", "bg-accent", "bg-[#c792ea]"];
const phaseText = ["text-[#82aaff]", "text-mint", "text-accent", "text-[#c792ea]"];

export function AiInternship() {
  return (
    <section id="internship" className="scroll-mt-20 bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Full-time internship from Day 1</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Work in a real development team from Day 1
          </h2>
          <p className="mt-4 text-lg text-white/70">
            You don&apos;t wait until the course ends. Your training and your internship run side by side, so every
            new skill goes straight into your team&apos;s product.
          </p>
        </div>

        <ProgrammeTrack />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <TeamBoard />

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold">How it works</h3>
              <ul className="mt-4 grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
                {aiInternship.structure.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-white/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold">Where the projects come from</h3>
              <ol className="mt-4 space-y-4">
                {aiInternship.sources.map((src, i) => (
                  <li key={src.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-sm font-bold text-accent">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{src.title}</span>
                      <span className="text-sm text-white/60">{src.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Gantt-style view of the 6 months: training lane + internship lane split into phases. */
function ProgrammeTrack() {
  const pct = (weeks: number) => `${(weeks / TOTAL_WEEKS) * 100}%`;
  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8">
      {/* month scale */}
      <div className="grid grid-cols-[5.5rem_1fr] gap-3 sm:grid-cols-[8.5rem_1fr] sm:gap-5">
        <span />
        <div className="grid grid-cols-6 text-[11px] font-semibold uppercase tracking-wider text-white/45">
          {[1, 2, 3, 4, 5, 6].map((m) => (
            <span key={m} className="border-l border-white/10 pl-1.5">
              <span className="hidden sm:inline">Month </span>
              <span className="sm:hidden">M</span>
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* training lane */}
      <div className="mt-4 grid grid-cols-[5.5rem_1fr] items-center gap-3 sm:grid-cols-[8.5rem_1fr] sm:gap-5">
        <span className="text-sm font-semibold leading-tight text-white/80">
          Live training
          <span className="block text-xs font-normal text-white/50">3 days a week</span>
        </span>
        <div className="relative h-11 rounded-xl bg-white/[0.06]">
          <div
            className="absolute inset-y-0 left-0 flex items-center rounded-xl border border-white/20 bg-white/15 px-3 text-xs font-semibold sm:text-sm"
            style={{ width: pct(TRAINING_WEEKS) }}
          >
            Weeks 1–16<span className="hidden sm:inline">&nbsp;· 96 hours</span>
          </div>
        </div>
      </div>

      {/* internship lane */}
      <div className="mt-3 grid grid-cols-[5.5rem_1fr] items-center gap-3 sm:grid-cols-[8.5rem_1fr] sm:gap-5">
        <span className="text-sm font-semibold leading-tight text-white/80">
          Internship
          <span className="block text-xs font-normal text-white/50">Full time</span>
        </span>
        <div className="flex h-11 gap-1 overflow-hidden rounded-xl">
          {aiInternship.phases.map((p, i) => (
            <div
              key={p.title}
              className={`flex items-center px-2 text-xs font-bold text-ink sm:px-3 sm:text-sm ${phaseTones[i]}`}
              style={{ width: pct(p.end - p.start + 1) }}
            >
              <span className="hidden truncate md:inline">{p.title}</span>
              <span className="md:hidden">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Day 1 marker */}
      <div className="mt-3 grid grid-cols-[5.5rem_1fr] gap-3 sm:grid-cols-[8.5rem_1fr] sm:gap-5">
        <span />
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Both start on Day 1
        </span>
      </div>

      {/* phase details */}
      <ol className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {aiInternship.phases.map((p, i) => (
          <li key={p.title}>
            <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${phaseText[i]}`}>
              <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] text-ink ${phaseTones[i]}`}>
                {i + 1}
              </span>
              {p.weeks}
            </p>
            <p className="mt-2 font-display text-lg font-bold">{p.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/60">{p.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Illustration of a team's sprint board during the internship (example content). */
function TeamBoard() {
  const team = ["Frontend", "Backend", "Database", "AI", "Mentor"];
  const tasks = [
    { title: "Customer list page with search", owner: "Frontend", status: "Done", tone: "bg-mint-soft text-mint" },
    { title: "Login API with JWT", owner: "Backend", status: "In review", tone: "bg-brand-soft text-brand" },
    { title: "AI follow-up suggestions", owner: "AI", status: "In progress", tone: "bg-accent-soft text-accent" },
    { title: "Customer & deals tables in Prisma", owner: "Database", status: "To do", tone: "bg-paper text-ink-soft" },
  ];
  return (
    <div className="rounded-3xl bg-white p-6 text-ink sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Example team · Sprint 6</p>
          <p className="mt-1 font-display text-xl font-bold">AI-powered CRM</p>
        </div>
        <span className="rounded-full bg-mint-soft px-2.5 py-1 text-xs font-semibold text-mint">On track</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {team.map((role) => (
          <span
            key={role}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
              role === "Mentor" ? "bg-ink text-white" : "bg-paper"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${role === "Mentor" ? "bg-accent" : "bg-brand"}`} />
            {role}
          </span>
        ))}
      </div>

      <ul className="mt-6 divide-y divide-line rounded-2xl border border-line">
        {tasks.map((t) => (
          <li key={t.title} className="flex items-center justify-between gap-3 px-4 py-3.5">
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-medium">{t.title}</span>
              <span className="text-xs text-ink-soft">{t.owner}</span>
            </span>
            <span
              className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-bold ${t.tone}`}
            >
              {t.status}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm text-ink-soft">
        Every week: stand-ups, code reviews on GitHub and a mentor check-in, just like a real product team.
      </p>
    </div>
  );
}

/* ---------- Mentorship, community, career ---------- */
export function AiSupport() {
  const tones = ["text-brand", "text-mint", "text-accent"];
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Support" title="You won't learn alone" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {aiSupport.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-line bg-paper p-7">
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px]">
                    <CheckIcon className={`mt-0.5 h-5 w-5 shrink-0 ${tones[i]}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certificates + assessment ---------- */
export function AiCertificates() {
  const tones = ["bg-brand", "bg-accent", "bg-mint", "bg-ink"];
  return (
    <section id="certificate" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Earn two certificates"
          body="Assessed on what you build, not on theory exams alone."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {aiCertificates.map((c, i) => (
            <div key={c.title} className="rounded-3xl border border-line bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Certificate {i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{c.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {c.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-line bg-white p-7">
          <h3 className="font-display text-lg font-bold">How you&apos;re assessed</h3>
          <div className="mt-5 flex h-3 gap-1 overflow-hidden rounded-full">
            {aiAssessment.map((a, i) => (
              <div key={a.label} className={tones[i]} style={{ width: `${a.weight}%` }} />
            ))}
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
            {aiAssessment.map((a, i) => (
              <li key={a.label} className="flex items-start gap-3">
                <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${tones[i]}`} />
                <span>
                  <span className="block font-display text-xl font-bold">{a.weight}%</span>
                  <span className="text-sm text-ink-soft">{a.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl font-bold leading-snug sm:text-3xl">
          {aiCourse.closing}
        </p>
      </div>
    </section>
  );
}
