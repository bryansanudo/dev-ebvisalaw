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
import Footer2 from "@/components/Footer2";

import Contact from "@/components/Contact";

import Eb1 from "@/components/visas/eb1/Eb1";
import Eb2 from "@/components/visas/eb2/Eb2";
import Eb3 from "@/components/visas/eb3/Eb3";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [blue, setBlue] = useState(true);
  return (
    <div className={darkMode && "dark"}>
      <Navbar
        blue={blue}
        setBlue={setBlue}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuShown={isMenuShown}
        setIsMenuShown={setIsMenuShown}
      />
      <div className="dark:bg-accent w-full overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <Home blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />

          <Route
            path="/contact"
            element={
              <Contact
                blue={blue}
                darkMode={darkMode}
                isMenuShown={isMenuShown}
              />
            }
          />
          <Route
            path="/faq"
            element={
              <Faq blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />

          <Route
            path="/eb1"
            element={
              <Eb1 blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />
          <Route
            path="/eb2"
            element={
              <Eb2 blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />
          <Route
            path="/eb3"
            element={
              <Eb3 blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />
        </Routes>

        <div
          className={`dark:bg-accent  ${isMenuShown ? "hidden" : ""}  ${
            styles.paddingX
          } ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Footer2 blue={blue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
