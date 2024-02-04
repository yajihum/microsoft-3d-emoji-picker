import { useRef } from 'react';
import { emojiCategories } from '../../../data';
import { CategorySection } from '../Category/CategorySection';
import styles from './EmojiSection.module.css';

export const EmojiSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className={styles.section}>
      <div ref={containerRef} className={styles.container}>
        {emojiCategories.map((category) => (
          <CategorySection key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
};
