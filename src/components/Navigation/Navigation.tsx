import { Link } from "react-router-dom";
import styles from "./navigation.module.css";
import { useState } from "react";

export default function Navigation () {
  const [left, setLeft] = useState(-100);

  return (
    <header className={styles.navigation}>
      <Link to={"/"} className={styles.logotype}>Crypto</Link>
      <div className={styles.navigationButtons}>
        <Link to={"/"} className={styles.button}>Home</Link>
        <Link to={"/pages/market"}  className={styles.button}>Market</Link>
        <Link to={"/pages/chooseus"} className={styles.button}>Choose Us</Link>
        <Link to={"/pages/join"} className={styles.button}>Join</Link>
      </div>  
      <i className={`fa-solid fa-bars-staggered ${styles.adaptiveButton}`} onClick={() => setLeft(0)}></i>

      <div className={styles.adaptiveNavigation} style={{left: `${left}%`}}>
        <i className={`fa-solid fa-xmark ${styles.closeButton}`} onClick={() => setLeft(-100)}></i>
        <Link to={"/"} className={styles.adaptiveNavigationButton}>Home</Link>
        <Link to={"/pages/market"} className={styles.adaptiveNavigationButton}>Market</Link>
        <Link to={"/pages/chooseus"} className={styles.adaptiveNavigationButton}>Choose Us</Link>
        <Link to={"/pages/join"} className={styles.adaptiveNavigationButton}>Join</Link>
      </div>
    </header>
  );
}