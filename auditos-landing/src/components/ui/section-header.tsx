import { cn } from "@/lib/utils";

function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function SectionSubtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-pretty mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
    </div>
  );
}
