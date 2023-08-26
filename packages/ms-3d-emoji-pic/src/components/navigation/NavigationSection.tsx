import clsx from "clsx";
import React, { useContext, useEffect, useState } from "react";
import { ActiveCategoryContext } from "../../context";
import { CategoryName } from "../../type";
import { Button } from "../atoms/Button/Button";
import {
  AppleIcon,
  BallIcon,
  DogIcon,
  LightBulbIcon,
  PeopleIcon,
  PlanetIcon,
  SmileyFaceIcon,
  SymbolIcon,
} from "../atoms/Svg/SvgIcons";

export const categoryNames: CategoryName[] = [
  "smilieys",
  "people",
  "animals-and-nature",
  "food",
  "activity",
  "travel-and-place",
  "objects",
  "symbols",
];

type NaviIconType = {
  name: CategoryName;
  element: JSX.Element;
  isActive: boolean;
};

const iconComponents: Record<CategoryName, JSX.Element> = {
  smilieys: <SmileyFaceIcon key="smilieys" />,
  people: <PeopleIcon key="people" />,
  "animals-and-nature": <DogIcon key="animalsAndNatureog" />,
  food: <AppleIcon key="food" />,
  activity: <BallIcon key="activity" />,
  "travel-and-place": <PlanetIcon key="travelAndPlace" />,
  objects: <LightBulbIcon key="objects" />,
  symbols: <SymbolIcon key="symbols" />,
};

const initisalNavIcons: NaviIconType[] = categoryNames.map((name, index) => {
  return {
    name: name,
    element: iconComponents[name],
    isActive: index === 0,
  };
});

export default function NavigationSection() {
  const { activeCategory } = useContext(ActiveCategoryContext);
  // const [translateClass, setActiveCategoryIndex] =
  //   useState<string>("translate-x-t0");
  const [navIcons, setNavIcons] = useState<NaviIconType[]>(initisalNavIcons);

  useEffect(() => {
    const newNavIcons = navIcons.map((icon) => {
      if (icon.name === activeCategory) {
        //setActiveCategoryIndex(`translate-x-[${index * 100}%]`);
        return {
          ...icon,
          isActive: true,
        };
      } else {
        return {
          ...icon,
          isActive: false,
        };
      }
    });
    setNavIcons(newNavIcons);
  }, [activeCategory]);

  return (
    <nav className="border-b-2 border-gray-100">
      <div className="grid grid-cols-8 justify-items-center pr-5 pl-3 py-3">
        {navIcons.map((icon) => (
          <Button
            key={icon.element.key}
            className={clsx(
              "w-7 h-7 fill-current flex justify-center items-center",
              icon.isActive
                ? "text-blue-500 underline underline-offset-2"
                : "text-gray-400"
            )}
          >
            {icon.element}
          </Button>
        ))}
        {/* <div
          className={"h-0.5 w-full border border-blue-500 bg-blue-500"}
        ></div> */}
      </div>
    </nav>
  );
}
