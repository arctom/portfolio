"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center">
        <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
          {t.notFound.code}
        </p>
        <h1 className="text-3xl font-bold text-white mb-4">{t.notFound.heading}</h1>
        <p className="text-white/50 mb-8">
          {t.notFound.body}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-surface hover:bg-white/90 transition-colors"
        >
          {t.notFound.goHome}
        </Link>
      </div>
    </div>
  );
}
