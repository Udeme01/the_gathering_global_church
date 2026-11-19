import Hero from "@/components/home/Hero";
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
      <section className="h-screen"></section>
    </main>
  );
}