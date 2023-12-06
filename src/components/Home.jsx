import React from "react";
import styles from "@/style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "@/components";
import Section from "@/components/common/Section";

import Navbar2 from "@/components/Navbar_copy";
import Services from "@/components/Services";
import Practices from "@/components/Practices";
import Advantages from "@/components/Advantages";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

const Home = ({ blue, isMenuShown, darkMode }) => {
  return (
    <>
      <div className={`dark:bg-accent mt-24 ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero blue={blue} darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${isMenuShown ? "hidden" : ""}  ${
          styles.paddingX
        } ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats blue={blue} />
          <Business blue={blue} darkMode={darkMode} />

          <Billing blue={blue} />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          <CardDeal blue={blue} />
          <Testimonials blue={blue} darkMode={darkMode} />
          <Practices darkMode={darkMode} blue={blue} />
          <Services darkMode={darkMode} blue={blue} />
          <Advantages darkMode={darkMode} blue={blue} />
          <Timeline darkMode={darkMode} blue={blue} />
          <Clients blue={blue} />
          <CTA darkMode={darkMode} blue={blue} />
        </div>
      </div>
    </>
  );
};

export default Home;
