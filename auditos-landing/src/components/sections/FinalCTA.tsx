"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

export function FinalCTA() {
  const { t } = useTranslations();
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 p-10 text-white shadow-premium sm:p-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 grid-pattern opacity-15" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              {t("hero.trust.ai")}
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {t("cta.title")}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base text-white/85 sm:text-lg">
              {t("cta.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                variant="white"
                size="lg"
                className="group text-foreground"
              >
                <Link href="#pricing">
                  {t("cta.primary")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="#pricing">{t("cta.secondary")}</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
