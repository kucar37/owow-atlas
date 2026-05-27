import { useMemo, useState } from 'react';
import AnimationCard from './components/AnimationCard/AnimationCard';
import AnimationDetail from './components/AnimationDetail/AnimationDetail';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import Toolbar from './components/Toolbar/Toolbar';
import Navbar from './components/Navbar/Navbar';
import FadeIn from './components/Animations/FadeIn';
import CherryBlossom from './components/Animations/CherryBlossom';
import Mushroom from './components/Animations/Mushroom';
import TwinklingStars from './components/Animations/TwinklingStars';
import BounceCards from './components/Animations/BounceCards';
import DecryptedTextDemo from './components/Animations/DecryptedText';
import ScrambledTextDemo from './components/Animations/ScrambledText';
import LogoLoopDemo from './components/Animations/LogoLoopDemo';
import StickerPeel from './components/Animations/StickerPeel';
import ImageTrailDemo from './components/Animations/ImageTrailDemo';
import SlideReveal from './components/Animations/SlideReveal';
import PulseLoader from './components/Animations/PulseLoader';

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

const twinklingStarsCode = `.star {
  animation: twinkle var(--animation-duration, 1200ms) var(--animation-easing, ease-in-out) infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(0.8) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
}`;

const bounceCardsCode = `.card {
  animation: bounce var(--animation-duration, 900ms) var(--animation-easing, cubic-bezier(0.34, 1.56, 0.64, 1)) infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}`;

const decryptedTextCode = `.text {
  animation: reveal var(--animation-duration, 1200ms) steps(12) forwards;
}

@keyframes reveal {
  from { filter: blur(6px); opacity: 0.4; }
  to { filter: blur(0); opacity: 1; }
}`;

const scrambledTextCode = `.letter {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.letter:hover {
  transform: translateY(-4px) rotate(4deg);
  opacity: 0.8;
}`;

const slideRevealCode = `.panel {
  animation: slideIn var(--animation-duration, 1100ms) var(--animation-easing, cubic-bezier(0.16, 1, 0.3, 1)) infinite;
}

.revealBar {
  transform-origin: left;
  animation: wipe var(--animation-duration, 1100ms) var(--animation-easing, cubic-bezier(0.16, 1, 0.3, 1)) infinite;
}

@keyframes slideIn {
  0% { opacity: 0; transform: translateX(-26px); }
  45%, 80% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(18px); }
}

@keyframes wipe {
  0% { transform: scaleX(1); }
  45%, 100% { transform: scaleX(0); }
}`;

