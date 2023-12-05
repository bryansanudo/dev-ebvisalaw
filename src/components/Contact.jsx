import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import text from "@/assets/text.jpg";
import Button from "@/components/Button";
import Section from "@/components/common/Section";

import shield from "@/assets/Discount.svg";
import { BiMailSend } from "react-icons/bi";

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

const Contact = ({ isMenuShown, darkMode }) => (
  <div
    className={`dark:bg-accent mt-28  ${isMenuShown ? "hidden" : ""}  ${
      styles.paddingX
    } ${styles.flexCenter}`}
  >
    <div className={`${styles.boxWidth} `}>
      <div className="md:absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} text-gradient mr-4`}>Contact Us</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[600px] mb-2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil
            itaque assumenda doloremque! Officiis quo dolorum non illo omnis, at
            consequuntur possimus consectetur sapiente asperiores sed voluptatum
            reiciendis debitis eveniet.
          </p>
        </div>
      </div>

      <section id="clients" className={` ${styles.flexCenter} mb-40 `}>
        <div className="flex md:flex-row flex-col gap-12">
          <form className=" w-full">
            <div
              className={`flex   ${
                darkMode ? "shadow-md shadow-white  " : "shadow-xl shadow-black"
              } rounded-[20px]  flex-col md:gap-8 gap-4 md:p-10 p-6  w-full h-full mb-4 `}
            >
              <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
                <div className="flex flex-col w-full">
                  <label
                    className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    name="Name"
                    autoComplete="off"
                    className={` h-10 rounded-[10px] ${
                      darkMode
                        ? "shadow-sm shadow-white border-white "
                        : " border-black  "
                    }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    name="Last Name"
                    autoComplete="off"
                    className={` h-10 rounded-[10px] ${
                      darkMode
                        ? "shadow-sm shadow-white border-white "
                        : " border-black  "
                    }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
                <div className="flex flex-col w-full">
                  <label
                    className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    required
                    name="Name"
                    autoComplete="off"
                    className={` h-10 rounded-[10px] ${
                      darkMode
                        ? "shadow-sm shadow-white border-white "
                        : " border-black  "
                    }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    required
                    name="Last Name"
                    autoComplete="off"
                    className={` h-10 rounded-[10px] ${
                      darkMode
                        ? "shadow-sm shadow-white border-white "
                        : " border-black  "
                    }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label
                  className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                >
                  Message
                </label>
                <textarea
                  name="Questions"
                  rows="7"
                  required
                  autoComplete="off"
                  className={`  rounded-[10px] ${
                    darkMode
                      ? "shadow-sm shadow-white border-white "
                      : " border-black  "
                  }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 py-2 mt-2`}
                />
              </div>

              <button
                className={`btn btn-primary font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
              >
                Submit
              </button>
            </div>
          </form>

          <div className="grid md:grid-cols-2 grid-cols-1   rounded-[20px]   md:gap-10 gap-4   w-full  ">
            {cards.map(({ id, img, title, subtitle }) => (
              <div
                className={`flex flex-col  px-4 rounded-[20px] items-center justify-center text-center ${
                  darkMode
                    ? "shadow-sm shadow-white border-white "
                    : "shadow-md shadow-black "
                } `}
              >
                <div
                  className={`w-[40px] h-[40px] mb-1 mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
                >
                  <img src={img} className="w-[40px]" alt="" />
                </div>
                <p className={`${styles.title}`}>{title}</p>

                <div className={`${styles.subtitle}`}>{subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Contact;
