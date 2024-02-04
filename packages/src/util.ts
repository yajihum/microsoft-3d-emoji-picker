import { Category } from "./type";

type Request = Category;

export const fetchEmojiList = async (category: Request): Promise<string[]> => {
	const res = await fetch(
		`https://ms-emoji.yajihum.dev/?category=${category.name}`,
	);
	return await res.json();
};
