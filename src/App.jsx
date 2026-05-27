import { useState, useMemo } from 'react';
import AnimationCard from './components/AnimationCard/AnimationCard';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import Toolbar from './components/Toolbar/Toolbar';
import FadeIn from './components/Animations/FadeIn';
import CherryBlossom from './components/Animations/CherryBlossom';
import styles from './App.module.css';
import Mushroom from './components/Animations/Mushroom';
import TwinklingStars from './components/Animations/TwinklingStars';
import BounceCards from './components/Animations/BounceCards';
import DecryptedTextDemo from './components/Animations/DecryptedText';
import ScrambledTextDemo from './components/Animations/ScrambledText';
import LogoLoopDemo from './components/Animations/LogoLoopDemo';
import StickerPeel from './components/Animations/StickerPeel';
import ImageTrailDemo from './components/Animations/ImageTrailDemo';
import Navbar from './components/Navbar/Navbar';

const ANIMATIONS = [
  {
    id: 'fade-in',
    name: 'Fade In',
    category: 'Transition',
    platforms: ['Web'],
    library: 'CSS',
    description: 'A simple opacity transition from 0 to 1 with easing.',
    component: <FadeIn />,
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Falling cherry blossom petals with rotation.',
    component: <CherryBlossom />,
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'CSS',
    description: 'A cute mushroom that explodes when clicked.',
    component: <Mushroom />,
  },
  {
    id: 'twinkling-stars',
    name: 'Twinkling Stars',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Stars appear one by one with a rotating twinkle effect.',
    component: <TwinklingStars />,
  },
  {
    id: 'bounce-cards',
    name: 'Bounce Cards',
    category: 'Entrance',
    platforms: ['Web'],
    library: 'GSAP',
    description: 'Cards bounce in with an elastic spring effect.',
    component: <BounceCards />,
  },
  {
    id: 'decrypted-text',
    name: 'Decrypted Text',
    category: 'Hover',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Text scrambles on hover and reveals the original message.',
    component: <DecryptedTextDemo />,
  },
  {
    id: 'scrambled-text',
    name: 'Scrambled Text',
    category: 'Hover',
    platforms: ['Web'],
    library: 'CSS',
    description: 'Characters scramble when the cursor moves near them.',
    component: <ScrambledTextDemo />,
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
];

const DEFAULT_FILTERS = {
  categories: new Set(),
  platforms:  new Set(),
  libraries:  new Set(),
};

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [query, setQuery]     = useState('');          
  const [sortBy, setSortBy]   = useState('name-asc');  
  const [view, setView]       = useState('grid');      

  const visible = useMemo(() => {
    // 1. Sidebar filters
    let result = ANIMATIONS.filter(a => {
      if (filters.categories.size && !filters.categories.has(a.category)) return false;
      if (filters.platforms.size  && !a.platforms.some(p => filters.platforms.has(p))) return false;
      if (filters.libraries.size  && !filters.libraries.has(a.library)) return false;
      return true;
    });

    // 2. Search across name, category, library and description
    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.library.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
      );
    }

    // 3. Sort (copy first so the original ANIMATIONS array is never mutated)
    return [...result].sort((a, b) => {
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'category')  return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
      return a.name.localeCompare(b.name); // 'name-asc' (default)
    });
  }, [filters, query, sortBy]);

  return (
  <div className={styles.page}>
    <Navbar />

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
          <div className={view === "list" ? styles.list : styles.grid}>
            {visible.map((a) => (
              <AnimationCard
                key={a.id}
                name={a.name}
                category={a.category}
                platform={a.platforms}
                library={a.library}
                description={a.description}
                view={view}
              >
                {a.component}
              </AnimationCard>
            ))}
          </div>
        )}
      </main>
    </div>
  </div>
);
}
