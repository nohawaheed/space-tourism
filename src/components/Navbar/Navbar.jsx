import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeBtn from "../../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { screenWidth, pathname } = props;
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  if (navbarOpen && screenWidth >= 768) {
    setNavbarOpen(false);
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <img
        src={hamburger}
        alt="hamburger"
        className={styles.hamburger}
        onClick={() => setNavbarOpen(!navbarOpen)}
      />
      <div
        className={
          navbarOpen
            ? `${styles.show_side_nav} ${styles.nav} bellefair-nav-menu-text`
            : `${styles.hide_nav} ${styles.nav}  bellefair-nav-menu-text`
        }
      >
        <img
          src={closeBtn}
          alt="closeBtn"
          className={styles.close_btn}
          onClick={() => setNavbarOpen(false)}
        />
        <ul className={styles.menu_links}>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link to="/" onClick={() => setNavbarOpen(false)}>
              <span>00</span> Home
            </Link>
          </li>
          <li className={pathname === "/destination" ? styles.active : ""}>
            <Link to="destination" onClick={() => setNavbarOpen(false)}>
              <span>01</span> Destination
            </Link>
          </li>
          <li className={pathname === "/crew" ? styles.active : ""}>
            <Link to="crew" onClick={() => setNavbarOpen(false)}>
              <span>02</span> Crew
            </Link>
          </li>
          <li className={pathname === "/technology" ? styles.active : ""}>
            <Link to="technology" onClick={() => setNavbarOpen(false)}>
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
