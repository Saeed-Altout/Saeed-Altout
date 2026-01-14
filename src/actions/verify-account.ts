import { VerifyAccountSchema } from "@/schemas";
import z from "zod";

export async function verifyAccount(
  values: z.infer<typeof VerifyAccountSchema>
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("http://localhost:3000/auth/verify-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message: "Account verified successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
