import clsx from "clsx";
import React, { useState } from "react";
import { ActiveCategoryContext, HandleEmojiClickContext } from "../../context";
import { HandleEmojiClickType } from "../../type";
import EmojiSection from "../emoji/EmojiSection";
import NavigationSection from "../navigation/NavigationSection";

type Props = {
  isShow?: boolean;
  onEmojiSelect?: HandleEmojiClickType;
};

function Picker({ isShow = false, onEmojiSelect = () => {} }: Props) {
  const showClass = isShow ? "block" : "hidden";
  const [activeCategory, setActiveCategory] = useState<string>("smilieys");

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className={clsx("shadow-xl rounded-2xl bg-white w-80", showClass)}>
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
}

export default Picker;
