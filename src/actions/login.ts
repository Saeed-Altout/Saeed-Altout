"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { cookies } from "next/headers";

export async function login(
  values: z.infer<typeof LoginSchema>
): Promise<ApiResponse> {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
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

    const cookieStore = await cookies();
    cookieStore.set("NEXT_ACCESS_TOKEN", data.accessToken, {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 15, // 15 min
    });

    cookieStore.set("NEXT_REFRESH_TOKEN", data.refreshToken, {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

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
