import Currency from "../../components/Currency";
import styles from "../../styles/cart.module.css";

const Cart = () => {
  return (
    <>
      <Currency />

      <h2 className={styles.sectionTitle}>Your Cart</h2>

      {/* Your cart is empty */}

      <div className={styles.cartContainer}>
        <div>
          <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
              <img src="" alt="" />
            </div>
            <div className={styles.cartItemInfo}>
              <h3 className={styles.cartItemName}></h3>
              <p className={styles.cartItemPrice}></p>
            </div>
            <div className={styles.cartItemActions}>
              <button type="button" className={styles.buyBtn}>
                Buy Now
              </button>
              <button type="button" className={styles.removeBtn}>
                Remove
              </button>
            </div>
          </div>
        </div>

        <button type="button" className={styles.clearAllBtn}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default Cart;
