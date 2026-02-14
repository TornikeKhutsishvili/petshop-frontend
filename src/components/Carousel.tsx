import styles from "../styles/slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <Swiper className={styles.slider}>
      <div className={styles.sliderContainer}>
        <SwiperSlide>
          <div className={styles.slide}>
            <img className={styles.slideImage} src="..." alt="..." />
            <div className={styles.slideContent}>
              <h2>Rex - Dog</h2>
              <p>Rex is a playful Corgi...</p>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Carousel;
