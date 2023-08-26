import { createContext } from "react";

type ActiveCategoryContextType = {
  activeCategory: string;
  toggleActiveCategory: (category: string) => void;
};

const defaultContextValue: ActiveCategoryContextType = {
  activeCategory: "smilieys",
  toggleActiveCategory: () => {},
};

export const ActiveCategoryContext =
  createContext<ActiveCategoryContextType>(defaultContextValue);
