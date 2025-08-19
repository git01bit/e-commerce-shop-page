import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <div className={styles.socialIconsContainer}>
        <span></span>
        <h3>حضور مجازی ما:</h3>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" />
          <FontAwesomeIcon icon="fa-brands fa-youtube" size="lg" />
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" size="lg" />
        </div>
      </div>

      <p className={styles.copyright}>
        این صفحه با هدف تمرین و یادگیری طراحی شده است.
      </p>
    </footer>
  );
}

export default Footer;
