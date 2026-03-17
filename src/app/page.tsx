import { db } from "../lib/db";

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '80px' }}>
      <section className="hero-section flex-col items-center text-center fade-in-up">
        <h1 className="hero-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>SAM</span>
          <span className="text-gradient" style={{ marginTop: '0.5rem' }}>Smart Air Measure</span>
        </h1>
        <p className="hero-subtitle">
          Stay informed with our smart air monitoring system.<br></br>
          We blend real-time sensor data with external sources to bring you an accessible, visualized breakdown of your air quality.
        </p>
        <div className="flex justify-center w-full">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>

      <section id="features" className="card-grid fade-in-up delay-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">

          <div className="feature-card glass-panel">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3 className="feature-title">Next.js App Router</h3>
            <p className="feature-desc">Utilize React Server Components and nested routing for peak performance and unparalleled developer experience.</p>
          </div>

          <div className="feature-card glass-panel delay-100">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>
            <h3 className="feature-title">MySQL & Prisma</h3>
            <p className="feature-desc">Type-safe database interaction using Prisma ORM. Connected efficiently via singleton pattern in development.</p>
          </div>

          <div className="feature-card glass-panel delay-200">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 className="feature-title">Premium Aesthetics</h3>
            <p className="feature-desc">Vanilla CSS with glassmorphism, fluid gradients, and refined typography configured out of the box.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
