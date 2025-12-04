# Portfolio (simple)

A small personal portfolio built with React, Vite and Tailwind CSS.

This README is intentionally simple and accurate for the current repository state.

**Author:** Jubayar Ahamad

**Tech:** React, Vite, Tailwind CSS

**Node requirement:** Node.js 24 or later

**What's in this repo (what this project currently contains):**

- `index.html`, Vite entry file
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — root component
- `src/index.css` — Tailwind imports and base styles
- `src/components/` — small components (`Bio.jsx`, `Image.jsx`, `Social.jsx`)
- `public/` — static assets (images, icons)

**What this project does now:**

- Renders a basic portfolio UI built with React + Tailwind
- Includes small components for biography, image, and social links

**What this project does NOT include (but might in future):**

- A dedicated contact page or an email form (currently not included)
- A projects CMS/back-end (projects are static entries)
- Authentication or dynamic user content

## Quick commands

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment notes

Deploy to Vercel or Netlify by connecting the repository. Use `npm run build` as the build command; Vite output (`dist`) is published by default.
