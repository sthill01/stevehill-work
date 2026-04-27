// Shared home-page sections and summary content for the sandbox rebuild.

const PreviewNetgain = () => (
  <svg className="mini-chart" viewBox="0 0 320 200" preserveAspectRatio="none">
    <defs>
      <linearGradient id="ng-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f26a21" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#f26a21" stopOpacity="0" />
      </linearGradient>
    </defs>
    {[40, 80, 120, 160].map((y) => (
      <line
        key={y}
        x1="0"
        y1={y}
        x2="320"
        y2={y}
        stroke="#e8e0d4"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
    ))}
    {[
      [20, 140, 160],
      [60, 110, 150],
      [100, 92, 150],
      [140, 72, 150],
      [180, 58, 150],
      [220, 42, 150],
      [260, 28, 150],
      [300, 20, 150],
    ].map(([x, y, h], i) => (
      <rect
        key={i}
        x={x - 8}
        y={y}
        width="16"
        height={h - y}
        fill="#f26a21"
        opacity={0.18 + i * 0.08}
        rx="2"
      />
    ))}
    <path
      d="M 20 140 L 60 110 L 100 92 L 140 72 L 180 58 L 220 42 L 260 28 L 300 20"
      stroke="#f26a21"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 20 140 L 60 110 L 100 92 L 140 72 L 180 58 L 220 42 L 260 28 L 300 20 L 300 180 L 20 180 Z"
      fill="url(#ng-g)"
    />
    {[
      [20, 140],
      [60, 110],
      [100, 92],
      [140, 72],
      [180, 58],
      [220, 42],
      [260, 28],
      [300, 20],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3" fill="#fff" stroke="#f26a21" strokeWidth="2" />
    ))}
  </svg>
);

const PreviewFoxit = () => (
  <svg className="mini-chart" viewBox="0 0 320 200" preserveAspectRatio="none">
    <rect x="0" y="0" width="320" height="200" fill="#eff7fb" />
    {[
      [28, 150, 52],
      [72, 126, 76],
      [116, 102, 100],
      [160, 84, 118],
      [204, 70, 132],
      [248, 56, 146],
      [292, 44, 158],
    ].map(([x, y, h], i) => (
      <rect
        key={i}
        x={x - 12}
        y={y}
        width="24"
        height={h}
        fill={i % 2 === 0 ? "#ff5f00" : "#2b8cbe"}
        opacity={0.2 + i * 0.08}
        rx="3"
      />
    ))}
    <path
      d="M 20 150 L 60 126 L 100 108 L 140 84 L 180 70 L 220 58 L 260 48 L 300 40"
      stroke="#163042"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 20 165 L 60 150 L 100 142 L 140 122 L 180 112 L 220 102 L 260 94 L 300 88"
      stroke="#2b8cbe"
      strokeWidth="2"
      fill="none"
      strokeDasharray="4 4"
    />
  </svg>
);

const PreviewUTA = () => (
  <svg className="mini-chart" viewBox="0 0 320 200" preserveAspectRatio="none">
    <rect x="0" y="0" width="320" height="200" fill="#fafaf7" />
    {[30, 55, 45, 70, 60, 85, 75].map((h, i) => (
      <rect
        key={i}
        x={20 + i * 42}
        y={180 - h * 1.6}
        width="28"
        height={h * 1.6}
        fill="#005daa"
        opacity={0.45 + i * 0.06}
      />
    ))}
    <path
      d="M 34 130 Q 76 104 118 112 T 202 88 T 286 62"
      stroke="#ffc72c"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M 34 150 Q 76 140 118 142 T 202 132 T 286 124"
      stroke="#da291c"
      strokeWidth="2"
      fill="none"
      strokeDasharray="4 4"
    />
  </svg>
);

