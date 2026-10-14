
import Link from "next/link";
import { Boxes } from "lucide-react";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10 text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="absolute right-4 top-4 z-10 sm:right-8 sm:top-8">
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link
          href="/login"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
            <Boxes className="size-6" />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Smart Seller <span className="text-primary">OS</span>
          </span>
        </Link>

        <div className="rounded-2xl border border-border/70 bg-card/90 p-6 shadow-xl shadow-black/5 backdrop-blur sm:p-8">
          <div className="mb-7 space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>

          {children}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
  © 2026 Smart Seller OS. All rights reserved.
</p>
      </div>
    </main>
  );
}
