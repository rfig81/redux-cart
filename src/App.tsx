import { useAppSelector, useAppDispatch } from "./hooks/redux-hooks";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitialMount = true;

function App() {
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  const notification = useAppSelector((state) => state.ui.notification);
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialMount) {
      isInitialMount = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification notification={notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
