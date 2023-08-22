import React from "react";
import { EmojiImage, EmojiImageList } from "../../type";

type Props = {
  emojiImageList: EmojiImageList;
};

export default function Category({ emojiImageList }: Props) {
  return (
    <section key={emojiImageList.category} className="grid gap-1">
      <p className="text-gray-500 text-sm pl-1 pt-2 pb-1.5 sticky top-0 backdrop-blur transition-colors bg-white/90">
        {emojiImageList.category}
      </p>
      <div className="grid grid-cols-8">
        {emojiImageList.emojiImages.map((image: EmojiImage) => (
          <button
            type="button"
            key={image.name}
            className="hover:bg-blue-100 rounded-md p-0.5"
          >
            <img
              src={`https://cdn.emoji.yajium.day/${image.category}/${image.name}.${image.extension}`}
              width={30}
              height={30}
              alt={`${image.category} | ${image.name}}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
