import { createContext } from "react";
import { HandleEmojiClickType } from "../type";

type ActiveCategoryContextType = {
  activeCategory: string;
  toggleActiveCategory: (category: string) => void;
};

const defaultContextValue: ActiveCategoryContextType = {
  activeCategory: "smilieys",
  toggleActiveCategory: () => {},
};

export const ActiveCategoryContext =
  createContext<ActiveCategoryContextType>(defaultContextValue);

type HandleEmojiClickContextType = {
  onEmojiSelect: HandleEmojiClickType;
};

const defaultHandleEmojiClickContextValue: HandleEmojiClickContextType = {
  onEmojiSelect: () => {},
};

export const HandleEmojiClickContext =
  createContext<HandleEmojiClickContextType>(
    defaultHandleEmojiClickContextValue
  );
