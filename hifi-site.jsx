const SITE_NAV_GPT = [
  ["home", "Home", "index.html"],
  ["process", "How I Work", "HowIWork.html"],
  ["dash", "Dashboards", "Dashboards.html"],
  ["ex", "Examples", "Examples.html"],
  ["resume", "Resume", "Resume.html"],
  ["blog", "Blog", "Blog.html"],
];

const NavHiFiGPT = ({ active = "home" }) => {
  const { Logo } = window;
  return (
    <nav className="nav nav-flat">
      <div className="nav-inner">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <a href="index.html" className="nav-logo">
            <Logo compact />
          </a>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
            }}
          >
            Consulting, Contract, Employment - 801-850-1253
          </div>
        </div>
        <div className="nav-links">
          {SITE_NAV_GPT.map(([key, label, href]) => (
            <a key={key} className={`nav-link ${active === key ? "is-active" : ""}`} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a href="mailto:me@stevehill.work" className="nav-cta">
          me@stevehill.work
        </a>
      </div>
    </nav>
  );
};

const SiteFooterHiFiGPT = () => (
  <footer className="site-footer-gpt">
    <div className="site-footer-gpt-inner">
      <div>
        <strong>Steve Hill</strong>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(251,250,245,.62)", marginTop: 5 }}>
          Marketing Ops, BI and Analytics
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 14 }}>
        <a href="mailto:me@stevehill.work">me@stevehill.work</a>
        <a href="tel:8018501253">801-850-1253</a>
        <a href="assets/steve-hill-resume.pdf">Resume PDF</a>
      </div>
    </div>
  </footer>
);

const SiteShellHiFiGPT = ({ active, children }) => (
  <div className="blog-mock">
    <NavHiFiGPT active={active} />
    {children}
    <SiteFooterHiFiGPT />
  </div>
);

const BlogHeroHiFiGPT = ({ eyebrow, title, lead, noteTitle, note, actions }) => (
  <section className="blog-hero">
    <div className="blog-hero-inner">
      <div>
        <div className="blog-kicker">{eyebrow}</div>
        <h1 className="blog-title">{title}</h1>
        <p className="blog-lede">{lead}</p>
        {actions && <div className="site-page-actions">{actions}</div>}
      </div>
      <aside className="blog-hero-aside">
        <img className="blog-brand-stamp" src="assets/logo-square.svg" alt="Steve Hill logo" />
        <h2>{noteTitle}</h2>
        <p>{note}</p>
      </aside>
    </div>
  </section>
);

const SideRailHiFiGPT = ({ label = "On this page", links }) => (
  <aside className="blog-side-rail" aria-label={label}>
    <div className="blog-side-label">{label}</div>
    <nav>
      {links.map(([href, text]) => (
        <a href={href} key={href}>{text}</a>
      ))}
    </nav>
  </aside>
);

const SectionIntroHiFiGPT = ({ eyebrow, title, copy }) => (
  <div className="blog-section-head">
    <div className="blog-kicker">{eyebrow}</div>
    <div>
      <h2>{title}</h2>
      {copy && <p style={{ color: "var(--ink-soft)", lineHeight: 1.66, maxWidth: 760 }}>{copy}</p>}
    </div>
  </div>
);

const LedgerHiFiGPT = ({ items }) => (
  <div className="site-ledger-grid">
    {items.map(([value, label]) => (
      <div className="site-ledger-cell" key={label}>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    ))}
  </div>
);

const MethodStripHiFiGPT = ({ steps }) => (
  <div className="method-strip">
    {steps.map(([n, label]) => (
      <div className="method-step" key={label}>
        <span>{n}</span>
        <b>{label}</b>
      </div>
    ))}
  </div>
);

const DASH_GPT_HIFI = [
  ["N", "Netgain", "B2B SaaS", "Mid-Funnel Velocity Dashboard", "Attribution, scoring and stage velocity across a six-product portfolio.", "+250% lift", "Case-Netgain.html", "brand-netgain", "PreviewNetgain"],
  ["F", "Foxit", "Document SaaS", "API Client Growth and Activation Funnel", "Activation, expansion and lifecycle visibility across four products.", "72 hrs/wk", "Case-Foxit.html", "brand-foxit", "PreviewFoxit"],
  ["UTA", "Utah Transit Authority", "Operations BI", "TVM Failure Sequences and Service Recovery", "Failure-path analysis, support visibility and recovery prioritization.", "$15K view", "Case-UTA.html", "brand-uta", "PreviewUTA"],
  ["WS", "Website Squirrel", "Lead Gen", "Lead Segmentation and CAC Dashboard", "Lead quality, source economics and CAC payback for spend decisions.", "60%+ CAC drop", "Case-Squirrel.html", "brand-squirrel", "PreviewSquirrel"],
];

