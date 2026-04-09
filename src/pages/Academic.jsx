import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects, fileColors, fileExtLabels } from '../data/projects';

function fileIconSVG(color1, color2) {
  return (
    <svg viewBox="0 0 56 66">
      <path d="M4 2h32l16 16v44a4 4 0 01-4 4H4a4 4 0 01-4-4V6a4 4 0 014-4z" fill={color1} />
      <path d="M36 2l16 16H40a4 4 0 01-4-4V2z" fill={color2} opacity="0.6" />
    </svg>
  );
}

function updateClock() {
  const opts = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
  const el = document.getElementById('menuTime');
  if (el) el.textContent = new Date().toLocaleDateString('en-US', opts);
}

export default function Academic() {
  const navigate = useNavigate();
  const [currentFolder, setCurrentFolder] = useState(null);
  const [currentView, setCurrentView] = useState('folder'); // 'folder' | 'project'
  const [currentProjectIdx, setCurrentProjectIdx] = useState(null);
  const [showFinder, setShowFinder] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setShowFinder(false);
        setShowSummary(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  function openFolder(key) {
    setCurrentFolder(key);
    setCurrentView('folder');
    setCurrentProjectIdx(null);
    setShowFinder(true);
  }

  function openProject(key, idx) {
    setCurrentFolder(key);
    setCurrentView('project');
    setCurrentProjectIdx(idx);
  }

  function goBack() {
    if (currentView === 'project') {
      setCurrentView('folder');
      setCurrentProjectIdx(null);
    } else {
      setShowFinder(false);
      setCurrentFolder(null);
    }
  }

  function closeFolder() {
    setShowFinder(false);
    setCurrentFolder(null);
    setCurrentView('folder');
    setCurrentProjectIdx(null);
  }

  const folderData = currentFolder ? projects[currentFolder] : null;
  const colors = currentFolder ? fileColors[currentFolder] : ['#3b82f6', '#60a5fa'];
  const item = (currentView === 'project' && currentFolder && currentProjectIdx !== null)
    ? projects[currentFolder].items[currentProjectIdx]
    : null;

  const finderTitle = item ? item.name : (folderData ? folderData.label : 'Projects');
  const crumbActive = item ? item.name : (folderData ? folderData.label : 'Analytics');

  return (
    <div id="portfolio-view" style={{ display: 'block' }}>
      <div className="wallpaper"></div>
      <div className="menubar">
        <button className="menubar-item menubar-btn" onClick={() => navigate('/')}>&#8249; Back to Home</button>
        <span className="menubar-right" id="menuTime"></span>
      </div>
      <div className="desktop">
        <div className="desktop-title">Academic Projects</div>
        <div className="imac-wrapper">
          <div className="imac-frame">
            <div className="imac-bezel-top"><div className="imac-camera"></div></div>
            <div className="imac-screen">
              <div className="desktop-icons">
                <button className="desktop-icon" onClick={() => openFolder('analytics')}>
                  <div className="folder-icon">
                    <svg viewBox="0 0 90 74"><path className="folder-tab" d="M4 12 L4 6 Q4 2 8 2 L30 2 Q34 2 36 6 L38 12 Z"/><rect className="folder-back" x="2" y="10" width="86" height="58" rx="6"/><rect className="folder-front" x="2" y="18" width="86" height="52" rx="6"/></svg>
                    <span className="folder-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="14" width="4" height="7" rx="1" fill="#2563eb" opacity="0.6"/><rect x="10" y="9" width="4" height="12" rx="1" fill="#2563eb" opacity="0.8"/><rect x="17" y="4" width="4" height="17" rx="1" fill="#2563eb"/></svg></span>
                  </div>
                  <div className="icon-label">Analytics<br/>Projects</div>
                </button>
                <button className="desktop-icon" onClick={() => openFolder('strategy')}>
                  <div className="folder-icon">
                    <svg viewBox="0 0 90 74"><path className="folder-tab" d="M4 12 L4 6 Q4 2 8 2 L30 2 Q34 2 36 6 L38 12 Z"/><rect className="folder-back" x="2" y="10" width="86" height="58" rx="6"/><rect className="folder-front" x="2" y="18" width="86" height="52" rx="6"/></svg>
                    <span className="folder-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" fill="#7c3aed" opacity="0.3"/></svg></span>
                  </div>
                  <div className="icon-label">Strategy<br/>Projects</div>
                </button>
                <button className="desktop-icon" onClick={() => openFolder('extra')}>
                  <div className="folder-icon">
                    <svg viewBox="0 0 90 74"><path className="folder-tab" d="M4 12 L4 6 Q4 2 8 2 L30 2 Q34 2 36 6 L38 12 Z"/><rect className="folder-back" x="2" y="10" width="86" height="58" rx="6"/><rect className="folder-front" x="2" y="18" width="86" height="52" rx="6"/></svg>
                    <span className="folder-badge"><svg viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span>
                  </div>
                  <div className="icon-label">Extra<br/>Work</div>
                </button>
                <button className="desktop-icon" onClick={() => openFolder('resources')}>
                  <div className="folder-icon">
                    <svg viewBox="0 0 90 74"><path className="folder-tab" d="M4 12 L4 6 Q4 2 8 2 L30 2 Q34 2 36 6 L38 12 Z"/><rect className="folder-back" x="2" y="10" width="86" height="58" rx="6"/><rect className="folder-front" x="2" y="18" width="86" height="52" rx="6"/></svg>
                    <span className="folder-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none"/></svg></span>
                  </div>
                  <div className="icon-label">Resources</div>
                </button>
              </div>
            </div>
            <div className="imac-chin"></div>
          </div>
          <div className="imac-stand"></div>
          <div className="imac-base"></div>
        </div>
      </div>

      {/* Finder */}
      <div
        className={`finder-overlay${showFinder ? ' show' : ''}`}
        onClick={closeFolder}
      ></div>
      <div className={`finder-window${showFinder ? ' show' : ''}`}>
        <div className="finder-toolbar">
          <div className="traffic-lights">
            <button className="traffic-light tl-red" onClick={closeFolder} aria-label="Close"></button>
            <button className="traffic-light tl-yellow" aria-label="Minimize"></button>
            <button className="traffic-light tl-green" aria-label="Maximize"></button>
          </div>
          <div className="finder-nav">
            <button
              className="finder-nav-btn"
              style={{ opacity: currentView === 'project' ? '1' : '0.4' }}
              onClick={currentView === 'project' ? goBack : undefined}
              aria-label="Back"
            >
              &#8249;
            </button>
            <button className="finder-nav-btn" style={{ opacity: '0.4' }} aria-label="Forward">&#8250;</button>
          </div>
          <div className="finder-title">{finderTitle}</div>
          <div style={{ width: '60px' }}></div>
        </div>
        <div className="finder-breadcrumb">
          <span className="crumb" onClick={currentView === 'project' ? goBack : undefined}>Academic Projects</span>
          <span className="crumb-sep">&#8250;</span>
          <span className="crumb-active">{crumbActive}</span>
        </div>
        <div className="finder-content">
          {currentView === 'folder' && folderData && (
            <div className="file-grid">
              {folderData.items.map((it, i) => (
                <div
                  key={i}
                  className="file-item"
                  onClick={() => openProject(currentFolder, i)}
                >
                  <div className="file-icon">
                    {fileIconSVG(colors[0], colors[1])}
                    <span className="file-ext">{fileExtLabels[currentFolder]}</span>
                  </div>
                  <div className="file-label">{it.name}</div>
                </div>
              ))}
            </div>
          )}
          {currentView === 'project' && item && (
            <div className="project-detail">
              <div className="project-detail-header">
                <div className="project-detail-icon">
                  {fileIconSVG(colors[0], colors[1])}
                </div>
                <div>
                  <div className="project-detail-name">{item.name}</div>
                  <div className="project-detail-desc">{item.desc}</div>
                </div>
              </div>
              <div className="project-detail-links">
                <div className="project-detail-links-label">Open With &#8599;</div>
                {item.links.map((link, li) => (
                  <a
                    key={li}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-row"
                  >
                    <div className="project-link-icon" style={{ background: `linear-gradient(135deg,${colors[0]},${colors[1]})` }}>&#8599;</div>
                    <div>
                      <div className="project-link-label">{link.label}</div>
                      <div className="project-link-sub">Opens in new tab</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Summary Overlay */}
      <div
        className={`summary-overlay${showSummary ? ' show' : ''}`}
        onClick={e => { if (e.target === e.currentTarget) setShowSummary(false); }}
      >
        <div className="summary-card">
          <div className="summary-topbar">
            <span className="summary-topbar-title">Summary of Work</span>
            <button className="summary-close" onClick={() => setShowSummary(false)}>&times;</button>
          </div>
          <div className="summary-body">
            <div className="summary-name">Angel "Trey" Carrillo</div>
            <div className="summary-tagline">M.S. Marketing, McCombs &mdash; B.S. Advertising, Moody &mdash; BDP Innovation, Creativity &amp; Entrepreneurship<br/>Exploring the intersection of business, communication, and data.</div>

            <div className="summary-divider"></div>
            <div className="summary-section-title">Experience</div>
            <div className="summary-exp">
              <div className="summary-exp-dot"></div>
              <div className="summary-exp-content">
                <div className="summary-exp-role">Marketing Assistant &mdash; Texas Athletics</div>
                <div className="summary-exp-place">Full-funnel marketing, <span className="sh">SEO/SEM</span>, targeted advertising, smart nudges, and the Texas 100% Club incentive program.</div>
              </div>
            </div>
            <div className="summary-exp">
              <div className="summary-exp-dot" style={{ background: '#73B9FA' }}></div>
              <div className="summary-exp-content">
                <div className="summary-exp-role">Account Services Intern &mdash; Steel Advertising</div>
                <div className="summary-exp-place">Client-facing account work, creative brief development, and campaign execution.</div>
              </div>
            </div>
            <div className="summary-exp">
              <div className="summary-exp-dot" style={{ background: '#34d399' }}></div>
              <div className="summary-exp-content">
                <div className="summary-exp-role">Texas Media &amp; Analytics</div>
                <div className="summary-exp-place">Advanced media strategies coursework with <span className="sh">LERMA/</span> agency partnership. Work with <span className="sh-blue">Meltwater</span>, <span className="sh-blue">Brandwatch</span>, and <span className="sh-blue">GMS</span>.</div>
              </div>
            </div>

            <div className="summary-divider"></div>
            <div className="summary-section-title">Highlighted Projects</div>

            <div className="summary-project"><div className="summary-project-name">News Headline Classification &mdash; 240K+ rows</div><div className="summary-project-why">Built and compared <span className="sh">Naive Bayes</span>, <span className="sh">Logistic Regression</span>, and <span className="sh">Random Forest</span> classifiers in <span className="sh-blue">R Studio</span> to categorize news headlines by subject. Demonstrates large-scale data wrangling and ML pipeline thinking.</div></div>
            <div className="summary-project"><div className="summary-project-name">Bowl Game Win Predictor</div><div className="summary-project-why"><span className="sh">Logistic regression</span> model trained on 2013&ndash;2019 season stats, tested on 2020&ndash;2021 data. Achieved <span className="sh-green">0.68 AUC</span> &mdash; profitable if used for betting. Demonstrates predictive modeling and model evaluation.</div></div>
            <div className="summary-project"><div className="summary-project-name">Tableau Analytics Portfolio &mdash; 5 Dashboards</div><div className="summary-project-why">Interactive <span className="sh-blue">Tableau</span> dashboards covering customer segmentation, business performance, and marketing analytics. Each downloadable. Directly applicable to consulting deliverables and client reporting.</div></div>
            <div className="summary-project"><div className="summary-project-name">Consumer Choice &amp; Conjoint Modeling</div><div className="summary-project-why"><span className="sh">Multinomial logit</span> models estimating purchase probabilities. Found wild-caught fish commands higher WTP; GM attributes dropped salmon share from 11% to 4%. Conjoint analysis for nightclub pricing showed EDM + bottle service maximizes market share.</div></div>
            <div className="summary-project"><div className="summary-project-name">Warby Parker Growth Strategy</div><div className="summary-project-why">Data-informed <span className="sh">market penetration</span> plan with consumer segmentation, audience analysis, and <span className="sh-green">financial projections</span> to support expansion. Full consulting-style strategy deliverable.</div></div>
            <div className="summary-project"><div className="summary-project-name">Ocean Spray Year-Round Repositioning</div><div className="summary-project-why">Campaign targeting "Trailblazer" millennials with <span className="sh-green">814M impression</span> goal. Redefining brand relevance beyond holiday season. Media planning at scale with household penetration strategy.</div></div>
            <div className="summary-project"><div className="summary-project-name">Pacnet $6M Investment Analysis</div><div className="summary-project-why">Evaluated market potential, business model risks, competitive landscape, and acquisition viability. Recommended <span className="sh-green">$6M investment</span> based on growth projections and IPO/acquisition return prospects.</div></div>
            <div className="summary-project"><div className="summary-project-name">Predictive Targeting Model</div><div className="summary-project-why"><span className="sh">Probability scoring</span> and profit calculation for targeting decisions using <span className="sh-blue">logistic regression</span>. Targeted strategies based on hotline activity and demographics led to significantly higher predicted profit vs. untargeted.</div></div>

            <div className="summary-divider"></div>
            <div className="summary-section-title">Additional Work</div>
            <div className="summary-text">
              <strong>Media Strategy:</strong> Round Rock Honey retail expansion into Asheville, NC. Salvation Army donor engagement campaign with measurable goals (5% donation increase, 14% volunteer boost, 10% monthly donor growth).<br/><br/>
              <strong>Research &amp; Policy:</strong> GDPR compliance analysis, DTC pharmaceutical advertising impact study, trademark law foundations.<br/><br/>
              <strong>Entrepreneurship:</strong> AI-powered meal planning startup exec summary with <span className="sh">freemium/premium</span> model and <span className="sh-green">5-month break-even</span> projection.<br/><br/>
              <strong>Editorial:</strong> Hook&rsquo;d Magazine &mdash; &ldquo;Twisting Tradition&rdquo; on cultural conformity, &ldquo;Mr. UT Austin&rdquo; student fashion feature.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
