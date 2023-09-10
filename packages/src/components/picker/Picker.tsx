import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { HandleEmojiClickType } from "../../type";
import { ActiveCategoryContext } from "../emoji/Category/ActiveCategoryContext";
import EmojiSection from "../emoji/EmojiSection/EmojiSection";
import { HandleEmojiClickContext } from "../emoji/EmojiSection/HandleEmojiClickContext";
import NavigationSection from "../navigation/NavigationSection";

type Props = {
  isOpen?: boolean;
  onEmojiSelect?: HandleEmojiClickType;
};

export const Picker = ({ isOpen = false, onEmojiSelect = () => {} }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string>("smilieys");
  const [isShowClass, setIsShowClass] = useState<string>("hidden");
  const pickerRef = useRef<HTMLDivElement>(null);

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (isOpen) {
      setIsShowClass("block");
    } else {
      setIsShowClass("hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsShowClass("hidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      role="region"
      aria-label="Picker"
      className={clsx("shadow-xl rounded-2xl bg-white w-80", isShowClass)}
    >
      <ActiveCategoryContext.Provider
        value={{ activeCategory, toggleActiveCategory }}
      >
        <HandleEmojiClickContext.Provider value={{ onEmojiSelect }}>
          <NavigationSection />
          <EmojiSection />
        </HandleEmojiClickContext.Provider>
      </ActiveCategoryContext.Provider>
    </div>
  );
};
