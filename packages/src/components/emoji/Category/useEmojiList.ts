import { useSuspenseQuery } from '@tanstack/react-query';
import { Category } from '../../../type';
import { fetchEmojiList } from '../../../util';

type Request = {
  category: Category;
};

export const useEmojiList = ({ category }: Request) => {
  const queryFn = () => fetchEmojiList(category);
  const queryKey = ['emojiList', category.name];

  const { data } = useSuspenseQuery({ queryKey, queryFn });
  return data;
};
