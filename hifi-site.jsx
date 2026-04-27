const SITE_NAV = [
  ["home", "Home", "index.html"],
  ["process", "How I Work", "HowIWork.html"],
  ["dash", "Dashboards", "Dashboards.html"],
  ["ex", "Examples", "Examples.html"],
  ["resume", "Resume", "Resume.html"],
  ["blog", "Blog", "Blog.html"],
];

const NavHiFi = ({ active = "home" }) => {
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
          {SITE_NAV.map(([key, label, href]) => (
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

const SiteFooterHiFi = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
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

const SiteShellHiFi = ({ active, children }) => (
  <div className="blog-mock">
    <NavHiFi active={active} />
    {children}
    <SiteFooterHiFi />
  </div>
);

const BlogHeroHiFi = ({ eyebrow, title, lead, noteTitle, note, actions }) => (
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

const SideRailHiFi = ({ label = "On this page", links }) => (
  <aside className="blog-side-rail" aria-label={label}>
    <div className="blog-side-label">{label}</div>
    <nav>
      {links.map(([href, text]) => (
        <a href={href} key={href}>{text}</a>
      ))}
    </nav>
  </aside>
);

const SectionIntroHiFi = ({ eyebrow, title, copy }) => (
  <div className="blog-section-head">
    <div className="blog-kicker">{eyebrow}</div>
    <div>
      <h2>{title}</h2>
      {copy && <p style={{ color: "var(--ink-soft)", lineHeight: 1.66, maxWidth: 760 }}>{copy}</p>}
    </div>
  </div>
);

const LedgerHiFi = ({ items }) => (
  <div className="site-ledger-grid">
    {items.map(([value, label]) => (
      <div className="site-ledger-cell" key={label}>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    ))}
  </div>
);

const MethodStripHiFi = ({ steps }) => (
  <div className="method-strip">
    {steps.map(([n, label]) => (
      <div className="method-step" key={label}>
        <span>{n}</span>
        <b>{label}</b>
      </div>
    ))}
  </div>
);

const DASH_HIFI = [
  ["N", "Netgain", "B2B SaaS", "Mid-Funnel Velocity Dashboard", "Attribution, scoring and stage velocity across a six-product portfolio.", "+250% lift", "Case-Netgain.html", "brand-netgain", "PreviewNetgain"],
  ["F", "Foxit", "Document SaaS", "API Client Growth and Activation Funnel", "Activation, expansion and lifecycle visibility across four products.", "72 hrs/wk", "Case-Foxit.html", "brand-foxit", "PreviewFoxit"],
  ["UTA", "Utah Transit Authority", "Operations BI", "TVM Failure Sequences and Service Recovery", "Failure-path analysis, support visibility and recovery prioritization.", "$15K view", "Case-UTA.html", "brand-uta", "PreviewUTA"],
  ["WS", "Website Squirrel", "Lead Gen", "Lead Segmentation and CAC Dashboard", "Lead quality, source economics and CAC payback for spend decisions.", "60%+ CAC drop", "Case-Squirrel.html", "brand-squirrel", "PreviewSquirrel"],
];

const DashGridHiFi = () => (
  <div className="dash-grid">
    {DASH_HIFI.map(([tag, brand, sub, title, desc, metric, href, brandClass, previewName]) => {
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
              <span className="dash-card-open">open example -&gt;</span>
            </div>
          </div>
        </a>
      );
    })}
  </div>
);

const EXAMPLES_HIFI = [
  ["01", "Foxit", "Lifecycle reporting", "Unified product, billing, support and marketing signals into one lifecycle system.", "Reporting trust", "Case-Foxit.html"],
  ["02", "Website Squirrel", "Acquisition quality", "Cut lead CAC by prioritizing source feedback, routing and segment quality.", "CAC efficiency", "Case-Squirrel.html"],
  ["03", "Netgain", "Attribution and velocity", "Found the mid-funnel signal inside a long, multi-touch SaaS buyer journey.", "Conversion lift", "Case-Netgain.html"],
  ["04", "UTA", "Operations BI", "Mapped ticket-machine failure paths into an action queue and vendor accountability view.", "Service visibility", "Case-UTA.html"],
];

const EXAMPLE_FUNNEL_REPORTS = [
  ["First touch", "Which source created the demand worth following?", ["Spend", "CTR", "CPL", "Qualified visits"]],
  ["Lead intake", "Did the inquiry get captured, routed and answered?", ["Calls / day", "Answer rate", "Source match", "Cost / lead"]],
  ["Booking", "Which leads became real scheduled work or sales motion?", ["Booked rate", "Speed to touch", "Cost / booked customer", "Lead quality"]],
  ["Revenue", "Did the outcome justify the spend and handoff effort?", ["Revenue", "ROAS", "CAC", "Closed-loop match"]],
  ["Lifecycle", "Did the customer return, expand, renew or refer?", ["Repeat", "Expansion", "NPS", "Referral signal"]],
  ["Feedback", "What should the next test, fix or scale decision be?", ["Win / lose / learn", "Test owner", "Confidence", "Next move"]]
];

const EXAMPLE_CHANNEL_REPORTS = [
  ["Paid search", "High-intent demand", "ROAS, booked-job rate, CAC, query quality and call-source confidence."],
  ["Paid social", "Demand creation", "CPL, assisted conversions, creative fatigue and downstream source quality."],
  ["Organic / SEO", "Durable demand", "Service-page conversion, organic calls, content assists and local visibility."],
  ["Email / lifecycle", "Nurture and return", "Reactivation, repeat revenue, expansion, unsubscribes and cost per repeat."],
  ["Sales / CS handoff", "Operational conversion", "Speed to first touch, routing quality, call outcome and booked conversion."],
  ["Offline / direct", "Attribution confidence", "Promo codes, matched calls, branded search lift and source reconciliation."]
];

const CASE_REPORT_EXAMPLES = {
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

const ExamplesListHiFi = () => (
  <div className="examples-list">
    {EXAMPLES_HIFI.map(([idx, brand, theme, title, lever, href]) => (
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
            read example -&gt;
          </span>
        </div>
      </a>
    ))}
  </div>
);

const HomePageSite = () => (
  <SiteShellHiFi active="home">
    <BlogHeroHiFi
      eyebrow="Steve Hill / marketing ops, BI and analytics"
      title={<>Make the <span className="paper-cut">messy middle</span> usable.</>}
      lead="I build the measurement layer between marketing spend and business outcomes: scorecards, attribution, lifecycle maps, operating dashboards and plain-English decision support."
      noteTitle="Practical, clear, and operating-minded."
      note="The work should feel senior without sounding inflated. It should show judgment, not just technical range."
      actions={<><a className="btn btn-filled" href="Examples.html">See examples</a><a className="btn" href="HowIWork.html">How I work</a></>}
    />
    <div className="blog-rail-layout">
      <SideRailHiFi links={[["#proof", "Proof"], ["#operating-system", "Operating system"], ["#dashboards", "Dashboards"], ["#examples", "Examples"], ["#resume", "Resume"]]} />
      <div>
        <section id="proof" className="blog-section">
          <LedgerHiFi items={[
            ["60%+", "lead CAC reduction through better segmentation and source-quality feedback"],
            ["250%", "mid-funnel lift by finding the moments that actually moved conversion"],
            ["72 hrs/wk", "manual reporting removed by reconciling product, billing, support and marketing"],
            ["13+", "years across marketing operations, BI, SaaS, local services and analytics"],
          ]} />
        </section>
        <section id="operating-system" className="blog-section">
          <SectionIntroHiFi eyebrow="Operating system" title="The site should read like a working system, not a gallery." copy="Each page answers a different hiring-team question: how I think, what I have built, where the proof lives and what the numbers mean." />
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
          <SectionIntroHiFi eyebrow="Dashboards" title="Operating surfaces with a reason to exist." copy="The dashboard library keeps the original card system, but the framing is now about the decision each artifact supports." />
          <DashGridHiFi />
        </section>
        <section id="examples" className="blog-section site-example-tight">
          <SectionIntroHiFi eyebrow="Examples" title="Proof, not archive." copy="Concise STAR stories, lifecycle context and one clear operating takeaway." />
          <ExamplesListHiFi />
        </section>
        <section id="resume" className="blog-section">
          <SectionIntroHiFi eyebrow="Resume" title="The through-line is operating clarity." copy="Marketing operations, BI, attribution, funnel analytics and executive reporting across several operating contexts." />
          <a className="btn btn-filled" href="Resume.html">Open resume page</a>
        </section>
      </div>
    </div>
  </SiteShellHiFi>
);

const HowIWorkPageSite = () => {
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
    <SiteShellHiFi active="process">
      <BlogHeroHiFi
        eyebrow="How I Work"
        title={<>Decision first. <span className="paper-cut">Dashboard second.</span></>}
        lead="My best work starts by clarifying the business decision, then building the scorecard, source logic or automation that makes the decision easier to make again."
        noteTitle="The point is not more reporting."
        note="The point is a cleaner operating rhythm: fewer mystery metrics, faster diagnosis and a clearer handoff between marketing, sales, service and finance."
      />
      <div className="blog-rail-layout">
        <SideRailHiFi links={[
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
            <SectionIntroHiFi eyebrow="Core approach" title="The principles I use before I build the report." copy="These are the habits behind the portfolio: practical decision support, clear definitions, honest caveats and a shorter path from reporting to action." />
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
            <SectionIntroHiFi eyebrow="Operating loop" title="The six-step loop I keep coming back to." copy="This is the compact version of the problem-solving framework behind the portfolio. It keeps the work grounded before it gets technical." />
            <MethodStripHiFi steps={[["01", "Frame"], ["02", "Hypothesize"], ["03", "Source"], ["04", "Diagnose"], ["05", "Translate"], ["06", "Close loop"]]} />
            <div className="blog-note-band site-note-split">
              <h3>What usually breaks.</h3>
              <p>The reporting exists, but the handoff is unclear. Spend is visible, but booked work is not connected cleanly. Leads are counted, but quality is vague. A dashboard shows what happened, but not what to do next.</p>
            </div>
          </section>

          <section id="scorecard" className="blog-section">
            <SectionIntroHiFi eyebrow="Growth baseline scorecard" title="The metrics I want visible before a growth conversation." copy="A quick scan should show demand volume, cost per funnel goal, booking output, media efficiency and downstream quality in one view." />
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
            <SectionIntroHiFi eyebrow="Funnel-stage dashboards" title="Each stage gets its own operating report." copy="The executive view should roll up cleanly, but the diagnosis has to separate stage problems. A weak month can come from expensive media, missed calls, slow booking, poor completion, or weak follow-up." />
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
            <SectionIntroHiFi eyebrow="Marketing-channel dashboards" title="Channel reports should explain quality, not just spend." copy="I like channel views that compare acquisition cost with booking quality and downstream value. That keeps the conversation focused on budget movement, not vanity volume." />
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
            <SectionIntroHiFi eyebrow="Lifecycle + stack" title="The stack should follow the customer journey." copy="The systems do not need to look complicated. They need to keep the customer journey, operational handoff and scorecard aligned from first touch through repeat and referral." />
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
            <SectionIntroHiFi eyebrow="Attribution" title="Attribution should help budget decisions, not just sound sophisticated." copy="The useful version compares multiple touches with call-center and booked-job reality so ROAS, CAC and channel value are trusted enough to act on." />
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
            <SectionIntroHiFi eyebrow="What I know how to build" title="The repeated deliverables behind the portfolio." copy="The goal is not more dashboards. It is a short list of tools the team can actually use to make better weekly decisions." />
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
    </SiteShellHiFi>
  );
};

const DashboardsPageSite = () => (
  <SiteShellHiFi active="dash">
    <BlogHeroHiFi
      eyebrow="Dashboards"
      title={<>Operating surfaces, <span className="paper-cut">not metric museums.</span></>}
      lead="A useful dashboard makes the next action easier to see: scale, pause, fix, test, route, follow up or investigate."
      noteTitle="Same assets, sharper framing."
      note="This page keeps the card system but positions each dashboard around the operating question a leader would actually ask."
    />
    <div className="blog-rail-layout">
      <SideRailHiFi links={[["#ledger", "Summary"], ["#grid", "Dashboard library"], ["#questions", "Operating questions"]]} />
      <div>
        <section id="ledger" className="blog-section">
          <LedgerHiFi items={[["6", "dashboard surfaces"], ["18+", "KPIs tracked"], ["4", "stories tied to dashboards"], ["1", "analytics backbone"]]} />
        </section>
        <section id="grid" className="blog-section site-dash-tight">
          <SectionIntroHiFi eyebrow="Dashboard library" title="Each dashboard answers a different operating question." copy="The design stays visual, but the point is decision support." />
          <DashGridHiFi />
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
  </SiteShellHiFi>
);

const ExamplesPageSite = () => (
  <SiteShellHiFi active="ex">
    <BlogHeroHiFi
      eyebrow="Examples"
      title={<>STAR stories with <span className="paper-cut">operating proof.</span></>}
      lead="These are not long case-study archives. They are concise proof points: what was broken, what I owned, what changed, and which lifecycle lever moved."
      noteTitle="The interview use case matters."
      note="The reader should be able to scan one story and understand both the business result and the kind of operator behind it."
    />
    <div className="blog-rail-layout">
      <SideRailHiFi links={[["#comparison", "Comparison"], ["#funnel-reports", "Funnel reports"], ["#channel-reports", "Channel reports"], ["#stories", "Stories"]]} />
      <div>
        <section id="comparison" className="blog-section">
          <SectionIntroHiFi eyebrow="Comparison layer" title="The four stories cover different operating muscles." copy="Together they show attribution, lifecycle reporting, CAC efficiency, mid-funnel strategy and operational BI." />
          <div className="post-timeline">
            {EXAMPLES_HIFI.map(([idx, brand, theme, title, lever, href]) => (
              <a className="post-line" href={href} key={brand}><div className="post-line-date">{idx}</div><div><h3>{brand}: {lever}</h3><p>{title}</p></div><div className="post-line-topic">{theme}</div></a>
            ))}
          </div>
        </section>
        <section id="funnel-reports" className="blog-section">
          <SectionIntroHiFi eyebrow="Funnel report layer" title="The same proof can be read by funnel stage." copy="This adds the operating lens behind the STAR stories: where the work lived, which handoff mattered, and which dashboard would make the next decision easier." />
          <div className="funnel-report-grid">
            {EXAMPLE_FUNNEL_REPORTS.map(([stage, question, metrics], idx) => (
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
          <SectionIntroHiFi eyebrow="Channel and handoff reports" title="The channel view should include quality and follow-through." copy="A channel dashboard should not stop at spend and leads. It should show whether that source produced booked work, revenue, repeat value, or a handoff problem worth fixing." />
          <div className="channel-ledger">
            {EXAMPLE_CHANNEL_REPORTS.map(([channel, role, copy]) => (
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
          <SectionIntroHiFi eyebrow="Four stories" title="Concise, branded, and built for scanning." copy="Each page keeps a lifecycle visual and STAR summary." />
          <ExamplesListHiFi />
        </section>
      </div>
    </div>
  </SiteShellHiFi>
);

const ResumePageSite = () => {
  const { ResumeSection } = window;
  return (
    <SiteShellHiFi active="resume">
      <BlogHeroHiFi
        eyebrow="Resume"
        title={<>The through-line is <span className="paper-cut">operating clarity.</span></>}
        lead="Marketing operations, BI, attribution, funnel analytics and executive reporting across SaaS, local services, public-sector operations and independent analytical work."
        noteTitle="What I want the resume to do."
        note="Make the range easy to understand without making the reader work too hard. The story is not tools. The story is judgment plus systems."
        actions={<><a className="btn btn-filled" href="assets/steve-hill-resume.pdf">Download PDF</a><a className="btn" href="mailto:me@stevehill.work">Email me</a></>}
      />
      <div className="blog-rail-layout">
        <SideRailHiFi links={[["#experience", "Experience"], ["#capabilities", "Capabilities"]]} />
        <div>
          <section id="experience" className="blog-section">
            <ResumeSection />
          </section>
          <section id="capabilities" className="blog-section">
            <SectionIntroHiFi eyebrow="What I build" title="Four repeatable capabilities behind the job history." copy="This keeps the resume page useful for a hiring manager who wants to know what the experience adds up to." />
            <div className="pillar-ledger">
              {[["01 / MarTech", "Integration and data flows", "CRM, source fields, campaign data and process automation."], ["02 / Attribution", "CAC and ROAS clarity", "Measurement that connects spend to booked and retained outcomes."], ["03 / Scorecards", "Executive operating rhythm", "Weekly views that show what moved and what to do next."], ["04 / Lifecycle", "Handoff diagnostics", "Marketing, sales, service, support, follow-up and referral in one journey."]].map(([num, title, copy]) => (
                <div className="pillar-line" key={title}><div className="pillar-number">{num}</div><h3>{title}</h3><p>{copy}</p></div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SiteShellHiFi>
  );
};

const IHS_NEEDS = [
  ["A", "Lead & Attribution", "UTM taxonomy, lead source tracking, first-touch vs. last-touch, multi-touch attribution, and offline attribution via media-mix thinking."],
  ["B", "Funnel & Conversion", "Stage-level funnel dashboards, call-center conversion, speed-to-first-touch, booking leakage, and source quality diagnostics."],
  ["C", "CAC, ROAS & LTV", "Channel-level CAC, ROAS, cohort LTV, payback period, LTV:CAC, and brand-by-brand budget decisions."],
  ["D", "Operational Feedback", "Marketing-to-service-completion linkage, complaint signals, revenue per lead, retention, reviews, and source-to-quality feedback."],
  ["E", "Data Infrastructure", "CRM, marketing platform, analytics, call-tracking, ServiceTitan-like operational systems, data contracts, and lead-routing automation."],
  ["F", "AI & Automation", "Automated reporting, narrative summaries, anomaly detection, data-quality alerts, and fewer manual reporting hours."]
];

const IHS_PHASES = [
  ["Days 1-30", "Inventory and baseline", "Confirm the current stack, source fields, call tracking, funnel definitions, and the first version of a brand stack inventory.", ["Brand Stack Inventory & Standardization Matrix", "Growth baseline scorecard draft", "Current-state funnel definitions"]],
  ["Days 31-60", "Tracking governance", "Align on UTM taxonomy, source definitions, call disposition fields, booking-stage logic, and the first data-quality checks.", ["Shared Tracking Governance Proposal", "Source-quality QA checklist", "Lead-to-booking field map"]],
  ["Days 61-90", "Pilot scorecard and diagnosis", "Launch one pilot scorecard with spend, calls, booked work, CAC, ROAS, revenue, and the stage where leakage is happening.", ["Pilot weekly growth scorecard", "Funnel leak report", "Channel efficiency readout"]],
  ["Days 91-120", "Testing rhythm and rollout", "Turn the scorecard into a weekly scale/fix/test operating rhythm and define the roadmap for the next brands.", ["Stack Standardization Roadmap", "Growth-testing backlog", "Executive decision rhythm"]]
];

const IHS_STACK = [
  ["Observed current public stack", "The public footprint appears partly standardized at the operating layer and more siloed at the web/tracking layer.", ["WordPress on most brand sites", "WP Engine + Cloudflare on most sites", "GTM present but container IDs vary", "ServiceTitan appears likely as the operating layer", "Power BI named in the role description", "Google Ads / Meta / CallRail appear uneven by brand"]],
  ["Target standardized growth stack", "The target is not one-size-fits-all marketing. It is shared measurement, protected brand identity, and clean source-to-booked-job visibility.", ["Shared UTM and lead-source taxonomy", "Call tracking connected to campaign/source", "CRM and operating-system handoff fields", "Power BI scorecards with confidence labels", "Weekly scale/fix/test cadence", "Feedback loop from service completion, NPS, reviews, repeat, and referral"]]
];

const IHS_PROJECT_STATUS = [
  ["Overall status", "On Target", "Green"],
  ["Day counter", "Day 0 of 120", "Pre-kickoff / Round 3 interview phase"],
  ["Day 120 promise", "10 inventoried / 1 pilot proven", "2 fast-follow started / 7 queued"]
];

const IHS_PROJECT_PHASES = [
  ["Phase 0", "Pre-kickoff", "In progress"],
  ["Phase 1", "Inventory", "Days 1-30"],
  ["Phase 2", "Stabilize on pilot", "Days 31-60"],
  ["Phase 3", "Operationalize", "Days 61-90"],
  ["Phase 4", "Scale", "Days 91-120"]
];

const IHS_PROJECT_BRANDS = [
  ["Superior Water & Air", "Fast-follow candidate"],
  ["SameDay", "Queued"],
  ["Beehive Plumbing", "Fast-follow candidate"],
  ["Diamond", "Queued"],
  ["Master Rooter", "Queued"],
  ["Comfort Solutions", "Queued"],
  ["Walker / St. George", "Queued"],
  ["Craig's Services", "Queued"],
  ["Lee's", "Queued"],
  ["My Buddy the Plumber", "Fast-follow candidate"]
];

const IHS_PROJECT_GATES = [
  ["Day 30", "Inventory", "Inventory all 10 brands, audit the stack, and score pilot candidates."],
  ["Day 60", "Pilot live", "Pilot governance, dashboard, data contract, and playbook v0 are usable."],
  ["Day 90", "Operating cadence", "Friday Growth Review, closed-loop v0, leakage layer, and Brand 2 start."],
  ["Day 120", "Budget moves live", "Budget Move Board, Brand 3 start, playbook v2, and rollout roadmap."]
];

const IHS_WORKSTREAM_LOAD = [
  ["Executive / CMO", ["Med", "Low", "Med", "High"]],
  ["Performance Marketing", ["High", "High", "Med", "Med"]],
  ["Brand / GMs", ["High", "Med", "Med", "Med"]],
  ["IT / Data / ServiceTitan", ["Peak", "High", "Med", "Low"]],
  ["Call Center / CS", ["Med", "Med", "High", "Low"]],
  ["Finance / Ops", ["Low", "Low", "Med", "High"]],
  ["Steve / MOps", ["Peak", "Peak", "Peak", "Peak"]]
];

const IHS_RISK_LOG = [
  ["R1", "Data access delay after kickoff", "High", "If access takes more than 3 business days, escalate the blocker list and use exports for the interim baseline."],
  ["R2", "ServiceTitan field quality gaps", "High", "If Campaign or Job Tag fields are incomplete or repurposed, label confidence honestly and standardize pilot fields first."],
  ["R3", "Pilot GM perceives audit, not investment", "Medium", "Use the pilot memo, brand-protected map, and adoption plan so the work feels like help, not compliance overhead."],
  ["R4", "Scope creeps into operations redesign", "Medium", "Run the scope-change protocol before changing timeline, ownership, or deliverable expectations."]
];

const IHS_DECISION_LOG = [
  ["D-001", "Use 10-brand portfolio model", "Made", "Keeps the plan aligned to the full brand list instead of legacy 8-brand language."],
  ["D-002", "Day 120 promise: 1 pilot proven, 2 fast-follow, 7 queued", "Made", "Ambitious but credible; built around pilot-then-replicate instead of pretending all brands finish at once."],
  ["D-003", "Confirm actual project start date", "Needed", "Required before final Gantt dates or stage-gate commitments are locked."],
  ["D-004", "Name department owners", "Needed", "IT/Data, ServiceTitan, CS, Performance Marketing, Web/GTM, Finance, and pilot GM owners need to be named at kickoff."],
  ["D-005", "Approve pilot selection criteria and candidates", "Needed", "Use the inventory and pilot scoring workbook before selecting the Day 31 pilot."]
];

const IHS_SCOPE_PROTOCOL = [
  ["Capture", "Log who asked, when, the business reason, and the source."],
  ["Classify", "Separate clarification, new requirement, risk, issue, dependency, and timeline shift."],
  ["Assess", "Check impact on time, resources, data confidence, deliverables, and expectations."],
  ["Decide", "Accept, defer, trade off, escalate, reject, or backlog the request."],
  ["Update", "Revise the scorecard, timeline, risk log, RACI, and stage notes."],
  ["Communicate", "Name what changed, why, who owns it, and what moves as a result."]
];

const IHSLandingPageSite = () => (
  <SiteShellHiFi active="home">
    <BlogHeroHiFi
      eyebrow="Private interview packet"
      title={<>IHS-specific <span className="paper-cut">growth operations packet.</span></>}
      lead="This page separates role-specific material from the public portfolio. The detailed 120-day plan should be protected with Cloudflare Access before the link is shared."
      noteTitle="Recommended access model."
      note="Keep the overview lightweight. Protect the detailed plan route at the Cloudflare edge so the content is not exposed as a public page."
      actions={<><a className="btn btn-filled" href="IHS-120-Day-Plan.html">Open 120-day plan</a><a className="btn" href="HowIWork.html">How I work</a></>}
    />
    <div className="blog-rail-layout">
      <SideRailHiFi links={[["#packet", "Packet"], ["#focus", "Operating focus"], ["#access", "Access"]]} />
      <div>
        <section id="packet" className="blog-section">
          <SectionIntroHiFi eyebrow="Packet overview" title="A role-specific layer built on top of the public portfolio." copy="The public site shows the broader operating model. This section narrows the lens to home-services growth operations, attribution, call intake, booked jobs, service completion, repeat, referral, and testing cadence." />
          <div className="pillar-ledger site-principle-ledger">
            {[["01 / Context", "Why this role needs an operating system", "Marketing performance depends on clean source capture, call intake, booking quality, completed revenue, and feedback from the customer experience."], ["02 / Plan", "How I would approach the first 120 days", "Start with inventory and definitions, then build governance, pilot the scorecard, and turn it into a weekly testing rhythm."], ["03 / Proof", "How the portfolio maps to the role", "Foxit, Netgain, Website Squirrel, and UTA show the same pattern: make the handoff visible, then turn the signal into action."]].map(([num, title, copy]) => (
              <div className="pillar-line" key={title}><div className="pillar-number">{num}</div><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </section>
        <section id="focus" className="blog-section">
          <SectionIntroHiFi eyebrow="Operating focus" title="The six needs the protected plan expands." copy="These are the workstreams the detailed plan organizes into a practical first-120-days sequence." />
          <div className="funnel-report-grid">
            {IHS_NEEDS.map(([code, title, copy]) => (
              <article className="funnel-report-card" key={title}>
                <div className="funnel-report-index">{code}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="access" className="blog-section">
          <div className="blog-note-band">
            <h3>Protect the detailed plan, not the whole portfolio.</h3>
            <p>The clean setup is to leave this overview public or semi-private, then use Cloudflare Access on only <strong>/IHS-120-Day-Plan</strong>. That keeps the main portfolio easy to browse while the interview-specific plan requires authentication.</p>
          </div>
        </section>
      </div>
    </div>
  </SiteShellHiFi>
);

const IHSPlanPageSite = () => (
  <SiteShellHiFi active="home">
    <BlogHeroHiFi
      eyebrow="Access-controlled plan / IHS"
      title={<>120-day plan for <span className="paper-cut">Intermountain Home Services.</span></>}
      lead="The goal is to build a trusted measurement layer for growth testing: capture the funnel cleanly, test fast, see impact quickly, stop weak ideas, and scale wins across brands."
      noteTitle="Bottom line."
      note="Jacqueline should have a practical weekly view of services booked per day, calls per day, ROAS, CAC, booking quality, revenue, and source confidence."
      actions={<><a className="btn btn-filled" href="#plan-phases">Jump to plan</a><a className="btn" href="IHS.html">Packet overview</a></>}
    />
    <div className="blog-rail-layout">
      <SideRailHiFi links={[["#bottom-line", "Bottom line"], ["#project-scorecard", "Project scorecard"], ["#needs", "Needs matrix"], ["#lifecycle", "Lifecycle"], ["#stack", "Stack"], ["#growth-scorecard", "Growth scorecard"], ["#plan-phases", "120 days"], ["#access", "Access setup"]]} />
      <div>
        <section id="bottom-line" className="blog-section">
          <SectionIntroHiFi eyebrow="Bottom line" title="The first win is a reliable operating rhythm, not a prettier dashboard." copy="The first 120 days should prove version one of the measurement operating system: shared funnel language, cleaner source capture, a pilot scorecard, and a repeatable scale/fix/test meeting cadence." />
          <div className="site-score-row">
            {[["North Star", "Services booked / day", "The main operating metric"], ["Demand", "Calls / day", "Upstream demand pressure"], ["Efficiency", "ROAS", "Media return with source confidence"], ["Cost", "CAC", "Acquisition cost after quality filters"], ["Quality", "Booked-job rate", "Lead-to-booking handoff strength"], ["Trust", "Source confidence", "Measured vs. inferred attribution"]].map(([label, value, copy]) => (
              <div className="site-score-card" key={label}><span>{label}</span><strong>{value}</strong><p>{copy}</p></div>
            ))}
          </div>
        </section>
        <section id="project-scorecard" className="blog-section">
          <SectionIntroHiFi eyebrow="Project scorecard" title="One-glance control view for the 10-brand build." copy="This brings the branded scorecard packet into the plan: current status, phase progression, brand cascade, gates, workstream load, active risks, decisions, and scope governance." />
          <div className="project-status-band">
            {IHS_PROJECT_STATUS.map(([label, value, copy]) => (
              <div className="project-status-cell" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <div className="project-phase-grid">
            {IHS_PROJECT_PHASES.map(([phase, name, days], idx) => (
              <div className={`project-phase-cell ${idx === 0 ? "is-current" : ""}`} key={phase}>
                <span>{phase}</span>
                <strong>{name}</strong>
                <p>{days}</p>
              </div>
            ))}
          </div>
          <div className="project-cascade">
            <div className="project-pilot-card">
              <span>Selected at Day 30</span>
              <h3>Pilot brand: To Be Selected</h3>
              <p>The pilot should be chosen through the Commonality Matrix: trade representativeness, mid-size paid spend, stack maturity, GM receptivity, and how closely the motion mirrors the portfolio.</p>
              <div className="metric-chip-row"><span>Inventory pending</span><span>Tracking confidence TBD</span><span>CMO + pilot GM + IT sign-off</span></div>
            </div>
            <div className="project-brand-grid">
              {IHS_PROJECT_BRANDS.map(([brand, status], idx) => (
                <div className="project-brand-card" key={brand}>
                  <span>Brand {String(idx + 1).padStart(2, "0")}</span>
                  <strong>{brand}</strong>
                  <em>{status}</em>
                </div>
              ))}
            </div>
          </div>
          <div className="project-gate-list">
            {IHS_PROJECT_GATES.map(([gate, title, copy]) => (
              <div className="project-gate-row" key={gate}>
                <span>{gate}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <div className="project-heatmap">
            <div className="project-heat-head">Workstream</div>
            {["Days 1-30", "Days 31-60", "Days 61-90", "Days 91-120"].map((label) => <div className="project-heat-head" key={label}>{label}</div>)}
            {IHS_WORKSTREAM_LOAD.map(([workstream, loads]) => (
              <React.Fragment key={workstream}>
                <div className="project-heat-label">{workstream}</div>
                {loads.map((load, idx) => <div className={`project-heat-cell heat-${load.toLowerCase()}`} key={`${workstream}-${idx}`}>{load}</div>)}
              </React.Fragment>
            ))}
          </div>
          <div className="project-watch-grid">
            <div className="project-watch-card">
              <h3>Risk / issue watch</h3>
              {IHS_RISK_LOG.map(([id, title, level, copy]) => (
                <div className="project-watch-row" key={id}>
                  <span>{id}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                  <em>{level}</em>
                </div>
              ))}
            </div>
            <div className="project-watch-card">
              <h3>Decision log</h3>
              {IHS_DECISION_LOG.map(([id, title, status, copy]) => (
                <div className="project-watch-row" key={id}>
                  <span>{id}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                  <em>{status}</em>
                </div>
              ))}
            </div>
          </div>
          <div className="blog-note-band project-scope-intro">
            <h3>Scope change protocol.</h3>
            <p>Every in-flight change gets captured, classified, assessed, decided, updated, and communicated before it changes the project timeline or expectations.</p>
          </div>
          <div className="project-scope-flow">
            {IHS_SCOPE_PROTOCOL.map(([title, copy], idx) => (
              <div className="project-scope-step" key={title}>
                <span>Step {String(idx + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="needs" className="blog-section">
          <SectionIntroHiFi eyebrow="Needs matrix" title="Six connected operating needs." copy="This is the role viewed as a system: attribution, funnel conversion, unit economics, operational feedback, data connections, and automation." />
          <div className="funnel-report-grid">
            {IHS_NEEDS.map(([code, title, copy]) => (
              <article className="funnel-report-card" key={title}>
                <div className="funnel-report-index">{code}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="lifecycle" className="blog-section">
          <SectionIntroHiFi eyebrow="Lifecycle map" title="The measurement layer should follow the customer." copy="The work runs from the first marketing touch through call intake, booking, service completion, follow-up, repeat, and referral. The best scorecard makes those handoffs visible." />
          <div className="site-lifecycle-line">
            {[["First touch", "Channel, campaign, offer, and source capture."], ["Lead intake", "Call/form, answer rate, speed, and routing quality."], ["Qualification / booking", "Booked-job rate, service type, and booking lag."], ["Service delivery", "Completed work, revenue, cancel/no-show, and source-to-revenue match."], ["Follow-up / repeat", "Reactivation, maintenance, review, and retention signals."], ["Referral / promoter", "NPS, referral, review velocity, and source quality feedback."]].map(([stage, note], idx) => (
              <div className={`site-lifecycle-stage ${idx === 1 || idx === 2 || idx === 3 ? "is-active" : ""}`} key={stage}>
                <span>Stage {idx + 1}</span>
                <h3>{stage}</h3>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="stack" className="blog-section">
          <SectionIntroHiFi eyebrow="Stack framing" title="Observed current public stack vs. target standardized growth stack." copy="The implication to validate: the organization appears partly standardized at the operating layer and still more siloed at the web/tracking layer." />
          <div className="attribution-board">
            {IHS_STACK.map(([title, copy, points]) => (
              <div className="attribution-copy" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <div className="metric-chip-row">
                  {points.map((point) => <span key={point}>{point}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="growth-scorecard" className="blog-section">
          <SectionIntroHiFi eyebrow="Example deliverable" title="Growth baseline scorecard." copy="A practical scorecard should make the weekly question simple: what should we scale, what should we fix, what should we test, and what should we watch?" />
          <div className="site-score-row site-score-row-wide">
            {[["Spend", "$42K", "Media investment"], ["Calls / day", "118", "Demand pressure"], ["Cost / lead", "$86", "Top-funnel cost"], ["Services booked / day", "46", "North Star"], ["Cost / booked customer", "$221", "Cost to real goal"], ["Booked-job rate", "39%", "Handoff quality"], ["Revenue", "$186K", "Booked/completed value"], ["ROAS", "4.4x", "Media efficiency"], ["Repeat / referral", "18%", "Downstream quality"], ["NPS", "71", "Promoter signal"], ["Source confidence", "84%", "Tracking trust"], ["Next action", "Fix", "Call answer gap"]].map(([label, value, copy]) => (
              <div className="site-score-card" key={label}><span>{label}</span><strong>{value}</strong><p>{copy}</p></div>
            ))}
          </div>
        </section>
        <section id="plan-phases" className="blog-section">
          <SectionIntroHiFi eyebrow="120-day plan" title="A credible first implementation window for one person." copy="This spreads the work into four phases so the plan is ambitious without pretending one analyst can standardize every system at once." />
          <div className="post-timeline">
            {IHS_PHASES.map(([days, title, copy, deliverables]) => (
              <div className="post-line" key={days}>
                <div className="post-line-date">{days}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div className="metric-chip-row">{deliverables.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="post-line-topic">Phase</div>
              </div>
            ))}
          </div>
        </section>
        <section id="access" className="blog-section">
          <div className="blog-note-band">
            <h3>Access note.</h3>
            <p>This page is designed to be protected in Cloudflare Access at the clean route <strong>/IHS-120-Day-Plan</strong>. Do not share the direct live link until the Access policy is active.</p>
          </div>
        </section>
      </div>
    </div>
  </SiteShellHiFi>
);

const CaseStudyPageSite = ({ cfg }) => {
  const Preview = cfg.preview;
  const reportExamples = CASE_REPORT_EXAMPLES[cfg.slug] || [];
  return (
    <SiteShellHiFi active="ex">
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
          <SideRailHiFi label="Story sections" links={[["#metrics", "Metrics"], ["#lifecycle", "Lifecycle"], ["#reports", "Reports"], ["#star", "STAR"], ["#takeaway", "Takeaway"]]} />
          <article className="article-prose">
            <section id="metrics">
              <LedgerHiFi items={cfg.stats} />
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
    </SiteShellHiFi>
  );
};

const ReviewPageSite = () => (
  <SiteShellHiFi active="home">
    <BlogHeroHiFi
      eyebrow="Review hub"
      title={<>HiFiBlog <span className="paper-cut">site set.</span></>}
      lead="This is the review entry point for the full production site recreated in the HiFiBlog visual direction."
      noteTitle="What changed."
      note="The rest of the site now uses the same editorial heroes, side rails, ledgers, timelines and article-style story structure as the blog mock."
    />
    <div className="blog-rail-layout">
      <SideRailHiFi links={[["#pages", "Pages"]]} />
      <section id="pages" className="blog-section">
        <SectionIntroHiFi eyebrow="Pages" title="Review the HiFiBlog-style variants." copy="Original sandbox pages are still available. These are the production review pages." />
        <div className="post-timeline">
          {[["Home", "index.html", "Overall story and proof hierarchy"], ["How I Work", "HowIWork.html", "Operating principles and scorecard examples"], ["Dashboards", "Dashboards.html", "Dashboard framing as decision surfaces"], ["Blog", "Blog.html", "Blog index mock"], ["Examples", "Examples.html", "Story hub and comparison layer"], ["Resume", "Resume.html", "Resume as capability narrative"], ["Foxit", "Case-Foxit.html", "Lifecycle reporting story"], ["Website Squirrel", "Case-Squirrel.html", "CAC and lead-quality story"], ["Netgain", "Case-Netgain.html", "Attribution and mid-funnel story"], ["UTA", "Case-UTA.html", "Operations BI story"]].map(([name, href, copy]) => (
            <a className="post-line" href={href} key={name}><div className="post-line-date">{name}</div><div><h3>{copy}</h3><p>Open the production version and compare against the original sandbox page.</p></div><div className="post-line-topic">Open</div></a>
          ))}
        </div>
      </section>
    </div>
  </SiteShellHiFi>
);

Object.assign(window, {
  NavHiFi,
  SiteShellHiFi,
  HomePageSite,
  HowIWorkPageSite,
  DashboardsPageSite,
  ExamplesPageSite,
  ResumePageSite,
  IHSLandingPageSite,
  IHSPlanPageSite,
  CaseStudyPageSite,
  ReviewPageSite,
});