const DashGridHiFiGPT = () => (
  <div className="dash-grid">
    {DASH_GPT_HIFI.map(([tag, brand, sub, title, desc, metric, href, brandClass, previewName]) => {
      const Preview = window[previewName];
      return (
        <a key={brand} className={`dash-card ${brandClass}`} href={href}>
          <div className="dash-card-preview">
            <Preview />
          </div>
          <div className="dash-card-body">
            <div className="dash-card-tag">
              <span className="dash-card-mark">{tag}</span>
              <div>
                <div className="dash-card-brand">{brand}</div>
                <div className="dash-card-sub">{sub}</div>
              </div>
            </div>
            <div className="dash-card-title">{title}</div>
            <div className="dash-card-desc">{desc}</div>
            <div className="dash-card-foot">
              <span className="tag tag-amber">{metric}</span>
              <span className="dash-card-open">open GPT example -&gt;</span>
            </div>
          </div>
        </a>
      );
    })}
  </div>
);

const EXAMPLES_GPT_HIFI = [
  ["01", "Foxit", "Lifecycle reporting", "Unified product, billing, support and marketing signals into one lifecycle system.", "Reporting trust", "Case-Foxit.html"],
  ["02", "Website Squirrel", "Acquisition quality", "Cut lead CAC by prioritizing source feedback, routing and segment quality.", "CAC efficiency", "Case-Squirrel.html"],
  ["03", "Netgain", "Attribution and velocity", "Found the mid-funnel signal inside a long, multi-touch SaaS buyer journey.", "Conversion lift", "Case-Netgain.html"],
  ["04", "UTA", "Operations BI", "Mapped ticket-machine failure paths into an action queue and vendor accountability view.", "Service visibility", "Case-UTA.html"],
];

const EXAMPLE_FUNNEL_REPORTS_GPT = [
  ["First touch", "Which source created the demand worth following?", ["Spend", "CTR", "CPL", "Qualified visits"]],
  ["Lead intake", "Did the inquiry get captured, routed and answered?", ["Calls / day", "Answer rate", "Source match", "Cost / lead"]],
  ["Booking", "Which leads became real scheduled work or sales motion?", ["Booked rate", "Speed to touch", "Cost / booked customer", "Lead quality"]],
  ["Revenue", "Did the outcome justify the spend and handoff effort?", ["Revenue", "ROAS", "CAC", "Closed-loop match"]],
  ["Lifecycle", "Did the customer return, expand, renew or refer?", ["Repeat", "Expansion", "NPS", "Referral signal"]],
  ["Feedback", "What should the next test, fix or scale decision be?", ["Win / lose / learn", "Test owner", "Confidence", "Next move"]]
];

const EXAMPLE_CHANNEL_REPORTS_GPT = [
  ["Paid search", "High-intent demand", "ROAS, booked-job rate, CAC, query quality and call-source confidence."],
  ["Paid social", "Demand creation", "CPL, assisted conversions, creative fatigue and downstream source quality."],
  ["Organic / SEO", "Durable demand", "Service-page conversion, organic calls, content assists and local visibility."],
  ["Email / lifecycle", "Nurture and return", "Reactivation, repeat revenue, expansion, unsubscribes and cost per repeat."],
  ["Sales / CS handoff", "Operational conversion", "Speed to first touch, routing quality, call outcome and booked conversion."],
  ["Offline / direct", "Attribution confidence", "Promo codes, matched calls, branded search lift and source reconciliation."]
];

const CASE_REPORT_EXAMPLES_GPT = {
  foxit: [
    ["Activation dashboard", "Which product signals predict paid conversion or expansion?", ["Trial start", "Feature adoption", "Usage depth", "Activation rate", "Expansion signal"]],
    ["Lifecycle revenue report", "Where does product usage connect to billing, support and marketing follow-up?", ["MRR", "Plan tier", "Support status", "Cross-sell path", "Retention risk"]],
    ["Executive portfolio view", "What should leadership scale, fix or watch across four products?", ["Product mix", "ROI", "Manual hours saved", "Signal confidence", "Next action"]]
  ],
  "website-squirrel": [
    ["Lead quality dashboard", "Which sources create prospects worth follow-up?", ["CPL", "Lead score", "Source quality", "Routing tier", "CAC"]],
    ["Segment economics report", "Which customer profile has the best acquisition economics?", ["Employee band", "Revenue band", "Conversion rate", "LTV signal", "CAC payback"]],
    ["Budget movement view", "Where should spend shift after quality is visible?", ["Spend", "Booked rate", "ROAS proxy", "Profit lift", "Scale / stop"]]
  ],
  netgain: [
    ["Mid-funnel velocity dashboard", "Which touches move a prospect toward opportunity?", ["MQL to SQL", "SQL to opp", "Touch count", "Stage velocity", "NSM attainment"]],
    ["Multi-touch attribution report", "Which campaigns introduce, assist and close pipeline?", ["First touch", "Assist touch", "Close touch", "Weighted value", "Pipeline influence"]],
    ["Testing scorecard", "Which experiment moves more leads into the moments that matter?", ["Hypothesis", "Test status", "Lift", "Confidence", "Next move"]]
  ],
  uta: [
    ["Failure sequence dashboard", "Where does the rider flow break?", ["Selection path", "Error class", "Failure count", "Location", "Severity"]],
    ["Support visibility report", "Which issues are not surfacing clearly enough to the support team?", ["Alert coverage", "Lag time", "Vendor visibility", "Action queue", "SLA risk"]],
    ["Recovery prioritization view", "Which fixes should be worked first?", ["Revenue context", "Rider impact", "Repeat issue", "Station priority", "Fix owner"]]
  ]
};

