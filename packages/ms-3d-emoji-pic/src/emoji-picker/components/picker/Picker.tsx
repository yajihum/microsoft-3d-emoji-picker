import React, { useEffect, useRef, useState } from "react";
import { ActiveCategoryContext, HandleEmojiClickContext } from "../../context";
import { HandleEmojiClickType } from "../../type";
import EmojiSection from "../emoji/EmojiSection";
import NavigationSection from "../navigation/NavigationSection";

type Props = {
  isOpen?: boolean;
  onEmojiSelect?: HandleEmojiClickType;
};

function Picker({ isOpen = false, onEmojiSelect = () => {} }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("smilieys");
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        dialogRef.current.close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <dialog
      aria-label="Emoji Picker"
      ref={dialogRef}
      className="shadow-xl rounded-2xl bg-white w-80"
    >
      <ActiveCategoryContext.Provider
        value={{ activeCategory, toggleActiveCategory }}
      >
        <HandleEmojiClickContext.Provider value={{ onEmojiSelect }}>
          <NavigationSection />
          <EmojiSection />
        </HandleEmojiClickContext.Provider>
      </ActiveCategoryContext.Provider>
    </dialog>
  );
}

export default Picker;
