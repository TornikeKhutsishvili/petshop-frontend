import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cardsWrapper.module.css";
import Card from "./Card";
import Currency from "./Currency";
import { animalsListSelector } from "../store/animals/animals.slice";
import { useEffect } from "react";
import { getAnimals } from "../store/animals/animals.thunks";
import type { AppDispatch } from "../store";

const CardsWrapper: React.FC = () => {
  const animals = useSelector(animalsListSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

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
