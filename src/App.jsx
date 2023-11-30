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
import Practices from "@/components/Practices";
import Advantages from "@/components/Advantages";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

import Home from "@/components/Home";
import OpenCompany from "@/components/services/OpenCompany";
import VisaEb1 from "@/components/services/VisaEb1";
import VisaEb2 from "@/components/services/VisaEb2";
import VisaE2 from "@/components/services/VisaE2";

import { Routes, Route, useNavigate } from "react-router-dom";
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

        <Routes>
          <Route path="/" element={<Home isMenuShown={isMenuShown} />} />
          <Route
            path="/services/open_company"
            element={<OpenCompany isMenuShown={isMenuShown} />}
          />
          <Route
            path="/services/visa_eb1"
            element={<VisaEb1 isMenuShown={isMenuShown} />}
          />
          <Route
            path="/services/visa_eb2"
            element={<VisaEb2 isMenuShown={isMenuShown} />}
          />
          <Route
            path="/services/visa_e2"
            element={<VisaE2 isMenuShown={isMenuShown} />}
          />
        </Routes>

        <div
          className={`bg-primary  ${isMenuShown ? "hidden" : ""}  ${
            styles.paddingX
          } ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
