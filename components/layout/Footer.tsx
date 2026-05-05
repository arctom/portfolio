import SocialLinks from "@/components/ui/SocialLinks";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col tablet:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 dark:text-white/30">
          &copy; {new Date().getFullYear()} {data.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
