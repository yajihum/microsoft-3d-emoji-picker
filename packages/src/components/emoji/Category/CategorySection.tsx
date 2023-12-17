import { Suspense, forwardRef, useEffect, useRef, useState } from 'react';
import { Category, EmojiType } from '../../../type';
import { Skeleton, ThreeDotsLoading } from '../../atoms/Loading';
import { useHandleEmojiClick } from '../EmojiSection/useHandleEmojiClick';
import styles from './Category.module.css';
import { useActiveCategory } from './useActiveCategory';
import { useEmojiList } from './useEmojiList';

type EmojiListByCategoryProps = {
  category: Category;
};

const EmojiListByCategory = ({ category }: EmojiListByCategoryProps) => {
  const emojiListByCategory = useEmojiList({ category });
  const { handleEmojiSelect } = useHandleEmojiClick();

  return (
    <div className={styles.gridContainer}>
      {emojiListByCategory.emojiImages.map((emoji: EmojiType) => {
        const [loaded, setLoaded] = useState(false);

        return (
          <button
            type="button"
            onClick={() => handleEmojiSelect(emoji)}
            key={emoji.name}
            className={styles.button}
          >
            {!loaded && <Skeleton />}
            <img
              src={emoji.url}
              className={styles.image}
              alt={`${emoji.category} | ${emoji.name}`}
              onLoad={() => setLoaded(true)}
              style={{ display: loaded ? 'block' : 'none' }}
            />
          </button>
        );
      })}
    </div>
  );
};

const formatString = (str: string): string => {
  const capitalizedFirst = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalizedFirst.replace(/-/g, ' ');
};

type Props = {
  category: Category;
};

export const CategorySection = forwardRef<HTMLDivElement, Props>(
  ({ category }, ref) => {
    const { toggleActiveCategory } = useActiveCategory();

    const categoryRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>(
      {}
    );
    const rootElement =
      typeof ref === 'object' && ref && ref.current ? ref.current : null;

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
    }, []);

    return (
      <section
        id={category.name}
        key={category.name}
        className={styles.section}
      >
        <h2
          id={category.name}
          ref={(el) => {
            categoryRefs.current[category.label] = el;
          }}
          className={styles.heading}
        >
          {formatString(category.name)}
        </h2>
        <Suspense fallback={<ThreeDotsLoading />}>
          <EmojiListByCategory category={category} />
        </Suspense>
      </section>
    );
  }
);
