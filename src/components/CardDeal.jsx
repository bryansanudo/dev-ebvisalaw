import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import test from "@/assets/test.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";
import test5 from "@/assets/test5.png";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Who will help You <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        Founding partner of EB Visa Law, which manages the corporate immigration
        law firm. He brings significant immigration law experience to the firm,
        allowing him to create unique approaches to achieve our clients'
        objectives.
      </p>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        He has unique experience representing internationally recognized
        individuals seeking legal permanent residence in the United States and
        seeking the EB-1 visa intended for those with extraordinary abilities in
        science, arts, education, business or athletics.
      </p>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        Joaquin knows and understands the ups and downs of this process, having
        himself emigrated to the US from Panama, and therefore knows social
        diversity and its characteristics, which gives him the ability to relate
        to and understand clients' concerns, expectations and difficulties.
        during your immigration process.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={test3}
        alt="billing"
        className="h-[600px] w-[600px] object-contain"
      />
    </div>
  </section>
);

export default CardDeal;
