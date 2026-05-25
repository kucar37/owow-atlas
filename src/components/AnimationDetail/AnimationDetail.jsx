import { useMemo, useState } from 'react';
import AnimationCard from '../AnimationCard/AnimationCard';
import styles from './AnimationDetail.module.css';

const EASING_OPTIONS = {
  linear: 'linear',
  'ease-out': 'ease-out',
  'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

export default function AnimationDetail({ animation, relatedAnimations = [], onBack, onSelect }) {
  const [duration, setDuration] = useState(animation.duration ?? 700);
  const [delay, setDelay] = useState(animation.delay ?? 0);
  const [easing, setEasing] = useState(animation.easingOption ?? 'ease-out');
  const [loop, setLoop] = useState(animation.loop ?? true);
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const easingValue = EASING_OPTIONS[easing] ?? easing;
  const platforms = Array.isArray(animation.platforms) ? animation.platforms : [animation.platforms];
  const codeSnippets = animation.codeSnippets ?? {};
  const code = codeSnippets[activeTab] ?? codeSnippets.react ?? codeSnippets.css ?? '';

  const previewStyle = useMemo(() => ({
    '--animation-duration': `${duration}ms`,
    '--animation-delay': `${delay}ms`,
    '--animation-easing': easingValue,
    '--animation-iteration-count': loop ? 'infinite' : '1',
  }), [duration, delay, easingValue, loop]);

  function handleCopy() {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  function handleReplay() {
    setReplayKey((currentKey) => currentKey + 1);
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brandBlock}>
          <div className={styles.logoMark} />
          <div>
            <p className={styles.brand}>ATLAS</p>
            <p className={styles.version}>Motion library · v2.4</p>
          </div>
        </div>

        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <span>Library</span>
          <span>/</span>
          <span>{animation.category}</span>
          <span>/</span>
          <strong>{animation.name}</strong>
        </nav>

        <button className={styles.backButton} type="button" onClick={onBack}>
          ← Back to library
        </button>
      </header>

      <div className={styles.body}>
        <section className={styles.content}>
          <div className={styles.tags}>
            <span className={styles.tagAccent}>{animation.category}</span>
            {platforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
            <span>{animation.library}</span>
          </div>

          <h1 className={styles.title}>{animation.name}</h1>
          <p className={styles.description}>{animation.description}</p>

          <section className={styles.previewPanel} aria-label="Animation preview">
            <div className={styles.previewTopbar}>
              <div className={styles.windowDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className={styles.previewUrl}>atlas.owow.io / preview / animation</span>
              <button className={styles.smallButton} type="button" onClick={handleReplay}>
                Replay
              </button>
            </div>

            <div className={styles.previewCanvas} style={previewStyle}>
              <div key={replayKey} className={styles.previewScale}>
                {animation.component}
              </div>
            </div>

            <div className={styles.statsRow}>
              <div>
                <span>Duration</span>
                <strong>{duration}ms</strong>
              </div>
              <div>
                <span>Delay</span>
                <strong>{delay}ms</strong>
              </div>
              <div>
                <span>Easing</span>
                <strong>{easingValue}</strong>
              </div>
              <div>
                <span>Loop</span>
                <strong>{loop ? 'yes' : 'no'}</strong>
              </div>
            </div>
          </section>

          <section className={styles.codePanel} aria-label="Code snippet">
            <div className={styles.codeHeader}>
              <div className={styles.tabs}>
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    className={activeTab === tab ? styles.activeTab : ''}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className={styles.codeActions}>
                <a href={animation.githubUrl} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
                <button type="button" onClick={handleCopy}>
                  {copied ? 'Copied' : 'Copy snippet'}
                </button>
              </div>
            </div>

            <pre className={styles.codeBlock}><code>{code}</code></pre>

            <div className={styles.codeFooter}>
              <span>{code.split('\n').filter(Boolean).length} lines · {(new Blob([code]).size / 1024).toFixed(2)} KB</span>
              <span>Last updated {animation.lastUpdated}</span>
            </div>
          </section>

          <section className={styles.relatedSection}>
            <div className={styles.sectionHeader}>
              <h2>Related animations</h2>
              <span>Same family / common pairings</span>
            </div>

            <div className={styles.relatedGrid}>
              {relatedAnimations.slice(0, 4).map((related) => (
                <AnimationCard
                  key={related.id}
                  name={related.name}
                  category={related.category}
                  platform={related.platforms}
                  library={related.library}
                  description={related.description}
                  onClick={() => onSelect(related)}
                >
                  {related.component}
                </AnimationCard>
              ))}
            </div>
          </section>
        </section>

        <aside className={styles.sidebar}>
          <section className={styles.sidebarCard}>
            <h2>Parameters</h2>

            <label className={styles.rangeLabel}>
              <span>
                Duration
                <strong>{duration} ms</strong>
              </span>
              <input
                type="range"
                min="200"
                max="3000"
                step="50"
                value={duration}
                onChange={(event) => setDuration(Number(event.target.value))}
              />
            </label>

            <label className={styles.rangeLabel}>
              <span>
                Delay
                <strong>{delay} ms</strong>
              </span>
              <input
                type="range"
                min="0"
                max="1200"
                step="50"
                value={delay}
                onChange={(event) => setDelay(Number(event.target.value))}
              />
            </label>

            <div className={styles.optionGroup}>
              <p>Easing curve</p>
              <div>
                {Object.keys(EASING_OPTIONS).map((option) => (
                  <button
                    key={option}
                    className={easing === option ? styles.selectedOption : ''}
                    type="button"
                    onClick={() => setEasing(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={loop}
                onChange={(event) => setLoop(event.target.checked)}
              />
              <span>Loop on view</span>
              <strong>{loop ? 'Enabled' : 'Disabled'}</strong>
            </label>
          </section>

          <section className={styles.sidebarCard}>
            <h2>Metadata</h2>
            <dl className={styles.metaList}>
              <div><dt>ID</dt><dd>{animation.id}</dd></div>
              <div><dt>Category</dt><dd>{animation.category}</dd></div>
              <div><dt>Platforms</dt><dd>{platforms.join(', ')}</dd></div>
              <div><dt>Tags</dt><dd>{animation.tags?.join(', ')}</dd></div>
              <div><dt>Bundle</dt><dd>{animation.bundle}</dd></div>
              <div><dt>Owner</dt><dd>{animation.owner}</dd></div>
              <div><dt>Version</dt><dd>{animation.version}</dd></div>
            </dl>
          </section>

          <section className={styles.sidebarCard}>
            <h2>Usage</h2>
            <p className={styles.usageNumber}>{animation.usage?.count ?? 0}</p>
            <span className={styles.usageLabel}>live projects</span>

            <ul className={styles.usageList}>
              {animation.usage?.projects?.map((project) => (
                <li key={project.name}>
                  <span>{project.name}</span>
                  <strong>{project.status}</strong>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sidebarCard}>
            <h2>Accessibility</h2>
            <ul className={styles.accessibilityList}>
              {animation.accessibility?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
