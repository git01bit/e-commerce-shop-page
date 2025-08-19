import styles from "./DesktopHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DesktopHeader() {
  function handleClick(e) {
    const navbarMenus = document.querySelectorAll("li");

    navbarMenus.forEach((menu) => {
      menu.classList.remove(styles.active);
    });

    e.currentTarget.classList.add(styles.active);
  }

  return (
    <header className={styles.logoNavbar}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon="fa-solid fa-shop" /> فروشگاه
      </div>

      <nav>
        <ul className={styles.navbar}>
          <li onClick={(e) => handleClick(e)}>
            <a href="#">محصولات</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="#">درباره ما</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="#">تماس با ما</a>
          </li>
          <span></span>
          <li onClick={(e) => handleClick(e)}>
            <a href="#">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" />
            </a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="#">
              <FontAwesomeIcon icon="fa-regular fa-circle-user" size="lg" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DesktopHeader;
