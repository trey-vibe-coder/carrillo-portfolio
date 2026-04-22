import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const nudgeTimers = useRef([]);
  const clicked = useRef(false);

  const NUDGE_DELAYS_MS = [4000, 8000, 13000];
  const NUDGE_DURATION_MS = 500;

  useEffect(() => {
    clicked.current = false;

    function doNudge() {
      if (clicked.current) return;
      const btns = document.querySelectorAll('.home-nav-btn');
      btns.forEach(b => b.classList.add('nudge'));
      setTimeout(() => btns.forEach(b => b.classList.remove('nudge')), NUDGE_DURATION_MS);
    }

    NUDGE_DELAYS_MS.forEach(delay => {
      nudgeTimers.current.push(setTimeout(() => doNudge(), delay));
    });

    return () => {
      nudgeTimers.current.forEach(t => clearTimeout(t));
      nudgeTimers.current = [];
    };
  }, []);

  function handleNavClick() {
    clicked.current = true;
    nudgeTimers.current.forEach(t => clearTimeout(t));
  }

  return (
    <div id="home-view">
      <div className="poster-container">
        <div
          className="photo-hero"
          style={{ '--bg-image': 'url("/images/bg.jpeg")' }}
        >
          <button onClick={() => { handleNavClick(); navigate('/fun'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <img className="portfolio-logo" src="/images/logo.png" alt="Portfolio Logo" />
          </button>
          <div className="home-nav-buttons">
            <button
              className="home-nav-btn btn-white"
              onClick={() => { handleNavClick(); navigate('/academic'); }}
            >
              Academic Projects
            </button>
            <button
              className="home-nav-btn btn-yellow"
              onClick={() => { handleNavClick(); navigate('/fun'); }}
            >
              Fun
            </button>
            <a
              className="home-nav-btn btn-white"
              href="https://docs.google.com/document/d/1osHT61BwnqNl9a6ivZ_F-_lX6jmwxiI6czylxosOR3Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              Resume
            </a>
            <div style={{ position: 'relative' }}>
              <a
                href="https://github.com/trey-vibe-coder"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="github-icon-link"
                style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '14px', display: 'flex' }}
              >
                <svg viewBox="0 0 98 96" style={{ width: '46px', height: '46px', fill: '#000000' }} xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                </svg>
              </a>
              <button
                className="home-nav-btn btn-blue"
                onClick={() => { handleNavClick(); navigate('/about'); }}
              >
                Trey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
