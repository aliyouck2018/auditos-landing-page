import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/use-language";
import { TranslationProvider } from "@/hooks/use-translations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AuditOS — Smarter Audits. Faster Decisions.",
  description:
    "AuditOS is the AI-powered audit management platform built for audit firms, internal auditors, and compliance teams. Automate planning, risk assessment, testing, workpapers, and reporting.",
  keywords: [
    "audit management software",
    "AI audit platform",
    "audit automation",
    "compliance",
    "ISA compliance",
    "audit workpapers",
    "risk assessment",
  ],
  authors: [{ name: "AuditOS" }],
  openGraph: {
    title: "AuditOS — Smarter Audits. Faster Decisions.",
    description:
      "AI-powered audit management platform for modern audit firms and compliance teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background antialiased">
        <LanguageProvider>
          <TranslationProvider>{children}</TranslationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
