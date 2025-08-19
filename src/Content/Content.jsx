import styles from "./Content.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./ProductCard/ProductCard";

function Content() {
  return (
    <section className={styles.shopContainer}>
      <h1 className={styles.title}>محصولات</h1>

      <div className={styles.productCardsContainer}>
        <ProductCard
          image="images/img-01.webp"
          name="انگشتر لاو از طلای زرد، اندازه کوچک"
          price={1950000}
          discount={1600000}
        />
        <ProductCard
          image="images/img-02.webp"
          name="انگشتر طلای زرد با الماس"
          price={15000000}
        />
        <ProductCard
          image="images/img-03.webp"
          name="گوشواره‌های حلقه‌ای"
          price={4200000}
          discount={3950000}
        />
        <ProductCard
          image="images/img-04.webp"
          name="دستبند لولایی باریک T1 با الماس‌های پاوه"
          price={22000000}
        />
        <ProductCard
          image="images/img-05.webp"
          name="انگشتر پنج ردیفه از طلا با الماس"
          price={36800000}
          discount={35600000}
        />
        <ProductCard
          image="images/img-06.webp"
          name="گوشواره‌های زنجیری مروارید یارد"
          price={3700000}
          discount={3100000}
        />
        <ProductCard
          image="images/img-07.webp"
          name="گوشواره‌های باریک شانزده سنگی از کلکسیون ژان اشلومبرگر"
          price={23000000}
        />
        <ProductCard
          image="images/img-08.webp"
          name="حلقه واین از پلاتین با زمرد کبود و الماس"
          price={47000000}
        />
        <ProductCard
          image="images/img-09.webp"
          name="گردنبند لین از کلکسیون ژان اشلومبرگر"
          price={17500000}
        />
        <ProductCard
          image="images/img-10.webp"
          name="گردنبند زنجیری میکرز از نقره استرلینگ"
          price={1350000}
        />

        <ProductCard
          image="images/img-11.webp"
          name="دستبند سیمی از طلای زرد با مروارید"
          price={4600000}
        />
        <ProductCard
          image="images/img-12.webp"
          name="حلقه نامزدی مردانه از پلاتین با الماس گرد درخشان"
          price={3350000}
        />
      </div>

      <div className={styles.pagination}>
        <button href="#" className={styles.deactive}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </button>
        <button href="#" className={styles.active}>
          1
        </button>
        <button href="#">2</button>
        <button href="#">3</button>
        <span href="#">...</span>
        <button href="#">4</button>
        <button href="#">5</button>
        <button href="#">6</button>
        <button href="#">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </button>
      </div>
    </section>
  );
}

export default Content;
