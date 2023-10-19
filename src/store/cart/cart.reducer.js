import { CART_ACTOIN_TYPE } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id == productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

const removeCartItem = (cartItems, cartItemToARemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == cartItemToARemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToARemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id == cartItemToARemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const recalcCount = (cartItems) => {
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
};

const recalcTotal = (cartItems) => {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
};

const INITIAL_STATE = {
  isCartOpen: null,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTOIN_TYPE.ADD_CART_ITEMS:
      const withAddedItem = addCartItem(state.cartItems, payload);
      return {
        ...state,
        cartCount: recalcCount(withAddedItem),
        cartTotal: recalcTotal(withAddedItem),
        cartItems: withAddedItem,
      };

    case CART_ACTOIN_TYPE.REMOVE_CART_ITEM:
      const withRemovedItem = removeCartItem(state.cartItems, payload);
      return {
        ...state,
        cartCount: recalcCount(withRemovedItem),
        cartTotal: recalcTotal(withRemovedItem),
        cartItems: withRemovedItem,
      };

    case CART_ACTOIN_TYPE.CLEARE_CART_ITEM:
      const withClearedItem = clearCartItem(state.cartItems, payload);
      return {
        ...state,
        cartCount: recalcCount(withClearedItem),
        cartTotal: recalcTotal(withClearedItem),
        cartItems: withClearedItem,
      };

    case CART_ACTOIN_TYPE.SET_CART_IS_OPEN:
      return { ...state, isCartOpen: payload };

    default:
      return state;
  }
};
