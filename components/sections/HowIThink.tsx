"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function HowIThink() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              {t.approach.label}
            </p>
            <h2 className="text-3xl tablet:text-4xl font-bold tracking-tight text-balance">
              {t.approach.heading1}
              <br />
              <span className="text-gray-500 dark:text-white/40">{t.approach.heading2}</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Philosophy cards */}
        <div className="space-y-12 tablet:space-y-16">
          {t.philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="max-w-3xl"
            >
              <h3 className="text-2xl tablet:text-3xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-base tablet:text-lg text-gray-500 dark:text-white/50 leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
