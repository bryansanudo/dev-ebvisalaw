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

import Navbar2 from "@/components/Navbar_copy";
import Services from "@/components/Services";
import Practices from "@/components/Practices";
import Advantages from "@/components/Advantages";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

const Home = ({ isMenuShown, darkMode }) => {
  return (
    <>
      <div className={`dark:bg-accent mt-24 ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${isMenuShown ? "hidden" : ""}  ${
          styles.paddingX
        } ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business darkMode={darkMode} />
          <Billing />
          <CardDeal />
          <Testimonials darkMode={darkMode} />
          <Practices darkMode={darkMode} />
          <Services darkMode={darkMode} />
          <Advantages darkMode={darkMode} />
          <Timeline darkMode={darkMode} />

          <Clients />
        </div>
      </div>
    </>
  );
};

export default Home;
