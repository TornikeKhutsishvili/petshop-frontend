import styles from "../styles/cardsWrapper.module.css";
import Card from "./Card";
import Currency from "./Currency";

const CardsWrapper = () => {
  return (
    <>
      <Currency />

      <h2 className={styles.sectionTitle}>Our Pets</h2>

      <div className={styles.petGrid}>
        <Card />
      </div>
    </>
  );
};

export default CardsWrapper;
