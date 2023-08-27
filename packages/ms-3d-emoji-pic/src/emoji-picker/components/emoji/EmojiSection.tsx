import React, { useRef } from "react";
import { emojiImages } from "../../util";
import Category from "./Category";

export default function EmojiSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const images = emojiImages;
  return (
    <section className="pl-4 pb-4">
      <div
        ref={containerRef}
        autoFocus
        className="grid grid-rows gap-3 overflow-auto h-96 scrollbar"
      >
        {images.map((categoryList) => (
          <Category
            key={categoryList.categoryName}
            emojiImageList={categoryList}
            ref={containerRef}
          />
        ))}
      </div>
    </section>
  );
}
