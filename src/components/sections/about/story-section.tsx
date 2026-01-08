import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StoryCard } from "@/components/cards/story-card";

import { storyPoints } from "@/constants";

export function StorySection() {
  return (
    <section id="about-story">
      <Container className="space-y-8">
        <Heading
          title="My Journey"
          description="From curiosity to expertise, here's how I became the developer I am today."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyPoints.map((point, index) => (
            <StoryCard key={index} point={point} />
          ))}
        </div>
      </Container>
    </section>
  );
}
