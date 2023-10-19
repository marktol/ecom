import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link className="nav-link" to="/checkout">
        <Button onClick={toggleIsCartOpen}>CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
