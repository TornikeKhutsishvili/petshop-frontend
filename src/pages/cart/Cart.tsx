import type React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Currency from "../../components/Currency";
import CartItem from "../../components/CartItem";
import { cartSelector, clearCart } from "../../store/cart/cart.slice";
import { currencySelector } from "../../store/currency/currency.slice";
import styles from "../../styles/cart.module.css";
import type { AppDispatch } from "../../store";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cart = useSelector(cartSelector);
  const currency = useSelector(currencySelector);
  const dispatch = useDispatch<AppDispatch>();

  const buyAllHendler = () => {
    navigate("/purchase");
    dispatch(clearCart());
  };

  if (cart.length === 0) {
    return (
      <>
        <Currency />
        <h2 className={styles.sectionTitle}>Your Cart</h2>
        <p>Your cart is empty 🛒</p>
      </>
    );
  }

  return (
    <>
      <Currency />
      <h2 className={styles.sectionTitle}>Your Cart</h2>

      <div className={styles.cartContainer}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} currency={currency} />
        ))}

        <button type="button" className={styles.buyBtn} onClick={buyAllHendler}>
          Buy All
        </button>

        <button
          type="button"
          className={styles.clearAllBtn}
          onClick={() => dispatch(clearCart())}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Cart;
