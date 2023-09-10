import React, { useEffect, useRef } from "react";
import { EmojiList, EmojiType } from "../../../type";
import { useHandleEmojiClick } from "../EmojiSection/useHandleEmojiClick";
import { useActiveCategory } from "./useActiveCategory";

type Props = {
  emojiImageList: EmojiList;
};

export const Category = React.forwardRef<HTMLDivElement, Props>(
  ({ emojiImageList }, ref) => {
    const categoryRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>(
      {}
    );
    const rootElement =
      typeof ref === "object" && ref && ref.current ? ref.current : null;
    const { toggleActiveCategory } = useActiveCategory();
    const { onEmojiSelect } = useHandleEmojiClick();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio > 0 &&
              entry.target.id
            ) {
              toggleActiveCategory(entry.target.id);
            }
          });
        },
        {
          root: rootElement,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      Object.values(categoryRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        Object.values(categoryRefs.current).forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <section
        id={emojiImageList.categoryName}
        key={emojiImageList.categoryName}
        className="grid gap-1"
      >
        <h2
          id={emojiImageList.categoryName}
          ref={(el) => {
            categoryRefs.current[emojiImageList.categoryLabel] = el;
          }}
          className="text-gray-500 text-sm pl-1 pt-2 pb-1.5 sticky top-0 backdrop-blur transition-colors bg-white/90"
        >
          {emojiImageList.categoryLabel}
        </h2>
        <div className="grid grid-cols-8">
          {emojiImageList.emojiImages.map((emoji: EmojiType) => (
            <button
              type="button"
              onClick={() => {
                onEmojiSelect(emoji);
              }}
              key={emoji.name}
              className="hover:bg-blue-100 rounded-md p-0.5"
            >
              <img
                src={`https://cdn.emoji.yajium.day/${emoji.category}/${emoji.name}.${emoji.extension}`}
                width={30}
                height={30}
                alt={`${emoji.category} | ${emoji.name}`}
              />
            </button>
          ))}
        </div>
      </section>
    );
  }
);

export default Category;
