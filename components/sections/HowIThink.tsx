"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/ui/AnimatedSection";

const philosophies = [
  {
    title: "Outcomes over outputs",
    body: "I measure success by business impact, not model accuracy. A 95% accurate model nobody uses is worth less than an 80% accurate one that saves 30 minutes a day. Every project starts with the question: what decision does this enable?",
  },
  {
    title: "Translate, then build",
    body: "The hardest part of AI is not the model — it's understanding the business problem well enough to frame it correctly. I spend as much time with stakeholders as I do with code. Technical fluency means nothing without context.",
  },
  {
    title: "Simple first, complex when necessary",
    body: "Start with a heuristic, then a linear model, then a transformer. Every layer of complexity must earn its place with measurable improvement. The best ML system is the simplest one that meets the business requirement.",
  },
];

export default function HowIThink() {
  return (
    <section id="approach" className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              How I Think
            </p>
            <h2 className="text-3xl tablet:text-4xl font-bold tracking-tight text-balance">
              Engineering philosophy,
              <br />
              <span className="text-gray-500 dark:text-white/40">not buzzwords</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Philosophy cards */}
        <div className="space-y-12 tablet:space-y-16">
          {philosophies.map((item, i) => (
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
