// Single source of truth for the Audyence GTM Engineer "Fit Map".
// Drives the JD bullets (with evidence-backed phrases highlighted), the desktop
// dossier console, and the mobile accordion.
// Every receipt traces to a real artifact: the tailored resume, the interview
// deck, or the vault prep docs. No fabrication — named tools Trey does NOT have
// (Salesforce, Marketo, Pardot, Looker, Zapier, Workato, Segment) are
// deliberately NOT highlighted.

export const FIT_META = {
  candidate: 'Trey Carrillo',
  role: 'GTM Engineer',
  company: 'Audyence',
  location: 'Austin, TX',
  // Verbatim "About Audyence" from the live posting.
  about:
    "Audyence is a high-growth B2B marketing technology company powering a two-sided marketplace that enables marketers to buy outcomes-based media from premium publishers with unprecedented control, transparency, and efficiency. Backed by industry insiders and trusted by some of the world's largest B2B brands, our platform is reshaping how demand generation is executed at scale.",
  // Verbatim Role Overview from the live posting.
  overview:
    'Audyence is looking for a Go-To-Market (GTM) Engineer to bridge the gap between engineering, sales, marketing, and customer success. This role is ideal for someone who thrives at the intersection of technical implementation and revenue strategy. You will design, build, and optimize systems, automations, and data pipelines that power our go-to-market engine.',
  source: 'Requirements quoted from Audyence’s live GTM Engineer posting.',
};

