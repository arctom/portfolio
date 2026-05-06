import AnimatedSection from "@/components/ui/AnimatedSection";
import ExperienceTimelineItem from "@/components/ui/ExperienceTimelineItem";
import SkillGroup from "@/components/ui/SkillGroup";
import { useLanguage } from "@/components/providers/LanguageProvider";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;
const { resume } = data;

export default function ExperienceSkills() {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: t.skillGroups.mlAi,
      skills: [
        "Python",
        "R",
        "TensorFlow",
        "RAG",
        "NLP",
        "SageMaker",
        "VertexAI",
      ],
    },
    {
      title: t.skillGroups.dataEngineering,
      skills: ["SQL", "MongoDB", "Docker", "Power BI"],
    },
    {
      title: t.skillGroups.backendSystems,
      skills: [
        "C++",
        "FastAPI",
        "React",
        "Git",
        "Agile",
      ],
    },
    {
      title: t.skillGroups.cloud,
      skills: ["AWS", "GCP", "Azure", "IBM"],
    },
  ];

  return (
    <section id="experience" className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              {t.experience.label}
            </p>
            <h2 className="text-3xl tablet:text-4xl font-bold tracking-tight text-balance">
              {t.experience.heading1}
              <br />
              <span className="text-gray-500 dark:text-white/40">{t.experience.heading2}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="flex flex-col laptop:flex-row gap-16 laptop:gap-24">
          {/* Timeline */}
          <div className="laptop:w-[60%]">
            <AnimatedSection>
              {resume.experiences.map((exp) => (
                <ExperienceTimelineItem
                  key={exp.id}
                  dates={exp.dates}
                  type={exp.type}
                  position={t.content.experiencePositions[exp.id] ?? exp.position}
                  bullets={t.content.experienceBullets[exp.id] ?? exp.bullets}
                />
              ))}
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.3}>
              <div className="relative pl-8 pt-4 border-t border-gray-200 dark:border-white/5 mt-4">
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200 dark:bg-white/5" />
                <div className="absolute left-0 top-0 w-[15px] h-[15px] rounded-full border-2 border-gray-300 dark:border-white/10 bg-white dark:bg-surface" />
                <div>
                  <span className="text-xs text-gray-400 dark:text-white/30">
                    {resume.education.universityDate}
                  </span>
                  <p className="text-base font-semibold text-gray-800 dark:text-white/90 mb-1 mt-2">
                    {resume.education.universityName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                    {t.content.educationPara}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Skills */}
          <div className="laptop:w-[40%]">
            <AnimatedSection delay={0.2}>
              <div className="laptop:sticky laptop:top-24">
                <h3 className="text-lg font-semibold mb-6">
                  {t.experience.technicalSkills}
                </h3>
                {skillGroups.map((group) => (
                  <SkillGroup
                    key={group.title}
                    title={group.title}
                    skills={group.skills}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
