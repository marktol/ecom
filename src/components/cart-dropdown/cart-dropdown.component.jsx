import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
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
