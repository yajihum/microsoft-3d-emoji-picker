import React, { useContext, useEffect, useRef } from "react";
import { ActiveCategoryContext } from "../../context";
import { EmojiImage, EmojiImageList } from "../../type";

type Props = {
  emojiImageList: EmojiImageList;
};

export const Category = React.forwardRef<HTMLDivElement, Props>(
  ({ emojiImageList }, ref) => {
    const categoryRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>(
      {}
    );
    const rootElement =
      typeof ref === "object" && ref && ref.current ? ref.current : null;
    const { toggleActiveCategory } = useContext(ActiveCategoryContext);

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
      <section key={emojiImageList.categoryName} className="grid gap-1">
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
);

export default Category;
