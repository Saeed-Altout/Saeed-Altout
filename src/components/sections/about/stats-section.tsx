import { StatCard } from "@/components/cards/stat-card";
import { Container } from "@/components/ui/container";
import { stats } from "@/constants";

export function StatsSection() {
  return (
    <section id="stats">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </Container>
    </section>
  );
}
