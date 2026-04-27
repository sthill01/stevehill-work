const BLOG_POSTS = [
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

const BlogSideRail = ({ article = false }) => (
  <aside className="blog-side-rail" aria-label="On this page">
    <div className="blog-side-label">{article ? "Article sections" : "On this page"}</div>
    <nav>
      {article ? (
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

Object.assign(window, { BlogIndexPage, BlogArticlePage });
