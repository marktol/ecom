import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCard } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCard(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
