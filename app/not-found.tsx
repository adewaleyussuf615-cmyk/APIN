import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <p className="eyebrow">404 / Page not found</p>
        <h1>We couldn’t find that page.</h1>
        <p className="inner-intro">
          The page may have moved, been renamed, or no longer be available.
        </p>
      </section>
      <section className="inner-content">
        <div>
          <p className="section-kicker">Next step</p>
          <p className="inner-body">
            Return to the APIN homepage or use the main navigation to continue exploring our work.
          </p>
        </div>
        <div className="inner-links">
          <a href="/"><ArrowLeft size={17} /> Back to homepage</a>
        </div>
      </section>
    </main>
  );
}