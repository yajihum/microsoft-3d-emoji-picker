export type Emoji = {
  url: string;
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

export type EmojiList = {
  categoryName: CategoryName;
  categoryLabel: string;
  emojiImages: Emoji[];
};

export type HandleEmojiClickType = (selectedEmoji: Emoji) => void;
