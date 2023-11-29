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

const OpenCompany = ({ isMenuShown }) => {
  return (
    <>
      <div
        className={`bg-primary  ${isMenuShown ? "hidden" : ""}  ${
          styles.paddingX
        } ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
          <Practices />
          <Services />
          <Advantages />
          <Timeline />
          <Contact />
          <Faq />
          <Clients />
        </div>
      </div>
    </>
  );
};

export default OpenCompany;
