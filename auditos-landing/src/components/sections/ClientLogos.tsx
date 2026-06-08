"use client";

import { useTranslations } from "@/hooks/use-translations";

function Logo({ name, sub }: { name: string; sub?: string }) {
  return (
    <div className="group flex items-center justify-center gap-2 text-slate-500 transition-colors hover:text-slate-900">
      <span className="grid h-8 w-8 place-items-center rounded-md border border-slate-200 bg-white font-bold text-slate-700 shadow-sm transition-all group-hover:border-slate-300 group-hover:shadow">
        {name.charAt(0)}
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight">{name}</span>
        {sub && (
          <span className="text-[10px] uppercase tracking-wider text-slate-400">
            {sub}
          </span>
        )}
      </span>
    </div>
  );
}

export function ClientLogos() {
  const { t } = useTranslations();
  return (
    <section className="border-y border-border bg-slate-50/40">
      <div className="container py-12">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {t("logos.title")}
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          <Logo name="PwC" sub="Audit" />
          <Logo name="Deloitte" sub="Assurance" />
          <Logo name="KPMG" sub="Audit" />
          <Logo name="EY" sub="Assurance" />
          <Logo name="Mazars" sub="Audit" />
          <Logo name="BDO" sub="Audit" />
          <Logo name="Grant T." sub="Audit" />
        </div>
      </div>
    </section>
  );
}
