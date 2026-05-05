"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCaseStudy from "@/components/ui/ProjectCaseStudy";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { caseStudyProjects } from "@/data/projects";
import { fadeInUp } from "@/components/ui/AnimatedSection";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              {t.projects.label}
            </p>
            <h2 className="text-3xl tablet:text-4xl font-bold tracking-tight text-balance">
              {t.projects.heading1}
              <br />
              <span className="text-gray-500 dark:text-white/40">{t.projects.heading2}</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Project cards */}
        <div className="space-y-6">
          {caseStudyProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <ProjectCaseStudy
                project={{
                  ...project,
                  title: t.caseStudies[project.id]?.title ?? project.title,
                  problem: t.caseStudies[project.id]?.problem ?? project.problem,
                  solution: t.caseStudies[project.id]?.solution ?? project.solution,
                  impact: {
                    ...project.impact,
                    label: t.caseStudies[project.id]?.impactLabel ?? project.impact.label,
                  },
                }}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
