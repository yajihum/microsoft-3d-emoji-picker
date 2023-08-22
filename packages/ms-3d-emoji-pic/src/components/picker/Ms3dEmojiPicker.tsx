import clsx from "clsx";
import React from "react";
import { emojiCategories } from "../../../data";
import { EmojiImage, EmojiImageList } from "../../../type";
import Category from "../emoji/Category";
import NavIcons from "../navigation/NavIcons";

export default async function Ms3D() {
  const images: EmojiImageList[] = await Promise.all(
    emojiCategories.map(async (category) => {
      const res = await fetch(
        `https://ms-emoji.yajiuma720.workers.dev/?category=${category.name}`
      );

      const images = await res.json();
      const categoryImages: EmojiImage[] = images.map((image: string) => {
        const [name, extension] = image.split(".");
        return {
          name,
          extension,
          category: category.name,
        };
      });
      const sortedCategoryImages = categoryImages
        .slice()
        .sort((a, b) => Number(a.name) - Number(b.name));

      return {
        category: category.label,
        emojiImages: sortedCategoryImages,
      };
    })
  );

  const showClass = "block";

  return (
    <div className={clsx("shadow-xl rounded-2xl bg-white", showClass)}>
      <nav className="border-b-2 border-gray-50">
        <NavIcons />
      </nav>
      <section className="pl-4 pb-4">
        <div className="grid grid-rows gap-3 overflow-auto h-96 scrollbar">
          {images.map((categoryList) => (
            <Category
              key={categoryList.category}
              emojiImageList={categoryList}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
