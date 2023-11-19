import React, { useEffect, useRef } from 'react';
import { EmojiList } from '../../../type';
import { fetchEmojiList } from '../../../util';
import Category from '../Category/Category';
import styles from './EmojiSection.module.css';

export default function EmojiSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = React.useState<EmojiList[]>([]);

  useEffect(() => {
    fetchEmojiList().then((res) => setImages(res));
  }, []);

  return (
    <section className={styles.section}>
      <div ref={containerRef} autoFocus className={styles.container}>
        {images.map((categoryList) => (
          <Category
            key={categoryList.categoryName}
            emojiImageList={categoryList}
            ref={containerRef}
          />
        ))}
      </div>
    </section>
  );
}
