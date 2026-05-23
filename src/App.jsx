import { useState, useMemo } from 'react';
import AnimationCard from './components/AnimationCard/AnimationCard';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import FadeIn from './components/Animations/FadeIn';
import CherryBlossom from './components/Animations/CherryBlossom';
import styles from './App.module.css';

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
    description: 'Falling cherry blossom petals with a swaying branch.',
    component: <CherryBlossom />,
  },
];

const DEFAULT_FILTERS = {
  categories: new Set(),
  platforms:  new Set(),
  libraries:  new Set(),
};

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const visible = useMemo(() => {
    return ANIMATIONS.filter(a => {
      if (filters.categories.size && !filters.categories.has(a.category)) return false;
      if (filters.platforms.size  && !a.platforms.some(p => filters.platforms.has(p))) return false;
      if (filters.libraries.size  && !filters.libraries.has(a.library)) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className={styles.layout}>

      <FilterSidebar
        animations={ANIMATIONS}
        filters={filters}
        onChange={setFilters}
      />

      <main style={{ flex: 1 }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
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
            >
              {a.component}
            </AnimationCard>
          ))}
        </div>
      </main>

    </div>
  );
}