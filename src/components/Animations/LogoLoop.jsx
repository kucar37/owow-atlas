import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };

const LogoLoop = memo(({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 120,
  gap = 32,
  hoverSpeed = 0,
  fadeOut = false,
  fadeOutColor,
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);
  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  const targetVelocity = useMemo(() => {
    const mag = Math.abs(speed);
    return direction === 'left' ? mag : -mag;
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect()?.width ?? 0;
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const needed = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, needed));
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !seqRef.current) return;
    const ro = new ResizeObserver(updateDimensions);
    ro.observe(containerRef.current);
    ro.observe(seqRef.current);
    updateDimensions();
    return () => ro.disconnect();
  }, [updateDimensions]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
      const dt = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered ? hoverSpeed : targetVelocity;
      const ease = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * ease;

      if (seqWidth > 0) {
        let next = offsetRef.current + velocityRef.current * dt;
        next = ((next % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = next;
        track.style.transform = `translate3d(${-next}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, hoverSpeed]);

  return (
    <div
      ref={containerRef}
      className={`logoloop logoloop--horizontal ${fadeOut ? 'logoloop--fade' : ''}`}
      style={{
        width: '100%',
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
      }}
    >
      <div
        className="logoloop__track"
        ref={trackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Array.from({ length: copyCount }, (_, ci) => (
          <ul
            className="logoloop__list"
            key={ci}
            ref={ci === 0 ? seqRef : undefined}
            aria-hidden={ci > 0}
          >
            {logos.map((item, i) => (
              <li className="logoloop__item" key={`${ci}-${i}`}>
                {item.node ? (
                  <span className="logoloop__node">{item.node}</span>
                ) : (
                  <img src={item.src} alt={item.alt ?? ''} draggable={false} />
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
});

export default LogoLoop;