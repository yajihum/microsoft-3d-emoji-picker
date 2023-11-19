import React, { useEffect, useRef } from 'react';
import { EmojiList, EmojiType } from '../../../type';
import { useHandleEmojiClick } from '../EmojiSection/useHandleEmojiClick';
import styles from './Category.module.css';
import { useActiveCategory } from './useActiveCategory';

type Props = {
  emojiImageList: EmojiList;
};

export const Category = React.forwardRef<HTMLDivElement, Props>(
  ({ emojiImageList }, ref) => {
    const categoryRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>(
      {}
    );
    const rootElement =
      typeof ref === 'object' && ref && ref.current ? ref.current : null;
    const { toggleActiveCategory } = useActiveCategory();
    const { onEmojiSelect } = useHandleEmojiClick();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio > 0 &&
              entry.target.id
            ) {
              toggleActiveCategory(entry.target.id);
            }
          });
        },
        {
          root: rootElement,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      Object.values(categoryRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        Object.values(categoryRefs.current).forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <section
        id={emojiImageList.categoryName}
        key={emojiImageList.categoryName}
        className={styles.section}
      >
        <h2
          id={emojiImageList.categoryName}
          ref={(el) => {
            categoryRefs.current[emojiImageList.categoryLabel] = el;
          }}
          className={styles.heading}
        >
          {emojiImageList.categoryLabel}
        </h2>
        <div className={styles.gridContainer}>
          {emojiImageList.emojiImages.map((emoji: EmojiType) => (
            <button
              type="button"
              onClick={() => {
                onEmojiSelect(emoji);
              }}
              key={emoji.name}
              className={styles.button}
            >
              <img
                src={`https://cdn.emoji.yajium.day/${emoji.category}/${emoji.name}.${emoji.extension}`}
                className={styles.image}
                alt={`${emoji.category} | ${emoji.name}`}
              />
            </button>
          ))}
        </div>
      </section>
    );
  }
);

export default Category;
