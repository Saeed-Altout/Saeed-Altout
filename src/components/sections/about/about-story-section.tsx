import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, RocketIcon, HeartIcon } from "lucide-react";

const storyPoints = [
  {
    icon: CodeIcon,
    title: "The Beginning",
    description:
      "My journey into web development started with a curiosity about how websites work. What began as a hobby quickly transformed into a passion for creating beautiful, functional digital experiences.",
  },
  {
    icon: RocketIcon,
    title: "Growth & Learning",
    description:
      "Through continuous learning and hands-on projects, I've mastered modern frontend technologies. Each project has been an opportunity to push boundaries and refine my craft.",
  },
  {
    icon: HeartIcon,
    title: "The Mission",
    description:
      "Today, I'm committed to building web applications that make a difference. My goal is to create solutions that are not only technically sound but also delightful to use.",
  },
];

export function AboutStorySection() {
  return (
    <section id="about-story">
      <Container className="flex items-center justify-center flex-col gap-y-12 py-20">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold max-w-3xl mx-auto">
            My <span className="underline">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From curiosity to expertise, here&apos;s how I became the developer
            I am today.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyPoints.map((point, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                  <point.icon className="size-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
