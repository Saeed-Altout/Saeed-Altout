export function Heading({
  title,
  description,
  ...props
}: React.ComponentProps<"div"> & {
  title: string;
  description?: string;
}) {
  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center gap-y-4 text-center"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-primary">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
