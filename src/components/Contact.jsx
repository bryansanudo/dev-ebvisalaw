import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import text from "@/assets/text.jpg";
import Button from "@/components/Button";
import Section from "@/components/common/Section";

import shield from "@/assets/Shield.svg";
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

const Contact = ({ isMenuShown }) => (
  <Section
    isMenuShown={isMenuShown}
    title="Contact Us"
    subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam facilis modi quis accusantium sequi perferendis esse cupiditate non provident expedita ratione ipsam, odit repudiandae veniam debitis velit, eum mollitia sunt."
  >
    <section
      id="clients"
      className={` ${styles.flexCenter} flex-col relative `}
    >
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}

      {/* <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Contact Us</h2>
        <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4  rounded-[20px] box-shadow   md:gap-10 gap-4  xl:w-[1080px] lg:w-[900px] md:w-[700px] sm:w-[400px] w-full mb-6 ">
        {/* 1 */}
        <div className="flex flex-col feedback-card rounded-[20px] items-center justify-start text-center p-4">
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
          >
            <img src={shield} alt="" />
          </div>
          <p className="mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white">
            Where we are
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            1401 Brickell Avenue Miami, FL 33131
          </p>
        </div>
        {/* 2 */}
        <div className="flex flex-col feedback-card rounded-[20px] items-center justify-start text-center p-4">
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
          >
            <img src={shield} alt="" />
          </div>
          <p className="mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white">
            Attention schedule
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            Monday to Friday 9AM to 5PM EST
          </p>
        </div>
        {/* 3 */}
        <div className="flex flex-col feedback-card rounded-[20px] items-center justify-start text-center p-4">
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
          >
            <img src={shield} alt="" />
          </div>
          <p className="mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white">
            Email
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            info@ebvisalaw.com
          </p>
        </div>
        {/* 4 */}
        <div className="flex flex-col feedback-card rounded-[20px] items-center justify-start text-center p-4 ">
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
          >
            <img src={shield} alt="" />
          </div>
          <p className="mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white">
            Phone
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            +1 xxx xxx xxxx
          </p>
        </div>
      </div>
      <form>
        <div className="flex bg-black-gradient-2 rounded-[20px] box-shadow flex-col md:gap-8 gap-4 md:p-10 p-6 xl:w-[1080px] lg:w-[900px] md:w-[700px] sm:w-[400px] w-full mb-4 ">
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
            <div className="flex flex-col w-full">
              <label className="ml-2  font-poppins font-semibold text-[20px] leading-[32px] text-white">
                Name
              </label>
              <input
                type="text"
                required
                name="Name"
                autoComplete="off"
                className={` input input-bordered  bg-dimWhite text-black font-normal text-[16px] leading-[24px]  w-full`}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="ml-2  font-poppins font-semibold text-[20px] leading-[32px] text-white">
                Last name
              </label>
              <input
                type="text"
                required
                name="Last Name"
                autoComplete="off"
                className={` input input-bordered  bg-dimWhite text-black font-normal text-[16px] leading-[24px]   w-full`}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
            <div className="flex flex-col w-full">
              <label className="ml-2  font-poppins font-semibold text-[20px] leading-[32px] text-white">
                Email
              </label>
              <input
                type="text"
                required
                name="Name"
                autoComplete="off"
                className={` input input-bordered  bg-dimWhite text-black font-normal text-[16px] leading-[24px]  w-full`}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="ml-2  font-poppins font-semibold text-[20px] leading-[32px] text-white">
                Phone
              </label>
              <input
                type="text"
                required
                name="Last Name"
                autoComplete="off"
                className={` input input-bordered  bg-dimWhite text-black font-normal text-[16px] leading-[24px]   w-full`}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="ml-2  font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Message
            </label>
            <textarea
              name="Questions"
              required
              autoComplete="off"
              className={` textarea  bg-dimWhite text-black font-normal text-[16px] leading-[24px]  w-full`}
            />
          </div>

          <button
            className={`btn btn-outline hover:text-black bg-blue-gradient  capitalize lg:w-1/5 w-1/2 md:w-1/3  mx-auto leading-[32px] font-semibold text-[18px] text-primary `}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  </Section>
);

export default Contact;
