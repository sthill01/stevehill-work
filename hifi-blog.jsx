const BLOG_POSTS = [
  {
    date: "May 13, 2026",
    topic: "Revenue Modeling",
    title: "Revenue modeling is not a spreadsheet. It is a control system.",
    copy:
      "How forecasting, pipeline coverage, quota capacity, and source-to-revenue confidence fit into one operating view.",
    href: "Blog_Revenue_Ops_Examples.html#revenue-modeling",
  },
  {
    date: "May 13, 2026",
    topic: "Scenario Planning",
    title: "The point of scenario planning is to make tradeoffs visible.",
    copy:
      "Sensitivity models for pricing, product mix, discounting, and attach-rate decisions should show where the business has room to move.",
    href: "Blog_Revenue_Ops_Examples.html#scenario-planning",
  },
  {
    date: "May 13, 2026",
    topic: "Funnel Optimization",
    title: "Revenue leakage usually hides between stages.",
    copy:
      "A funnel deep-dive should isolate the handoff, stage, source, or customer segment where revenue is slowing down.",
    href: "Blog_Revenue_Ops_Examples.html#funnel-optimization",
  },
  {
    date: "May 13, 2026",
    topic: "Executive Reporting",
    title: "Executive reporting should end with a decision.",
    copy:
      "The useful report translates raw data into a short performance narrative, a confidence level, and a scale, fix, test, or watch recommendation.",
    href: "Blog_Revenue_Ops_Examples.html#executive-reporting",
  },
  {
    date: "May 13, 2026",
    topic: "Annual Planning",
    title: "Annual planning needs pipeline math and operating judgment.",
    copy:
      "Territory strategy, sales capacity, and GTM goals work better when planning connects targets, coverage, conversion, and realistic execution capacity.",
    href: "Blog_Revenue_Ops_Examples.html#annual-planning",
  },
  {
    date: "May 13, 2026",
    topic: "Trend Analysis",
    title: "Trends are only useful when they point to a lever.",
    copy:
      "Stage, vertical, product-line, and channel trends should separate durable patterns from noise and highlight where adjustment is needed.",
    href: "Blog_Revenue_Ops_Examples.html#trend-analysis",
  },
  {
    date: "May 13, 2026",
    topic: "Data Integration",
    title: "A single source of truth is an operating agreement.",
    copy:
      "The technical work matters, but the harder work is aligning definitions, source systems, joins, and ownership across Salesforce and internal data.",
    href: "Blog_Revenue_Ops_Examples.html#data-integration",
  },
  {
    date: "May 13, 2026",
    topic: "Collaboration",
    title: "Good revenue analytics is cross-functional by design.",
    copy:
      "The data team, RevOps, marketing, sales, finance, and leadership all need the same measurement layer to support different decisions.",
    href: "Blog_Revenue_Ops_Examples.html#collaboration",
  },
  {
    date: "Apr 24, 2026",
    topic: "Case Study",
    title: "Budget up, CAC up: how backward funnel isolation cut our CAC 60%+",
    copy:
      "A Website Squirrel case study in diagnosing rising CAC, finding the real intent signal, and redirecting spend toward the segment that converted and stayed.",
    href: "Blog_Article.html",
  },
  {
    date: "Apr 24, 2026",
    topic: "Framework",
    title: "The marketing analyst problem-solving framework",
    copy:
      "A six-phase operating scaffold for decision-ready analysis: frame, hypothesize, source, analyze, translate, and close the loop.",
    href: "Blog_Article.html#related-posts",
  },
  {
    date: "Apr 23, 2026",
    topic: "AI + Analytics",
    title: "Why AI should handle the follow-up questions your dashboards miss",
    copy:
      "How agents, automations, disposable visuals, and Python refresh loops make analytics more interactive and less stale.",
    href: "Blog_Article.html#what-generalizes",
  },
  {
    date: "Apr 16, 2026",
    topic: "North Star",
    title: "Services booked per day is the operating metric marketing leaders need",
    copy:
      "Why this metric often tells the truth faster than lead volume by itself.",
    href: "Blog_Article.html#decision-and-result",
  },
  {
    date: "Apr 9, 2026",
    topic: "Funnel Economics",
    title: "Cost per lead vs. cost per booked customer",
    copy:
      "The difference between top-of-funnel efficiency and real conversion economics.",
    href: "Blog_Article.html#segment-source-intent",
  },
  {
    date: "Apr 2, 2026",
    topic: "Scorecards",
    title: "How to build a growth baseline scorecard leadership will actually use",
    copy:
      "A practical scorecard should connect spend, calls, bookings, cost per funnel goal, and revenue without becoming dashboard archaeology.",
    href: "Blog_Article.html#anchor-and-audit",
  },
  {
    date: "Mar 26, 2026",
    topic: "Attribution",
    title: "Practical attribution for home services",
    copy:
      "Attribution gets useful when it is tied to calls, booked jobs, and revenue handoff quality.",
    href: "Blog_Article.html#six-moves",
  },
];

