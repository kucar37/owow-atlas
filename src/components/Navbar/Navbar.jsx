import styles from './Navbar.module.css';

export default function Navbar({
  category = 'all',
  current = 'animations',
  showBack = false,
  onBack,
  onHome,
}) {
  const categoryLabel = String(category).toLowerCase();
  const currentLabel = String(current).toLowerCase();
  const goHome = onHome || onBack;

  return (
    <header className={styles.header}>
      <button
        className={styles.brandBlock}
        type="button"
        onClick={goHome}
        aria-label="Go to homepage"
      >
        <div className={styles.logoMark} />
        <div>
          <p className={styles.brand}>ATLAS</p>
          <p className={styles.version}>Motion library · v2.4</p>
        </div>
      </button>

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <span>library</span>
        <span>/</span>
        <span>{categoryLabel}</span>
        <span>/</span>
        <strong>{currentLabel}</strong>
      </nav>

      {showBack ? (
        <button
          className={`${styles.backButton} ${styles.backButtonActive}`}
          type="button"
          onClick={onBack}
        >
          ← Back to library
        </button>
      ) : (
        <div className={styles.headerSpacer} aria-hidden="true" />
      )}
    </header>
  );
}