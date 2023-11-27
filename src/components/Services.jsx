import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import test from "@/assets/test.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";
import test5 from "@/assets/test5.png";
import shield from "@/assets/Shield.svg";

const cards = [
  {
    id: 1,
    logo: shield,
    title: "How to invest in the USA?",
  },
  {
    id: 2,
    logo: shield,
    title: "Family Petitions and Citizenship",
  },
  {
    id: 3,
    logo: shield,
    title: "Special Visas for Everyone",
  },
  {
    id: 4,
    logo: shield,
    title: "Visas for Entrepreneurs",
  },
];

const Services = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our services <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At EB Visa Law, we make the dream of immigrating to the United States
        come true completely and safely. Our specialization covers everything
        from family applications to special or business visas, ensuring security
        throughout the process. With our experience and personalized attention,
        we can help you reach new horizons in the United States.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <div className="grid grid-cols-2 w-full gap-6 ">
        {cards.map(({ id, logo, title }) => (
          <div
            key={id}
            className=" p-6 flex flex-col gap-6  rounded-xl feedback-card box-shadow "
          >
            <div
              className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
            >
              <img
                src={logo}
                alt="star"
                className="w-[50%] h-[50%] object-contain"
              />
            </div>
            <p className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
