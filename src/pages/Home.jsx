import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGO_B64, BG_B64 } from '../assets/images';

export default function Home() {
  const navigate = useNavigate();
  const nudgeTimers = useRef([]);
  const clicked = useRef(false);

  useEffect(() => {
    clicked.current = false;

    function doNudge() {
      if (clicked.current) return;
      const btns = document.querySelectorAll('.home-nav-btn');
      btns.forEach(b => b.classList.add('nudge'));
      setTimeout(() => btns.forEach(b => b.classList.remove('nudge')), 500);
    }

    nudgeTimers.current.push(setTimeout(() => doNudge(), 4000));
    nudgeTimers.current.push(setTimeout(() => doNudge(), 8000));
    nudgeTimers.current.push(setTimeout(() => doNudge(), 13000));

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
          style={{ '--bg-image': `url("${BG_B64}")` }}
        >
          <a onClick={() => { handleNavClick(); navigate('/fun'); }} style={{ cursor: 'pointer' }}>
            <img className="portfolio-logo" src={LOGO_B64} alt="Portfolio Logo" />
          </a>
          <div className="home-nav-buttons">
            <a
              className="home-nav-btn btn-white"
              onClick={() => { handleNavClick(); navigate('/academic'); }}
              style={{ cursor: 'pointer' }}
            >
              Academic Portfolio
            </a>
            <a
              className="home-nav-btn btn-yellow"
              onClick={() => { handleNavClick(); navigate('/fun'); }}
              style={{ cursor: 'pointer' }}
            >
              Fun
            </a>
            <a
              className="home-nav-btn btn-white"
              href="https://drive.google.com/file/d/1dmrzjU0j6ehQBAICJ50X3NJXDC3_Fza5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              Resume
            </a>
            <a
              className="home-nav-btn btn-blue"
              onClick={() => { handleNavClick(); navigate('/about'); }}
              style={{ cursor: 'pointer' }}
            >
              Trey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
