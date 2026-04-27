// Shared chrome for the sandbox rebuild.

const SITE_NAV = [
  ["home", "Home", "stevehill.work.html"],
  ["process", "How I Work", "HowIWork.html"],
  ["dash", "Dashboards", "Dashboards.html"],
  ["ex", "Examples", "Examples.html"],
  ["resume", "Resume", "Resume.html"],
  ["blog", "Blog", "Blog.html"],
];

const Logo = ({ compact, dark }) => (
  <div
    style={{
      fontFamily: "var(--sans)",
      textAlign: "left",
      lineHeight: 0.92,
      color: dark ? "var(--paper)" : "var(--ink)",
    }}
  >
    {compact ? (
      <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
        <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em" }}>
          Steve Hill
        </span>
        <span style={{ color: "var(--accent-amber)", fontSize: 22, fontWeight: 800 }}>.</span>
      </div>
    ) : (
      <>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em" }}>Steve</div>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em" }}>
          Hill<span style={{ color: "var(--accent-amber)" }}>.</span>
        </div>
      </>
    )}
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: dark ? "rgba(255,255,255,0.66)" : "var(--ink-light)",
        marginTop: 6,
      }}
    >
      Marketing Ops, BI and Analytics
    </div>
  </div>
);

const NavA = ({ active = "home" }) => (
  <nav className="nav nav-flat">
    <div className="nav-inner">
      <a href="stevehill.work.html" className="nav-logo">
        <Logo compact />
      </a>
      <div className="nav-links">
        {SITE_NAV.map(([key, label, href]) => (
          <a key={key} className={`nav-link ${active === key ? "is-active" : ""}`} href={href}>
            {label}
          </a>
        ))}
      </div>
      <a href="mailto:me@stevehill.work" className="nav-cta">
        Contact
      </a>
    </div>
  </nav>
);

const NavB = ({ active = "home" }) => (
  <nav className="nav nav-dropdown">
    <div className="nav-inner">
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <a href="stevehill.work.html" className="nav-logo">
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

const Footer = () => (
  <footer className="footer-big">
    <div className="footer-big-inner">
      <div className="footer-eyebrow">Sandbox Preview</div>
      <div className="footer-headline">
        Core pages,<br />
        rebuilt<span style={{ color: "var(--accent-amber)" }}>.</span>
      </div>
      <div className="footer-sub">
        This pass ports the current live-site content into the new design direction for Home,
        How I Work, Dashboards, Examples, the four case studies, and Resume.
      </div>
      <div className="footer-grid">
        <div className="footer-cell">
          <div className="footer-label">Email</div>
          <a href="mailto:me@stevehill.work" className="footer-value">
            me@stevehill.work
          </a>
        </div>
        <div className="footer-cell">
          <div className="footer-label">Phone</div>
          <a href="tel:8018501253" className="footer-value">
            (801) 850-1253
          </a>
        </div>
        <div className="footer-cell">
          <div className="footer-label">LinkedIn</div>
          <a
            href="https://linkedin.com/in/sthill"
            className="footer-value"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/sthill
          </a>
        </div>
        <div className="footer-cell">
          <div className="footer-label">Resume</div>
          <a href="assets/steve-hill-resume.pdf" className="footer-value">
            Download PDF
          </a>
        </div>
      </div>
      <div className="footer-meta">
        <span>Steve Hill - Salt Lake City, UT</span>
        <span>Marketing Ops, BI and revenue analytics</span>
        <span className="footer-mono">sandbox_local_preview</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Logo, NavA, NavB, Footer });
