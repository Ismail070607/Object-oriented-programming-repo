/**
 * CV Interface Definitions
 * Defines the structure for resume/CV data using TypeScript interfaces
 */

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface CV {
  contactInfo: ContactInfo;
  professionalSummary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications?: string[];
  languages?: string[];
}
