import { UserIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function AboutHeroSection() {
  return (
    <section id="about-hero">
      <Container className="relative flex items-center justify-center flex-col gap-y-6 text-center py-20">
        <Badge variant="outline">
          <UserIcon />
          About Me
        </Badge>

        <h1 className="text-6xl font-bold max-w-4xl">
          Crafting Digital Experiences with{" "}
          <span className="underline">Passion & Precision</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          I&apos;m Saeed Altout, a frontend developer dedicated to building
          modern, scalable, and user-centric web applications. With a focus on
          clean code and exceptional user experiences, I transform ideas into
          reality.
        </p>
      </Container>
    </section>
  );
}
