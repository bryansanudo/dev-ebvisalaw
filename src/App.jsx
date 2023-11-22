import styles from "./style";
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
} from "./components";

import Navbar2 from "@/components/Navbar_copy";
import Services from "@/components/Services";
import { useState } from "react";

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="">
          <div className="">
            <Navbar2
              isMenuShown={isMenuShown}
              setIsMenuShown={setIsMenuShown}
            />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div
          className={`bg-primary  ${isMenuShown ? "hidden" : ""}  ${
            styles.paddingX
          } ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Services />
            <Clients />
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
