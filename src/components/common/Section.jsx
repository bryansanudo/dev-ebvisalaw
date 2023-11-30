import React from "react";
import styles from "@/style";

const Section = ({ children, isMenuShown }) => {
  return (
    <>
      <div
        className={`bg-primary mt-40  ${isMenuShown ? "hidden" : ""}  ${
          styles.paddingX
        } ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth} `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
          <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={`${styles.heading2} text-gradient mr-4`}>
              Open a Company
            </h2>
            <div className="w-full md:mt-0 mt-6">
              <p className={`${styles.paragraph} text-left max-w-[450px] mb-2`}>
                What are the benefits of migrating or expanding your company to
                one of the most attractive markets on the continent. We open
                your company in the USA.
              </p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default Section;
