import styles from './SlideReveal.module.css';

export default function SlideReveal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <span>01</span>
        <strong>Motion</strong>
      </div>
      <div className={styles.revealBar} />
    </div>
  );
}
