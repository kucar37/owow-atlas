import Navbar from '../Navbar/Navbar';
import styles from './Page.module.css';

const COLORS = [
  { name: 'Ink', hex: '#0A0A0A', value: '#0A0A0A' },
  { name: 'Acid Lime', hex: '#D4FF3A', value: '#D4FF3A' },
  { name: 'Bone', hex: '#F5F5F4', value: '#F5F5F4' },
  { name: 'Surface', hex: '#121212', value: '#121212' },
  { name: 'Line', hex: '#252525', value: '#252525' },
  { name: 'Muted', hex: '#5D5D5D', value: '#5D5D5D' },
];

function LogoMark({ palette }) {
  const a = palette === 'dark' ? '#F5F5F4' : '#0A0A0A';
  const b = palette === 'lime' ? '#0A0A0A' : '#D4FF3A';
  const c = palette === 'dark' ? '#3A3A3A' : '#2A2A2A';
  return (
    <svg width="48" height="48" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="11" height="11" rx="2" fill={a} />
      <rect x="15" y="2" width="11" height="11" rx="2" fill={b} />
      <rect x="2" y="15" width="11" height="11" rx="2" fill={b} />
      <rect x="15" y="15" width="11" height="11" rx="2" fill={c} />
    </svg>
  );
}

export default function Brand({ onNavigate, onHome }) {
  return (
    <>
      <Navbar active="Brand" onNavigate={onNavigate} onHome={onHome} />

      <main className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Brand</span>
          <h1 className={styles.title}>The Atlas look</h1>
          <p className={styles.lead}>
            Atlas keeps the OWOW identity consistent: a near-black canvas, one
            sharp lime accent, and clean Neue Montreal type. These are the tokens
            every page and animation preview is built on.
          </p>
        </header>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Color</p>
          <div className={styles.swatchGrid}>
            {COLORS.map((color) => (
              <div className={styles.swatch} key={color.hex}>
                <div
                  className={styles.swatchColor}
                  style={{ background: color.value }}
                />
                <div className={styles.swatchInfo}>
                  <p className={styles.swatchName}>{color.name}</p>
                  <p className={styles.swatchHex}>{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Typography</p>
          <div className={styles.typeSpecimen}>
            <p className={styles.typeName}>Neue Montreal · Display & body</p>
            <p className={styles.typeDisplay}>One library for every motion.</p>
          </div>
          <div className={styles.typeSpecimen}>
            <p className={styles.typeName}>PP Neue Montreal Mono · Labels & code</p>
            <p className={styles.typeMono}>atlas.owow.io / preview / animation</p>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Logo</p>
          <h2 className={styles.sectionTitle}>The 2×2 mark</h2>
          <p className={styles.paragraph}>
            The mark is a four-square grid — one bone tile, two lime tiles, and a
            quiet neutral. Keep clear space around it and place it on ink, lime,
            or bone backgrounds only.
          </p>
          <div className={styles.logoRow}>
            <div className={`${styles.logoTile} ${styles.logoOnDark}`}>
              <LogoMark palette="dark" />
            </div>
            <div className={`${styles.logoTile} ${styles.logoOnLime}`}>
              <LogoMark palette="lime" />
            </div>
            <div className={`${styles.logoTile} ${styles.logoOnLight}`}>
              <LogoMark palette="light" />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Voice</p>
          <h2 className={styles.sectionTitle}>Clear for everyone</h2>
          <p className={styles.paragraph}>
            Atlas speaks to designers, developers, and clients at once, so the
            tone stays <strong>plain and confident</strong>. Describe what an
            animation does and where to use it — no jargon required to understand
            the preview.
          </p>
        </section>
      </main>
    </>
  );
}
