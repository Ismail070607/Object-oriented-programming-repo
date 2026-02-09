# 📖 My Life Journey App

An interactive web application to document and reflect on your life events with their positives and negatives. Built with TypeScript interfaces for robust, type-safe data management following Object-Oriented Programming principles.

## 🎯 Features

### Visual Timeline
- **Interactive Timeline**: Beautiful alternating left-right timeline visualization
- **Year Markers**: Each event is clearly marked with its year
- **Color-Coded Sentiments**: 
  - ✨ Green for positive events
  - ⚠️ Orange for negative events
  - 🔀 Yellow for mixed events

### Event Details
Each event displays:
- **Title & Description**: What happened
- **Date & Year**: When it occurred
- **Category**: Career, Education, Health, Travel, etc.
- **Sentiment**: Positive, Negative, or Mixed
- **Impact Level**: Low, Medium, or High impact on your life
- **Positives**: What went well
- **Negatives**: Challenges faced
- **Lessons Learned**: Key takeaways and wisdom gained

### Statistics Dashboard
- **Total Events Count**: How many life events you've documented
- **Sentiment Distribution**: Visual chart showing positive/negative/mixed ratio
- **Most Common Category**: What areas of life you focus on most
- **High Impact Events**: Major turning points in your life
- **Overall Life Sentiment**: Quick assessment of your life journey

### Interactive Controls
- **Filter by Sentiment**: View all, only positive, only negative, or mixed events
- **Add New Events**: Easily add your own life events with a form
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 📁 Project Files

### 1. **life-journey.html** - Main Interactive Application
The complete, self-contained interactive app you can open in any browser.

**Features:**
- No dependencies needed - pure HTML/CSS/JavaScript
- Interactive timeline with filtering
- Live statistics and insights
- Form to add new life events
- Responsive design

**To Run:**
Simply open in your browser: `open life-journey.html` or double-click the file

### 2. **src/lifeJourney.interface.ts** - TypeScript Interfaces

Defines the complete data structure using OOP principles:

```typescript
export interface LifeEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  year: number;
  category: EventCategory;
  sentiment: 'positive' | 'negative' | 'mixed';
  positives: string[];
  negatives: string[];
  impact: 'low' | 'medium' | 'high';
  lessons?: string[];
  tags?: string[];
}

export interface LifeJourney {
  name: string;
  birthYear: number;
  currentAge: number;
  events: LifeEvent[];
  summary: string;
  goals?: string[];
  philosophy?: string;
}
```

**Supported Event Categories:**
- career
- education
- relationship
- health
- personal-growth
- family
- travel
- achievement
- challenge
- other

### 3. **src/LifeJourneyApp.ts** - Life Journey Manager Class

A comprehensive TypeScript class that manages your life journey data:

```typescript
export class LifeJourneyApp {
  addEvent(event: LifeEvent): void
  getEvents(): LifeEvent[]
  getEventsBySentiment(sentiment: string): LifeEvent[]
  getEventsByCategory(category: string): LifeEvent[]
  getEventsByYear(year: number): LifeEvent[]
  getStatistics(): LifeStats
  getYearSummary(year: number): YearSummary
  getAllLessons(): string[]
  getAllPositives(): string[]
  getAllNegatives(): string[]
}
```

**Key Methods:**
- `addEvent()`: Add a new life event
- `getEventsBySentiment()`: Filter by positive/negative/mixed
- `getEventsByCategory()`: Filter by life category
- `getStatistics()`: Get comprehensive life stats
- `getAllLessons()`: Collect all wisdom gained

### 4. **src/sampleLifeEvents.ts** - Sample Data

Pre-loaded sample life events showcasing:
- Different categories (career, education, health, travel, relationships)
- Various sentiments (positive, negative, mixed)
- Real-world examples of life challenges and triumphs
- Detailed positives, negatives, and lessons for each event

## 🚀 Usage

### Option 1: View in Browser (Easiest)
```bash
# Simply open the HTML file
open life-journey.html
```

### Option 2: Use with TypeScript
```typescript
import { LifeJourneyApp } from './src/LifeJourneyApp';
import { LifeEvent } from './src/lifeJourney.interface';

const journey = new LifeJourneyApp('Your Name', 1995, 'My life journey');

// Add an event
const event: LifeEvent = {
  id: '1',
  title: 'Got my first job',
  description: 'Started working as a developer',
  date: '2020-01-15',
  year: 2020,
  category: 'career',
  sentiment: 'positive',
  positives: ['New skills', 'Financial independence'],
  negatives: ['Long hours', 'Stress'],
  impact: 'high',
  lessons: ['Hard work pays off']
};

journey.addEvent(event);

// Get statistics
const stats = journey.getStatistics();
console.log(`I've had ${stats.positiveEvents} positive events out of ${stats.totalEvents}`);

