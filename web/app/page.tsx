import { homeUpdates } from "./_content/landing";
import { Footer, WhatsAppFloat } from "./_components/footer";
import { Header } from "./_components/header";
import { CourseCards, LandingHero, WhyUs } from "./_components/landing-sections";
import { DailyUpdates } from "./_components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LandingHero />
        <CourseCards />
        <WhyUs />
        <DailyUpdates content={homeUpdates} course="General" />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
