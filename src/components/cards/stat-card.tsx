import { stats } from "@/constants";

export default function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  return (
    <div className="text-center space-y-2 p-6">
      <p className="text-5xl font-bold text-primary">{stat.value}</p>
      <p className="text-xl font-semibold">{stat.label}</p>
      <p className="text-sm text-muted-foreground">{stat.description}</p>
    </div>
  );
}
