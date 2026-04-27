// Sub-page components for the sandbox rebuild.

const SectionIntro = ({ eyebrow, title, copy }) => (
  <div className="section-head">
    <div className="eyebrow">{eyebrow}</div>
    <h2 className="section-title">{title}</h2>
    <p className="section-sub">{copy}</p>
  </div>
);

const DashboardsPage = () => {
  const { PreviewNetgain } = window;
  return (
    <>
      <section className="hero-v2">
        <div className="hero-v2-inner">
          <div>
            <div className="hero-v2-eyebrow">
              <span>Dashboard library - 2026 sandbox pass</span>
              <span>Six reporting surfaces</span>
            </div>
            <h1 className="hero-v2-h1">
              Six dashboards.<br />
              Six brand systems.<br />
              <span className="wave">One analyst</span>.
            </h1>
            <p className="hero-v2-lead">
              Each dashboard is built around an operating question: where the funnel leaks,
              which leads are worth routing first, which failure paths matter most, and which
              scorecard a team can trust enough to act on.
            </p>
            <div className="hero-v2-ctas">
              <a className="btn btn-filled" href="#grid">
                Browse all six
              </a>
              <a className="btn" href="Examples.html">
                Read the examples
              </a>
            </div>
          </div>
          <div className="hero-v2-feature">
            <div className="hero-v2-feature-preview">
              <div className="dash-chrome">
                <span>NETGAIN - MID-FUNNEL VELOCITY</span>
                <span style={{ color: "#4ade80" }}>featured</span>
              </div>
              <div className="dash-h">Moments that matter</div>
              <div className="dash-s">Multi-touch attribution across six SaaS products</div>
              <div style={{ height: 140 }}>
                <PreviewNetgain />
              </div>
            </div>
            <div className="hero-v2-feature-caption">
              <span className="hero-v2-feature-caption-t">Featured dashboard</span>
              <span className="hero-v2-feature-caption-n">250% mid-funnel lift</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)", paddingTop: 48 }}>
        <div className="page" style={{ maxWidth: 1180 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginBottom: 30,
            }}
          >
            {[
              ["6", "dashboard systems", "SaaS, local services, healthcare, public sector and quant"],
              ["4", "local case pages", "Foxit, Website Squirrel, Netgain and UTA rebuilt in the sandbox"],
              ["13+", "years of context", "Work spanning marketing ops, BI, demand gen and reporting"],
              ["1", "design system", "A single visual direction carrying different brand voices"],
            ].map(([value, label, note]) => (
              <div
                key={label}
                style={{
                  border: "1px solid var(--line-soft)",
                  borderRadius: 14,
                  padding: "18px 18px 16px",
                  background: "var(--paper-warm)",
                }}
              >
                <div className="proof-n" style={{ fontSize: 38, lineHeight: 1 }}>
                  {value}
                </div>
                <div className="caption" style={{ marginTop: 8 }}>
                  {label}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--ink-soft)", marginTop: 8 }}>
                  {note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="grid" className="section" style={{ background: "var(--paper)", paddingTop: 12 }}>
        <div className="page" style={{ maxWidth: 1180 }}>
          <DashGrid />
        </div>
      </section>
    </>
  );
};

const ExamplesPage = () => {
  const { PreviewFoxit } = window;
  return (
    <>
      <section className="hero-v2">
        <div className="hero-v2-inner">
          <div>
            <div className="hero-v2-eyebrow">
              <span>Examples - STAR method</span>
              <span>Interview-ready proof</span>
            </div>
            <h1 className="hero-v2-h1">
              The visuals show<br />
              the score.<br />
              <span className="wave">These pages</span><br />
              show the levers.
            </h1>
            <p className="hero-v2-lead">
              Each example keeps the same structure: situation, task, action, result, plus a
              short lifecycle view so the reader can see where the work landed and what
              operating move actually changed the outcome.
            </p>
            <div className="hero-v2-ctas">
              <a className="btn btn-filled" href="#list">
                Browse all four
              </a>
              <a className="btn" href="Dashboards.html">
                See the dashboards
              </a>
            </div>
          </div>
          <div className="hero-v2-feature">
            <div className="hero-v2-feature-preview">
              <div className="dash-chrome">
                <span>FOXIT - LIFECYCLE SYSTEM</span>
                <span style={{ color: "#4ade80" }}>featured</span>
              </div>
              <div className="dash-h">Cross-product lifecycle</div>
              <div className="dash-s">Activation, expansion and reporting clarity across four products</div>
              <div style={{ height: 140 }}>
                <PreviewFoxit />
              </div>
            </div>
            <div className="hero-v2-feature-caption">
              <span className="hero-v2-feature-caption-t">Featured example</span>
              <span className="hero-v2-feature-caption-n">72 hrs/wk saved and 3x ROI</span>
            </div>
          </div>
        </div>
      </section>
      <section id="list" className="section" style={{ background: "var(--paper)" }}>
        <div className="page" style={{ maxWidth: 1180 }}>
          <ExamplesList />
        </div>
      </section>
    </>
  );
};

const CaseJourney = ({ cfg }) => (
  <section className="section" style={{ background: "var(--paper-warm)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
    <div className="page" style={{ maxWidth: 1180, display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 28 }}>
      <div>
        <SectionIntro
          eyebrow="Lifecycle view"
          title="Where the work landed in the journey."
          copy={cfg.journeyIntro}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {cfg.journey.map((stage) => (
            <div
              key={stage.name}
              style={{
                border: `1px solid ${stage.active ? "var(--brand-edge)" : "var(--line-soft)"}`,
                borderTop: `3px solid ${stage.active ? "var(--brand)" : "var(--line-soft)"}`,
                background: stage.active ? "var(--brand-wash)" : "var(--paper)",
                borderRadius: 12,
                padding: "18px 16px",
                minHeight: 150,
              }}
            >
              <div className="caption" style={{ color: stage.active ? "var(--brand)" : "var(--ink-light)" }}>
                {stage.name}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 8 }}>{stage.label}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--ink-soft)", marginTop: 10 }}>
                {stage.note}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
        <div style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: 16, padding: 20 }}>
          <div className="caption" style={{ color: "var(--brand)", marginBottom: 10 }}>
            Growth levers used
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {cfg.levers.map((lever) => (
              <span key={lever} className="tag brand-tag">
                {lever}
              </span>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: 16, padding: 20 }}>
          <div className="caption" style={{ color: "var(--brand)", marginBottom: 10 }}>
            Operating fix
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{cfg.fix}</div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudyPage = ({ cfg }) => {
  const Preview = cfg.preview;
  return (
    <div className={cfg.brandClass}>
      <section style={{ background: "var(--paper)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="page" style={{ paddingTop: 28, paddingBottom: 14 }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--ink-light)",
              letterSpacing: "0.06em",
            }}
          >
            <a href="stevehill.work.html" style={{ color: "var(--ink-light)" }}>
              home
            </a>{" "}
            /{" "}
            <a href="Examples.html" style={{ color: "var(--ink-light)" }}>
              examples
            </a>{" "}
            / <span style={{ color: "var(--ink)" }}>{cfg.slug}</span>
          </div>
        </div>
      </section>

      <section className="hero-v2 brand-hero">
        <div
          className="hero-v2-inner"
          style={{ gridTemplateColumns: "1.3fr 1fr", padding: "48px 32px", alignItems: "start" }}
        >
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 18, alignItems: "center", flexWrap: "wrap" }}>
              <span className="brand-dot" />
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                  color: "var(--brand)",
                  textTransform: "uppercase",
                }}
              >
                {cfg.brand}
              </span>
              <span className="tag">STAR</span>
              <span className="tag">{cfg.readTime}</span>
              <span className="tag">{cfg.industry}</span>
            </div>
            <h1 className="hero-v2-h1" style={{ fontSize: "clamp(40px, 5vw, 70px)", marginBottom: 22 }}>
              {cfg.title}
            </h1>
            <p className="hero-v2-lead">{cfg.lead}</p>
          </div>
          <div className="hero-v2-feature">
            <div className="hero-v2-feature-preview" style={{ padding: 22, borderTop: "4px solid var(--brand)" }}>
              <div className="dash-chrome">
                <span>{cfg.chromeLabel}</span>
                <span style={{ color: "var(--brand)" }}>visual reference</span>
              </div>
              <div className="dash-h">{cfg.dashTitle}</div>
              <div className="dash-s">{cfg.dashSub}</div>
              <div style={{ height: 150 }}>
                <Preview />
              </div>
            </div>
            <div className="hero-v2-feature-caption">
              <span className="hero-v2-feature-caption-t">Headline metric</span>
              <span className="hero-v2-feature-caption-n">{cfg.headlineMetric}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-strip" style={{ borderTop: "1px solid", borderBottom: "1px solid" }}>
        <div className="page" style={{ padding: "28px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
            {cfg.stats.map(([n, l]) => (
              <div key={n} className="brand-num-rule" style={{ paddingTop: 14 }}>
                <div className="proof-n" style={{ fontSize: 52 }}>
                  {n}
                </div>
                <div className="proof-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseJourney cfg={cfg} />

      <section className="section" style={{ background: "var(--paper)", paddingTop: 56, paddingBottom: 64 }}>
        <div className="page" style={{ maxWidth: 960 }}>
          <SectionIntro
            eyebrow="STAR"
            title="Situation, task, action, result."
            copy={cfg.starIntro}
          />
          {cfg.star.map(([h, b]) => (
            <div
              key={h}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: 28,
                paddingBottom: 24,
                marginBottom: 24,
                borderBottom: "1px dashed var(--line-soft)",
              }}
            >
              <div className="eyebrow" style={{ paddingTop: 4, color: "var(--brand)" }}>
                {h}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{b}</p>
            </div>
          ))}
          <div
            style={{
              background: "var(--paper-warm)",
              border: "1px solid var(--line-soft)",
              borderRadius: 16,
              padding: 18,
              fontSize: 13,
              color: "var(--ink-light)",
              marginTop: 18,
            }}
          >
            All Raw Data Remains Proprietary
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 34 }}>
            <a href="Examples.html" className="btn">
              Back to examples
            </a>
            <a href="Dashboards.html" className="btn btn-filled">
              Browse dashboards
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const CASES = {
  foxit: {
    slug: "foxit",
    brand: "Foxit",
    brandClass: "brand-foxit",
    industry: "Document SaaS",
    readTime: "5 min read",
    chromeLabel: "FOXIT - LIFECYCLE",
    dashTitle: "Cross-product lifecycle",
    dashSub: "Activation, expansion and trusted reporting across four products",
    headlineMetric: "72 hrs/wk saved and 3x ROI",
    title: (
      <>
        Unified four products<br />
        into one <span className="wave">lifecycle system</span><br />
        leadership could trust.
      </>
    ),
    lead: "Foxit had product usage, billing, support, and marketing living in separate systems. The work was not just to build a dashboard. It was to reconcile the signals underneath it so activation, expansion, and reporting decisions could come from one operating view.",
    stats: [["72 hrs/wk", "manual reporting removed"], ["3x ROI", "inside one quarter"], ["4 products", "brought into one view"]],
    journeyIntro: "This example lived in the middle and bottom of the product lifecycle: activation, expansion, retention, and the reporting layer leadership used to steer those motions.",
    journey: [
      { name: "Stage 1", label: "Acquisition", note: "Marketing still mattered, but the core issue was not top-of-funnel volume.", active: false },
      { name: "Stage 2", label: "Trial", note: "The first step was seeing which trials were actually becoming meaningful product users.", active: true },
      { name: "Stage 3", label: "Activation", note: "Product usage had to connect to billing and support so the team could see where activation stalled.", active: true },
      { name: "Stage 4", label: "Expansion", note: "Cross-product and upsell plays needed a cleaner lifecycle trigger system.", active: true },
      { name: "Stage 5", label: "Retention", note: "Support and billing signals helped clarify which accounts were stable versus at risk.", active: true },
      { name: "Stage 6", label: "Reporting", note: "Leadership finally had one reconciled picture instead of several partial ones.", active: true },
    ],
    levers: ["Lifecycle reporting", "Cross-system reconciliation", "Activation signal design", "Executive automation"],
    fix: "Fragmented reporting became a single lifecycle spine the growth team and leadership could both use.",
    starIntro: "This story is most useful when the conversation turns to attribution, reporting trust, cross-functional alignment, or building a measurement layer that spans more than one system.",
    star: [
      ["Situation", "Foxit had four product lines and four competing sources of truth. Product usage, billing, support, and marketing each answered the lifecycle question differently, and weekly reporting was consuming roughly 72 hours of manual work."],
      ["Task", "Build one reconciled operating view across the product portfolio and automate the reporting layer so leadership could see activation, expansion, and retention clearly enough to act."],
      ["Action", "Modeled a shared lifecycle layer across product, billing, support, and marketing data. Reconciled definitions with cross-functional stakeholders and shipped an executive dashboard that refreshed on a cadence instead of being assembled by hand."],
      ["Result", "The team recovered 72 hours per week of reporting effort, leadership finally had one trusted view across four products, and the cleaner operating picture helped drive 3x ROI in a single quarter."],
    ],
    preview: window.PreviewFoxit,
  },
  squirrel: {
    slug: "website-squirrel",
    brand: "Website Squirrel",
    brandClass: "brand-squirrel",
    industry: "Lead generation",
    readTime: "5 min read",
    chromeLabel: "WEBSITE SQUIRREL - CAC",
    dashTitle: "Lead segmentation and CAC",
    dashSub: "Quality, routing and budget visibility instead of raw lead count",
    headlineMetric: "60%+ lead CAC reduction",
    title: (
      <>
        Cut lead CAC by<br />
        <span className="wave">60%+</span> by shifting the<br />
        system toward quality.
      </>
    ),
    lead: "The core issue was not a lack of leads. It was a lack of clarity about which leads were worth the spend and the follow-up. Once scoring, routing, and reporting were aligned around quality, the acquisition picture changed fast.",
    stats: [["60%+", "lead CAC reduction"], ["15 hrs/wk", "manual reporting removed"], ["15%", "YoY profit lift"]],
    journeyIntro: "This example lived at the top and middle of the customer journey: demand capture, lead qualification, routing, and the budget decisions attached to those handoffs.",
    journey: [
      { name: "Stage 1", label: "First touch", note: "Traffic volume was healthy enough. The problem was that channel success was being judged too early.", active: true },
      { name: "Stage 2", label: "Lead intake", note: "Lead quality and source quality were mixed together inside a blended top-of-funnel view.", active: true },
      { name: "Stage 3", label: "Routing", note: "Without clearer scoring, follow-up effort was spread across good and bad opportunities alike.", active: true },
      { name: "Stage 4", label: "Booked work", note: "This was the stage where source quality really revealed itself.", active: true },
      { name: "Stage 5", label: "Revenue", note: "Better source-to-outcome visibility made the CAC and profit picture more honest.", active: true },
      { name: "Stage 6", label: "Repeat value", note: "The real goal was stronger economics, not just cheaper lead volume.", active: false },
    ],
    levers: ["Lead scoring", "Segmentation", "Routing logic", "CAC reporting", "Budget reallocation"],
    fix: "The team stopped optimizing for raw lead count and started optimizing around the sources and segments that justified follow-up and spend.",
    starIntro: "This example works best when the conversation is about CAC, source quality, routing, or why a performance team needs more than top-of-funnel lead counts.",
    star: [
      ["Situation", "Website Squirrel was buying leads into a system that did not distinguish high-quality demand from low-quality noise clearly enough. CAC was climbing and the follow-up burden was landing on the team whether the lead was worth it or not."],
      ["Task", "Create a cleaner quality framework that marketing, sales, and leadership could all use, then let that framework drive routing and budget decisions instead of raw lead volume."],
      ["Action", "Built clearer lead scoring, segmentation, and reporting views so channels could be evaluated by the quality of leads they produced. Routed stronger leads more intentionally and used the score mix to guide budget allocation."],
      ["Result", "Lead CAC came down by 60%+, reporting work dropped by roughly 15 hours per week, and the business saw a 15% year-over-year profit lift without needing a broader volume-at-all-costs push."],
    ],
    preview: window.PreviewSquirrel,
  },
  netgain: {
    slug: "netgain",
    brand: "Netgain",
    brandClass: "brand-netgain",
    industry: "B2B SaaS",
    readTime: "6 min read",
    chromeLabel: "NETGAIN - MID-FUNNEL",
    dashTitle: "Moments that matter",
    dashSub: "Attribution, scoring and testing across a six-product portfolio",
    headlineMetric: "250% mid-funnel lift",
    title: (
      <>
        Found the signal<br />
        inside a <span className="wave">30-touchpoint</span><br />
        buyer journey.
      </>
    ),
    lead: "Netgain had six products, long buying cycles, and plenty of activity to measure. The value came from isolating the few mid-funnel moments that actually predicted movement and then building the testing rhythm around those moments.",
    stats: [["+250%", "mid-funnel lift"], ["15%", "qualified lead lift"], ["30", "average touchpoints"]],
    journeyIntro: "This example centered on the middle of the funnel. The work was not measuring every touch equally. It was finding the handful of touches that mattered and helping the team get prospects there faster.",
    journey: [
      { name: "Stage 1", label: "Demand capture", note: "There was enough activity coming in. The big question was what actually moved quality downstream.", active: false },
      { name: "Stage 2", label: "MQL", note: "Early-stage engagement needed better scoring and clearer attribution.", active: true },
      { name: "Stage 3", label: "SQL", note: "The handoff from marketing to sales was where the story started getting actionable.", active: true },
      { name: "Stage 4", label: "Opportunity", note: "This was the real focus: improve how fast and how often strong leads reached the key moments.", active: true },
      { name: "Stage 5", label: "Closed-Won", note: "Closed business validated which signals deserved more weight upstream.", active: true },
      { name: "Stage 6", label: "Feedback loop", note: "Weekly reporting and testing turned those signals into repeatable operating habits.", active: true },
    ],
    levers: ["Multi-touch attribution", "Scoring", "North Star metric isolation", "Testing cadence", "Routing"],
    fix: "A six-product funnel with too many touches became a funnel with a few visible moments that leadership could actually prioritize.",
    starIntro: "This is the best story for conversations about attribution, funnel velocity, North Star metrics, and how to move from reporting into testing and iteration.",
    star: [
      ["Situation", "Netgain ran six SaaS products with buying cycles ranging from one month to well over a year. There was no single agreed view of which mid-funnel moments actually mattered, so teams debated metrics instead of acting on them."],
      ["Task", "Build the attribution and scoring layer needed to isolate the moments that mattered most, then create a reporting and testing rhythm around those moments."],
      ["Action", "Built multi-touch attribution and scoring across the portfolio, used that baseline to identify the key mid-funnel events that correlated most with conversion, and worked with RevOps and marketing on high-velocity testing around those events."],
      ["Result", "The team improved mid-funnel conversion by 250%, lifted qualified lead volume by 15%, and shifted the conversation from which dashboard was right to which operating move should be tested next."],
    ],
    preview: window.PreviewNetgain,
  },
  uta: {
    slug: "uta",
    brand: "UTA",
    brandClass: "brand-uta",
    industry: "Operations BI",
    readTime: "5 min read",
    chromeLabel: "UTA - FAILURE PATHS",
    dashTitle: "TVM failure sequences",
    dashSub: "Where riders got stuck and what the support team could actually act on",
    headlineMetric: "$2.0M fare context and $15K recovery view",
    title: (
      <>
        Mapped ticket-machine<br />
        failure paths into an<br />
        <span className="wave">action queue</span>.
      </>
    ),
    lead: "This work was not about flashy forecasting. It was about understanding where riders got stuck, what support teams could not see, and how to turn scattered machine data into a queue of issues the operation could actually work.",
    stats: [["$2.0M", "fare context"], ["250+", "TVMs analyzed"], ["$15K", "recovery view"]],
    journeyIntro: "This journey was operational rather than marketing-led: rider attempt, payment flow, machine failure, support visibility, and service recovery.",
    journey: [
      { name: "Stage 1", label: "Rider arrives", note: "A rider starts the purchase process expecting a functioning machine.", active: false },
      { name: "Stage 2", label: "Selection flow", note: "The interaction path through fare selection and payment had to be reconstructed clearly.", active: true },
      { name: "Stage 3", label: "Failure event", note: "The important question was which error sequences actually blocked completion.", active: true },
      { name: "Stage 4", label: "Support visibility", note: "Control Center was not seeing enough of the right issues at the right time.", active: true },
      { name: "Stage 5", label: "Action queue", note: "Failures were ranked so the team could work the highest-impact problems first.", active: true },
      { name: "Stage 6", label: "Service recovery", note: "The goal was better rider experience and fewer preventable losses.", active: true },
    ],
    levers: ["Failure-path mapping", "User-flow reconstruction", "Support visibility", "Vendor accountability", "Recovery prioritization"],
    fix: "Machine logs, rider flows, and vendor visibility gaps were turned into a plainer operating picture the support team could use.",
    starIntro: "This story is most useful when the conversation turns to operational analytics, vendor accountability, or using data to turn a vague support complaint into a concrete fix list.",
    star: [
      ["Situation", "UTA had a network of 250+ ticket vending machines and uneven visibility into why riders were failing to complete purchases. The operational team needed clearer evidence of which failure paths mattered and where the vendor support picture was incomplete."],
      ["Task", "Reconstruct the rider purchase path, connect machine failures to user flow, and rank the issues in a way that support and leadership could act on."],
      ["Action", "Mapped rider flow through the purchase process, compared machine failure patterns against what support teams were actually being shown, and built a prioritized view of the sequences most likely to drive service friction and revenue leakage."],
      ["Result", "The team got a clearer recovery view tied to roughly $2.0M of fare context, a prioritized list of the issues worth fixing first, and a better basis for holding the vendor accountable for the visibility gap."],
    ],
    preview: window.PreviewUTA,
  },
};

const CORE_PRINCIPLES = [
  ["Lead with the business question", "Start with the decision a leader needs to make, then work backward into the scorecard and data needed to support it."],
  ["Keep the measurement layer honest", "If attribution, routing, or revenue matching is incomplete, say so clearly instead of pretending certainty that is not there."],
  ["Stay close to the handoff", "The real story often lives between teams: marketing to sales, source to booked job, machine failure to support action."],
  ["Build for testing, not just reporting", "The goal is a system that helps the team stop weak ideas quickly and scale stronger ones with more confidence."],
];

const NORTH_STAR = [
  ["ROAS", "Media efficiency", "Useful only when offline conversion handoff is trustworthy."],
  ["Cost / lead", "Top-of-funnel economics", "Shows what demand generation costs before quality is accounted for downstream."],
  ["Cost / booked customer", "Booking economics", "The cleaner view of acquisition cost when the business goal is a real booked outcome."],
  ["Calls / day", "Demand pressure", "A fast read on whether paid and organic demand are actually landing."],
  ["Services booked / day", "Operating North Star", "A better bridge metric between marketing output and service delivery."],
  ["Booked-job rate", "Funnel quality", "Shows whether the source and the handoff are producing work the team can actually close."],
];

const REVENUE_IMPACT = [
  ["Pipeline contribution", "In a sales-led motion, show how much real pipeline marketing sourced or influenced."],
  ["CAC efficiency", "Tie spend discipline to the quality of the downstream outcome, not just lead count."],
  ["Conversion velocity", "Show whether the funnel is moving faster through the stages that create revenue."],
];

const LIFECYCLE_STAGES = [
  ["First touch", "Channel, campaign and offer begin the demand path.", ["Spend", "CTR", "Landing CVR"]],
  ["Call or form", "Lead quality and speed to response start to matter.", ["Calls / day", "Form rate", "Cost / lead"]],
  ["Booked job", "Source quality gets confirmed or challenged here.", ["Book rate", "Show rate", "Cost / booked customer"]],
  ["Completed service", "The revenue event needs to connect back to source.", ["Revenue", "ROAS", "Completion rate"]],
  ["Follow-up", "Post-service communication shapes repeat value and trust.", ["Review rate", "NPS", "Rebook rate"]],
  ["Referral", "The strongest loop turns a completed job into the next one.", ["Referral rate", "Repeat revenue", "LTV"]],
];

const STACK_LANES = [
  ["Attract", ["Google Ads", "Meta Ads", "SEO", "Landing pages"], "Spend, clicks, CTR and first-touch capture"],
  ["Capture", ["GA4", "Call tracking", "Forms", "UTMs"], "Calls, forms, source logic and touch weights"],
  ["Route", ["HubSpot", "Salesforce", "Lead scoring", "Automation"], "Lead quality, assignment and speed to response"],
  ["Book", ["CRM", "Ops workflow", "Scheduling handoff"], "Booked customers, booked jobs and source match rate"],
  ["Deliver", ["Revenue table", "Service completion", "Quality signals"], "Completed service, revenue and ROAS"],
  ["Report", ["Power BI", "SQL", "Python refresh jobs"], "Shared scorecards, QA checks and weekly decision rhythms"],
];

const ATTRIBUTION_ROWS = [
  ["First-touch", "Shows what started demand", "Useful for channel discovery", "It can over-credit the opener and miss what actually closed"],
  ["Last-touch", "Shows what finished the journey", "Useful for quick tactical readouts", "It can ignore the assists that created the opportunity"],
  ["Weighted multi-touch", "Spreads value across intro, assist and close touches", "Better for more honest budget decisions", "It still depends on clean routing and good source capture"],
  ["Offline closed-loop", "Connects booked work or revenue back to the source", "The most useful layer for ROAS and CAC", "It breaks when source fields or handoffs are incomplete"],
];

const WHAT_I_BUILD = [
  ["MarTech integration and process automation", "Integrated reporting flows, CRM signals, source fields and automation so teams can see source-to-outcome performance more clearly."],
  ["Attribution and measurement", "Practical attribution that helps budget decisions without pretending the tracking is cleaner than it really is."],
  ["Paid channel optimization and CAC", "Reporting that ties spend to lead quality, booked outcomes and the stages where CAC gets won or lost."],
  ["Executive reporting and decision support", "Scorecards and readouts that leadership can scan quickly without losing the operating reality underneath them."],
];

const HowIWorkPage = () => (
  <>
    <section className="hero-v2">
      <div className="hero-v2-inner">
        <div>
          <div className="hero-v2-eyebrow">
            <span>How I Work</span>
            <span>Core principles, values and operating approach</span>
          </div>
          <h1 className="hero-v2-h1">
            Build the scorecard,<br />
            trust the handoff,<br />
            then <span className="wave">test what matters</span>.
          </h1>
          <p className="hero-v2-lead">
            This is the short version of how I work. I start with the business question,
            build a measurement layer the team can trust, keep the reporting readable,
            and stay close to the operational handoffs so the analysis stays useful.
          </p>
          <div className="hero-v2-ctas">
            <a className="btn btn-filled" href="#principles">
              See the framework
            </a>
            <a className="btn" href="Examples.html">
              View examples
            </a>
          </div>
        </div>
        <div className="hero-v2-feature">
          <div className="hero-v2-feature-preview">
            <div className="dash-chrome">
              <span>OPERATING LOOP</span>
              <span style={{ color: "var(--accent-amber-deep)" }}>active</span>
            </div>
            <div className="dash-h">Baseline -> Measure -> Test -> Scale</div>
            <div className="dash-s">A loop that compounds instead of resetting every month</div>
            <div style={{ height: 140, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 14 }}>
              {["Baseline", "Measure", "Test", "Scale"].map((label, idx) => (
                <div
                  key={label}
                  style={{
                    border: "1px solid var(--line-soft)",
                    borderTop: "2px solid var(--accent-amber)",
                    borderRadius: 6,
                    padding: "10px 8px",
                    background: "var(--paper-warm)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent-amber-deep)", letterSpacing: "0.08em" }}>
                    0{idx + 1}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-v2-feature-caption">
            <span className="hero-v2-feature-caption-t">What stays consistent</span>
            <span className="hero-v2-feature-caption-n">Readable reporting and honest measurement</span>
          </div>
        </div>
      </div>
    </section>

    <section id="principles" className="section" style={{ background: "var(--paper)" }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <SectionIntro
          eyebrow="Core principles"
          title="The habits that shape the work."
          copy="These are the principles that show up in the scorecards, the dashboards, the stakeholder conversations, and the way I decide what the next deliverable should be."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {CORE_PRINCIPLES.map(([title, copy], idx) => (
            <div
              key={title}
              style={{
                border: "1px solid var(--line-soft)",
                borderRadius: 16,
                padding: "22px 22px 20px",
                background: idx % 2 === 0 ? "var(--paper-warm)" : "var(--paper)",
              }}
            >
              <div className="caption" style={{ color: "var(--accent-amber-deep)", marginBottom: 10 }}>
                0{idx + 1}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{copy}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper-warm)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <SectionIntro
          eyebrow="North Star metrics"
          title="The metrics I expect a performance-minded executive to scan first."
          copy="These are the numbers that align media efficiency, funnel economics and operational throughput quickly."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {NORTH_STAR.map(([value, label, note]) => (
            <div key={value} style={{ border: "1px solid var(--line-soft)", borderRadius: 14, padding: 18, background: "var(--paper)" }}>
              <div className="caption">{label}</div>
              <div className="proof-n" style={{ fontSize: 34, lineHeight: 1.05, marginTop: 10 }}>
                {value}
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--ink-soft)", marginTop: 10 }}>{note}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, border: "1px solid var(--line-soft)", borderRadius: 16, background: "var(--paper)", padding: 18 }}>
          <div className="caption" style={{ marginBottom: 12 }}>
            Example growth baseline scorecard
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
            {[
              ["Spend", "$22K", "This week"],
              ["Calls / day", "41", "Demand pressure"],
              ["Services booked / day", "13", "North Star"],
              ["Cost / lead", "$118", "Top-of-funnel"],
              ["Cost / booked customer", "$342", "Booking economics"],
              ["ROAS", "4.2x", "Media efficiency"],
            ].map(([label, value, note]) => (
              <div key={label} style={{ border: "1px solid var(--line-soft)", borderRadius: 12, padding: 14, background: "var(--paper-warm)" }}>
                <div className="caption">{label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8 }}>{value}</div>
                <div style={{ fontSize: 12, color: "var(--ink-light)", marginTop: 6 }}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <SectionIntro
          eyebrow="Revenue impact KPIs"
          title="The proof points that show the work is driving revenue, not just reporting."
          copy="Marketing executives usually need a second layer beyond dashboard activity: metrics that connect operating discipline to revenue creation, cost control and funnel speed."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {REVENUE_IMPACT.map(([title, copy]) => (
            <div key={title} style={{ border: "1px solid var(--line-soft)", borderRadius: 16, padding: 20, background: "var(--paper-warm)" }}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{copy}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, border: "1px solid #e9ddcd", borderRadius: 16, background: "#fffaf1", padding: 18 }}>
          <div className="caption" style={{ marginBottom: 12, color: "var(--accent-amber-deep)" }}>
            Example executive KPI board
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
            {[
              ["Pipeline contribution", "$184K"],
              ["Booked revenue contribution", "$96K"],
              ["CAC efficiency", "18% better"],
              ["Booked-job rate", "31%"],
              ["Conversion velocity", "9.5 days"],
              ["Velocity trend", "improving"],
            ].map(([label, value]) => (
              <div key={label} style={{ border: "1px solid #e9ddcd", borderRadius: 12, padding: 14, background: "#ffffff" }}>
                <div className="caption" style={{ color: "var(--accent-amber-deep)" }}>
                  {label}
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper-warm)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <SectionIntro
          eyebrow="Customer life cycle map"
          title="The funnel has to connect marketing to the real customer journey."
          copy="Measurement becomes useful when it spans the handoffs between marketing, lead intake, booking, delivery, follow-up and referral instead of stopping at the form fill."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
          {LIFECYCLE_STAGES.map(([title, copy, metrics], idx) => (
            <div key={title} style={{ border: "1px solid var(--line-soft)", borderRadius: 14, padding: 16, background: idx % 2 === 0 ? "var(--paper)" : "#ffffff" }}>
              <div className="caption" style={{ color: "var(--sky)" }}>
                Stage 0{idx + 1}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 8 }}>{title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--ink-soft)", marginTop: 8 }}>{copy}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                {metrics.map((metric) => (
                  <span key={metric} className="tag">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="page" style={{ maxWidth: 1180, display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 22 }}>
        <div>
          <SectionIntro
            eyebrow="Canonical stack"
            title="The systems and handoffs the scorecards depend on."
            copy="A useful operating stack follows the same customer journey as the funnel: attract demand, capture intent, route it fast, connect bookings to revenue, and feed the result back into reporting and testing."
          />
          <div style={{ display: "grid", gap: 12 }}>
            {STACK_LANES.map(([step, tools, metric]) => (
              <div key={step} style={{ display: "grid", gridTemplateColumns: "100px 1fr 220px", gap: 12, border: "1px solid var(--line-soft)", borderRadius: 14, padding: 14, background: "var(--paper-warm)" }}>
                <div className="caption" style={{ color: "var(--sky)", alignSelf: "center" }}>
                  {step}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {tools.map((tool) => (
                    <span key={tool} className="tag">
                      {tool}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)" }}>{metric}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <div style={{ border: "1px solid var(--line-soft)", borderRadius: 16, padding: 18, background: "var(--paper-warm)" }}>
            <div className="caption" style={{ marginBottom: 10 }}>
              Stack health snapshot
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["Call attribution", "89%", "Calls matched to source and campaign"],
                ["Booking sync", "91%", "Booked work tied back to source data"],
                ["Dashboard freshness", "Daily", "Useful cadence for weekly decisions"],
                ["Taxonomy adoption", "100%", "Shared naming across campaigns and sources"],
                ["Test velocity", "3 / month", "Enough clean data to judge experiments"],
              ].map(([label, value, note]) => (
                <div key={label} style={{ border: "1px solid var(--line-soft)", borderRadius: 12, padding: 14, background: "var(--paper)" }}>
                  <div className="caption">{label}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8 }}>{value}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-light)", marginTop: 6 }}>{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper-warm)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <SectionIntro
          eyebrow="Attribution"
          title="Attribution should help decisions, not just sound sophisticated."
          copy="The point is to clarify which sources are driving booked work, where tracking breaks before revenue is recognized, and how multiple touches should be weighted so each meaningful interaction gets fair value."
        />
        <div style={{ border: "1px solid var(--line-soft)", borderRadius: 16, overflow: "hidden", background: "#fff" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#163042", color: "#fff" }}>
                {["Approach", "What it helps with", "Where it breaks"].map((head) => (
                  <th key={head} style={{ textAlign: "left", padding: 14, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ATTRIBUTION_ROWS.map(([approach, help, why, risk], idx) => (
                <tr key={approach} style={{ background: idx === 2 ? "#eef8fb" : "#fff" }}>
                  <td style={{ padding: 14, borderTop: "1px solid var(--line-soft)", verticalAlign: "top", fontSize: 14 }}>
                    <strong>{approach}</strong>
                    <div style={{ color: "var(--ink-soft)", marginTop: 6 }}>{help}</div>
                  </td>
                  <td style={{ padding: 14, borderTop: "1px solid var(--line-soft)", verticalAlign: "top", fontSize: 14, color: "var(--ink-soft)" }}>{why}</td>
                  <td style={{ padding: 14, borderTop: "1px solid var(--line-soft)", verticalAlign: "top", fontSize: 14, color: "var(--ink-soft)" }}>{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 20, border: "1px solid var(--line-soft)", borderRadius: 16, background: "#fff", padding: 18 }}>
          <div className="caption" style={{ marginBottom: 12 }}>
            Example attribution board
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
            {[
              ["Intro touch", "25%"],
              ["Assist touch", "35%"],
              ["Close touch", "40%"],
              ["Campaign value", "$31K"],
              ["Offline match rate", "87%"],
              ["Action signal", "Scale search"],
            ].map(([label, value]) => (
              <div key={label} style={{ border: "1px solid var(--line-soft)", borderRadius: 12, padding: 14, background: "var(--paper-warm)" }}>
                <div className="caption">{label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <SectionIntro
          eyebrow="What I build"
          title="The recurring work patterns across the portfolio."
          copy="These are the things I know how to build repeatedly, regardless of whether the setting is SaaS, local services, healthcare, public sector operations or executive reporting."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {WHAT_I_BUILD.map(([title, copy], idx) => (
            <div key={title} style={{ border: "1px solid var(--line-soft)", borderRadius: 16, padding: 20, background: idx % 2 === 0 ? "var(--paper-warm)" : "#fff" }}>
              <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{copy}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const PILLARS = [
  [
    "MarTech integration, data flows and process automation",
    "Integrated reporting flows, CRM signals, source fields and automation across product, billing, support, lead routing and reporting layers.",
    ["72 hrs/wk removed at Foxit", "15 hrs/wk removed at Website Squirrel", "Cross-system lifecycle visibility"],
  ],
  [
    "Attribution and measurement",
    "Practical attribution that helps with ROAS, CAC and budget moves without overstating what the tracking can actually support.",
    ["Six-product attribution at Netgain", "48+ campaign ROI analysis", "Operational diagnostics at UTA"],
  ],
  [
    "Paid channel optimization and CAC",
    "Measurement that connects spend to lead quality, booked outcomes and the stages where acquisition efficiency gets won or lost.",
    ["60%+ CAC reduction", "250% mid-funnel lift", "Budget decisions tied to quality"],
  ],
  [
    "Executive reporting and decision support",
    "Readable scorecards and one-page summaries that leadership can scan quickly without losing the operating reality underneath them.",
    ["Weekly decision cadence", "Cross-functional reporting trust", "Metrics tied to action"],
  ],
];

const ResumePage = () => (
  <>
    <section className="hero-v2">
      <div className="hero-v2-inner">
        <div>
          <div className="hero-v2-eyebrow">
            <span>Resume - sandbox pass</span>
            <span>Updated Apr 2026</span>
          </div>
          <h1 className="hero-v2-h1">
            The work,<br />
            the systems,<br />
            and the <span className="wave">metrics</span><br />
            in one page.
          </h1>
          <p className="hero-v2-lead">
            A concise view of the work most relevant to marketing operations, BI,
            attribution, funnel diagnostics and executive reporting.
          </p>
          <div className="hero-v2-ctas">
            <a className="btn btn-filled" href="assets/steve-hill-resume.pdf">
              Download PDF
            </a>
            <a className="btn" href="mailto:me@stevehill.work">
              Email me
            </a>
          </div>
        </div>
        <div className="hero-v2-feature">
          <div className="hero-v2-feature-preview" style={{ background: "var(--term-bg)", borderColor: "#2a3240" }}>
            <div className="dash-chrome" style={{ color: "var(--term-dim)", borderColor: "#2a3240" }}>
              <span style={{ color: "var(--term-amber)" }}>resume.md</span>
              <span style={{ color: "var(--term-green)" }}>ready</span>
            </div>
            <div style={{ fontFamily: "var(--mono)", color: "var(--term-green)", fontSize: 13, marginTop: 10 }}>
              $ cat resume.md --format=skim
            </div>
            <div style={{ fontFamily: "var(--mono)", color: "#e8e6de", fontSize: 12, lineHeight: 1.7, marginTop: 8 }}>
              <div>
                <span style={{ color: "var(--term-dim)" }}>name:</span> Steve Hill
              </div>
              <div>
                <span style={{ color: "var(--term-dim)" }}>focus:</span> marketing ops, BI and analytics
              </div>
              <div>
                <span style={{ color: "var(--term-dim)" }}>loc:</span> Salt Lake City, UT
              </div>
              <div>
                <span style={{ color: "var(--term-dim)" }}>contact:</span> me@stevehill.work
              </div>
              <div style={{ color: "var(--term-amber)", marginTop: 6 }}>
                core pages rebuilt in the sandbox
              </div>
            </div>
          </div>
          <div className="hero-v2-feature-caption">
            <span className="hero-v2-feature-caption-t">Role summary</span>
            <span className="hero-v2-feature-caption-n">Ops, attribution, BI and funnel work</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper)", paddingTop: 56 }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <ResumeSection />
      </div>
    </section>

    <section className="section" style={{ background: "var(--paper-warm)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="page" style={{ maxWidth: 1180 }}>
        <SectionIntro
          eyebrow="What I build"
          title="The recurring work patterns behind the role history."
          copy="Each pillar below spans multiple companies and industries. The common thread is not just reporting on top of the stack. It is instrumenting the stack so the reporting becomes useful."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {PILLARS.map(([title, copy, bullets], idx) => (
            <div key={title} style={{ border: "1px solid var(--line-soft)", borderRadius: 16, padding: 20, background: idx % 2 === 0 ? "var(--paper)" : "#fff" }}>
              <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", marginBottom: 14 }}>{copy}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {bullets.map((bullet) => (
                  <span key={bullet} className="tag">
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

Object.assign(window, { DashboardsPage, ExamplesPage, CaseStudyPage, CASES, HowIWorkPage, ResumePage });
