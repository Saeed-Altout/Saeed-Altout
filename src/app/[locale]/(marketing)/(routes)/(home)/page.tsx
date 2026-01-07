import { CTASection } from "@/components/sections/home/cta-section";
import { FeaturedProjectsSection } from "@/components/sections/home/featured-projects-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { TechnologiesSection } from "@/components/sections/home/technologies-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechnologiesSection />
      <FeaturedProjectsSection />
      <CTASection />
    </main>
  );
}
