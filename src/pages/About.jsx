import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_B64 } from '../assets/images';

export default function About() {
  const navigate = useNavigate();
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [starSpin, setStarSpin] = useState(false);
  const starRef = useRef(null);

  function toggleCourses() {
    setCoursesOpen(prev => !prev);
    setStarSpin(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setStarSpin(true));
    });
  }

  function handleStarAnimEnd() {
    setStarSpin(false);
  }

  return (
    <div id="about-view" style={{ display: 'block' }}>
      <div className="about-topbar">
        <span>Angel &ldquo;Trey&rdquo; Carrillo</span>
      </div>
      <div className="about-container">
        <button className="about-back-btn" onClick={() => navigate('/')}>&#8592; Back</button>
        <div className="about-grid">
          <div className="about-content">
            <div className="pill-group">
              <a href="https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-marketing/" target="_blank" rel="noopener noreferrer" className="pill-orange">TEXAS MCCOMBS</a>
              <a href="https://moody.utexas.edu" target="_blank" rel="noopener noreferrer" className="pill-orange">TEXAS MOODY</a>
              <a href="https://advertising.utexas.edu/texas-media/about" target="_blank" rel="noopener noreferrer" className="pill-orange">TEXAS MEDIA &amp; ANALYTICS</a>
              <a href="https://undergraduates.utexas.edu/academics/bridging-disciplines-programs" target="_blank" rel="noopener noreferrer" className="pill-orange">BDP</a>
            </div>
            <div className="pill-group">
              <div className="pill-grey">SQL</div><div className="pill-grey">Python</div><div className="pill-grey">R</div>
              <div className="pill-grey">Google Colab</div><div className="pill-grey">Tableau</div><div className="pill-grey">Hubspot</div>
              <div className="pill-grey">Figma</div><div className="pill-grey">Canva</div><div className="pill-grey">Microsoft</div>
              <div className="pill-grey">Asana</div><div className="pill-grey">Meltwater</div><div className="pill-grey">GMS</div>
              <div className="pill-grey">Brandwatch</div><div className="pill-grey">Claude Code</div><div className="pill-grey">Gemini</div>
              <div className="pill-grey">ChatGPT</div><div className="pill-grey">Perplexity</div>
            </div>

            <div className="cert-section">
              <div className="cert-section-heading">Certifications</div>
              <div className="cert-grid">
                <div className="cert-card"><img className="cert-logo" src="https://www.google.com/favicon.ico" alt="Google"/><div className="cert-info"><div className="cert-name">Dive Deeper into GA4 Data and Reports</div><div className="cert-issuer">Google</div></div></div>
                <div className="cert-card"><img className="cert-logo" src="https://www.hubspot.com/favicon.ico" alt="HubSpot"/><div className="cert-info"><div className="cert-name">Digital Marketing</div><div className="cert-issuer">HubSpot Academy</div></div></div>
                <div className="cert-card"><img className="cert-logo" src="https://www.hubspot.com/favicon.ico" alt="HubSpot"/><div className="cert-info"><div className="cert-name">HubSpot Inbound Marketing Certification</div><div className="cert-issuer">HubSpot Academy</div></div></div>
                <div className="cert-card"><img className="cert-logo" src="https://www.linkedin.com/favicon.ico" alt="LinkedIn"/><div className="cert-info"><div className="cert-name">Communication Foundations</div><div className="cert-issuer">LinkedIn</div></div></div>
                <div className="cert-card"><img className="cert-logo" src="https://www.linkedin.com/favicon.ico" alt="LinkedIn"/><div className="cert-info"><div className="cert-name">External Communication Skills for Leaders</div><div className="cert-issuer">LinkedIn</div></div></div>
                <div className="cert-card"><img className="cert-logo" src="https://www.linkedin.com/favicon.ico" alt="LinkedIn"/><div className="cert-info"><div className="cert-name">Public Relations (PR) Foundations</div><div className="cert-issuer">LinkedIn</div></div></div>
                <div className="cert-card"><img className="cert-logo" src="https://www.coursera.org/favicon.ico" alt="Coursera"/><div className="cert-info"><div className="cert-name">Foundations of User Experience Design</div><div className="cert-issuer">Coursera</div></div></div>
                <div className="cert-card"><img className="cert-logo" src="https://www.coursera.org/favicon.ico" alt="Coursera"/><div className="cert-info"><div className="cert-name">Introduction to Microsoft Excel</div><div className="cert-issuer">Coursera</div></div></div>
                <div className="cert-card cert-expired"><img className="cert-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon"/><div className="cert-info"><div className="cert-name">Amazon Ads Foundations Certification</div><div className="cert-issuer">Amazon</div></div><span className="cert-expired-badge">Expired</span></div>
                <div className="cert-card cert-expired"><img className="cert-logo" src="https://www.amazon.com/favicon.ico" alt="Amazon"/><div className="cert-info"><div className="cert-name">Amazon Sponsored Ads Certification</div><div className="cert-issuer">Amazon</div></div><span className="cert-expired-badge">Expired</span></div>
                <div className="cert-card cert-expired"><img className="cert-logo" src="https://www.google.com/favicon.ico" alt="Google"/><div className="cert-info"><div className="cert-name">AI-Powered Shopping Ads Certification</div><div className="cert-issuer">Google</div></div><span className="cert-expired-badge">Expired</span></div>
                <div className="cert-card cert-expired"><img className="cert-logo" src="https://www.google.com/favicon.ico" alt="Google"/><div className="cert-info"><div className="cert-name">Google Analytics Certification</div><div className="cert-issuer">Google</div></div><span className="cert-expired-badge">Expired</span></div>
                <div className="cert-card cert-expired"><img className="cert-logo" src="https://www.google.com/favicon.ico" alt="Google"/><div className="cert-info"><div className="cert-name">Google Ads Search Certification</div><div className="cert-issuer">Google</div></div><span className="cert-expired-badge">Expired</span></div>
              </div>

              <div className="courses-toggle-row" onClick={toggleCourses}>
                <span
                  ref={starRef}
                  className={`courses-star-btn${starSpin ? ' spin-once' : ''}`}
                  onAnimationEnd={handleStarAnimEnd}
                >&#9733;</span>
                <span className="courses-toggle-label">Coursework</span>
              </div>
              <div className={`courses-container${coursesOpen ? ' open' : ''}`}>
                <div className="course-group">
                  <div className="course-group-label">Marketing &amp; Advertising</div>
                  <div className="course-pills">
                    {['Advanced Media Strategies','Advertising/PR Law & Ethics','Advertising/PR Media Planning','Advertising/PR Research','Digital Metrics','Integrated Communications Management','Intro to Advertising Creativity','Intro to Advertising/PR Research','Intro to Integrated Brand Comm','Marketing','Marketing Management (MS)','Media Investment','Psychology of Advertising'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Analytics &amp; Data</div>
                  <div className="course-pills">
                    {['Business Analytics','Statistics for Marketing (MS)','Digital Metrics'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Business &amp; Finance</div>
                  <div className="course-pills">
                    {['Financial Management (MS)','Foundations of Accounting','Foundations of Business Law & Ethics','Foundations of Finance','Foundations of Information Technology Management','Foundations of Management & Org Behavior','Global Entrepreneurship','Intro to Entrepreneurship','Intro to Entrepreneurship Mindset'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Communications &amp; Media</div>
                  <div className="course-pills">
                    {['Interdisciplinary Comm Foundations','Intro to Comm Foundations','Media in Diverse Society'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Social Sciences &amp; Humanities</div>
                  <div className="course-pills">
                    {['American Government','Federal Government','Philosophies of Life','Race and Medicine','U.S. History 1','U.S. History 2'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Sciences &amp; Math</div>
                  <div className="course-pills">
                    {['Applications of Modern Math','Earthquakes and Disasters','Fundamentals of Nutrition','Introductory Biology I','Principles of Chemistry I'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Language</div>
                  <div className="course-pills">
                    {['Elementary Spanish 1','Elementary Spanish 2','Intermediate Spanish','Intermediate Comp/Grammar','Intermediate Culture/Media','Intermediate Reading/Conversation'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">General / Core</div>
                  <div className="course-pills">
                    {['Bus Freshman Orientation','Composition 1','Composition 2','Intro to Economics','Transfer Intro Group'].map(c => <span key={c} className="course-pill">{c}</span>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="about-bio">
              I believe in the pursuit of knowledge as a way to fulfill my own curiosity and make a difference in any business landscape. I&rsquo;m looking to meet people who have the capacity to envision a better future and the perseverance to bring their ideas to life.
            </div>
            <div className="about-stars">
              <a href="https://www.linkedin.com/in/angeltreycarrillo/" target="_blank" rel="noopener noreferrer" className="about-star-link">
                <svg viewBox="0 0 24 24" style={{ pointerEvents: 'none' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span style={{ pointerEvents: 'none' }}>LINKEDIN</span>
              </a>
              <a href="https://drive.google.com/file/d/1dmrzjU0j6ehQBAICJ50X3NJXDC3_Fza5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="about-star-link">
                <svg viewBox="0 0 24 24" style={{ pointerEvents: 'none' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span style={{ pointerEvents: 'none' }}>RESUME</span>
              </a>
            </div>
            <div className="about-contact-card">
              <h2>CONTACT ME</h2>
              <div className="contact-role">PERSONAL</div>
              <a href="mailto:2021trey@gmail.com" className="contact-email">2021TREY@GMAIL.COM</a>
              <div className="contact-role">SCRAPPY</div>
              <a href="mailto:scrappymagazine@yahoo.com" className="contact-email" style={{ color: '#63A76A' }}>SCRAPPYMAGAZINE@YAHOO.COM</a>
            </div>
            <img src={PHOTO_B64} alt="Trey Carrillo" style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover', marginTop: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
