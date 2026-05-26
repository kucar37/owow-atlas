import styles from './TwinklingStars.module.css';

export default function TwinklingStars() {
  return (
    <div className={styles.sky}>
      <div className={`${styles.star} ${styles.s1}`}>✦</div>
      <div className={`${styles.star} ${styles.s2}`}>✧</div>
      <div className={`${styles.star} ${styles.s3}`}>✦</div>
      <div className={`${styles.star} ${styles.s4}`}>✧</div>
      <div className={`${styles.star} ${styles.s5}`}>✦</div>
      <div className={`${styles.star} ${styles.s6}`}>✧</div>
      <div className={`${styles.star} ${styles.s7}`}>✦</div>
    </div>
  );
}