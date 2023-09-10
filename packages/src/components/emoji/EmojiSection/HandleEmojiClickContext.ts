import { createContext } from "react";
import { HandleEmojiClickType } from "../../../type";

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
