import { useEffect, useState } from "react";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectorCategoriesIsLoading,
} from "../../store/catrgories/category.selector";
import Spinner from "../../components/spinner/spinner.componet";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectorCategoriesIsLoading);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      )}
    </>
  );
};
export default Category;
