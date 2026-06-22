import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Find the leak',
    body: 'Identify where time is escaping: a task with a definable output, repeatable inputs, and no judgment required at every step.'
  },
  {
    num: '02',
    title: 'Define done',
    body: 'Know exactly what the finished output looks like before writing a line of code. Precision is what makes the agent buildable.'
  },
  {
    num: '03',
    title: 'Build the agent',
    body: "Give the time back. Every system I've built is a time machine for someone's afternoon."
  }
];

const SYSTEMS = [
  {
    name: 'Multi-agent workflows',
    body: 'The leasing pipeline is live: Haiku triage across all 29 leads because it is fast and cheap, Sonnet drafts first-touch messages when judgment matters, then Haiku handles fact-check and assembly. Model assignment equals task fit. No unnecessary escalation.'
  },
  {
    name: 'RAG',
    body: "My vault runs this daily: documents are ingested, summarized, cross-linked, and queried against an index before answers are generated from retrieved pages. I haven't built the vector search myself. I tune the retrieval layer by writing better ingest pipelines and better source structure."
  },
  {
    name: 'MCPs',
    body: "Gmail, Google Calendar, Notion, and Google Drive are live MCP connections in my daily sessions. The AI reads my inbox, creates calendar events, writes to databases, and pulls Drive context without me switching tabs. Demandbase publishes an MCP server I've already mapped against Audyence's stack."
  },
  {
    name: 'APIs',
    body: "I mapped Audyence's probable Day One workflow: Fireflies transcript API to HubSpot engagements endpoint to email draft. Follow Up Boss CRM write-back is live in the leasing pipeline."
  }
];

const SITUATIONS = [
  {
    title: 'The Leasing Pipeline',
    tags: ['Revenue', 'Daily ops', 'In production'],
    stat: '4',
    statLabel: 'leases closed',
    preview: '29 active real estate leads, solo, no ops staff. More quality touches per day equals more closes.',
    blocks: [
      { label: 'Context', text: 'I am a licensed Texas real estate agent managing 29 active leads under Tower Realty in Austin. Staying current on each lead, checking inventory across 9 sources, tracking last contact, and drafting personalized outreach used to take 45+ minutes a day.' },
      { label: 'What I Built', text: 'A Python ETL pulls 9 inventory sources into a unified lead view. The agent triages each lead, assigns urgency, drafts per-tier outreach, and prepares CRM write-back into Follow Up Boss.' },
      { label: 'What It Produced', text: 'Four leases closed. Revenue on the board. The system runs every day. I treat manual work as a bug, and this is the ops layer I removed the friction from.' }
    ]
  },
  {
    title: 'Demandbase Capstone',
    tags: ['Intent data', 'B2B attribution', 'Karl domain'],
    stat: '0.648 → 0.685',
    statLabel: 'AUC, 5.7% relative gain',
    preview: "Audyence's intent-partner stack pipes in the same signal class I spent a semester modeling.",
    blocks: [
      { label: 'Context', text: "My UT Austin MSM capstone was a live client engagement with Demandbase's ABM team: 3,555 closed B2B deals, 1,681 accounts, and 2 years of engagement data." },
      { label: 'What I Built', text: 'Logistic regression scoring across 54 motion by segment by channel combinations, with 5-fold CV and a quarterly recalibration framework in Python, R, and Excel.' },
      { label: 'What It Produced', text: 'The same engagement signal predicts opposite outcomes by deal type. Intent surge helped renewals but actively hurt upsells. We caught it before client delivery.' }
    ]
  },
  {
    title: 'Personal Operating System',
    tags: ['One operator', 'RAG', 'MCP tools'],
    stat: '372',
    statLabel: 'structured wiki pages',
    preview: 'One operator covering what normally takes a team: leads, projects, search, evidence, and follow-up.',
    blocks: [
      { label: 'Context', text: 'I needed to manage real estate leads, a job search, editorial work, portfolio evidence, and project memory without losing threads across sessions.' },
      { label: 'What I Built', text: 'An Obsidian vault operated by Claude Code with four named modes: INGEST, QUERY, LINT, and WRAP. It uses live MCP connections for Gmail, Calendar, Notion, and Drive.' },
      { label: 'What It Produced', text: 'Daily answers grounded in source pages, session logs that update the right notes, and a system that compounds instead of resetting each morning.' }
    ]
  },
  {
    title: 'Audyence Fit Map',
    tags: ['Built for this application', 'Interactive', 'One session'],
    stat: '10/10',
    statLabel: 'requirements mapped',
    preview: 'Every Audyence requirement maps to a clickable evidence dossier.',
    href: '/audyence',
    blocks: [
      { label: 'Context', text: 'Instead of submitting another claim about AI usability, I built an interactive JD analysis tool for this specific application.' },
      { label: 'What I Built', text: 'A structured Fit Map where every requirement maps to evidence, tags, and a receipt. The REQS array is reusable for any job spec.' },
      { label: 'What It Produced', text: 'Built and deployed in one session. The meta-proof: proving AI usability by building something about AI usability.' }
    ]
  },
  {
    title: 'Epicor / Brandwatch',
    tags: ['C-suite delivery', 'Solo ownership', 'Work quality'],
    stat: '+30%',
    statLabel: 'above median LinkedIn engagement',
    preview: 'Turned a tool nobody was fully using into a reporting system the C-suite read biweekly.',
    blocks: [
      { label: 'Context', text: 'At Epicor, I inherited Brandwatch as the sole operator for social listening at a 1,000+ person company. No handoff. No documentation.' },
      { label: 'What I Built', text: 'Competitor dashboards, earned-media reporting, and biweekly insight reports segmented by vertical. Reports went directly to the Chief Communications Officer.' },
      { label: 'What It Produced', text: 'One Brandwatch-informed workflow shaped a LinkedIn campaign that exceeded median engagement by 30%.' }
    ]
  }
];

