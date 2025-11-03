import React, { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = {
    languages: ['React Native', 'React.js', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'HTML5', 'CSS3'],
    frameworks: ['Expo.dev', 'FastAPI', 'Spring Boot', 'Tailwind CSS', 'NativeWind'],
    databases: ['PostgreSQL', 'MongoDB', 'Supabase'],
    tools: ['Git', 'Docker', 'Power BI', 'Tableau', 'Postman', 'Swagger', 'Jest', 'Sentry'],
    ml: ['TensorFlow', 'Scikit-learn', 'Pandas', 'Deep Learning', 'NLP']
  };

  const experience = [
    {
      company: 'Worldwide Interactive Services',
      role: 'React/React Native Software Developer',
      period: 'August 2025 - Present',
      description: 'Browser and App for a credit union bank',
      highlights: [
        'Developed and maintained cross-platform banking platform with React, React Native, and Expo',
        'Integrated RESTful APIs for account management and transactions',
        'Implemented Sentry for error tracking and monitoring',
        'Created dashboards and visual reports to track KPIs',
        'Collaborated with cross-functional teams to deliver enhancements under tight deadlines'
      ]
    },
    {
      company: 'Capgemini Private Limited',
      role: 'Software Analyst',
      period: 'April 2022 - September 2023',
      description: 'Apache Fineract Banking fraud detection mechanism',
      highlights: [
        'Developed ML-based fraud detection system to flag suspicious transactions',
        'Used Python, scikit-learn, pandas for data analysis and pattern detection',
        'Integrated ML models via microservices architecture with Spring Boot',
        'Enabled real-time fraud alerts using REST APIs',
        'Supported multi-tenant deployment with configurable detection rules'
      ]
    }
  ];

  const projects = [
    {
      name: 'PCUBE Project Portfolio Management',
      period: 'June 2025 - Present',
      tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'FastAPI', 'Docker'],
      description: 'Full-stack project portfolio management software with real-time sync',
      highlights: [
        'Designed microservices architecture with Docker Compose and Nginx',
        'Implemented JWT-based RBAC authentication',
        'Built modules for timesheets, vendors, and analytics',
        'Enabled real-time project tracking with custom APIs'
      ]
    },
    {
      name: 'Mobile Banking App with AI',
      period: 'April 2025 - May 2025',
      tech: ['React Native', 'Expo SDK 53', 'FastAPI', 'PostgreSQL', 'Supabase'],
      github: 'Banking App',
      description: 'Cross-platform mobile banking app with AI-powered features',
      highlights: [
        'Built RESTful APIs with ML-based transaction tagging',
        'Embedded AI chatbot for real-time financial advisory',
        'Implemented analytics dashboards with category-based visualizations',
        'Designed responsive UI with NativeWind and charts'
      ]
    },
    {
      name: 'Merchant Sales Improvement Tools',
      period: 'January 2024 - Present',
      tech: ['React Native', 'Expo.dev', 'FastAPI', 'Supabase'],
      github: 'React Native Repo',
      description: 'Sales and appointment management platform',
      highlights: [
        'Implemented real-time slot booking and appointment management',
        'Integrated Stripe payments and push notifications',
        'Added multi-language support and coupon logic',
        'Designed responsive UI for seamless cross-device experience'
      ]
    },
    {
      name: 'Pneumonia Detection Using Deep Learning',
      period: 'October 2024 - December 2024',
      tech: ['Python', 'TensorFlow', 'VGG16', 'Deep Learning'],
      description: 'Medical image classification system',
      highlights: [
        'Used VGG16 model for pneumonia classification from X-ray images',
        'Applied data preprocessing and augmentation techniques',
        'Improved accuracy through hyperparameter tuning',
        'Evaluated performance using comprehensive metrics'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn">
              Lakshmi Sravani Kondeti
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 font-light">
              Full-Stack Developer & Data Science Graduate
            </p>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building scalable applications with React Native, FastAPI, and Spring Boot. 
            Passionate about machine learning and creating meaningful solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-lg">
            <a href="mailto:sravanikondeti4@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-all hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>sravanikondeti4@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Lake Mary, FL</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/50">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full hover:from-purple-500 hover:to-purple-600 transition-all hover:scale-110 shadow-lg hover:shadow-purple-500/50">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
          </div>

          <div className="flex justify-center gap-8 pt-8 text-5xl opacity-60">
            <span className="animate-bounce">⚛️</span>
            <span className="animate-pulse">🐍</span>
            <span className="animate-bounce delay-300">🚀</span>
            <span className="animate-pulse delay-500">🐳</span>
            <span className="animate-bounce delay-700">🤖</span>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-6 py-5 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-center gap-3 flex-wrap">
          {['about', 'experience', 'projects', 'skills', 'education'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {activeSection === 'about' && (
          <section className="space-y-10 animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">💻</span>
              <h2 className="text-5xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-gradient-to-br from-slate-900/90 to-blue-900/30 backdrop-blur rounded-3xl p-10 space-y-6 border border-blue-500/20 shadow-2xl">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Recently graduated with a <span className="text-blue-400 font-semibold">Master's degree in Data Science & Analytics</span> from Florida Atlantic University (May 2025, GPA: 3.63/4.0). 
                  I specialize in building robust, scalable applications using modern technologies like React Native, FastAPI, and Spring Boot.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  With hands-on experience in both software development and machine learning, I've worked on projects ranging from mobile banking 
                  applications to fraud detection systems. I'm passionate about leveraging technology to solve real-world problems and creating 
                  intuitive user experiences.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Currently working as a <span className="text-purple-400 font-semibold">React/React Native Developer</span> at Worldwide Interactive Services, where I develop cross-platform banking 
                  solutions and analyze user behavior to improve application performance.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur rounded-3xl p-8 border border-blue-500/30 text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-2">3+</div>
                  <div className="text-gray-300 text-lg">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur rounded-3xl p-8 border border-purple-500/30 text-center">
                  <div className="text-6xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-300 text-lg">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur rounded-3xl p-8 border border-green-500/30 text-center">
                  <div className="text-6xl font-bold text-green-400 mb-2">2</div>
                  <div className="text-gray-300 text-lg">Cloud Certifications</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className="space-y-10 animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">💼</span>
              <h2 className="text-5xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8">
              {experience.map((job, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-900/90 to-blue-900/30 backdrop-blur rounded-3xl p-10 hover:from-slate-900 hover:to-blue-900/50 transition-all duration-500 border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors mb-2">{job.role}</h3>
                      <p className="text-2xl text-gray-300 font-medium mb-1">{job.company}</p>
                      <p className="text-base text-gray-500 italic">{job.description}</p>
                    </div>
                    <span className="inline-block mt-3 lg:mt-0 px-5 py-2 bg-blue-600/30 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">{job.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-4 text-gray-300 text-lg">
                        <span className="text-blue-400 text-xl mt-0.5">▸</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="space-y-10 animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🚀</span>
              <h2 className="text-5xl font-bold">Projects</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur rounded-3xl p-8 hover:from-slate-900 hover:to-purple-900/50 transition-all duration-500 border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors leading-tight">
                      {project.name}
                    </h3>
                    {project.github && (
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{project.period}</p>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-xl text-sm font-medium border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="space-y-10 animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🛠️</span>
              <h2 className="text-5xl font-bold">Skills & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/60 backdrop-blur rounded-3xl p-8 border border-blue-500/30 shadow-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">⚛️</span>
                  Languages & Frameworks
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[...skills.languages, ...skills.frameworks].map((skill, idx) => (
                    <span key={idx} className="px-5 py-3 bg-blue-600/30 text-blue-200 rounded-xl font-medium hover:bg-blue-600/50 transition-all hover:scale-105 cursor-default border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/60 backdrop-blur rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🗄️</span>
                  Databases
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.databases.map((skill, idx) => (
                    <span key={idx} className="px-5 py-3 bg-purple-600/30 text-purple-200 rounded-xl font-medium hover:bg-purple-600/50 transition-all hover:scale-105 cursor-default border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-900/40 to-green-950/60 backdrop-blur rounded-3xl p-8 border border-green-500/30 shadow-2xl">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">⚙️</span>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, idx) => (
                    <span key={idx} className="px-5 py-3 bg-green-600/30 text-green-200 rounded-xl font-medium hover:bg-green-600/50 transition-all hover:scale-105 cursor-default border border-green-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-900/40 to-orange-950/60 backdrop-blur rounded-3xl p-8 border border-orange-500/30 shadow-2xl">
                <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🤖</span>
                  Machine Learning
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.ml.map((skill, idx) => (
                    <span key={idx} className="px-5 py-3 bg-orange-600/30 text-orange-200 rounded-xl font-medium hover:bg-orange-600/50 transition-all hover:scale-105 cursor-default border border-orange-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className="space-y-10 animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🎓</span>
              <h2 className="text-5xl font-bold">Education & Certifications</h2>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/90 to-blue-900/40 backdrop-blur rounded-3xl p-10 border border-blue-500/30 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-600/30 rounded-2xl border border-blue-500/30 text-5xl">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">Master's in Data Science and Analytics</h3>
                  <p className="text-2xl text-gray-300 mb-3">Florida Atlantic University</p>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <span className="px-4 py-2 bg-blue-600/20 rounded-lg border border-blue-500/20">Graduated: May 2025</span>
                    <span className="px-4 py-2 bg-green-600/20 rounded-lg border border-green-500/20 font-bold text-green-400">GPA: 3.63/4.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold flex items-center gap-3 mb-6">
                <span className="text-4xl">🏆</span>
                Professional Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-900/90 to-blue-900/40 backdrop-blur rounded-3xl p-8 border-l-4 border-blue-500 shadow-2xl hover:shadow-blue-500/20 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-blue-600/30 rounded-xl text-3xl">
                      ☁️
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-400">Google Cloud Platform</h4>
                      <p className="text-gray-400">Certification</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Issued: February 2023</p>
                </div>
                <div className="bg-gradient-to-br from-slate-900/90 to-orange-900/40 backdrop-blur rounded-3xl p-8 border-l-4 border-orange-500 shadow-2xl hover:shadow-orange-500/20 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-orange-600/30 rounded-xl text-3xl">
                      ☁️
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-orange-400">AWS Cloud Practitioner</h4>
                      <p className="text-gray-400">Certification</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Issued: October 2022</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6 text-center">
        <p className="text-gray-400 text-lg">© 2025 Lakshmi Sravani Kondeti. Built with React & Tailwind CSS.</p>
        <p className="text-gray-600 text-sm mt-2">Designed with passion for innovation</p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}