import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import text from "@/assets/text.jpg";
import Button from "@/components/Button";

import shield from "@/assets/Shield.svg";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    img: text,
    title: "EB-1 Visa",
    subtitle:
      "Designed for those with extraordinary abilities, outstanding professors, researchers, and certain executives or managers, the EB-1 Visa is a preferred option that doesn't require labor certification. ",
    link: "/eb1",
  },
  {
    id: 2,
    img: text,
    title: "EB-2 Visa",
    subtitle:
      "Split into subcategories, EB-3 covers skilled workers (EB-3A), professionals (EB-3B), and unskilled workers (EB-3C). This visa accommodates diverse skill levels, providing pathways for individuals with varying qualifications seeking employment-based immigration.",
    link: "/eb2",
  },
  {
    id: 3,
    img: text,
    title: "EB-3 Visa",
    subtitle:
      "The EB-3 visa is designed to address the diverse needs of the U.S. labor market by providing avenues for skilled workers, professionals, and other workers.",
    link: "/eb3",
  },
];

const Practices = ({ darkMode, blue }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={` ${
        blue ? " blue__gradient" : "sblue__gradient   "
      } absolute z-[0] w-[30%] h-[70%] -right-[50%] rounded-full  bottom-0`}
    />

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
      <div className="grid grid-cols-1  w-full md:gap-20 gap-6 ">
        {cards.map(({ id, img, title, subtitle, link }) => (
          <div
            key={id}
            className={`flex   items-center   gap-4 rounded-[20px] ${
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
                className=" w-[100%] h-[200px]  object-contain  rounded-tl-[20px] rounded-tr-[20px] sm:rounded-bl-[20px] sm:rounded-tr-[0px]"
              />
            </div>

            <div className="sm:w-1/2 p-6 sm:px-3 sm:py-0">
              <p className={`${styles.title} mb-4`}>{title}</p>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
              <div className="flex items-center justify-end pt-4 mr-4">
                <button
                  className={`font-semibold text-[18px] link  ${
                    blue ? "link-primary" : "link-secondary "
                  }`}
                >
                  <Link to={link}>know more</Link>
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
