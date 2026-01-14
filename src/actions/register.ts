"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export async function register(
  values: z.infer<typeof RegisterSchema>
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      message: Array.isArray(data.message)
        ? data.message.join(", ")
        : data.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
