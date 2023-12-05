import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import text from "@/assets/text.jpg";
import Button from "@/components/Button";

import shield from "@/assets/Shield.svg";

const cards = [
  {
    id: 1,
    img: text,
    title: "EB1",
    subtitle:
      "The EB1 Visa is a Green Card based on preferential employment, for individuals with extraordinary abilities.",
  },
  {
    id: 2,
    img: text,
    title: "EB2 NIW",
    subtitle:
      "Talented people well positioned in their profession can apply for a green card without having a job offer.",
  },
  {
    id: 3,
    img: text,
    title: "L1",
    subtitle:
      "A temporary visa for the transfer of executives, managers or specialized employees to work.",
  },
  {
    id: 4,
    img: text,
    title: "E2",
    subtitle:
      "Temporary visa for foreign investors who wish to successfully manage and operate a company in the United States.	",
  },
];

const Practices = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Featured Practice <br className="sm:block hidden" /> Areas
      </h2>
      {/*  <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <div className="grid md:grid-cols-2 grid-cols-1  w-full md:gap-20 gap-6 ">
        {cards.map(({ id, img, title, subtitle }) => (
          <div
            key={id}
            className={`flex  items-center justify-center  gap-4 rounded-[20px] ${
              darkMode
                ? "shadow-sm shadow-white feedback-card  "
                : "shadow-md shadow-black"
            }
`}
          >
            <div className="w-1/2 hidden sm:block  ">
              <img
                src={img}
                alt="star"
                className=" w-[100%]  object-cover  rounded-tl-[20px] rounded-tr-[20px] sm:rounded-bl-[20px] sm:rounded-tr-[0px]"
              />
            </div>

            <div className="sm:w-1/2 p-6 sm:px-3 sm:py-0">
              <p className={`${styles.title} mb-4`}>{title}</p>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
              <div className="flex items-center justify-end pt-4 mr-4">
                <button className=" font-semibold text-[18px] link link-primary">
                  know more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Practices;