const ExamplesListHiFiGPT = () => (
  <div className="examples-list">
    {EXAMPLES_GPT_HIFI.map(([idx, brand, theme, title, lever, href]) => (
      <a key={brand} className="example-row" href={href}>
        <div className="example-row-idx">
          <b>{idx}</b>
          <br />
          {brand}
        </div>
        <div>
          <div className="caption" style={{ marginBottom: 8 }}>{theme}</div>
          <h3 className="example-row-title">{title}</h3>
          <p className="example-row-desc">
            A concise STAR proof point with lifecycle context, the operating lever, and the result.
          </p>
        </div>
        <div className="example-row-stats">
          <span className="tag tag-amber">{lever}</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, marginTop: 6, fontWeight: 600 }}>
            read GPT example -&gt;
          </span>
        </div>
      </a>
    ))}
  </div>
);

const HomeGPT = () => (
  <SiteShellHiFiGPT active="home">
    <BlogHeroHiFiGPT
      eyebrow="Steve Hill / marketing ops, BI and analytics"
      title={<>Make the <span className="paper-cut">messy middle</span> usable.</>}
      lead="I build the measurement layer between marketing spend and business outcomes: scorecards, attribution, lifecycle maps, operating dashboards and plain-English decision support."
      noteTitle="Practical, clear, and operating-minded."
      note="The work should feel senior without sounding inflated. It should show judgment, not just technical range."
      actions={<><a className="btn btn-filled" href="Examples.html">See examples</a><a className="btn" href="HowIWork.html">How I work</a></>}
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#proof", "Proof"], ["#operating-system", "Operating system"], ["#dashboards", "Dashboards"], ["#examples", "Examples"], ["#resume", "Resume"]]} />
      <div>
        <section id="proof" className="blog-section">
          <LedgerHiFiGPT items={[
            ["60%+", "lead CAC reduction through better segmentation and source-quality feedback"],
            ["250%", "mid-funnel lift by finding the moments that actually moved conversion"],
            ["72 hrs/wk", "manual reporting removed by reconciling product, billing, support and marketing"],
            ["13+", "years across marketing operations, BI, SaaS, local services and analytics"],
          ]} />
        </section>
        <section id="operating-system" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Operating system" title="The site should read like a working system, not a gallery." copy="Each page answers a different hiring-team question: how I think, what I have built, where the proof lives and what the numbers mean." />
          <div className="pillar-ledger">
            {[
              ["01 / Decision", "Start with the business decision.", "If no action changes, the analysis probably should not happen yet."],
              ["02 / Handoff", "Measure where the work changes hands.", "Marketing, intake, sales, service and follow-up all shape the outcome."],
              ["03 / Economics", "Connect cost to booked outcomes.", "ROAS, CAC and cost per booked customer need clean downstream handoffs."],
              ["04 / Loop", "Close the loop after the recommendation.", "The next readout should say whether the move actually worked."],
            ].map(([num, title, copy]) => (
              <div className="pillar-line" key={title}>
                <div className="pillar-number">{num}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="dashboards" className="blog-section site-dash-tight">
          <SectionIntroHiFiGPT eyebrow="Dashboards" title="Operating surfaces with a reason to exist." copy="The dashboard library keeps the original card system, but the framing is now about the decision each artifact supports." />
          <DashGridHiFiGPT />
        </section>
        <section id="examples" className="blog-section site-example-tight">
          <SectionIntroHiFiGPT eyebrow="Examples" title="Proof, not archive." copy="Concise STAR stories, lifecycle context and one clear operating takeaway." />
          <ExamplesListHiFiGPT />
        </section>
        <section id="resume" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Resume" title="The through-line is operating clarity." copy="Marketing operations, BI, attribution, funnel analytics and executive reporting across several operating contexts." />
          <a className="btn btn-filled" href="Resume.html">Open resume page</a>
        </section>
      </div>
    </div>
  </SiteShellHiFiGPT>
);

const HowIWorkGPT = () => {
  const principles = [
    ["01 / Decision", "Lead with the business question", "Start with the decision leadership needs to make, then work backward into the data, report and cadence."],
    ["02 / Readability", "Keep reporting readable", "A useful scorecard should be scan-friendly enough for a marketing executive and specific enough for operators."],
    ["03 / Handoffs", "Make the handoffs visible", "The real story usually sits between marketing, intake, booking, service delivery and follow-up."],
    ["04 / Confidence", "Stay honest about data trust", "Measured, inferred and missing data should be labeled clearly so leaders know how much weight to place on the result."],
    ["05 / Testing", "Build for testing, not theater", "The reporting layer should help the team scale wins, stop weak ideas and see whether changes actually worked."],
    ["06 / Translation", "Translate across teams", "The same system needs to work for marketing, sales, operations, finance and support without requiring everyone to speak analytics."]
  ];

  const scorecardMetrics = [
    ["Spend", "$22.4K", "Media cost for the week"],
    ["Calls / day", "41", "Upstream demand pressure"],
    ["Leads", "261", "Qualified inquiries captured"],
    ["Cost / lead", "$86", "Cost to create qualified demand"],
    ["Services booked / day", "17", "Main operating North Star"],
    ["Cost / booked customer", "$214", "Cost to reach the real funnel goal"],
    ["Booked-job rate", "44%", "Lead-to-booking handoff strength"],
    ["Revenue", "$94K", "Closed-loop booked or completed value"],
    ["ROAS", "4.2x", "Media efficiency with revenue mapped back"],
    ["CAC", "$342", "Acquisition cost after quality filters"],
    ["Repeat / referral", "19%", "Downstream quality signal"],
    ["NPS", "68", "Promoter strength after service"]
  ];

  const revenueKpis = [
    ["Pipeline / booked revenue contribution", "How much qualified revenue is sourced or influenced by marketing."],
    ["CAC efficiency", "Whether acquisition cost improves without degrading source quality."],
    ["Booked-job rate", "The practical conversion bridge between lead volume and revenue."],
    ["Conversion velocity", "How quickly demand moves from first touch to qualified booking or revenue."]
  ];

  const funnelReports = [
    ["First touch / demand capture", "Is the media creating the right kind of demand?", ["Spend", "Impressions", "CTR", "CPC", "Landing CVR", "Cost / qualified visit"]],
    ["Lead intake / call", "Are inquiries being captured and answered cleanly?", ["Calls / day", "Forms", "Answer rate", "Missed calls", "Cost / lead", "Source match rate"]],
    ["Qualification / booking", "Which leads become real booked work?", ["Booked-job rate", "Speed to first touch", "Booking lag", "Cost / booked customer", "Lead quality", "Source quality"]],
    ["Service delivery", "Did the booked work complete and create revenue?", ["Completion rate", "Cancel rate", "Revenue / job", "No-show rate", "Margin proxy", "Source-to-revenue match"]],
    ["Follow-up / repeat", "Are past customers being brought back into the funnel?", ["Repeat rate", "Maintenance attach", "Reactivation bookings", "Cost / repeat", "Time to return", "LTV signal"]],
    ["Referral / promoter", "Which sources create customers who advocate?", ["NPS", "Review velocity", "Referral rate", "Cost / referred customer", "Promoter source", "Review-to-booking impact"]]
  ];

  const channelReports = [
    ["Google Search / LSA", "High-intent demand", "ROAS, CPL, booked-job rate, call quality, search terms and revenue by service line."],
    ["Meta", "Demand creation and assists", "Spend, CPL, assisted bookings, creative fatigue, audience quality and booked-customer economics."],
    ["SEO / Organic", "Durable demand", "Organic calls, service-page conversion, local visibility, assisted revenue and content-to-booking paths."],
    ["Email / SMS", "Lifecycle lift", "Repeat bookings, reactivation revenue, unsubscribe/compliance, cost per repeat and maintenance-plan attach."],
    ["Referral / Reviews", "Promoter loop", "NPS, review velocity, referral bookings, review-source quality and promoter conversion."],
    ["Direct / Brand / Offline", "Trust and attribution checks", "Brand demand, call tracking confidence, promo codes, matched calls and offline source reconciliation."]
  ];

  const stackStages = [
    ["Attract", "Google Ads / Meta / SEO", "Spend, CTR, cost per lead"],
    ["Measure", "GA4 / GTM / CallRail", "UTMs, calls, weighted touch value"],
    ["Route", "CRM / forms / lead queues", "Speed, status, source quality"],
    ["Book", "Scheduling / operating system", "Book rate, cost per booked customer"],
    ["Report", "Power BI / scorecards", "ROAS, CAC, revenue, test reads"],
    ["Feedback", "Reviews / NPS / follow-up", "Repeat, referral and promoter signals"]
  ];

  const attributionRows = [
    ["First touch", "Shows what started demand.", "Can over-credit awareness channels if no assists are visible."],
    ["Last touch", "Gives a fast read on the apparent closer.", "Can over-credit branded search, direct traffic or final call sources."],
    ["Weighted multi-touch", "Assigns partial value to intro, assist and close touches.", "Still depends on clean UTMs, call tracking and booking handoff."],
    ["Operational reality check", "Compares attribution against call speed, booking rate and completed revenue.", "Without this, ROAS and CAC can look more certain than they are."]
  ];

  const deliverables = [
    ["Friday growth brief", "Scale / fix / test", "One page that turns the week's funnel movement into action."],
    ["Source-quality board", "Lead to revenue", "Shows which channels create real downstream value, not just volume."],
    ["Funnel leak report", "Stage diagnosis", "Finds whether the issue is media, intake, booking, delivery or follow-up."],
    ["Channel efficiency report", "Budget movement", "Compares ROAS, CAC, CPL and booked-job rate by channel."],
    ["Attribution confidence board", "Trust labels", "Separates measured, inferred and unknown source value."],
    ["Automation queue", "Less manual reporting", "Flags refreshes, data gaps, anomalies and repeatable summaries."]
  ];

  return (
    <SiteShellHiFiGPT active="process">
      <BlogHeroHiFiGPT
        eyebrow="How I Work"
        title={<>Decision first. <span className="paper-cut">Dashboard second.</span></>}
        lead="My best work starts by clarifying the business decision, then building the scorecard, source logic or automation that makes the decision easier to make again."
        noteTitle="The point is not more reporting."
        note="The point is a cleaner operating rhythm: fewer mystery metrics, faster diagnosis and a clearer handoff between marketing, sales, service and finance."
      />
      <div className="blog-rail-layout">
        <SideRailHiFiGPT links={[
          ["#principles", "Principles"],
          ["#method", "Operating loop"],
          ["#scorecard", "Scorecard"],
          ["#funnel-stage-dashboards", "Funnel dashboards"],
          ["#channel-dashboards", "Channel dashboards"],
          ["#lifecycle-stack", "Lifecycle + stack"],
          ["#attribution", "Attribution"],
          ["#deliverables", "Deliverables"]
        ]} />
        <div>
          <section id="principles" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="Core approach" title="The principles I use before I build the report." copy="These are the habits behind the portfolio: practical decision support, clear definitions, honest caveats and a shorter path from reporting to action." />
            <div className="pillar-ledger site-principle-ledger">
              {principles.map(([num, title, copy]) => (
                <div className="pillar-line" key={title}>
                  <div className="pillar-number">{num}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="method" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="Operating loop" title="The six-step loop I keep coming back to." copy="This is the compact version of the problem-solving framework behind the portfolio. It keeps the work grounded before it gets technical." />
            <MethodStripHiFiGPT steps={[["01", "Frame"], ["02", "Hypothesize"], ["03", "Source"], ["04", "Diagnose"], ["05", "Translate"], ["06", "Close loop"]]} />
            <div className="blog-note-band site-note-split">
              <h3>What usually breaks.</h3>
              <p>The reporting exists, but the handoff is unclear. Spend is visible, but booked work is not connected cleanly. Leads are counted, but quality is vague. A dashboard shows what happened, but not what to do next.</p>
            </div>
          </section>

          <section id="scorecard" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="Growth baseline scorecard" title="The metrics I want visible before a growth conversation." copy="A quick scan should show demand volume, cost per funnel goal, booking output, media efficiency and downstream quality in one view." />
            <div className="site-score-row site-score-row-wide">
              {scorecardMetrics.map(([label, value, copy]) => (
                <div className="site-score-card" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
            <div className="site-kpi-band">
              <div>
                <div className="site-small-label">Revenue impact KPIs</div>
                <h3>The proof that marketing ops is driving revenue, not just keeping reports tidy.</h3>
              </div>
              <div className="site-kpi-list">
                {revenueKpis.map(([title, copy]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <span>{copy}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="funnel-stage-dashboards" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="Funnel-stage dashboards" title="Each stage gets its own operating report." copy="The executive view should roll up cleanly, but the diagnosis has to separate stage problems. A weak month can come from expensive media, missed calls, slow booking, poor completion, or weak follow-up." />
            <div className="funnel-report-grid">
              {funnelReports.map(([stage, question, metrics], idx) => (
                <article className="funnel-report-card" key={stage}>
                  <div className="funnel-report-index">{String(idx + 1).padStart(2, "0")}</div>
                  <h3>{stage}</h3>
                  <p>{question}</p>
                  <div className="metric-chip-row">
                    {metrics.map((metric) => <span key={metric}>{metric}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="channel-dashboards" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="Marketing-channel dashboards" title="Channel reports should explain quality, not just spend." copy="I like channel views that compare acquisition cost with booking quality and downstream value. That keeps the conversation focused on budget movement, not vanity volume." />
            <div className="channel-ledger">
              {channelReports.map(([channel, role, copy]) => (
                <div className="channel-line" key={channel}>
                  <div>
                    <span>{role}</span>
                    <h3>{channel}</h3>
                  </div>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="lifecycle-stack" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="Lifecycle + stack" title="The stack should follow the customer journey." copy="The systems do not need to look complicated. They need to keep the customer journey, operational handoff and scorecard aligned from first touch through repeat and referral." />
            <div className="site-lifecycle-line">
              {stackStages.map(([stage, tools, metrics], idx) => (
                <div className={`site-lifecycle-stage ${idx === 1 || idx === 3 ? "is-active" : ""}`} key={stage}>
                  <span>Stage {idx + 1}</span>
                  <h3>{stage}</h3>
                  <p><strong>{tools}</strong></p>
                  <p>{metrics}</p>
                </div>
              ))}
            </div>
            <div className="site-score-row">
              {[["Tracking coverage", "94%", "Pages and campaigns tagged correctly"], ["Call attribution", "89%", "Calls matched to channel and campaign"], ["Booking sync", "91%", "Booked jobs tied back to source"], ["Dashboard freshness", "Daily", "Decision view refreshed on a useful rhythm"], ["Taxonomy adoption", "100%", "Shared naming across campaigns"], ["Test velocity", "3 / mo", "Enough clean data to judge tests"]].map(([label, value, copy]) => (
                <div className="site-score-card" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="attribution" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="Attribution" title="Attribution should help budget decisions, not just sound sophisticated." copy="The useful version compares multiple touches with call-center and booked-job reality so ROAS, CAC and channel value are trusted enough to act on." />
            <div className="attribution-board">
              <div className="attribution-copy">
                <h3>A practical attribution view weights the journey.</h3>
                <p>First touch might start the demand, an assist touch might build confidence, and the final call or form might close the booking. I want those touches weighted, then checked against offline conversion quality so a campaign gets credit for the value it actually helped create.</p>
                <div className="site-score-row attribution-score-row">
                  {[["Intro", "25%"], ["Assist", "35%"], ["Close", "40%"], ["Offline match", "87%"]].map(([label, value]) => (
                    <div className="site-score-card" key={label}><span>{label}</span><strong>{value}</strong></div>
                  ))}
                </div>
              </div>
              <div className="attribution-table">
                {attributionRows.map(([model, use, risk]) => (
                  <div key={model}>
                    <strong>{model}</strong>
                    <span>{use}</span>
                    <em>{risk}</em>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="deliverables" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="What I know how to build" title="The repeated deliverables behind the portfolio." copy="The goal is not more dashboards. It is a short list of tools the team can actually use to make better weekly decisions." />
            <div className="post-timeline">
              {deliverables.map(([title, topic, copy], idx) => (
                <div className="post-line" key={title}>
                  <div className="post-line-date">{String(idx + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <div className="post-line-topic">{topic}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SiteShellHiFiGPT>
  );
};

const DashboardsGPT = () => (
  <SiteShellHiFiGPT active="dash">
    <BlogHeroHiFiGPT
      eyebrow="Dashboards"
      title={<>Operating surfaces, <span className="paper-cut">not metric museums.</span></>}
      lead="A useful dashboard makes the next action easier to see: scale, pause, fix, test, route, follow up or investigate."
      noteTitle="Same assets, sharper framing."
      note="This page keeps the card system but positions each dashboard around the operating question a leader would actually ask."
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#ledger", "Summary"], ["#grid", "Dashboard library"], ["#questions", "Operating questions"]]} />
      <div>
        <section id="ledger" className="blog-section">
          <LedgerHiFiGPT items={[["6", "dashboard surfaces"], ["18+", "KPIs tracked"], ["4", "stories tied to dashboards"], ["1", "analytics backbone"]]} />
        </section>
        <section id="grid" className="blog-section site-dash-tight">
          <SectionIntroHiFiGPT eyebrow="Dashboard library" title="Each dashboard answers a different operating question." copy="The design stays visual, but the point is decision support." />
          <DashGridHiFiGPT />
        </section>
        <section id="questions" className="blog-section">
          <div className="post-timeline">
            {[["Where is the funnel leaking?", "Lead, booking and stage-rate movement."], ["Which sources deserve more budget?", "CAC, ROAS and booked-customer economics."], ["Where is the handoff weak?", "Call intake, routing, follow-up and service completion."], ["Which insight should become automated?", "Repeatable reporting that saves time and improves cadence."]].map(([title, copy], idx) => (
              <div className="post-line" key={title}><div className="post-line-date">0{idx + 1}</div><div><h3>{title}</h3><p>{copy}</p></div><div className="post-line-topic">Question</div></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </SiteShellHiFiGPT>
);

const ExamplesGPT = () => (
  <SiteShellHiFiGPT active="ex">
    <BlogHeroHiFiGPT
      eyebrow="Examples"
      title={<>STAR stories with <span className="paper-cut">operating proof.</span></>}
      lead="These are not long case-study archives. They are concise proof points: what was broken, what I owned, what changed, and which lifecycle lever moved."
      noteTitle="The interview use case matters."
      note="The reader should be able to scan one story and understand both the business result and the kind of operator behind it."
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#comparison", "Comparison"], ["#funnel-reports", "Funnel reports"], ["#channel-reports", "Channel reports"], ["#stories", "Stories"]]} />
      <div>
        <section id="comparison" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Comparison layer" title="The four stories cover different operating muscles." copy="Together they show attribution, lifecycle reporting, CAC efficiency, mid-funnel strategy and operational BI." />
          <div className="post-timeline">
            {EXAMPLES_GPT_HIFI.map(([idx, brand, theme, title, lever, href]) => (
              <a className="post-line" href={href} key={brand}><div className="post-line-date">{idx}</div><div><h3>{brand}: {lever}</h3><p>{title}</p></div><div className="post-line-topic">{theme}</div></a>
            ))}
          </div>
        </section>
        <section id="funnel-reports" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Funnel report layer" title="The same proof can be read by funnel stage." copy="This adds the operating lens behind the STAR stories: where the work lived, which handoff mattered, and which dashboard would make the next decision easier." />
          <div className="funnel-report-grid">
            {EXAMPLE_FUNNEL_REPORTS_GPT.map(([stage, question, metrics], idx) => (
              <article className="funnel-report-card" key={stage}>
                <div className="funnel-report-index">{String(idx + 1).padStart(2, "0")}</div>
                <h3>{stage}</h3>
                <p>{question}</p>
                <div className="metric-chip-row">
                  {metrics.map((metric) => <span key={metric}>{metric}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="channel-reports" className="blog-section">
          <SectionIntroHiFiGPT eyebrow="Channel and handoff reports" title="The channel view should include quality and follow-through." copy="A channel dashboard should not stop at spend and leads. It should show whether that source produced booked work, revenue, repeat value, or a handoff problem worth fixing." />
          <div className="channel-ledger">
            {EXAMPLE_CHANNEL_REPORTS_GPT.map(([channel, role, copy]) => (
              <div className="channel-line" key={channel}>
                <div>
                  <span>{role}</span>
                  <h3>{channel}</h3>
                </div>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="stories" className="blog-section site-example-tight">
          <SectionIntroHiFiGPT eyebrow="Four stories" title="Concise, branded, and built for scanning." copy="Each page keeps a lifecycle visual and STAR summary." />
          <ExamplesListHiFiGPT />
        </section>
      </div>
    </div>
  </SiteShellHiFiGPT>
);

const ResumeGPT = () => {
  const { ResumeSection } = window;
  return (
    <SiteShellHiFiGPT active="resume">
      <BlogHeroHiFiGPT
        eyebrow="Resume"
        title={<>The through-line is <span className="paper-cut">operating clarity.</span></>}
        lead="Marketing operations, BI, attribution, funnel analytics and executive reporting across SaaS, local services, public-sector operations and independent analytical work."
        noteTitle="What I want the resume to do."
        note="Make the range easy to understand without making the reader work too hard. The story is not tools. The story is judgment plus systems."
        actions={<><a className="btn btn-filled" href="assets/steve-hill-resume.pdf">Download PDF</a><a className="btn" href="mailto:me@stevehill.work">Email me</a></>}
      />
      <div className="blog-rail-layout">
        <SideRailHiFiGPT links={[["#experience", "Experience"], ["#capabilities", "Capabilities"]]} />
        <div>
          <section id="experience" className="blog-section">
            <ResumeSection />
          </section>
          <section id="capabilities" className="blog-section">
            <SectionIntroHiFiGPT eyebrow="What I build" title="Four repeatable capabilities behind the job history." copy="This keeps the resume page useful for a hiring manager who wants to know what the experience adds up to." />
            <div className="pillar-ledger">
              {[["01 / MarTech", "Integration and data flows", "CRM, source fields, campaign data and process automation."], ["02 / Attribution", "CAC and ROAS clarity", "Measurement that connects spend to booked and retained outcomes."], ["03 / Scorecards", "Executive operating rhythm", "Weekly views that show what moved and what to do next."], ["04 / Lifecycle", "Handoff diagnostics", "Marketing, sales, service, support, follow-up and referral in one journey."]].map(([num, title, copy]) => (
                <div className="pillar-line" key={title}><div className="pillar-number">{num}</div><h3>{title}</h3><p>{copy}</p></div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SiteShellHiFiGPT>
  );
};

const CaseStudyGPT = ({ cfg }) => {
  const Preview = cfg.preview;
  const reportExamples = CASE_REPORT_EXAMPLES_GPT[cfg.slug] || [];
  return (
    <SiteShellHiFiGPT active="ex">
      <div className={`site-case ${cfg.brandClass}`}>
        <section className="article-masthead">
          <div className="article-masthead-inner">
            <article>
              <a className="article-back" href="Examples.html">Back to examples</a>
              <div className="blog-kicker">{cfg.brand} / STAR proof / {cfg.industry}</div>
              <h1 className="article-title">{cfg.title}</h1>
              <p className="article-dek">{cfg.lead}</p>
              <div className="site-page-actions">
                <a className="btn btn-filled" href="Examples.html">Back to examples</a>
                <a className="btn" href="Dashboards.html">See dashboards</a>
              </div>
            </article>
            <aside className="article-snapshot">
              <div className="article-meta-line"><span className="tag tag-amber">{cfg.readTime}</span><span className="tag">{cfg.industry}</span></div>
              <h2>{cfg.dashTitle}</h2>
              <p>{cfg.dashSub}</p>
              <div style={{ height: 150, marginTop: 18 }}><Preview /></div>
            </aside>
          </div>
        </section>
        <div className="article-content-layout">
          <SideRailHiFiGPT label="Story sections" links={[["#metrics", "Metrics"], ["#lifecycle", "Lifecycle"], ["#reports", "Reports"], ["#star", "STAR"], ["#takeaway", "Takeaway"]]} />
          <article className="article-prose">
            <section id="metrics">
              <LedgerHiFiGPT items={cfg.stats} />
            </section>
            <section id="lifecycle">
              <h2>Where the work changed the journey.</h2>
              <p>{cfg.journeyIntro}</p>
              <div className="site-lifecycle-line">
                {cfg.journey.map((stage, idx) => (
                  <div key={stage.label} className={`site-lifecycle-stage ${stage.active ? "is-active" : ""}`}>
                    <span>Stage {idx + 1}</span>
                    <h3>{stage.label}</h3>
                    <p>{stage.note}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="reports">
              <h2>Dashboard examples this story points to.</h2>
              <p>These are the report cuts I would expect to sit underneath the story. The executive view stays short, but the working layer separates funnel stage, source quality, handoff strength, and the next action.</p>
              <div className="funnel-report-grid case-report-grid">
                {reportExamples.map(([stage, question, metrics], idx) => (
                  <article className="funnel-report-card" key={stage}>
                    <div className="funnel-report-index">{String(idx + 1).padStart(2, "0")}</div>
                    <h3>{stage}</h3>
                    <p>{question}</p>
                    <div className="metric-chip-row">
                      {metrics.map((metric) => <span key={metric}>{metric}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section id="star">
              <h2>The story in STAR format.</h2>
              <p>{cfg.starIntro}</p>
              <div className="site-star-list">
                {cfg.star.map(([label, copy]) => (
                  <div className="site-star-row" key={label}><h3>{label}</h3><p>{copy}</p></div>
                ))}
              </div>
            </section>
            <section id="takeaway">
              <div className="pull-quote">The value was not the artifact. The value was making the operating signal trustworthy enough to act on.</div>
              <p style={{ color: "var(--ink-light)", fontSize: 13 }}>All Raw Data Remains Proprietary</p>
            </section>
          </article>
          <aside className="article-side-note" aria-label="Story note">
            <div className="article-side-note-inner">
              <h3>Operating takeaway</h3>
              <p>{cfg.fix}</p>
            </div>
          </aside>
        </div>
      </div>
    </SiteShellHiFiGPT>
  );
};

const ReviewGPT = () => (
  <SiteShellHiFiGPT active="home">
    <BlogHeroHiFiGPT
      eyebrow="Review hub"
      title={<>HiFiBlog <span className="paper-cut">site set.</span></>}
      lead="This is the review entry point for the full GPT-suffixed site recreated in the HiFiBlog visual direction."
      noteTitle="What changed."
      note="The rest of the site now uses the same editorial heroes, side rails, ledgers, timelines and article-style story structure as the blog mock."
    />
    <div className="blog-rail-layout">
      <SideRailHiFiGPT links={[["#pages", "Pages"]]} />
      <section id="pages" className="blog-section">
        <SectionIntroHiFiGPT eyebrow="Pages" title="Review the HiFiBlog-style variants." copy="Original sandbox pages are still available. These are the GPT-suffixed review pages." />
        <div className="post-timeline">
          {[["Home", "index.html", "Overall story and proof hierarchy"], ["How I Work", "HowIWork.html", "Operating principles and scorecard examples"], ["Dashboards", "Dashboards.html", "Dashboard framing as decision surfaces"], ["Blog", "Blog.html", "Blog index mock"], ["Examples", "Examples.html", "Story hub and comparison layer"], ["Resume", "Resume.html", "Resume as capability narrative"], ["Foxit", "Case-Foxit.html", "Lifecycle reporting story"], ["Website Squirrel", "Case-Squirrel.html", "CAC and lead-quality story"], ["Netgain", "Case-Netgain.html", "Attribution and mid-funnel story"], ["UTA", "Case-UTA.html", "Operations BI story"]].map(([name, href, copy]) => (
            <a className="post-line" href={href} key={name}><div className="post-line-date">{name}</div><div><h3>{copy}</h3><p>Open the GPT version and compare against the original sandbox page.</p></div><div className="post-line-topic">Open</div></a>
          ))}
        </div>
      </section>
    </div>
  </SiteShellHiFiGPT>
);

Object.assign(window, {
  NavHiFiGPT,
  SiteShellHiFiGPT,
  HomeGPT,
  HowIWorkGPT,
  DashboardsGPT,
  ExamplesGPT,
  ResumeGPT,
  CaseStudyGPT,
  ReviewGPT,
});
