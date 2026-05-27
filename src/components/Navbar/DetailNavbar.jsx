import "./DetailNavbar.css";

function DetailNavbar() {
  return (
    <nav className="detail-navbar">
      <div className="detail-navbar-container">

        <div className="detail-navbar-left">
          <div className="atlas-logo">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="atlas-brand">
            <div className="atlas-brand-title">ATLAS</div>

            <div className="atlas-brand-subtitle">
              Motion library · v2.4
            </div>
          </div>
        </div>

        <div className="detail-navbar-center">
          <span>Library</span>
          <span>/</span>
          <span>transition</span>
          <span>/</span>
          <span>animation</span>
        </div>

        <div className="detail-navbar-right">
          <button className="back-button">
            ← Back to library
          </button>
        </div>

      </div>
    </nav>
  );
}

export default DetailNavbar;