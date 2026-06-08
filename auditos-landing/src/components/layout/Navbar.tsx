"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuditOSLogo } from "@/components/ui/logo";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

const links = [
  { key: "nav.home", href: "#top" },
  { key: "nav.features", href: "#features" },
  { key: "nav.solutions", href: "#showcase" },
  { key: "nav.pricing", href: "#pricing" },
  { key: "nav.resources", href: "#faq" },
  { key: "nav.about", href: "#footer" },
] as const;

export function Navbar() {
  const { t } = useTranslations();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-white/80 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="#top"
          aria-label="AuditOS"
          className="flex items-center gap-2"
        >
          <AuditOSLogo />
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-white/60 px-1.5 py-1 text-sm font-medium text-foreground/70 shadow-sm backdrop-blur">
            {links.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  className="inline-block rounded-full px-3.5 py-1.5 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-foreground/80 md:inline-flex"
          >
            {t("nav.signin")}
          </Button>
          <Button variant="gradient" size="sm" className="hidden md:inline-flex">
            {t("nav.bookDemo")}
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white/70 text-foreground/80 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground"
              >
                {t(l.key)}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <div className="px-1">
                <LanguageSwitcher />
              </div>
              <Button variant="outline" className="w-full justify-center">
                {t("nav.signin")}
              </Button>
              <Button variant="gradient" className="w-full justify-center">
                {t("nav.bookDemo")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
