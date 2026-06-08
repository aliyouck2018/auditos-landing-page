"use client";

import {
  Lock,
  ShieldCheck,
  KeyRound,
  Cloud,
  History,
  Fingerprint,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import type { TranslationKey } from "@/lib/translations";

const badges: Array<{ key: TranslationKey; icon: React.ComponentType<{ className?: string }> }> = [
  { key: "security.badge1", icon: Lock },
  { key: "security.badge2", icon: ShieldCheck },
  { key: "security.badge3", icon: KeyRound },
  { key: "security.badge4", icon: Cloud },
  { key: "security.badge5", icon: History },
  { key: "security.badge6", icon: Fingerprint },
];

export function Security() {
  const { t } = useTranslations();
  return (
    <section id="security" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-slate-50 via-white to-blue-50/60 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                {t("security.eyebrow")}
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("security.title")}
              </h2>
              <p className="mt-3 max-w-lg text-pretty text-muted-foreground">
                {t("security.subtitle")}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  SOC 2
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1">
                  <Lock className="h-3.5 w-3.5 text-emerald-600" />
                  ISO 27001 ready
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1">
                  <KeyRound className="h-3.5 w-3.5 text-emerald-600" />
                  GDPR
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {badges.map((b) => (
                <div
                  key={b.key}
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-white/80 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-premium"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-primary ring-1 ring-blue-100">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold tracking-tight">
                    {t(b.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
