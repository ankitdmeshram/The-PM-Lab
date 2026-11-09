import { Footer, WhatsAppFloat } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
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
} from "./_components/sections";

export default function Home() {
  return (
    <>
      <Header />
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
