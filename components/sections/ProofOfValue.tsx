import AnimatedSection from "@/components/ui/AnimatedSection";
import MetricCard from "@/components/ui/MetricCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { proofMetrics } from "@/data/projects";

export default function ProofOfValue() {
  const { t } = useLanguage();

  return (
    <section className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              {t.proof.label}
            </p>
            <h2 className="text-3xl tablet:text-4xl font-bold tracking-tight text-balance">
              {t.proof.heading1}
              <br />
              <span className="text-gray-500 dark:text-white/40">{t.proof.heading2}</span>
            </h2>
          </div>

          {/* Metric grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4">
            {proofMetrics.map((metric, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <MetricCard value={metric.value} label={t.proofMetricLabels[i]} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
