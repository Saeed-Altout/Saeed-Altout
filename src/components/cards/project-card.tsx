import Image from "next/image";
import { FolderIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants";

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Card className="pt-0 overflow-hidden">
      <CardHeader className="p-0 relative h-70 w-full flex items-center justify-center">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="size-full object-cover"
          />
        ) : (
          <FolderIcon className="size-20" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-l from-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent"></div>
      </CardHeader>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" size="lg">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
