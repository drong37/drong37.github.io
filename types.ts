export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  pdfLink?: string;
  codeLink?: string;
  abstract?: string;
  bibtex?: string;
  category?: 'Conference' | 'Journal' | 'Preprint' | 'Workshop';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  thesis?: string;
}