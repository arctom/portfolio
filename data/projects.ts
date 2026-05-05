import { CaseStudyProject } from "@/lib/types";

export const caseStudyProjects: CaseStudyProject[] = [
  {
    id: "1",
    title: "Applicant Curriculum Vitae Categorization",
    client: "Grupo PiSA",
    category: "NLP & Document AI",
    problem:
      "HR teams manually classified thousands of candidate CVs, creating a slow, inconsistent, and error-prone screening process that delayed hiring decisions by weeks.",
    solution:
      "Built an OCR pipeline with a custom LLM for automated candidate classification, integrating NER feature extraction and lemmatization with NLTK and SpaCy for structured resume parsing.",
    impact: {
      value: "50%",
      label: "reduction in processing time",
    },
    technologies: ["OCR", "LLM", "NLTK", "SpaCy", "NER", "Document AI"],
    url: "https://miscompetenciastec21.tec.mx/elumen/portfolio/qYD5WQUAgetB2Wo",
  },
  {
    id: "2",
    title: "Algorithmic Trading Assistant",
    client: "ByteBoost",
    category: "Machine Learning",
    problem:
      "Traders lacked data-driven signals for optimal market entry and exit points, relying on intuition rather than quantitative analysis to make high-stakes decisions.",
    solution:
      "Designed ML algorithms analyzing historical market data to identify trading patterns, deployed as a SaaS platform for trade visualization and operation tracking.",
    impact: {
      value: "20%",
      label: "monthly portfolio growth",
    },
    technologies: [
      "ML",
      "Time Series",
      "SaaS",
      "Data Visualization",
      "Pattern Recognition",
    ],
    url: "https://byteboost.ai/",
  },
  {
    id: "3",
    title: "Transport Optimization in Logistics",
    client: "Coppel",
    category: "Operations Research",
    problem:
      "E-commerce delivery routes were inefficient, increasing fuel costs, delivery times, and carbon footprint across a nationwide logistics network.",
    solution:
      "Applied Guided Local Search (GLS) metaheuristic to solve the Capacitated Vehicle Routing Problem, incorporating real-time traffic data for dynamic route planning.",
    impact: {
      value: "41%",
      label: "reduction in daily distance traveled",
    },
    technologies: [
      "GLS",
      "CVRP",
      "Route Optimization",
      "Metaheuristics",
      "Spatial Analysis",
    ],
    url: "https://miscompetenciastec21.tec.mx/elumen/portfolio/qYD5WQUAgetB2Wo",
  },
  {
    id: "4",
    title: "AI Assistant for Retail Cost Analysis",
    client: "Major Retailer",
    category: "AI Assistants",
    problem:
      "C-level executives waited 2+ days for cost analysis reports, blocking rapid strategic decisions in a competitive retail market with thin margins.",
    solution:
      "Deployed an AI assistant powered by LLMs with RAG architecture, connected to live data sources to deliver instant cost breakdowns and business driver analysis.",
    impact: {
      value: "<1 min",
      label: "decision time (down from 2+ days)",
    },
    technologies: ["LLM", "RAG", "AI Assistant", "Real-time Data", "NLP"],
  },
];

export const proofMetrics = [
  {
    value: "50%",
    label: "reduction in CV processing time",
  },
  {
    value: "41%",
    label: "reduction in delivery distance",
  },
  {
    value: "20%",
    label: "monthly portfolio growth",
  },
  {
    value: "<1 min",
    label: "decision time (from 2+ days)",
  },
];
