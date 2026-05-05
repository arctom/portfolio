"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;

export default function Navbar() {
  const { t, cycleLanguage, flag, label } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.approach, href: "#approach" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-surface/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white link"
            >
              {data.name}
            </a>

            {/* Desktop nav */}
            <div className="hidden laptop:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 link"
                >
                  {link.label}
                </a>
              ))}

              {/* Language cycle */}
              <button
                onClick={cycleLanguage}
                className="w-7 h-7 rounded-full overflow-hidden border border-gray-300 dark:border-white/20 hover:border-accent dark:hover:border-accent transition-colors link flex-shrink-0"
                aria-label={label}
                title={label}
              >
                <Image
                  src={flag}
                  alt={label}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </button>

              <ThemeToggle />
            </div>

            {/* Mobile buttons */}
            <div className="flex items-center gap-2 laptop:hidden">
              {/* Language cycle (mobile) */}
              <button
                onClick={cycleLanguage}
                className="w-7 h-7 rounded-full overflow-hidden border border-gray-300 dark:border-white/20 hover:border-accent dark:hover:border-accent transition-colors link flex-shrink-0"
                aria-label={label}
                title={label}
              >
                <Image
                  src={flag}
                  alt={label}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </button>

              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 link"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <motion.span
                  className="block w-5 h-px bg-gray-400 dark:bg-white/60"
                  animate={
                    mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-5 h-px bg-gray-400 dark:bg-white/60"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-5 h-px bg-gray-400 dark:bg-white/60"
                  animate={
                    mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-surface/95 backdrop-blur-lg flex items-center justify-center laptop:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
