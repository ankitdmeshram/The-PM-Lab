import type { Metadata } from "next";
import { nav, site } from "../_content/home";
import { Footer, WhatsAppFloat } from "../_components/footer";
import { Header } from "../_components/header";
import { Hero } from "../_components/hero";
import {
  Audience,
  Build,
  Certificate,
  DailyUpdates,
  ClassFormat,
  Course,
  Curriculum,
  Faq,
  Roles,
} from "../_components/sections";

export const metadata: Metadata = {
  title: "Project Management Course for College Students & Freshers | The PM Lab",
  description:
    "8-week live project management course in Hinglish for college students and freshers. Learn planning, Agile, Scrum and Jira by running a real project, and earn a course completion certificate.",
};

export default function ProjectManagementPage() {
  return (
    <>
      <Header nav={nav} cta={{ label: "Enroll now", href: site.enrollUrl, external: true }} updatesHref="/ai-project-management#updates" />
      <main className="flex-1">
        <Hero />
        <Audience />
        <Course />
        <Curriculum />
        <Build />
        <ClassFormat />
        <Certificate />
        <Roles />
        <Faq />
        <DailyUpdates />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
