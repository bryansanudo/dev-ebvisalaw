import React from "react";
import Section from "@/components/common/Section";
import styles from "@/style";
import { Link } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logoBlue from "@/assets/logo-blue.png";
import logoRed from "@/assets/logo-red.png";
import logoRedBlack from "@/assets/logo-red-black.png";
import logoRedWhite from "@/assets/logo-red-white.png";

const Footer = ({ darkMode, blue }) => {
  return (
    <footer className="footer justify-between  border-t p-6 mb-10 ">
      <div className="flex items-end  gap-2 ">
        <img
          src={darkMode ? logoRedWhite : logoRedBlack}
          className="w-14  object-contain"
          alt=""
        />
        <p
          className={` ${
            darkMode ? "from-secondary to-white" : "from-secondary to-black"
          } text-[38px] tangerine  text-transparent bg-clip-text mb-2 py-2 bg-gradient-to-r   `}
        >
          Visa Law
        </p>
      </div>
      <aside className="flex flex-col items-center justify-center">
        {/*   <div className="flex items-center justify-center gap-2 mt-2">
          <div
            className={`w-[40px] h-[40px] mask mask-hexagon-2 ${
              styles.flexCenter
            } hover:scale-105 duration-700 cursor-pointer ${
              blue ? "bg-primary " : "  bg-secondary "
            }  `}
          >
            <FaFacebookF className="text-white text-lg" />
          </div>
          <div
            className={`w-[40px] h-[40px] mask mask-hexagon-2 ${
              styles.flexCenter
            } hover:scale-105 duration-700 cursor-pointer ${
              blue ? "bg-primary " : "  bg-secondary "
            }`}
          >
            <FaLinkedinIn className="text-white text-lg" />
          </div>
        </div> */}
      </aside>
      <nav>
        <header className={`${styles.title}`}>Quick Links</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/eb1">EB-1</Link>
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/eb2">EB-2</Link>
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/eb3">EB-3</Link>
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <Link to="/faq">FAQ</Link>
        </a>
      </nav>

      <nav>
        <header className={`${styles.title}`}>Legal</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Terms of use
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Privacy policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
