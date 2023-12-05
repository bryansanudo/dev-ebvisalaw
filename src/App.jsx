import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Stats,
  Testimonials,
  Hero,
} from "./components";

import Navbar from "@/components/Navbar";

import Navbar2 from "@/components/Navbar_copy";
import Services from "@/components/Services";
import Practices from "@/components/Practices";
import Advantages from "@/components/Advantages";
import Timeline from "@/components/Timeline";

import Faq from "@/components/Faq";

import Home from "@/components/Home";
import OpenCompany from "@/components/services/OpenCompany";
import VisaEb1 from "@/components/services/VisaEb1";
import VisaEb2 from "@/components/services/VisaEb2";
import VisaE2 from "@/components/services/VisaE2";

import Contact from "@/components/Contact";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode && "dark"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuShown={isMenuShown}
        setIsMenuShown={setIsMenuShown}
      />
      <div className="dark:bg-accent w-full overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} isMenuShown={isMenuShown} />}
          />

          <Route
            path="/contact"
            element={<Contact darkMode={darkMode} isMenuShown={isMenuShown} />}
          />
          <Route path="/faq" element={<Faq isMenuShown={isMenuShown} />} />

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
          className={`dark:bg-accent  ${isMenuShown ? "hidden" : ""}  ${
            styles.paddingX
          } ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <CTA darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
