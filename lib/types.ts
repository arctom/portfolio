export interface PortfolioData {
  name: string;
  headerTaglineOne: string;
  headerTaglineTwo: string;
  headerTaglineThree: string;
  headerTaglineFour: string;
  showCursor: boolean;
  showBlog: boolean;
  darkMode: boolean;
  showResume: boolean;
  socials: Social[];
  projects: Project[];
  services: Service[];
  aboutpara: string;
  resume: Resume;
}

export interface Social {
  id: string;
  title: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  url: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Resume {
  tagline: string;
  description: string;
  experiences: Experience[];
  education: Education;
  languages: string[];
  frameworks: string[];
  others: string[];
}

export interface Experience {
  id: string;
  dates: string;
  type: string;
  position: string;
  bullets: string;
}

export interface Education {
  universityName: string;
  universityDate: string;
  universityPara: string;
}

export interface CaseStudyProject {
  id: string;
  title: string;
  client: string;
  category: string;
  problem: string;
  solution: string;
  impact: {
    value: string;
    label: string;
  };
  technologies: string[];
  url?: string;
}

export interface Metric {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}
