import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { skillCategories } from "@/constants";

export function SkillCard({ skill }: { skill: (typeof skillCategories)[0] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{skill.category}</CardTitle>
        <CardDescription className="sr-only">Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skill.skills.map((skill, skillIndex) => (
            <Badge key={skillIndex} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