const pulseLoaderCode = `.loader span {
  animation: pulse var(--animation-duration, 900ms) var(--animation-easing, ease-in-out) infinite;
}

.loader span:nth-child(2) {
  animation-delay: 120ms;
}

.loader span:nth-child(3) {
  animation-delay: 240ms;
}

@keyframes pulse {
  0%, 100% { transform: scale(0.65); opacity: 0.35; }
  50% { transform: scale(1.2); opacity: 1; }
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
  {
    id: 'twinkling-stars',
    name: 'Twinkling Stars',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Stars appear one by one with a rotating twinkle effect.',
    component: <TwinklingStars />,
    duration: 1200,
    delay: 0,
    easingOption: 'ease-out',
    easing: 'ease-out',
    loop: true,
    tags: ['stars', 'twinkle', 'decorative'],
    bundle: '@owow/motion/entrance',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '12 May 2026 by Tom van Dam',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import TwinklingStars from './TwinklingStars';

export default function Example() {
  return <TwinklingStars />;
}`,
      css: twinklingStarsCode,
      native: `const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
  star.animate([
    { opacity: 0.2, transform: 'scale(0.8) rotate(0deg)' },
    { opacity: 1, transform: 'scale(1.2) rotate(180deg)' },
  ], {
    duration: 1200,
    delay: index * 120,
    iterations: Infinity,
    direction: 'alternate',
  });
});`,
    },
    usage: {
      count: 9,
      projects: [
        { name: 'Launch Page', status: 'prod' },
        { name: 'Hero Concept', status: 'draft' },
        { name: 'Brand Motion Kit', status: 'test' },
      ],
    },
    accessibility: [
      'Decorative stars should not distract from important content.',
      'Reduce or disable looping for reduced-motion users.',
      'Keep contrast comfortable on dark backgrounds.',
    ],
  },
  {
    id: 'bounce-cards',
    name: 'Bounce Cards',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'GSAP',
    description: 'Cards bounce in with an elastic spring effect.',
    component: <BounceCards />,
    duration: 900,
    delay: 0,
    easingOption: 'spring',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    loop: true,
    tags: ['cards', 'bounce', 'spring'],
    bundle: '@owow/motion/entrance',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '12 May 2026 by Tom van Dam',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import BounceCards from './BounceCards';

export default function Example() {
  return <BounceCards />;
}`,
      css: bounceCardsCode,
      native: `const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.animate([
    { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(0) scale(1)' },
  ], {
    duration: 900,
    delay: index * 80,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    fill: 'both',
  });
});`,
    },
    usage: {
      count: 15,
      projects: [
        { name: 'Case Cards', status: 'prod' },
        { name: 'Portfolio Grid', status: 'prod' },
        { name: 'Prototype Board', status: 'draft' },
      ],
    },
    accessibility: [
      'Avoid strong bouncing on large content blocks.',
      'Use stagger carefully so users do not wait too long.',
      'Respect reduced-motion settings.',
    ],
  },
  {
    id: 'decrypted-text',
    name: 'Decrypted Text',
    category: 'Hover',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Text scrambles on hover and reveals the original message.',
    component: <DecryptedTextDemo />,
    duration: 1200,
    delay: 0,
    easingOption: 'ease-out',
    easing: 'ease-out',
    loop: false,
    tags: ['text', 'hover', 'scramble'],
    bundle: '@owow/motion/hover',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '12 May 2026 by Tom van Dam',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import DecryptedTextDemo from './DecryptedText';

export default function Example() {
  return <DecryptedTextDemo />;
}`,
      css: decryptedTextCode,
      native: `const text = document.querySelector('.text');

text.addEventListener('mouseenter', () => {
  text.classList.add('is-revealing');
});`,
    },
    usage: {
      count: 6,
      projects: [
        { name: 'Cyber Landing', status: 'draft' },
        { name: 'Portfolio Intro', status: 'test' },
        { name: 'Interactive Header', status: 'prod' },
      ],
    },
    accessibility: [
      'Do not use scrambled text for critical information only.',
      'Keep the final readable text available in the DOM.',
      'Avoid rapid flashing or unreadable text for long periods.',
    ],
  },
  {
    id: 'scrambled-text',
    name: 'Scrambled Text',
    category: 'Hover',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Characters scramble when the cursor moves near them.',
    component: <ScrambledTextDemo />,
    duration: 1000,
    delay: 0,
    easingOption: 'ease-out',
    easing: 'ease-out',
    loop: false,
    tags: ['text', 'cursor', 'interactive'],
    bundle: '@owow/motion/hover',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '12 May 2026 by Tom van Dam',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import ScrambledTextDemo from './ScrambleText';

export default function Example() {
  return <ScrambledTextDemo />;
}`,
      css: scrambledTextCode,
      native: `const letters = document.querySelectorAll('.letter');

letters.forEach((letter) => {
  letter.addEventListener('mouseenter', () => {
    letter.classList.add('is-scrambled');
  });
});`,
    },
    usage: {
      count: 8,
      projects: [
        { name: 'Experimental Nav', status: 'draft' },
        { name: 'Motion Lab', status: 'test' },
        { name: 'Creative Portfolio', status: 'prod' },
      ],
    },
    accessibility: [
      'Do not make important text unreadable on hover.',
      'Keep interaction optional and not required for navigation.',
      'Respect reduced-motion preferences.',
    ],
  },
  {
    id: 'logo-loop',
    name: 'Image Loop',        
    category: 'Scroll',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Infinite scrolling image marquee that pauses on hover.',
    component: <LogoLoopDemo />,
  },
  {
    id: 'sticker-peel',
    name: 'Sticker Peel',
    category: 'Hover',
    platforms: ['Web'],
    library: 'CSS',
    description: 'A sticker that peels back on hover and can be dragged around.',
    component: <StickerPeel />,
  },
  {
    id: 'image-trail',
    name: 'Image Trail',
    category: 'Hover',
    platforms: ['Web'],
    library: 'GSAP',
    description: 'Images follow the cursor in a trail as you move over the card.',
    component: <ImageTrailDemo />,
  },
  {
    id: 'slide-reveal',
    name: 'Slide Reveal',
    category: 'Transition',
    platforms: ['Web'],
    library: 'CSS',
    description: 'A content panel revealed with a fast horizontal wipe.',
    component: <SlideReveal />,
    duration: 1100,
    delay: 0,
    easingOption: 'expo-out',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    loop: true,
    tags: ['wipe', 'slide', 'reveal'],
    bundle: '@owow/motion/transition',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '27 May 2026 by Kadir',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import SlideReveal from './SlideReveal';
  
  export default function Example() {
    return <SlideReveal />;
  }`,
      css: slideRevealCode,
      native: `const panel = document.querySelector('.panel');
  const bar = document.querySelector('.revealBar');
  
  panel.animate([
    { opacity: 0, transform: 'translateX(-26px)' },
    { opacity: 1, transform: 'translateX(0)', offset: 0.45 },
    { opacity: 0, transform: 'translateX(18px)' },
  ], { duration: 1100, iterations: Infinity });
  
  bar.animate([
    { transform: 'scaleX(1)' },
    { transform: 'scaleX(0)' },
  ], { duration: 1100, iterations: Infinity });`,
    },
    usage: {
      count: 4,
      projects: [
        { name: 'Atlas Library', status: 'draft' },
        { name: 'Case Header', status: 'test' },
        { name: 'Motion Prototype', status: 'draft' },
      ],
    },
    accessibility: [
      'Keep the revealed content readable without relying on motion.',
      'Use reduced-motion fallback for the wipe effect.',
      'Avoid using fast wipes on long text blocks.',
    ],
  },
  {
    id: 'pulse-loader',
    name: 'Pulse Loader',
    category: 'Loading',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Three dots pulse in sequence for lightweight loading states.',
    component: <PulseLoader />,
    duration: 900,
    delay: 0,
    easingOption: 'ease-out',
    easing: 'ease-in-out',
    loop: true,
    tags: ['loader', 'pulse', 'status'],
    bundle: '@owow/motion/loading',
    owner: 'Motion guild',
    version: '2.4.1',
    lastUpdated: '27 May 2026 by Kadir',
    githubUrl: 'https://git.fhict.nl/I556901/owow-atlas',
    codeSnippets: {
      react: `import PulseLoader from './PulseLoader';
  
  export default function Example() {
    return <PulseLoader />;
  }`,
      css: pulseLoaderCode,
      native: `const dots = document.querySelectorAll('.loader span');
  
  dots.forEach((dot, index) => {
    dot.animate([
      { transform: 'scale(0.65)', opacity: 0.35 },
      { transform: 'scale(1.2)', opacity: 1 },
      { transform: 'scale(0.65)', opacity: 0.35 },
    ], {
      duration: 900,
      delay: index * 120,
      iterations: Infinity,
    });
  });`,
    },
    usage: {
      count: 10,
      projects: [
        { name: 'Portal Loading State', status: 'prod' },
        { name: 'Atlas Library', status: 'draft' },
        { name: 'Form Submit Flow', status: 'test' },
      ],
    },
    accessibility: [
      'Add real loading text for screen readers in production.',
      'Do not use the loader without a status message for long waits.',
      'Disable pulsing for reduced-motion users.',
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
  const [query, setQuery]     = useState('');          
  const [sortBy, setSortBy]   = useState('name-asc');  
  const [view, setView]       = useState('grid');  
  const [selectedAnimation, setSelectedAnimation] = useState(null);    

  const visible = useMemo(() => {
    let result = ANIMATIONS.filter((a) => {
      if (filters.categories.size && !filters.categories.has(a.category)) return false;
      if (filters.platforms.size && !a.platforms.some((p) => filters.platforms.has(p))) return false;
      if (filters.libraries.size && !filters.libraries.has(a.library)) return false;
      return true;
    });

    const q = query.trim().toLowerCase();

    if (q) {
      result = result.filter((a) =>
        a.name.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.library.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
      );
    }

    return [...result].sort((a, b) => {
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);

      if (sortBy === 'category') {
        return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
      }

      return a.name.localeCompare(b.name);
    });
  }, [filters, query, sortBy]);

  if (selectedAnimation) {
    return (
      <AnimationDetail
        animation={selectedAnimation}
        relatedAnimations={ANIMATIONS.filter(
          (animation) => animation.id !== selectedAnimation.id
        )}
        onBack={() => setSelectedAnimation(null)}
        onSelect={setSelectedAnimation}
      />
    );
  }

  return (
    <>
      <Navbar
        category="all"
        current="animations"
        onHome={() => setSelectedAnimation(null)}
      />
  
      <div className={styles.page}>
<section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroLeft}>
          <h1 id="hero-title">
            One library<br />
            <span>for every motion</span><br />
            we ship.
          </h1>

          <p className={styles.heroDesc}>
            Browse, preview and lift production-ready motion. Every entry ships with tweakable parameters and a copiable snippet for React, Vue, and bare CSS.
          </p>

          <div className={styles.heroStats}>
            <div>
              <strong>{ANIMATIONS.length}</strong>
              <span>Animations</span>
            </div>
            <div>
              <strong>{new Set(ANIMATIONS.map((a) => a.category)).size}</strong>
              <span>Categories</span>
            </div>
            <div>
              <strong>{new Set(ANIMATIONS.flatMap((a) => a.platforms)).size}</strong>
              <span>Platforms</span>
            </div>
            <div>
              <strong>v2.4</strong>
              <span>Release</span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <span className={styles.featuredLabel}>FEATURED</span>
          <div className={styles.featuredCard}>
            <AnimationCard
                name="Logo_Loop"
                category="Scroll"
                platform="Web"
                library="CSS"
                description="Infinite scrolling image marquee that pauses on hover."
                dark
                onClick={() => setSelectedAnimation(ANIMATIONS.find(a => a.id === 'logo-loop'))}
            >
              <LogoLoopDemo />
            </AnimationCard>
          </div>
        </div>
      </section>
        <Toolbar
          query={query}
          onQueryChange={setQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          view={view}
          onViewChange={setView}
        />
  
        <div className={styles.layout}>
          <FilterSidebar
            animations={ANIMATIONS}
            filters={filters}
            onChange={setFilters}
          />
  
          <main className={styles.main}>
            <p className={styles.count}>
              {visible.length} of {ANIMATIONS.length} animations
            </p>
  
            {visible.length === 0 ? (
              <p className={styles.empty}>No animations match your search.</p>
            ) : (
              <div className={view === 'list' ? styles.list : styles.grid}>
                {visible.map((a) => (
                  <AnimationCard
                    key={a.id}
                    name={a.name}
                    category={a.category}
                    platform={a.platforms}
                    library={a.library}
                    description={a.description}
                    view={view}
                    onClick={() => setSelectedAnimation(a)}
                  >
                    {a.component}
                  </AnimationCard>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
