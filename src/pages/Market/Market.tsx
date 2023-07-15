import CoinsList from "../../components/CoinsList/CoinsList";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./market.module.css";

export default function Market () {
  return (
    <div className={styles.market}>
      <Navigation />
      <div className={styles.container}>
        <h1 className={styles.heading}>Market Update</h1>

        <CoinsList />
      </div>
      <Footer />
    </div>
  );
}