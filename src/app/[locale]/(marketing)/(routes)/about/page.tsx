import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { AboutStorySection } from "@/components/sections/about/about-story-section";
import { SkillsSection } from "@/components/sections/about/skills-section";
import { ExperienceSection } from "@/components/sections/about/experience-section";
import { StatsSection } from "@/components/sections/about/stats-section";
import { CTASection } from "@/components/sections/common/cta-section";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <StatsSection />
      <AboutStorySection />
      <SkillsSection />
      <ExperienceSection />
      <CTASection />
    </main>
  );
}
