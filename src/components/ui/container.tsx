import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("px-4 sm:px-8 lg:px-12 xl:px-16", className)}>
      {children}
    </div>
  );
}
