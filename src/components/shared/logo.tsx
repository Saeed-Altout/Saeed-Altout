"use client";
import { ZapIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      <ZapIcon className="size-6" />
      <span className="font-bold text-lg">Saeed Altout</span>
    </Link>
  );
}
