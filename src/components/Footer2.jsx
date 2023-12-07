import React from "react";
import Section from "@/components/common/Section";
import styles from "@/style";

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logoBlue from "@/assets/logo-blue.png";
import logoRed from "@/assets/logo-red.png";

const Footer = ({ darkMode, blue }) => {
  return (
    <footer className="footer justify-between  border-t p-6 mb-10 ">
      <aside className="flex flex-col items-center justify-center">
        <div>
          {/* <img src={logo} alt="" /> */}
          <img src={blue ? logoBlue : logoRed} className="w-14" alt="" />
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
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
        </div>
      </aside>
      <nav>
        <header className={`${styles.title}`}>Quick Links</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Branding
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Design
        </a>
      </nav>
      <nav>
        <header className={`${styles.title}`}>Company</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          About us
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Contact
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
