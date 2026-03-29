# Setup Guide

Complete guide to set up and customize your portfolio website.

## 📋 Prerequisites

- **Node.js**: v14.0 or higher
- **npm**: v6.0 or higher (comes with Node.js)
- **Git**: For version control
- **Text Editor**: VS Code recommended
- **Browser**: Modern browser with ES6 support

## 🚀 Initial Setup

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- Vite (build tool)
- Tailwind CSS
- Framer Motion
- And other dependencies

### Step 2: Start Development Server

```bash
npm run dev
```

The browser will automatically open at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

This creates optimized production files in the `dist/` folder.

## 🎨 Customization

### 1. Personal Information

**File**: `src/components/Hero.jsx`

Update the following:
```jsx
// Hero name
<h1>Your Name</h1>

// Add your personal description
<p>Your description here</p>

// Update social links
{
  icon: Github,
  href: 'https://github.com/yourprofile',
}
```

### 2. About Section

**File**: `src/components/About.jsx`

```jsx
// Update your background
<p>I'm a <span>motivated developer</span>...</p>

// Add profile image
<img src="/your-image.jpg" alt="Your Name" />
```

### 3. Skills

**File**: `src/components/Skills.jsx`

Add or modify skills:
```jsx
const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Your Skill', level: 85 }, // 0-100
    ]
  }
];
```

### 4. Projects

**File**: `src/components/Projects.jsx`

Add your projects:
```jsx
{
  id: 1,
  title: 'Your Project',
  shortDesc: 'Brief description',
  description: 'Detailed description',
  features: ['Feature 1', 'Feature 2'],
  tech: ['Tech1', 'Tech2'],
  color: 'from-blue-500 to-cyan-500',
  image: '🎯', // Any emoji
}
```

### 5. Education

**File**: `src/components/Education.jsx`

Update education history:
```jsx
{
  degree: 'Your Degree',
  institution: 'Your College',
  university: 'Your University',
  period: '2025 – 2027',
  status: 'pursuing', // or 'completed'
  icon: GraduationCap,
}
```

### 6. Contact Information

**File**: `src/components/Contact.jsx`

Update contact details:
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

### 7. Social Links

Update everywhere social links appear:

**Hero.jsx**:
```jsx
{
  icon: Github,
  href: 'https://github.com/yourprofile',
}
```

**Contact.jsx**:
```jsx
{
  icon: Linkedin,
  href: 'https://www.linkedin.com/in/yourprofile/',
}
```

## 🎨 Theme Customization

### Colors

**File**: `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Main blue
      secondary: '#8B5CF6',  // Purple
    }
  }
}
```

### Gradient Classes

Update gradients in components:
```jsx
className="bg-gradient-to-r from-blue-500 to-purple-600"
```

Common gradient combinations:
- `from-blue-500 to-purple-600` - Blue to Purple
- `from-purple-500 to-pink-500` - Purple to Pink
- `from-green-500 to-emerald-500` - Green
- `from-orange-500 to-red-500` - Orange to Red

### Font

**File**: `src/index.css`

```css
body {
  font-family: /* your font family */;
}
```

Or add custom fonts to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px (`sm:`)
- **Tablet**: 640px - 1024px (`md:`)
- **Desktop**: > 1024px (`lg:`, `xl:`)

All components are already responsive. Customize per component:

```jsx
// Mobile: full width, Tablet: 1/2 width, Desktop: 1/3 width
className="grid md:grid-cols-2 lg:grid-cols-3"
```

## 🔧 Advanced Configuration

### Environment Variables

**File**: `.env.example` → `.env.local`

```
VITE_API_URL=http://localhost:3000
VITE_ANALYTICS_ID=your-id
```

Use in components:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

### Vite Configuration

**File**: `vite.config.js`

```js
export default defineConfig({
  server: {
    port: 5173,        // Change port
    open: true,        // Auto open browser
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
  },
})
```

### Tailwind Configuration

**File**: `tailwind.config.js`

- Add custom colors
- Extend spacing
- Add custom animations
- Configure plugins

## 🔌 API Integration

### Contact Form Integration

**Option 1: FormSpree** (Easiest)

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
```

**Option 2: EmailJS**

```jsx
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

const handleSubmit = async (e) => {
  e.preventDefault();
  
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

**Option 3: Your Backend**

```jsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 📊 SEO Optimization

### Meta Tags

**File**: `index.html`

```html
<meta name="description" content="Your description">
<meta name="keywords" content="keyword1, keyword2">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image.jpg">
```

### Sitemap

Add `sitemap.xml` to `public/`:
```xml
<urlset>
  <url>
    <loc>https://yourdomain.com</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt

Add `robots.txt` to `public/`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## 🔒 Security

### Content Security Policy

Add to `index.html` `<head>`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

### Environment Security

Never commit sensitive data:
```bash
# Add to .gitignore
.env
.env.local
.env.*.local
```

## 📦 File Structure Best Practices

```
src/
├── components/        # React components
├── context/          # Context API providers
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── pages/            # Page components (if using routing)
├── App.jsx           # Root component
├── main.jsx          # Entry point
└── index.css         # Global styles

public/              # Static assets
dist/                # Production build
```

## 🧪 Testing (Optional)

Add testing libraries:
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

Create test files:
```jsx
// src/components/Hero.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders hero section', () => {
    const { container } = render(<Hero />);
    expect(container).toBeTruthy();
  });
});
```

Run tests:
```bash
npm run test
```

## 🐛 Common Issues

###1. Tailwind Classes Not Applying

**Solution**: Update `tailwind.config.js` content:
```js
content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
]
```

### 2. Dark Mode Not Working

**Solution**: Check if `dark` class is on `<html>`:
```jsx
// In App.jsx
<html className={isDark ? 'dark' : ''}>
```

### 3. Animations Stuttering

**Solution**: Add `transform: translateZ(0)`:
```jsx
className="transform translate-z-0"
```

### 4. Images Not Loading

**Solution**: Use correct path:
```jsx
<img src="/images/profile.jpg" alt="Profile" />
// Place image in public/images/
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🚀 Performance Optimization

### 1. Image Optimization

```jsx
<img 
  src="/image.jpg" 
  alt="Description"
  loading="lazy"
  width="400"
  height="300"
/>
```

### 2. Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./Component'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### 3. Memoization

```jsx
import { memo } from 'react';

const MemoizedComponent = memo(({ prop }) => {
  return <div>{prop}</div>;
});
```

## 📈 Next Steps

1. ✅ Customize personal information
2. ✅ Add your projects
3. ✅ Choose deployment platform
4. ✅ Set up custom domain
5. ✅ Configure analytics
6. ✅ Submit to search engines
7. ✅ Monitor performance

## 💡 Tips

- Use VS Code extensions: ES7+ React/Redux/React-Native, Tailwind CSS IntelliSense, Prettier
- Enable Prettier formatting: `alt+shift+f`
- Use browser DevTools for debugging
- Test on mobile devices regularly
- Keep dependencies updated: `npm update`
- Use Git for version control

## 🤝 Getting Help

- Check COMPONENTS.md for component details
- Review DEPLOYMENT.md for deployment help
- Check GitHub issues
- Refer to official documentation

---

Happy customizing! 🎉

