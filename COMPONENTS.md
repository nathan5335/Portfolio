# Components Documentation

Comprehensive guide for all portfolio components.

## Table of Contents
1. [Navbar](#navbar)
2. [Hero](#hero)
3. [About](#about)
4. [Skills](#skills)
5. [Projects](#projects)
6. [Education](#education)
7. [Contact](#contact)
8. [Footer](#footer)
9. [ParticleBackground](#particlebackground)

---

## Navbar

**File**: `src/components/Navbar.jsx`

### Purpose
Navigation bar with dark mode toggle, mobile menu, and smooth scrolling.

### Features
- Fixed navigation
- Mobile hamburger menu
- Dark/Light theme toggle
- Resume download button
- Smooth scroll to sections
- Active page detection

### Props
None - Uses context for theme functionality

### Customization

**Change navigation links**:
```jsx
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
```

**Update resume button**:
```jsx
onClick={() => {
  // Replace with your resume download logic
  window.open('/path-to-your-resume.pdf');
}}
```

---

## Hero

**File**: `src/components/Hero.jsx`

### Purpose
Eye-catching hero section with typing effect and animated background.

### Features
- Animated gradient background
- Typing effect for role carousel
- CTA buttons with smooth scroll
- Social media links
- Animated scroll indicator

### Customization

**Change typing roles**:
```jsx
const roles = [
  'Software Developer',
  'Web Developer',
  'Full Stack Aspirant',
  'Problem Solver',
];
```

**Update social links**:
```jsx
{
  icon: Github,
  label: 'GitHub',
  href: 'https://github.com/yourprofile',
  color: 'hover:text-gray-700',
}
```

**Adjust text content**:
```jsx
<h1>Your Name</h1>
<p>Your description here</p>
```

---

## About

**File**: `src/components/About.jsx`

### Purpose
Personal introduction and background section with scroll animations.

### Features
- Fade-in on scroll animation
- Personal info with styling
- Animated emphasis on key points
- Call-to-action button

### Customization

**Update about text**:
```jsx
<p>I'm a <span className="font-semibold">motivated developer</span>...</p>
```

**Replace profile image/illustration**:
The component uses a gradient placeholder. Replace with:
```jsx
<img src="/profile.jpg" alt="Gautham Vinod" className="w-full h-64 object-cover rounded-2xl" />
```

---

## Skills

**File**: `src/components/Skills.jsx`

### Purpose
Display skills with visual progress bars and category organization.

### Features
- Categorized skills
- Animated progress bars
- Staggered animations
- Responsive grid layout

### Data Structure

```jsx
{
  category: 'Programming Languages',
  skills: [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 75 },
  ]
}
```

### Customization

**Add new skill category**:
```jsx
{
  category: 'DevOps',
  skills: [
    { name: 'Docker', level: 70 },
    { name: 'Kubernetes', level: 60 },
  ]
}
```

**Update skill levels**:
```jsx
{ name: 'Python', level: 95 } // 0-100
```

---

## Projects

**File**: `src/components/Projects.jsx`

### Purpose
Display project portfolio with interactive cards and detailed modals.

### Features
- Interactive project cards
- Modal popup for details
- Technology tags
- Hover animations
- Feature lists

### Data Structure

```jsx
{
  id: 1,
  title: 'Project Name',
  shortDesc: 'Brief description',
  description: 'Detailed description',
  features: ['Feature 1', 'Feature 2'],
  tech: ['Tech1', 'Tech2'],
  color: 'from-blue-500 to-cyan-500',
  image: '🎯',
}
```

### Customization

**Add new project**:
```jsx
{
  id: 5,
  title: 'New Project',
  shortDesc: 'What it does',
  description: 'Full description...',
  features: ['Feature 1', 'Feature 2'],
  tech: ['Python', 'Django'],
  color: 'from-green-500 to-emerald-500',
  image: '🚀',
}
```

**Change emoji icons**:
```jsx
image: '🎯' // Any emoji
```

**Update colors**:
```jsx
color: 'from-blue-500 to-cyan-500' // Tailwind gradient classes
```

---

## Education

**File**: `src/components/Education.jsx`

### Purpose
Timeline view of educational background and achievements.

### Features
- Timeline layout
- Status badges (Pursuing/Completed)
- Achievement list
- Animated timeline dots
- Period display

### Data Structure

```jsx
{
  degree: 'Degree Name',
  institution: 'College Name',
  university: 'University Name',
  period: '2025 – 2027',
  status: 'pursuing', // 'pursuing' or 'completed'
  icon: GraduationCap,
}
```

### Customization

**Update education entries**:
```jsx
{
  degree: 'Bachelor of Engineering',
  institution: 'Tech College',
  university: 'State University',
  period: '2020 – 2024',
  status: 'completed',
  icon: BookOpen,
}
```

---

## Contact

**File**: `src/components/Contact.jsx`

### Purpose
Contact information display and email contact form.

### Features
- Contact form with validation
- Email/phone/location info
- Social media links
- Form status messages
- Real-time validation

### Features Included

1. **Form Validation**
   - Name required
   - Valid email format
   - Subject required
   - Message minimum 10 characters

2. **User Feedback**
   - Success message on submit
   - Error messages for invalid fields
   - Loading state during submission

### Customization

**Update contact info**:
```jsx
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
  },
];
```

**Connect to backend**:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Send to your backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
```

---

## Footer

**File**: `src/components/Footer.jsx`

### Purpose
Footer with links, copyright, and quick navigation.

### Features
- Quick links
- Social links
- Contact information
- Copyright notice
- Animated heart icon

### Customization

**Update footer links**:
```jsx
['About', 'Skills', 'Projects', 'Education', 'Contact']
```

**Modify footer sections**:
Add new columns in the grid:
```jsx
{/* New Section */}
<motion.div>
  <h4>New Section</h4>
  {/* Content */}
</motion.div>
```

---

## ParticleBackground

**File**: `src/components/ParticleBackground.jsx`

### Purpose
Animated particle background for Hero section.

### Features
- Canvas-based particle system
- Connection lines between particles
- Responsive particle count
- Smooth animations

### Customization

**Adjust particle count**:
```jsx
const particleCount = Math.min(150, Math.max(50, Math.floor(canvas.width / 20)));
```

**Change particle color**:
```jsx
ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
// Change RGB values: rgba(R, G, B, A)
```

**Modify connection distance**:
```jsx
const maxDistance = 150; // Pixels
```

**Update particle speed**:
```jsx
this.speedX = Math.random() * 0.5 - 0.25; // Adjust values
```

---

## Theme Context

**File**: `src/context/ThemeContext.jsx`

### Purpose
Manage dark/light mode theme across the application.

### Usage

```jsx
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};
```

### Features
- Auto-detect system preference
- Persist theme preference in localStorage
- Context API based
- Easy toggle functionality

---

## Custom Hooks

**File**: `src/hooks/useCustom.js`

### Available Hooks

1. **useScrollTo()**
   - Navigate to section smoothly

2. **useScrollPosition()**
   - Get current scroll Y position

3. **useIsMobile()**
   - Detect if device is mobile

4. **useKeyboardShortcut(key, callback)**
   - Handle keyboard shortcuts

5. **useLocalStorage(key, initialValue)**
   - Manage component state with localStorage

6. **useMousePosition()**
   - Track mouse coordinates

7. **useDebounce(value, delay)**
   - Debounce value changes

8. **usePrevious(value)**
   - Get previous value

### Usage Example

```jsx
import { useScrollPosition, useIsMobile } from '../hooks/useCustom';

const Component = () => {
  const scrollY = useScrollPosition();
  const isMobile = useIsMobile();
  
  return <div>Scroll: {scrollY}, Mobile: {isMobile}</div>;
};
```

---

## Utilities

**File**: `src/utils/helpers.js`

### Available Functions

- `smoothScrollTo(elementId)` - Scroll to element
- `formatDate(date)` - Format date string
- `validateEmail(email)` - Email validation
- `validateForm(formData)` - Form validation
- `copyToClipboard(text)` - Copy to clipboard
- `downloadFile(url, fileName)` - Download file
- `debounce(func, wait)` - Debounce function
- `truncateText(text, maxLength)` - Truncate text
- And more...

### Usage Example

```jsx
import { validateEmail, formatDate } from '../utils/helpers';

const isValid = validateEmail('user@example.com');
const formatted = formatDate(new Date());
```

---

## Styling

All components use Tailwind CSS utility classes. Key classes:

- `dark:` - Dark mode variants
- `sm:, md:, lg:` - Responsive breakpoints
- `hover:, focus:` - Interactive states
- `transition-all` - Smooth transitions

---

## Animation Libraries

- **Framer Motion** - Complex animations and gestures
- **React Intersection Observer** - Scroll animations
- **CSS Transitions** - Basic transitions

---

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance

---

## Performance Tips

1. Use `motion.div` with `whileHover` for efficient animations
2. Implement scroll virtualization for large lists
3. Lazy load images with intersection observer
4. Code split components for faster initial load
5. Use production builds for deployment

---

## Troubleshooting

### Animations not working
- Check if Framer Motion is installed
- Verify motion components are imported correctly
- Check component hierarchy

### Styling issues
- Clear Tailwind cache: `npm run build`
- Verify dark mode class on HTML element
- Check CSS specificity

### Scroll issues
- Ensure smooth scroll is supported
- Check for conflicting scroll listeners
- Verify scroll targets exist

---

For more help, refer to:
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)

