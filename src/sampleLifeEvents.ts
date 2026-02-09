import { LifeEvent } from './lifeJourney.interface';

/**
 * Sample Life Events
 * Examples of life events with positives and negatives
 */
export const sampleLifeEvents: LifeEvent[] = [
  {
    id: '1',
    title: 'Started University',
    description: 'Began my journey at State University studying Computer Science',
    date: '2015-09-01',
    year: 2015,
    category: 'education',
    sentiment: 'positive',
    positives: [
      'Gained valuable knowledge in computer science',
      'Made lifelong friendships',
      'Developed critical thinking skills',
      'Expanded my horizons'
    ],
    negatives: [
      'High stress and pressure',
      'Financial burden with tuition',
      'Less free time for personal activities'
    ],
    impact: 'high',
    lessons: [
      'Education is an investment in yourself',
      'Connections matter as much as knowledge',
      'Balance is key to success'
    ],
    tags: ['education', 'milestone', 'growth']
  },
  {
    id: '2',
    title: 'First Major Failure',
    description: 'Failed a critical engineering exam in my second year',
    date: '2016-05-15',
    year: 2016,
    category: 'challenge',
    sentiment: 'negative',
    positives: [
      'Learned the importance of dedication',
      'Developed resilience',
      'Sought help and support',
      'Improved study habits'
    ],
    negatives: [
      'Loss of confidence',
      'Disappointment and stress',
      'Risk of falling behind academically',
      'Emotional burden'
    ],
    impact: 'high',
    lessons: [
      'Failure is not the end - it\'s a stepping stone',
      'Asking for help is a sign of strength',
      'Persistence pays off',
      'Self-doubt is temporary'
    ],
    tags: ['challenge', 'learning', 'growth']
  },
  {
    id: '3',
    title: 'First Tech Job',
    description: 'Landed my first internship at a startup as a junior developer',
    date: '2017-06-01',
    year: 2017,
    category: 'career',
    sentiment: 'positive',
    positives: [
      'Practical experience in real-world projects',
      'Mentorship from experienced developers',
      'Built a professional network',
      'First paycheck as a developer',
      'Confidence boost'
    ],
    negatives: [
      'Imposter syndrome',
      'Long hours during crunch time',
      'Learning curve was steep'
    ],
    impact: 'high',
    lessons: [
      'Everyone starts somewhere',
      'Practical experience is invaluable',
      'Work-life balance is essential',
      'Continuous learning is necessary'
    ],
    tags: ['career', 'achievement', 'milestone']
  },
  {
    id: '4',
    title: 'Health Challenge',
    description: 'Struggled with anxiety and stress-related health issues',
    date: '2018-03-20',
    year: 2018,
    category: 'health',
    sentiment: 'negative',
    positives: [
      'Became aware of mental health importance',
      'Sought professional help',
      'Developed coping mechanisms',
      'Learned to prioritize wellbeing',
      'Discovered meditation and exercise benefits'
    ],
    negatives: [
      'Physical exhaustion',
      'Mental turmoil and anxiety',
      'Affected work performance',
      'Strained relationships'
    ],
    impact: 'high',
    lessons: [
      'Mental health is as important as physical health',
      'It\'s okay to not be okay',
      'Professional help is valuable',
      'Self-care is not selfish',
      'Life moves at different paces'
    ],
    tags: ['health', 'personal-growth', 'challenge']
  },
  {
    id: '5',
    title: 'Graduation Day',
    description: 'Successfully completed my Bachelor\'s degree',
    date: '2019-05-25',
    year: 2019,
    category: 'achievement',
    sentiment: 'positive',
    positives: [
      'Achieved a major life goal',
      'Felt immense pride and satisfaction',
      'Opened new career opportunities',
      'Celebrated with family and friends',
      'Proof of perseverance'
    ],
    negatives: [
      'Uncertainty about the future',
      'Post-graduation anxiety'
    ],
    impact: 'high',
    lessons: [
      'Hard work pays off',
      'Support system is crucial',
      'Endings are also beginnings',
      'Pride in accomplishment is earned'
    ],
    tags: ['achievement', 'milestone', 'education']
  },
  {
    id: '6',
    title: 'Career Transition',
    description: 'Moved to a senior role at a larger tech company',
    date: '2020-02-15',
    year: 2020,
    category: 'career',
    sentiment: 'mixed',
    positives: [
      'Significant salary increase',
      'Expanded responsibilities',
      'Worked with cutting-edge technologies',
      'Mentored junior developers',
      'Stronger professional reputation'
    ],
    negatives: [
      'Higher expectations and pressure',
      'Imposter syndrome returned',
      'Had to prove myself again',
      'More meetings and less coding'
    ],
    impact: 'high',
    lessons: [
      'Growth comes with discomfort',
      'Imposter syndrome diminishes with time',
      'Success requires adaptability',
      'Helping others is fulfilling'
    ],
    tags: ['career', 'growth', 'achievement']
  },
  {
    id: '7',
    title: 'Pandemic Lockdown',
    description: 'Global pandemic required everyone to work from home',
    date: '2020-03-20',
    year: 2020,
    category: 'challenge',
    sentiment: 'mixed',
    positives: [
      'More time with family',
      'Improved work-life balance',
      'Discovered new hobbies',
      'Closer relationships with loved ones',
      'Time for personal projects'
    ],
    negatives: [
      'Social isolation',
      'Mental health challenges',
      'Blurred work-home boundaries',
      'Economic uncertainty',
      'Loss of normalcy'
    ],
    impact: 'high',
    lessons: [
      'Adaptability is a survival skill',
      'Human connection is essential',
      'Finding silver linings in dark times',
      'Gratitude for simple things matters'
    ],
    tags: ['challenge', 'personal-growth', 'health']
  },
  {
    id: '8',
    title: 'International Travel',
    description: 'Solo traveled to Southeast Asia for a month',
    date: '2022-06-01',
    year: 2022,
    category: 'travel',
    sentiment: 'positive',
    positives: [
      'Discovered different cultures',
      'Built confidence in independence',
      'Created unforgettable memories',
      'Expanded perspective on life',
      'Personal growth through new experiences'
    ],
    negatives: [
      'Travel fatigue',
      'Loneliness at times',
      'Unexpected expenses',
      'Health issues abroad'
    ],
    impact: 'high',
    lessons: [
      'The world is much bigger than my bubble',
      'Humans are kind across all cultures',
      'Independence is empowering',
      'Experiences matter more than possessions'
    ],
    tags: ['travel', 'personal-growth', 'achievement']
  },
  {
    id: '9',
    title: 'Started Side Project',
    description: 'Created an open-source project that gained attention',
    date: '2023-01-15',
    year: 2023,
    category: 'personal-growth',
    sentiment: 'positive',
    positives: [
      'Built something meaningful',
      'Contributed to the dev community',
      'Gained recognition',
      'Developed leadership skills',
      'Found passion in giving back'
    ],
    negatives: [
      'Time-consuming commitment',
      'Pressure to maintain quality',
      'Balancing with day job'
    ],
    impact: 'medium',
    lessons: [
      'Passion projects fuel creativity',
      'Giving back is rewarding',
      'Community support is powerful',
      'Balance between perfection and progress'
    ],
    tags: ['personal-growth', 'achievement', 'career']
  },
  {
    id: '10',
    title: 'Relationship Milestone',
    description: 'Met someone special and started a meaningful relationship',
    date: '2023-09-10',
    year: 2023,
    category: 'relationship',
    sentiment: 'positive',
    positives: [
      'Discovered the joy of partnership',
      'Emotional support and growth',
      'Shared experiences and memories',
      'Deep connection with another person',
      'New perspective on life together'
    ],
    negatives: [
      'Learning to compromise',
      'Vulnerability and risk',
      'Previous relationship endings'
    ],
    impact: 'high',
    lessons: [
      'Vulnerability leads to connection',
      'Compromise is not weakness',
      'Communication is key to relationships',
      'Love makes life richer'
    ],
    tags: ['relationship', 'personal-growth', 'achievement']
  },
];

/**
 * Create a sample life event with custom data
 */
export const createLifeEvent = (
  title: string,
  description: string,
  date: string,
  category: any,
  sentiment: 'positive' | 'negative' | 'mixed'
): LifeEvent => ({
  id: Date.now().toString(),
  title,
  description,
  date,
  year: new Date(date).getFullYear(),
  category,
  sentiment,
  positives: [],
  negatives: [],
  impact: 'medium',
});
