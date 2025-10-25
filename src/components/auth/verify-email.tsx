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
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function VerifyEmail() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error");
        setMessage("Invalid verification link. Please try again.");
        return;
      }

      try {
        // Simulate email verification API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulate success/failure based on token (for demo purposes)
        if (token === "invalid") {
          throw new Error("Invalid token");
        }

        setStatus("success");
        setMessage("Your email has been successfully verified!");
      } catch (error) {
        setStatus("error");
        setMessage("Verification failed. The link may be expired or invalid.");
      }
    };

    verifyEmail();
  }, [token]);

  const getIcon = () => {
    switch (status) {
      case "loading":
        return <Loader2 className="w-8 h-8 text-[#BE6E1E] animate-spin" />;
      case "success":
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      case "error":
        return <XCircle className="w-8 h-8 text-red-500" />;
    }
  };

  const getTitle = () => {
    switch (status) {
      case "loading":
        return "Verifying your email...";
      case "success":
        return "Email verified!";
      case "error":
        return "Verification failed";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#231D97] to-[#6B66D0] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
            {getIcon()}
          </div>
          <CardTitle className="text-2xl">{getTitle()}</CardTitle>
          {email && (
            <CardDescription className="text-center">
              {status === "success" ? "Welcome to our marketplace!" : email}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">{message}</p>

          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-700">
                Your account has been created and verified. You can now sign in
                and start exploring our spare parts marketplace.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-700">
                If you continue to have issues, please contact our support team
                or try signing up again.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {status === "success" && (
            <Link href="/" className="w-full">
              <Button
                className="w-full bg-[#BE6E1E] hover:bg-[#BE6E1E]/90"
                style={{
                  fontFamily:
                    "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Continue to marketplace
              </Button>
            </Link>
          )}

          {status === "error" && (
            <>
              <Link href="/signup" className="w-full">
                <Button
                  className="w-full bg-[#BE6E1E] hover:bg-[#BE6E1E]/90"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Try signing up again
                </Button>
              </Link>
              <Link href="/check-email" className="w-full">
                <Button
                  variant="outline"
                  className="w-full"
                  style={{
                    fontFamily:
                      "Hind, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Resend verification email
                </Button>
              </Link>
            </>
          )}

          <div className="text-center text-sm">
            <Link href="/" className="underline hover:text-primary">
              Back to homepage
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
