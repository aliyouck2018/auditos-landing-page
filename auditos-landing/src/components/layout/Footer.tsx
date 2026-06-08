"use client";

import Link from "next/link";
import { AuditOSLogo } from "@/components/ui/logo";
import { useTranslations } from "@/hooks/use-translations";
import { Github, Linkedin, Twitter } from "lucide-react";

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { t } = useTranslations();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-border bg-slate-50/60"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <AuditOSLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")} — {t("cta.subtitle")}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label="social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Column
              title={t("footer.product")}
              links={[
                { label: t("footer.product.features"), href: "#features" },
                { label: t("footer.product.pricing"), href: "#pricing" },
                { label: t("footer.product.security"), href: "#security" },
                { label: t("footer.product.integrations"), href: "#" },
              ]}
            />
            <Column
              title={t("footer.resources")}
              links={[
                { label: t("footer.resources.blog"), href: "#" },
                { label: t("footer.resources.guides"), href: "#" },
                { label: t("footer.resources.webinars"), href: "#" },
                { label: t("footer.resources.docs"), href: "#" },
              ]}
            />
            <Column
              title={t("footer.company")}
              links={[
                { label: t("footer.company.about"), href: "#" },
                { label: t("footer.company.careers"), href: "#" },
                { label: t("footer.company.partners"), href: "#" },
                { label: t("footer.company.contact"), href: "#" },
              ]}
            />
            <Column
              title={t("footer.legal")}
              links={[
                { label: t("footer.legal.privacy"), href: "#" },
                { label: t("footer.legal.terms"), href: "#" },
                { label: t("footer.legal.compliance"), href: "#" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>{t("footer.copyright")}</p>
          <p className="inline-flex items-center gap-1.5">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
