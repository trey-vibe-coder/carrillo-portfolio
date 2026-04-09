import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Win95Popup, Win95Rickroll } from '../components/Win95Popup';
import BackButton from '../components/BackButton';

const FUN_POPUP_DELAY_MS = 5000;
const RICKROLL_DELAY_MS = 15000;

const stars = [
  {
    href: 'https://troots-trivia.netlify.app/',
    label: 'Trivia Game',
    className: 'trivia',
    size: 'size-trivia',
    svgPath: 'M12 1 L15 6 L22 3 L18 10 L23 16 L16 16 L15 23 L10 17 L3 22 L6 14 L1 9 L8 7 L5 1 L11 5 Z',
    fill: '#00F028',
    spinDuration: '12s',
    textSpinDuration: '25s',
    duration: '35s',
    fx: ['-30vw', '30vw', '10vw', '-20vw'],
    fy: ['-30vh', '30vh', '-20vh', '40vh'],
    desc: 'A fun custom trivia game to test your knowledge.',
  },
  {
    href: 'https://trey17.pixieset.com/bookone/',
    label: 'Pixieset',
    className: 'pixieset',
    size: 'size-pixie',
    svgPath: 'M7.5 0 L11 7 L20 4 L14 12 L22 17 L13 18 L12 24 L8 17 L0 21 L4 12 L0 5 L8 8 Z',
    fill: '#F09FE8',
    spinDuration: '18s',
    textSpinDuration: '16s',
    spinReverse: true,
    duration: '40s',
    fx: ['30vw', '-40vw', '20vw', '40vw'],
    fy: ['30vh', '10vh', '-40vh', '-10vh'],
    desc: 'Some of my film.',
  },
  {
    href: 'https://www.instagram.com/treycarrilloo/',
    label: 'Instagram',
    className: 'instagram',
    size: 'size-insta',
    svgPath: 'M12 0 L14 6 L20 2 L17 9 L24 12 L17 15 L20 22 L14 18 L12 24 L10 18 L4 22 L7 15 L0 12 L7 9 L4 2 L10 6 Z',
    fill: '#EE4932',
    spinDuration: '15s',
    textSpinDuration: '22s',
    duration: '38s',
    fx: ['0vw', '40vw', '-30vw', '-40vw'],
    fy: ['-40vh', '40vh', '20vh', '-20vh'],
    desc: 'See who I hang out with.',
  },
  {
    href: 'https://heyzine.com/flip-book/163fac3150.html',
    label: 'Scrappy W.I.P',
    className: 'scrappy',
    size: 'size-scrappy',
    svgPath: 'M12 0 L15 7 L24 6 L18 12 L22 20 L14 16 L12 24 L10 16 L2 20 L6 12 L0 6 L9 7 Z',
    fill: '#009DF0',
    spinDuration: '20s',
    textSpinDuration: '10s',
    spinReverse: true,
    duration: '45s',
    fx: ['-40vw', '-10vw', '40vw', '10vw'],
    fy: ['40vh', '-40vh', '20vh', '40vh'],
    desc: 'Work in progress digital flipbook / magazine.',
  },
  {
    href: 'https://uxdesign.cc/a-letter-from-sol-lewitt-about-creative-block-read-by-benedict-cumberbatch-66378ee6ef60',
    label: 'Creative Block',
    className: 'creative',
    size: 'size-creative',
    svgPath: 'M12 0 L15 8 L24 6 L18 13 L22 22 L13 18 L8 24 L7 15 L0 12 L7 9 L4 1 L10 6 Z',
    fill: '#E35866',
    spinDuration: '14s',
    textSpinDuration: '26s',
    duration: '42s',
    fx: ['20vw', '-20vw', '-40vw', '30vw'],
    fy: ['-30vh', '20vh', '-10vh', '40vh'],
    desc: 'A letter from Sol LeWitt read by Benedict Cumberbatch.',
  },
  {
    href: 'https://www.reddit.com/r/Jung/comments/1aiztve/carl_jung_the_world_will_ask_who_you_are_and_if/',
    label: 'r/Jung',
    className: 'jung',
    size: 'size-jung',
    svgPath: 'M12 0 L15 7 L23 5 L18 12 L22 20 L14 17 L10 24 L8 16 L0 14 L7 10 L3 2 L10 6 Z',
    fill: '#4CB495',
    spinDuration: '17s',
    textSpinDuration: '19s',
    spinReverse: true,
    duration: '48s',
    fx: ['-20vw', '40vw', '10vw', '-30vw'],
    fy: ['30vh', '-20vh', '30vh', '-40vh'],
    desc: 'Carl Jung: \u201cThe world will ask who you are...\u201d',
  },
  {
    href: null,
    label: 'LIVEWIRE',
    className: null,
    size: 'size-livewire',
    svgPath: 'M12 0 L10 8 L2 5 L7 12 L0 17 L9 16 L8 24 L12 18 L16 24 L15 16 L24 17 L17 12 L22 5 L14 8 Z',
    fill: '#7ff16d',
    color: '#7ff16d',
    spinDuration: '16s',
    textSpinDuration: '21s',
    duration: '43s',
    fx: ['28vw', '-32vw', '12vw', '-18vw'],
    fy: ['15vh', '-25vh', '-38vh', '32vh'],
    desc: null,
  },
];

