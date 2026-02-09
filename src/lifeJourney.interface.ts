/**
 * Life Journey Interfaces
 * Defines the structure for documenting life experiences with positive and negative aspects
 */

export interface LifeEvent {
  id: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD format
  year: number;
  category: EventCategory;
  sentiment: 'positive' | 'negative' | 'mixed';
  positives: string[];
  negatives: string[];
  impact: 'low' | 'medium' | 'high'; // How much this event impacted your life
  lessons?: string[];
  tags?: string[];
}

export type EventCategory =
  | 'career'
  | 'education'
  | 'relationship'
  | 'health'
  | 'personal-growth'
  | 'family'
  | 'travel'
  | 'achievement'
  | 'challenge'
  | 'other';

export interface LifeJourney {
  name: string;
  birthYear: number;
  currentAge: number;
  events: LifeEvent[];
  summary: string;
  goals?: string[];
  philosophy?: string;
}

export interface LifeStats {
  totalEvents: number;
  positiveEvents: number;
  negativeEvents: number;
  mixedEvents: number;
  positivePercentage: number;
  negativePercentage: number;
  mostCommonCategory: EventCategory;
  highImpactEvents: LifeEvent[];
}

export interface YearSummary {
  year: number;
  events: LifeEvent[];
  positiveCount: number;
  negativeCount: number;
  sentiment: 'positive' | 'negative' | 'mixed';
}
