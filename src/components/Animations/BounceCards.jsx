import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './BounceCards.module.css';

import img1 from '../../assets/fonts/bounce1.jpg';
import img2 from '../../assets/fonts/bounce2.jpg';
import img3 from '../../assets/fonts/bounce3.jpg';
import img4 from '../../assets/fonts/bounce4.jpg';
import img5 from '../../assets/fonts/bounce5.jpg';

const IMAGES = [img1, img2, img3, img4, img5];

const TRANSFORMS = [
  'rotate(5deg) translate(-60px)',
  'rotate(0deg) translate(-30px)',
  'rotate(-5deg)',
  'rotate(5deg) translate(30px)',
  'rotate(-5deg) translate(60px)',
];

export default function BounceCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bc-card',
        { scale: 0 },
        {
          scale: 1,
          stagger: 0.08,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.3,
          repeat: -1,
          repeatDelay: 2,
          yoyo: true,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {IMAGES.map((src, i) => (
        <div
          key={i}
          className={`bc-card ${styles.card}`}
          style={{ transform: TRANSFORMS[i] }}
        >
          <img className={styles.image} src={src} alt={`card-${i}`} />
        </div>
      ))}
    </div>
  );
}