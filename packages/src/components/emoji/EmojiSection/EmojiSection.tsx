import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { emojiCategories } from '../../../data';
import CategorySection from '../Category/CategorySection';
import styles from './EmojiSection.module.css';

export default function EmojiSection() {
  const queryClient = new QueryClient();

  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className={styles.section}>
      <QueryClientProvider client={queryClient}>
        <div ref={containerRef} autoFocus className={styles.container}>
          {emojiCategories.map((category) => (
            <CategorySection key={category.name} category={category} />
          ))}
        </div>
      </QueryClientProvider>
    </section>
  );
}
