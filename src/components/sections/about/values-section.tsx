import { Container } from "@/components/ui/container";
import {
  TargetIcon,
  LightbulbIcon,
  UsersIcon,
  TrendingUpIcon,
} from "lucide-react";

const values = [
  {
    icon: TargetIcon,
    title: "Quality First",
    description:
      "I believe in writing clean, maintainable code that stands the test of time. Every line of code is an opportunity to create something exceptional.",
    color: "text-blue-500",
  },
  {
    icon: LightbulbIcon,
    title: "Continuous Innovation",
    description:
      "The web evolves rapidly, and so do I. I'm committed to staying ahead of the curve, learning new technologies, and applying innovative solutions.",
    color: "text-yellow-500",
  },
  {
    icon: UsersIcon,
    title: "User-Centric Design",
    description:
      "At the heart of every project is the user. I prioritize creating intuitive, accessible experiences that delight and empower users.",
    color: "text-green-500",
  },
  {
    icon: TrendingUpIcon,
    title: "Growth Mindset",
    description:
      "Every challenge is an opportunity to learn and improve. I embrace feedback, iterate constantly, and strive for excellence in everything I do.",
    color: "text-purple-500",
  },
];

export function ValuesSection() {
  return (
    <section id="values">
      <Container className="flex items-center justify-center flex-col gap-y-12 py-20">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold max-w-3xl mx-auto">
            Core <span className="underline">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The principles that guide my work and define my approach to web
            development.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border-2 hover:border-primary transition-all duration-300 hover:shadow-xl bg-card"
            >
              <div className="space-y-4">
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`size-8 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
