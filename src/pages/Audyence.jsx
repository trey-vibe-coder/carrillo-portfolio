import { useState, useEffect } from 'react';
import { FIT_META, REQS, DO_REQS, BRING_REQS, ROLE_REQ } from '../data/audyenceFit';

const byId = Object.fromEntries(REQS.map((r) => [r.id, r]));

// Wrap the evidence-backed phrases inside a verbatim JD line with <mark>.
// indexOf-based (no regex) so punctuation like "A/B tests" is safe.
function highlightNodes(text, highlights) {
  if (!highlights || !highlights.length) return text;
  const ranges = [];
  for (const h of highlights) {
    const idx = text.indexOf(h);
    if (idx !== -1) ranges.push([idx, idx + h.length]);
  }
  ranges.sort((a, b) => a[0] - b[0]);
  const nodes = [];
  let cursor = 0;
  ranges.forEach(([s, e], i) => {
    if (s < cursor) return; // skip overlaps
    if (s > cursor) nodes.push(text.slice(cursor, s));
    nodes.push(
      <mark className="fm-mark" key={i}>
        {text.slice(s, e)}
      </mark>
    );
    cursor = e;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function reqLabel(req) {
  if (req.group === 'role') return 'The role';
  if (req.group === 'do') return `Responsibility ${req.n}`;
  return `Qualification ${req.n}`;
}

function Dossier({ req }) {
  return (
    <div className="fm-dossier" key={req.id}>
      <div className="fm-dossier-head">
        <span className="fm-dossier-tag">{reqLabel(req)}</span>
      </div>
      <h3 className="fm-dossier-title">{req.title}</h3>

      {req.type === 'quadrants' ? (
        <>
          <div className="fm-quadrants">
            {req.quadrants.map((q) => (
              <div className="fm-quad" key={q.fn}>
                <div className="fm-quad-fn">{q.fn}</div>
                <p className="fm-quad-body">
                  <strong>{q.lead}</strong> {q.body}
                </p>
              </div>
            ))}
          </div>
          {req.kicker && <p className="fm-kicker">{req.kicker}</p>}
        </>
      ) : (
        <>
          <section className="fm-block">
            <div className="fm-block-label">How I'd help</div>
            <p className="fm-help">{req.help}</p>
          </section>
          <section className="fm-block">
            <div className="fm-block-label">Already built</div>
            <div className="fm-chips">
              {req.built.map((b) => (
                <span className="fm-chip" key={b}>
                  {b}
                </span>
              ))}
            </div>
          </section>
          <section className="fm-block">
            <div className="fm-block-label">Receipts</div>
            <ul className="fm-receipts">
              {req.receipts.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

export default function Audyence() {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(null); // desktop mouse preview
  const [focused, setFocused] = useState(null); // desktop keyboard preview
  const [pinned, setPinned] = useState(null); // desktop click pin
  const [open, setOpen] = useState(null); // mobile accordion

  useEffect(() => {
    document.title = 'Fit Map — GTM Engineer / Audyence';
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // live mouse hover > keyboard focus > pinned. Each clears independently,
  // so a hover never strands a stale focus preview (or vice versa).
  const displayed = hovered ?? focused ?? pinned;
  const displayedReq = displayed ? byId[displayed] : null;

  function activate(id) {
    if (isMobile) {
      setOpen((o) => (o === id ? null : id));
    } else {
      setPinned((p) => (p === id ? null : id));
    }
  }

  function isActive(id) {
    return isMobile ? open === id : displayed === id;
  }

  function reqProps(id, extra = '') {
    return {
      type: 'button',
      className: `fm-req${isActive(id) ? ' is-active' : ''}${pinned === id && !isMobile ? ' is-pinned' : ''}${extra ? ` ${extra}` : ''}`,
      'aria-expanded': isMobile ? open === id : undefined,
      'aria-pressed': isMobile ? undefined : pinned === id,
      onClick: () => activate(id),
      onMouseEnter: isMobile ? undefined : () => setHovered(id),
      onMouseLeave: isMobile ? undefined : () => setHovered((h) => (h === id ? null : h)),
      onFocus: isMobile ? undefined : () => setFocused(id),
      onBlur: isMobile ? undefined : () => setFocused((f) => (f === id ? null : f)),
    };
  }

  // Plain JSX helper (NOT a nested component) so React never remounts the rows
  // on state changes — keyboard focus is preserved as the dossier updates.
  const renderBullet = (req) => (
    <li className="fm-jd-li" key={req.id}>
      <button {...reqProps(req.id)}>
        <span className="fm-req-text">{highlightNodes(req.bullet, req.highlights)}</span>
      </button>
      {isMobile && open === req.id && (
        <div className="fm-inline">
          <Dossier req={req} />
        </div>
      )}
    </li>
  );

  return (
    <div className="fitmap">
      <div className="fm-shell">
        <div className="fm-grid">
          {/* ── LEFT: the posting (reads like the real JD) ──────────── */}
          <div className="fm-paper-col">
            <h1 className="fm-title">{FIT_META.role}</h1>
            {isMobile && (
              <p className="fm-hint">Tap any requirement to see how Trey would handle it.</p>
            )}

            <h2 className="fm-jd-h">About {FIT_META.company}</h2>
            <p className="fm-jd-p">{FIT_META.about}</p>

            <h2 className="fm-jd-h">Role Overview</h2>
            <ul className="fm-jd-list fm-jd-list--plain">
              <li className="fm-jd-li">
                <button {...reqProps(ROLE_REQ.id, 'fm-req--overview')}>
                  <span className="fm-req-text">
                    {highlightNodes(ROLE_REQ.bullet, ROLE_REQ.highlights)}
                  </span>
                </button>
                {isMobile && open === ROLE_REQ.id && (
                  <div className="fm-inline">
                    <Dossier req={ROLE_REQ} />
                  </div>
                )}
              </li>
            </ul>

            <h2 className="fm-jd-h">Key Responsibilities</h2>
            <ul className="fm-jd-list">{DO_REQS.map(renderBullet)}</ul>

            <h2 className="fm-jd-h">Qualifications</h2>
            <ul className="fm-jd-list">{BRING_REQS.map(renderBullet)}</ul>

            <footer className="fm-foot">
              {FIT_META.source} Built by {FIT_META.candidate}.
            </footer>
          </div>

          {/* ── RIGHT: the dossier console (dark, sticky) ───────────── */}
          {!isMobile && (
            <div className="fm-console-col">
              <div className="fm-console">
                <div className="fm-console-bar">
                  <span className="fm-console-dot" />
                  <span className="fm-console-titlebar">evidence // dossier</span>
                  {pinned && <span className="fm-pinned-tag">pinned</span>}
                </div>
                <div className="fm-console-body" aria-live="polite" data-displayed={displayed || 'standby'}>
                  {displayedReq ? (
                    <Dossier req={displayedReq} />
                  ) : (
                    <div className="fm-standby">
                      <p className="fm-standby-line">
                        Hover a requirement to resolve its dossier
                        <span className="fm-cursor" aria-hidden="true" />
                      </p>
                      <p className="fm-standby-sub">
                        Each line answers with: how I'd help, what I've already
                        built, and the receipts.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
