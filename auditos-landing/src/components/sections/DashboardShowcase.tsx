"use client";

import {
  Activity,
  ShieldAlert,
  BarChart3,
  FileStack,
  FileText,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  Users,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

type Tab = {
  key: TranslationKey;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
};

const tabs: Tab[] = [
  { key: "showcase.tab.dashboard", value: "dashboard", icon: Activity },
  { key: "showcase.tab.risk", value: "risk", icon: ShieldAlert },
  { key: "showcase.tab.analytics", value: "analytics", icon: BarChart3 },
  { key: "showcase.tab.workpapers", value: "workpapers", icon: FileStack },
  { key: "showcase.tab.report", value: "report", icon: FileText },
];

function MiniBar({ h, color = "bg-primary" }: { h: number; color?: string }) {
  return (
    <div
      className={cn("w-4 rounded-t", color)}
      style={{ height: `${h}%` }}
    />
  );
}

function ScreenFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-premium">
      <div className="flex items-center gap-1.5 border-b border-border bg-slate-50/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-3 inline-flex h-6 flex-1 max-w-xs items-center rounded-md border border-border bg-white px-2 text-[11px] text-muted-foreground">
          app.auditos.io
        </div>
      </div>
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  delta,
  color,
}: {
  label: string;
  value: string;
  delta?: string;
  color?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight">{value}</span>
        {delta && (
          <span className="text-[11px] font-medium text-success">{delta}</span>
        )}
      </div>
      <div className={cn("mt-3 h-1.5 w-full rounded-full", color ?? "bg-blue-100")}>
        <div className="h-full w-2/3 rounded-full bg-primary" />
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <ScreenFrame>
      <div className="grid grid-cols-12 gap-3 p-4">
        <div className="col-span-12 lg:col-span-9 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Overview
              </p>
              <p className="text-base font-semibold tracking-tight">
                Engagement: Atlas Financial — FY25
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                On track
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatCard label="Engagements" value="24" delta="+12%" color="bg-blue-100" />
            <StatCard label="Hours logged" value="1,284" delta="+8%" color="bg-emerald-100" />
            <StatCard label="Findings" value="08" delta="-3" color="bg-amber-100" />
            <StatCard label="Completion" value="72%" delta="+5%" color="bg-violet-100" />
          </div>
          <div className="rounded-xl border border-border bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Progress by phase</p>
              <span className="text-[10px] text-muted-foreground">FY25</span>
            </div>
            <div className="mt-4 flex h-32 items-end gap-2">
              {[42, 58, 64, 78, 86, 72, 48].map((h, i) => (
                <MiniBar key={i} h={h} color={i === 4 ? "bg-primary" : "bg-blue-200"} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-3 lg:col-span-3">
          <div className="rounded-xl border border-border bg-white p-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Team
            </p>
            <div className="mt-2 flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "h-7 w-7 rounded-full border-2 border-white",
                    ["bg-blue-200", "bg-emerald-200", "bg-amber-200", "bg-rose-200"][i],
                  )}
                />
              ))}
              <div className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-slate-100 text-[10px] font-semibold text-slate-600">
                +6
              </div>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              10 members active
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Upcoming
            </p>
            <ul className="mt-2 space-y-2 text-[11px]">
              {[
                "WP-208 Review · J. Ngozi",
                "Risk recalibration",
                "Client signoff call",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-md border border-border/60 bg-white px-2 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}

function RiskScreen() {
  const grid = [
    [1, 1, 2, 2, 3],
    [1, 2, 2, 3, 4],
    [2, 2, 3, 4, 4],
    [2, 3, 4, 4, 5],
    [3, 3, 4, 5, 5],
  ];
  return (
    <ScreenFrame>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-12 md:col-span-7 rounded-xl border border-border bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-tight">Risk heatmap</p>
            <span className="text-[10px] text-muted-foreground">
              Likelihood × Impact
            </span>
          </div>
          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {grid.flat().map((lvl, i) => {
              const map: Record<number, string> = {
                1: "bg-emerald-200/80",
                2: "bg-emerald-300/80",
                3: "bg-amber-300/80",
                4: "bg-orange-400/80",
                5: "bg-rose-500/80",
              };
              return (
                <div
                  key={i}
                  className={cn(
                    "aspect-square rounded-md transition-transform hover:scale-105",
                    map[lvl],
                  )}
                />
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-3">
          {[
            { t: "Revenue recognition", s: "High", c: "bg-rose-50 text-rose-700" },
            { t: "Procurement controls", s: "Med", c: "bg-amber-50 text-amber-700" },
            { t: "IT general controls", s: "Low", c: "bg-emerald-50 text-emerald-700" },
            { t: "Inventory", s: "Med", c: "bg-amber-50 text-amber-700" },
          ].map((r) => (
            <div
              key={r.t}
              className="flex items-center justify-between rounded-xl border border-border bg-white p-3"
            >
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold tracking-tight">
                  {r.t}
                </span>
              </div>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                  r.c,
                )}
              >
                {r.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScreenFrame>
  );
}

function AnalyticsScreen() {
  return (
    <ScreenFrame>
      <div className="grid grid-cols-12 gap-3 p-4">
        <div className="col-span-12 md:col-span-8 rounded-xl border border-border bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Journal entry analysis</p>
            <span className="text-[10px] text-muted-foreground">12,480 entries</span>
          </div>
          <svg viewBox="0 0 600 180" className="mt-3 h-44 w-full">
            <defs>
              <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,140 C80,90 120,160 200,110 C280,60 320,140 400,80 C480,20 520,80 600,40 L600,180 L0,180 Z"
              fill="url(#ag)"
            />
            <path
              d="M0,140 C80,90 120,160 200,110 C280,60 320,140 400,80 C480,20 520,80 600,40"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
            />
            <path
              d="M0,160 C80,140 140,170 220,150 C300,130 360,160 440,140 C500,124 560,140 600,130"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 space-y-3">
          <div className="rounded-xl border border-border bg-white p-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Anomalies
            </p>
            <p className="mt-1 text-2xl font-semibold">14</p>
            <p className="text-[11px] text-success">+3 from last period</p>
          </div>
          <div className="rounded-xl border border-border bg-white p-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Coverage
            </p>
            <p className="mt-1 text-2xl font-semibold">96%</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-blue-100">
              <div className="h-full w-[96%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}

function WorkpaperScreen() {
  return (
    <ScreenFrame>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Workpaper center</p>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              All
            </span>
            <span className="rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              In review
            </span>
            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
              Approved
            </span>
          </div>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-[11px]">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">WP</th>
                <th className="px-3 py-2">Title</th>
                <th className="px-3 py-2">Owner</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {[
                {
                  id: "WP-204",
                  t: "Bank reconciliations",
                  o: "J. Ngozi",
                  s: "Approved",
                  sClass: "bg-emerald-50 text-emerald-700",
                  p: 100,
                },
                {
                  id: "WP-205",
                  t: "Revenue cut-off testing",
                  o: "S. Okonkwo",
                  s: "In review",
                  sClass: "bg-amber-50 text-amber-700",
                  p: 78,
                },
                {
                  id: "WP-206",
                  t: "Procurement sampling",
                  o: "A. Diallo",
                  s: "In progress",
                  sClass: "bg-blue-50 text-blue-700",
                  p: 54,
                },
                {
                  id: "WP-207",
                  t: "Inventory obsolescence",
                  o: "K. Mensah",
                  s: "Approved",
                  sClass: "bg-emerald-50 text-emerald-700",
                  p: 100,
                },
              ].map((r) => (
                <tr key={r.id}>
                  <td className="px-3 py-2 font-mono font-semibold text-foreground/80">
                    {r.id}
                  </td>
                  <td className="px-3 py-2 font-medium">{r.t}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.o}</td>
                  <td className="px-3 py-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        r.sClass,
                      )}
                    >
                      {r.s}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <div className="h-1.5 w-28 rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${r.p}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ScreenFrame>
  );
}

function ReportScreen() {
  return (
    <ScreenFrame>
      <div className="grid grid-cols-12 gap-3 p-4">
        <div className="col-span-12 md:col-span-4 space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Templates
          </p>
          {[
            "Independent Auditor's Report",
            "Internal Audit Report",
            "Compliance Memo",
            "Management Letter",
          ].map((tpl, i) => (
            <div
              key={tpl}
              className={cn(
                "flex items-center gap-2 rounded-lg border bg-white p-2.5 text-[11px]",
                i === 0
                  ? "border-primary/40 bg-primary/5"
                  : "border-border",
              )}
            >
              <FileText className="h-3.5 w-3.5 text-primary" />
              <span className="font-medium">{tpl}</span>
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-8 rounded-xl border border-border bg-white p-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Independent Auditor&apos;s Report
              </p>
              <p className="text-[11px] text-muted-foreground">
                Atlas Financial Group — FY25
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              ISA-aligned
            </span>
          </div>
          <div className="mt-3 space-y-2 text-[11px] leading-relaxed text-foreground/80">
            <p className="font-semibold">Opinion</p>
            <p>
              We have audited the consolidated financial statements of Atlas
              Financial Group… In our opinion, the accompanying financial
              statements present fairly, in all material respects…
            </p>
            <p className="font-semibold">Basis for Opinion</p>
            <p>
              We conducted our audit in accordance with International Standards
              on Auditing (ISA). Our responsibilities under those standards
              are further described in the Auditor&apos;s Responsibilities section.
            </p>
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}

export function DashboardShowcase() {
  const { t } = useTranslations();
  return (
    <section id="showcase" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={t("showcase.eyebrow")}
          title={t("showcase.title")}
          subtitle={t("showcase.subtitle")}
        />

        <Tabs defaultValue="dashboard" className="mt-12">
          <div className="flex justify-center">
            <TabsList className="flex flex-wrap">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="gap-1.5"
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  <span>{t(tab.key)}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value="dashboard">
            <DashboardScreen />
          </TabsContent>
          <TabsContent value="risk">
            <RiskScreen />
          </TabsContent>
          <TabsContent value="analytics">
            <AnalyticsScreen />
          </TabsContent>
          <TabsContent value="workpapers">
            <WorkpaperScreen />
          </TabsContent>
          <TabsContent value="report">
            <ReportScreen />
          </TabsContent>
        </Tabs>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" /> ISA
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" /> Real-time
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 text-primary" /> Multi-firm
          </span>
          <span className="inline-flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-primary" /> AI assisted
          </span>
        </div>
      </div>
    </section>
  );
}
