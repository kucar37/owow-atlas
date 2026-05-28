import Navbar from '../Navbar/Navbar';
import styles from './Page.module.css';

// Example release history, derived from the animation metadata
// (versions, dates and contributors) already in the library.
const RELEASES = [
  {
    version: 'v2.4',
    current: true,
    date: '27 May 2026',
    changes: [
      { kind: 'new', kindLabel: 'New', text: 'Added Card Stack — a draggable Framer Motion deck with swipe-to-back (Paulien).' },
      { kind: 'new', kindLabel: 'New', text: 'Added Slide Reveal and Pulse Loader to the transition and loading families (Kadir).' },
      { kind: 'improved', kindLabel: 'Improved', text: 'Detail view parameters (duration, delay, easing, loop) now drive the live preview and the copyable snippet together.' },
      { kind: 'improved', kindLabel: 'Improved', text: 'Search now also matches animation tags, not only names and descriptions.' },
      { kind: 'fix', kindLabel: 'Fixed', text: 'Restored navigation between Library, Guidelines, Changelog, and Brand from the top bar.' },
    ],
  },
  {
    version: 'v2.3',
    date: '12 May 2026',
    changes: [
      { kind: 'new', kindLabel: 'New', text: 'Added the Hover family: Sticker Peel, Image Trail, Decrypted Text, and Scrambled Text.' },
      { kind: 'new', kindLabel: 'New', text: 'Added Polaroid to the Entrance family (Tom van Dam).' },
      { kind: 'improved', kindLabel: 'Improved', text: 'Every entry now ships with React, CSS, and native snippets.' },
    ],
  },
  {
    version: 'v2.2',
    date: '28 Apr 2026',
    changes: [
      { kind: 'new', kindLabel: 'New', text: 'Added the Entrance family: Cherry Blossom, Mushroom, Twinkling Stars, and Bounce Cards.' },
      { kind: 'new', kindLabel: 'New', text: 'Added Logo Loop to the Scroll category.' },
      { kind: 'improved', kindLabel: 'Improved', text: 'Introduced category, platform, and framework filters in the sidebar.' },
    ],
  },
  {
    version: 'v2.0',
    date: '07 Apr 2026',
    changes: [
      { kind: 'new', kindLabel: 'New', text: 'First public release of the Atlas motion library with the Fade In transition.' },
      { kind: 'new', kindLabel: 'New', text: 'Library overview, detail view, and live previews.' },
    ],
  },
];

const KIND_CLASS = {
  new: styles.kindNew,
  fix: styles.kindFix,
  improved: styles.kindImproved,
};

export default function Changelog({ onNavigate, onHome }) {
  return (
    <>
      <Navbar active="Changelog" onNavigate={onNavigate} onHome={onHome} />

      <main className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Changelog</span>
          <h1 className={styles.title}>What’s new in Atlas</h1>
          <p className={styles.lead}>
            A running history of releases — new animations, improvements, and
            fixes as the library grows.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.releaseList}>
            {RELEASES.map((release) => (
              <article className={styles.release} key={release.version}>
                <div className={styles.releaseMeta}>
                  <span
                    className={`${styles.releaseVersion} ${
                      release.current ? '' : styles.releaseVersionMuted
                    }`}
                  >
                    {release.version}
                    {release.current ? ' · current' : ''}
                  </span>
                  <span className={styles.releaseDate}>{release.date}</span>
                </div>

                <ul className={styles.changeList}>
                  {release.changes.map((change) => (
                    <li className={styles.change} key={change.text}>
                      <span
                        className={`${styles.changeKind} ${KIND_CLASS[change.kind]}`}
                      >
                        {change.kindLabel}
                      </span>
                      <span>{change.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
