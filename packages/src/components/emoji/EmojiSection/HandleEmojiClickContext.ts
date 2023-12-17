import { createContext } from 'react';
import { HandleEmojiClickType } from '../../../type';

type HandleEmojiClickContextType = {
  handleEmojiSelect: HandleEmojiClickType;
};

const defaultHandleEmojiClickContextValue: HandleEmojiClickContextType = {
  handleEmojiSelect: () => {},
};

export const HandleEmojiClickContext =
  createContext<HandleEmojiClickContextType>(
    defaultHandleEmojiClickContextValue
  );
