import "./Hero.css";

export default function LibraryHero() {
  return (
    <section className="atlas-hero">

      <div className="atlas-hero-inner">

        <div className="atlas-hero-left">
          <h1 className="atlas-hero-heading">
            One library
            <br />
            <span>for every motion</span>
            <br />
            we ship.
          </h1>
        </div>

        <div className="atlas-hero-right">

          <div className="atlas-stats-grid">

            <div className="atlas-stat-cell">
              <strong>19</strong>
              <small>ANIMATIONS</small>
            </div>

            <div className="atlas-stat-cell">
              <strong>7</strong>
              <small>CATEGORIES</small>
            </div>

            <div className="atlas-stat-cell">
              <strong>2</strong>
              <small>PLATFORMS</small>
            </div>

            <div className="atlas-stat-cell">
              <strong>v2.4</strong>
              <small>RELEASE</small>
            </div>

          </div>

          <p className="atlas-hero-desc">
            Browse, preview and lift production-ready motion.
            Every entry ships with tweakable parameters and
            a copyable snippet for React, Vue, and bare CSS.
          </p>

        </div>

      </div>

    </section>
  );
}