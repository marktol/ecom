import { getCategoriesAndDociments } from "../../utils/firebase/firebase";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);
};
export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
    categoriesArray
  );
};
export const fetchCategoriesFail = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);
};

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDociments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
};
