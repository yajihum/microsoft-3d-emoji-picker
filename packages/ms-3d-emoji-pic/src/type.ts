export type Emoji = {
  aliases: string[];
  emotions: string[];
  id: string;
  keywords: string[];
  name: string;
  native: string;
  shortcodes: string;
  unifies: string;
};

export type EmojiImage = {
  category: string;
  name: string;
  extension: "png";
};

export type EmojiImageList = {
  category: string;
  emojiImages: EmojiImage[];
};
