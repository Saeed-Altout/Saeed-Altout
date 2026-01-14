import { redirect } from "next/navigation";

import { ProjectForm } from "./_components/project-form";

import { getProjectById } from "@/data/projects";
import { Heading2 } from "@/components/ui/heading";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;

  if (!projectId) {
    redirect("/dashboard/projects");
  }

  const project = await getProjectById(projectId);

  if (!project) {
    redirect("/dashboard/projects");
  }

  return (
    <>
      <Heading2 title={project.name} />
      <ProjectForm initialData={project} />
    </>
  );
}
