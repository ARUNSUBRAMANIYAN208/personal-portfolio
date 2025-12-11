# 🚀 Personal Portfolio - Arunkumar Subramaniyan

A modern, responsive, and professional personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple?logo=vite)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎭 **Smooth Animations** - Framer Motion for professional transitions
- 📝 **Contact Form** - Functional contact form with validation
- 🔗 **Social Integration** - Links to GitHub, LinkedIn, and email

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/arun-personal-portfolio.git
   cd arun-personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

```bash
npm install --save-dev gh-pages

# Add to package.json:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   ├── Button.tsx      # Reusable button
│   ├── Card.tsx        # Project card
│   └── SectionTitle.tsx # Section headers
├── data/               # Data files
│   ├── projects.ts     # Project information
│   └── skills.ts       # Skills data
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Update Personal Information

1. **Edit project data**: `src/data/projects.ts`
2. **Edit skills**: `src/data/skills.ts`
3. **Update social links**: `src/components/Contact.tsx` and `src/components/Footer.tsx`
4. **Add resume**: Place your PDF in `public/resume.pdf`

### Change Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Add Project Images

1. Add images to `public/projects/`
2. Update image paths in `src/data/projects.ts`

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌟 Sections

1. **Hero** - Introduction with name, role, and CTA buttons
2. **Skills** - Categorized tech stack (Frontend, Backend, Tools)
3. **Projects** - Featured projects with descriptions and links
4. **About** - Professional bio and highlights
5. **Contact** - Contact form and social links
6. **Footer** - Copyright and social media links

## 🎯 Key Features

- ✅ Smooth scroll navigation
- ✅ Dark mode with system preference detection
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Form validation
- ✅ Hover effects and animations
- ✅ TypeScript for type safety
- ✅ Reusable component architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Arunkumar Subramaniyan**

- GitHub: [@arunsubramaniyan](https://github.com/arunsubramaniyan)
- LinkedIn: [Arunkumar Subramaniyan](https://linkedin.com/in/arunsubramaniyan)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ using React + Vite + TypeScript + Tailwind CSS