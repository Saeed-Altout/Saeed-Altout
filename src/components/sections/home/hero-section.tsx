import { StarsIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero">
      <Container className="flex items-center justify-center flex-col gap-y-6">
        <Badge variant="outline">
          <StarsIcon />
          Frontend Developer specialist in React.js & Next.js
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-center">
          Explore, Thinking & Growth with{" "}
          <span className="underline">Saeed Altout</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl text-center leading-relaxed">
          Building responsive, interactive web interfaces with React,
          TypeScript, Tailwind CSS, and Framer Motion, using reusable UI
          components and animations for modern, engaging experiences.
        </p>

        <Button>Explore Our Projects</Button>
      </Container>
    </section>
  );
}
