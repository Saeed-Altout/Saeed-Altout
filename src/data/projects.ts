export interface Project {
  id: string;
  name: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  isFeatured: boolean;
  isPublished: boolean;
  like: number;
  createdAt: Date;
  updatedAt: Date;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch("http://localhost:3000/projects");
    const data = await res.json();
    return data;
  } catch {
    return [];
  }
}
export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const res = await fetch(`http://localhost:3000/projects/${id}`);
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}
