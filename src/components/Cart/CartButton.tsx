import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useAppSelector } from "../../hooks/redux-hooks";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const totalQuantity = useAppSelector(({ cart }) => cart.totalQuantity);

  const toggleCartHandler = () => dispatch(uiActions.toggle());

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
