import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductCard({ image, name, price, discount = null }) {
  let priceDisplay;
  let offerBadge = null;

  if (discount) {
    priceDisplay = (
      <>
        <span className={styles.originalPrice}>
          {price.toLocaleString()} تومان
        </span>
        <span className={styles.discountPrice}>
          {discount.toLocaleString()} تومان
        </span>
      </>
    );
  } else {
    priceDisplay = (
      <span className={styles.price}>{price.toLocaleString()} تومان</span>
    );
  }

  if (discount) {
    offerBadge = <span className={styles.discountBadge}>تخفیف طلایی</span>;
  }

  return (
    <article className={styles.productCard}>
      <a href="#">
        {offerBadge}
        <img src={image} alt={name} />
        <div className={styles.productNameAndPrice}>
          <h2>{name}</h2>
          <div>{priceDisplay}</div>
        </div>
      </a>

      <a href="#" className={styles.addToCartBtn}>
        افزودن به سبد خرید <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      </a>
    </article>
  );
}

export default ProductCard;
