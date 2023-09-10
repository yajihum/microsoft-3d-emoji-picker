import { useContext } from "react";
import { ActiveCategoryContext } from "./ActiveCategoryContext";

export const useActiveCategory = () => {
  return useContext(ActiveCategoryContext);
};
