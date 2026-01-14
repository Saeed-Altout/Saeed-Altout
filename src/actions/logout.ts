"use server";
import { cookies } from "next/headers";

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("NEXT_ACCESS_TOKEN");
  cookieStore.delete("NEXT_REFRESH_TOKEN");
}

// export async function logout() {
//   try {
//     const cookieStore = await cookies();
//     const token = cookieStore.get("NEXT_ACCESS_TOKEN")?.value;

//     if (!token) {
//       return { ok: false, message: "Not authenticated" };
//     }
//     const res = await fetch("http://localhost:3000/auth/logout", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       return {
//         error: Array.isArray(data.message)
//           ? data.message.join(", ")
//           : data.message,
//       };
//     }
//     cookieStore.delete("NEXT_ACCESS_TOKEN");

//     return {
//       success: Array.isArray(data.message)
//         ? data.message.join(", ")
//         : data.message,
//     };
//   } catch {
//     return { error: "Something went wrong. Please try again." };
//   }
// }
