import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import text from "@/assets/text.jpg";
import Button from "@/components/Button";

import shield from "@/assets/Shield.svg";
import { FaStar } from "react-icons/fa";

const cards = [
  {
    id: 1,
    img: shield,
    title: "Experts",
    subtitle:
      "We have the experience and the method to legalize your immigration status as soon as possible.",
  },
  {
    id: 2,
    img: shield,
    title: "Agile",
    subtitle:
      "We design an efficient, easy and understandable process for you.",
  },
  {
    id: 3,
    img: shield,
    title: "Custom",
    subtitle:
      "Each case is different, each family, company, and individual needs an ear that understands their particular need and develops it.",
  },
  {
    id: 4,
    img: shield,
    title: "Comprehensive monitoring",
    subtitle:
      "We offer complete and detailed monitoring of the process, from the preparation of the form to its arrival, to ensure that everything is successful.	",
  },
  {
    id: 5,
    img: shield,
    title: "Integral Solution",
    subtitle:
      "In addition to the immigration process, we offer consulting with specialized financial advisors.",
  },
  {
    id: 6,
    img: shield,
    title: "Save of time and money",
    subtitle:
      "We help you save time and money with a service that avoids errors that can cause delays and even denial of visas.",
  },
];

const Advantages = ({ darkMode, blue }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={`${
        blue ? " blue__gradient" : "sblue__gradient   "
      } absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Advantages</h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-6 ">
        {cards.map(({ id, img, title, subtitle }) => (
          <div
            key={id}
            className={`flex flex-col  items-start justify-center  md:gap-6 ${
              darkMode
                ? "shadow-sm shadow-white feedback-card "
                : "shadow-md shadow-black hover:scale-105 duration-500"
            }
rounded-[20px]  p-8 `}
          >
            <div
              className={`w-[64px] h-[64px] mask mask-hexagon ${
                styles.flexCenter
              } ${blue ? "bg-primary " : "  bg-secondary "}`}
            >
              <FaStar className="text-white text-3xl" />
            </div>

            <div className=" p-6 sm:px-3 sm:py-0">
              <p className={`${styles.title}`}>{title}</p>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
