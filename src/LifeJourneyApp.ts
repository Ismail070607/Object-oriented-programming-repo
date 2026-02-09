import { LifeEvent, LifeJourney, LifeStats, YearSummary, EventCategory } from './lifeJourney.interface';

/**
 * LifeJourneyApp Class
 * Manages and analyzes life events using Object-Oriented Programming principles
 */
export class LifeJourneyApp {
  private journey: LifeJourney;

  constructor(
    name: string,
    birthYear: number,
    summary: string = ''
  ) {
    this.journey = {
      name,
      birthYear,
      currentAge: new Date().getFullYear() - birthYear,
      events: [],
      summary,
    };
  }

  /**
   * Add a new life event
   */
  addEvent(event: LifeEvent): void {
    this.journey.events.push(event);
    // Sort events by date
    this.journey.events.sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  /**
   * Get all events
   */
  getEvents(): LifeEvent[] {
    return this.journey.events;
  }

  /**
   * Filter events by sentiment
   */
  getEventsBySentiment(sentiment: 'positive' | 'negative' | 'mixed'): LifeEvent[] {
    return this.journey.events.filter(event => event.sentiment === sentiment);
  }

  /**
   * Filter events by category
   */
  getEventsByCategory(category: EventCategory): LifeEvent[] {
    return this.journey.events.filter(event => event.category === category);
  }

  /**
   * Filter events by year
   */
  getEventsByYear(year: number): LifeEvent[] {
    return this.journey.events.filter(event => event.year === year);
  }

  /**
   * Filter events by impact level
   */
  getEventsByImpact(impact: 'low' | 'medium' | 'high'): LifeEvent[] {
    return this.journey.events.filter(event => event.impact === impact);
  }

  /**
   * Get statistics about life events
   */
  getStatistics(): LifeStats {
    const totalEvents = this.journey.events.length;
    const positiveEvents = this.getEventsBySentiment('positive').length;
    const negativeEvents = this.getEventsBySentiment('negative').length;
    const mixedEvents = this.getEventsBySentiment('mixed').length;

    // Calculate most common category
    const categoryCount: { [key in EventCategory]?: number } = {};
    this.journey.events.forEach(event => {
      categoryCount[event.category] = (categoryCount[event.category] || 0) + 1;
    });
    const mostCommonCategory = (
      Object.entries(categoryCount).sort(([, a], [, b]) => b - a)[0]?.[0] || 'other'
    ) as EventCategory;

    // Get high impact events
    const highImpactEvents = this.getEventsByImpact('high');

    return {
      totalEvents,
      positiveEvents,
      negativeEvents,
      mixedEvents,
      positivePercentage: totalEvents > 0 ? (positiveEvents / totalEvents) * 100 : 0,
      negativePercentage: totalEvents > 0 ? (negativeEvents / totalEvents) * 100 : 0,
      mostCommonCategory,
      highImpactEvents,
    };
  }

  /**
   * Get summary for a specific year
   */
  getYearSummary(year: number): YearSummary {
    const eventsInYear = this.getEventsByYear(year);
    const positiveCount = eventsInYear.filter(e => e.sentiment === 'positive').length;
    const negativeCount = eventsInYear.filter(e => e.sentiment === 'negative').length;

    let sentiment: 'positive' | 'negative' | 'mixed' = 'mixed';
    if (positiveCount > negativeCount) {
      sentiment = 'positive';
    } else if (negativeCount > positiveCount) {
      sentiment = 'negative';
    }

    return {
      year,
      events: eventsInYear,
      positiveCount,
      negativeCount,
      sentiment,
    };
  }

  /**
   * Get all unique years with events
   */
  getYearsWithEvents(): number[] {
    const years = new Set(this.journey.events.map(event => event.year));
    return Array.from(years).sort();
  }

  /**
   * Update journey summary
   */
  setSummary(summary: string): void {
    this.journey.summary = summary;
  }

  /**
   * Set life philosophy or goals
   */
  setGoals(goals: string[]): void {
    this.journey.goals = goals;
  }

  /**
   * Set life philosophy
   */
  setPhilosophy(philosophy: string): void {
    this.journey.philosophy = philosophy;
  }

  /**
   * Get the full journey
   */
  getJourney(): LifeJourney {
    return this.journey;
  }

  /**
   * Get all lessons learned from life events
   */
  getAllLessons(): string[] {
    const lessons: string[] = [];
    this.journey.events.forEach(event => {
      if (event.lessons) {
        lessons.push(...event.lessons);
      }
    });
    return lessons;
  }

  /**
   * Get all positives from all events
   */
  getAllPositives(): string[] {
    const positives: string[] = [];
    this.journey.events.forEach(event => {
      positives.push(...event.positives);
    });
    return positives;
  }

  /**
   * Get all negatives from all events
   */
  getAllNegatives(): string[] {
    const negatives: string[] = [];
    this.journey.events.forEach(event => {
      negatives.push(...event.negatives);
    });
    return negatives;
  }

  /**
   * Find event by ID
   */
  getEventById(id: string): LifeEvent | undefined {
    return this.journey.events.find(event => event.id === id);
  }

  /**
   * Update an event
   */
  updateEvent(id: string, updates: Partial<LifeEvent>): void {
    const event = this.getEventById(id);
    if (event) {
      Object.assign(event, updates);
    }
  }

  /**
   * Delete an event
   */
  deleteEvent(id: string): void {
    this.journey.events = this.journey.events.filter(event => event.id !== id);
  }
}
