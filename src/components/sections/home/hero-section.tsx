import { StarsIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="size-300 left-[50%] -translate-x-[50%] bg-[#db1fff] absolute rounded-full -top-[85%] z-0 blur-[150px]" />
      <Container className="relative z-10 flex items-center justify-center flex-col gap-y-6 text-center py-20">
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
