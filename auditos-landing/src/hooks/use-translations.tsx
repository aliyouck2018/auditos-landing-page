"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Language } from "@/lib/translations";
import { translations, type TranslationKey } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("auditos-language");
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("auditos-language", lang);
      document.documentElement.lang = lang;
    }
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

type TranslationContextValue = {
  t: (key: TranslationKey) => string;
};

const TranslationContext = createContext<TranslationContextValue | undefined>(
  undefined,
);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[language][key] ?? translations.en[key] ?? key;
    },
    [language],
  );

  const value = useMemo(() => ({ t }), [t]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error("useTranslations must be used within a TranslationProvider");
  }
  return ctx;
}
