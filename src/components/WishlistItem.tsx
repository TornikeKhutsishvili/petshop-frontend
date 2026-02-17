import React from "react";
import styles from "../styles/wishlist.module.css";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import {
  moveToCart,
  removeFromWishlist,
} from "../store/wishlist/wishlist.slice";
import { addToCart } from "../store/cart/cart.slice";
import { toastSuccess } from "../layout/Toast";

interface Props {
  item: {
    id: number;
    name: string;
    image?: string;
    price: number;
    quantity?: number;
  };
  currency: "usd" | "eur" | "gbp" | "jpy" | "gel";
}

const WishlistItem: React.FC<Props> = ({ item, currency }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleMoveToCart = () => {
    dispatch(addToCart(item));
    dispatch(moveToCart(item.id));
    toastSuccess("Moved to cart 🛒");
  };

  const removeHendler = () => {
    dispatch(removeFromWishlist(item.id));
    toastSuccess("Item removed from wishlist ❤️");
  };

  const { converted, loading } = useCurrencyConverter(
    item.price,
    "usd",
    currency,
  );

  return (
    <div className={styles.wishlistItem}>
      <div className={styles.wishlistItemImage}>
        {item.image && <img src={item.image} alt={item.name} />}
      </div>
      <div className={styles.wishlistItemInfo}>
        <h3 className={styles.wishlistItemName}>{item.name}</h3>
        <p className={styles.wishlistItemPrice}>
          {loading
            ? "Loading..."
            : `${converted.toFixed(2)} ${currency.toUpperCase()}`}
        </p>
      </div>
      <div className={styles.wishlistItemActions}>
        <button
          type="button"
          className={styles.moveToCartBtn}
          onClick={() => handleMoveToCart()}
        >
          Move to Cart
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

export default WishlistItem;
