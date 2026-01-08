import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { NoResult } from "@/components/shared/no-result";

import { projects } from "@/constants";

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects">
      <Container className="space-y-8">
        <Heading title="Explore Projects" />
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <NoResult
            title="No Featured Projects"
            description="Featured projects will be displayed here once available."
          />
        )}
      </Container>
    </section>
  );
}
