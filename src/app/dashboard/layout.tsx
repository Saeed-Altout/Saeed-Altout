import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (user && user.role !== "admin") {
    redirect("/");
  }
  return <main>{children}</main>;
}
