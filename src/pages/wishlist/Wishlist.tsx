import Currency from "../../components/Currency";
import styles from "../../styles/wishlist.module.css";

const Wishlist = () => {
  return (
    <>
      <Currency />

      <h2 className={styles.sectionTitle}>Your Wishlist</h2>

      {/* Your wishlist is empty */}

      <div className={styles.wishlistContainer}>
        <div>
          <div className={styles.wishlistItem}>
            <div className={styles.wishlistItemImage}>
              <img src="" alt="" />
            </div>
            <div className={styles.wishlistItemInfo}>
              <h3 className={styles.wishlistItemName}></h3>
              <p className={styles.wishlistItemPrice}></p>
            </div>
            <div className={styles.wishlistItemActions}>
              <span></span>
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

export default Wishlist;
