# Portfolio Website

A dynamic, responsive portfolio website built with React, Vite, and Tailwind CSS. The application fetches data from a local JSON server, making it easy to update content without improved code changes.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **Backend:** JSON Server (mock REST API)
- **Language:** JavaScript
- **Package Manager:** npm

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone <repository-url>
   cd sravani-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application, you need to start both the JSON server (backend) and the Vite development server (frontend).

### Option 1: Running in separate terminals

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run dev
```

### Option 2: Concurrent running (if configured)
Currently, verify the `package.json` scripts. You typically run them separately as shown above.

## Project Structure

- `src/components`: UI components (Header, Hero, About, etc.)
- `src/hooks`: Custom React hooks (e.g., `usePortfolioData`)
- `src/services`: API service functions
- `db.json`: Database file for the portfolio content

## Features

- **Dynamic Content:** All data (skills, projects, experience) is fetched from `db.json`.
- **Responsive Design:** Fully responsive layout for mobile, tablet, and desktop.
- **Modern UI:** Glassmorphism effects, smooth animations, and interactive elements.
