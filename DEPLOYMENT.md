# Deployment Guide

This guide covers various deployment options for your portfolio website.

## ☁️ Vercel (Recommended - Free & Easy)

Vercel is the easiest option for Vite projects.

### Prerequisites
- Vercel account (free at https://vercel.com)
- GitHub, GitLab, or Bitbucket account

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/gautham-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Select "Import Project"
   - Choose your GitHub repository
   - Vercel will automatically detect Vite configuration
   - Click "Deploy"

3. **Domain Setup** (Optional)
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings > Domains
   - Add your custom domain

## 🚀 Netlify

### Prerequisites
- Netlify account (free at https://netlify.com)
- GitHub, GitLab, or Bitbucket account

### Steps:

1. **Push code to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Connect Custom Domain**
   - Domain settings > Add custom domain
   - Update DNS records as instructed

## 🐙 GitHub Pages

### Prerequisites
- GitHub account with repo initialized

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/gautham-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist",
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to GitHub Pages
   - Select "Deploy from a branch"
   - Select `gh-pages` branch
   - Save

## 🌐 Self-Hosted (VPS/Server)

### Prerequisites
- VPS/Server (AWS, DigitalOcean, Linode, etc.)
- SSH access to server
- Node.js and npm installed on server

### Steps:

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload dist folder to server**
   ```bash
   scp -r dist/ user@your-server:/var/www/portfolio
   ```

3. **Set up web server (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           root /var/www/portfolio;
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Enable HTTPS (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## 🔧 Environment Variables

For different environments, create:

### `.env.development`
```
VITE_API_URL=http://localhost:3000
```

### `.env.production`
```
VITE_API_URL=https://api.yourdomain.com
```

### `.env.staging`
```
VITE_API_URL=https://staging-api.yourdomain.com
```

## 📊 Performance Optimization

Before deployment:

1. **Build optimization**
   ```bash
   npm run build
   ```

2. **Check bundle size**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

3. **Enable gzip compression** (on server)

4. **Set up CDN** for static assets (optional)

5. **Enable HTTP/2** on server

## 🔒 Security Checklist

- [ ] Remove console logs in production
- [ ] Set appropriate CORS headers
- [ ] Implement rate limiting for contact form
- [ ] Use HTTPS
- [ ] Set security headers
  ```
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=31536000
  ```
- [ ] Regular dependency updates
- [ ] Implement proper error handling

## 📈 Monitoring

Set up monitoring for your deployed site:

- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Error Tracking**: Sentry, Rollbar
- **Analytics**: Google Analytics, Plausible
- **Performance**: Google PageSpeed Insights, WebPageTest

## 🚨 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Not Working
Ensure your server is configured to serve `index.html` for all routes:
```nginx
try_files $uri $uri/ /index.html;
```

### Static Assets Not Loading
Check that the base path is correct in `vite.config.js`:
```js
export default {
  base: '/',
  // ...
}
```

### Contact Form Not Working
Implement a backend endpoint or use a service like:
- FormSpree (https://formspree.io)
- Basin (https://usebasin.com)
- EmailJS (https://www.emailjs.com)

## 🎯 Next Steps

After deployment:

1. Set up analytics
2. Test all features
3. Check mobile responsiveness
4. Verify all links work
5. Set up automated backups
6. Monitor performance
7. Keep dependencies updated
8. Gather feedback from visitors

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com/
- Vite Deployment: https://vitejs.dev/guide/build.html

---

Happy Deploying! 🎉
