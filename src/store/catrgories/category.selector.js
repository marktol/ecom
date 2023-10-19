import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCatrgories = createSelector(
  [selectCategoryReducer],
  (categoriesSlise) => categoriesSlise.categories
);

export const selectCategoriesMap = createSelector(
  [selectCatrgories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectorCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlise) => categoriesSlise.isLoading
);
