import { TechnologyCard } from "@/components/cards/technology-card";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";

import { technologies } from "@/constants";

export function TechnologiesSection() {
  return (
    <section id="technologies">
      <Container className="relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden pt-6">
        <Marquee pauseOnHover repeat={3} className="[--duration:50s]">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} tech={tech} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-3/6 bg-linear-to-r from-background/95 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-3/6 bg-linear-to-l from-background/95 to-transparent"></div>
        <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-linear-to-b from-background/90 to-transparent"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-background/90 to-transparent"></div>
      </Container>
    </section>
  );
}
