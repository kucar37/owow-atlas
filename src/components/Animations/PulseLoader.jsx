import styles from './PulseLoader.module.css';

export default function PulseLoader() {
  return (
    <div className={styles.loader} aria-label="Loading animation preview">
      <span />
      <span />
      <span />
    </div>
  );
}
