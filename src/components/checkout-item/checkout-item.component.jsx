import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCard, removeItemFromCart } =
    useContext(CartContext);
  const cleareItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCard(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={cleareItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
