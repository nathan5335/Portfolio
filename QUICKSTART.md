# QUICKSTART Guide - Gautham Vinod Portfolio

Quick reference for getting started and common tasks.

## ⚡ 30-Second Setup

```bash
# Clone and install
git clone <repo-url>
cd gautham-portfolio
npm install

# Start development
npm run dev

# Open browser to http://localhost:5173
```

## 🎯 Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 📝 Quick Customization

### 1. Update Your Name & Title
**File**: `src/components/Hero.jsx`
```jsx
// Update name and roles
<h1>Your Name</h1>
const roles = ['Your Title', 'Your Role']
```

### 2. Update Social Links
**File**: `src/components/Hero.jsx` & `src/components/Contact.jsx`
```jsx
{
  icon: Github,
  href: 'https://github.com/YOUR_USERNAME'
}
```

### 3. Update Projects
**File**: `src/components/Projects.jsx`
```jsx
{
  id: 1,
  title: 'Your Project',
  description: 'Description',
  tech: ['React', 'Tailwind']
}
```

### 4. Update Skills (0-100 scale)
**File**: `src/components/Skills.jsx`
```jsx
{ name: 'React', level: 90 }
```

### 5. Update Education
**File**: `src/components/Education.jsx`
```jsx
{
  degree: 'Your Degree',
  institution: 'Your University',
  period: '2024 - 2026'
}
```

## 🎨 Color Customization

**File**: `tailwind.config.js`
```js
colors: {
  primary: '#3B82F6',    // Main blue
  secondary: '#8B5CF6'   // Secondary purple
}
```

## 📧 Email Setup (Formspree)

1. Visit https://formspree.io
2. Create form > copy form endpoint
3. Update `src/components/Contact.jsx`:
```jsx
const response = await fetch('https://formspree.io/f/YOUR_ID', {
```

## 📄 Resume Setup

1. Save your resume as `Gautham_Vinod_Resume.txt`
2. Place in `public/` folder  
3. Update filename in `src/components/Navbar.jsx`

## 🚀 Deploy (Choose One)

### Vercel (Recommended - 5 min)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### GitHub Pages
Push to GitHub, connect to Vercel/Netlify

## 🔗 Update Contact Links

Update these files with your info:
- `src/components/Contact.jsx` - Email, phone
- `src/components/Hero.jsx` - Social links
- `src/components/FloatingContactButton.jsx` - Contact options
- `src/components/Footer.jsx` - Footer links

## 📱 Mobile Testing

```bash
npm run dev
# On same network: http://<your-ip>:5173
# Or use Chrome DevTools (F12) > Device mode
```

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Port in use | `npm run dev -- --port 3000` |
| Styles not updating | Hard refresh: `Ctrl+Shift+R` |
| Email not sending | Check Formspree endpoint |
| Dark mode disabled | Check CustomCursor & VisitorCounter in App.jsx |

## ✅ Pre-Deployment Checklist

- [ ] Update name & title
- [ ] Add 3-4 projects
- [ ] Update all skills
- [ ] Set up email form
- [ ] Add resume file
- [ ] Update social links
- [ ] Test on mobile
- [ ] Check animations smooth
- [ ] Verify dark mode works

## 📚 Documentation

- [README.md](./README.md) - Full features
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Detailed setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy options
- [OPTIMIZATION.md](./OPTIMIZATION.md) - Performance

## ⏱️ Time Estimate

- Setup: 5 min
- Customize: 30 min  
- Deploy: 10 min
- **Total: ~45 min**

---

**Ready? Start with:** `npm install && npm run dev`
  description: 'What you built',
  tech: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
}
```

### 5. Update Education
**File**: `src/components/Education.jsx`
```jsx
{
  degree: 'Your Degree',
  institution: 'Your College',
  period: '2025 – 2027',
  status: 'pursuing',
}
```

## 🎯 Most Important Files to Edit

| File | Purpose | Priority |
|------|---------|----------|
| `src/components/Hero.jsx` | Name, title, description | ⭐⭐⭐ |
| `src/components/About.jsx` | About section text | ⭐⭐ |
| `src/components/Skills.jsx` | Skills list | ⭐⭐⭐ |
| `src/components/Projects.jsx` | Your projects | ⭐⭐⭐ |
| `src/components/Education.jsx` | Education history | ⭐⭐ |
| `src/components/Contact.jsx` | Contact info | ⭐⭐⭐ |

## 🔄 Development Workflow

```bash
# 1. Make changes to files
# Changes auto-reload in browser

