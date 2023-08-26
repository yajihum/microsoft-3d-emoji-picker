import clsx from "clsx";
import React, { useState } from "react";
import { ActiveCategoryContext } from "../../context";
import EmojiSection from "../emoji/EmojiSection";
import NavigationSection from "../navigation/NavigationSection";

type Props = {
  isShow: boolean;
};

function Picker(props: Props) {
  const showClass = props.isShow ? "block" : "hidden";
  const [activeCategory, setActiveCategory] = useState<string>("smilieys");

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className={clsx("shadow-xl rounded-2xl bg-white w-80", showClass)}>
      <ActiveCategoryContext.Provider
        value={{ activeCategory, toggleActiveCategory }}
      >
        <NavigationSection />
        <EmojiSection />
      </ActiveCategoryContext.Provider>
    </div>
  );
}

export default Picker;
