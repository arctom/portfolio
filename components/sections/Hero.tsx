"use client";

import { motion } from "framer-motion";
import GradientBackground from "@/components/ui/GradientBackground";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Name */}
          <motion.p
            variants={item}
            className="text-sm font-medium text-accent/80 mb-6 tracking-widest uppercase"
          >
            {data.name}
          </motion.p>

          {/* Primary positioning */}
          <motion.h1
            variants={item}
            className="text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl font-bold tracking-tight text-balance leading-[1.05] mb-6"
          >
            {t.hero.heading1}{" "}
            <span className="text-gray-500 dark:text-white/40">{t.hero.heading2}</span>{" "}
            {t.hero.heading3}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg tablet:text-xl text-gray-500 dark:text-white/50 max-w-2xl text-balance mb-10 leading-relaxed"
          >
            {t.hero.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col mob:flex-row gap-4"
          >
            <Button href="#work" variant="primary">
              {t.hero.viewMyWork}
            </Button>
            <Button href="#contact" variant="ghost">
              {t.hero.getInTouch}
            </Button>
          </motion.div>

          {/* Quick stat */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap gap-8 pt-8 border-t border-gray-200 dark:border-white/5"
          >
            <div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">$20M+</p>
              <p className="text-sm text-gray-400 dark:text-white/40 mt-1">
                {t.hero.stats.savings}
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">10+</p>
              <p className="text-sm text-gray-400 dark:text-white/40 mt-1">
                {t.hero.stats.team}
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">4+</p>
              <p className="text-sm text-gray-400 dark:text-white/40 mt-1">
                {t.hero.stats.industries}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
