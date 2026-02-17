import type React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";
import { useSelector } from "react-redux";
import { wishlistSelector } from "../store/wishlist/wishlist.slice";
import { cartSelector } from "../store/cart/cart.slice";

const Header: React.FC = () => {
  const getLiClass = (isActive: boolean) =>
    isActive ? `${styles.navLi} ${styles.navLiAactive}` : styles.navLi;

  const wishlistCount = useSelector(wishlistSelector);
  const cartCount = useSelector(cartSelector);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContainer} ${styles.container}`}>
          <div className={styles.logo}>
            <NavLink to="/" className={styles.logoA}>
              PetShop
            </NavLink>
          </div>
          <nav>
            <ul className={styles.navUl}>
              <NavLink to="/" end className={styles.navLiA}>
                {({ isActive }) => (
                  <li className={`${styles.navLi} ${getLiClass(isActive)}`}>
                    Home
                  </li>
                )}
              </NavLink>
              <NavLink to="/wishlist" className={styles.navLiA}>
                {({ isActive }) => (
                  <li className={`${styles.navLi} ${getLiClass(isActive)}`}>
                    Wishlist
                    <span className={styles.count}>
                      {wishlistCount.length > 0 ? (
                        wishlistCount.length
                      ) : (
                        <span></span>
                      )}
                    </span>
                  </li>
                )}
              </NavLink>
              <NavLink to="/cart" className={styles.navLiA}>
                {({ isActive }) => (
                  <li className={`${styles.navLi} ${getLiClass(isActive)}`}>
                    Cart
                    <span className={styles.count}>
                      {cartCount.length > 0 ? cartCount.length : <span></span>}
                    </span>
                  </li>
                )}
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
