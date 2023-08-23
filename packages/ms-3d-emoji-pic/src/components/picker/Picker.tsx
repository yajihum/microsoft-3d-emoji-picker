import clsx from "clsx";
import React from "react";
import EmojiSection from "../emoji/EmojiSection";
import NavigationSection from "../navigation/NavigationSection";

type Props = {
  isShow: boolean;
};

function Picker(props: Props) {
  const showClass = props.isShow ? "block" : "hidden";

  return (
    <div className={clsx("shadow-xl rounded-2xl bg-white w-80", showClass)}>
      <NavigationSection />
      <EmojiSection />
    </div>
  );
}

export default Picker;
