export function Container({ children, ...props }: React.ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}
