import React from "react";
import { EmojiImage, EmojiImageList } from "../../../type";
import Emoji from "./Emoji";

type Props = {
  emojiImageList: EmojiImageList;
};

export default async function Category({ emojiImageList }: Props) {
  return (
    <section key={emojiImageList.category} className="grid gap-1">
      <p className="text-gray-500 text-sm pl-1 pt-2 pb-1.5 sticky top-0 backdrop-blur transition-colors bg-white/90">
        {emojiImageList.category}
      </p>
      <div className="grid grid-cols-8">
        {emojiImageList.emojiImages.map((image: EmojiImage) => (
          <Emoji key={image.name} {...image} />
        ))}
      </div>
    </section>
  );
}
