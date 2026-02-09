import { CV } from './cv.interface';

/**
 * Sample CV data implementing the CV interface
 * This demonstrates the structure for creating a complete CV with all sections
 */

export const sampleCV: CV = {
  contactInfo: {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    website: 'johndoe.dev',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
  },

  professionalSummary: 
    'Innovative and detail-oriented Full Stack Developer with 5+ years of experience designing and implementing robust software solutions. Proven expertise in TypeScript, React, and Node.js with a strong track record of delivering scalable, high-performance applications. Passionate about clean code, object-oriented programming principles, and mentoring junior developers.',

  experience: [
    {
      jobTitle: 'Senior Full Stack Developer',
      company: 'Tech Innovation Corp',
      startDate: '2022',
      endDate: 'Present',
      description: [
        'Led development of microservices architecture serving 100K+ daily users',
        'Implemented TypeScript interfaces and design patterns for improved code maintainability',
        'Mentored 3 junior developers, improving team code quality by 30%',
      ],
    },
    {
      jobTitle: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      startDate: '2020',
      endDate: '2022',
      description: [
        'Developed responsive web applications using React and Node.js',
        'Designed and implemented REST APIs with proper object-oriented architecture',
        'Improved application performance by 40% through code optimization',
      ],
    },
    {
      jobTitle: 'Junior Developer',
      company: 'StartUp Labs',
      startDate: '2019',
      endDate: '2020',
      description: [
        'Built full-stack features using HTML, CSS, JavaScript, and Python',
        'Collaborated with UX team to implement pixel-perfect designs',
        'Participated in code reviews and learned best practices',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      graduationYear: '2019',
      gpa: '3.8',
      achievements: [
        'Dean\'s List (4 semesters)',
        'Computer Science Award 2019',
      ],
    },
    {
      degree: 'Full Stack Development Bootcamp',
      institution: 'Bootcamp Academy',
      graduationYear: '2019',
      achievements: [
        'Top 10% of cohort',
        'Capstone Project: E-commerce Platform',
      ],
    },
  ],

  skills: [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Vue.js', 'Redux', 'Tailwind CSS', 'Material UI'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'Microservices'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'CI/CD Pipelines'],
    },
    {
      category: 'Methodologies',
      skills: ['Agile', 'Scrum', 'SOLID Principles', 'Design Patterns', 'TDD', 'OOP'],
    },
  ],

  projects: [
    {
      name: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with payment integration and real-time inventory management. Built using SOLID principles and design patterns.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Stripe API'],
      link: 'github.com/johndoe/ecommerce-platform',
    },
    {
      name: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard processing 50M+ data points daily. Built with scalable architecture and comprehensive TypeScript interfaces.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'D3.js', 'Docker'],
      link: 'github.com/johndoe/analytics-dashboard',
    },
    {
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates using WebSockets. Demonstrates advanced React patterns and state management.',
      technologies: ['React', 'Firebase', 'TypeScript', 'WebSockets', 'PWA'],
      link: 'github.com/johndoe/task-manager',
    },
  ],

  certifications: [
    'AWS Certified Cloud Practitioner',
    'TypeScript Advanced Patterns',
    'SOLID Principles in Object-Oriented Programming',
    'React Performance Optimization',
    'GraphQL Fundamentals',
  ],

  languages: [
    'English - Native',
    'Spanish - Fluent',
    'French - Intermediate',
  ],
};

// Example of creating a custom CV Object using the interface
export const createCustomCV = (
  name: string,
  email: string,
  phone: string,
  location: string
): CV => ({
  contactInfo: {
    name,
    email,
    phone,
    location,
  },
  professionalSummary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
});
