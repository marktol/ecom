import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTOIN_TYPE } from "./cart.types";

export const addItemToCard = (productToAdd) => {
  return createAction(CART_ACTOIN_TYPE.ADD_CART_ITEMS, productToAdd);
};

export const removeItemFromCart = (cartItemToARemove) => {
  return createAction(CART_ACTOIN_TYPE.REMOVE_CART_ITEM, cartItemToARemove);
};
export const clearItemFromCart = (cartItemToARemove) => {
  return createAction(CART_ACTOIN_TYPE.CLEARE_CART_ITEM, cartItemToARemove);
};

export const setIsCartOpen = (newValue) => {
  return createAction(CART_ACTOIN_TYPE.SET_CART_IS_OPEN, newValue);
};