const PreviewSquirrel = () => (
  <svg className="mini-chart" viewBox="0 0 320 200" preserveAspectRatio="none">
    <rect x="0" y="0" width="320" height="200" fill="#fff5ef" />
    {["A", "B", "C", "D"].map((t, i) => {
      const y = 40 + i * 38;
      const w = 260 - i * 50;
      return (
        <g key={t}>
          <rect x="30" y={y} width={w} height="22" fill="#e6723a" opacity={0.96 - i * 0.18} rx="3" />
          <text x="40" y={y + 16} fontFamily="JetBrains Mono" fontSize="11" fill="#fff" fontWeight="700">
            {t}
          </text>
        </g>
      );
    })}
  </svg>
);

const PreviewHealthicity = () => (
  <svg className="mini-chart" viewBox="0 0 320 200" preserveAspectRatio="none">
    {Array.from({ length: 7 }).map((_, r) =>
      Array.from({ length: 7 }).map((_, c) => {
        const v = Math.abs(Math.sin(r * 1.3 + c * 0.7));
        return (
          <rect
            key={`${r}-${c}`}
            x={30 + c * 38}
            y={20 + r * 24}
            width="32"
            height="20"
            fill="#e8a83a"
            opacity={0.15 + v * 0.75}
            rx="2"
          />
        );
      })
    )}
  </svg>
);

