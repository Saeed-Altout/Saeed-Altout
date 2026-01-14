"use client";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";
export function LogoutButton({
  ...props
}: React.ComponentProps<typeof Button>) {
  const router = useRouter();

  const onClick = () => {
    logout();
    router.refresh();
  };
  return <span onClick={onClick} {...props} className="cursor-pointer" />;
}
