import React from "react";
import { emojiImages } from "../../util";
import Category from "./Category";

export default function EmojiSection() {
  const images = emojiImages;
  return (
    <section className="pl-4 pb-4">
      <div className="grid grid-rows gap-3 overflow-auto h-96 scrollbar">
        {images.map((categoryList) => (
          <Category key={categoryList.category} emojiImageList={categoryList} />
        ))}
      </div>
    </section>
  );
}
