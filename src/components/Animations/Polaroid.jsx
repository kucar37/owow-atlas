import { useState, useEffect } from 'react';
import styles from './Polaroid.module.css';
import img1 from '../../assets/fonts/sillypanda.png';

export default function Polaroid() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setKey((k) => k + 1), 5000);
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <div className={styles.scene} key={key}>
      <div className={styles.polaroid}>
        <div className={styles.photoArea}>
          <img
            src={img1}
            alt="silly panda"
            className={styles.photo}
          />
        </div>
        <div className={styles.label}>silly lil guy</div>
      </div>
    </div>
  );
}