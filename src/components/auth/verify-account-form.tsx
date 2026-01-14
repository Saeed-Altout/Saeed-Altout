"use client";

import { useEffect } from "react";
import { toast } from "sonner";
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
        const res = await verifyAccount({ token });
        if (!isMounted) return;
        if (res.success) {
          router.push("/auth/login");
          toast.success(res.message);
        }
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
