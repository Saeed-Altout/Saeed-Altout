import { StarsIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export function HeroSection() {
  return (
    <section id="hero">
      <Container className="flex items-center justify-center flex-col gap-y-6">
        <Heading
          title="Explore, Thinking & Growth with"
          description="I'm Saeed Altout, a frontend developer dedicated to building modern, scalable, and user-centric web applications. With a focus on clean code and exceptional user experiences, I transform ideas into reality."
          special="Saeed Altout"
          badge="Frontend Developer specialist in React.js & Next.js"
          icon={StarsIcon}
        />
        <Button>Explore Our Projects</Button>
      </Container>
    </section>
  );
}
