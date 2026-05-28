import styles from './Navbar.module.css';

// Navigation links shown in the center of the bar
const NAV_LINKS = ['Library', 'Guidelines', 'Changelog', 'Brand'];

export default function Navbar({
  active = 'Library',
  onNavigate,
  onHome,
}) {
  function handleLinkClick(link) {
    if (link === 'Library' && onHome) {
      onHome();
      return;
    }
    if (onNavigate) {
      onNavigate(link);
    }
  }

  return (
    <nav className={styles.navbar}>

      {/* ---- Brand / logo (clicking it goes home) ---- */}
      <button
        type="button"
        className={styles.brand}
        onClick={onHome}
        aria-label="Go to library home"
      >
        <LogoMark />
        <div className={styles.brandText}>
          <span className={styles.brandName}>ATLAS</span>
          <span className={styles.brandSub}>Motion library · v2.4</span>
        </div>
      </button>

      {/* ---- Center navigation links ---- */}
      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className={`${styles.link} ${active === link ? styles.linkActive : ''}`}
            onClick={() => handleLinkClick(link)}
            aria-current={active === link ? 'page' : undefined}
          >
            {link}
          </button>
        ))}
      </div>

    </nav>
  );
}

/* ---- Logo mark: a 2x2 grid of squares (inline SVG, no dependency) ---- */
function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2"  y="2"  width="11" height="11" rx="2" fill="#F5F5F4" />
      <rect x="15" y="2"  width="11" height="11" rx="2" fill="#D4FF3A" />
      <rect x="2"  y="15" width="11" height="11" rx="2" fill="#D4FF3A" />
      <rect x="15" y="15" width="11" height="11" rx="2" fill="#3A3A3A" />
    </svg>
  );
}
