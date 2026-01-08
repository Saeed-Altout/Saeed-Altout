import { UserIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function HeroSection() {
  return (
    <section id="hero">
      <Container>
        <Heading
          title="Crafting Digital Experiences with"
          special="Passion & Precision"
          description="I'm Saeed Altout, a frontend developer dedicated to building modern, scalable, and user-centric web applications. With a focus on clean code and exceptional user experiences, I transform ideas into reality."
          badge="About Saeed Altout"
          icon={UserIcon}
        />
      </Container>
    </section>
  );
}
