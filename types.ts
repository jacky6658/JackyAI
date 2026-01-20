
export interface Metric {
  label: string;
  value: string;
}

export interface WorkShowcase {
  title: string;
  description?: string;
  images: string[];
}

export interface ExplorationFeature {
  title: string;
  description: string;
  icon: 'BarChart3' | 'SearchCode' | 'Users' | 'Brain' | 'MessageSquareText' | 'Target';
}

export interface Work {
  slug: string;
  title: string;
  shortName?: string; // 用於按鈕顯示，例如 "RecruitAI"
  summary: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  year: string;
  industry: string;
  tags: string[];
  metrics: Metric[];
  coverImage: string;
  galleryImages: string[];
  showcase?: WorkShowcase[];
  highlights: string[];
  results: string[];
  links: {
    website?: string;
    github?: string;
    video?: string;
  };
  exploration?: {
    title: string;
    description: string;
    features: ExplorationFeature[];
  };
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  studentCount: string;
  duration: string;
  price: string;
  link: string;
  coverImage: string;
  curriculum: { title: string; items: string[] }[];
  outcomes: string[];
  targetAudience: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  priceFrom: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}
