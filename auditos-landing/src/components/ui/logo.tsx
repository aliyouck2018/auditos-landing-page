import { cn } from "@/lib/utils";

export function AuditOSLogo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-blue-700 shadow-md shadow-blue-500/20 ring-1 ring-blue-500/20">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2.5 4 6v6c0 4.7 3.4 8.6 8 9.5 4.6-.9 8-4.8 8-9.5V6l-8-3.5Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/20" />
      </span>
      {withWordmark && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Audit<span className="text-primary">OS</span>
        </span>
      )}
    </div>
  );
}
