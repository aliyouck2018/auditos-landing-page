"use client";

import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import type { TranslationKey } from "@/lib/translations";

type Testimonial = {
  quote: TranslationKey;
  name: TranslationKey;
  role: TranslationKey;
  company: TranslationKey;
  initials: string;
  gradient: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "testimonials.t1.quote",
    name: "testimonials.t1.name",
    role: "testimonials.t1.role",
    company: "testimonials.t1.company",
    initials: "AD",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    quote: "testimonials.t2.quote",
    name: "testimonials.t2.name",
    role: "testimonials.t2.role",
    company: "testimonials.t2.company",
    initials: "JN",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    quote: "testimonials.t3.quote",
    name: "testimonials.t3.name",
    role: "testimonials.t3.role",
    company: "testimonials.t3.company",
    initials: "SO",
    gradient: "from-amber-500 to-orange-600",
  },
];

export function Testimonials() {
  const { t } = useTranslations();
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-border bg-slate-50/40 py-20 sm:py-28"
    >
      <div className="container">
        <SectionHeader
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((tst, i) => (
            <figure
              key={tst.name}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                “{t(tst.quote)}”
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-current"
                  />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${tst.gradient}`}
                >
                  {tst.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    {t(tst.name)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(tst.role)} · {t(tst.company)}
                  </p>
                </div>
              </figcaption>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              {i === 1 && (
                <span className="absolute -top-2 right-4 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                  Featured
                </span>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
