"use client";

import { Clock, ShieldCheck, Users, BadgeCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import type { TranslationKey } from "@/lib/translations";
import { cn } from "@/lib/utils";

const values: Array<{
  key: { title: TranslationKey; desc: TranslationKey };
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
  metricLabel: string;
  accent: string;
}> = [
  {
    key: { title: "why.time.title", desc: "why.time.desc" },
    icon: Clock,
    metric: "70%",
    metricLabel: "less manual work",
    accent: "from-blue-500/10 to-indigo-500/10 text-primary",
  },
  {
    key: { title: "why.quality.title", desc: "why.quality.desc" },
    icon: ShieldCheck,
    metric: "ISA",
    metricLabel: "aligned methodology",
    accent: "from-emerald-500/10 to-teal-500/10 text-emerald-700",
  },
  {
    key: { title: "why.collab.title", desc: "why.collab.desc" },
    icon: Users,
    metric: "Live",
    metricLabel: "real-time teamwork",
    accent: "from-violet-500/10 to-fuchsia-500/10 text-violet-700",
  },
  {
    key: { title: "why.compliance.title", desc: "why.compliance.desc" },
    icon: BadgeCheck,
    metric: "100%",
    metricLabel: "audit trail",
    accent: "from-amber-500/10 to-orange-500/10 text-amber-700",
  },
];

export function WhyAuditOS() {
  const { t } = useTranslations();
  return (
    <section
      id="why"
      className="relative overflow-hidden border-y border-border bg-white py-20 sm:py-28"
    >
      <div className="container">
        <SectionHeader
          eyebrow={t("why.eyebrow")}
          title={t("why.title")}
          subtitle={t("why.subtitle")}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.key.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-premium"
            >
              <div
                className={cn(
                  "absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100",
                  v.accent,
                )}
              />
              <div
                className={cn(
                  "mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ring-1 ring-inset ring-white/40",
                  v.accent,
                )}
              >
                <v.icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-semibold tracking-tight">
                {v.metric}
              </p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {v.metricLabel}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {t(v.key.title)}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {t(v.key.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
