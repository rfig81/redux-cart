import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({
  product,
}: {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
  };
}) => {
  const { title, description, price } = product;

  const dispatch = useDispatch();

  const addToCartHandler = () => dispatch(cartActions.addItemToCart(product));

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
