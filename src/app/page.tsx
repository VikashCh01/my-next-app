'use client';
import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaInfoCircle, FaUser, FaExternalLinkAlt, FaShareAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Vikash Kumar - Full Stack Developer Resume</title>
        <meta name="description" content="Professional resume of Vikash Kumar - Full Stack Developer with React.js, Node.js, PHP Laravel expertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="resume-page">
        {/* Header Section */}
        <header className="resume-header">
          <div className="container">
            <div className="header-content">
              <div className="name-title">
                <h1>VIKASH KUMAR</h1>
                <h2>Full Stack Developer</h2>
              </div>
              <div className="contact-info">
                {/* <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Ghaziabad (Raghunathpuri)</span>
                </div> */}
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>vk643478@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+91 7668160587</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="resume-content container">
          <div className="resume-grid">
            {/* Left Column */}
            <div className="left-column">
              {/* Summary Section */}
              <section className="resume-section">
                <div className="section-header">
                  <div className="section-title">
                    <FaUser className="title-icon" />
                    <h3>Professional Summary</h3>
                  </div>
                  {/* <div className="portfolio-link">
                    <a
                      href="https://vikash-portfolio-sage.vercel.app/"
                      className="portfolio-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      View Portfolio
                    </a>
                  </div> */}
                </div>
                <p className="summary-text">
                  Full-Stack Developer with 2+ years of experience building scalable web applications using React.js, Next.js, Node.js, PHP (Laravel), and MySQL.
                  Proficient in both frontend and backend development, REST API integration, and responsive UI design.
                </p>
              </section>

              {/* Work Experience Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaBriefcase className="title-icon" />
                  <h3>Work Experience</h3>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div className="company-info">
                      <h4>Software Developer</h4>
                      <p className="company-location">iNextErp Solutions Pvt. Ltd. (Noida Sector - 63)</p>
                    </div>
                    <span className="experience-date">January 2025 – Present</span>
                  </div>
                  <ul className="experience-list">
                    <li>Engineer full-stack web applications using React.js on the frontend and Node.js with MySQL on the backend.</li>
                    <li>Deliver scalable, dynamic features with a focus on performance, maintainability, and code reusability.</li>
                    <li>Integrate REST APIs, form validations, and backend business logic for complex enterprise modules.</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div className="company-info">
                      <h4>Web Developer</h4>
                      <p className="company-location">Maxtra Technologies (Noida Sector - 67)</p>
                    </div>
                    <span className="experience-date">June 2024 – December 2024</span>
                  </div>
                  <ul className="experience-list">
                    <li>Built web applications using PHP, Laravel, and phpMyAdmin for database management.</li>
                    <li>Designed and maintained backend APIs while handling MySQL database operations.</li>
                    <li>Created responsive user interfaces and managed asynchronous requests using AJAX and jQuery.</li>
                  </ul>
                </div>
              </section>

              {/* Projects Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaCode className="title-icon" />
                  <h3>Projects</h3>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div className="company-info">
                      <h4>iNext Online Portal</h4>
                      <p className="company-location">Next.js, JavaScript, Node.js, MS SQL</p>
                    </div>
                    <span className="experience-date">January 2025 – Present</span>
                  </div>
                  <ul className="experience-list">
                    <li>Architected complex stored procedures in MS SQL Server to handle business logic at the database level, reducing API response overhead.</li>
                    <li>Exposed RESTful APIs consuming MS SQL stored procedures and wired them into the Next.js frontend.</li>
                    <li>Engineered a reporting system for the ERP platform enabling dynamic, filterable, and paginated business report views.</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div className="company-info">
                      <h4>In-House CRM Portal</h4>
                      <p className="company-location">Next.js, JavaScript, Node.js, MySQL</p>
                    </div>
                    <span className="experience-date">January 2025 – Present</span>
                  </div>
                  <ul className="experience-list">
                    <li>Constructed a comprehensive CRM portal to manage customers, sales pipelines, purchases, payments, and user permissions in one platform.</li>
                    <li>Enforced role-based access control (RBAC) across modules and departments to secure data and workflows.</li>
                    <li>Delivered dynamic data tables and tracking workflows for customer interactions, sales orders, and payment statuses via real-time API integration.</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div className="company-info">
                      <h4>HR Management Portal</h4>
                      <p className="company-location">PHP, Laravel, AJAX, jQuery, MySQL</p>
                    </div>
                    <span className="experience-date">June 2024 – November 2024</span>
                  </div>
                  <ul className="experience-list">
                    <li>Built an end-to-end HR system covering the full employee lifecycle — onboarding, attendance, payroll, and exit management.</li>
                    <li>Automated attendance tracking by wiring biometric/punching machine data imports directly into MySQL.</li>
                    <li>Configured a cron job-based payroll engine to dynamically calculate salaries, deductions, and disbursements on schedule.</li>
                  </ul>
                </div>
              </section>

              {/* Education Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaGraduationCap className="title-icon" />
                  <h3>Education</h3>
                </div>

                <div className="education-item">
                  <h4>Bachelor of Technology — Computer Science & Engineering</h4>
                  <p className="institution">Maharaja Agrasen Himalayan Garhwal University, Uttarakhand</p>
                  <div className="education-details">
                    <span className="education-year"><strong>2024 – 2027</strong></span>
                    <span className="education-year"><strong>70% (Ongoing)</strong></span>
                  </div>
                </div>

                <div className="education-item">
                  <h4>Diploma — Computer Science Engineering</h4>
                  <p className="institution">PK University, Mathura</p>
                  <div className="education-details">
                    <span className="education-year"><strong>2021 – 2024</strong></span>
                    <span className="education-year"><strong>72%</strong></span>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Technical Skills Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaCode className="title-icon" />
                  <h3>Technical Skills</h3>
                </div>

                <div className="skills-category">
                  <h4>Frontend Technologies</h4>
                  <div className="skills-list">
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">jQuery</span>
                    <span className="skill-tag">AJAX</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Backend Technologies</h4>
                  <div className="skills-list">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">PHP</span>
                    <span className="skill-tag">Laravel</span>
                    <span className="skill-tag">CodeIgniter</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Database Management</h4>
                  <div className="skills-list">
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">MsSQL</span>
                  </div>
                </div>

                <div className="skills-category">
                  <h4>Tools & Technologies</h4>
                  <div className="skills-list">
                    <span className="skill-tag">GitLab</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">VS Code</span>
                    <span className="skill-tag">Postman</span>
                    <span className="skill-tag">REST APIs</span>
                    <span className="skill-tag">JSON</span>
                    <span className="skill-tag">MVC Architecture</span>
                    <span className="skill-tag">Responsive Design</span>
                    <span className="skill-tag">Admin Panel</span>
                  </div>
                </div>
              </section>

              {/* Additional Information Section */}
              <section className="resume-section">
                <div className="section-title">
                  <FaInfoCircle className="title-icon" />
                  <h3>Additional Information</h3>
                </div>

                <div className="additional-info">
                  <div className="info-item">
                    <h4>Languages</h4>
                    <p>English (Professional), Hindi (Native)</p>
                  </div>

                  <div className="info-item">
                    <h4>Certification</h4>
                    <p><strong>Full Stack Developer</strong></p>
                    <p>Ducat IT Training School, Noida (Sector-63)</p>
                    <p><strong>ID:</strong> Nl63J5819</p>
                  </div>
                </div>
              </section>

              {/* Social Links */}
              <section className="resume-section">
                <div className="section-title">
                  <FaShareAlt className="title-icon" />
                  <h3>Connect With Me</h3>
                </div>
                <div className="social-links-mini">
                  <a href="https://gitlab.com/vk643478" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub className="social-icon-mini" />
                    <span>GitLab</span>
                  </a>
                  <a href="https://linkedin.com/in/vikash-chaudhary-3b3926285" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin className="social-icon-mini" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:vk643478@gmail.com" className="social-link">
                    <FaEnvelope className="social-icon-mini" />
                    <span>Email</span>
                  </a>
                </div>
              </section>

              {/* Download Button */}
              {/* <section className="resume-section download-section">
                <a href="/resume.pdf" download className="download-btn">
                  <FaDownload className="btn-icon" />
                  Download Resume PDF
                </a>
              </section> */}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="resume-footer">
          <div className="container">
            <p className="footer-text">Thank you for reviewing my resume!</p>
            <div className="social-links">
              <a href="https://gitlab.com/vk643478" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/vikash-chaudhary-3b3926285" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                <FaLinkedin />
              </a>
              <a href="mailto:vk643478@gmail.com" className="social-icon-footer">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .resume-page {
          min-height: 100vh;
          background: #f4f7fe;
          font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: #334155;
          line-height: 1.6;
          font-size: 12px;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Header Styles */
        .resume-header {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #f8fafc;
          padding: 40px 0 25px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .resume-header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(15,23,42,0) 60%);
          z-index: 1;
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .name-title h1 {
          font-size: 2.2rem;
          margin-bottom: 4px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .name-title h2 {
          font-size: 1.1rem;
          margin-bottom: 16px;
          font-weight: 400;
          color: #94a3b8;
          letter-spacing: 0.02em;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: 999px;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          color: #e2e8f0;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .contact-icon {
          font-size: 0.9rem;
          color: #60a5fa;
        }

        /* Main Content */
        .resume-content {
          padding: 30px 0 60px 0;
          margin-top: -25px;
          position: relative;
          z-index: 10;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          align-items: start;
        }

        /* Section Styles */
        .resume-section {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .resume-section:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .section-title h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .title-icon {
          box-sizing: content-box;
          width: 16px;
          height: 16px;
          background: #eff6ff;
          color: #2563eb;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Summary Section */
        .portfolio-link {
          flex-shrink: 0;
        }

        .portfolio-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0f172a;
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);
        }

        .portfolio-btn:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(15, 23, 42, 0.25);
        }

        .btn-icon {
          font-size: 0.8rem;
        }

        .summary-text {
          font-size: 0.9rem;
          line-height: 1.7;
          color: #475569;
        }

        /* Experience Section */
        .experience-item {
          margin-bottom: 24px;
          position: relative;
        }

        .experience-item:last-child {
          margin-bottom: 0;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .company-info h4 {
          font-size: 1rem;
          color: #0f172a;
          font-weight: 700;
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }

        .company-location {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        .experience-date {
          background: #f1f5f9;
          color: #475569;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .experience-list {
          padding-left: 0;
          margin: 0;
          list-style: none;
        }

        .experience-list li {
          margin-bottom: 8px;
          line-height: 1.6;
          color: #475569;
          font-size: 0.85rem;
          position: relative;
          padding-left: 18px;
        }

        .experience-list li::before {
          content: '•';
          color: #3b82f6;
          font-size: 1.2rem;
          position: absolute;
          left: 0;
          top: -3px;
        }

        /* Education Section */
        .education-item {
          margin-bottom: 16px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #f1f5f9;
        }

        .education-item:last-child {
          margin-bottom: 0;
        }

        .education-item h4 {
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .institution {
          color: #64748b;
          margin-bottom: 8px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .education-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          border-top: 1px solid #e2e8f0;
          padding-top: 10px;
        }

        .education-year {
          font-size: 0.8rem;
          color: #3b82f6;
        }
        
        .education-year strong {
          color: #475569;
        }

        /* Skills Section */
        .skills-category {
          margin-bottom: 20px;
        }

        .skills-category:last-child {
          margin-bottom: 0;
        }

        .skills-category h4 {
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          background: #ffffff;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 500;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }

        .skill-tag:hover {
          border-color: #3b82f6;
          color: #2563eb;
          background: #eff6ff;
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(59,130,246,0.1);
        }

        /* Additional Information */
        .info-item {
          margin-bottom: 16px;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-item h4 {
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .info-item p {
          margin: 4px 0;
          color: #475569;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        /* Social Links Mini */
        .social-links-mini {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: #ffffff;
          border-radius: 8px;
          text-decoration: none;
          color: #475569;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .social-link:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
        }

        .social-link:hover .social-icon-mini {
          color: #3b82f6;
        }

        .social-icon-mini {
          font-size: 1rem;
          color: #94a3b8;
          transition: color 0.2s ease;
        }

        /* Download Section */
        .download-section {
          text-align: center;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #3b82f6;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.25);
          width: 100%;
          justify-content: center;
        }

        .download-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(59, 130, 246, 0.35);
        }

        /* Footer */
        .resume-footer {
          background: #0f172a;
          color: white;
          text-align: center;
          padding: 30px 0;
          margin-top: 40px;
        }

        .footer-text {
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 20px;
          color: #94a3b8;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-icon-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #f8fafc;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .social-icon-footer:hover {
          background: #3b82f6;
          border-color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .resume-grid {
            gap: 16px;
          }
          
          .name-title h1 {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .resume-grid {
            grid-template-columns: 1fr;
          }
          
          .resume-header {
            padding: 40px 0 25px 0;
          }
          
          .resume-content {
            margin-top: -16px;
            padding-bottom: 30px;
          }
          
          .name-title h1 {
            font-size: 1.8rem;
          }
          
          .name-title h2 {
            font-size: 1rem;
            margin-bottom: 16px;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }
          
          .contact-item {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .experience-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .education-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          
          .resume-section {
            padding: 20px;
            border-radius: 10px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 12px;
          }
          
          .resume-section {
            padding: 16px;
          }
          
          .name-title h1 {
            font-size: 1.5rem;
          }
          
          .portfolio-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;