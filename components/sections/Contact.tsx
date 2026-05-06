import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;

export default function Contact() {
  const { t } = useLanguage();
  const email = data.socials.find((s) => s.title === "Email")?.link || "";
  const linkedin = data.socials.find((s) => s.title === "LinkedIn")?.link || "";
  const github = data.socials.find((s) => s.title === "Github")?.link || "";

  return (
    <section id="contact" className="py-24 tablet:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-accent/80 mb-4 tracking-widest uppercase">
              {t.contact.label}
            </p>
            <h2 className="text-3xl tablet:text-4xl laptop:text-5xl font-bold tracking-tight text-balance mb-6">
              {t.contact.heading}
            </h2>
            <p className="text-lg text-gray-500 dark:text-white/50 max-w-xl text-balance">
              {t.contact.body}
            </p>
          </div>
        </AnimatedSection>

        {/* Contact links */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col gap-8">
            {/* Email - primary */}
            <a
              href={email}
              className="text-2xl tablet:text-3xl laptop:text-4xl font-semibold text-gray-900 dark:text-white hover:text-accent transition-colors link break-all"
            >
              arctomb@gmail.com
            </a>

            {/* Secondary links */}
            <div className="flex flex-wrap gap-4">
              <Button href={linkedin} variant="ghost">
                {t.contact.linkedin}
              </Button>
              <Button href={github} variant="ghost">
                {t.contact.github}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
