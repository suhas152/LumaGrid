const highlights = [
  "Simple React + Vite structure",
  "Reusable sections and card patterns",
  "Responsive layout with polished defaults",
  "Strong visual system without heavy dependencies",
];

const features = [
  {
    title: "Build fast",
    text: "A lightweight stack keeps onboarding easy and iteration quick for product, design, and engineering.",
  },
  {
    title: "Design with intention",
    text: "A clear typography system, layered backgrounds, and confident spacing make the UI feel premium from day one.",
  },
  {
    title: "Scale calmly",
    text: "The layout is component-friendly, so new screens, dashboards, or product modules can grow without a redesign.",
  },
];

const steps = [
  "Edit the content and sections in App.tsx to fit your product idea.",
  "Add new components in src as the app grows.",
  "Run the Vite dev server for a fast local feedback loop.",
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">M3</span>
            <span>Model 3 Studio</span>
          </div>
          <a className="nav-link" href="#features">
            Explore
          </a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Easy to develop. Ready to impress.</p>
            <h1>
              A clean starter model with
              <span> good UI and UX built in.</span>
            </h1>
            <p className="hero-text">
              This project gives you a modern baseline for product pages,
              startup dashboards, AI tools, or internal apps. It is simple
              enough to extend quickly and polished enough to feel intentional.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#features">
                View foundation
              </a>
              <a className="button button-secondary" href="#steps">
                Start building
              </a>
            </div>
          </section>

          <aside className="hero-panel">
            <div className="panel-card panel-primary">
              <p className="panel-label">Development focus</p>
              <h2>Minimal complexity, high leverage</h2>
              <p>
                Strong defaults for layout, spacing, and visual rhythm let you
                spend more time shaping the product.
              </p>
            </div>

            <div className="stats-grid">
              {highlights.map((item) => (
                <div className="panel-card panel-small" key={item}>
                  <span className="bullet" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="features">
          <div className="section-heading">
            <p className="eyebrow">Why this setup works</p>
            <h2>Made for fast iteration and comfortable growth</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-band" id="steps">
          <div className="section-heading">
            <p className="eyebrow">How to use it</p>
            <h2>Start simple and shape it into your product</h2>
          </div>

          <div className="steps-list">
            {steps.map((step, index) => (
              <div className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
