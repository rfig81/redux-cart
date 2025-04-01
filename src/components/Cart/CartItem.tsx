import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = ({
  item,
}: {
  item: {
    id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    totalPrice: number;
  };
}) => {
  const { id, title, price, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(cartActions.addItemToCart(item));
  const removeItemHandler = () => dispatch(cartActions.removeItemFromCart(id));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
