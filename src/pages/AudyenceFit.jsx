import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REQS } from '../data/audyenceFit';

export default function AudyenceFit() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const toggle = i => setOpen(prev => prev === i ? null : i);

  return (
    <div id="fitmap-view">
      <div className="fm-inner">
        <button className="aio-back" onClick={() => navigate('/')}>← Back</button>
        <p className="fm-eyebrow">Fit Map &nbsp;·&nbsp; Audyence GTM Engineer</p>
        <h1 className="fm-title">Every requirement.<br />Every receipt.</h1>
        <p className="fm-sub">Click any requirement to see the specific proof. No padding, no stretch.</p>
        <div className="fm-grid">
          {REQS.map((r, i) => (
            <div
              key={i}
              className={`fm-card${open === i ? ' open' : ''}`}
              onClick={() => toggle(i)}
            >
              <p className="fm-req">{r.req}</p>
              <div className="fm-tags">
                {r.tags.map(t => <span key={t} className="fm-tag">{t}</span>)}
              </div>
              <div className="fm-evidence">
                <div className="fm-ev-inner">
                  <p>{r.evidence}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="fm-footer">Built the night before the screen. Deployed the same session.</p>
      </div>
    </div>
  );
}
