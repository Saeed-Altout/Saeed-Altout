import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@/components/ui/icon";

export function TechnologyCard({
  tech,
}: {
  tech: { name: string; color: string; label: string };
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div key={tech.name} className="w-50">
          <Icon
            name={tech.name}
            className="size-28 transition-all text-primary"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tech.label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