const BlogSideRail = ({ article = false, links = null }) => (
  <aside className="blog-side-rail" aria-label="On this page">
    <div className="blog-side-label">{article ? "Article sections" : "On this page"}</div>
    <nav>
      {links ? (
        links.map(([href, label]) => <a href={href} key={href}>{label}</a>)
      ) : article ? (
        <>
          <a href="#when-metrics-break">When metrics break</a>
          <a href="#six-moves">The six moves</a>
          <a href="#anchor-and-audit">Anchor and audit</a>
          <a href="#map-and-isolate">Map and isolate</a>
          <a href="#segment-source-intent">Segment intent</a>
          <a href="#decision-and-result">Decision and result</a>
          <a href="#what-generalizes">What generalizes</a>
          <a href="#related-posts">Related posts</a>
        </>
      ) : (
        <>
          <a href="#featured">Featured essay</a>
          <a href="#content-pillars">Content pillars</a>
          <a href="#ai-analytics">AI + analytics lane</a>
          <a href="#published">Published posts</a>
        </>
      )}
    </nav>
  </aside>
);

const BlogIndexPage = () => (
  <main className="blog-mock">
    <section className="blog-hero">
      <div className="blog-hero-inner">
        <div>
          <div className="blog-kicker">Field notes on marketing operations</div>
          <h1 className="blog-title">
            <span>Growth</span>{" "}
            <span className="paper-cut">systems</span>{" "}
            <span>that hold up.</span>
          </h1>
          <p className="blog-lede">
            Short essays on scorecards, attribution, lifecycle measurement, AI-assisted analytics,
            and the practical operating habits that turn marketing data into cleaner decisions.
          </p>
        </div>
        <aside className="blog-hero-aside">
          <img className="blog-brand-stamp" src="assets/logo-square.svg" alt="Steve Hill logo" />
          <h2>Writing for the moment after the dashboard loads.</h2>
          <p>
            The useful work starts when somebody asks, "So what do we do now?" These posts are
            about making that answer faster, clearer, and easier to trust.
          </p>
        </aside>
      </div>
    </section>

    <div className="blog-rail-layout">
      <BlogSideRail />
      <div>
        <section id="featured" className="blog-feature">
          <article className="blog-feature-card">
            <div>
              <div className="blog-feature-label">Featured essay / Apr 24, 2026</div>
              <h2>Budget up, CAC up: how backward funnel isolation cut our CAC 60%+.</h2>
              <p>
                A case study in what to do when paid spend scales but acquisition economics get
                worse. The answer was not another bid tweak. It was attribution cleanup, backward
                funnel mapping, and a segment-level signal that changed where the spend landed.
              </p>
              <div className="blog-feature-actions">
                <a className="btn btn-filled" href="Blog_Article.html">
                  Read the article
                </a>
                <a className="btn" href="#published">
                  Browse posts
                </a>
              </div>
            </div>
            <aside className="metric-ledger">
              <div className="metric-ledger-row">
                <div className="metric-ledger-number">60%+</div>
                <div className="metric-ledger-label">CAC reduction</div>
              </div>
              <div className="metric-ledger-row">
                <div className="metric-ledger-number">15%</div>
                <div className="metric-ledger-label">YoY profit contribution</div>
              </div>
              <div className="metric-ledger-row">
                <div className="metric-ledger-number">6</div>
                <div className="metric-ledger-label">Diagnostic moves</div>
              </div>
            </aside>
          </article>
        </section>

        <section id="content-pillars" className="blog-section">
          <div className="blog-section-head">
            <div className="blog-kicker">Content pillars</div>
            <h2>The lanes I keep returning to.</h2>
          </div>
          <div className="pillar-ledger">
            <div className="pillar-line">
              <div className="pillar-number">01 / Scorecards</div>
              <h3>Executive reporting that gets used.</h3>
              <p>Weekly views that connect spend, calls, booked work, revenue, and quality.</p>
            </div>
            <div className="pillar-line">
              <div className="pillar-number">02 / Lifecycle</div>
              <h3>Funnel leaks and handoffs.</h3>
              <p>Where marketing, intake, booking, service, follow-up, and referral meet.</p>
            </div>
            <div className="pillar-line">
              <div className="pillar-number">03 / Governance</div>
              <h3>Systems that make metrics trustworthy.</h3>
              <p>Tracking standards, source definitions, naming, QA, and cross-brand comparability.</p>
            </div>
            <div className="pillar-line">
              <div className="pillar-number">04 / AI workflows</div>
              <h3>Automation where the next question appears.</h3>
              <p>Agents, Python retrieval loops, and AI-assisted summaries that reduce reporting lag.</p>
            </div>
          </div>
        </section>

        <section id="ai-analytics" className="blog-section">
          <div className="blog-note-band">
            <h3>AI belongs beside the weekly KPI review.</h3>
            <p>
              Dashboards answer the first expected question. AI is most useful when it helps with
              the follow-up: why did this move, what changed underneath it, what should we inspect
              next, and which answer deserves to become a durable scorecard.
            </p>
          </div>
        </section>

        <section id="published" className="blog-section">
          <div className="blog-section-head">
            <div className="blog-kicker">Published posts</div>
            <h2>Start with the operating problems.</h2>
          </div>
          <div className="post-timeline">
            {BLOG_POSTS.map((post) => (
              <a className="post-line" href={post.href} key={post.title}>
                <div className="post-line-date">{post.date}</div>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.copy}</p>
                </div>
                <div className="post-line-topic">{post.topic}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  </main>
);

const MethodStrip = () => (
  <div className="method-strip">
    {[
      ["01", "Anchor"],
      ["02", "Audit"],
      ["03", "Map"],
      ["04", "Isolate"],
      ["05", "Look earlier"],
      ["06", "Segment"],
    ].map(([n, label]) => (
      <div className="method-step" key={label}>
        <span>{n}</span>
        <b>{label}</b>
      </div>
    ))}
  </div>
);

const REVENUE_OPS_ARTICLE_LINKS = [
  ["#revenue-modeling", "Revenue modeling"],
  ["#scenario-planning", "Scenario planning"],
  ["#funnel-optimization", "Funnel optimization"],
  ["#executive-reporting", "Executive reporting"],
  ["#annual-planning", "Annual planning"],
  ["#trend-analysis", "Trend analysis"],
  ["#data-integration", "Data integration"],
  ["#collaboration", "Collaboration"],
  ["#operating-artifacts", "Operating artifacts"],
];

const REVENUE_OPS_EXAMPLES = [
  {
    id: "revenue-modeling",
    label: "Revenue Modeling",
    title: "Build the model that explains whether the growth plan is covered.",
    responsibility: "Forecasting, pipeline coverage, quota capacity, and predictable growth planning.",
    proof:
      "At Netgain, the useful view was not just lead volume. It was pipeline movement across a long buyer journey: which touches became real opportunities, where stage velocity slowed, and whether the mid-funnel could support the growth target. At Website Squirrel, the same discipline showed up as CAC, segment economics, and payback logic.",
    artifact: ["Pipeline coverage model", "Forecast bridge", "Quota capacity inputs", "Source-to-revenue confidence"],
  },
  {
    id: "scenario-planning",
    label: "Strategic Scenario Planning",
    title: "Make the impact of pricing, mix, discounting, and attach rate visible before the decision is made.",
    responsibility: "Sensitivity models for pricing changes, product mix, discounting, and attach-rate scenarios.",
    proof:
      "The closest pattern from my work is the way I approach tradeoff analysis: isolate the driver, build a simple scenario layer, and show leadership what changes if volume, conversion, price, or mix moves. That pattern applies whether the lever is SaaS package mix, service attach rate, discounting, or paid-channel reallocation.",
    artifact: ["Sensitivity table", "Best/base/worst case", "Margin impact view", "Decision memo"],
  },
  {
    id: "funnel-optimization",
    label: "Funnel Optimization",
    title: "Find the leakage point before prescribing the fix.",
    responsibility: "Deep-dive conversion analysis across the customer journey.",
    proof:
      "Website Squirrel is the clearest example: budget was rising and CAC was getting worse. The fix came from working backward through attribution, stage conversion, high-intent behavior, and segment quality until the real leakage point was visible. Netgain added the longer-cycle version: stage velocity, multi-touch influence, and mid-funnel movement.",
    artifact: ["Stage conversion map", "Leakage diagnosis", "High-intent signal report", "Fix / test backlog"],
  },
  {
    id: "executive-reporting",
    label: "Executive Reporting",
    title: "Translate raw movement into a decision leaders can act on.",
    responsibility: "Clear performance narratives and executive recommendations for GTM leadership.",
    proof:
      "At Foxit, the executive problem was fragmented reporting across product, billing, support, and marketing. My role was to turn separate data sources into one decision-ready view. The value was not the dashboard by itself; it was the operating narrative: what changed, what mattered, and what the team should do next.",
    artifact: ["Executive scorecard", "Performance narrative", "Scale / fix / test / watch readout", "Confidence labels"],
  },
  {
    id: "annual-planning",
    label: "Annual Planning",
    title: "Support planning with coverage math, capacity assumptions, and realistic execution windows.",
    responsibility: "Territory strategy, sales capacity planning, and annual GTM goal setting.",
    proof:
      "My strongest fit here is the planning layer underneath the work: connecting targets to funnel math, stage conversion, campaign capacity, and reporting cadence. I would treat annual planning as a model plus a governance rhythm: what target are we covering, what assumptions drive it, and where do we revisit the plan when reality moves?",
    artifact: ["GTM planning model", "Capacity assumption sheet", "Territory / segment readout", "Quarterly checkpoint cadence"],
  },
  {
    id: "trend-analysis",
    label: "Trend Analysis",
    title: "Separate real movement from noise, then point to the lever.",
    responsibility: "Performance trends across sales stages, verticals, and product lines.",
    proof:
      "Across Foxit and Netgain, the trend question was rarely one metric. It was product line, stage, source, lifecycle motion, and customer segment moving together. The job was to show where performance was strong, where the trend was weakening, and whether the next move was budget, messaging, routing, nurture, or operational follow-up.",
    artifact: ["Stage trend view", "Product-line comparison", "Vertical or segment cut", "Exception list"],
  },
  {
    id: "data-integration",
    label: "Data Integration",
    title: "A single source of truth is mostly a definition problem before it is a tooling problem.",
    responsibility: "Aggregate Salesforce and internal systems into unified revenue views.",
    proof:
      "Foxit is the strongest proof point: product usage, billing, support, and marketing signals had to become one reconciled layer before leaders could trust the story. In other work, I have used SQL, Power Query, Power BI, Python, CRM data, and internal exports to build the same pattern: source systems stay where they belong, but the decision layer becomes shared.",
    artifact: ["Source-to-field map", "Data contract", "Unified revenue view", "QA reconciliation checks"],
  },
  {
    id: "collaboration",
    label: "Cross-Functional Collaboration",
    title: "Revenue analytics only works when the owners of the handoffs are in the room.",
    responsibility: "Partner with Data and RevOps so reporting scales into company-wide frameworks.",
    proof:
      "The common thread in my work is cross-functional alignment: marketing with sales, product with support, billing with executive reporting, operations with vendor accountability. The technical artifact matters, but the operating agreement is what keeps it alive: definitions, owners, cadence, and escalation paths.",
    artifact: ["RACI / owner map", "Definition workshop", "Reporting governance", "Weekly decision rhythm"],
  },
];

const RevenueOpsArticlePage = () => (
  <main className="blog-mock">
    <section className="article-masthead">
      <div className="article-masthead-inner">
        <article>
          <a className="article-back" href="Blog.html">
            Back to blog
          </a>
          <div className="blog-kicker">Revenue analytics / GTM operations</div>
          <h1 className="article-title">
            Revenue operations analytics: the responsibilities I map to real operating work.
          </h1>
          <p className="article-dek">
            These are the revenue analytics responsibilities I would want a GTM leader to see in
            my background: forecasting, scenario planning, funnel leakage, executive reporting,
            annual planning support, trend analysis, data integration, and cross-functional cadence.
          </p>
        </article>
        <aside className="article-snapshot">
          <div className="article-meta-line">
            <span className="tag tag-amber">May 13, 2026</span>
            <span className="tag">Portfolio proof</span>
          </div>
          <h2>What this post does</h2>
          <p>It translates past work into the language of revenue modeling, RevOps, and GTM decision support.</p>
          <ul>
            <li>Connects each responsibility to a practical artifact.</li>
            <li>Uses proof from Foxit, Netgain, Website Squirrel, and UTA.</li>
            <li>Keeps the claims grounded where the fit is direct or adjacent.</li>
          </ul>
        </aside>
      </div>
    </section>

    <div className="article-content-layout">
      <BlogSideRail article links={REVENUE_OPS_ARTICLE_LINKS} />
      <article className="article-prose">
        <section id="revenue-modeling">
          <h2>Revenue modeling starts with the coverage question.</h2>
          <p>
            The useful question is not, "Do we have a forecast?" It is, "Do we have enough qualified
            pipeline, capacity, conversion, and timing to make the forecast believable?" That is where
            revenue modeling becomes an operating control instead of a spreadsheet exercise.
          </p>
          <div className="blog-note-band">
            <h3>My fit.</h3>
            <p>
              I have built the underlying pieces: funnel models, CAC and payback views, stage-velocity
              dashboards, product portfolio reporting, and executive scorecards. The next layer is using
              those inputs to support pipeline coverage and quota capacity conversations.
            </p>
          </div>
          <div className="metric-chip-row">
            {REVENUE_OPS_EXAMPLES[0].artifact.map((artifact) => <span key={artifact}>{artifact}</span>)}
          </div>
        </section>

        {REVENUE_OPS_EXAMPLES.slice(1).map((item) => (
          <section id={item.id} key={item.id}>
            <h2>{item.title}</h2>
            <p><strong>{item.label}:</strong> {item.responsibility}</p>
            <p>{item.proof}</p>
            <div className="metric-chip-row">
              {item.artifact.map((artifact) => <span key={artifact}>{artifact}</span>)}
            </div>
          </section>
        ))}

        <section id="operating-artifacts">
          <h2>The common artifact is a trusted revenue operating layer.</h2>
          <p>
            The specific output changes by team. A CRO may need pipeline coverage and stage velocity.
            A CFO may need CAC efficiency, payback, and forecast confidence. RevOps may need data
            definitions, routing logic, and owner clarity. The pattern is the same: make the revenue
            path visible enough that leadership can decide what to scale, fix, test, or watch.
          </p>
          <div className="segment-table">
            {REVENUE_OPS_EXAMPLES.map((item) => (
              <div className="segment-row" key={item.label}>
                <b>{item.label}</b>
                <p>{item.artifact.join(" / ")}</p>
                <span className="segment-signal">Proof lane</span>
              </div>
            ))}
          </div>
        </section>

        <section id="related-posts">
          <h2>Related posts.</h2>
          <div className="related-river">
            <a href="Blog_Article.html">
              <h3>Budget up, CAC up</h3>
              <p>The Website Squirrel proof point behind CAC efficiency and funnel leakage work.</p>
            </a>
            <a href="Case-Netgain.html">
              <h3>Netgain attribution and velocity</h3>
              <p>The long-cycle SaaS example behind pipeline contribution and stage movement.</p>
            </a>
            <a href="Case-Foxit.html">
              <h3>Foxit lifecycle reporting</h3>
              <p>The multi-product source-of-truth example behind executive reporting and integration.</p>
            </a>
          </div>
        </section>
      </article>

      <aside className="article-side-note" aria-label="Article note">
        <div className="article-side-note-inner">
          <h3>The operating lesson</h3>
          <p>
            Revenue analytics is most valuable when it reduces uncertainty before a decision:
            forecast confidence, pipeline coverage, CAC efficiency, stage velocity, or the next
            planning assumption that needs to be revisited.
          </p>
        </div>
      </aside>
    </div>
  </main>
);

const BlogArticlePage = () => (
  <main className="blog-mock">
    <section className="article-masthead">
      <div className="article-masthead-inner">
        <article>
          <a className="article-back" href="Blog.html">
            Back to blog
          </a>
          <div className="blog-kicker">Case study / Website Squirrel</div>
          <h1 className="article-title">
            Budget up, CAC up: how backward funnel isolation cut our CAC 60%+.
          </h1>
          <p className="article-dek">
            A case study in what to do when paid media spend scales and customer acquisition cost
            climbs with it. The fix came from auditing attribution, mapping the funnel backward,
            and finding the segment whose behavior actually predicted revenue.
          </p>
        </article>
        <aside className="article-snapshot">
          <div className="article-meta-line">
            <span className="tag tag-amber">Apr 24, 2026</span>
            <span className="tag">8 min read</span>
          </div>
          <h2>What this covers</h2>
          <p>The repeatable method I use when a business is spending more to acquire worse-fit customers.</p>
          <ul>
            <li>Name the contradiction before you optimize.</li>
            <li>Clean attribution before trusting CAC.</li>
            <li>Feed dollar-weighted segment signals back into spend.</li>
          </ul>
        </aside>
      </div>
    </section>

    <div className="article-content-layout">
      <BlogSideRail article />
      <article className="article-prose">
        <section id="when-metrics-break">
          <h2>When two metrics move the way they should not, stop optimizing.</h2>
          <p>
            Somewhere in a quarterly review, a marketing leader is staring at a chart that bends
            the wrong way. Paid media budget is up. Customer acquisition cost is also up. That
            contradiction should stop the room.
          </p>
          <p>
            When spend scales, you usually expect at least a little efficiency. When CAC rises
            alongside budget, something systemic is off and tactical channel tweaks are unlikely
            to fix it. That was the situation at Website Squirrel. We were spending more and
            acquiring worse-fit customers.
          </p>
          <div className="pull-quote">
            The platform was not broken. The target signal was.
          </div>
        </section>

        <section id="six-moves">
          <h2>The six-move method.</h2>
          <p>
            I think of the approach as backward funnel isolation with revenue-weighted signal
            mapping. The idea is simple: when the economics move in the wrong direction, work
            backward from the closed-loop outcome until you find the behavior and segment that
            actually predict revenue.
          </p>
          <MethodStrip />
        </section>

        <section id="anchor-and-audit">
          <h2>Anchor the symptom and audit attribution first.</h2>
          <p>
            The contradiction was simple: budget up, CAC up. That one sentence matters because
            it keeps the team from skipping straight to tactical fixes. We also wrote the problem
            in a slightly fuller form: spend is up, CAC is up, and we do not yet know whether the
            issue is attribution drift, audience quality, or funnel leakage.
          </p>
          <p>
            Then we stopped the analysis and audited attribution. We checked UTM consistency,
            conversion events, session stitching, CRM-to-platform closed-loop data, and de-duping
            rules between channels. If attribution is weak, the CAC number is partly fictional.
          </p>
        </section>

        <section id="map-and-isolate">
          <h2>Map the funnel and isolate the high-intent sequence.</h2>
          <p>
            Once the measurement layer was trustworthy, we laid out the full funnel: ad impression,
            click, landing-page view, content engagement, pricing-page view, sign-up click, checkout
            start, account created, activation, and paid conversion.
          </p>
          <p>
            The important thing was not the raw counts. It was the stage-to-stage movement in the
            middle. The leak appeared in the transition from engaged browser to committed prospect.
            The most predictive sequence was <strong>pricing-page view to sign-up click to checkout start</strong>.
          </p>
          <p>
            The pricing-page view did most of the diagnostic work. That was the moment the user
            effectively said, "I am seriously considering paying for this."
          </p>
        </section>

        <section id="segment-source-intent">
          <h2>Look backward from intent and segment the source of it.</h2>
          <p>
            The winning users were not impulse buyers. They read multiple pieces of content, stayed
            longer, and returned before touching pricing. That gave us a behavioral fingerprint,
            which suggested a firmographic fingerprint underneath it.
          </p>
          <div className="segment-table">
            <div className="segment-row">
              <b>Segment A</b>
              <p>Solopreneurs and moonlighters. Cheap clicks, lower LTV, faster churn.</p>
              <span className="segment-signal">Weak fit</span>
            </div>
            <div className="segment-row">
              <b>Segment B</b>
              <p>Small established businesses under 10 employees with real need and stable budgets.</p>
              <span className="segment-signal">Sweet spot</span>
            </div>
            <div className="segment-row">
              <b>Segment C</b>
              <p>Larger businesses browsing adjacent content, driving traffic but not conversion quality.</p>
              <span className="segment-signal">Noisy intent</span>
            </div>
          </div>
          <p>
            The distribution was not linear. Both extremes were weak, and the middle was where
            spend actually worked. Channel reporting alone had hidden the real economic story.
          </p>
        </section>

        <section id="decision-and-result">
          <h2>The decision and result.</h2>
          <p>
            I was the analyst, not the final budget owner. My role was to make the right call so
            visible that it became the obvious call. The team shifted focus toward Segment B:
            landing pages, paid targeting, content priorities, and lead routing all moved toward
            the profile that converted and stayed.
          </p>
          <p>
            <strong>The outcome was a 60%+ reduction in blended CAC and a 15% year-over-year
            contribution to profit.</strong> We were not making the funnel cheaper by squeezing
            the same bad inputs harder. We changed where the spend landed and what the platforms
            were being told to value.
          </p>
        </section>

        <section id="what-generalizes">
          <h2>What generalizes.</h2>
          <p>
            If the business has a funnel and a closed-loop outcome, the same scaffold still works:
            name the contradiction, audit attribution, map the funnel, isolate the high-intent
            actions, study the behavior that precedes them, segment by who the person is, and feed
            the right signal back into the buying system.
          </p>
          <p>
            In home services, the signals might be ZIP check, call duration, financing-page view,
            request-a-quote flow, or booked dispatch instead of checkout start. The method is the
            same. The cheapest leads are often not the best leads.
          </p>
          <div className="pull-quote">
            Stop optimizing for the conversion event. Optimize for the segment whose behavior predicts it.
          </div>
        </section>

        <section id="related-posts">
          <h2>Related posts.</h2>
          <div className="related-river">
            <a href="Blog.html#published">
              <h3>Cost per lead vs. cost per booked customer</h3>
              <p>Why lead cost is only useful when it stays connected to conversion quality.</p>
            </a>
            <a href="Blog.html#published">
              <h3>Practical attribution for home services</h3>
              <p>How calls, bookings, and revenue handoff quality keep ROAS honest.</p>
            </a>
            <a href="Blog.html#published">
              <h3>The marketing analyst problem-solving framework</h3>
              <p>The broader six-phase model this case study fits inside.</p>
            </a>
          </div>
        </section>
      </article>

      <aside className="article-side-note" aria-label="Article note">
        <div className="article-side-note-inner">
          <h3>The operating lesson</h3>
          <p>
            This is the difference between reporting CAC and managing CAC. The useful layer is the
            one that explains what changed, which lever moved, and what signal should be fed back
            into the next dollar of spend.
          </p>
        </div>
      </aside>
    </div>
  </main>
);

Object.assign(window, { BlogIndexPage, BlogArticlePage, RevenueOpsArticlePage });
