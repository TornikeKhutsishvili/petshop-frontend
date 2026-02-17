import type React from "react";
import Currency from "../../components/Currency";
import styles from "../../styles/wishlist.module.css";
import {
  clearWishlist,
  wishlistSelector,
} from "../../store/wishlist/wishlist.slice";
import { currencySelector } from "../../store/currency/currency.slice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store";
import WishlistItem from "../../components/WishlistItem";
import { toastSuccess } from "../../layout/Toast";

const Wishlist: React.FC = () => {
  const wishlist = useSelector(wishlistSelector);
  const currency = useSelector(currencySelector);
  const dispatch = useDispatch<AppDispatch>();

  const clearAllHendler = () => {
    dispatch(clearWishlist());
    toastSuccess("Wishlist cleared 🗑️");
  };

  if (wishlist.length === 0) {
    return (
      <>
        <Currency />
        <h2 className={styles.sectionTitle}>Your Wishlist</h2>
        <p>Your wishlist is empty</p>
      </>
    );
  }

  return (
    <>
      <Currency />
      <h2 className={styles.sectionTitle}>Your Wishlist</h2>

      <div className={styles.wishlistContainer}>
        {wishlist.map((item) => (
          <WishlistItem key={item.id} item={item} currency={currency} />
        ))}

        <button
          type="button"
          className={styles.clearAllBtn}
          onClick={() => clearAllHendler()}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Wishlist;
