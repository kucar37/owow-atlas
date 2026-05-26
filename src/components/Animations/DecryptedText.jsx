import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import styles from './DecryptedText.module.css';

export default function DecryptedTextDemo() {
  return (
    <div className={styles.container}>
      <DecryptedText
        text="OWOW Atlas"
        speed={60}
        maxIterations={15}
        animateOn="hover"
        className={styles.revealed}
        encryptedClassName={styles.encrypted}
        parentClassName={styles.text}
      />
    </div>
  );
}

function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(true);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const availableChars = useMemo(() => characters.split(''), [characters]);

  const shuffleText = useCallback(
    (originalText, revealedSet) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (revealedSet.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    },
    [availableChars]
  );

  const triggerDecrypt = useCallback(() => {
    if (isAnimating) return;
    setIsDecrypted(false);
    setIsAnimating(true);
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(shuffleText(text, new Set()));
      iteration++;
      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsAnimating(false);
        setIsDecrypted(true);
      }
    }, speed);
  }, [isAnimating, text, speed, maxIterations, shuffleText]);

  const resetText = useCallback(() => {
    clearInterval(intervalRef.current);
    setIsAnimating(false);
    setDisplayText(text);
    setIsDecrypted(true);
  }, [text]);

  useEffect(() => {
    setDisplayText(text);
    setIsDecrypted(true);
  }, [text]);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <motion.span
      ref={containerRef}
      className={parentClassName}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap', cursor: 'pointer' }}
      onMouseEnter={triggerDecrypt}
      onMouseLeave={resetText}
      {...props}
    >
      {displayText.split('').map((char, i) => (
        <span key={i} className={isDecrypted ? className : encryptedClassName}>
          {char}
        </span>
      ))}
    </motion.span>
  );
}