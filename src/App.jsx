import { useMemo, useState } from 'react';
import AnimationCard from './components/AnimationCard/AnimationCard';
import AnimationDetail from './components/AnimationDetail/AnimationDetail';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import FadeIn from './components/Animations/FadeIn';
import CherryBlossom from './components/Animations/CherryBlossom';
import Mushroom from './components/Animations/Mushroom';
import styles from './App.module.css';

const fadeInCode = `.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: #D4FF3A;
  animation: fade var(--animation-duration, 2500ms) var(--animation-easing, ease-in-out) var(--animation-delay, 0ms) var(--animation-iteration-count, infinite);
}

@keyframes fade {
  0%, 100% { opacity: 0; transform: translateY(8px); }
  40%, 60% { opacity: 1; transform: translateY(0); }
}`;

const cherryBlossomCode = `.petal {
  position: absolute;
  top: -20px;
  opacity: 0;
  animation-name: fall;
  animation-timing-function: var(--animation-easing, linear);
  animation-iteration-count: var(--animation-iteration-count, infinite);
}

@keyframes fall {
  0% { opacity: 0; transform: translateY(-10px) rotate(0deg) translateX(0); }
  10% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { opacity: 0; transform: translateY(260px) rotate(360deg) translateX(40px); }
}`;

const mushroomCode = `.mushroom {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: idle var(--animation-duration, 2000ms) var(--animation-easing, ease-in-out) var(--animation-delay, 0ms) var(--animation-iteration-count, infinite);
}

.explosion .spore {
  animation: fly calc(var(--animation-duration, 1500ms) * 0.75) var(--animation-easing, ease-out) forwards;
}

@keyframes idle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}`;

const ANIMATIONS = [
  {
    id: 'fade-in',
    name: 'Fade In',
    category: 'Transition',
    platforms: ['Web'],
    library: 'CSS',
    description: 'A simple opacity transition from 0 to 1 with easing.',
    component: <FadeIn />,
    duration: 700,
    delay: 0,
    easingOption: 'ease-out',
    easing: 'ease-out',
    loop: true,
    tags: ['opacity', 'transition', 'intro'],
    bundle: '@owow/motion/transition',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '12 May 2026 by Tom van Dam',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import styles from './FadeIn.module.css';

export default function FadeIn() {
  return <div className={styles.box} />;
}`,
      css: fadeInCode,
      native: `const element = document.querySelector('.box');
element.animate([
  { opacity: 0, transform: 'translateY(8px)' },
  { opacity: 1, transform: 'translateY(0)' },
], {
  duration: 700,
  easing: 'ease-out',
  iterations: Infinity,
});`,
    },
    usage: {
      count: 23,
      projects: [
        { name: "Antler Site '26", status: 'prod' },
        { name: 'Booking Hero', status: 'prod' },
        { name: 'Lumen Studio Pitch', status: 'draft' },
      ],
    },
    accessibility: [
      'Respects prefers-reduced-motion.',
      'Pauses off-screen via IntersectionObserver.',
      'Avoid for users with vestibular disorders if paired with parallax.',
    ],
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Falling cherry blossom petals with a swaying branch.',
    component: <CherryBlossom />,
    duration: 1800,
    delay: 0,
    easingOption: 'linear',
    easing: 'linear',
    loop: true,
    tags: ['falling', 'decorative', 'entrance'],
    bundle: '@owow/motion/entrance',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '12 May 2026 by Tom van Dam',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import styles from './CherryBlossom.module.css';

export default function CherryBlossom() {
  return (
    <div className={styles.scene}>
      <div className={styles.petal}>❀</div>
      <div className={styles.petal}>✿</div>
    </div>
  );
}`,
      css: cherryBlossomCode,
      native: `const petals = document.querySelectorAll('.petal');
petals.forEach((petal, index) => {
  petal.animate([
    { opacity: 0, transform: 'translateY(-10px) rotate(0deg)' },
    { opacity: 1, offset: 0.1 },
    { opacity: 0, transform: 'translateY(260px) rotate(360deg)' },
  ], {
    duration: 1800 + index * 120,
    iterations: Infinity,
  });
});`,
    },
    usage: {
      count: 11,
      projects: [
        { name: 'Spring Campaign', status: 'prod' },
        { name: 'Garden Landing', status: 'draft' },
        { name: 'OWOW Labs', status: 'test' },
      ],
    },
    accessibility: [
      'Decorative movement should be hidden from screen readers.',
      'Loop can be disabled for reduced-motion users.',
      'Keep density low so the animation does not distract from content.',
    ],
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'CSS',
    description: 'A cute mushroom that explodes when clicked.',
    component: <Mushroom />,
    duration: 1500,
    delay: 0,
    easingOption: 'spring',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    loop: true,
    tags: ['click', 'playful', 'microinteraction'],
    bundle: '@owow/motion/entrance',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '12 May 2026 by Tom van Dam',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import { useState } from 'react';
import styles from './Mushroom.module.css';

export default function Mushroom() {
  const [exploded, setExploded] = useState(false);

  function handleClick() {
    setExploded(true);
    setTimeout(() => setExploded(false), 2000);
  }

  return <div className={styles.scene} onClick={handleClick}>...</div>;
}`,
      css: mushroomCode,
      native: `const mushroom = document.querySelector('.mushroom');
mushroom.addEventListener('click', () => {
  mushroom.classList.add('is-exploding');
  setTimeout(() => mushroom.classList.remove('is-exploding'), 2000);
});`,
    },
    usage: {
      count: 7,
      projects: [
        { name: 'Playground Demo', status: 'draft' },
        { name: 'Mascot Test', status: 'test' },
        { name: 'Microinteraction Kit', status: 'prod' },
      ],
    },
    accessibility: [
      'Click target should also be reachable with keyboard in production.',
      'Explosion animation should not be too bright or fast.',
      'Provide a non-motion fallback for reduced-motion users.',
    ],
  },
];

const DEFAULT_FILTERS = {
  categories: new Set(),
  platforms: new Set(),
  libraries: new Set(),
};

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [selectedAnimation, setSelectedAnimation] = useState(null);

  const visible = useMemo(() => {
    return ANIMATIONS.filter(a => {
      if (filters.categories.size && !filters.categories.has(a.category)) return false;
      if (filters.platforms.size && !a.platforms.some(p => filters.platforms.has(p))) return false;
      if (filters.libraries.size && !filters.libraries.has(a.library)) return false;
      return true;
    });
  }, [filters]);

  if (selectedAnimation) {
    return (
      <AnimationDetail
        animation={selectedAnimation}
        relatedAnimations={ANIMATIONS.filter((animation) => animation.id !== selectedAnimation.id)}
        onBack={() => setSelectedAnimation(null)}
        onSelect={setSelectedAnimation}
      />
    );
  }

  return (
    <div className={styles.layout}>
      <FilterSidebar
        animations={ANIMATIONS}
        filters={filters}
        onChange={setFilters}
      />

      <main className={styles.mainContent}>
        <p className={styles.resultCount}>
          {visible.length} of {ANIMATIONS.length} animations
        </p>
        <div className={styles.grid}>
          {visible.map(a => (
            <AnimationCard
              key={a.id}
              name={a.name}
              category={a.category}
              platform={a.platforms}
              library={a.library}
              description={a.description}
              onClick={() => setSelectedAnimation(a)}
            >
              {a.component}
            </AnimationCard>
          ))}
        </div>
      </main>
    </div>
  );
}
