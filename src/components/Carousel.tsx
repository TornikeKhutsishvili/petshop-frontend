import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import styles from "../styles/slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { animalsListSelector } from "../store/animals/animals.slice";

const Carousel = () => {
  const pets = useSelector(animalsListSelector);

  if (!pets.length) return null;

  console.log(pets);

  return (
    <Swiper
      className={styles.slider}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      spaceBetween={20}
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
