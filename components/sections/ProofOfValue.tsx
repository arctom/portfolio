import AnimatedSection from "@/components/ui/AnimatedSection";
import MetricCard from "@/components/ui/MetricCard";
import { proofMetrics } from "@/data/projects";

export default function ProofOfValue() {
  return (
    <section className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              Proven Impact
            </p>
            <h2 className="text-3xl tablet:text-4xl font-bold tracking-tight text-balance">
              Measurable outcomes,
              <br />
              <span className="text-gray-500 dark:text-white/40">not vanity metrics</span>
            </h2>
          </div>

          {/* Metric grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4">
            {proofMetrics.map((metric, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <MetricCard value={metric.value} label={metric.label} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
