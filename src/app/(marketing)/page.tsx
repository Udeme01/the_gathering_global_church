import Hero from "@/components/home/Hero";
import ServiceTimesSection from "@/components/home/ServiceTimesSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import WelcomeSection from "@/components/home/WelcomeSection";

export const metadata = {
  title: {
    absolute: "",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WelcomeSection />
      <ServiceTimesSection />
      <UpcomingEventsSection />
      <section className="h-screen"></section>
    </main>
  );
}
