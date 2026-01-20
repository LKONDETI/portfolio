# Portfolio Website

A dynamic, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

All content (profile, skills, projects, experience, education, certifications) comes from a local **JSON Server** (`db.json`), so you can update your portfolio data without touching the React components. The header includes a **Resume** tab that opens your resume PDF in a modal.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Lucide Icons, React Icons
- **Backend (Mock API):** JSON Server (serving `db.json`)
- **Language:** JavaScript
- **Package Manager:** npm
- **Dev tooling:** ESLint, Tailwind v4 (@import API), Vite React plugin
- **Deployment:** GitHub Pages (`gh-pages` branch, static build from `dist/`)

---

## Prerequisites

- **Node.js** v18+
- **npm** v8+

Check versions:

```bash
node -v
npm -v
```

---

## Installation

Clone and install:

```bash
git clone <repository-url>
cd sravani-portfolio
npm install
```

This installs React, Vite, Tailwind CSS, Framer Motion, JSON Server, Lucide Icons, etc.

---

## Running the Application (Local Development)

The app expects a JSON API and the Vite dev server running together.

You have two options:

### Option A – One command (`npm start`)

First, ensure `concurrently` is installed:

```bash
npm install --save-dev concurrently
```

Then use:

```bash
npm start
```

This runs:

- `npm run server` → JSON Server on **http://localhost:3000**
- `npm run dev` → Vite dev server on **http://localhost:5173**

### Option B – Two terminals

**Terminal 1 – JSON Server**

```bash
npm run server
# json-server --watch db.json --port 3000
# Endpoints like:
# http://localhost:3000/profile
# http://localhost:3000/skills
# http://localhost:3000/projects
```

**Terminal 2 – Vite Dev Server**

```bash
npm run dev
# → http://localhost:5173
```

The React app will fetch data from `http://localhost:3000`.

---

## Tailwind CSS Setup

This project uses **Tailwind CSS v4** via the new @import API in `src/index.css`:

```css
@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: smooth;
    font-family: 'Outfit', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Space Grotesk', sans-serif;
  }

  body {
    @apply bg-slate-950 text-slate-100 overflow-x-hidden;
  }
}

@layer utilities {
  .glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  .glass-strong {
    @apply bg-slate-900/60 backdrop-blur-2xl border-b border-white/10;
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400;
  }
}
```

Because `package.json` has `"type": "module"`, PostCSS config is written in CommonJS and stored as `postcss.config.cjs`:

```js
// postcss.config.cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

If you see:

> Failed to load PostCSS config: module is not defined in ES module scope

ensure the file is named `postcss.config.cjs`, not `postcss.config.js`.

---

## Project Structure (Key Files)

- `db.json`  
  JSON Server data source for:
  - `/profile`
  - `/stats`
  - `/skills`
  - `/experience`
  - `/projects`
  - `/education`
  - `/certifications`

- `src/main.jsx`  
  Vite React entry that mounts the app and imports `index.css`.

- `src/Portfolio.jsx`  
  Main portfolio page:
  - Uses `usePortfolioData` to fetch data from JSON Server
  - Renders:
    - `Layout`
    - `Header`
    - `Hero`
    - `About`
    - `Experience`
    - `Projects`
    - `Skills`
    - `Education`
    - `Footer`

- `src/hooks/usePortfolioData.js`  
  Custom hook that calls the API (via `src/services/api.js`) and returns `{ data, loading, error }`.

- `src/services/api.js`  
  Axios-based API client that points to the JSON Server.

- `src/components/`  
  - `Layout.jsx` – page shell
  - `Header.jsx` – sticky nav with active section and **Resume** modal
  - `Hero.jsx` – top intro section
  - `About.jsx` – bio and stats
  - `Experience.jsx` – experience timeline/cards
  - `Projects.jsx` – project grid using `ProjectCard`
  - `Skills.jsx` – skills grid using `SkillCard`
  - `Education.jsx` – education and certifications
  - `Footer.jsx` – contact and social links

- `public/resume.pdf`  
  Your resume file, shown in a modal via an `<iframe>` in `Header`.

- `vite.config.js`  
  Vite config with `@vitejs/plugin-react` and `babel-plugin-react-compiler`, plus a `base` path configured for GitHub Pages hosting.

---

## Resume Modal

The **Resume** nav item in `Header` opens a modal with your PDF:

- `public/resume.pdf` is served at `/resume.pdf`.
- `Header.jsx` uses Framer Motion’s `AnimatePresence` for the modal.
- The modal embeds the PDF:

```jsx
<iframe
  src="/resume.pdf"
  title="Resume"
  className="w-full h-full"
/>
```

To update your resume, replace `public/resume.pdf` with a new file of the same name.

---

## Editing Content (db.json)

All dynamic content lives in `db.json`:

- `profile` – name, title, bio, email, location, socials
- `stats` – experience, projects, certifications
- `skills` – categories and items
- `experience` – roles, companies, dates, descriptions
- `projects` – title, stack, description, links
- `education`
- `certifications`

Update `db.json` and reload the page; the app will reflect the new data.

---

## npm Scripts

From `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "server": "json-server --watch db.json --port 3000",
  "start": "concurrently \"npm run server\" \"npm run dev\""
}
```

Use:

- `npm start` – run JSON Server + Vite together (after installing `concurrently`).
- `npm run dev` – Vite dev server only.
- `npm run server` – JSON Server only.
- `npm run build` – build for production into `dist/`.
- `npm run preview` – preview the production build locally.

---

## Deployment (GitHub Pages)

Deployment is handled via the `gh-pages` branch, which contains only the built static files (from `dist/`).

Typical deploy steps:

```bash
# On main with latest code
git checkout main
git pull origin main

# Build
npm run build

# Switch to gh-pages
git checkout gh-pages

# Replace contents with dist build
git rm -rf .
cp -R dist/* .
git add .
git commit -m "Deploy new portfolio build"
git push origin gh-pages

# Go back to main for development
git checkout main
```

In GitHub:

- Settings → Pages
- Source: `Deploy from a branch`
- Branch: `gh-pages`, folder: `/root`

After pushing, wait a minute and hard-refresh your Pages URL.

---

## Troubleshooting

- **Blank page / “Something went wrong / Could not load portfolio data” (local)**  
  - Ensure JSON Server is running:
    ```bash
    npm run server
    ```
  - Confirm the app is requesting `http://localhost:3000/...`.
  - Check browser console and Network tab.

- **Tailwind styles not applying**  
  - Ensure `src/index.css` is imported in `src/main.jsx`.
  - Ensure `postcss.config.cjs` exists.
  - Restart dev server:
    ```bash
    npm run dev
    ```

- **PostCSS / module error**  
  - Use `postcss.config.cjs` (CommonJS), not `postcss.config.js`.

- **`concurrently: command not found` when running `npm start`**  
  - Install it:
    ```bash
    npm install --save-dev concurrently
    ```

- **Framer Motion or lucide-react errors**  
  - Install:
    ```bash
    npm install framer-motion lucide-react
    ```
  - Import correctly:
    ```js
    import { motion, AnimatePresence } from 'framer-motion';
    import { Linkedin, Github, Mail, Heart } from 'lucide-react';
    ```

For any other issue, check both the **browser console** and the **Vite dev server** output in the terminal.