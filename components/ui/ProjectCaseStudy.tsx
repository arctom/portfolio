"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyProject } from "@/lib/types";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Labels not yet in the main translation map — small enough to inline
const uiLabels: Record<string, Record<string, string>> = {
  en: {
    howItWorks: "How it works",
    lessDetail: "Less detail",
    theProblem: "The Problem",
    theSolution: "The Solution",
    technology: "Technology",
    viewProject: "View project",
  },
  es: {
    howItWorks: "Cómo funciona",
    lessDetail: "Menos detalle",
    theProblem: "El Problema",
    theSolution: "La Solución",
    technology: "Tecnología",
    viewProject: "Ver proyecto",
  },
  fr: {
    howItWorks: "Comment ça marche",
    lessDetail: "Moins de détails",
    theProblem: "Le Problème",
    theSolution: "La Solution",
    technology: "Technologie",
    viewProject: "Voir le projet",
  },
};

export default function ProjectCaseStudy({
  project,
  index,
}: {
  project: CaseStudyProject;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();
  const labels = uiLabels[language];
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-white/15 ${
        expanded ? "border-gray-300 dark:border-white/15" : ""
      }`}
    >
      <div
        className={`flex flex-col ${isEven ? "laptop:flex-row" : "laptop:flex-row-reverse"}`}
      >
        {/* Left/Info side */}
        <div className="flex-1 p-6 tablet:p-8 laptop:p-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs font-medium text-accent/70 tracking-widest uppercase">
                {project.category}
              </span>
              <h3 className="text-xl tablet:text-2xl font-semibold mt-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/50 mt-1">{project.client}</p>
            </div>
          </div>

          {/* Impact badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {project.impact.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-white/50">
              {project.impact.label}
            </span>
          </div>

          {/* Expand button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors link flex items-center gap-2"
          >
            {expanded ? labels.lessDetail : labels.howItWorks}
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </button>

          {/* Expandable detail */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-white/5 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-gray-400 dark:text-white/30 uppercase tracking-wider mb-2">
                      {labels.theProblem}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 dark:text-white/30 uppercase tracking-wider mb-2">
                      {labels.theSolution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right/Tech side */}
        <div className="flex-1 bg-gray-50 dark:bg-surface-overlay p-6 tablet:p-8 laptop:p-10 flex flex-col justify-center">
          <p className="text-xs font-medium text-gray-400 dark:text-white/30 uppercase tracking-wider mb-4">
            {labels.technology}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent/70 hover:text-accent transition-colors mt-6 link"
            >
              {labels.viewProject}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
