import { contact } from '../data/about';

export function Win95Popup({ onClose }) {
  return (
    <div className="win95-popup" id="funPopup">
      <div className="win95-titlebar">
        <span>System message</span>
        <button className="win95-close-btn" onClick={onClose}>X</button>
      </div>
      <div className="win95-body">
        <div className="win95-text-content">
          <span className="green-text">like cool $hiz?!</span> are you scrappy? email me at{' '}
          <a href={`mailto:${contact.scrappy}`} className="yellow-link">{contact.scrappy}</a>{' '}
          and let&rsquo;s chat.{' '}
          <a href="https://www.reddit.com/r/salesforce/comments/xvr23e/if_your_ceo_called_you_scrappy_would_you_take_it/" target="_blank" rel="noopener noreferrer" className="white-link">reddit</a>{' '}
          <a href="https://www.google.com/search?q=scrappy+doo" target="_blank" rel="noopener noreferrer" className="white-link">scrappy</a>
        </div>
        <div className="win95-buttons">
          <button className="win95-btn" onClick={onClose}>Ok</button>
        </div>
      </div>
    </div>
  );
}

export function Win95Rickroll({ onClose }) {
  return (
    <div className="win95-rickroll" id="rickrollPopup" style={{ display: 'flex' }}>
      <div className="rickroll-titlebar">
        <span>&#9888; Lucky.exe</span>
        <button className="win95-close-btn" onClick={onClose}>X</button>
      </div>
      <div className="rickroll-body">
        <div className="rickroll-icon">&#127808; &#9733; &#127808;</div>
        <div className="rickroll-msg">click here if you&rsquo;re feeling lucky :)</div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="rickroll-btn">I&rsquo;m Feeling Lucky</a>
      </div>
    </div>
  );
}
