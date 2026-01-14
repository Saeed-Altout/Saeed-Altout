"use client";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export function Github() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = () => {
    console.log(callbackUrl + DEFAULT_LOGIN_REDIRECT);
  };
  return (
    <Button className="flex-1" variant="outline" onClick={onClick} disabled>
      <FaGithub /> Github
    </Button>
  );
}
