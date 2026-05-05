// ---------------------------------------------------------------------------
// i18n — translations & language configuration
// ---------------------------------------------------------------------------
export type Language = "en" | "es" | "fr";

export const LANGUAGE_CYCLE: Language[] = ["en", "es", "fr"];

export const LANGUAGES: {
  code: Language;
  label: string;
  flag: string;
}[] = [
  { code: "en", label: "English", flag: "/languages/us.jpg" },
  { code: "es", label: "Español", flag: "/languages/es.jpg" },
  { code: "fr", label: "Français", flag: "/languages/fr.jpg" },
];

// ---------------------------------------------------------------------------
// Translation shape
// ---------------------------------------------------------------------------
export interface Translations {
  nav: {
    work: string;
    experience: string;
    approach: string;
    contact: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  hero: {
    heading1: string;
    heading2: string;
    heading3: string;
    subheading: string;
    viewMyWork: string;
    getInTouch: string;
    stats: {
      savings: string;
      team: string;
      industries: string;
    };
  };
  proof: {
    label: string;
    heading1: string;
    heading2: string;
  };
  projects: {
    label: string;
    heading1: string;
    heading2: string;
  };
  experience: {
    label: string;
    heading1: string;
    heading2: string;
    technicalSkills: string;
  };
  approach: {
    label: string;
    heading1: string;
    heading2: string;
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    linkedin: string;
    github: string;
    availability: string;
  };
  notFound: {
    code: string;
    heading: string;
    body: string;
    goHome: string;
  };
  meta: {
    titleSuffix: string;
    description: string;
    ogDescription: string;
  };

  // Content translations — portfolio.json fields
  content: {
    headerTaglineOne: string;
    headerTaglineTwo: string;
    headerTaglineThree: string;
    headerTaglineFour: string;
    aboutpara: string;
    services: {
      id: string;
      title: string;
      description: string;
    }[];
    resumeTagline: string;
    resumeDescription: string;
    experiencePositions: Record<string, string>;
    experienceBullets: Record<string, string>;
    educationPara: string;
    projectTitles: Record<string, string>;
    projectDescriptions: Record<string, string>;
  };

  // Content translations — data/projects.ts
  caseStudies: Record<
    string,
    {
      title: string;
      problem: string;
      solution: string;
      impactLabel: string;
    }
  >;
  proofMetricLabels: Record<number, string>;

  // Skill group titles
  skillGroups: {
    mlAi: string;
    dataEngineering: string;
    backendSystems: string;
  };

  // Philosophy items
  philosophies: {
    title: string;
    body: string;
  }[];
}

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------

const en: Translations = {
  nav: {
    work: "Work",
    experience: "Experience",
    approach: "Approach",
    contact: "Contact",
  },
  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  hero: {
    heading1: "Machine Learning Engineer",
    heading2: "building AI that delivers",
    heading3: "measurable business outcomes",
    subheading:
      "I lead AI teams and build production ML systems — from LLM-powered assistants to optimization engines — that reduce costs, accelerate decisions, and drive revenue.",
    viewMyWork: "View My Work",
    getInTouch: "Get in Touch",
    stats: {
      savings: "annual projected savings",
      team: "cross-functional team members led",
      industries: "industries with deployed AI",
    },
  },
  proof: {
    label: "Proven Impact",
    heading1: "Measurable outcomes,",
    heading2: "not vanity metrics",
  },
  projects: {
    label: "Selected Work",
    heading1: "Problems solved,",
    heading2: "not just projects shipped",
  },
  experience: {
    label: "Experience",
    heading1: "Where I've built,",
    heading2: "what I use",
    technicalSkills: "Technical Skills",
  },
  approach: {
    label: "How I Think",
    heading1: "Engineering philosophy,",
    heading2: "not buzzwords",
  },
  contact: {
    label: "Let's Talk",
    heading: "Interested in working together?",
    body: "I'm open to senior ML engineering, AI leadership, and consulting opportunities where I can drive measurable impact.",
    linkedin: "LinkedIn",
    github: "GitHub",
    availability: "Open to opportunities",
  },
  notFound: {
    code: "404",
    heading: "Page not found",
    body: "The page you're looking for doesn't exist.",
    goHome: "Go home",
  },
  meta: {
    titleSuffix: "Machine Learning Engineer",
    description:
      "Machine Learning Engineer and Head of AI specializing in Generative AI, LLM solutions, and production ML systems. Building AI that delivers measurable business outcomes.",
    ogDescription:
      "Machine Learning Engineer and Head of AI specializing in Generative AI, LLM solutions, and production ML systems.",
  },

  content: {
    headerTaglineOne: "Head of AI Development",
    headerTaglineTwo: "Machine Learning Engineer",
    headerTaglineThree: "Specialized in Generative AI & LLM Solutions",
    headerTaglineFour: "Translating business needs into technical solutions",
    aboutpara:
      "I am a machine Learning Engineer and product-focused Head of AI with expertise in AI, cloud computing, and advanced analytics. Ability to translate business needs into technical solutions. Successfully lead teams to deliver generative AI solutions across multiple industries. Specialized in Python, Generative AI, LLM, and cloud platforms AWS/GCP and translating use cases into measurable product outcomes.",
    services: [
      {
        id: "1",
        title: "Generative AI Solutions",
        description:
          "Building LLM powered chatbots and AI assistants for multiple industries. Designing architectures for fine-tuned RAG models through client consulting and product design.",
      },
      {
        id: "2",
        title: "Machine Learning Engineering",
        description:
          "Developing predictive AI models and implementing advanced NLP techniques. Creating SaaS platforms for trend analysis, data visualization, and AI applications.",
      },
      {
        id: "3",
        title: "Cloud & MLOps",
        description:
          "Expertise in AWS, GCP, Azure, and IBM cloud platforms. Implementing MLOps pipelines, model deployment, and scalable AI infrastructure.",
      },
      {
        id: "4",
        title: "AI Consulting",
        description:
          "Translating business needs into technical solutions. Stakeholder management and delivering measurable product outcomes through AI implementation.",
      },
    ],
    resumeTagline: "Head of AI Development | Machine Learning Engineer",
    resumeDescription:
      "Machine Learning Engineer and product-focused Head of AI with expertise in AI, cloud computing, and advanced analytics. Successfully lead teams to deliver generative AI solutions across multiple industries.",
    experiencePositions: {
      "1":
        "Head of AI Development at Key Prediction",
      "2":
        "Machine Learning Engineer at NDS Cognitive Labs",
      "3":
        "Fullstack Developer at NDS Cognitive Labs",
      "4":
        "Business Analyst at Linamar Corporation",
    },
    experienceBullets: {
      "1":
        "Building LLM powered chatbots for multiple industries, directing a 10 member cross functional team, Developed AI assistant for major retailer automating cost analysis reducing decision time from 2+ days to under a minute, Designed predictive AI model for pharmaceutical company proving to earn 20M USD annually, Partnered with U.S. Embassy in Mexico to develop digital avatar with LLM support for visa inquiries",
      "2":
        "Organized 6 person team to create SaaS platforms for trend analysis and Generative AI applications, Introduced AI virtual sales assistant using RAG technology increasing conversion rates by 5%, Led 4 member team to train generative AI chatbot automating 30% of developers tasks, Applied advanced NLP techniques improving chatbot accuracy by 15%",
      "3":
        "Crafted responsive web application using FastAPI and React for chatbot response editing, Created super admin module for 10 companies reducing management time and improving scalability",
      "4":
        "Launched real-time Power BI dashboard for board of directors, Integrated key production metrics reducing decision making meetings by 30 minutes daily",
    },
    educationPara:
      "Bachelor of Engineering in Data Science and Mathematics. Awarded 2nd place in Regional Programming Contest (C++) at Tecnológico Nacional de Mexico.",
    projectTitles: {
      "1": "Applicant Curriculum Vitae Categorization",
      "2": "Algorithmic Trading Assistant",
      "3": "Transport Optimization in Logistics",
      "4": "AI Assistant for Retail Cost Analysis",
    },
    projectDescriptions: {
      "1":
        "Established an OCR scanner and custom LLM to automate candidate classification for Grupo PiSA. Integrated NER feature extraction and lemmatization using NLTK and SpaCy. Achieved a 50% reduction in processing time compared to manual classification.",
      "2":
        "Designed ML algorithms to analyze historical market data and identify trading patterns for ByteBoost. Developed a SaaS platform for customers to visualize all their trades and operations. Increased monthly portfolio growth by 20% through optimal entry and exit points.",
      "3":
        "Applied Guided Local Search (GLS) to solve the CVRP problem for Coppel's e-commerce deliveries. Established a robust metaheuristic approach that enhanced route planning based on traffic. Optimized delivery routes resulting in a 41% reduction in total daily distance traveled.",
      "4":
        "Developed and deployed an AI assistant for a major retailer that automated all cost analysis for C-level executives. Reduced decision making time from 2+ days to under a minute, providing instant insights into key business drivers with live data.",
    },
  },

  caseStudies: {
    "1": {
      title: "Applicant Curriculum Vitae Categorization",
      problem:
        "HR teams manually classified thousands of candidate CVs, creating a slow, inconsistent, and error-prone screening process that delayed hiring decisions by weeks.",
      solution:
        "Built an OCR pipeline with a custom LLM for automated candidate classification, integrating NER feature extraction and lemmatization with NLTK and SpaCy for structured resume parsing.",
      impactLabel: "reduction in processing time",
    },
    "2": {
      title: "Algorithmic Trading Assistant",
      problem:
        "Traders lacked data-driven signals for optimal market entry and exit points, relying on intuition rather than quantitative analysis to make high-stakes decisions.",
      solution:
        "Designed ML algorithms analyzing historical market data to identify trading patterns, deployed as a SaaS platform for trade visualization and operation tracking.",
      impactLabel: "monthly portfolio growth",
    },
    "3": {
      title: "Transport Optimization in Logistics",
      problem:
        "E-commerce delivery routes were inefficient, increasing fuel costs, delivery times, and carbon footprint across a nationwide logistics network.",
      solution:
        "Applied Guided Local Search (GLS) metaheuristic to solve the Capacitated Vehicle Routing Problem, incorporating real-time traffic data for dynamic route planning.",
      impactLabel: "reduction in daily distance traveled",
    },
    "4": {
      title: "AI Assistant for Retail Cost Analysis",
      problem:
        "C-level executives waited 2+ days for cost analysis reports, blocking rapid strategic decisions in a competitive retail market with thin margins.",
      solution:
        "Deployed an AI assistant powered by LLMs with RAG architecture, connected to live data sources to deliver instant cost breakdowns and business driver analysis.",
      impactLabel: "decision time (down from 2+ days)",
    },
  },

  proofMetricLabels: {
    0: "reduction in CV processing time",
    1: "reduction in delivery distance",
    2: "monthly portfolio growth",
    3: "decision time (from 2+ days)",
  },

  skillGroups: {
    mlAi: "ML & AI",
    dataEngineering: "Data Engineering",
    backendSystems: "Backend & Systems",
  },

  philosophies: [
    {
      title: "Outcomes over outputs",
      body: "I measure success by business impact, not model accuracy. A 95% accurate model nobody uses is worth less than an 80% accurate one that saves 30 minutes a day. Every project starts with the question: what decision does this enable?",
    },
    {
      title: "Translate, then build",
      body: "The hardest part of AI is not the model — it's understanding the business problem well enough to frame it correctly. I spend as much time with stakeholders as I do with code. Technical fluency means nothing without context.",
    },
    {
      title: "Simple first, complex when necessary",
      body: "Start with a heuristic, then a linear model, then a transformer. Every layer of complexity must earn its place with measurable improvement. The best ML system is the simplest one that meets the business requirement.",
    },
  ],
};

const es: Translations = {
  nav: {
    work: "Proyectos",
    experience: "Experiencia",
    approach: "Enfoque",
    contact: "Contacto",
  },
  theme: {
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
  },
  hero: {
    heading1: "Machine Learning Engineer",
    heading2: "creando IA que genera",
    heading3: "resultados de negocio medibles",
    subheading:
      "Lidero equipos de IA y construyo sistemas de ML en producción — desde asistentes con LLMs hasta motores de optimización — que reducen costos, aceleran decisiones e impulsan ingresos.",
    viewMyWork: "Ver Mi Trabajo",
    getInTouch: "Contactar",
    stats: {
      savings: "ahorro anual proyectado",
      team: "miembros liderados en equipos multidisciplinarios",
      industries: "industrias con IA desplegada",
    },
  },
  proof: {
    label: "Impacto Comprobado",
    heading1: "Resultados medibles,",
    heading2: "no métricas vacías",
  },
  projects: {
    label: "Proyectos",
    heading1: "Problemas resueltos,",
    heading2: "no solo proyectos entregados",
  },
  experience: {
    label: "Experiencia",
    heading1: "Dónde he construido,",
    heading2: "qué utilizo",
    technicalSkills: "Habilidades Técnicas",
  },
  approach: {
    label: "Mi Filosofía",
    heading1: "Filosofía de ingeniería,",
    heading2: "no palabras de moda",
  },
  contact: {
    label: "Hablemos",
    heading: "¿Te interesa trabajar juntos?",
    body: "Estoy abierto a oportunidades de ML engineering senior, liderazgo en IA y consultoría donde pueda generar un impacto medible.",
    linkedin: "LinkedIn",
    github: "GitHub",
    availability: "Abierto a oportunidades",
  },
  notFound: {
    code: "404",
    heading: "Página no encontrada",
    body: "La página que buscas no existe.",
    goHome: "Ir al inicio",
  },
  meta: {
    titleSuffix: "Machine Learning Engineer",
    description:
      "Machine Learning Engineer y Head of AI especializado en IA Generativa, LLMs y sistemas de ML en producción. Creando IA que genera resultados de negocio medibles.",
    ogDescription:
      "Machine Learning Engineer y Head of AI especializado en IA Generativa, LLMs y sistemas de ML en producción.",
  },

  content: {
    headerTaglineOne: "Head of AI Development",
    headerTaglineTwo: "Machine Learning Engineer",
    headerTaglineThree: "Especializado en IA Generativa y Soluciones LLM",
    headerTaglineFour:
      "Traduciendo necesidades de negocio en soluciones técnicas",
    aboutpara:
      "Soy Machine Learning Engineer y Head of AI orientado a producto con experiencia en IA, cloud computing y analítica avanzada. Capacidad para traducir necesidades de negocio en soluciones técnicas. Lidero equipos exitosamente para entregar soluciones de IA generativa en múltiples industrias. Especializado en Python, IA Generativa, LLM y plataformas cloud AWS/GCP, traduciendo casos de uso en resultados de producto medibles.",
    services: [
      {
        id: "1",
        title: "Soluciones de IA Generativa",
        description:
          "Construcción de chatbots con LLMs y asistentes de IA para múltiples industrias. Diseño de arquitecturas RAG con fine-tuning mediante consultoría y diseño de producto.",
      },
      {
        id: "2",
        title: "Machine Learning Engineering",
        description:
          "Desarrollo de modelos predictivos de IA e implementación de técnicas avanzadas de NLP. Creación de plataformas SaaS para análisis de tendencias, visualización de datos y aplicaciones de IA.",
      },
      {
        id: "3",
        title: "Cloud y MLOps",
        description:
          "Experiencia en plataformas cloud AWS, GCP, Azure e IBM. Implementación de pipelines MLOps, despliegue de modelos e infraestructura de IA escalable.",
      },
      {
        id: "4",
        title: "Consultoría en IA",
        description:
          "Traduciendo necesidades de negocio en soluciones técnicas. Gestión de stakeholders y entrega de resultados de producto medibles mediante implementación de IA.",
      },
    ],
    resumeTagline: "Head of AI Development | Machine Learning Engineer",
    resumeDescription:
      "Machine Learning Engineer y Head of AI orientado a producto con experiencia en IA, cloud computing y analítica avanzada. Lidero equipos exitosamente para entregar soluciones de IA generativa en múltiples industrias.",
    experiencePositions: {
      "1":
        "Head of AI Development en Key Prediction",
      "2":
        "Machine Learning Engineer en NDS Cognitive Labs",
      "3":
        "Fullstack Developer en NDS Cognitive Labs",
      "4":
        "Business Analyst en Linamar Corporation",
    },
    experienceBullets: {
      "1":
        "Construcción de chatbots con LLMs para múltiples industrias, dirigiendo un equipo multidisciplinario de 10 personas. Desarrollo de asistente de IA para importante retailer automatizando análisis de costos, reduciendo tiempo de decisión de 2+ días a menos de un minuto. Diseño de modelo predictivo de IA para empresa farmacéutica con proyección de ganancias de 20M USD anuales. Colaboración con la Embajada de EE.UU. en México para desarrollar avatar digital con soporte LLM para consultas de visas",
      "2":
        "Organicé equipo de 6 personas para crear plataformas SaaS de análisis de tendencias y aplicaciones de IA Generativa. Introduje asistente virtual de ventas con tecnología RAG aumentando tasas de conversión en 5%. Lideré equipo de 4 personas para entrenar chatbot de IA generativa automatizando el 30% de tareas de desarrolladores. Apliqué técnicas avanzadas de NLP mejorando precisión del chatbot en 15%",
      "3":
        "Desarrollé aplicación web responsive con FastAPI y React para edición de respuestas de chatbot. Creé módulo super admin para 10 empresas reduciendo tiempo de gestión y mejorando escalabilidad",
      "4":
        "Lancé dashboard en tiempo real con Power BI para junta directiva. Integré métricas clave de producción reduciendo reuniones de toma de decisiones en 30 minutos diarios",
    },
    educationPara:
      "Licenciatura en Ingeniería en Ciencia de Datos y Matemáticas. 2do lugar en Concurso Regional de Programación (C++) en el Tecnológico Nacional de México.",
    projectTitles: {
      "1": "Categorización de Currículums Vitae",
      "2": "Asistente de Trading Algorítmico",
      "3": "Optimización de Transporte en Logística",
      "4": "Asistente IA para Análisis de Costos Retail",
    },
    projectDescriptions: {
      "1":
        "Implementé un escáner OCR y LLM personalizado para automatizar la clasificación de candidatos para Grupo PiSA. Integré extracción de características NER y lematización usando NLTK y SpaCy. Logré una reducción del 50% en tiempo de procesamiento comparado con clasificación manual.",
      "2":
        "Diseñé algoritmos de ML para analizar datos históricos de mercado e identificar patrones de trading para ByteBoost. Desarrollé una plataforma SaaS para que clientes visualicen todas sus operaciones. Aumenté el crecimiento mensual del portafolio en 20% mediante puntos óptimos de entrada y salida.",
      "3":
        "Apliqué Guided Local Search (GLS) para resolver el problema CVRP en entregas de e-commerce de Coppel. Establecí un enfoque metaheurístico robusto que mejoró la planificación de rutas basada en tráfico. Optimicé rutas de entrega resultando en una reducción del 41% en distancia total diaria recorrida.",
      "4":
        "Desarrollé y desplegué un asistente de IA para un importante retailer que automatizó todo el análisis de costos para ejecutivos C-level. Reduje el tiempo de toma de decisiones de 2+ días a menos de un minuto, proporcionando información instantánea sobre indicadores clave del negocio con datos en vivo.",
    },
  },

  caseStudies: {
    "1": {
      title: "Categorización de Currículums Vitae",
      problem:
        "Equipos de RRHH clasificaban manualmente miles de CVs, creando un proceso lento, inconsistente y propenso a errores que retrasaba las decisiones de contratación por semanas.",
      solution:
        "Construí un pipeline de OCR con un LLM personalizado para clasificación automatizada de candidatos, integrando extracción de características NER y lematización con NLTK y SpaCy para análisis estructurado de currículums.",
      impactLabel: "reducción en tiempo de procesamiento",
    },
    "2": {
      title: "Asistente de Trading Algorítmico",
      problem:
        "Los traders carecían de señales basadas en datos para puntos óptimos de entrada y salida del mercado, dependiendo de la intuición en lugar de análisis cuantitativo para tomar decisiones de alto riesgo.",
      solution:
        "Diseñé algoritmos de ML que analizan datos históricos de mercado para identificar patrones de trading, desplegados como plataforma SaaS para visualización de operaciones y seguimiento de transacciones.",
      impactLabel: "crecimiento mensual del portafolio",
    },
    "3": {
      title: "Optimización de Transporte en Logística",
      problem:
        "Las rutas de entrega de e-commerce eran ineficientes, aumentando costos de combustible, tiempos de entrega y huella de carbono en una red logística nacional.",
      solution:
        "Apliqué la metaheurística Guided Local Search (GLS) para resolver el Problema de Enrutamiento de Vehículos con Capacidad, incorporando datos de tráfico en tiempo real para planificación dinámica de rutas.",
      impactLabel: "reducción en distancia diaria recorrida",
    },
    "4": {
      title: "Asistente IA para Análisis de Costos Retail",
      problem:
        "Ejecutivos C-level esperaban 2+ días por informes de análisis de costos, bloqueando decisiones estratégicas rápidas en un mercado retail competitivo con márgenes ajustados.",
      solution:
        "Desplegué un asistente de IA impulsado por LLMs con arquitectura RAG, conectado a fuentes de datos en vivo para entregar desgloses de costos instantáneos y análisis de indicadores de negocio.",
      impactLabel: "tiempo de decisión (de 2+ días a <1 min)",
    },
  },

  proofMetricLabels: {
    0: "reducción en tiempo de procesamiento de CV",
    1: "reducción en distancia de entrega",
    2: "crecimiento mensual del portafolio",
    3: "tiempo de decisión (de 2+ días a <1 min)",
  },

  skillGroups: {
    mlAi: "ML e IA",
    dataEngineering: "Ingeniería de Datos",
    backendSystems: "Backend y Sistemas",
  },

  philosophies: [
    {
      title: "Resultados sobre outputs",
      body: "Mido el éxito por impacto en el negocio, no por precisión del modelo. Un modelo 95% preciso que nadie usa vale menos que uno 80% preciso que ahorra 30 minutos al día. Cada proyecto comienza con la pregunta: ¿qué decisión habilita esto?",
    },
    {
      title: "Traducir, luego construir",
      body: "La parte más difícil de la IA no es el modelo — es entender el problema de negocio lo suficiente para formularlo correctamente. Paso tanto tiempo con stakeholders como con código. La fluidez técnica no significa nada sin contexto.",
    },
    {
      title: "Simple primero, complejo cuando sea necesario",
      body: "Empiezo con una heurística, luego un modelo lineal, luego un transformer. Cada capa de complejidad debe ganarse su lugar con una mejora medible. El mejor sistema de ML es el más simple que cumple con el requisito de negocio.",
    },
  ],
};

const fr: Translations = {
  nav: {
    work: "Projets",
    experience: "Expérience",
    approach: "Approche",
    contact: "Contact",
  },
  theme: {
    switchToLight: "Passer en mode clair",
    switchToDark: "Passer en mode sombre",
  },
  hero: {
    heading1: "Machine Learning Engineer",
    heading2: "créer de l'IA qui génère",
    heading3: "des résultats mesurables",
    subheading:
      "Je dirige des équipes IA et construis des systèmes de ML en production — des assistants LLM aux moteurs d'optimisation — qui réduisent les coûts, accélèrent les décisions et génèrent des revenus.",
    viewMyWork: "Voir Mon Travail",
    getInTouch: "Me Contacter",
    stats: {
      savings: "économies annuelles projetées",
      team: "membres d'équipe pluridisciplinaire dirigés",
      industries: "secteurs avec IA déployée",
    },
  },
  proof: {
    label: "Impact Prouvé",
    heading1: "Des résultats mesurables,",
    heading2: "pas des indicateurs vides",
  },
  projects: {
    label: "Projets",
    heading1: "Problèmes résolus,",
    heading2: "pas seulement des projets livrés",
  },
  experience: {
    label: "Expérience",
    heading1: "Où j'ai construit,",
    heading2: "ce que j'utilise",
    technicalSkills: "Compétences Techniques",
  },
  approach: {
    label: "Ma Philosophie",
    heading1: "Philosophie d'ingénierie,",
    heading2: "pas de mots à la mode",
  },
  contact: {
    label: "Parlons",
    heading: "Intéressé par une collaboration ?",
    body: "Je suis ouvert aux opportunités de ML engineering senior, leadership IA et consulting où je peux avoir un impact mesurable.",
    linkedin: "LinkedIn",
    github: "GitHub",
    availability: "Ouvert aux opportunités",
  },
  notFound: {
    code: "404",
    heading: "Page introuvable",
    body: "La page que vous recherchez n'existe pas.",
    goHome: "Retour à l'accueil",
  },
  meta: {
    titleSuffix: "Machine Learning Engineer",
    description:
      "Machine Learning Engineer et Head of AI spécialisé en IA Générative, LLMs et systèmes ML en production. Créer de l'IA qui génère des résultats mesurables.",
    ogDescription:
      "Machine Learning Engineer et Head of AI spécialisé en IA Générative, LLMs et systèmes ML en production.",
  },

  content: {
    headerTaglineOne: "Head of AI Development",
    headerTaglineTwo: "Machine Learning Engineer",
    headerTaglineThree: "Spécialisé en IA Générative et Solutions LLM",
    headerTaglineFour:
      "Traduire les besoins métier en solutions techniques",
    aboutpara:
      "Je suis Machine Learning Engineer et Head of AI orienté produit avec une expertise en IA, cloud computing et analytique avancée. Capacité à traduire les besoins métier en solutions techniques. Je dirige avec succès des équipes pour livrer des solutions d'IA générative dans divers secteurs. Spécialisé en Python, IA Générative, LLM et plateformes cloud AWS/GCP, transformant des cas d'usage en résultats produits mesurables.",
    services: [
      {
        id: "1",
        title: "Solutions d'IA Générative",
        description:
          "Création de chatbots LLM et assistants IA pour divers secteurs. Conception d'architectures RAG fine-tunées via consulting et design produit.",
      },
      {
        id: "2",
        title: "Machine Learning Engineering",
        description:
          "Développement de modèles prédictifs IA et mise en œuvre de techniques NLP avancées. Création de plateformes SaaS pour l'analyse de tendances, visualisation de données et applications IA.",
      },
      {
        id: "3",
        title: "Cloud et MLOps",
        description:
          "Expertise sur les plateformes cloud AWS, GCP, Azure et IBM. Implémentation de pipelines MLOps, déploiement de modèles et infrastructure IA évolutive.",
      },
      {
        id: "4",
        title: "Consulting en IA",
        description:
          "Traduire les besoins métier en solutions techniques. Gestion des parties prenantes et livraison de résultats produits mesurables via l'implémentation d'IA.",
      },
    ],
    resumeTagline: "Head of AI Development | Machine Learning Engineer",
    resumeDescription:
      "Machine Learning Engineer et Head of AI orienté produit avec une expertise en IA, cloud computing et analytique avancée. Je dirige avec succès des équipes pour livrer des solutions d'IA générative dans divers secteurs.",
    experiencePositions: {
      "1":
        "Head of AI Development chez Key Prediction",
      "2":
        "Machine Learning Engineer chez NDS Cognitive Labs",
      "3":
        "Fullstack Developer chez NDS Cognitive Labs",
      "4":
        "Business Analyst chez Linamar Corporation",
    },
    experienceBullets: {
      "1":
        "Création de chatbots LLM pour divers secteurs, direction d'une équipe pluridisciplinaire de 10 personnes. Développement d'un assistant IA pour un grand retailer automatisant l'analyse des coûts, réduisant le temps de décision de 2+ jours à moins d'une minute. Conception d'un modèle prédictif IA pour une entreprise pharmaceutique devant générer 20M USD par an. Partenariat avec l'Ambassade des États-Unis au Mexique pour développer un avatar numérique avec support LLM pour les demandes de visa",
      "2":
        "Organisation d'une équipe de 6 personnes pour créer des plateformes SaaS d'analyse de tendances et d'applications d'IA Générative. Introduction d'un assistant virtuel de vente utilisant la technologie RAG augmentant les taux de conversion de 5%. Direction d'une équipe de 4 personnes pour entraîner un chatbot IA générative automatisant 30% des tâches des développeurs. Application de techniques NLP avancées améliorant la précision du chatbot de 15%",
      "3":
        "Création d'une application web responsive avec FastAPI et React pour l'édition des réponses du chatbot. Création d'un module super admin pour 10 entreprises réduisant le temps de gestion et améliorant la scalabilité",
      "4":
        "Lancement d'un tableau de bord temps réel Power BI pour le conseil d'administration. Intégration des métriques clés de production réduisant les réunions de prise de décision de 30 minutes par jour",
    },
    educationPara:
      "Licence en Ingénierie en Science des Données et Mathématiques. 2ème place au Concours Régional de Programmation (C++) à l'Institut Technologique National du Mexique.",
    projectTitles: {
      "1": "Catégorisation de Curriculums Vitae",
      "2": "Assistant de Trading Algorithmique",
      "3": "Optimisation du Transport Logistique",
      "4": "Assistant IA pour l'Analyse des Coûts Retail",
    },
    projectDescriptions: {
      "1":
        "Mise en place d'un scanner OCR et d'un LLM personnalisé pour automatiser la classification des candidats pour Grupo PiSA. Intégration de l'extraction de caractéristiques NER et de la lemmatisation avec NLTK et SpaCy. Réduction de 50% du temps de traitement par rapport à la classification manuelle.",
      "2":
        "Conception d'algorithmes ML pour analyser les données historiques du marché et identifier les patterns de trading pour ByteBoost. Développement d'une plateforme SaaS permettant aux clients de visualiser toutes leurs opérations. Augmentation de 20% de la croissance mensuelle du portefeuille grâce à des points d'entrée et de sortie optimaux.",
      "3":
        "Application de la métaheuristique Guided Local Search (GLS) pour résoudre le problème CVRP des livraisons e-commerce de Coppel. Mise en place d'une approche métaheuristique robuste améliorant la planification des tournées en fonction du trafic. Optimisation des itinéraires de livraison aboutissant à une réduction de 41% de la distance totale parcourue quotidiennement.",
      "4":
        "Développement et déploiement d'un assistant IA pour un grand retailer automatisant toute l'analyse des coûts pour les dirigeants. Réduction du temps de décision de 2+ jours à moins d'une minute, fournissant des informations instantanées sur les indicateurs clés du business avec des données en direct.",
    },
  },

  caseStudies: {
    "1": {
      title: "Catégorisation de Curriculums Vitae",
      problem:
        "Les équipes RH classaient manuellement des milliers de CV, créant un processus lent, incohérent et sujet aux erreurs qui retardait les décisions d'embauche de plusieurs semaines.",
      solution:
        "Création d'un pipeline OCR avec un LLM personnalisé pour la classification automatisée des candidats, intégrant l'extraction de caractéristiques NER et la lemmatisation avec NLTK et SpaCy pour l'analyse structurée des CV.",
      impactLabel: "réduction du temps de traitement",
    },
    "2": {
      title: "Assistant de Trading Algorithmique",
      problem:
        "Les traders manquaient de signaux basés sur les données pour les points d'entrée et de sortie optimaux du marché, s'appuyant sur l'intuition plutôt que sur l'analyse quantitative pour prendre des décisions à haut risque.",
      solution:
        "Conception d'algorithmes ML analysant les données historiques du marché pour identifier les patterns de trading, déployés en plateforme SaaS pour la visualisation des opérations et le suivi des transactions.",
      impactLabel: "croissance mensuelle du portefeuille",
    },
    "3": {
      title: "Optimisation du Transport Logistique",
      problem:
        "Les itinéraires de livraison e-commerce étaient inefficaces, augmentant les coûts de carburant, les délais de livraison et l'empreinte carbone sur un réseau logistique national.",
      solution:
        "Application de la métaheuristique Guided Local Search (GLS) pour résoudre le Problème de Tournées de Véhicules avec Capacité, intégrant des données de trafic en temps réel pour une planification dynamique des itinéraires.",
      impactLabel: "réduction de la distance quotidienne parcourue",
    },
    "4": {
      title: "Assistant IA pour l'Analyse des Coûts Retail",
      problem:
        "Les dirigeants attendaient 2+ jours pour les rapports d'analyse des coûts, bloquant les décisions stratégiques rapides dans un marché retail compétitif à faibles marges.",
      solution:
        "Déploiement d'un assistant IA propulsé par des LLMs avec architecture RAG, connecté aux sources de données en direct pour fournir des analyses de coûts instantanées et des indicateurs de performance business.",
      impactLabel: "temps de décision (de 2+ jours à <1 min)",
    },
  },

  proofMetricLabels: {
    0: "réduction du temps de traitement des CV",
    1: "réduction de la distance de livraison",
    2: "croissance mensuelle du portefeuille",
    3: "temps de décision (de 2+ jours à <1 min)",
  },

  skillGroups: {
    mlAi: "ML et IA",
    dataEngineering: "Ingénierie des Données",
    backendSystems: "Backend et Systèmes",
  },

  philosophies: [
    {
      title: "Résultats avant outputs",
      body: "Je mesure le succès par l'impact business, pas par la précision du modèle. Un modèle précis à 95% que personne n'utilise vaut moins qu'un modèle à 80% qui fait gagner 30 minutes par jour. Chaque projet commence par la question : quelle décision cela permet-il ?",
    },
    {
      title: "Traduire, puis construire",
      body: "Le plus difficile dans l'IA n'est pas le modèle — c'est comprendre suffisamment le problème métier pour le formuler correctement. Je passe autant de temps avec les parties prenantes qu'avec le code. La maîtrise technique ne signifie rien sans contexte.",
    },
    {
      title: "Simple d'abord, complexe si nécessaire",
      body: "Je commence par une heuristique, puis un modèle linéaire, puis un transformer. Chaque couche de complexité doit mériter sa place par une amélioration mesurable. Le meilleur système ML est le plus simple qui répond au besoin métier.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export const translations: Record<Language, Translations> = { en, es, fr };
