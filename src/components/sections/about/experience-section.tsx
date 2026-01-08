import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { ExperienceCard } from "@/components/cards/experience-card";

import { experiences } from "@/constants";

export function ExperienceSection() {
  return (
    <section id="experience">
      <Container className="space-y-8">
        <Heading
          title="Professional"
          special="Experience"
          description="A track record of delivering exceptional results and continuous growth in the web development field."
        />
        <div className="w-full max-w-4xl flex flex-col mx-auto gap-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </Container>
    </section>
  );
}
