// PetDetails.tsx
import type React from "react";
import styles from "../styles/pet-details.module.css";
import type { animalsList } from "../interfaces/animals.interface";
import { currencySelector } from "../store/currency/currency.slice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import { addToCart } from "../store/cart/cart.slice";
import {
  addToWishlist,
  wishlistSelector,
} from "../store/wishlist/wishlist.slice";
import Currency from "./Currency";

interface CardProps {
  animal: animalsList;
}

const PetDetails: React.FC<CardProps> = ({ animal }) => {
  const currency = useSelector(currencySelector);
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector(wishlistSelector);

  const isInWishlist = wishlist.some((item) => item.id === animal.id);

  const { converted, loading } = useCurrencyConverter(
    animal.price,
    "usd",
    currency,
  );

  const handleAddToCart = () => {
    if (!animal.inStock) return alert("This item is out of stock!");
    dispatch(addToCart(animal));
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) return;
    dispatch(addToWishlist(animal));
  };

  return (
    <div>
      <Currency />
      <div key={animal.id} className={styles.petDetails}>
        <div className={styles.petImage}>
          <img src={animal.image} alt={animal.name} />
        </div>

        <div className={styles.petInfo}>
          <h1 className={styles.petName}>{animal.name}</h1>
          <p className={styles.petDescription}>
            {animal.description || "No description available."}
          </p>

          <div className={styles.petSpecsItem}>
            <span className={styles.petSpecsLabel}>Age:</span>
            <span>{animal.age || "-"}</span>
          </div>

          <div className={styles.petSpecsItem}>
            <span className={styles.petSpecsLabel}>Status:</span>
            <span>{animal.inStock ? "Available" : "Out of Stock"}</span>
          </div>

          <div className={styles.petDetailPrice}>
            Price:{" "}
            {loading
              ? "..."
              : `${converted.toFixed(0)} ${currency.toUpperCase()}`}
          </div>

          <div className={styles.petActions}>
            <button
              type="button"
              className={`${styles.addWishlistBtn} ${
                isInWishlist
                  ? styles.addWishlistBtnActive
                  : styles.addWishlistBtn
              }`}
              onClick={handleAddToWishlist}
            >
              Add to Wishlist
            </button>
            <button
              type="button"
              className={styles.addCartBtn}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
