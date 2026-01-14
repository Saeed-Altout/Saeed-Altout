import { LucideIcon } from "lucide-react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

export function Heading({
  title,
  description,
  special,
  icon: Icon,
  badge,
  ...props
}: React.ComponentProps<"div"> & {
  title: string;
  description?: string;
  special?: string;
  icon?: LucideIcon;
  badge?: string;
}) {
  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center gap-y-4 text-center"
    >
      {badge && (
        <Badge variant="outline">
          {Icon && <Icon />}
          {badge}
        </Badge>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-primary">
        {title} <span className="underline">{special}</span>
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function Heading2({
  title,
  description,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  title: string;
  description?: string;
}) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  );
}
