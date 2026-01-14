import { FeaturedProjectsSection } from "@/components/sections/home/featured-projects-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { TechnologiesSection } from "@/components/sections/common/technologies-section";
import { CTASection } from "@/components/sections/common/cta-section";

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechnologiesSection />
      <FeaturedProjectsSection />
      <CTASection />
    </main>
  );
}
