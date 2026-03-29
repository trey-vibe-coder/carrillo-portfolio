import { useNavigate } from 'react-router-dom';

export default function FunList() {
  const navigate = useNavigate();

  return (
    <div id="fun-list-view" style={{ display: 'flex' }}>
      <div className="fun-back-btn" onClick={() => navigate('/fun')}>&#8249; Back to Floating Stars</div>
      <div className="retro-window">
        <div className="retro-titlebar">
          <span>FUN_LINKS.EXE</span>
          <div className="retro-controls">
            <div className="retro-control-box blue"></div>
            <div className="retro-control-box yellow"></div>
            <div className="retro-control-box" onClick={() => navigate('/fun')}>X</div>
          </div>
        </div>
        <div className="retro-content">
          <a href="https://troots-trivia.netlify.app/" target="_blank" rel="noopener noreferrer" className="retro-list-item">
            <div className="retro-item-icon"><svg viewBox="0 0 24 24" fill="#00F028"><path d="M12 1 L15 6 L22 3 L18 10 L23 16 L16 16 L15 23 L10 17 L3 22 L6 14 L1 9 L8 7 L5 1 L11 5 Z"/></svg></div>
            <div className="retro-item-details"><span className="retro-item-title">Trivia Game</span><span className="retro-item-desc">A fun custom trivia game to test your knowledge.</span></div>
          </a>
          <a href="https://trey17.pixieset.com/bookone/" target="_blank" rel="noopener noreferrer" className="retro-list-item">
            <div className="retro-item-icon"><svg viewBox="0 0 24 24" fill="#F09FE8"><path d="M7.5 0 L11 7 L20 4 L14 12 L22 17 L13 18 L12 24 L8 17 L0 21 L4 12 L0 5 L8 8 Z"/></svg></div>
            <div className="retro-item-details"><span className="retro-item-title">Pixieset</span><span className="retro-item-desc">Some of my film.</span></div>
          </a>
          <a href="https://www.instagram.com/treycarrilloo/" target="_blank" rel="noopener noreferrer" className="retro-list-item">
            <div className="retro-item-icon"><svg viewBox="0 0 24 24" fill="#EE4932"><path d="M12 0 L14 6 L20 2 L17 9 L24 12 L17 15 L20 22 L14 18 L12 24 L10 18 L4 22 L7 15 L0 12 L7 9 L4 2 L10 6 Z"/></svg></div>
            <div className="retro-item-details"><span className="retro-item-title">Instagram</span><span className="retro-item-desc">See who I hang out with.</span></div>
          </a>
          <a href="https://heyzine.com/flip-book/163fac3150.html" target="_blank" rel="noopener noreferrer" className="retro-list-item">
            <div className="retro-item-icon"><svg viewBox="0 0 24 24" fill="#009DF0"><path d="M12 0 L15 7 L24 6 L18 12 L22 20 L14 16 L12 24 L10 16 L2 20 L6 12 L0 6 L9 7 Z"/></svg></div>
            <div className="retro-item-details"><span className="retro-item-title">Scrappy W.I.P</span><span className="retro-item-desc">Work in progress digital flipbook / magazine.</span></div>
          </a>
          <a href="https://uxdesign.cc/a-letter-from-sol-lewitt-about-creative-block-read-by-benedict-cumberbatch-66378ee6ef60" target="_blank" rel="noopener noreferrer" className="retro-list-item">
            <div className="retro-item-icon"><svg viewBox="0 0 24 24" fill="#E35866"><path d="M12 0 L15 8 L24 6 L18 13 L22 22 L13 18 L8 24 L7 15 L0 12 L7 9 L4 1 L10 6 Z"/></svg></div>
            <div className="retro-item-details"><span className="retro-item-title">Creative Block</span><span className="retro-item-desc">A letter from Sol LeWitt read by Benedict Cumberbatch.</span></div>
          </a>
          <a href="https://www.reddit.com/r/Jung/comments/1aiztve/carl_jung_the_world_will_ask_who_you_are_and_if/" target="_blank" rel="noopener noreferrer" className="retro-list-item">
            <div className="retro-item-icon"><svg viewBox="0 0 24 24" fill="#4CB495"><path d="M12 0 L15 7 L23 5 L18 12 L22 20 L14 17 L10 24 L8 16 L0 14 L7 10 L3 2 L10 6 Z"/></svg></div>
            <div className="retro-item-details"><span className="retro-item-title">r/Jung</span><span className="retro-item-desc">Carl Jung: &ldquo;The world will ask who you are...&rdquo;</span></div>
          </a>
        </div>
      </div>
    </div>
  );
}
