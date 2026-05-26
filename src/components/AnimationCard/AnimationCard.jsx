import styles from './AnimationCard.module.css';

export default function AnimationCard({
  name = 'Animation_Name',
  category = 'Transition',
  platform = 'Web',
  library = 'GSAP',
  description = '',
  view = 'grid',
  children,
  onClick,
}) {
  const platforms = Array.isArray(platform) ? platform : [platform];

  function handleKeyDown(event) {
    if (!onClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <article
      className={`${styles.card} ${view === 'list' ? styles.cardList : ''}`}
      data-category={category.toLowerCase()}
      data-platform={platforms.map((p) => p.toLowerCase()).join(',')}
      data-library={library.toLowerCase()}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `Open ${name} animation details` : undefined}
    >
      <div className={styles.preview}>
        {children}
      </div>
  
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.tags}>
          <span className={styles.tagCategory}>{category}</span>
          {platforms.map((p) => (
            <span key={p} className={styles.tagNeutral}>{p}</span>
          ))}
          <span className={styles.tagNeutral}>{library}</span>
        </div>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </article>
  );
}
