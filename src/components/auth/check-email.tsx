"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface CheckEmailProps {
  email?: string;
}

export function CheckEmail({ email = "your email" }: CheckEmailProps) {
  const [isResending, setIsResending] = useState(false);
  const [resent, setResent] = useState(false);

  const handleResendEmail = async () => {
    setIsResending(true);
    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsResending(false);
    setResent(true);
    // Reset the resent status after 3 seconds
    setTimeout(() => setResent(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#231D97] to-[#6B66D0] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#BE6E1E]/10 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-[#BE6E1E]" />
          </div>
          <CardTitle className="text-2xl">Check your email</CardTitle>
          <CardDescription className="text-center">
            We've sent a verification link to <strong>{email}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            Click the link in the email to verify your account. If you don't see
            the email, check your spam folder.
          </p>

          {resent && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-700">
                Verification email resent successfully!
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            onClick={handleResendEmail}
            disabled={isResending || resent}
            variant="outline"
            className="w-full"
            style={{
              fontFamily: "Hind, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {isResending
              ? "Sending..."
              : resent
                ? "Email sent!"
                : "Resend verification email"}
          </Button>

          <Link href="/signup" className="w-full">
            <Button
              variant="ghost"
              className="w-full"
              style={{
                fontFamily:
                  "Hind, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign up
            </Button>
          </Link>

          <div className="text-center text-sm">
            Wrong email address?{" "}
            <Link href="/signup" className="underline hover:text-primary">
              Use a different email
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
