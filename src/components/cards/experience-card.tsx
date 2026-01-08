import { BriefcaseIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { experiences } from "@/constants";

export function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0">
      <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <BriefcaseIcon className="size-5" />
              {exp.role}
            </h3>
            <p className="text-lg text-muted-foreground">{exp.company}</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">{exp.period}</Badge>
            <Badge variant="secondary">{exp.type}</Badge>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {exp.description}
        </p>

        <div className="space-y-2">
          <p className="font-semibold text-sm">Key Achievements:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {exp.achievements.map((achievement, achIndex) => (
              <li key={achIndex}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
