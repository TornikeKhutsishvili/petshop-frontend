import { useSelector } from "react-redux";
import styles from "../styles/cardsWrapper.module.css";
import Card from "./Card";
import Currency from "./Currency";
import { animalsListSelector } from "../store/animals/animals.slice";

const CardsWrapper = () => {
  const animals = useSelector(animalsListSelector);

  return (
    <>
      <Currency />

      <h2 className={styles.sectionTitle}>Our Pets</h2>

      <div className={styles.petGrid}>
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
};

export default CardsWrapper;
