import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_B64 } from '../assets/images';

export default function About() {
  const navigate = useNavigate();
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [certsOpen, setCertsOpen] = useState(false);

  function toggleCourses() {
    setCoursesOpen(prev => !prev);
  }

  function toggleCerts() {
    setCertsOpen(prev => !prev);
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
              {[
                { name: 'SQL', url: 'https://www.w3schools.com/sql/' },
                { name: 'Python', url: 'https://www.python.org' },
                { name: 'R', url: 'https://www.r-project.org' },
                { name: 'R Studio', url: 'https://posit.co/downloads/' },
                { name: 'SPSS', url: 'https://www.ibm.com/products/spss' },
                { name: 'Google Colab', url: 'https://colab.research.google.com' },
                { name: 'Tableau', url: 'https://www.tableau.com' },
                { name: 'Excel', url: 'https://www.microsoft.com/en-us/microsoft-365/excel' },
                { name: 'PowerPoint', url: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint' },
                { name: 'Word', url: 'https://www.microsoft.com/en-us/microsoft-365/word' },
                { name: 'Google Sheets', url: 'https://sheets.google.com' },
                { name: 'Google Drive', url: 'https://drive.google.com' },
                { name: 'Google Analytics (GA4)', url: 'https://analytics.google.com/' },
                { name: 'Google Ads', url: 'https://ads.google.com' },
                { name: 'Amazon Ads', url: 'https://advertising.amazon.com' },
                { name: 'SEO/SEM', url: 'https://moz.com/learn/seo' },
                { name: 'HubSpot', url: 'https://www.hubspot.com' },
                { name: 'Figma', url: 'https://www.figma.com' },
                { name: 'Canva', url: 'https://www.canva.com' },
                { name: 'Asana', url: 'https://app.asana.com' },
                { name: 'Trello', url: 'https://trello.com' },
                { name: 'Slack', url: 'https://slack.com' },
                { name: 'Meltwater', url: 'https://www.meltwater.com' },
                { name: 'GMS', url: 'https://marketingplatform.google.com' },
                { name: 'Brandwatch', url: 'https://www.brandwatch.com' },
                { name: 'Sprout Social', url: 'https://sproutsocial.com' },
                { name: 'Adobe Creative Suite', url: 'https://www.adobe.com/creativecloud.html' },
                { name: 'HTML', url: 'https://www.w3schools.com/html/' },
                { name: 'CSS', url: 'https://www.w3schools.com/css/' },
                { name: 'JavaScript', url: 'https://www.w3schools.com/js/' },
                { name: 'React', url: 'https://react.dev' },
                { name: 'Node.js', url: 'https://nodejs.org' },
                { name: 'Vite', url: 'https://vitejs.dev' },
                { name: 'Git', url: 'https://git-scm.com' },
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'Netlify', url: 'https://www.netlify.com' },
                { name: 'Google Stitch', url: 'https://cloud.google.com/stitch' },
                { name: 'Claude Code', url: 'https://www.anthropic.com/claude' },
                { name: 'Gemini', url: 'https://gemini.google.com' },
                { name: 'ChatGPT', url: 'https://chat.openai.com' },
                { name: 'Perplexity', url: 'https://www.perplexity.ai' },
              ].map(({ name, url }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="pill-grey">{name}</a>
              ))}
            </div>

            <div className="cert-section">
              <div className="courses-toggle-row" onClick={toggleCerts}>
                <span className="courses-star-btn" style={{ color: '#eb34c0' }}>&#9733;</span>
                <span className="courses-toggle-label">Certifications</span>
              </div>
              <div className={`courses-container${certsOpen ? ' open' : ''}`}>
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
              </div>

              <div className="courses-toggle-row" onClick={toggleCourses}>
                <span className="courses-star-btn" style={{ color: '#eb34c0' }}>&#9733;</span>
                <span className="courses-toggle-label">Coursework</span>
              </div>
              <div className={`courses-container${coursesOpen ? ' open' : ''}`}>
                <div className="course-group">
                  <div className="course-group-label">Marketing &amp; Advertising</div>
                  <div className="course-pills">
                    {['Advanced Media Strategies','Advertising/PR Law & Ethics','Advertising/PR Media Planning','Advertising/PR Research','Brand & Growth Strategy (MS)','Consumer Behavior (MS)','Digital Marketing & Measurement (MS)','Digital Metrics','Integrated Communications Management','Intro to Advertising Creativity','Intro to Advertising/PR Research','Intro to Integrated Brand Comm','Marketing','Marketing Management (MS)','Media Investment','Psychology of Advertising'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Analytics &amp; Data</div>
                  <div className="course-pills">
                    {['Business Analytics','Data Analysis (MS)','Data Analytics & Dynamic Pricing (MS)','Data Visualization & Storytelling (MS)','Market Data & Demand Modeling (MS)','Marketing Analytics I (MS)','Marketing Analytics II (MS)','Marketing Intelligence Capstone (MS)','SQL (MS)','Statistics for Marketing (MS)','Digital Metrics'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Business &amp; Finance</div>
                  <div className="course-pills">
                    {['Clients, Consulting, & Communication (MS)','Design Thinking (MS)','Financial Management (MS)','Foundations of Accounting','Foundations of Business Law & Ethics','Foundations of Finance','Foundations of Information Technology Management','Foundations of Management & Org Behavior','Global Entrepreneurship','Intro to Entrepreneurship','Intro to Entrepreneurship Mindset'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Communications &amp; Media</div>
                  <div className="course-pills">
                    {['Interdisciplinary Comm Foundations','Intro to Comm Foundations','Media in Diverse Society'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Social Sciences &amp; Humanities</div>
                  <div className="course-pills">
                    {['American Government','Federal Government','Philosophies of Life','Race and Medicine','U.S. History 1','U.S. History 2'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Sciences &amp; Math</div>
                  <div className="course-pills">
                    {['Applications of Modern Math','Earthquakes and Disasters','Fundamentals of Nutrition','Introductory Biology I','Principles of Chemistry I'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">Language</div>
                  <div className="course-pills">
                    {['Elementary Spanish 1','Elementary Spanish 2','Intermediate Spanish','Intermediate Comp/Grammar','Intermediate Culture/Media','Intermediate Reading/Conversation'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
                  </div>
                </div>
                <div className="course-group">
                  <div className="course-group-label">General / Core</div>
                  <div className="course-pills">
                    {['Bus Freshman Orientation','Composition 1','Composition 2','Intro to Economics','Transfer Intro Group'].map(c => <span key={c} className={c.includes('(MS)') ? 'course-pill-ms' : 'course-pill'}>{c}</span>)}
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
