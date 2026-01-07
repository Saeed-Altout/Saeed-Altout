import { Container } from "@/components/ui/container";

const stats = [
  {
    value: "3+",
    label: "Years Experience",
    description: "Building web applications",
  },
  {
    value: "50+",
    label: "Projects Completed",
    description: "From concept to deployment",
  },
  {
    value: "20+",
    label: "Technologies Mastered",
    description: "Modern web stack",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    description: "Quality guaranteed",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="bg-muted/50">
      <Container className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 rounded-lg hover:bg-background transition-colors duration-300"
            >
              <p className="text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-xl font-semibold">{stat.label}</p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