export default function FunPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isList = pathname === '/fun/list';

  const [showFunPopup, setShowFunPopup] = useState(false);
  const [showRickroll, setShowRickroll] = useState(false);
  const funClicked = useRef(false);

  useEffect(() => {
    funClicked.current = false;
    setShowRickroll(false);

    const popupTimer = setTimeout(() => setShowFunPopup(true), FUN_POPUP_DELAY_MS);
    const rickrollTimer = setTimeout(() => {
      if (!funClicked.current) setShowRickroll(true);
    }, RICKROLL_DELAY_MS);

    return () => {
      clearTimeout(popupTimer);
      clearTimeout(rickrollTimer);
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
    <div id={isList ? 'fun-list-view' : 'fun-view'} style={{ display: isList ? 'flex' : 'block' }} onClick={handleViewClick}>
      <BackButton
        to={isList ? '/fun' : '/'}
        label={isList ? '‹ Back to Floating Stars' : '‹ Back to Home'}
        extraClass="fun-back-btn-pos"
      />

      {!isList && (
        <button className="retro-btn" onClick={() => navigate('/fun/list')}>See in different view</button>
      )}

      {isList ? (
        <div className="retro-window">
          <div className="retro-titlebar">
            <span>FUN_LINKS.EXE</span>
            <div className="retro-controls">
              <div className="retro-control-box blue"></div>
              <div className="retro-control-box yellow"></div>
              <button className="retro-control-box" onClick={() => navigate('/fun')}>X</button>
            </div>
          </div>
          <div className="retro-content">
            {stars.filter(s => s.href).map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="retro-list-item">
                <div className="retro-item-icon">
                  <svg viewBox="0 0 24 24" fill={s.fill}><path d={s.svgPath} /></svg>
                </div>
                <div className="retro-item-details">
                  <span className="retro-item-title">{s.label}</span>
                  <span className="retro-item-desc">{s.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        stars.map(s => {
          const floatVars = {
            '--fx0': s.fx[0], '--fy0': s.fy[0],
            '--fx1': s.fx[1], '--fy1': s.fy[1],
            '--fx2': s.fx[2], '--fy2': s.fy[2],
            '--fx3': s.fx[3], '--fy3': s.fy[3],
            animation: `float ${s.duration} infinite linear`,
          };
          const inner = (
            <>
              <svg
                className={`star-svg ${s.size}`}
                style={{ animation: `spin ${s.spinDuration} infinite linear${s.spinReverse ? ' reverse' : ''}` }}
                viewBox="0 0 24 24"
              >
                <path d={s.svgPath} fill={s.fill} />
              </svg>
              <div
                className="star-text"
                style={{
                  animation: `spin ${s.textSpinDuration} infinite linear${s.spinReverse ? '' : ' reverse'}`,
                  ...(s.color ? { color: s.color } : {}),
                }}
              >
                {s.label}
              </div>
            </>
          );
          return (
            <div key={s.label} className="floating-star" style={floatVars}>
              {s.href ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={`spinning-content${s.className ? ` ${s.className}` : ''}`}>
                  {inner}
                </a>
              ) : (
                <div className="spinning-content">{inner}</div>
              )}
            </div>
          );
        })
      )}

      {showFunPopup && <Win95Popup onClose={() => setShowFunPopup(false)} />}
      {showRickroll && <Win95Rickroll onClose={() => setShowRickroll(false)} />}
    </div>
  );
}
