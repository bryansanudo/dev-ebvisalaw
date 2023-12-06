import { quotes } from "../assets";
import { RiDoubleQuotesL } from "react-icons/ri";
import styles from "@/style";

const FeedbackCard = ({ content, name, title, img, darkMode, blue }) => (
  <div
    className={`flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ${
      darkMode
        ? "shadow-sm shadow-white feedback-card  "
        : "shadow-md shadow-black hover:scale-105 duration-500"
    }
`}
  >
    <RiDoubleQuotesL
      className={`text-5xl ${blue ? "text-primary " : " text-secondary "} `}
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] dark:text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className={`${styles.title}`}>{name}</h4>
        <p className={`${styles.subtitle}`}>{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
