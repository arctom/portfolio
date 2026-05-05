import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Footer from "@/components/layout/Footer";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/lib/types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const data = portfolioData as PortfolioData;

const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
  ssr: false,
});

const Cursor = dynamic(() => import("@/components/layout/Cursor"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    default: `${data.name} — Machine Learning Engineer`,
    template: `%s — ${data.name}`,
  },
  description:
    "Machine Learning Engineer and Head of AI specializing in Generative AI, LLM solutions, and production ML systems. Building AI that delivers measurable business outcomes.",
  openGraph: {
    title: `${data.name} — Machine Learning Engineer`,
    description:
      "Machine Learning Engineer and Head of AI specializing in Generative AI, LLM solutions, and production ML systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          {data.showCursor && <Cursor />}
        </ThemeProvider>
      </body>
    </html>
  );
}
