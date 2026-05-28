import Navbar from '../Navbar/Navbar';
import styles from './Page.module.css';

const AUDIENCES = [
  {
    tag: 'Designers',
    title: 'Design with what already exists',
    text: 'Browse Atlas during the design phase to see which motions are already built. Make realistic choices early and avoid redesigning animations that the team can already ship.',
  },
  {
    tag: 'Developers',
    title: 'Copy, don’t rebuild',
    text: 'Open any animation, tweak its parameters, and copy a clean React, CSS, or native snippet straight into your project. New team members can onboard by exploring instead of reverse-engineering.',
  },
  {
    tag: 'Clients',
    title: 'See it without the code',
    text: 'Every entry has a live preview and a short description, so clients can understand what is possible inside an OWOW project without reading a single line of code.',
  },
];

const DO_RULES = [
  'Respect prefers-reduced-motion and provide a calm fallback for every animation.',
  'Keep durations comfortable — motion should support the content, not delay it.',
  'Pause decorative loops when they leave the viewport or on hover where relevant.',
  'Pair each animation with a clear title and description so non-technical users follow along.',
];

const DONT_RULES = [
  'Don’t hide critical information behind a hover-only or motion-only interaction.',
  'Don’t stack many looping animations on a single screen — it competes for attention.',
  'Don’t use fast, high-contrast flashing that can be uncomfortable or unsafe.',
  'Don’t rebuild a motion from scratch before checking whether Atlas already has it.',
];

export default function Guidelines({ onNavigate, onHome }) {
  return (
    <>
      <Navbar active="Guidelines" onNavigate={onNavigate} onHome={onHome} />

      <main className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Guidelines</span>
          <h1 className={styles.title}>How to use Atlas</h1>
          <p className={styles.lead}>
            Atlas is OWOW’s central animation library. It exists to make existing
            motion easier to discover, preview, understand, and reuse — for
            designers, developers, and clients alike.
          </p>
        </header>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Who it’s for</p>
          <div className={styles.cardGrid}>
            {AUDIENCES.map((audience) => (
              <article className={styles.card} key={audience.tag}>
                <p className={styles.cardTag}>{audience.tag}</p>
                <h3 className={styles.cardTitle}>{audience.title}</h3>
                <p className={styles.cardText}>{audience.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Finding an animation</p>
          <h2 className={styles.sectionTitle}>Browse, filter, search</h2>
          <p className={styles.paragraph}>
            Start from the <strong>Library</strong> overview, where every
            animation is shown with a live preview. Narrow the list with the
            sidebar filters for <strong>platform</strong>,{' '}
            <strong>category</strong>, and <strong>framework</strong>, or jump
            straight to something with search (press{' '}
            <strong>⌘K / Ctrl+K</strong>). Search matches names, categories,
            descriptions, and tags.
          </p>
          <p className={styles.paragraph}>
            Open any entry to reach its detail view. There you can adjust the
            duration, delay, easing, and loop, watch the preview update live, and
            copy the matching snippet — the code reflects the values you set.
          </p>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Motion principles</p>
          <h2 className={styles.sectionTitle}>Do</h2>
          <ul className={styles.ruleList}>
            {DO_RULES.map((rule) => (
              <li className={styles.ruleItem} key={rule}>
                <span className={styles.markDo}>✓</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Don’t</h2>
          <ul className={styles.ruleList}>
            {DONT_RULES.map((rule) => (
              <li className={styles.ruleItem} key={rule}>
                <span className={styles.markDont}>✕</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
