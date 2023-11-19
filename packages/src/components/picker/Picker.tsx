import React, { useEffect, useState } from 'react';
import { HandleEmojiClickType } from '../../type';
import { ActiveCategoryContext } from '../emoji/Category/ActiveCategoryContext';
import EmojiSection from '../emoji/EmojiSection/EmojiSection';
import { HandleEmojiClickContext } from '../emoji/EmojiSection/HandleEmojiClickContext';
import NavigationSection from '../navigation/NavigationSection';
import styles from './Picker.module.css';

type Props = {
  isOpen?: boolean;
  onEmojiSelect?: HandleEmojiClickType;
};

export const Picker = ({ isOpen = false, onEmojiSelect = () => {} }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string>('smilieys');
  const [isShowClass, setIsShowClass] = useState<string>(styles.hidden);

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    setIsShowClass(isOpen ? styles.block : styles.hidden);
  }, [isOpen]);

  return (
    <section
      aria-label="Picker"
      className={`${styles.pickerContainer} ${isShowClass}`}
    >
      <ActiveCategoryContext.Provider
        value={{ activeCategory, toggleActiveCategory }}
      >
        <HandleEmojiClickContext.Provider value={{ onEmojiSelect }}>
          <NavigationSection />
          <EmojiSection />
        </HandleEmojiClickContext.Provider>
      </ActiveCategoryContext.Provider>
    </section>
  );
};
