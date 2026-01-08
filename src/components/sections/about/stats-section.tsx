import { Container } from "@/components/ui/container";
import { stats } from "@/constants";

export function StatsSection() {
  return (
    <section id="stats">
      <Container className="pt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
