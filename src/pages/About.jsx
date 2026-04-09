import { useState } from 'react';
import { education, skills, certifications, courses, contact, links } from '../data/about';
import BackButton from '../components/BackButton';

export default function About() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [certsOpen, setCertsOpen] = useState(false);

  return (
    <div id="about-view" style={{ display: 'block' }}>
      <div className="about-topbar">
        <span>Angel &ldquo;Trey&rdquo; Carrillo</span>
      </div>
      <div className="about-container">
        <BackButton to="/" label="← Back" />
        <div className="about-grid">
          <div className="about-content">

            <div className="pill-group">
              {education.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="pill-orange">{label}</a>
              ))}
            </div>

            <div className="pill-group">
              {skills.map(({ name, url }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="pill-grey">{name}</a>
              ))}
            </div>

            <div className="cert-section">
              <button className="courses-toggle-row" onClick={() => setCertsOpen(prev => !prev)}>
                <span className="courses-star-btn" style={{ color: '#eb34c0' }}>&#9733;</span>
                <span className="courses-toggle-label">Certifications</span>
              </button>
              <div className={`courses-container${certsOpen ? ' open' : ''}`}>
                <div className="cert-grid">
                  {certifications.map(({ name, issuer, favicon, expired }) => (
                    <div key={name} className={`cert-card${expired ? ' cert-expired' : ''}`}>
                      <img className="cert-logo" src={favicon} alt={issuer} />
                      <div className="cert-info">
                        <div className="cert-name">{name}</div>
                        <div className="cert-issuer">{issuer}</div>
                      </div>
                      {expired && <span className="cert-expired-badge">Expired</span>}
                    </div>
                  ))}
                </div>
              </div>

              <button className="courses-toggle-row" onClick={() => setCoursesOpen(prev => !prev)}>
                <span className="courses-star-btn" style={{ color: '#eb34c0' }}>&#9733;</span>
                <span className="courses-toggle-label">Coursework</span>
              </button>
              <div className={`courses-container${coursesOpen ? ' open' : ''}`}>
                {courses.map(({ category, items }) => (
                  <div key={category} className="course-group">
                    <div className="course-group-label">{category}</div>
                    <div className="course-pills">
                      {items.map(c => (
                        <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-bio">
              I believe in the pursuit of knowledge as a way to fulfill my own curiosity and make a difference in any business landscape. I&rsquo;m looking to meet people who have the capacity to envision a better future and the perseverance to bring their ideas to life.
            </div>

            <div className="about-stars">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="about-star-link">
                <svg viewBox="0 0 24 24" style={{ pointerEvents: 'none' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span style={{ pointerEvents: 'none' }}>LINKEDIN</span>
              </a>
              <a href={links.resume} target="_blank" rel="noopener noreferrer" className="about-star-link">
                <svg viewBox="0 0 24 24" style={{ pointerEvents: 'none' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span style={{ pointerEvents: 'none' }}>RESUME</span>
              </a>
            </div>

            <div className="about-contact-card">
              <h2>CONTACT ME</h2>
              <div className="contact-role">PERSONAL</div>
              <a href={`mailto:${contact.personal}`} className="contact-email">{contact.personal.toUpperCase()}</a>
              <div className="contact-role">SCRAPPY</div>
              <a href={`mailto:${contact.scrappy}`} className="contact-email" style={{ color: '#63A76A' }}>{contact.scrappy.toUpperCase()}</a>
            </div>

            <img src="/images/photo.jpeg" alt="Trey Carrillo" className="about-photo" />
          </div>
        </div>
      </div>
    </div>
  );
}
