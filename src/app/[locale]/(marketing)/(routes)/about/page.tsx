import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { AboutStorySection } from "@/components/sections/about/about-story-section";
import { SkillsSection } from "@/components/sections/about/skills-section";
import { ExperienceSection } from "@/components/sections/about/experience-section";
import { ValuesSection } from "@/components/sections/about/values-section";
import { StatsSection } from "@/components/sections/about/stats-section";
import { AboutCTASection } from "@/components/sections/about/about-cta-section";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutStorySection />
      <StatsSection />
      <SkillsSection />
      <ExperienceSection />
      <ValuesSection />
      <AboutCTASection />
    </main>
  );
}