// Get events by category
const careerEvents = journey.getEventsByCategory('career');

// Get all lessons learned
const lessons = journey.getAllLessons();
```

### Option 3: Add Your Own Events
1. Open `life-journey.html` in your browser
2. Click "➕ Add Event" button
3. Fill in:
   - Event Title (required)
   - Date (required)
   - Category (required)
   - Sentiment (required)
   - Impact Level (required)
   - Description (required)
4. Click "Add Event"
5. Your event will appear on the timeline

## 📊 How It Works

### Data Flow
1. **Input**: Life events with sentiments, positives, negatives
2. **Processing**: LifeJourneyApp class analyzes and organizes events
3. **Statistics**: Calculates sentiment ratios, impact levels, categories
4. **Visualization**: Beautiful timeline displays all events with details
5. **Interaction**: Filter, add, and explore your life journey

### Timeline Visualization
- Events alternate left-right for visual balance
- Color-coded by sentiment (green/orange/yellow)
- Chronologically ordered from earliest to latest
- Each event shows full details and lessons learned

## 🎨 Customization

### Change Colors
Edit the CSS in `life-journey.html`:
```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --positive: #11998e;
    --negative: #ee0979;
}
```

### Add Custom Categories
Modify the `EventCategory` type in `lifeJourney.interface.ts`:
```typescript
export type EventCategory = 
  | 'career'
  | 'education'
  | 'your-custom-category'  // Add here
  | 'other';
```

### Extend Data Structure
Add more fields to `LifeEvent` interface:
```typescript
export interface LifeEvent {
  // ... existing fields
  rating?: number;  // Add new field
  feelings?: string[];
}
```

## 💡 Use Cases

### 1. **Self-Reflection**
Take time to document major life events and understand their impact on you.

### 2. **Gratitude Practice**
Review your positives and negatives to appreciate your growth journey.

### 3. **Pattern Recognition**
Identify patterns in your challenges and successes.

### 4. **Personal Growth**
Use lessons learned to inform future decisions.

### 5. **Life Planning**
Understand your trajectory to plan better for the future.

### 6. **Therapy & Counseling**
Share your journey with professionals to discuss patterns.

### 7. **Legacy**
Document your life story for future generations.

## 📚 Object-Oriented Programming Principles

This app demonstrates key OOP concepts:

### 1. **Encapsulation**
- `LifeJourneyApp` class encapsulates all life journey logic
- Private properties protected from external access
- Public methods provide controlled interface

### 2. **Type Safety**
- TypeScript interfaces ensure data consistency
- Prevents runtime errors with compile-time checking
- Clear contracts between components

### 3. **Abstraction**
- Complex logic hidden behind simple methods
- Users interact with high-level operations
- Implementation details hidden from view

### 4. **Reusability**
- Interfaces can be used across projects
- `LifeJourneyApp` can manage multiple journeys
- Components independent and modular

### 5. **Extensibility**
- Easy to add new event properties
- Can extend with new methods
- Design supports future enhancements

## 🎯 Sample Life Events Included

The app comes with 10 sample life events showcasing:

1. **Started University** (2015) - Education milestone
2. **First Major Failure** (2016) - Learning challenge
3. **First Tech Job** (2017) - Career breakthrough
4. **Health Challenge** (2018) - Personal difficulty
5. **Graduation Day** (2019) - Achievement celebration
6. **Career Transition** (2020) - Growth opportunity
7. **Pandemic Lockdown** (2020) - Global challenge
8. **International Travel** (2022) - Adventure and growth
9. **Started Open Source** (2023) - Community contribution
10. **Relationship Milestone** (2023) - Personal connection

Each event includes detailed positives, negatives, and lessons learned.

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend Logic**: TypeScript classes and interfaces
- **No Dependencies**: Works immediately in any browser
- **Responsive**: Mobile, tablet, and desktop friendly
- **Accessible**: Semantic HTML and clear structure

## 📝 License

Free to use and modify for personal and educational purposes.

## 🌟 Tips for Best Use

1. **Be Honest**: Include both positives and negatives
2. **Be Specific**: Detailed descriptions help with reflection
3. **Learn**: Always capture lessons from experiences
4. **Reflect**: Regularly review your journey
5. **Celebrate**: Acknowledge your positive events
6. **Grow**: Use challenges as growth opportunities
7. **Update**: Keep adding new events as they happen

---

**Remember**: Your life journey is unique and valuable. Every event, whether positive or negative, has shaped who you are today. This app helps you celebrate the journey while learning from each milestone along the way.

📖 Start documenting your story today! 🌟
