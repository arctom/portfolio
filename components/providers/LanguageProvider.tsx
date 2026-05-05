"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  type Language,
  type Translations,
  LANGUAGE_CYCLE,
  LANGUAGES,
  translations,
} from "@/lib/i18n";

const STORAGE_KEY = "portfolio-lang";

interface LanguageContextValue {
  language: Language;
  t: Translations;
  cycleLanguage: () => void;
  flag: string;
  label: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es" || stored === "fr") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const cycleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const idx = LANGUAGE_CYCLE.indexOf(prev);
      return LANGUAGE_CYCLE[(idx + 1) % LANGUAGE_CYCLE.length];
    });
  }, []);

  const langConfig = LANGUAGES.find((l) => l.code === language)!;

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        cycleLanguage,
        flag: langConfig.flag,
        label: langConfig.label,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
