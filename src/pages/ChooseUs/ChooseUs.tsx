import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./chooseUs.module.css";
import chooseImage from "./images/choose.png";
import { chooseUsContentLeft, chooseUsContentRight } from "./chooseUsContent";

export default function ChooseUs () {
  return (
    <div className={styles.chooseUs}>
      <Navigation />
      <div className={styles.container}>
        <h1 className={styles.heading}>Why <span className={styles.coloredHeading}>choose us</span></h1>
        <div className={styles.contentContainer}>
          <div className={styles.cardsContainer}>
            {chooseUsContentLeft.map((chooseUsElement) => (
              <div className={styles.card} key={chooseUsElement.heading}>
                <i className={`${chooseUsElement.image} ${styles.cardImage}`}></i>
                <div>
                  <h4 className={styles.cardHeading}>{chooseUsElement.heading}</h4>
                  <p className={styles.cardText}>{chooseUsElement.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <img src={chooseImage} className={styles.centerImage} alt="choose" />
          </div>
          <div className={styles.cardsContainer}>
            {chooseUsContentRight.map((chooseUsElement) => (
              <div className={styles.card} key={chooseUsElement.heading}>
                <i className={`${chooseUsElement.image} ${styles.cardImage}`}></i>
                <div>
                  <h4 className={styles.cardHeading}>{chooseUsElement.heading}</h4>
                  <p className={styles.cardText}>{chooseUsElement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}