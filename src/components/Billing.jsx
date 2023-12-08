import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import test from "@/assets/test.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";
import test5 from "@/assets/test5.png";

const Billing = ({ blue }) => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={test5}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div
        className={`${
          blue ? " blue__gradient" : "sblue__gradient   "
        } absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full  bottom-20`}
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Achieve Your Professional Future with Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Start your journey to success here. Our expertise has facilitated
        hundreds of entrepreneurs and migrants from around the world in legally
        and efficiently establishing their presence in the United States for
        employment-based opportunities.
      </p>

      {/*  <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;
