import React from "react";
import styles from "./coinsList.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function CoinsList () {
  const buttonsArray = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(0);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(event.currentTarget.id));
  };

  const previousArrowButtonHandler = () => {
    if (currentPage <= 0) {
      
    } else {
      setCurrentPage(currentPage - 10);
    }
  };

  const nextArrowButtonHandler = () => {
    if (currentPage === 50) {
      
    } else {
      setCurrentPage(currentPage + 10);
    }
  };

  async function getData () {
    const { data } = await axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=${currentPage}&limit=10&currency=USD`,
    );

    return data.coins;
  };

  const { data, isLoading, isError } = useQuery(["coins", currentPage], getData, {keepPreviousData: true});

  const contentHandler = () => {
    if (isLoading) {
      return (
        <i className="fa fa-spinner fa-spin"></i>
      );
    } else if (isError) {
      return (
        <div>Ooops. Something went wrong</div>
      );
    } else {
      return (
        <div>
          {data.map((dataElem: any) => (
            <div className={styles.listElement} key={dataElem.id}>
              <div className={styles.coin}>
                <img src={dataElem.icon}  style={{maxWidth: "64px"}} alt={dataElem.name} />
                <span className={styles.name}>{dataElem.name}</span>
              </div>
              <div>$ {dataElem.price.toFixed(2)}</div>
              <div className={dataElem.priceChange1d >= 0? styles.green: styles.red}>{dataElem.priceChange1d}%</div>
              <div>$ {dataElem.volume.toFixed(2)}</div>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <div>
      <div className={styles.listContainer}>
        <div className={styles.listHeading}>
          <div className={styles.coin}>Coin</div>
          <div>Price</div>
          <div>24h Change</div>
          <div>Market Cap</div>
        </div>
        {contentHandler()}
      </div>
      <div className={styles.buttonsContainer}>
        {buttonsArray.map((button) => (
          <button className={styles.button} id={((button - 1) * 10).toString()} key={button} onClick={buttonHandler}>{button}</button>
        ))}

        <i 
          className={`fa-solid fa-chevron-left ${styles.arrow} ${styles.left}`} 
          onClick={previousArrowButtonHandler}>
        </i>
        <i 
          className={`fa-solid fa-chevron-right ${styles.arrow} ${styles.right}`} 
          onClick={nextArrowButtonHandler}>
        </i>
      </div>
    </div>
  )
}