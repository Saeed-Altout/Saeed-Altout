import { Icon } from "@/components/ui/icon";
import { Marquee } from "@/components/ui/marquee";

const technologies = [
  {
    name: "reactquery",
    color: "#FF4154",
  },
  {
    name: "nodedotjs",
    color: "#5FA04E",
  },
  {
    name: "typescript",
    color: "#3178C6",
  },
  {
    name: "prisma",
    color: "#2D3748",
  },
  {
    name: "react",
    color: "#61DAFB",
  },
  {
    name: "zod",
    color: "#408AFF",
  },
  {
    name: "nextdotjs",
    color: "#000000",
  },
];

export function TechnologiesSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden py-8">
      {/* Marquee moving left to right (default) */}
      <Marquee pauseOnHover repeat={3} className="[--duration:40s]">
        {technologies.map((tech) => (
          <div key={tech.name} className="w-50">
            <Icon
              name={tech.name}
              className="size-28 transition-all text-primary"
            />
          </div>
        ))}
      </Marquee>

      {/* Stylish gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-3/6 bg-linear-to-r from-background/95 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-3/6 bg-linear-to-l from-background/95 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-linear-to-b from-background/90 to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-background/90 to-transparent"></div>
    </div>
  );
}
