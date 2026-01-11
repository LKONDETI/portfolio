# Portfolio Website

A dynamic, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
The app fetches all content (profile, skills, projects, experience, education) from a local **JSON Server** (`db.json`), so you can update your portfolio without touching the React code.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **Backend (Mock API):** JSON Server
- **Language:** JavaScript (with a small TypeScript wrapper)
- **Package Manager:** npm

---

## Prerequisites

- **Node.js** v18+ (recommended for Vite + ESM)
- **npm** v8+

Check your versions:

```bash
node -v
npm -v
```

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sravani-portfolio
```

2. Install dependencies:

```bash
npm install
```

This installs React, Vite, Tailwind CSS, Framer Motion, JSON Server, and other required packages.

---

## Running the Application

You need **two** processes running:

1. JSON Server (serves `db.json`)
2. Vite Dev Server (serves the React app)

### 1. Start JSON Server

From the project root:

```bash
npm run server
```

This will:

- Watch `db.json`
- Serve it at `http://localhost:3001`

If this script fails, you can run JSON Server manually:

```bash
npx json-server --watch db.json --port 3001
```

### 2. Start Vite Dev Server

In a **second terminal**, from the same folder:

```bash
npm run dev
```

Open the URL shown in the terminal (usually):

- `http://localhost:5173`

The React app will call the JSON server to load your portfolio data.

---

## Tailwind CSS Setup (Current Project)

This project uses the **new Tailwind CSS API** via a single import in `src/index.css`:

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

> Note: Because the project’s `package.json` has `"type": "module"`, the PostCSS config is defined in **CommonJS** using a `.cjs` file:

`postcss.config.cjs`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

If you ever see:

> `Failed to load PostCSS config: module is not defined in ES module scope`

make sure the file is named `postcss.config.cjs` (not `.js`).

---

## Project Structure

Important files and folders:

- `src/Portfolio.jsx`  
  Main portfolio page that:
  - Uses `usePortfolioData` to fetch data from JSON Server
  - Renders:
    - `Header`
    - `Hero`
    - `About`
    - `Experience`
    - `Projects`
    - `Skills`
    - `Education`
    - `Footer`

- `src/App.tsx`  
  TypeScript wrapper that just renders `<Portfolio />`.

- `src/hooks/usePortfolioData.ts`  
  Custom hook that calls the backend and returns `{ data, loading, error }`.

- `src/components/`  
  - `Layout`
  - `Header`
  - `Hero`
  - `About`
  - `Experience`
  - `Projects`
  - `Skills`
  - `Education`
  - `Footer`
  - `ProjectCard`, `ExperienceCard`, `SkillCard` (UI building blocks)

- `src/index.css`  
  Global styles + Tailwind import and custom utility classes.

- `db.json`  
  Portfolio content (profile, stats, skills, experience, projects, education, certifications).

- `vite.config.js`  
  Vite configuration using `@vitejs/plugin-react` and `babel-plugin-react-compiler`.

---

## TypeScript Note (`Portfolio.jsx`)

The app entry is in TypeScript (`App.tsx`), but the main portfolio page is a `.jsx` file (`Portfolio.jsx`).  
To make this work smoothly, there is a small type declaration:

- `src/Portfolio.d.ts`

```ts
declare module './Portfolio' {
  import * as React from 'react';
  const component: React.FC;
  export default component;
}
```

`App.tsx`:

```tsx
import Portfolio from './Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

You can keep `Portfolio.jsx` as-is, or later convert it to `Portfolio.tsx` for full TypeScript support.

---

## Editing Content

All portfolio content is in `db.json`:

- **Profile info:** name, title, bio, email, location, socials
- **Stats:** years of experience, projects, certifications
- **Skills:** categories and items
- **Experience**
- **Projects**
- **Education**
- **Certifications**

Update `db.json` and refresh the browser — no React code changes needed.

---

## Scripts

Common npm scripts:

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run server   # Start JSON Server (mock API)
```

---

## Troubleshooting

- **Blank page / “Something went wrong / Could not load portfolio data”**  
  - Ensure JSON Server is running:
    ```bash
    npm run server
    ```
  - Check the browser console for network errors to `http://localhost:3001`.

- **Tailwind classes not applying**  
  - Confirm `src/index.css` is imported in your main entry file (e.g. `main.tsx`/`main.jsx`).
  - Ensure `postcss.config.cjs` exists and Vite was restarted after changes:
    ```bash
    npm run dev
    ```

- **PostCSS / module error**  
  - Rename `postcss.config.js` → `postcss.config.cjs`.

- **Framer Motion not found**  
  - Install it:
    ```bash
    npm install framer-motion
    ```
  - Import where used:
    ```ts
    import { motion } from 'framer-motion';
    ```

If you run into other specific errors, check both the **browser console** and the **Vite terminal output** for details.