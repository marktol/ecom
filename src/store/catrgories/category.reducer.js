import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORY_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = CATEGORY_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED:
      return { ...state, isLoading: false, error: payload };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    default:
      return state;
  }
};
