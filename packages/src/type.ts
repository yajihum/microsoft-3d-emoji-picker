export type EmojiType = {
  url: string;
  category: string;
  name: string;
  extension: string;
};

export type CategoryNameType =
  | 'smilieys'
  | 'people'
  | 'animals-and-nature'
  | 'food'
  | 'activity'
  | 'travel-and-place'
  | 'objects'
  | 'symbols';

export type Category = {
  name: CategoryNameType;
  label: string;
};

export type EmojiList = Category & {
  emojiImages: EmojiType[];
};

export type HandleEmojiClickType = (selectedEmoji: EmojiType) => void;
