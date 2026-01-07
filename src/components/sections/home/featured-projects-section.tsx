import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";
import { projects } from "@/constants";

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects">
      <Container className="flex items-center justify-center flex-col gap-y-6 py-20">
        <h1 className="text-6xl font-bold max-w-4xl text-center">
          Explore <span className="underline">Projects</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-relaxed text-center">
          Discover a curated selection of my most impactful projects, showcasing
          my skills and expertise in web development.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
