import { emojiCategories } from "./data";
import { CategoryName, Emoji, EmojiList } from "./type";

export const emojiImages: EmojiList[] = await Promise.all(
  emojiCategories.map(async (category) => {
    // workersからR2に保存している画像の名前を取得する
    const res = await fetch(
      `https://ms-emoji.yajiuma720.workers.dev/?category=${category.name}`
    );
    const imageNames = await res.json(); // xxx.pngの文字列を要素とする配列を取得

    const emojiListByCategory: Emoji[] = imageNames.map((image: string) => {
      const [name, extension] = image.split(".");
      return {
        url: `https://cdn.emoji.yajium.day/${category.name}/${name}.${extension}`,
        name,
        extension,
        category: category.name,
      };
    });

    // 名前順にソートする
    const sortedCategoryImages = emojiListByCategory
      .slice()
      .sort((a, b) => Number(a.name) - Number(b.name));

    return {
      categoryName: category.name as CategoryName,
      categoryLabel: category.label,
      emojiImages: sortedCategoryImages,
    };
  })
);
