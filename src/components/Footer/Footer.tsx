import styles from "./footer.module.css";

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.socialMediaContainer}>
          <i className={`fa-brands fa-twitter ${styles.socialMedia}`}></i>
          <i className={`fa-brands fa-discord ${styles.socialMedia}`}></i>
          <i className={`fa-brands fa-facebook ${styles.socialMedia}`}></i>
          <i className={`fa-brands fa-youtube ${styles.socialMedia}`}></i>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>Privacy</div>
          <div className={styles.text}>Terms of Use</div>
        </div>
      </div>
    </footer>
  )
}