import { StarsIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero">
      <Container className="relative flex items-center justify-center flex-col gap-y-6 text-center py-20">
        <Badge variant="outline">
          <StarsIcon />
          Frontend Developer specialist in React.js & Next.js
        </Badge>

        <h1 className="text-6xl font-bold max-w-4xl">
          Explore, Thinking & Growth with{" "}
          <span className="underline">Saeed Altout</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Building responsive, interactive web interfaces with React,
          TypeScript, Tailwind CSS, and Framer Motion, using reusable UI
          components and animations for modern, engaging experiences.
        </p>

        <Button>Explore Our Projects</Button>
      </Container>
    </section>
  );
}
