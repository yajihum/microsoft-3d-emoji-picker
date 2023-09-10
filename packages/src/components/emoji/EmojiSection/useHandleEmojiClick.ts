import { useContext } from "react";
import { HandleEmojiClickContext } from "./HandleEmojiClickContext";

export const useHandleEmojiClick = () => {
  return useContext(HandleEmojiClickContext);
};
