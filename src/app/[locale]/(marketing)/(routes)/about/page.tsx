import { HeroSection } from "@/components/sections/about/hero-section";
import { StorySection } from "@/components/sections/about/story-section";
import { SkillsSection } from "@/components/sections/about/skills-section";
import { ExperienceSection } from "@/components/sections/about/experience-section";
import { StatsSection } from "@/components/sections/about/stats-section";
import { CTASection } from "@/components/sections/common/cta-section";

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <StorySection />
      <SkillsSection />
      <ExperienceSection />
      <CTASection />
    </main>
  );
}
