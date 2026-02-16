import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import styles from "../styles/slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { animalsListSelector } from "../store/animals/animals.slice";
import { useEffect } from "react";
import type { AppDispatch } from "../store";
import { getAnimals } from "../store/animals/animals.thunks";

const Carousel: React.FC = () => {
  const pets = useSelector(animalsListSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  if (!pets.length) return null;

  return (
    <Swiper
      className={styles.slider}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      loop
    >
      {pets.map(({ id, image, name, description }) => (
        <SwiperSlide key={id}>
          <div className={styles.slide}>
            <img className={styles.slideImage} src={image} alt={name} />

            <div className={styles.slideContent}>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
