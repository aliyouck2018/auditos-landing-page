"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import type { TranslationKey } from "@/lib/translations";

const items: Array<{ q: TranslationKey; a: TranslationKey; value: string }> = [
  { q: "faq.q1", a: "faq.a1", value: "q1" },
  { q: "faq.q2", a: "faq.a2", value: "q2" },
  { q: "faq.q3", a: "faq.a3", value: "q3" },
  { q: "faq.q4", a: "faq.a4", value: "q4" },
  { q: "faq.q5", a: "faq.a5", value: "q5" },
  { q: "faq.q6", a: "faq.a6", value: "q6" },
  { q: "faq.q7", a: "faq.a7", value: "q7" },
  { q: "faq.q8", a: "faq.a8", value: "q8" },
];

export function FAQ() {
  const { t } = useTranslations();
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <Accordion type="single" collapsible className="px-2">
              {items.map((it) => (
                <AccordionItem key={it.value} value={it.value} className="px-4">
                  <AccordionTrigger className="text-base font-semibold">
                    {t(it.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                    {t(it.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
