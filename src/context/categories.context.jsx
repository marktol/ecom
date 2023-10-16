import { createContext, useState, useEffect } from "react";

// import SHOP_DATA from "../shop-data";
import { getCategoriesAndDociments } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDociments();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
