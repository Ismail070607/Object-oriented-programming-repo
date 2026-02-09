# Professional CV with TypeScript Interfaces

A modern, responsive curriculum vitae (CV) featuring a clean two-column layout with TypeScript interfaces for structured, type-safe CV data management.

## 📁 Files Included

### 1. **cv.html** - Interactive CV Display
A professional, responsive HTML/CSS CV with a two-column layout:
- **Left Column**: Professional summary, work experience, and featured projects
- **Right Column**: Technical skills, education, certifications, and languages

**Features:**
- Modern gradient header design
- Two-column responsive grid layout
- Mobile-friendly responsive design
- Print-ready styling
- Color-coded sections with skill tags
- Easy to customize with your own information

**To view:** Simply open `cv.html` in your web browser.

### 2. **src/cv.interface.ts** - TypeScript Interfaces
Defines the complete CV structure using TypeScript interfaces following Object-Oriented Programming principles:

```typescript
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
```

**Included Interfaces:**
- `ContactInfo` - Name, email, phone, location, websites
- `Experience` - Job title, company, dates, description
- `Education` - Degree, institution, graduation year, GPA, achievements
- `Skill` - Skill categories with grouped skills
- `Project` - Project details with technologies and links
- `CV` - Main CV interface combining all sections

### 3. **src/sampleCV.ts** - Sample Data Implementation
Demonstrates how to use the CV interface with sample data and includes:
- Complete CV data example (`sampleCV: CV`)
- Helper function `createCustomCV()` for quick CV creation

## 🚀 Usage

### Option 1: View in Browser
Simply open `cv.html` in any modern web browser. The CV is fully functional and styled.

### Option 2: Use TypeScript Interface in Your Project
```typescript
import { CV } from './src/cv.interface';
import { sampleCV } from './src/sampleCV';

// Use the sample CV
console.log(sampleCV.contactInfo.name);

// Create your own CV with type safety
const myCv: CV = {
  contactInfo: {
    name: 'Your Name',
    email: 'your.email@example.com',
    phone: '+1 (555) 000-0000',
    location: 'Your City, State',
  },
  professionalSummary: 'Your professional summary here...',
  experience: [
    {
      jobTitle: 'Developer',
      company: 'Company Name',
      startDate: '2020',
      endDate: 'Present',
      description: ['Achievement 1', 'Achievement 2'],
    },
  ],
  education: [],
  skills: [],
  projects: [],
};
```

## 🎨 Customization

### Updating CV Information
Edit the `src/sampleCV.ts` file to update your information, or modify the HTML directly in `cv.html` for quick changes.

### Color Scheme
Default colors are:
- Primary: `#667eea` (Purple-Blue)
- Accent: `#764ba2` (Dark Purple)
- Background: `#f9f9f9` (Light Gray)

To change colors, update the CSS variables in `cv.html`:
```css
--primary-color: #667eea;
--accent-color: #764ba2;
```

### Adding/Removing Sections
The TypeScript interface is flexible. Add optional sections or create new interfaces for additional CV sections.

## 📱 Responsive Design

The CV is fully responsive:
- **Desktop (1200px+)**: Two-column layout
- **Tablet (768px-1199px)**: Two-column layout with adjusted spacing
- **Mobile (<768px)**: Single-column stacked layout

## 🖨️ Print to PDF
1. Open `cv.html` in your browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF" and customize settings
4. Download your CV as a professional PDF

## 📚 Object-Oriented Principles

This CV solution demonstrates several OOP principles:
- **Interfaces**: Strong typing with TypeScript interfaces
- **Encapsulation**: Complete CV data structure
- **Reusability**: Easy to create multiple CV instances
- **Maintainability**: Clear separation of concerns
- **Extensibility**: Simple to add new sections or properties

## 📝 License

Feel free to use and modify for your own purposes.
