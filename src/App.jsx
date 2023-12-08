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
import { FaArrowUp } from "react-icons/fa";

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
import Eb1a from "@/components/visas/eb1/eb1a/Eb1a";
import Eb1b from "@/components/visas/eb1/eb1b/Eb1b";
import Eb1c from "@/components/visas/eb1/eb1c/Eb1c";
import Eb2 from "@/components/visas/eb2/Eb2";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [blue, setBlue] = useState(false);
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
            path="/eb1a"
            element={
              <Eb1a blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />
          <Route
            path="/eb1b"
            element={
              <Eb1b blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />
          <Route
            path="/eb1c"
            element={
              <Eb1c blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />
          <Route
            path="/eb2"
            element={
              <Eb2 blue={blue} darkMode={darkMode} isMenuShown={isMenuShown} />
            }
          />
        </Routes>

        <div
          className={`dark:bg-accent  ${isMenuShown ? "hidden" : ""}  ${
            styles.paddingX
          } ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Footer2 darkMode={darkMode} blue={blue} />
          </div>
        </div>
      </div>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-8 h-8   z-[100] right-3 bottom-3  cursor-pointer 
          ${blue ? "bg-primary" : "bg-secondary"}
         `}
      >
        <FaArrowUp className="animate-pulse text-white" />
      </div>
    </div>
  );
};

export default App;