# 2. Test locally
# Browser at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📱 Preview on Mobile

While dev server is running:
```bash
# Get your local IP
ipconfig getifaddr en0  # macOS/Linux
ipconfig                # Windows

# Visit in mobile browser
http://YOUR_IP:5173
```

## 🎨 Quick Theme Changes

### Change Primary Color

**File**: `tailwind.config.js`
```js
colors: {
  primary: '#3B82F6',    // Change this
  secondary: '#8B5CF6',
}
```

### Quick Color Palette
```
Blue → Purple        : from-blue-500 to-purple-600
Green → Emerald      : from-green-500 to-emerald-500
Orange → Red         : from-orange-500 to-red-500
Pink → Purple        : from-pink-500 to-purple-600
Cyan → Blue          : from-cyan-500 to-blue-500
```

## 🔗 Links to Update

Search and replace in all files:
- `gauthamvinod9999@gmail.com` → Your email
- `7259810009` → Your phone
- `https://github.com/nathan5335` → Your GitHub
- `https://www.linkedin.com/in/gauthammm-vvinod/` → Your LinkedIn

## ✅ Pre-Deployment Checklist

- [ ] Updated name and title
- [ ] Updated all contact information
- [ ] Added your projects
- [ ] Updated skills
- [ ] Updated education
- [ ] Tested all links
- [ ] Tested on mobile
- [ ] Dark mode toggling works
- [ ] Form validation works
- [ ] Social links work

## 🚢 Deployment (Choose One)

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ to netlify.com
```

### GitHub Pages
```bash
npm run build
# Push to gh-pages branch
```

## 📞 First Time Debugging

| Issue | Solution |
|-------|----------|
| **Port 5173 in use** | `npm run dev -- --port 3000` |
| **Tailwind not working** | `npm install && npm run build` |
| **Dark mode not working** | Clear browser cache |
| **Images not showing** | Place in `public/` folder |
| **Links not scrolling** | Check section IDs match hrefs |

## 📊 Recommended Order of Customization

1. ✅ Update name in Hero
2. ✅ Update contact info
3. ✅ Update social links
4. ✅ Add your projects
5. ✅ Update skills
6. ✅ Update education
7. ✅ Update about section
8. ✅ Adjust colors/theme
9. ✅ Test everything
10. ✅ Deploy

## 💡 Pro Tips

1. **Search and Replace**: Use `Ctrl+Shift+H` in VS Code to find and replace text across all files
2. **Copy Component**: Duplicate components to create similar sections
3. **Test Animations**: Slow down animations in Framer Motion for testing
4. **Use Browser DevTools**: F12 to inspect and debug
5. **Enable Prettier**: Format code with `Alt+Shift+F`

## 🔗 Useful Links

| Resource | Link |
|----------|------|
| **React Docs** | https://react.dev |
| **Tailwind CSS** | https://tailwindcss.com |
| **Framer Motion** | https://www.framer.com/motion/ |
| **Vite Docs** | https://vitejs.dev |
| **Lucide Icons** | https://lucide.dev |

## 📚 Next Steps

1. Review [SETUP_GUIDE.md](SETUP_GUIDE.md) for deeper customization
2. Check [COMPONENTS.md](COMPONENTS.md) for component details
3. Read [DEPLOYMENT.md](DEPLOYMENT.md) for deployment options
4. Explore source code and tweak as needed

## 🎯 What to Do Next

✅ **Immediate** (Day 1)
- Update name, email, links
- Add projects
- Update skills

✅ **Short-term** (Days 2-3)
- Customize colors
- Adjust animations
- Add profile details

✅ **Before Deployment** (Week 1)
- Test all functionality
- Check responsiveness
- Optimize performance
- Deploy to production

---

## Need Help?

- 📖 Read the full [SETUP_GUIDE.md](SETUP_GUIDE.md)
- 📚 Check [COMPONENTS.md](COMPONENTS.md) for component details
- 🚀 See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment
- 💬 Visit React/Tailwind documentation

---

**You're all set! Start customizing your portfolio now!** 🚀

