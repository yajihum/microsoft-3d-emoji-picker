import { useEffect, useState } from "react";
import { Category, EmojiType } from "../../../type";
import { fetchEmojiList } from "../../../util";

type Request = {
	category: Category;
};

export const useEmojiList = ({ category }: Request) => {
	const [imageNames, setImageNames] = useState<string[]>([]);

	useEffect(() => {
		const getData = async () => {
			console.log("category", category);
			return await fetchEmojiList(category);
		};
		getData().then((data) => setImageNames(data));
	}, [category]);

	const emojiListByCategory: EmojiType[] = imageNames.map((image: string) => {
		const [name, extension] = image.split(".");
		return {
			url: `https://cdn.emoji.yajihum.dev/${category.name}/${name}.${extension}`,
			name,
			extension,
			category: category.name,
		};
	});

	const sortedEmojiListByCategory = emojiListByCategory
		.slice()
		.sort((a, b) => Number(a.name) - Number(b.name));

	return {
		...category,
		emojiImages: sortedEmojiListByCategory,
	};
};
