import { useEffect, useRef } from 'react';
import styles from './Toolbar.module.css';

const SORT_OPTIONS = [
  { value: 'name-asc',  label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'category',  label: 'Category' },
];

export default function Toolbar({
  query,
  onQueryChange,
  sortBy,
  onSortChange,
  view,
  onViewChange,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className={styles.toolbar}>

      {/* ---- Search ---- */}
      <div className={styles.search}>
        <SearchIcon />
        <input
          ref={inputRef}
          type="text"
          className={styles.searchInput}
          placeholder="Search animations, tags, descriptions…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        {query ? (
          <button
            className={styles.clearSearch}
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : (
          <kbd className={styles.kbd}>Search</kbd>
        )}
      </div>

      {/* ---- Sort + view ---- */}
      <div className={styles.controls}>

        <div className={styles.sort}>
          <span className={styles.sortLabel}>Sort</span>
          <div className={styles.selectWrap}>
            <select
              className={styles.select}
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronIcon />
          </div>
        </div>

        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewBtn} ${view === 'grid' ? styles.viewActive : ''}`}
            onClick={() => onViewChange('grid')}
            aria-label="Grid view"
            aria-pressed={view === 'grid'}
          >
            <GridIcon />
          </button>
          <button
            className={`${styles.viewBtn} ${view === 'list' ? styles.viewActive : ''}`}
            onClick={() => onViewChange('list')}
            aria-label="List view"
            aria-pressed={view === 'list'}
          >
            <ListIcon />
          </button>
        </div>

      </div>
    </div>
  );
}


function SearchIcon() {
  return (
    <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="10.8" y1="10.8" x2="15" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="1.2" />
      <rect x="9" y="1" width="6" height="6" rx="1.2" />
      <rect x="1" y="9" width="6" height="6" rx="1.2" />
      <rect x="9" y="9" width="6" height="6" rx="1.2" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <line x1="2" y1="4"  x2="14" y2="4"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="8"  x2="14" y2="8"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
