import { useState } from 'react';
import styles from './Mushroom.module.css';

export default function Mushroom() {
  const [exploded, setExploded] = useState(false);

  const handleClick = () => {
    setExploded(true);
    setTimeout(() => setExploded(false), 2000);
  };

  return (
    <div className={styles.scene} onClick={handleClick}>
      {!exploded ? (
        <div className={styles.mushroom}>
          <div className={styles.cap}>
            <div className={styles.dot} style={{ top: '8px', left: '12px' }} />
            <div className={styles.dot} style={{ top: '4px', right: '10px' }} />
            <div className={styles.dot} style={{ top: '18px', left: '24px' }} />
            <div className={styles.dot} style={{ top: '14px', right: '22px' }} />
            <div className={styles.dot} style={{ top: '22px', left: '8px' }} />
          </div>
          <div className={styles.stem} />
          <div className={styles.hoverHint}>click me</div>
        </div>
      ) : (
        <div className={styles.explosion}>
          <div className={styles.cloud} />
          <div className={`${styles.spore} ${styles.s1}`} />
          <div className={`${styles.spore} ${styles.s2}`} />
          <div className={`${styles.spore} ${styles.s3}`} />
          <div className={`${styles.spore} ${styles.s4}`} />
          <div className={`${styles.spore} ${styles.s5}`} />
          <div className={`${styles.spore} ${styles.s6}`} />
          <div className={`${styles.spore} ${styles.s7}`} />
          <div className={`${styles.spore} ${styles.s8}`} />
        </div>
      )}
    </div>
  );
}