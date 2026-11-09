import type { Metadata } from "next";
import { aiCourse, aiDailyUpdates, aiFaqs, aiNav } from "../_content/ai-fullstack";
import {
  AiAudience,
  AiCertificates,
  AiCurriculum,
  AiHero,
  AiInternship,
  AiProgramme,
  AiProjects,
  AiStack,
  AiSupport,
  aiCta,
} from "../_components/ai-sections";
import { Footer, WhatsAppFloat } from "../_components/footer";
import { Header } from "../_components/header";
import { DailyUpdates, Faq } from "../_components/sections";

export const metadata: Metadata = {
  title: "AI Full Stack Developer Course | The PM Lab",
  // Keep the page out of search results while the course is private.
  robots: aiCourse.listed ? undefined : { index: false, follow: false },
  description:
    "6-month AI Full Stack Development programme for college students and freshers: React, TypeScript, Node.js, MySQL, OpenAI, RAG and AI agents, with 9+ projects and a full-time team internship from Day 1. Taught in Hinglish.",
};

export default function AiFullStackPage() {
  return (
    <>
      <Header nav={aiNav} cta={aiCta()} updatesHref={`${aiCourse.slug}#updates`} />
      <main className="flex-1">
        <AiHero />
        <AiAudience />
        <AiProgramme />
        <AiStack />
        <AiCurriculum />
        <AiProjects />
        <AiInternship />
        <AiSupport />
        <AiCertificates />
        <Faq items={aiFaqs} />
        <DailyUpdates content={aiDailyUpdates} course="AI Full Stack Development" />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
