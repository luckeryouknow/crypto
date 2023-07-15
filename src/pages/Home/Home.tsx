import bitcoin from "./images/bitcoin.png";
import ethereum from "./images/ethereum.png";
import styles from "./home.module.css";

export default function Home () {
  return (
    <div className={styles.home}>
      <img className={`${styles.cryptoImage} ${styles.left}`} 
          src={bitcoin} 
          alt="home bitcoin" 
      />
      <h1 className={styles.heading}>
        Track and trade
        <br />
        <span className={styles.coloredHeading}>Crypto currencies</span>
      </h1>
      <img className={`${styles.cryptoImage} ${styles.right}`} 
          src={ethereum} 
          alt="home ethereum" 
      />
    </div>
  );
}