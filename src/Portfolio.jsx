import React, { useState } from 'react';
import { usePortfolioData } from './hooks/usePortfolioData';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

export default function Portfolio() {
  const { data, loading, error } = usePortfolioData();
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('dark');

  // Apply theme to html element
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-500">Something went wrong</h2>
        <p className="text-gray-400 mb-6">Could not load portfolio data. Please make sure the server is running.</p>
        <div className="p-4 bg-slate-900 rounded-lg font-mono text-sm border border-slate-800">
          npm run server
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero profile={data.profile} />
      <About profile={data.profile} stats={data.stats} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Education education={data.education} certifications={data.certifications} />
      <Footer profile={data.profile} />
    </Layout>
  );
}