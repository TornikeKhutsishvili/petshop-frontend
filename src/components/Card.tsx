import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/card.module.css";
import type React from "react";
import type { animalsList } from "../interfaces/animals.interface";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import { currencySelector } from "../store/currency/currency.slice";
import { useNavigate } from "react-router-dom";
import { addToCart, cartSelector } from "../store/cart/cart.slice";
import {
  addToWishlist,
  wishlistSelector,
} from "../store/wishlist/wishlist.slice";
import type { AppDispatch } from "../store";
import { toastError, toastSuccess } from "../layout/Toast";

interface CardProps {
  animal: animalsList;
}

const Card: React.FC<CardProps> = ({ animal }) => {
  const currency = useSelector(currencySelector);
  const { id, image, name, inStock } = animal;
  // const { price } = animal;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector(wishlistSelector);
  const cart = useSelector(cartSelector);

  const isInWishlist = wishlist.some((item) => item.id === animal.id);
  const isInCart = cart.some((item) => item.id === animal.id);

  const { converted, loading } = useCurrencyConverter(
    animal.price,
    "usd",
    currency,
  );

  const handleAddToCart = () => {
    if (!inStock) return toastError("This item is out of stock");
    dispatch(addToCart(animal));
    toastSuccess("Added to cart 🛒");
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) return;
    dispatch(addToWishlist(animal));
    toastSuccess("Added to wishlist ❤️");
  };

  return (
    <>
      <div className={styles.petCard} key={id}>
        <div className={styles.outOfStockBadge}>{inStock}</div>

        <div className={styles.petCardImage}>
          <img src={image} alt={name} />
        </div>

        <div className={styles.petCardContent}>
          <h3 className={styles.petCardTitle}>{name}</h3>

          <div className={styles.petCardPrice}>
            {loading
              ? "..."
              : `${converted.toFixed(0)} ${currency.toUpperCase()}`}
          </div>

          <div className={styles.petCardActions}>
            <button
              type="button"
              className={styles.petCardBtn}
              onClick={() => navigate(`/pet-details/${id}`)}
            >
              Details
            </button>
            <div>
              <button
                type="button"
                className={`${styles.wishlistBtn} ${
                  isInWishlist ? styles.wishlistBtnActive : styles.wishlistBtn
                }`}
                title="wishlist"
                onClick={handleAddToWishlist}
              >
                <i className="fas fa-heart"></i>
              </button>
              <button
                type="button"
                className={`${styles.cartBtn} ${
                  isInCart ? styles.cartBtnActive : styles.cartBtn
                }`}
                title="cart"
                onClick={handleAddToCart}
              >
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
