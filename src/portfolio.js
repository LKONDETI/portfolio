import React, { useState } from "react";
import "./App.css"; // or "./Portfolio.css" if you prefer

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const skills = {
    languages: [
      "React Native",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "HTML5",
      "CSS3",
    ],
    frameworks: ["Expo.dev", "FastAPI", "Spring Boot", "Tailwind CSS", "NativeWind"],
    databases: ["PostgreSQL", "MongoDB", "Supabase"],
    tools: ["Git", "Docker", "Power BI", "Tableau", "Postman", "Swagger", "Jest", "Sentry"],
    ml: ["TensorFlow", "Scikit-learn", "Pandas", "Deep Learning", "NLP"],
  };

  const experience = [
    {
      company: "Worldwide Interactive Services",
      role: "React/React Native Software Developer",
      period: "August 2025 - Present",
      description: "Browser and App for a credit union bank",
      highlights: [
        "Developed and maintained cross-platform banking platform with React, React Native, and Expo",
        "Integrated RESTful APIs for account management and transactions",
        "Implemented Sentry for error tracking and monitoring",
        "Created dashboards and visual reports to track KPIs",
        "Collaborated with cross-functional teams to deliver enhancements under tight deadlines",
      ],
    },
    {
      company: "Capgemini Private Limited",
      role: "Software Analyst",
      period: "April 2022 - September 2023",
      description: "Apache Fineract Banking fraud detection mechanism",
      highlights: [
        "Developed ML-based fraud detection system to flag suspicious transactions",
        "Used Python, scikit-learn, pandas for data analysis and pattern detection",
        "Integrated ML models via microservices architecture with Spring Boot",
        "Enabled real-time fraud alerts using REST APIs",
        "Supported multi-tenant deployment with configurable detection rules",
      ],
    },
  ];

  const projects = [
    {
      name: "PCUBE Project Portfolio Management",
      period: "June 2025 - Present",
      tech: ["React 18", "TypeScript", "Tailwind CSS", "PostgreSQL", "FastAPI", "Docker"],
      description: "Full-stack project portfolio management software with real-time sync",
      highlights: [
        "Designed microservices architecture with Docker Compose and Nginx",
        "Implemented JWT-based RBAC authentication",
        "Built modules for timesheets, vendors, and analytics",
        "Enabled real-time project tracking with custom APIs",
      ],
    },
    {
      name: "Mobile Banking App with AI",
      period: "April 2025 - May 2025",
      tech: ["React Native", "Expo SDK 53", "FastAPI", "PostgreSQL", "Supabase"],
      github: "Banking App",
      description: "Cross-platform mobile banking app with AI-powered features",
      highlights: [
        "Built RESTful APIs with ML-based transaction tagging",
        "Embedded AI chatbot for real-time financial advisory",
        "Implemented analytics dashboards with category-based visualizations",
        "Designed responsive UI with NativeWind and charts",
      ],
    },
    {
      name: "Merchant Sales Improvement Tools",
      period: "January 2024 - Present",
      tech: ["React Native", "Expo.dev", "FastAPI", "Supabase"],
      github: "React Native Repo",
      description: "Sales and appointment management platform",
      highlights: [
        "Implemented real-time slot booking and appointment management",
        "Integrated Stripe payments and push notifications",
        "Added multi-language support and coupon logic",
        "Designed responsive UI for seamless cross-device experience",
      ],
    },
    {
      name: "Pneumonia Detection Using Deep Learning",
      period: "October 2024 - December 2024",
      tech: ["Python", "TensorFlow", "VGG16", "Deep Learning"],
      description: "Medical image classification system",
      highlights: [
        "Used VGG16 model for pneumonia classification from X-ray images",
        "Applied data preprocessing and augmentation techniques",
        "Improved accuracy through hyperparameter tuning",
        "Evaluated performance using comprehensive metrics",
      ],
    },
  ];

  const sections = ["about", "experience", "projects", "skills", "education"];

  return (
    <div className="portfolio">
      {/* HERO */}
      <div className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-blue" />
          <div className="hero-orb hero-orb-purple" />
        </div>

        <div className="hero-inner">
          <div className="hero-text animate-fadeIn">
            <h1 className="hero-title">Lakshmi Sravani Kondeti</h1>
            <p className="hero-subtitle">
              Full-Stack Developer &amp; Data Science Graduate
            </p>

            <p className="hero-description">
              Building scalable applications with React Native, FastAPI, and Spring Boot.
              Passionate about machine learning and creating meaningful solutions.
            </p>

            <div className="hero-contact">
              <a
                href="mailto:sravanikondeti4@gmail.com"
                className="hero-contact-item"
              >
                <span>sravanikondeti4@gmail.com</span>
              </a>
              <div className="hero-contact-item hero-contact-item-static">
                <span>Lake Mary, FL</span>
              </div>
            </div>

            <div className="hero-links">
              <a
                href="https://www.linkedin.com/in/kondeti-sravani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pill hero-pill-blue"
              >
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/LKONDETI"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pill hero-pill-purple"
              >
                <span>GitHub</span>
              </a>
            </div>

            <div className="hero-icons">
              <span className="icon-bounce delay-0">⚛️</span>
              <span className="icon-pulse delay-300">🐍</span>
              <span className="icon-bounce delay-500">🚀</span>
              <span className="icon-pulse delay-700">🐳</span>
              <span className="icon-bounce delay-900">🤖</span>
            </div>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className="portfolio-nav">
        <div className="portfolio-nav-inner">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={
                "nav-button" +
                (activeSection === section ? " nav-button-active" : "")
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN SECTIONS */}
      <main className="portfolio-main">
        {/* ABOUT */}
        {activeSection === "about" && (
          <section className="section animate-fadeIn">
            <div className="section-header">
              <span className="section-emoji">💻</span>
              <h2 className="section-title">About Me</h2>
            </div>

            <div className="about-grid">
              <div className="glass-card glass-card-primary">
                <p>
                  Recently graduated with a{" "}
                  <span className="highlight">
                    Master&apos;s degree in Data Science &amp; Analytics
                  </span>{" "}
                  from Florida Atlantic University (May 2025, GPA: 3.63/4.0). I
                  specialize in building robust, scalable applications using
                  modern technologies like React Native, FastAPI, and Spring
                  Boot.
                </p>
                <p>
                  With hands-on experience in both software development and
                  machine learning, I&apos;ve worked on projects ranging from
                  mobile banking applications to fraud detection systems. I&apos;m
                  passionate about leveraging technology to solve real-world
                  problems and creating intuitive user experiences.
                </p>
                <p>
                  Currently working as a{" "}
                  <span className="highlight-purple">
                    React/React Native Developer
                  </span>{" "}
                  at Worldwide Interactive Services, where I develop
                  cross-platform banking solutions and analyze user behavior to
                  improve application performance.
                </p>
              </div>

              <div className="stats-column">
                <div className="stats-card stats-card-blue">
                  <div className="stats-number">2+</div>
                  <div className="stats-label">Years Experience</div>
                </div>
                <div className="stats-card stats-card-purple">
                  <div className="stats-number">10+</div>
                  <div className="stats-label">Projects Completed</div>
                </div>
                <div className="stats-card stats-card-green">
                  <div className="stats-number">2</div>
                  <div className="stats-label">Cloud Certifications</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* EXPERIENCE */}
        {activeSection === "experience" && (
          <section className="section animate-fadeIn">
            <div className="section-header">
              <span className="section-emoji">💼</span>
              <h2 className="section-title">Experience</h2>
            </div>

            <div className="experience-list">
              {experience.map((job, idx) => (
                <article key={idx} className="experience-card">
                  <div className="experience-top">
                    <div className="experience-main">
                      <h3 className="experience-role">{job.role}</h3>
                      <p className="experience-company">{job.company}</p>
                      <p className="experience-description">
                        {job.description}
                      </p>
                    </div>
                    <span className="experience-period">{job.period}</span>
                  </div>

                  <ul className="experience-highlights">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="experience-highlight-item">
                        <span className="experience-bullet">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {activeSection === "projects" && (
          <section className="section animate-fadeIn">
            <div className="section-header">
              <span className="section-emoji">🚀</span>
              <h2 className="section-title">Projects</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, idx) => (
                <article key={idx} className="project-card">
                  <div className="project-top">
                    <h3 className="project-title">{project.name}</h3>
                    {project.github && (
                      <span className="project-icon" aria-hidden="true">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="project-period">{project.period}</p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="project-highlights">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="project-highlight-item">
                        <span className="project-dot">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* SKILLS */}
        {activeSection === "skills" && (
          <section className="section animate-fadeIn">
            <div className="section-header">
              <span className="section-emoji">🛠️</span>
              <h2 className="section-title">Skills &amp; Technologies</h2>
            </div>

            <div className="skills-grid">
              <div className="skills-card skills-card-blue">
                <h3 className="skills-title">
                  <span className="skills-icon">⚛️</span>
                  Languages &amp; Frameworks
                </h3>
                <div className="skills-chips">
                  {[...skills.languages, ...skills.frameworks].map(
                    (skill, idx) => (
                      <span key={idx} className="skills-chip">
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="skills-card skills-card-purple">
                <h3 className="skills-title">
                  <span className="skills-icon">🗄️</span>
                  Databases
                </h3>
                <div className="skills-chips">
                  {skills.databases.map((skill, idx) => (
                    <span key={idx} className="skills-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-card skills-card-green">
                <h3 className="skills-title">
                  <span className="skills-icon">⚙️</span>
                  Tools &amp; Technologies
                </h3>
                <div className="skills-chips">
                  {skills.tools.map((skill, idx) => (
                    <span key={idx} className="skills-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-card skills-card-orange">
                <h3 className="skills-title">
                  <span className="skills-icon">🤖</span>
                  Machine Learning
                </h3>
                <div className="skills-chips">
                  {skills.ml.map((skill, idx) => (
                    <span key={idx} className="skills-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* EDUCATION */}
        {activeSection === "education" && (
          <section className="section animate-fadeIn">
            <div className="section-header">
              <span className="section-emoji">🎓</span>
              <h2 className="section-title">Education &amp; Certifications</h2>
            </div>

            <div className="glass-card glass-card-primary education-card">
              <div className="education-main">
                <div className="education-icon">🎓</div>
                <div className="education-text">
                  <h3 className="education-title">
                    Master&apos;s in Data Science and Analytics
                  </h3>
                  <p className="education-school">
                    Florida Atlantic University
                  </p>
                  <div className="education-meta">
                    <span className="education-pill">
                      Graduated: May 2025
                    </span>
                    <span className="education-pill education-pill-gpa">
                      GPA: 3.63/4.0
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="certifications">
              <h3 className="certifications-title">
                <span className="certifications-icon">🏆</span>
                Professional Certifications
              </h3>

              <div className="certifications-grid">
                <div className="cert-card cert-card-blue">
                  <div className="cert-main">
                    <div className="cert-logo">☁️</div>
                    <div>
                      <h4 className="cert-name">Google Cloud Platform</h4>
                      <p className="cert-type">Certification</p>
                    </div>
                  </div>
                  <p className="cert-issued">Issued: February 2023</p>
                </div>

                <div className="cert-card cert-card-orange">
                  <div className="cert-main">
                    <div className="cert-logo">☁️</div>
                    <div>
                      <h4 className="cert-name">AWS Cloud Practitioner</h4>
                      <p className="cert-type">Certification</p>
                    </div>
                  </div>
                  <p className="cert-issued">Issued: October 2022</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="portfolio-footer">
        <p>© 2025 Lakshmi Sravani Kondeti. Built with React.</p>
        <p className="footer-subtitle">Designed with passion for innovation</p>
      </footer>
    </div>
  );
}
