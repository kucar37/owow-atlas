import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import './Stack.css';

import stack1 from '../../assets/fonts/slack1.gif';
import stack2 from '../../assets/fonts/slack2.gif';
import stack3 from '../../assets/fonts/slack3.gif';
import stack4 from '../../assets/fonts/slack4.gif';

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="card-rotate-disabled" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// Converts a CSS easing string into a value Framer Motion understands.
function toFramerEase(easing) {
  if (!easing) return 'easeOut';
  if (easing === 'linear') return 'linear';
  if (easing === 'ease-out') return 'easeOut';
  const match = easing.match(/cubic-bezier\(([^)]+)\)/);
  if (match) {
    const points = match[1].split(',').map((n) => parseFloat(n.trim()));
    if (points.length === 4 && points.every((n) => !Number.isNaN(n))) {
      return points;
    }
  }
  return 'easeOut';
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
  // Live parameters coming from the Atlas detail panel (optional).
  duration,
  easing,
  loop
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  // When the detail panel provides a duration, animate with a tween so the
  // Duration/Easing controls visibly affect the card movement. Otherwise
  // fall back to the default spring physics.
  const cardTransition = duration
    ? { type: 'tween', duration: duration / 1000, ease: toFramerEase(easing) }
    : {
        type: 'spring',
        stiffness: animationConfig.stiffness,
        damping: animationConfig.damping,
      };

  // The Loop control toggles the auto-cycling of the deck.
  const isAutoplay = loop ?? autoplay;

  const [stack, setStack] = useState(() => {
    // Compute the random rotation once per card so it stays stable
    // across re-renders (calling Math.random() during render is impure).
    const makeRotate = () => (randomRotation ? Math.random() * 10 - 5 : 0);

    if (cards.length) {
      return cards.map((content, index) => ({
        id: index + 1,
        content,
        rotate: makeRotate(),
      }));
    } else {
      // Fallback demo cards using the imported image modules.
      return [
        {
          id: 1,
          rotate: makeRotate(),
          content: (
            <img
              src={stack1}
              alt="stack1"
              className="card-image"
            />
          )
        },
        {
          id: 2,
          rotate: makeRotate(),
          content: (
            <img
              src={stack2}
              alt="stack2"
              className="card-image"
            />
          )
        },
        {
          id: 3,
          rotate: makeRotate(),
          content: (
            <img
              src={stack3}
              alt="stack3"
              className="card-image"
            />
          )
        },
        {
          id: 4,
          rotate: makeRotate(),
          content: (
            <img
              src={stack4}
              alt="stack4"
              className="card-image"
            />
          )
        }
      ];
    }
  });

  // Note: the stack is initialized from `cards` once (see useState above).
  // We intentionally do not re-sync on every `cards` reference change,
  // because the parent passes a freshly built array each render, which
  // would reset the card order and trigger cascading renders.

  const sendToBack = id => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (isAutoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [isAutoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="stack-container"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = card.rotate ?? 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={cardTransition}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}