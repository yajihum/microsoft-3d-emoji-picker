import { forwardRef, useEffect, useRef, useState } from "react";
import { Category, EmojiType } from "../../../type";
import { Skeleton } from "../../atoms/Loading";
import { useHandleEmojiClick } from "../EmojiSection/useHandleEmojiClick";
import styles from "./Category.module.css";
import { useActiveCategory } from "./useActiveCategory";
import { useEmojiList } from "./useEmojiList";

type EmojiListByCategoryProps = {
	category: Category;
};

const EmojiListByCategory = ({ category }: EmojiListByCategoryProps) => {
	const { emojiImages } = useEmojiList({ category });
	const { handleEmojiSelect } = useHandleEmojiClick();
	const [loadedStates, setLoadedStates] = useState<{ [key: string]: boolean }>(
		{},
	);
	const handleLoad = (name: string) => {
		setLoadedStates((prev) => ({ ...prev, [name]: true }));
	};

	return (
		<div className={styles.gridContainer}>
			{emojiImages.map((emoji: EmojiType) => (
				<button
					type="button"
					onClick={() => handleEmojiSelect(emoji)}
					key={emoji.name}
					className={styles.button}
				>
					{!loadedStates[emoji.name] && <Skeleton />}
					<img
						src={emoji.url}
						className={styles.image}
						alt={`${emoji.category} | ${emoji.name}`}
						onLoad={() => handleLoad(emoji.name)}
						style={{ display: loadedStates[emoji.name] ? "block" : "none" }}
					/>
				</button>
			))}
		</div>
	);
};

const formatString = (str: string): string => {
	const capitalizedFirst = str.charAt(0).toUpperCase() + str.slice(1);
	return capitalizedFirst.replace(/-/g, " ");
};

type Props = {
	category: Category;
};

export const CategorySection = forwardRef<HTMLDivElement, Props>(
	({ category }, ref) => {
		const { activeCategory, toggleActiveCategory } = useActiveCategory();

		const categoryRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>(
			{},
		);
		const rootElement =
			typeof ref === "object" && ref && ref.current ? ref.current : null;

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (
							entry.isIntersecting &&
							entry.intersectionRatio > 0 &&
							entry.target.id
						) {
							toggleActiveCategory(entry.target.id);
						}
					}
				},
				{
					root: rootElement,
					rootMargin: "0px 0px -100px 0px",
				},
			);

			for (const ref of Object.values(categoryRefs.current)) {
				if (ref) observer.observe(ref);
			}

			return () => {
				for (const ref of Object.values(categoryRefs.current)) {
					if (ref) observer.unobserve(ref);
				}
			};
		}, [toggleActiveCategory, rootElement]);

		return (
			<section
				id={category.name}
				key={category.name}
				className={styles.section}
			>
				<h2
					id={category.name}
					ref={(el) => {
						categoryRefs.current[category.label] = el;
					}}
					className={styles.heading}
				>
					{formatString(category.name)}
				</h2>
				<EmojiListByCategory category={category} />
			</section>
		);
	},
);
