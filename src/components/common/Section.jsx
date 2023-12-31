import React from "react";
import styles from "@/style";
import CTA from "@/components/CTA";
import opencompany from "@/assets/services/opencompany.webp";
import { GoDot } from "react-icons/go";
const Section = ({
  children,
  isMenuShown,
  title,
  subtitle,
  darkMode,
  blue,
}) => {
  return (
    <>
      <div
        className={`dark:bg-accent mt-28  ${isMenuShown ? "hidden" : ""}  ${
          styles.paddingX
        } ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth} `}>
          <div
            className={` ${
              blue ? " blue__gradient" : "sblue__gradient   "
            } md:absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full  bottom-40`}
          />
          <div
            className={` ${
              blue ? " pink__gradient" : "spink__gradient   "
            } absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2
              className={`${styles.heading2} ${
                blue
                  ? "text-primary dark:text-primary "
                  : "  text-secondary dark:text-secondary "
              }  mr-4`}
            >
              {title}
            </h2>
            <div className="w-full md:mt-0 mt-6">
              <p
                className={`${styles.paragraph} text-left max-w-[1000px] mb-2`}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {children}

          <CTA darkMode={darkMode} blue={blue} />
        </div>
      </div>
    </>
  );
};

export default Section;
