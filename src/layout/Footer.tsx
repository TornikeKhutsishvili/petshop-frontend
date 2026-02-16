import { NavLink } from "react-router-dom";
import styles from "../styles/footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getLiClass = (isActive: boolean) =>
    isActive
      ? `${styles.footerColumnLiA} ${styles.navLiAactive}`
      : styles.footerColumnLiA;

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <h3>About PetShop</h3>
              <p>
                We're dedicated to connecting loving homes with wonderful pets.
                Our mission is to ensure every pet finds a caring family.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h3>Quick Links</h3>
              <ul className={styles.footerColumnUl}>
                <NavLink to="/" end className={styles.footerColumnLiA}>
                  {({ isActive }) => (
                    <li
                      className={`${styles.footerColumnLi} ${getLiClass(isActive)}`}
                    >
                      Home
                    </li>
                  )}
                </NavLink>

                <NavLink to="/wishlist" className={styles.footerColumnLiA}>
                  {({ isActive }) => (
                    <li
                      className={`${styles.footerColumnLi} ${getLiClass(isActive)}`}
                    >
                      Wishlist
                    </li>
                  )}
                </NavLink>

                <NavLink to="/cart" className={styles.footerColumnLiA}>
                  {({ isActive }) => (
                    <li
                      className={`${styles.footerColumnLi} ${getLiClass(isActive)}`}
                    >
                      Cart
                    </li>
                  )}
                </NavLink>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>Contact Us</h3>
              <p>Email: info@petshop.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Pet Street, Animalville</p>
            </div>
          </div>

          {/* Bottom */}
          <div className={styles.footerBottom}>
            <p className={styles.footerBottomP}>
              © {currentYear} PetShop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
