"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cloud,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Activity,
  Search,
  Bell,
  ChevronRight,
  Plus,
  FileText,
  Briefcase,
  ClipboardList,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-foreground/70">
      <CheckCircle2 className="h-4 w-4 text-success" />
      {children}
    </span>
  );
}

function RiskCell({
  level,
  className,
}: {
  level: 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const map: Record<number, string> = {
    1: "bg-emerald-200/70",
    2: "bg-emerald-300/70",
    3: "bg-amber-300/80",
    4: "bg-orange-400/80",
    5: "bg-rose-500/80",
  };
  return (
    <div
      className={cn(
        "relative aspect-square rounded-md transition-transform hover:scale-105",
        map[level],
        className,
      )}
    />
  );
}

function Sparkline({
  values,
  stroke = "#2563eb",
}: {
  values: number[];
  stroke?: string;
}) {
  const w = 120;
  const h = 36;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");
  const area = `0,${h} ${pts.replaceAll(",", " ")} ${w},${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-full">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#spark)" />
      <polyline
        points={pts}
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarGroup() {
  const data = [
    { label: "Q1", v1: 38, v2: 22 },
    { label: "Q2", v1: 56, v2: 31 },
    { label: "Q3", v1: 48, v2: 28 },
    { label: "Q4", v1: 72, v2: 44 },
  ];
  return (
    <div className="flex h-32 items-end gap-3">
      {data.map((d) => (
        <div key={d.label} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex h-full w-full items-end justify-center gap-1">
            <div
              className="w-3 rounded-t bg-primary/80"
              style={{ height: `${d.v1}%` }}
            />
            <div
              className="w-3 rounded-t bg-blue-200"
              style={{ height: `${d.v2}%` }}
            />
          </div>
          <span className="text-[10px] font-medium text-muted-foreground">
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function DonutRing({
  percent = 72,
  label,
}: {
  percent?: number;
  label: string;
}) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const dash = (percent / 100) * c;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="6"
          />
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke="#2563eb"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-foreground">
          {percent}%
        </div>
      </div>
      <span className="mt-1 text-[10px] font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const { t } = useTranslations();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
        <div className="absolute inset-0 grid-pattern opacity-60" />
      </div>
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="container relative grid gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {t("hero.trust.ai")}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            {t("hero.headline.line1")}{" "}
            <span className="gradient-text">{t("hero.headline.line2")}</span>{" "}
            {t("hero.headline.line3")}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.subheadline")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="group shadow-blue-500/25"
            >
              <Link href="#pricing">
                {t("hero.ctaPrimary")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">{t("hero.ctaSecondary")}</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <TrustPill>{t("hero.trust.isa")}</TrustPill>
            <TrustPill>{t("hero.trust.cloud")}</TrustPill>
            <TrustPill>{t("hero.trust.security")}</TrustPill>
            <TrustPill>{t("hero.trust.ai")}</TrustPill>
          </div>
        </div>

        <div className="relative">
          <DashboardMockup />

          <div className="pointer-events-none absolute -left-6 -top-6 hidden h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-400/40 to-indigo-400/0 blur-2xl lg:block" />
          <div className="pointer-events-none absolute -bottom-8 -right-6 hidden h-28 w-28 rounded-full bg-primary/20 blur-2xl lg:block" />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative animate-float">
      <div className="glass shadow-premium overflow-hidden rounded-2xl border border-border">
        <div className="flex items-center gap-1.5 border-b border-border/80 bg-white/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-3 inline-flex h-6 flex-1 max-w-xs items-center gap-2 rounded-md border border-border bg-white/80 px-2 text-[11px] text-muted-foreground">
            <Search className="h-3 w-3" />
            app.auditos.io / dashboard
          </div>
          <div className="ml-auto inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200" />
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200" />
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-200" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-4">
          <aside className="col-span-3 hidden rounded-xl border border-border bg-white/70 p-3 sm:block">
            <div className="flex items-center gap-2 px-1">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-blue-700 text-white">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold tracking-tight">
                Audit<span className="text-primary">OS</span>
              </span>
            </div>
            <ul className="mt-4 space-y-1 text-[11px] font-medium text-muted-foreground">
              {[
                { icon: Activity, label: "Dashboard", active: true },
                { icon: Briefcase, label: "Engagements" },
                { icon: ClipboardList, label: "Workpapers" },
                { icon: AlertTriangle, label: "Findings" },
                { icon: FileText, label: "Reports" },
                { icon: GitBranch, label: "Workflows" },
              ].map((it) => (
                <li
                  key={it.label}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5",
                    it.active
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-secondary",
                  )}
                >
                  <it.icon className="h-3.5 w-3.5" />
                  {it.label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="col-span-12 space-y-3 sm:col-span-9">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Active audits
                </p>
                <p className="text-lg font-semibold tracking-tight">
                  Atlas Financial — FY25
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 items-center gap-1 rounded-full border border-border bg-white/70 px-2.5 text-[11px] font-medium text-foreground/80">
                  <Bell className="h-3 w-3" /> 3
                </span>
                <span className="inline-flex h-7 items-center gap-1 rounded-md bg-primary px-2.5 text-[11px] font-semibold text-white">
                  <Plus className="h-3 w-3" /> New
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Engagements",
                  value: "24",
                  delta: "+12%",
                  icon: Briefcase,
                },
                {
                  label: "Open findings",
                  value: "08",
                  delta: "-3",
                  icon: AlertTriangle,
                },
                {
                  label: "Progress",
                  value: "72%",
                  delta: "+5%",
                  icon: TrendingUp,
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl border border-border bg-white/80 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </span>
                    <c.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xl font-semibold tracking-tight">
                      {c.value}
                    </span>
                    <span className="text-[10px] font-medium text-success">
                      {c.delta}
                    </span>
                  </div>
                  <Sparkline
                    values={[8, 12, 10, 14, 18, 15, 22, 24]}
                    stroke="#2563eb"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 rounded-xl border border-border bg-white/80 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-tight">
                    Audit progress
                  </p>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    Last 4 quarters
                  </span>
                </div>
                <BarGroup />
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-white/80 p-3">
                <p className="text-xs font-semibold tracking-tight">
                  Risk heatmap
                </p>
                <div className="mt-2 grid grid-cols-5 gap-1">
                  {[
                    [1, 1, 2, 3, 3],
                    [1, 2, 3, 4, 4],
                    [2, 2, 3, 4, 5],
                    [2, 3, 4, 5, 5],
                    [3, 3, 4, 5, 5],
                  ]
                    .flat()
                    .map((lvl, i) => (
                      <RiskCell key={i} level={lvl as 1 | 2 | 3 | 4 | 5} />
                    ))}
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1 rounded-xl border border-border bg-white/80 p-3">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Coverage
                </p>
                <div className="mt-1.5 flex items-center justify-around">
                  <DonutRing percent={86} label="ISA" />
                  <DonutRing percent={64} label="IFRS" />
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-white/80 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-tight">
                    Recent findings
                  </p>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <ul className="mt-2 space-y-1.5 text-[11px]">
                  {[
                    {
                      t: "Revenue recognition cut-off",
                      s: "High",
                      c: "bg-rose-100 text-rose-700",
                    },
                    {
                      t: "Vendor master file completeness",
                      s: "Medium",
                      c: "bg-amber-100 text-amber-700",
                    },
                    {
                      t: "Inventory obsolescence reserve",
                      s: "Low",
                      c: "bg-emerald-100 text-emerald-700",
                    },
                  ].map((f) => (
                    <li
                      key={f.t}
                      className="flex items-center justify-between gap-2 rounded-md border border-border/60 bg-white/60 px-2 py-1.5"
                    >
                      <span className="truncate text-foreground/80">{f.t}</span>
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-0.5 text-[9px] font-semibold",
                          f.c,
                        )}
                      >
                        {f.s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-4 top-24 hidden w-44 rotate-2 rounded-xl border border-border bg-white/90 p-3 shadow-premium lg:block">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-3.5 w-3.5" />
          </div>
          <p className="text-[11px] font-semibold tracking-tight">
            AI Insight
          </p>
        </div>
        <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
          3 anomalies detected in the Q4 journal entries. Risk score increased
          to <span className="font-semibold text-foreground">78</span>.
        </p>
      </div>

      <div className="pointer-events-none absolute -left-4 bottom-10 hidden w-40 -rotate-3 rounded-xl border border-border bg-white/90 p-3 shadow-premium lg:block">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Workpaper
          </p>
          <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
            Done
          </span>
        </div>
        <p className="mt-1 text-[11px] font-semibold tracking-tight">
          WP-204 · Bank reconciliations
        </p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[92%] rounded-full bg-primary" />
        </div>
        <p className="mt-1 text-[10px] text-muted-foreground">
          Reviewed by J. Ngozi · 92%
        </p>
      </div>
    </div>
  );
}
