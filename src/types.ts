export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'React' | 'Full-Stack' | 'Educational' | 'E-Commerce' | 'Legal Tech';
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
  metrics?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  duration: string;
  credentialUrl?: string;
  description: string;
  skillsAcquired: string[];
  imagePlaceholderColor: string;
  signatureBy?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience?: string;
    badge?: string;
  }[];
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone1: string;
  phone2?: string;
  address: string;
  linkedIn: string;
  gitHub: string;
  university: string;
  degree: string;
  graduationYear: string;
  profileImage?: string;
}

export interface ResumeData {
  personalInfo: ContactInfo;
  objective: string;
  summary: string;
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    design: string[];
    versionControl: string[];
    apis: string[];
  };
  certifications: Certification[];
  projects: Project[];
  spokenLanguages: { language: string; proficiency: string }[];
}
