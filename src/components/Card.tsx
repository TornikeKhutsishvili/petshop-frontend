import { useSelector } from "react-redux";
import type { animalsList } from "../interfaces/animals.interface";
import { currencySelector } from "../store/currency/currency.slice";
import styles from "../styles/card.module.css";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";

interface CardProps {
  animal: animalsList;
}

const Card = ({ animal }: CardProps) => {
  const currency = useSelector(currencySelector);

  const { converted, loading } = useCurrencyConverter(
    animal.price,
    "usd",
    currency,
  );

  return (
    <div
      className={`${styles.petCard} ${
        !animal.inStock ? styles.petCardOutOfStock : ""
      }`}
    >
      {!animal.inStock && (
        <div className={styles.outOfStockBadge}>Out of stock</div>
      )}

      <div className={styles.petCardImage}>
        {animal.image ? (
          <img src={animal.image} alt={animal.name} />
        ) : (
          <img src="/placeholder.png" alt="No image" />
        )}
      </div>

      <div className={styles.petCardContent}>
        <h3 className={styles.petCardTitle}>{animal.name}</h3>

        <div className={styles.petCardPrice}>
          {loading
            ? "..."
            : `${converted.toFixed(2)} ${currency.toUpperCase()}`}
        </div>

        <div className={styles.petCardActions}>
          <button type="button" className={styles.petCardBtn}>
            Details
          </button>

          <div>
            <button
              type="button"
              className={styles.wishlistBtn}
              title="wishlist"
            >
              <i className="fas fa-heart" />
            </button>

            <button type="button" className={styles.cartBtn} title="cart">
              <i className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
