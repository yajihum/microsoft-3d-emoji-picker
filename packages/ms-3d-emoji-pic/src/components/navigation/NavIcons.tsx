import clsx from "clsx";
import React, { useEffect } from "react";
import { Button } from "../atoms/Button";
import {
  AppleIcon,
  BallIcon,
  DogIcon,
  LightBulbIcon,
  PeopleIcon,
  PlanetIcon,
  SmileyFaceIcon,
  SymbolIcon,
} from "../atoms/SvgIcons";

type IconName =
  | "smile"
  | "people"
  | "dog"
  | "apple"
  | "ball"
  | "planet"
  | "lightBulb"
  | "symbol";

type NaviIconType = {
  element: JSX.Element;
  initialSelected: boolean;
};

const iconComponents: Record<IconName, JSX.Element> = {
  smile: <SmileyFaceIcon key="smile" />,
  people: <PeopleIcon key="people" />,
  dog: <DogIcon key="dog" />,
  apple: <AppleIcon key="apple" />,
  ball: <BallIcon key="ball" />,
  planet: <PlanetIcon key="planet" />,
  lightBulb: <LightBulbIcon key="light-bulb" />,
  symbol: <SymbolIcon key="symbol" />,
};

const iconNames: IconName[] = [
  "smile",
  "people",
  "dog",
  "apple",
  "ball",
  "planet",
  "lightBulb",
  "symbol",
];

const navIcons: NaviIconType[] = iconNames.map((name, index) => {
  return {
    element: iconComponents[name],
    initialSelected: index === 0,
  };
});

// type CategoryRefs = {
//   [key in IconName]: React.RefObject<HTMLButtonElement>;
// };

export default function NavIcons() {
  //const [activeCategory, setActiveCategory] = useState(iconNames[0]);

  // 各カテゴリーのrefを作成
  //   const categoryRefs = useRef(
  //     iconNames.reduce((acc, category) => {
  //       acc[category] = React.createRef();
  //       return acc;
  //     }, {} as CategoryRefs)
  //   );

  useEffect(() => {
    // if (!("IntersectionObserver" in window)) return;
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     console.log(entries);
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         // entry.target.idは監視している要素のidで、ここではカテゴリ名
    //         setActiveCategory(entry.target.id);
    //       }
    //     });
    //   },
    //   {
    //     // ビューポートの50%が見えたときに変更する
    //     threshold: 0.5,
    //   }
    // );
    // // 各カテゴリーを監視する
    // iconNames.forEach((category) => {
    //   const categoryElement = categoryRefs.current[category].current;
    //   if (!categoryElement) return;
    //   observer.observe(categoryElement);
    // });
    // return () => {
    //   iconNames.forEach((category) => {
    //     const categoryElement = categoryRefs.current[category].current;
    //     if (!categoryElement) return;
    //     observer.unobserve(categoryElement);
    //   });
    // };
  }, []);

  return (
    <div className="grid grid-cols-8 gap-1 justify-items-center px-3 pt-3">
      {navIcons.map((icon) => (
        <Button
          key={icon.element.key}
          // ref={categoryRefs.current[icon.element.key as IconName]} refは絵文字の方で使う
          className={clsx(
            "w-7 h-7 fill-current",
            icon.initialSelected
              ? "text-blue-500 underline underline-offset-2"
              : "text-gray-500"
          )}
        >
          {icon.element}
        </Button>
      ))}
      <div className="h-0.5 w-full border border-blue-500 bg-blue-500"></div>
    </div>
  );
}