export const REQS = [
  // ── The role (hero) — its dossier is the four-quadrant operator map ──────────
  {
    id: 'role',
    group: 'role',
    type: 'quadrants',
    title: 'Four functions, one operator',
    bullet: FIT_META.overview,
    highlights: ['engineering, sales, marketing, and customer success'],
    quadrants: [
      {
        fn: 'Engineering',
        lead: 'Shipped production software.',
        body: 'treyleases.com on Next.js + Vercel, plus a Python ETL across 800+ units and 9 brokerages.',
      },
      {
        fn: 'Sales',
        lead: 'I sell for a living.',
        body: 'Licensed Texas agent (TREC) working a live leasing book: qualify, tour, negotiate, close.',
      },
      {
        fn: 'Marketing',
        lead: 'Trained, certified, client-tested.',
        body: 'McCombs M.S. in Marketing, HubSpot certified, AIO/GEO strategy for Frozen Garden, a live DTC client.',
      },
      {
        fn: 'Customer Success',
        lead: 'Everything after the close.',
        body: 'Onboarding, deposits, move-in coordination, automated reminders I built myself.',
      },
    ],
  },

  // ── Key Responsibilities ("do") ─────────────────────────────────────────────
  {
    id: 'do-01',
    group: 'do',
    n: '01',
    title: 'A GTM system I designed and run end to end',
    bullet:
      'Design and implement scalable GTM systems across CRM, marketing automation, sales engagement, and analytics platforms',
    highlights: ['scalable GTM systems'],
    help: "I designed and run a full GTM system for a live revenue book: funnel into CRM, an ETL layer feeding it, the dashboards I run on. Same instinct, pointed at your stack.",
    built: ['treyleases.com', 'Follow Up Boss CRM', '/open ops workflow'],
    receipts: [
      'Funnel → Follow Up Boss API → ops automation → dashboards, shipped solo',
      'HubSpot-certified — the CRM Audyence runs today',
    ],
  },
  {
    id: 'do-02',
    group: 'do',
    n: '02',
    title: 'Lead flow, attribution, lifecycle — all three shipped',
    bullet:
      'Build integrations and workflows to streamline lead flow, attribution, and customer lifecycle management',
    highlights: ['lead flow, attribution'],
    help: "Dead center of what I already do: a CRM API wired end to end, lifecycle-triggered follow-ups in my daily ops, and the multi-touch attribution layer I built on the Demandbase capstone.",
    built: ['Follow Up Boss API', 'Demandbase capstone', '/open lifecycle automation'],
    receipts: [
      'Lead-source routing + programmatic lead creation via the Follow Up Boss API',
      'SQL multi-touch attribution across 3,555 opportunities',
    ],
  },
  {
    id: 'do-03',
    group: 'do',
    n: '03',
    title: 'I find the manual step and kill it',
    bullet:
      'Partner with Sales, Marketing, and RevOps to identify inefficiencies and automate processes',
    highlights: ['automate processes'],
    help: "My model is spotting the repetitive manual step and turning it into an agent. At Epicor I turned a monitoring slog into a reusable format the marketing and PR teams ran with.",
    built: ['Epicor insight system', '/open + /pipeline', "Troot's Brain"],
    receipts: [
      'Reusable insight format that ran 30% over median engagement',
      'Daily ops drafts follow-ups and reminders automatically',
    ],
  },
  {
    id: 'do-04',
    group: 'do',
    n: '04',
    title: 'I own pipelines and keep them honest',
    bullet:
      'Own and optimize data pipelines that ensure clean, reliable, and actionable GTM data',
    highlights: ['Own and optimize data pipelines'],
    help: 'I own a recurring ETL pipeline across nine sources, and rebuilt it myself when an upstream path broke. On the capstone I engineered date-bounded joins so signals only attach during a deal’s active window.',
    built: ['build.py ETL', 'Demandbase capstone', 'treyleases data layer'],
    receipts: [
      'build.py normalizes 800+ listings across 9 sources into one layer',
      'Date-bounded joins across 3,555 opportunities / 1,681 accounts',
    ],
  },
  {
    id: 'do-05',
    group: 'do',
    n: '05',
    title: 'I build the tools the revenue team runs on',
    bullet: 'Develop internal tools, scripts, and dashboards to support revenue teams',
    highlights: ['internal tools, scripts, and dashboards'],
    help: "I build internal tooling because I'm the revenue team using it: a daily ops dashboard, auto tour-briefs, an inventory and pricing-pressure view, automated drafting.",
    built: ['/open dashboard', 'auto tour-briefs', 'treyleases'],
    receipts: [
      "Ops workflow pulls calendar, email, and CRM, then drafts the day's touches",
      'Live inventory / pressure dashboard behind a real commission book',
    ],
  },
  {
    id: 'do-06',
    group: 'do',
    n: '06',
    title: 'A/B and funnel work, at real scale',
    bullet:
      'Support experimentation (A/B tests, campaign tracking, funnel analysis) with strong technical execution',
    highlights: ['A/B tests', 'funnel analysis'],
    help: 'I run the technical side of experimentation: a 588K-row A/B analysis measuring incremental lift and time-of-day effects, plus GA4 attribution and funnel work.',
    built: ['Rocket Fuel A/B analysis', 'GA4 attribution', 'Epicor campaign'],
    receipts: [
      '588,102-row A/B: 43% incremental lift, time-of-day optimization',
      'Epicor insight format that ran 30% over median engagement',
    ],
  },
  {
    id: 'do-07',
    group: 'do',
    n: '07',
    title: 'Governance as a habit, not a memo',
    bullet: 'Ensure data integrity and governance across GTM systems',
    highlights: ['data integrity and governance'],
    help: 'I treat data integrity as a build-time concern: treyleases ships behind a strict field-exposure contract, and my finance system runs on an append-only ledger with reconciliation.',
    built: ['treyleases exposure contract', 'money copilot ledger'],
    receipts: [
      'Exposure contract keeps private fields server-side on treyleases',
      'Append-only ledger + reconciliation in the finance subsystem',
    ],
  },
  {
    id: 'do-08',
    group: 'do',
    n: '08',
    title: 'When the pipe breaks, I fix the pipe',
    bullet: 'Troubleshoot and resolve system issues impacting go-to-market operations',
    highlights: ['resolve system issues'],
    help: 'Owning live systems means owning the failures. When an upstream path silently broke my pipeline, I traced it, re-homed the sources, and got it running again.',
    built: ['build.py rebuild', 'treyleases', 'Follow Up Boss ops'],
    receipts: [
      'Diagnosed and rebuilt the inventory pipeline after an upstream break',
      'Run a live site + CRM daily — I debug the integration, not just write it',
    ],
  },
  {
    id: 'do-09',
    group: 'do',
    n: '09',
    title: 'Translating dev ↔ commercial is my core',
    bullet: 'Liaise between the dev team and the commercial team to bring products to market',
    highlights: ['dev team and the commercial team'],
    help: 'This is my core. At Epicor I built dashboards and presented them to the Chief Communications Officer; on the capstone I turned model output into an exec narrative the team called “epic.”',
    built: ['Epicor C-suite delivery', 'Demandbase exec deck', 'Real Home spec'],
    receipts: [
      'Built dashboards from scratch, presented to the Chief Communications Officer',
      'Turned model output into a value calculator + deck the team called “epic”',
    ],
  },

  // ── Qualifications ("bring") ─────────────────────────────────────────────────
  {
    id: 'bring-01',
    group: 'bring',
    n: '01',
    title: "New grad — I'll meet this head-on",
    bullet:
      '3+ years of experience in a technical role (e.g., software engineering, solutions engineering, data engineering, or RevOps engineering)',
    highlights: ['technical role'],
    help: "Straight answer: I'm a new grad, no three years on paper. That line really asks whether I can ship unsupervised — I went from first serious AI use in January to running this whole stack by June.",
    built: ['treyleases (shipped solo)', 'Demandbase capstone', "Troot's Brain"],
    receipts: [
      'Shipped, running systems: a live GTM engine, an ETL pipeline, a production model',
      "The posting says apply even if you don't meet every qualification",
    ],
  },
  {
    id: 'bring-02',
    group: 'bring',
    n: '02',
    title: 'I build the thing those tools abstract',
    bullet:
      'Strong experience with APIs, integrations, and automation tools (e.g., Zapier, Workato, Segment)',
    highlights: ['APIs, integrations, and automation'],
    help: "I haven't run Zapier or Workato by name, but I've done the integration work by hand: the Follow Up Boss API end to end, build.py as an ETL orchestrator, an MCP-native agent stack.",
    built: ['Follow Up Boss API', 'build.py orchestrator', 'MCP servers'],
    receipts: [
      'Full Follow Up Boss API integration: routing + programmatic POST',
      'MCP integrations across Gmail / Calendar / Notion / Drive',
    ],
  },
  {
    id: 'bring-03',
    group: 'bring',
    n: '03',
    title: 'Python and JavaScript, both in production',
    bullet: 'Proficiency in at least one programming language (e.g., Python, JavaScript)',
    highlights: ['Python, JavaScript'],
    help: 'Both, in production. Python with pandas and scikit-learn drove the capstone modeling; TypeScript and React ship my web work. Plus R and SQL.',
    built: ['Python / pandas / sklearn', 'TypeScript / React', 'R', 'SQL'],
    receipts: [
      'Python: logistic regression, StandardScaler, 5-fold CV',
      'TypeScript + React / Next.js shipped: treyleases, this portfolio',
    ],
  },
  {
    id: 'bring-04',
    group: 'bring',
    n: '04',
    title: 'HubSpot-certified, CRM-operated daily',
    bullet: 'Experience working with CRM platforms (e.g., Salesforce, HubSpot)',
    highlights: ['HubSpot'],
    help: "I'm HubSpot certified — the CRM Audyence runs today — and I operate Follow Up Boss daily, API and routing included. No Salesforce, but the concepts transfer straight across.",
    built: ['HubSpot (certified)', 'Follow Up Boss (daily)', 'CRM API integration'],
    receipts: [
      'HubSpot Inbound + Digital Marketing certified',
      'Run Follow Up Boss daily: API, routing, lifecycle automation',
    ],
  },
  {
    id: 'bring-05',
    group: 'bring',
    n: '05',
    title: 'HubSpot cert; the automation muscle from another angle',
    bullet: 'Familiarity with marketing automation tools (e.g., Marketo, Pardot, HubSpot)',
    highlights: ['HubSpot'],
    help: "Honest read: my thinnest named-tool area. I'm HubSpot certified but haven't built journeys in Marketo or Pardot — though lifecycle-triggered drafts and reminders already run in my ops.",
    built: ['HubSpot (certified)', 'lifecycle automation', 'FUB action plans'],
    receipts: [
      'HubSpot certified; no Marketo / Pardot hands-on — said plainly',
      'Trigger → sequence → measure is a loop I run daily',
    ],
  },
  {
    id: 'bring-06',
    group: 'bring',
    n: '06',
    title: 'ETL and data modeling are home turf',
    bullet: 'Strong understanding of data modeling, ETL processes, and analytics',
    highlights: ['data modeling, ETL processes, and analytics'],
    help: 'Squarely my lane. build.py is a literal ETL pipeline across nine brokerages; the capstone added temporal joins, a percentile scoring framework, and ML on 422K rows.',
    built: ['build.py ETL', 'Demandbase capstone', 'ML classification (422K rows)'],
    receipts: [
      'Percentile lead-scoring over 3,555 opportunities; AUC 0.648 → 0.685',
      'ML text classification on 422,937 rows',
    ],
  },
  {
    id: 'bring-07',
    group: 'bring',
    n: '07',
    title: 'SQL plus a real Tableau body of work',
    bullet: 'Experience with SQL and data visualization tools (e.g., Looker, Tableau)',
    highlights: ['SQL', 'Tableau'],
    help: "Both halves covered: SQL drove the capstone's attribution layer, and on viz I built a 5-tab Tableau Story plus a 588K-row analysis. No Looker, but the JD names Tableau as the alternative.",
    built: ['SQL (PostgreSQL / MySQL)', 'Tableau', 'GA4'],
    receipts: [
      'SQL-based multi-touch attribution in an ABM environment',
      '5-tab Tableau Story + 588,102-row A/B',
    ],
  },
  {
    id: 'bring-08',
    group: 'bring',
    n: '08',
    title: 'Business need in, shipped solution out',
    bullet: 'Ability to translate business needs into technical solutions',
    highlights: ['translate business needs into technical solutions'],
    help: 'The through-line of everything I build: Real Home turned agent pain into a product spec, the capstone turned a scoring need into a production script, treyleases turned “I need leads” into a system.',
    built: ['Real Home spec', 'Demandbase value calculator', 'treyleases'],
    receipts: [
      'Scoring need → production recalibration script + value calculator',
      '“I need leads” → funnel / CRM / ops system that runs daily',
    ],
  },
  {
    id: 'bring-09',
    group: 'bring',
    n: '09',
    title: 'Small-team cross-functional, repeatedly',
    bullet: 'Work cross functionally with dev and commercial teams',
    highlights: ['cross functionally'],
    help: "I've worked the technical-commercial seam on every team: data lead on a six-person capstone, leasing across nine brokerages, analytics delivered to Epicor's C-suite.",
    built: ['Capstone data lead', '9-brokerage coordination', 'Epicor delivery'],
    receipts: [
      'Data lead on a 6-person capstone shipping to a real client',
      'Delivered analytics to marketing, PR, and executive leadership',
    ],
  },
];

// Convenience groupings for the JD render.
export const DO_REQS = REQS.filter((r) => r.group === 'do');
export const BRING_REQS = REQS.filter((r) => r.group === 'bring');
export const ROLE_REQ = REQS.find((r) => r.group === 'role');
