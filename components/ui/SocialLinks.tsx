import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {data.socials.map((social) => {
        if (social.link.startsWith("mailto")) {
          return (
            <a
              key={social.id}
              href={social.link}
              className="text-sm text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 link"
            >
              {social.title}
            </a>
          );
        }
        return (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 link"
          >
            {social.title}
          </a>
        );
      })}
    </div>
  );
}
