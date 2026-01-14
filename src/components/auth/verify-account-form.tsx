"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { verifyAccount } from "@/actions/verify-account";

import { Spinner } from "@/components/ui/spinner";

import { Wrapper } from "./wrapper";

export function VerifyAccountForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    async function verify() {
      if (!token) return;

      try {
        await verifyAccount({ token });
        if (!isMounted) return;
        router.push("/auth/login");
      } catch {
        console.log("Failed Verify");
      }
    }

    verify();

    return () => {
      isMounted = false;
    };
  }, [token, router]);

  return (
    <Wrapper
      title="Confirm your verification"
      redirectTo={{ href: "/auth/login", label: "Back to login" }}
    >
      <div className="flex flex-col items-center justify-center">
        <Spinner />
      </div>
    </Wrapper>
  );
}
