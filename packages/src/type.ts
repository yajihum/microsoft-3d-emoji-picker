export type EmojiType = {
  url: string;
  category: string;
  name: string;
  extension: "png";
};

export type CategoryNameType =
  | "smilieys"
  | "people"
  | "animals-and-nature"
  | "food"
  | "activity"
  | "travel-and-place"
  | "objects"
  | "symbols";

export type EmojiList = {
  categoryName: CategoryNameType;
  categoryLabel: string;
  emojiImages: EmojiType[];
};

export type HandleEmojiClickType = (selectedEmoji: EmojiType) => void;
