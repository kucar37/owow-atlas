import styles from './CherryBlossom.module.css';

export default function CherryBlossom() {
  return (
    <div className={styles.scene}>
      <div className={`${styles.petal} ${styles.p1}`}>❀</div>
      <div className={`${styles.petal} ${styles.p2}`}>✿</div>
      <div className={`${styles.petal} ${styles.p3}`}>❀</div>
      <div className={`${styles.petal} ${styles.p4}`}>✿</div>
      <div className={`${styles.petal} ${styles.p5}`}>❀</div>
      <div className={`${styles.petal} ${styles.p6}`}>✿</div>
      <div className={`${styles.petal} ${styles.p7}`}>❀</div>
    </div>
  );
}