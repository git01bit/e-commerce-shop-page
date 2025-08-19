import styles from "./MobileHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileHeader() {
  function handClick(e) {
    const navbarMenus = document.querySelectorAll("a");
    console.log(navbarMenus);

    navbarMenus.forEach((menu) => {
      menu.classList.remove(styles.active);
    });

    e.currentTarget.classList.add(styles.active);
  }

  function openMenu() {
    const navbarMenuContainer = document.getElementById("navbar-container");

    navbarMenuContainer.classList.add(styles.navbarAnimation);
    navbarMenuContainer.style.left = "0";

    setTimeout(() => {
      navbarMenuContainer.classList.remove(styles.navbarAnimation);
    }, "300ms");
  }

  function closeMenu() {
    const navbarMenuContainer = document.getElementById("navbar-container");

    navbarMenuContainer.classList.add(styles.navbarAnimation);
    navbarMenuContainer.style.left = "-100%";

    setTimeout(() => {
      navbarMenuContainer.classList.remove(styles.navbarAnimation);
    }, "300ms");
  }

  return (
    <header>
      <div>
        <div className={styles.logoHamburgerIcon}>
          <a href="#" className={styles.logo} onClick={(e) => handClick(e)}>
            <FontAwesomeIcon icon="fa-solid fa-shop" /> فروشگاه
          </a>

          <span onClick={openMenu}>
            <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
          </span>
        </div>

        <nav className={styles.navbarContainer} id="navbar-container">
          <ul className={styles.navbar}>
            <span className={styles.hamburgerCloseBtn} onClick={closeMenu}>
              <FontAwesomeIcon icon="fa-solid fa-xmark" size="lg" />
            </span>
            <li>
              <a href="#" onClick={(e) => handClick(e)}>
                محصولات
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handClick(e)}>
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handClick(e)}>
                تماس با ما
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.searchAccountBtns}>
        <form action="" method="get" className={styles.search}>
          <input type="text" name="s" placeholder="جستجو ..." />
          <button type="submit">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </form>

        <a href="#" className={styles.accountBtn} onClick={(e) => handClick(e)}>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="xl" />
        </a>

        <a href="#" className={styles.accountBtn} onClick={(e) => handClick(e)}>
          <FontAwesomeIcon icon="fa-regular fa-circle-user" size="xl" />
        </a>
      </div>
    </header>
  );
}

export default MobileHeader;
