# Portfolio Website

A dynamic, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
The app fetches all content (profile, skills, projects, experience, education) from a local **JSON Server** (`db.json`), so you can update your portfolio without touching the React code.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **Backend (Mock API):** JSON Server
- **Language:** JavaScript + TypeScript support
- **Package Manager:** npm

---

## Prerequisites

- **Node.js** v14+  
- **npm** v6+

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

### Option 1 – Run in separate terminals (recommended)

**Terminal 1 – Backend (JSON Server)**

From the project root:

```bash
npm run server
```

This will:

- Watch `db.json`
- Serve it at `http://localhost:3001`

**Terminal 2 – Frontend (Vite + React)**

In a second terminal, from the same folder:

```bash
npm run dev
```

Open the URL shown in the terminal (usually):

- `http://localhost:5173`

The React app will call the JSON server to load your portfolio data.

---

### Option 2 – Manually using `json-server` (if needed)

If `npm run server` is not set up or fails, you can run:

```bash
npx json-server --watch db.json --port 3001
```

Then still use:

```bash
npm run dev
```

---

## Project Structure

Key files and folders:

- `src/Portfolio.jsx`  
  Main portfolio page that:
  - Uses `usePortfolioData` to fetch data from JSON Server
  - Renders `Header`, `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Footer`
- `src/App.tsx`  
  Simple wrapper that renders `<Portfolio />`.
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
- `db.json`  
  Portfolio content (profile, stats, skills, experience, projects, education, certifications).

---

## TypeScript Note (`Portfolio.jsx`)

The project uses TypeScript for `App.tsx`, but your main component is in `Portfolio.jsx`.  
To keep it as `.jsx` and avoid TypeScript errors, there is a type declaration:

- `src/Portfolio.d.ts`

```ts
declare module './Portfolio' {
  import * as React from 'react';
  const component: React.FC;
  export default component;
}
```

`App.tsx` looks like:

```tsx
import Portfolio from './Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

If you prefer full TypeScript support, you can later rename `Portfolio.jsx` to `Portfolio.tsx` and remove the `.d.ts` file.

---

## Editing Content

All portfolio content lives in `db.json`:

- **Profile info:** name, title, bio, email, location, socials
- **Stats:** years of experience, projects, certifications
- **Skills:** languages, frameworks, databases, tools, ML
- **Experience, Projects, Education, Certifications**

Update the JSON and refresh the page – no code changes needed.

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

## Deployment

For deployment (Vercel, Netlify, etc.):

1. Build the app:

```bash
npm run build
```

2. Deploy the `dist` folder with your hosting provider.

For production, you’ll either:
- Deploy `db.json` behind a real backend, or
- Replace API calls with static data.

---

## Troubleshooting

- **`Something went wrong / Could not load portfolio data` on the page**  
  - Make sure JSON Server is running:
    ```bash
    npm run server
    ```
- **TypeScript error: “Could not find a declaration file for module './Portfolio'”**  
  - Ensure `src/Portfolio.d.ts` exists and is saved.
- **`Failed to resolve import "framer-motion"`**  
  - Install it:
    ```bash
    npm install framer-motion
    ```

If you run into any specific errors, check the browser console and terminal logs.