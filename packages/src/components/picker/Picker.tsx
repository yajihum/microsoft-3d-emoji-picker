import { useEffect, useState } from 'react';
import { HandleEmojiClickType } from '../../type';
import { ActiveCategoryContext } from '../emoji/Category/ActiveCategoryContext';
import { EmojiSection } from '../emoji/EmojiSection/EmojiSection';
import { HandleEmojiClickContext } from '../emoji/EmojiSection/HandleEmojiClickContext';
import { NavigationSection } from '../navigation/NavigationSection';
import styles from './Picker.module.css';

type Props = {
  isOpen?: boolean;
  handleEmojiSelect?: HandleEmojiClickType;
};

export const Picker = ({
  isOpen = false,
  handleEmojiSelect = () => {},
}: Props) => {
  const [activeCategory, setActiveCategory] = useState<string>('smilieys');

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (isOpen) {
      setActiveCategory('smileys');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section aria-label="Picker" className={styles.pickerContainer}>
      <ActiveCategoryContext.Provider
        value={{ activeCategory, toggleActiveCategory }}
      >
        <HandleEmojiClickContext.Provider value={{ handleEmojiSelect }}>
          <NavigationSection />
          <EmojiSection />
        </HandleEmojiClickContext.Provider>
      </ActiveCategoryContext.Provider>
    </section>
  );
};
