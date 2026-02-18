"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="p-4 bg-destructive/10 rounded-full">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            Coś poszło nie tak
          </h2>
          <p className="text-muted-foreground">
            Przepraszamy za niedogodności. Wystąpił nieoczekiwany błąd.
          </p>
          {process.env.NODE_ENV === "development" && error.message && (
            <details className="mt-4 p-4 bg-muted rounded-lg text-left text-xs">
              <summary className="cursor-pointer font-bold">
                Szczegóły błędu
              </summary>
              <p className="mt-2 text-muted-foreground font-mono">
                {error.message}
              </p>
            </details>
          )}
        </div>

        <Button
          onClick={reset}
          className="gap-2 min-h-[48px] touch-manipulation"
          size="lg"
        >
          <RefreshCcw className="h-5 w-5" />
          Spróbuj ponownie
        </Button>
      </div>
    </div>
  );
}