export default function AIOperator() {
  const navigate = useNavigate();
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = i => setOpenIdx(prev => prev === i ? null : i);

  return (
    <main id="ai-operator-view" className="aio-karl">
      <section className="ak-hero">
        <div className="ak-nav">
          <button className="aio-back" onClick={() => navigate('/')}>← Back</button>
          <a className="ak-nav-link" href="/audyence">Fit Map</a>
        </div>

        <div className="ak-hero-inner">
          <div className="ak-hero-copy">
            <p className="aio-eyebrow">Prepared for Karl Van Buren · Audyence · June 2026</p>
            <h1>Trey Carrillo</h1>
            <p className="ak-title">AI-Native Operator</p>
            <p className="ak-claim">I don't describe how I'd use AI. I run it.</p>
            <p className="ak-subclaim">Quant, code, and commercial fluency in one operator.</p>
          </div>

          <aside className="ak-proof-panel">
            <p>Runs today</p>
            <strong>29 leads, 0 ops staff</strong>
            <span>Agentic leasing pipeline running in production. Four leases closed. Manual work treated as a bug.</span>
          </aside>
        </div>
      </section>

      <section className="ak-section ak-approach">
        <div className="ak-section-head">
          <p className="aio-section-label">The Approach</p>
          <h2>Find the lost time, define the output, then build the agent.</h2>
        </div>
        <div className="ak-principles">
          {PRINCIPLES.map(principle => (
            <article className="ak-principle" key={principle.title}>
              <p>{principle.num}</p>
              <h3>{principle.title}</h3>
              <span>{principle.body}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="ak-section ak-systems">
        <div className="ak-section-head">
          <p className="aio-section-label">How I Work With These Systems</p>
          <h2>Not tool trophies. Working systems with business outcomes attached.</h2>
        </div>
        <div className="ak-systems-grid">
          {SYSTEMS.map(system => (
            <article className="ak-system-card" key={system.name}>
              <h3>{system.name}</h3>
              <p>{system.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ak-section ak-situations">
        <div className="ak-section-head">
          <p className="aio-section-label">Situations</p>
          <h2>Five answers Karl can click through instead of hearing me repeat claims.</h2>
          <p className="ak-help">Click any receipt for context, what I built, and what it produced.</p>
        </div>

        <div className="ak-receipts">
          {SITUATIONS.map((situation, i) => (
            <article
              className={`ak-receipt${openIdx === i ? ' open' : ''}`}
              key={situation.title}
              onClick={() => toggle(i)}
            >
              <div className="ak-receipt-head">
                <div className="ak-receipt-main">
                  <div className="aio-tags">
                    {situation.tags.map(tag => <span className="aio-tag" key={tag}>{tag}</span>)}
                  </div>
                  <h3>{situation.title}</h3>
                  <p>{situation.preview}</p>
                  {situation.href && (
                    <a className="ak-inline-link" href={situation.href} onClick={event => event.stopPropagation()}>
                      View live Fit Map →
                    </a>
                  )}
                </div>
                <div className="ak-receipt-stat">
                  <strong>{situation.stat}</strong>
                  <span>{situation.statLabel}</span>
                </div>
                <span className="aio-arrow">›</span>
              </div>

              <div className="ak-receipt-body">
                <div>
                  {situation.blocks.map(block => (
                    <div className="aio-blk" key={block.label}>
                      <p className="aio-blk-lbl">{block.label}</p>
                      <p>{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ak-section ak-now">
        <div className="ak-now-card">
          <p className="aio-eyebrow">Right Now</p>
          <h2>Preston asked if I'd be comfortable using Cursor. I downloaded it that evening.</h2>
          <p>At the Audyence onsite, Preston Tesvich mentioned Cursor as the IDE the team works in. I had not used it before. I downloaded it when I got home, wired it to this portfolio, and built this page in it for the Karl call.</p>
          <p>When a tool gets named as something the role needs, my default is to go build something with it immediately. That's the pattern, not the exception.</p>
          <p className="ak-now-meta">This page: Cursor. The systems above: Claude Code. Two AI-native environments, same session. The bet is learning velocity.</p>
        </div>
      </section>

      <section className="ak-deck">
        <div>
          <p className="aio-eyebrow">The Deck</p>
          <h2>What I brought to Preston and Veena.</h2>
          <p>The full AI-ops capabilities deck — built for the Audyence onsite, June 15 2026. Covers the personal operating system, leasing pipeline, Demandbase capstone, and what I'd build on day one pointed at Audyence's stack.</p>
        </div>
        <a className="aio-cta" href="/audyence-deck.pdf" target="_blank" rel="noopener noreferrer">View the Deck →</a>
      </section>

      <footer className="aio-foot ak-foot">
        <p>EVERY SYSTEM HERE RUNS TODAY.</p>
      </footer>
    </main>
  );
}
