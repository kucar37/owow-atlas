import { useState } from 'react';
import styles from './Navbar.module.css';

// Navigation links shown in the center of the bar
const NAV_LINKS = ['Library', 'Guidelines', 'Changelog', 'Brand'];

export default function Navbar() {
  // Tracks which link is currently active.
  // When routing is added later, this can be replaced by the router state.
  const [active, setActive] = useState('Library');

  return (
    <nav className={styles.navbar}>

      {/* ---- Brand / logo ---- */}
      <div className={styles.brand}>
        <LogoMark />
        <div className={styles.brandText}>
          <span className={styles.brandName}>ATLAS</span>
          <span className={styles.brandSub}>Motion library · v2.4</span>
        </div>
      </div>

      {/* ---- Center navigation links ---- */}
      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className={`${styles.link} ${active === link ? styles.linkActive : ''}`}
            onClick={() => setActive(link)}
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
