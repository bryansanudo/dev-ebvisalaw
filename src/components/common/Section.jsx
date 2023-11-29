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
          {children}
        </div>
      </div>
    </>
  );
};

export default Section;
