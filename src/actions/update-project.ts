"use server";

import { z } from "zod";
import { auth } from "@/lib/auth";
import { UpdateProjectSchema } from "@/schemas";
import type { Project } from "@/data/projects";

export async function updateProject(
  values: z.infer<typeof UpdateProjectSchema>,
  projectId: string
): Promise<{ success: boolean; message: string; data?: Project }> {
  try {
    const { token } = await auth();
    if (!token) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }
    const res = await fetch(`http://localhost:3000/projects/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: Array.isArray(data.message)
          ? data.message.join(", ")
          : data.message,
      };
    }

    return {
      success: true,
      message: "Project updated successfully",
      data: data,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
