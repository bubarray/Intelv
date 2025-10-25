"use client";

import { CheckEmail as CheckEmailComponent } from "@/components/auth/check-email";
import { useSearchParams } from "next/navigation";

export default function CheckEmail() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return <CheckEmailComponent email={email || undefined} />;
}
