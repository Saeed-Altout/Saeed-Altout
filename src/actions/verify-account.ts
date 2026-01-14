import { VerifyAccountSchema } from "@/schemas";
import { toast } from "sonner";
import z from "zod";

export async function verifyAccount(
  values: z.infer<typeof VerifyAccountSchema>
) {
  try {
    const res = await fetch("http://localhost:3000/auth/verify-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(
        Array.isArray(data.message) ? data.message.join(", ") : data.message
      );
      return;
    }

    toast.success(
      Array.isArray(data.message) ? data.message.join(", ") : data.message
    );
  } catch {
    toast.error("Something went wrong. Please try again.");
  }
}
