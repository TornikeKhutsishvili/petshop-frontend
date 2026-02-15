import styles from "../styles/card.module.css";

const Card = () => {
  return (
    <>
      <div className={`${styles.petCard} ${styles.petCardOutOfStock}`}>
        <div className={styles.outOfStockBadge}></div>
        <div className={styles.petCardImage}>
          <img src="" alt="" />
        </div>
        <div className={styles.petCardContent}>
          <h3 className={styles.petCardTitle}></h3>
          <div className={styles.petCardPrice}></div>
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
                <i className="fas fa-heart"></i>
              </button>
              <button type="button" className={styles.cartBtn} title="cart">
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
