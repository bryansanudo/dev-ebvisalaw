import React from "react";
import Section from "@/components/common/Section";
import styles from "@/style";
import logo from "@/assets/logo-gba.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer className="footer justify-between  border-t p-6 mb-10 ">
      <aside className="flex flex-col items-center justify-center">
        <div>
          {/* <img src={logo} alt="" /> */}
          <p>logo</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon-2 ${styles.flexCenter} hover:scale-105 duration-700 cursor-pointer bg-primary`}
          >
            <FaFacebookF className="text-white text-2xl" />
          </div>
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon-2 ${styles.flexCenter} hover:scale-105 duration-700 cursor-pointer bg-primary`}
          >
            <FaLinkedinIn className="text-white text-2xl" />
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