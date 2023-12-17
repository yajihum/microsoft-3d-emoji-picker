import { useEffect, useState } from 'react';
import { categoryNames } from '../../data';
import { CategoryNameType } from '../../type';
import { Button } from '../atoms/Button/Button';
import {
  AppleIcon,
  BallIcon,
  DogIcon,
  LightBulbIcon,
  PeopleIcon,
  PlanetIcon,
  SmileyFaceIcon,
  SymbolIcon,
} from '../atoms/Svg/SvgIcons';
import { useActiveCategory } from '../emoji/Category/useActiveCategory';
import styles from './NavigationSection.module.css';

type NavIconType = {
  name: CategoryNameType;
  element: JSX.Element;
  isActive: boolean;
};

const iconComponents: Record<CategoryNameType, JSX.Element> = {
  smilieys: <SmileyFaceIcon key="smilieys" />,
  people: <PeopleIcon key="people" />,
  'animals-and-nature': <DogIcon key="animalsAndNatureog" />,
  food: <AppleIcon key="food" />,
  activity: <BallIcon key="activity" />,
  'travel-and-place': <PlanetIcon key="travelAndPlace" />,
  objects: <LightBulbIcon key="objects" />,
  symbols: <SymbolIcon key="symbols" />,
};

const initisalNavIcons: NavIconType[] = categoryNames.map((name, index) => {
  return {
    name: name,
    element: iconComponents[name],
    isActive: index === 0,
  };
});

const getNewNavIcons = (navIcons: NavIconType[], activeCategory: string) => {
  return navIcons.map((icon) => {
    if (icon.name === activeCategory) {
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
};

const handleButtonClick = (categoryName: string) => {
  const sectionElement = document.getElementById(categoryName);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'instant' }); // スムーズスクロール
  }
};

export const NavigationSection = () => {
  const { activeCategory } = useActiveCategory();
  const [navIcons, setNavIcons] = useState<NavIconType[]>(initisalNavIcons);

  useEffect(() => {
    const newNavIcons = getNewNavIcons(navIcons, activeCategory);
    setNavIcons(newNavIcons);
  }, [activeCategory]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.gridContainer}>
        {navIcons.map((icon) => (
          <Button
            type="button"
            onClick={() => {
              setNavIcons((prev) => getNewNavIcons(prev, icon.name));
              handleButtonClick(icon.name);
            }}
            key={icon.element.key}
            className={`${styles.button} ${
              icon.isActive ? styles.activeButton : styles.inactiveButton
            }`}
          >
            {icon.element}
          </Button>
        ))}
      </div>
    </nav>
  );
};
