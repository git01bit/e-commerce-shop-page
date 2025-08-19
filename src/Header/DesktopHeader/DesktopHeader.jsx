import styles from "./DesktopHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DesktopHeader() {
  function handleClick(e) {
    const navbarMenus = document.querySelectorAll("a");

    navbarMenus.forEach((menu) => {
      menu.classList.remove(styles.active);
    });
    console.log(e.currentTarget);

    e.currentTarget.classList.add(styles.active);
  }

  return (
    <header className={styles.logoNavbar}>
      <a className={styles.logo} onClick={(e) => handleClick(e)}>
        <FontAwesomeIcon icon="fa-solid fa-shop" /> فروشگاه
      </a>

      <nav>
        <ul className={styles.navbar}>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              محصولات
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              درباره ما
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              تماس با ما
            </a>
          </li>
          <span></span>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" />
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg" />
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              <FontAwesomeIcon icon="fa-regular fa-circle-user" size="xl" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DesktopHeader;
