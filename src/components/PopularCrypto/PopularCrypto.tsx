import styles from "./popularCrypto.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function PopularCrypto () {
  async function getData () {
    const { data } = await axios.get(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=4&currency=USD",
    );

    return data.coins;
  };

  const { data, isLoading, isError } = useQuery(["coins"], getData);
  console.log(data);

  const contentHandler = () => {
    if (isLoading) {
      return (
        <i className="fa fa-spinner fa-spin"></i>
      );
    } else if (isError) {
      return (
        <div>Ooops. Something went wrong</div>
      )
    } else {
      return (
        <div className={styles.container}>
          {data.map((dataElem: any) => (
            <div key={dataElem.name} className={styles.coinCard}>
              <img src={dataElem.icon} className={styles.image} alt={dataElem.name}  />
              <p>
                {dataElem.name}
                &nbsp;
                <span 
                 className={dataElem.priceChange1d >= 0? styles.green: styles.red}> 
                 {dataElem.priceChange1d}%
                </span>
              </p>
              <p className={styles.price}>$ {dataElem.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <div className={styles.popularCrypto}>
      {contentHandler()}
    </div>
  )
}