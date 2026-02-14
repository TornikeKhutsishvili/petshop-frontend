import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
  const getLiClass = (isActive: boolean) =>
    isActive ? `${styles.navLi} ${styles.navLiAactive}` : styles.navLi;

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContainer} ${styles.container}`}>
          <div className={styles.logo}>
            <NavLink to="/" end>
              <a className={styles.logoA}>PetShop</a>
            </NavLink>
          </div>
          <nav>
            <ul className={styles.navUl}>
              <NavLink to="/" end>
                {({ isActive }) => (
                  <li className={`${styles.navLi}, ${getLiClass(isActive)}`}>
                    <a className={styles.navLiA}>Home</a>
                  </li>
                )}
              </NavLink>
              <NavLink to="/wishlist">
                {({ isActive }) => (
                  <li className={`${styles.navLi}, ${getLiClass(isActive)}`}>
                    <a className={styles.navLiA}>
                      Wishlist
                      <span className={styles.count}></span>
                    </a>
                  </li>
                )}
              </NavLink>
              <NavLink to="/cart">
                {({ isActive }) => (
                  <li className={`${styles.navLi}, ${getLiClass(isActive)}`}>
                    <a className={styles.navLiA}>
                      Cart
                      <span className={styles.count}></span>
                    </a>
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
