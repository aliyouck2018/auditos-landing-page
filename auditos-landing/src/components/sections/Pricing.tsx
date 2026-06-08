"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

type Plan = {
  nameKey: TranslationKey;
  descKey: TranslationKey;
  featureKeys: TranslationKey[];
  priceMonthly: string;
  priceYearly: string;
  ctaKey: TranslationKey;
  ctaVariant: "outline" | "gradient";
  popular?: boolean;
};

const plans: Plan[] = [
  {
    nameKey: "pricing.starter.name",
    descKey: "pricing.starter.desc",
    featureKeys: [
      "pricing.starter.f1",
      "pricing.starter.f2",
      "pricing.starter.f3",
      "pricing.starter.f4",
    ],
    priceMonthly: "49,000 FCFA",
    priceYearly: "39,200 FCFA",
    ctaKey: "pricing.cta.trial",
    ctaVariant: "outline",
  },
  {
    nameKey: "pricing.pro.name",
    descKey: "pricing.pro.desc",
    featureKeys: [
      "pricing.pro.f1",
      "pricing.pro.f2",
      "pricing.pro.f3",
      "pricing.pro.f4",
      "pricing.pro.f5",
    ],
    priceMonthly: "119,000 FCFA",
    priceYearly: "95,200 FCFA",
    ctaKey: "pricing.cta.trial",
    ctaVariant: "gradient",
    popular: true,
  },
  {
    nameKey: "pricing.ent.name",
    descKey: "pricing.ent.desc",
    featureKeys: [
      "pricing.ent.f1",
      "pricing.ent.f2",
      "pricing.ent.f3",
      "pricing.ent.f4",
      "pricing.ent.f5",
    ],
    priceMonthly: "Custom",
    priceYearly: "Custom",
    ctaKey: "pricing.cta.sales",
    ctaVariant: "outline",
  },
];

export function Pricing() {
  const { t } = useTranslations();
  const [yearly, setYearly] = React.useState(false);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-50/60 to-transparent" />
      <div className="container">
        <SectionHeader
          eyebrow={t("pricing.eyebrow")}
          title={t("pricing.title")}
          subtitle={t("pricing.subtitle")}
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-white/70 p-1 shadow-sm backdrop-blur">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                !yearly
                  ? "bg-primary text-white shadow"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t("pricing.monthly")}
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                yearly
                  ? "bg-primary text-white shadow"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t("pricing.yearly")}
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                  yearly
                    ? "bg-white/20 text-white"
                    : "bg-emerald-50 text-emerald-700",
                )}
              >
                {t("pricing.save")}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.nameKey}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-premium",
                p.popular
                  ? "border-primary/30 shadow-premium ring-1 ring-primary/20"
                  : "border-border",
              )}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-primary to-blue-600 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                  <Sparkles className="h-3 w-3" />
                  {t("pricing.popular")}
                </span>
              )}

              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {t(p.nameKey)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(p.descKey)}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  {yearly ? p.priceYearly : p.priceMonthly}
                </span>
                {p.priceMonthly !== "Custom" && (
                  <span className="text-sm text-muted-foreground">
                    /{t("pricing.monthly").toLowerCase()}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {p.featureKeys.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/80">{t(f)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  asChild
                  variant={p.ctaVariant}
                  className="w-full justify-center"
                >
                  <Link href="#cta">{t(p.ctaKey)}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
