import React, { useEffect, useRef } from "react";
import { EmojiImage, EmojiImageList } from "../../type";

type Props = {
  emojiImageList: EmojiImageList;
};

// type CategoryRefs = {
//   [key in IconName]: React.RefObject<HTMLButtonElement>;
// };

export const Category = React.forwardRef<HTMLDivElement, Props>(
  ({ emojiImageList }, ref) => {
    //const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    useEffect(() => {
      const rootElement =
        typeof ref === "object" && ref && ref.current ? ref.current : null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            console.log(entry);
            if (entry.isIntersecting && entry.target.id) {
              console.log(entry.intersectionRatio);
              //setActiveCategory(entry.target.id);
              //console.log(activeCategory);
              //console.log(`${entry.target.id}見えた！`);
            }
          },
          {
            root: rootElement,
            threshold: 0.5,
          }
        );
      });

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
        key={emojiImageList.category}
        id={emojiImageList.category}
        ref={(el) => {
          categoryRefs.current[emojiImageList.category] = el;
        }}
        className="grid gap-1"
      >
        <h2 className="text-gray-500 text-sm pl-1 pt-2 pb-1.5 sticky top-0 backdrop-blur transition-colors bg-white/90">
          {emojiImageList.category}
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
