import React from "react";
import styles from "../../styles/purchase.module.css";

const Purchase: React.FC = () => {
  return (
    <div className={styles.purchaseContainer}>
      <div className={styles.purchaseContext}>
        <p className={styles.purchaseText}>
          <i className="fa-solid fa-star"></i> Your Order is successfully
        </p>
      </div>
    </div>
  );
};

export default Purchase;
