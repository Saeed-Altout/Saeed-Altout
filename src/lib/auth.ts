"use server";
import { cookies } from "next/headers";

interface Auth {
  isAuthentication: boolean;
  token: string | undefined;
}
export async function auth(): Promise<Auth> {
  const cookieStore = await cookies();
  const isAuthentication = cookieStore.has("NEXT_ACCESS_TOKEN");
  const token = cookieStore.get("NEXT_ACCESS_TOKEN")?.value;

  return {
    isAuthentication,
    token,
  };
}

export async function getCurrentUser(): Promise<User | null> {
  const { token } = await auth();

  if (!token) return null;

  const res = await fetch("http://localhost:3000/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    return null;
  }

  return data;
}
