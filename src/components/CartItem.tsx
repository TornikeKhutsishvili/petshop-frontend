import type React from "react";
import styles from "../styles/cart.module.css";
import { useDispatch } from "react-redux";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import type { AppDispatch } from "../store";
import { removeFromCart } from "../store/cart/cart.slice";
import { useNavigate } from "react-router-dom";
import { incrementQuantity, decrementQuantity } from "../store/cart/cart.slice";
import { toastSuccess } from "../layout/Toast";

interface Props {
  item: {
    id: number;
    name: string;
    image?: string;
    price: number;
    quantity: number;
  };
  currency: "usd" | "eur" | "gbp" | "jpy" | "gel";
}

const CartItem: React.FC<Props> = ({ item, currency }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const buyHendler = () => {
    navigate("/purchase");
    dispatch(removeFromCart(item.id));
    toastSuccess("Purchase completed successfully!");
  };

  const removeHendler = () => {
    dispatch(removeFromCart(item.id));
    toastSuccess("Item removed from cart 🗑️");
  };

  const totalPrice = item.price * item.quantity;

  const { converted, loading } = useCurrencyConverter(
    totalPrice,
    "usd",
    currency,
  );

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        {item.image && <img src={item.image} alt={item.name} />}
      </div>

      <div className={styles.cartItemInfo}>
        <h3>{item.name}</h3>

        <p className={styles.cartItemPrice}>
          {loading
            ? "Loading..."
            : `${converted.toFixed(0)} ${currency.toUpperCase()}`}
        </p>
      </div>

      <div className={styles.quantityControls}>
        <button
          type="button"
          onClick={() => dispatch(decrementQuantity(item.id))}
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          type="button"
          onClick={() => dispatch(incrementQuantity(item.id))}
        >
          +
        </button>
      </div>

      <div className={styles.cartItemActions}>
        <button
          type="button"
          className={styles.buyBtn}
          onClick={() => buyHendler()}
        >
          Buy Now
        </button>

        <button
          type="button"
          className={styles.removeBtn}
          onClick={() => removeHendler()}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
