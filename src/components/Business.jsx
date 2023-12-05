import { features } from "../constants";
import styles, { layout } from "../style";

import { FaStar } from "react-icons/fa";

const FeatureCard = ({ icon, title, content, index, darkMode }) => (
  <div
    className={`flex items-center flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } ${
      darkMode
        ? "shadow-sm shadow-white feedback-card  "
        : "shadow-md shadow-black hover:scale-105 duration-500"
    } `}
  >
    <div
      className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-primary`}
    >
      {/*  <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" /> */}
      <FaStar className="text-white text-3xl" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className={`${styles.title}`}>{title}</h4>
      <p className={`${styles.subtitle}`}>{content}</p>
    </div>
  </div>
);

const Business = ({ darkMode }) => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You focus on your practice, we'll
        <br className="sm:block hidden" />
        manage the finances.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of skilled attorneys provides comprehensive legal consultation
        and services. We specialize in areas such as contract law, intellectual
        property, and litigation. Let us guide you through the complexities of
        the legal landscape.
      </p>

      <button className={`${styles.button} `}>Get Started</button>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          {...feature}
          index={index}
          darkMode={darkMode}
        />
      ))}
    </div>
  </section>
);

export default Business;
