import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-background)] px-4">
      <div className="w-full max-w-md rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-7 w-7 text-[var(--color-accent)]" />
          <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            404 Page Not Found
          </h1>
        </div>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
