import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./join.module.css";
import bitcoin from "./images/bitcoin.png";
import ethereum from "./images/ethereum.png";

export default function Join () {
  return (
    <div className={styles.join}>
      <Navigation />
      <div className={styles.container}>
        <img src={bitcoin} 
         className={`${styles.cryptoImage} ${styles.left}`} 
         style={{marginTop: "250px"}}
         alt="bitcoin"
        />
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>
            Join us via
            <br />
            <span className={styles.coloredHeading}>Discord</span>
          </h1>
          <p className={styles.text}>Invest and manage all your crypto at one place</p>
          <div className={styles.button}>Join via Discord</div>
        </div>
        <img 
         src={ethereum} 
         className={`${styles.cryptoImage} ${styles.right}`}
         style={{marginTop: "250px"}} 
         alt={"ethereum"}
        />
      </div>
      <Footer />
    </div>
  )
}