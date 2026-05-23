import { useMemo, useState } from 'react';
import styles from './FilterSidebar.module.css';

const CATEGORIES = ['Entrance','Exit','Hover','Scroll','Transition','Loading','Attention'];
const PLATFORMS  = ['Web', 'Mobile'];
const LIBRARIES = ['GSAP', 'CSS'];

export default function FilterSidebar({ animations, filters, onChange }) {
  const [open, setOpen] = useState(false);

  const counts = useMemo(() => {
    const cat = {}, plat = {}, lib = {};
    animations.forEach(a => {
      cat[a.category]  = (cat[a.category]  || 0) + 1;
      a.platforms.forEach(p => { plat[p] = (plat[p] || 0) + 1; });
      lib[a.library]   = (lib[a.library]   || 0) + 1;
    });
    return { cat, plat, lib };
  }, [animations]);

  const toggle = (group, value) => {
    const current = new Set(filters[group]);
    current.has(value) ? current.delete(value) : current.add(value);
    onChange({ ...filters, [group]: current });
  };

  const clearAll = () =>
    onChange({ categories: new Set(), platforms: new Set(), libraries: new Set() });

  const hasActive =
    filters.categories.size || filters.platforms.size || filters.libraries.size;

  return (
    <aside className={styles.sidebar}>

      {/* Hamburger — alleen zichtbaar op mobile */}
      <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
        {open ? '✕ Filters' : '☰ Filters'}
      </button>

      {/* Content — altijd zichtbaar op desktop, toggle op mobile */}
      <div className={`${styles.menuContent} ${open ? styles.menuOpen : ''}`}>

        {/* Platform */}
        <section className={styles.group}>
          <div className={styles.groupHeader}>
            <span className={styles.groupLabel}>Platform</span>
            <button
              className={styles.clearBtn}
              style={{ visibility: filters.platforms.size ? 'visible' : 'hidden' }}
              onClick={() => onChange({ ...filters, platforms: new Set() })}
            >Clear</button>
          </div>
          {PLATFORMS.map(p => (
            <label key={p} className={styles.option}>
              <input
                type="checkbox"
                checked={filters.platforms.has(p)}
                onChange={() => toggle('platforms', p)}
              />
              <span className={styles.optionLabel}>{p}</span>
              <span className={styles.count}>{counts.plat[p] ?? 0}</span>
            </label>
          ))}
        </section>

        {/* Category */}
        <section className={styles.group}>
          <div className={styles.groupHeader}>
            <span className={styles.groupLabel}>Category</span>
            <button
              className={styles.clearBtn}
              style={{ visibility: filters.categories.size ? 'visible' : 'hidden' }}
              onClick={() => onChange({ ...filters, categories: new Set() })}
            >Clear</button>
          </div>
          {CATEGORIES.map(c => (
            <label key={c} className={styles.option}>
              <input
                type="checkbox"
                checked={filters.categories.has(c)}
                onChange={() => toggle('categories', c)}
              />
              <span className={styles.optionLabel}>{c}</span>
              <span className={styles.count}>{counts.cat[c] ?? 0}</span>
            </label>
          ))}
        </section>

        {/* Framework */}
        <section className={styles.group}>
          <div className={styles.groupHeader}>
            <span className={styles.groupLabel}>Framework</span>
            <button
              className={styles.clearBtn}
              style={{ visibility: filters.libraries.size ? 'visible' : 'hidden' }}
              onClick={() => onChange({ ...filters, libraries: new Set() })}
            >Clear</button>
          </div>
          {LIBRARIES.map(l => (
            <label key={l} className={styles.option}>
              <input
                type="checkbox"
                checked={filters.libraries.has(l)}
                onChange={() => toggle('libraries', l)}
              />
              <span className={styles.optionLabel}>{l}</span>
              <span className={styles.count}>{counts.lib[l] ?? 0}</span>
            </label>
          ))}
        </section>

        {hasActive ? (
          <button className={styles.clearAllBtn} onClick={clearAll}>
            Clear all filters
          </button>
        ) : null}

      </div>
    </aside>
  );
}