import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FunPage() {
  const navigate = useNavigate();
  const [showFunPopup, setShowFunPopup] = useState(false);
  const [showRickroll, setShowRickroll] = useState(false);
  const funClicked = useRef(false);
  const rickrollTimer = useRef(null);

  useEffect(() => {
    funClicked.current = false;
    setShowRickroll(false);

    const funPopupTimer = setTimeout(() => {
      setShowFunPopup(true);
    }, 5000);

    rickrollTimer.current = setTimeout(() => {
      if (!funClicked.current) {
        setShowRickroll(true);
      }
    }, 15000);

    return () => {
      clearTimeout(funPopupTimer);
      if (rickrollTimer.current) clearTimeout(rickrollTimer.current);
    };
  }, []);

  function handleViewClick(e) {
    if (
      e.target.closest('.win95-rickroll') ||
      e.target.closest('.win95-popup') ||
      e.target.closest('.win95-close-btn') ||
      e.target.closest('.win95-btn')
    ) return;
    funClicked.current = true;
  }

  return (
    <div id="fun-view" style={{ display: 'block' }} onClick={handleViewClick}>
      <div className="fun-back-btn" onClick={() => navigate('/')}>&#8249; Back to Home</div>
      <button className="retro-btn" onClick={() => navigate('/fun/list')}>See in different view</button>

      {showFunPopup && (
        <div className="win95-popup" id="funPopup">
          <div className="win95-titlebar">
            <span>System message</span>
            <div className="win95-close-btn" onClick={() => setShowFunPopup(false)}>X</div>
          </div>
          <div className="win95-body">
            <div className="win95-text-content">
              <span className="green-text">like cool $hiz?!</span> are you scrappy? email me at{' '}
              <a href="mailto:scrappymagazine@yahoo.com" className="yellow-link">scrappymagazine@yahoo.com</a>{' '}
              and let&rsquo;s chat.{' '}
              <a href="https://www.reddit.com/r/salesforce/comments/xvr23e/if_your_ceo_called_you_scrappy_would_you_take_it/" target="_blank" rel="noopener noreferrer" className="white-link">urban dictionary</a>{' '}
              <a href="https://www.google.com/search?q=scrappy+doo" target="_blank" rel="noopener noreferrer" className="white-link">scrappy</a>
            </div>
            <div className="win95-buttons">
              <button className="win95-btn" onClick={() => setShowFunPopup(false)}>Ok</button>
            </div>
          </div>
        </div>
      )}

      <div className="floating-star" style={{ animation: 'float1 35s infinite linear' }}>
        <a href="https://troots-trivia.netlify.app/" target="_blank" rel="noopener noreferrer" className="spinning-content trivia">
          <svg className="star-svg size-trivia" style={{ animation: 'spin 12s infinite linear' }} viewBox="0 0 24 24"><path d="M12 1 L15 6 L22 3 L18 10 L23 16 L16 16 L15 23 L10 17 L3 22 L6 14 L1 9 L8 7 L5 1 L11 5 Z"/></svg>
          <div className="star-text" style={{ animation: 'spin 25s infinite linear reverse' }}>Trivia Game</div>
        </a>
      </div>
      <div className="floating-star" style={{ animation: 'float2 40s infinite linear' }}>
        <a href="https://trey17.pixieset.com/bookone/" target="_blank" rel="noopener noreferrer" className="spinning-content pixieset">
          <svg className="star-svg size-pixie" style={{ animation: 'spin 18s infinite linear reverse' }} viewBox="0 0 24 24"><path d="M7.5 0 L11 7 L20 4 L14 12 L22 17 L13 18 L12 24 L8 17 L0 21 L4 12 L0 5 L8 8 Z"/></svg>
          <div className="star-text" style={{ animation: 'spin 16s infinite linear' }}>Pixieset</div>
        </a>
      </div>
      <div className="floating-star" style={{ animation: 'float3 38s infinite linear' }}>
        <a href="https://www.instagram.com/treycarrilloo/" target="_blank" rel="noopener noreferrer" className="spinning-content instagram">
          <svg className="star-svg size-insta" style={{ animation: 'spin 15s infinite linear' }} viewBox="0 0 24 24"><path d="M12 0 L14 6 L20 2 L17 9 L24 12 L17 15 L20 22 L14 18 L12 24 L10 18 L4 22 L7 15 L0 12 L7 9 L4 2 L10 6 Z"/></svg>
          <div className="star-text" style={{ animation: 'spin 22s infinite linear reverse' }}>Instagram</div>
        </a>
      </div>
      <div className="floating-star" style={{ animation: 'float4 45s infinite linear' }}>
        <a href="https://heyzine.com/flip-book/163fac3150.html" target="_blank" rel="noopener noreferrer" className="spinning-content scrappy">
          <svg className="star-svg size-scrappy" style={{ animation: 'spin 20s infinite linear reverse' }} viewBox="0 0 24 24"><path d="M12 0 L15 7 L24 6 L18 12 L22 20 L14 16 L12 24 L10 16 L2 20 L6 12 L0 6 L9 7 Z"/></svg>
          <div className="star-text" style={{ animation: 'spin 10s infinite linear' }}>Scrappy W.I.P</div>
        </a>
      </div>
      <div className="floating-star" style={{ animation: 'float5 42s infinite linear' }}>
        <a href="https://uxdesign.cc/a-letter-from-sol-lewitt-about-creative-block-read-by-benedict-cumberbatch-66378ee6ef60" target="_blank" rel="noopener noreferrer" className="spinning-content creative">
          <svg className="star-svg size-creative" style={{ animation: 'spin 14s infinite linear' }} viewBox="0 0 24 24"><path d="M12 0 L15 8 L24 6 L18 13 L22 22 L13 18 L8 24 L7 15 L0 12 L7 9 L4 1 L10 6 Z"/></svg>
          <div className="star-text" style={{ animation: 'spin 26s infinite linear reverse' }}>Creative Block</div>
        </a>
      </div>
      <div className="floating-star" style={{ animation: 'float6 48s infinite linear' }}>
        <a href="https://www.reddit.com/r/Jung/comments/1aiztve/carl_jung_the_world_will_ask_who_you_are_and_if/" target="_blank" rel="noopener noreferrer" className="spinning-content jung">
          <svg className="star-svg size-jung" style={{ animation: 'spin 17s infinite linear reverse' }} viewBox="0 0 24 24"><path d="M12 0 L15 7 L23 5 L18 12 L22 20 L14 17 L10 24 L8 16 L0 14 L7 10 L3 2 L10 6 Z"/></svg>
          <div className="star-text" style={{ animation: 'spin 19s infinite linear' }}>r/Jung</div>
        </a>
      </div>
      <div className="floating-star" style={{ animation: 'float7 43s infinite linear' }}>
        <div className="spinning-content">
          <svg className="star-svg size-livewire" style={{ animation: 'spin 16s infinite linear' }} viewBox="0 0 24 24"><path d="M12 0 L10 8 L2 5 L7 12 L0 17 L9 16 L8 24 L12 18 L16 24 L15 16 L24 17 L17 12 L22 5 L14 8 Z" fill="#7ff16d"/></svg>
          <div className="star-text" style={{ animation: 'spin 21s infinite linear reverse', color: '#7ff16d' }}>LIVEWIRE</div>
        </div>
      </div>

      {showRickroll && (
        <div className="win95-rickroll" id="rickrollPopup" style={{ display: 'flex' }}>
          <div className="rickroll-titlebar">
            <span>&#9888; Lucky.exe</span>
            <div className="win95-close-btn" onClick={() => setShowRickroll(false)}>X</div>
          </div>
          <div className="rickroll-body">
            <div className="rickroll-icon">&#127808; &#9733; &#127808;</div>
            <div className="rickroll-msg">click here if you&rsquo;re feeling lucky :)</div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="rickroll-btn">I&rsquo;m Feeling Lucky</a>
          </div>
        </div>
      )}
    </div>
  );
}
