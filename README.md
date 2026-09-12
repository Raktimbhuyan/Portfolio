# Raktim Bhuyan — Portfolio

A personal portfolio website built with React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production-ready files are output to `dist/`. You can deploy that folder
to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Things to fill in before you publish

- **Resume**: drop your actual PDF at `public/resume.pdf` (the "Download Resume"
  button in the Hero links to `/resume.pdf`).
- **Social links**: replace the placeholder GitHub/LinkedIn URLs and the email
  address in `src/components/Hero.jsx`, `Contact.jsx` and `Footer.jsx`.
- **Projects**: edit `src/data/projects.js` — update descriptions, `liveUrl`,
  `githubUrl`, and set `image` to a screenshot path once you have one. Add new
  projects by adding another object to that array; `Projects.jsx` and
  `ProjectCard.jsx` don't need any changes.
- **Contact form**: `src/components/Contact.jsx` has a `submitContactForm`
  function with a comment marking where to plug in a real email service
  (e.g. Formspree, EmailJS) or your own backend endpoint.
- **Favicon**: `public/favicon.svg` is a simple placeholder mark — swap it for
  a real one if you'd like.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CodeWindow.jsx      (hero's animated code-editor visual)
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Education.jsx
│   ├── CurrentlyLearning.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── projects.js
├── hooks/
│   └── useActiveSection.js
├── App.jsx
├── main.jsx
└── index.css
```
