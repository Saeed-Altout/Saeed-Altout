import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { SkillCard } from "@/components/cards/skill-card";
import { skillCategories } from "@/constants";

export function SkillsSection() {
  return (
    <section id="skills">
      <Container className="space-y-8">
        <Heading
          title="Technical"
          special="Expertise"
          description="A comprehensive toolkit for building modern web applications from concept to deployment."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.category} skill={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