const PreviewHillCap = () => (
  <svg className="mini-chart" viewBox="0 0 320 200" preserveAspectRatio="none">
    <rect x="0" y="0" width="320" height="200" fill="#0a0e13" />
    <path
      d="M 10 120 L 40 100 L 70 110 L 100 80 L 130 90 L 160 60 L 190 70 L 220 45 L 250 55 L 280 30 L 310 40"
      stroke="#ffb86c"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M 10 140 L 40 135 L 70 145 L 100 130 L 130 135 L 160 120 L 190 125 L 220 110 L 250 115 L 280 100 L 310 105"
      stroke="#4ade80"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M 10 160 L 40 155 L 70 158 L 100 150 L 130 155 L 160 148 L 190 150 L 220 145 L 250 148 L 280 140 L 310 142"
      stroke="#6e7b8a"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

const HERO_STATS = [
  ["13+", "years in RevOps and analytics"],
  ["6", "dashboard systems in the sandbox"],
  ["4", "interview-ready examples"],
  ["72 hrs/wk", "largest reporting win"],
];

const HeroV1 = () => (
  <section className="hero-v1">
    <div className="hero-v1-inner">
      <div className="hero-v1-cmd">sh --portfolio --focus=marketing-ops --region=utah</div>
      <h1 className="hero-v1-h1">
        Marketing ops,<br />
        BI and revenue<br />
        analytics for the <span className="hl">messy middle</span>
        <span className="hero-v1-cursor"></span>
      </h1>
      <p className="hero-v1-lead">
        Dashboards, examples, a focused resume and a practical operating approach built from
        real work across SaaS, local services, healthcare, public-sector analysis and
        quantitative research.
      </p>
      <div className="hero-v1-stats">
        {HERO_STATS.map(([n, l]) => (
          <div className="hero-v1-stat" key={n}>
            <div className="hero-v1-stat-n">{n}</div>
            <div className="hero-v1-stat-l">{l}</div>
          </div>
        ))}
      </div>
      <div className="hero-v1-ctas">
        <a className="hero-v1-btn hero-v1-btn-primary" href="Resume.html">
          open resume
        </a>
        <a className="hero-v1-btn hero-v1-btn-ghost" href="Examples.html">
          see examples
        </a>
        <a className="hero-v1-btn hero-v1-btn-ghost" href="HowIWork.html">
          how i work
        </a>
      </div>
    </div>
  </section>
);

const HeroV2 = () => (
  <section className="hero-v2">
    <div className="hero-v2-inner">
      <div>
        <div className="hero-v2-eyebrow">
          <span>Steve Hill - Sandbox refresh - 2026</span>
          <span>Salt Lake City, Utah</span>
        </div>
        <h1 className="hero-v2-h1">
          Marketing ops,<br />
          BI and revenue<br />
          analytics for the<br />
          <span className="wave">messy middle</span>.
        </h1>
        <p className="hero-v2-lead">
          Dashboards, examples, a focused resume and an interview-ready operating approach,
          rebuilt here inside the new design direction so we can compare the content against
          the current live site without touching production.
        </p>
        <div className="hero-v2-ctas">
          <a className="btn btn-filled" href="Resume.html">
            Open resume
          </a>
          <a className="btn" href="HowIWork.html">
            How I work
          </a>
        </div>
      </div>
      <div className="hero-v2-feature">
        <div className="hero-v2-feature-preview">
          <div className="dash-chrome">
            <span>NETGAIN - MID-FUNNEL VELOCITY</span>
            <span style={{ color: "#4ade80" }}>live preview</span>
          </div>
          <div className="dash-h">Moments that matter</div>
          <div className="dash-s">MQL -> SQL -> Opp -> Closed-Won across six products</div>
          <div style={{ height: 140 }}>
            <PreviewNetgain />
          </div>
        </div>
        <div className="hero-v2-feature-caption">
          <span className="hero-v2-feature-caption-t">Featured example - Netgain</span>
          <span className="hero-v2-feature-caption-n">250% mid-funnel lift</span>
        </div>
      </div>
    </div>
  </section>
);

const ProofStrip = () => (
  <section className="proof-strip">
    <div className="proof-inner">
      {[
        ["+250%", "Mid-funnel lift at Netgain"],
        ["60%+", "Lead CAC reduction at Website Squirrel"],
        ["72 hrs/wk", "Manual reporting removed at Foxit"],
        ["$15K", "Recovery view clarified at UTA"],
      ].map(([n, l]) => (
        <div className="proof-item" key={n}>
          <div className="proof-n">{n}</div>
          <div className="proof-l">{l}</div>
        </div>
      ))}
    </div>
  </section>
);

const DASH = [
  {
    tag: "N",
    brand: "Netgain",
    sub: "B2B SaaS",
    title: "Mid-Funnel Velocity Dashboard",
    desc: "MQL -> SQL -> Opp -> Closed-Won funnel with stage velocity, channel attribution, and deal-size cohorts for NetSuite and Sage Intacct buyers.",
    metric: "+250% lift",
    preview: PreviewNetgain,
    dark: false,
    brandClass: "brand-netgain",
    href: "Case-Netgain.html",
    linkLabel: "open example ->",
  },
  {
    tag: "F",
    brand: "Foxit",
    sub: "PDF + developer platform",
    title: "API Client Growth and Activation Funnel",
    desc: "Dev-sign-up -> first API call -> paid conversion, split by SDK language with activation and retention signals for a bottoms-up developer motion.",
    metric: "72 hrs/wk",
    preview: PreviewFoxit,
    dark: false,
    brandClass: "brand-foxit",
    href: "Case-Foxit.html",
    linkLabel: "open example ->",
  },
  {
    tag: "UTA",
    brand: "Utah Transit Authority",
    sub: "Operations BI",
    title: "TVM Failure Sequences and Service Recovery",
    desc: "Failure-path analysis, support visibility, and recovery prioritization across a 250+ ticket-machine network where the goal was operational action, not forecast theater.",
    metric: "$15K view",
    preview: PreviewUTA,
    dark: false,
    brandClass: "brand-uta",
    href: "Case-UTA.html",
    linkLabel: "open example ->",
  },
  {
    tag: "WS",
    brand: "Website Squirrel",
    sub: "Lead gen",
    title: "Lead Segmentation and CAC Dashboard",
    desc: "Micro-market segmentation, cost per lead by source, and CAC payback by service line for a lean growth team that needed one screen for spend decisions.",
    metric: "60%+ CAC drop",
    preview: PreviewSquirrel,
    dark: false,
    brandClass: "brand-squirrel",
    href: "Case-Squirrel.html",
    linkLabel: "open example ->",
  },
  {
    tag: "H",
    brand: "Healthicity",
    sub: "Healthcare compliance",
    title: "Lead Scoring Calculator",
    desc: "A+ through F lead-grade distribution, SQL conversion by tier, and a seven-dimension scoring breakdown modeled on the Healthicity HubSpot lead-scoring proposal.",
    metric: "2x conversion",
    preview: PreviewHealthicity,
    dark: false,
    brandClass: "",
    href: "https://stevehill.work/Models/healthicity_marketing_model.html",
    linkLabel: "open live artifact ->",
  },
  {
    tag: "HC",
    brand: "Hill Capital",
    sub: "Quant + portfolio analytics",
    title: "Quantitative Portfolio Dashboard",
    desc: "Bloomberg-inspired terminal for positions, factor exposure, P and L attribution, and backtest-informed risk monitoring from my post-UTA work.",
    metric: "live stack",
    preview: PreviewHillCap,
    dark: true,
    brandClass: "",
    href: "https://stevehill.work/Dashboards/hill_capital_quant_portfolio.html",
    linkLabel: "open live artifact ->",
  },
];

const DashGrid = () => (
  <div className="dash-grid">
    {DASH.map((d) => {
      const Preview = d.preview;
      return (
        <a
          key={d.brand}
          className={`dash-card ${d.brandClass || ""}`}
          href={d.href}
          target={d.href.startsWith("http") ? "_blank" : undefined}
          rel={d.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <div className={`dash-card-preview ${d.dark ? "dark" : ""}`}>
            <Preview />
          </div>
          <div className="dash-card-body">
            <div className="dash-card-tag">
              <span className="dash-card-mark">{d.tag}</span>
              <div>
                <div className="dash-card-brand">{d.brand}</div>
                <div className="dash-card-sub">{d.sub}</div>
              </div>
            </div>
            <div className="dash-card-title">{d.title}</div>
            <div className="dash-card-desc">{d.desc}</div>
            <div className="dash-card-foot">
              <span className={`tag ${d.dark ? "tag-term" : "tag-amber"}`}>{d.metric}</span>
              <span className="dash-card-open">{d.linkLabel}</span>
            </div>
          </div>
        </a>
      );
    })}
  </div>
);

const EXAMPLES = [
  {
    idx: "01",
    brand: "Foxit",
    theme: "Lifecycle marketing and reporting",
    title: "Unified product, billing, support, and marketing signals into one lifecycle system.",
    desc: "A fragmented growth stack became a usable operating layer for activation, expansion, and retention decisions across four products.",
    stats: ["72 hrs/wk saved", "3x ROI", "4 products"],
    focus: ["Activation", "Expansion", "Trusted reporting"],
    href: "Case-Foxit.html",
  },
  {
    idx: "02",
    brand: "Website Squirrel",
    theme: "Acquisition ops and CAC",
    title: "Cut lead CAC by 60%+ by prioritizing quality, routing, and follow-up.",
    desc: "The shift was away from raw lead counts and toward better scoring, cleaner segmentation, and more useful budget decisions.",
    stats: ["60%+ CAC reduction", "15 hrs/wk saved", "15% YoY profit"],
    focus: ["Segmentation", "Routing", "Budget reallocation"],
    href: "Case-Squirrel.html",
  },
  {
    idx: "03",
    brand: "Netgain",
    theme: "Attribution and mid-funnel focus",
    title: "Found the mid-funnel leverage point inside a long, multi-touch B2B journey.",
    desc: "The work focused the team on the stage that mattered most instead of spreading attention evenly across every metric in a six-product funnel.",
    stats: ["250% mid-funnel lift", "15% qualified lead lift", "30 touches avg."],
    focus: ["Attribution", "North Star metric", "Testing sprints"],
    href: "Case-Netgain.html",
  },
  {
    idx: "04",
    brand: "UTA",
    theme: "Operations BI and accountability",
    title: "Mapped ticket-machine failure paths and turned a reporting gap into an action queue.",
    desc: "This was less about forecasting and more about understanding where riders got stuck, what support teams were missing, and which fixes mattered first.",
    stats: ["$2.0M fare context", "250+ TVMs", "$15K recovery view"],
    focus: ["Failure paths", "Service recovery", "Vendor visibility"],
    href: "Case-UTA.html",
  },
];

const ExamplesList = () => (
  <div className="examples-list">
    {EXAMPLES.map((item) => (
      <a key={item.idx} className="example-row" href={item.href}>
        <div className="example-row-idx">
          <b>{item.idx}</b>
          <br />
          {item.brand}
        </div>
        <div>
          <div className="caption" style={{ marginBottom: 8 }}>
            {item.theme}
          </div>
          <h3 className="example-row-title">{item.title}</h3>
          <p className="example-row-desc">{item.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
            {item.focus.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="example-row-stats">
          {item.stats.map((s) => (
            <span key={s} className="tag tag-amber">
              {s}
            </span>
          ))}
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, marginTop: 6, fontWeight: 600 }}>
            read example ->
          </span>
        </div>
      </a>
    ))}
  </div>
);

const RESUME_ROWS = [
  [
    "2024 - 2025",
    "UTA",
    "Operations Analytics, Project Engagement",
    "Mapped ticket-machine failures, support visibility gaps, and recovery priorities across a 250+ TVM network.",
  ],
  [
    "2023 - 2024",
    "Website Squirrel",
    "Director of Growth and Marketing Data Analytics",
    "Lead scoring, segmentation, and routing system that cut lead CAC by 60%+ and removed 15 hours per week of reporting.",
  ],
  [
    "2021 - 2023",
    "Netgain Solutions",
    "Director, Marketing Operations and Analytics",
    "Owned attribution, scoring, and mid-funnel testing across six SaaS products, driving a 250% lift in the middle of the funnel.",
  ],
  [
    "2020 - 2021",
    "Foxit eSign",
    "Senior Marketing Director - Emerging Markets and Growth",
    "Unified four product lines into one lifecycle reporting layer that removed 72 hours of manual reporting each week and produced 3x ROI.",
  ],
  [
    "2018 - 2020",
    "Healthicity",
    "Digital Marketing Director and Demand Gen Manager",
    "Rebuilt product-tracking and lead-scoring workflows to improve conversion visibility, speed-to-lead, and reporting confidence.",
  ],
];

const ResumeSection = () => (
  <>
    <div className="resume-head">
      <div>
        <div className="eyebrow">Resume - selected experience</div>
        <h2 className="resume-title">Steve Hill</h2>
        <div className="resume-sub">Marketing Ops, BI and Analytics - Salt Lake City, Utah</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
        <a className="btn btn-amber" href="assets/steve-hill-resume.pdf">
          Download PDF
        </a>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "var(--ink-light)",
            letterSpacing: "0.08em",
          }}
        >
          Updated Apr 2026
        </span>
      </div>
    </div>
    <div className="resume-body">
      <div className="resume-sect-label">Experience</div>
      {RESUME_ROWS.map(([y, co, role, result]) => (
        <div key={`${y}-${co}`} className="resume-row">
          <span className="yr">{y}</span>
          <span className="co">{co}</span>
          <span className="role">{role}</span>
          <span className="res">{result}</span>
        </div>
      ))}
      <div className="resume-triple">
        <div>
          <div className="resume-sect-label" style={{ marginBottom: 8 }}>
            Core tools
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6 }}>
            SQL, Python, Power BI, Power Query, HubSpot, Salesforce, GA4, Google Ads, Meta Ads
          </div>
        </div>
        <div>
          <div className="resume-sect-label" style={{ marginBottom: 8 }}>
            Domains
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6 }}>
            B2B SaaS, local services, healthcare compliance, public sector operations, quantitative research
          </div>
        </div>
        <div>
          <div className="resume-sect-label" style={{ marginBottom: 8 }}>
            Contact
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6 }}>
            me@stevehill.work
            <br />
            (801) 850-1253
            <br />
            linkedin.com/in/sthill
          </div>
        </div>
      </div>
    </div>
  </>
);

Object.assign(window, {
  HeroV1,
  HeroV2,
  ProofStrip,
  DashGrid,
  ExamplesList,
  ResumeSection,
  PreviewNetgain,
  PreviewFoxit,
  PreviewUTA,
  PreviewSquirrel,
  PreviewHealthicity,
  PreviewHillCap,
});
