import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoBlack from "@/assets/law-logo-black.png";
import logoWhite from "@/assets/law-logo-white.png";
import Footer from "@/components/Footer";
import styles from "../style";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "Professionals",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Social Commitment",
    },
    {
      id: 4,
      link: "Careers",
    },
    {
      id: 5,
      link: "New & Insights",
    },
    {
      id: 6,
      link: "Locations",
    },
    {
      id: 7,
      link: "Alumni",
    },
  ];

  let x = "";

  isMenuShown
    ? (x = "url(https://i.ibb.co/17fW1fQ/13313353-v880-kul-11.jpg)")
    : (x = "");

  return (
    <>
      <div
        style={{
          backgroundImage: x,
        }}
        className={`  fixed w-full h-16 text-black  z-40 ${styles.paddingX} `}
      >
        <div className="flex justify-end  md:gap-5 items-center mx-auto  h-full">
          {isMenuShown ? (
            <img src={logoBlack} className="w-40 h-40 object-contain" alt="" />
          ) : (
            <img src={logoWhite} className="w-40 h-40 object-contain" alt="" />
          )}

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="cursor-pointer"
          >
            {isMenuShown ? (
              <div className="flex items-center gap-2 justify-between">
                <FaTimes size={30} className="text-black " />
              </div>
            ) : (
              <div className="flex flex-col items-center  justify-between mt-2">
                <FaBars size={30} className="text-white " />
                <p className="text-[16px] text-white ">Menu</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/17fW1fQ/13313353-v880-kul-11.jpg)",
        }}
        className={`  z-50 fixed w-full h-screen justify-between text-black  flex flex-col   text-2xl duration-700 ${
          styles.paddingX
        }  ${isMenuShown ? "top-16 rounded-b-2xl  " : "top-[100%]"}`}
      >
        <div className=" flex flex-col h-[90vh] justify-between  ">
          <ul className="w-full flex flex-col justify-center items-end pt-10">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="py-2 capitalize cursor-pointer duration-300 hover:text-secondary"
              >
                {link}
              </li>
              /* <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
            </Link> */
            ))}
          </ul>
          <footer className="flex justify-between items-center">
            <div className="grid grid-cols-4">
              <div className="p-4 border-[1px] border-black cursor-pointer">
                <FaLinkedin />
              </div>
              <div className=" p-4 border-[1px] border-black cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="p-4 border-[1px] border-black cursor-pointer">
                <FaInstagram />
              </div>
              <div className="p-4 border-[1px] border-black cursor-pointer">
                <FaYoutube />
              </div>
            </div>
            <div className="flex gap-2 text-[12px]">
              <p className="cursor-pointer hover:text-secondary duration-500">
                About EB Visa Law
              </p>
              <span>/</span>
              <p className="cursor-pointer hover:text-secondary duration-500">
                Privacy & Disclaimers
              </p>
              <span>/</span>
              <p className="cursor-pointer hover:text-secondary duration-500">
                Attorney Advertising
              </p>
              <p className="ml-4">©2023 EB Visa Law</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
