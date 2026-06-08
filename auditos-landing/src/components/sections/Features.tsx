"use client";

import {
  ClipboardList,
  ShieldAlert,
  BarChart3,
  Cpu,
  FileStack,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const features: Array<{
  key: { title: TranslationKey; desc: TranslationKey };
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}> = [
  {
    key: { title: "features.planning.title", desc: "features.planning.desc" },
    icon: ClipboardList,
    accent: "from-blue-500/15 to-indigo-500/10 text-primary",
  },
  {
    key: { title: "features.risk.title", desc: "features.risk.desc" },
    icon: ShieldAlert,
    accent: "from-rose-500/15 to-orange-400/10 text-rose-600",
  },
  {
    key: { title: "features.analytics.title", desc: "features.analytics.desc" },
    icon: BarChart3,
    accent: "from-emerald-500/15 to-teal-400/10 text-emerald-700",
  },
  {
    key: { title: "features.testing.title", desc: "features.testing.desc" },
    icon: Cpu,
    accent: "from-violet-500/15 to-fuchsia-400/10 text-violet-700",
  },
  {
    key: {
      title: "features.workpapers.title",
      desc: "features.workpapers.desc",
    },
    icon: FileStack,
    accent: "from-amber-500/15 to-yellow-400/10 text-amber-700",
  },
  {
    key: {
      title: "features.reporting.title",
      desc: "features.reporting.desc",
    },
    icon: FileText,
    accent: "from-cyan-500/15 to-sky-400/10 text-cyan-700",
  },
];

export function Features() {
  const { t } = useTranslations();
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-50/60 to-transparent" />
      <div className="container">
        <SectionHeader
          eyebrow={t("features.eyebrow")}
          title={t("features.title")}
          subtitle={t("features.subtitle")}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.key.title}
              className="group relative overflow-hidden border-border/80 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-premium"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div
                  className={cn(
                    "mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ring-1 ring-inset ring-white/40 transition-transform group-hover:scale-105",
                    f.accent,
                  )}
                >
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {t(f.key.title)}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(f.key.desc)}
                </p>
                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="mt-3 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                    <span>AuditOS</span>
                    <span className="inline-flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
