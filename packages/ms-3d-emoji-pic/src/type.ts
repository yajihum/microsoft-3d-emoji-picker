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

export type CategoryName =
  | "smilieys"
  | "people"
  | "animals-and-nature"
  | "food"
  | "activity"
  | "travel-and-place"
  | "objects"
  | "symbols";

export type EmojiImageList = {
  categoryName: CategoryName;
  categoryLabel: string;
  emojiImages: EmojiImage[];
};
