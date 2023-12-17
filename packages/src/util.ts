import { Category, EmojiList, EmojiType } from './type';

type Request = Category;

export const fetchEmojiList = async (category: Request): Promise<EmojiList> => {
  const res = await fetch(
    `https://ms-emoji.yajiuma720.workers.dev/?category=${category.name}`
  );
  const imageNames: string[] = await res.json(); // xxx.pngの文字列を要素とする配列を取得

  const emojiListByCategory: EmojiType[] = imageNames.map((image: string) => {
    const [name, extension] = image.split('.');
    return {
      url: `https://cdn.emoji.yajium.day/${category.name}/${name}.${extension}`,
      name,
      extension,
      category: category.name,
    };
  });

  const sortedEmojiListByCategory = emojiListByCategory
    .slice()
    .sort((a, b) => Number(a.name) - Number(b.name));

  return {
    ...category,
    emojiImages: sortedEmojiListByCategory,
  };
};
