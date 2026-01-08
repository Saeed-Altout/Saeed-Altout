import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { storyPoints } from "@/constants";

export function StoryCard({ point }: { point: (typeof storyPoints)[0] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
          <point.icon className="size-7 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">{point.title}</CardTitle>
        <CardDescription>{point.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
