"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCaseStudy from "@/components/ui/ProjectCaseStudy";
import { caseStudyProjects } from "@/data/projects";
import { fadeInUp } from "@/components/ui/AnimatedSection";

export default function Projects() {
  return (
    <section id="work" className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              Selected Work
            </p>
            <h2 className="text-3xl tablet:text-4xl font-bold tracking-tight text-balance">
              Problems solved,
              <br />
              <span className="text-gray-500 dark:text-white/40">not just projects shipped</span>
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
              <ProjectCaseStudy project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
