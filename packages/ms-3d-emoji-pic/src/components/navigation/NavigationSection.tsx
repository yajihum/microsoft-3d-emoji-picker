import clsx from "clsx";
import React from "react";
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

export type IconName =
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

export default function NavigationSection() {
  return (
    <nav className="border-b-2 border-gray-50">
      <div className="grid grid-cols-8 gap-1 justify-items-center pr-5 pl-3 pt-3">
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
    </nav>
  );
}
