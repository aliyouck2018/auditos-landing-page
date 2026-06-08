"use client";

import {
  UserPlus,
  ShieldAlert,
  ClipboardList,
  Database,
  Cpu,
  FileStack,
  FileText,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const steps: Array<{
  key: TranslationKey;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { key: "workflow.step1", icon: UserPlus },
  { key: "workflow.step2", icon: ShieldAlert },
  { key: "workflow.step3", icon: ClipboardList },
  { key: "workflow.step4", icon: Database },
  { key: "workflow.step5", icon: Cpu },
  { key: "workflow.step6", icon: FileStack },
  { key: "workflow.step7", icon: FileText },
];

export function Workflow() {
  const { t } = useTranslations();
  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-y border-border bg-slate-50/40 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dot-pattern opacity-50" />
      <div className="container">
        <SectionHeader
          eyebrow={t("workflow.eyebrow")}
          title={t("workflow.title")}
          subtitle={t("workflow.subtitle")}
        />

        <div className="mt-14">
          <ol className="relative grid gap-4 md:grid-cols-7">
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
            {steps.map((s, i) => (
              <li
                key={s.key}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 grid h-[72px] w-[72px] place-items-center rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-premium">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-blue-50/0 transition-all group-hover:from-blue-50/60 group-hover:to-indigo-50/60" />
                  <s.icon className="relative h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-white shadow ring-2 ring-white">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold tracking-tight text-foreground">
                  {t(s.key)}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className={cn(
                      "mt-3 h-4 w-4 text-muted-foreground md:hidden",
                    )}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
