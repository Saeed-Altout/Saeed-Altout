"use server";

import { auth } from "@/lib/auth";

export async function deleteProject(
  id: string
): Promise<{ success: boolean; message: string }> {
  try {
    const { token } = await auth();
    if (!token) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }
    const res = await fetch(`http://localhost:3000/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Something went wrong!",
      };
    }

    return {
      success: true,
      message: "Project deleted successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
