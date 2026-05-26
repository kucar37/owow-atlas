import { useEffect, useRef } from 'react';
import styles from './ScrambledText.module.css';

const CHARS = '.:*+~#@!?';

export default function ScrambledTextDemo() {
  const containerRef = useRef(null);
  const spansRef = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      spansRef.current.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < 100) {
          const original = span.dataset.char;
          let count = 0;
          const interval = setInterval(() => {
            span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
            count++;
            if (count > 5) {
              clearInterval(interval);
              span.textContent = original;
            }
          }, 50);
        }
      });
    };

    el.addEventListener('pointermove', handleMove);
    return () => el.removeEventListener('pointermove', handleMove);
  }, []);

  const text = 'Hover over this text to scramble';

  return (
    <div className={styles.container} ref={containerRef}>
      <p className={styles.text}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            data-char={char}
            className={char === ' ' ? styles.space : styles.char}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}