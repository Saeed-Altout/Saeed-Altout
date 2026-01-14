import { Heading2 } from "@/components/ui/heading";
import { getProjects } from "@/data/projects";
import { AddProjectModal } from "./_components/add-project-modal";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

export default async function ProjectPage() {
  const projects = await getProjects();
  return (
    <>
      <Heading2
        title={`Projects (${projects.length})`}
        description="Manage your projects"
      >
        <AddProjectModal />
      </Heading2>
      <DataTable columns={columns} data={projects || []} accessKey="name" />
    </>
  );
}
