import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Footer from "@/components/Footer";
import styles from "../style";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Navbar_copy = ({
  isMenuShown,
  setIsMenuShown,
  darkMode,
  setDarkMode,
}) => {
  const links = [
    {
      id: 1,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 2,
      name: "Frequent Questions",
      link: "/faq",
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
        className={` flex items-center justify-end fixed   h-16 dark:text-white text-black nav z-40  w-full ${styles.paddingX} `}
      >
        <div className="   flex justify-end  gap-5 items-center   h-full">
          {isMenuShown ? (
            <Link to="/">
              <img
                onClick={() => setIsMenuShown(false)}
                src={logoBlack}
                className="w-40 h-40 object-contain p-4 "
                alt=""
              />
            </Link>
          ) : (
            <Link to="/">
              <img
                onClick={() => setIsMenuShown(false)}
                src={logoWhite}
                className="w-40 h-40 object-contain p-4"
                alt=""
              />
            </Link>
          )}
          <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer hover:text-primary duration-300" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer hover:text-primary duration-300" />
            )}
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="cursor-pointer"
          >
            {isMenuShown ? (
              <div className="flex items-center gap-2 justify-between">
                <FaTimes size={30} className="text-black " />
              </div>
            ) : (
              <div className="flex flex-col items-center   justify-between mt-2">
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
        <div className=" flex flex-col h-[90vh] justify-between ">
          <ul className="w-full flex flex-col justify-center items-end pt-10">
            <li>
              <div className="dropdown dropdown-end  dropdown-hover">
                <div
                  tabIndex={0}
                  className="py-2 flex items-center justify-center capitalize cursor-pointer duration-300 hover:text-secondary"
                >
                  <p>Services</p>
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <ul className="dropdown-content  z-[1]   shadow bg-base-100 w-52">
                  <Link to="services/open_company">
                    <li
                      onClick={() => setIsMenuShown(!isMenuShown)}
                      className="hover:bg-success cursor-pointer  w-full duration-300"
                    >
                      <p className="px-4 text-[14px]">Open a Company</p>
                    </li>
                  </Link>
                  <Link to="services/visa_eb1">
                    <li
                      onClick={() => setIsMenuShown(!isMenuShown)}
                      className="hover:bg-success  w-full duration-300"
                    >
                      <p className="px-4 text-[14px]">EB1 VISA</p>
                    </li>
                  </Link>
                  <Link to="services/visa_eb2">
                    <li
                      onClick={() => setIsMenuShown(!isMenuShown)}
                      className="hover:bg-success  w-full duration-300"
                    >
                      <p className="px-4 text-[14px]">EB2 VISA</p>
                    </li>
                  </Link>
                  <Link to="services/visa_e2">
                    <li
                      onClick={() => setIsMenuShown(!isMenuShown)}
                      className="hover:bg-success  w-full duration-300"
                    >
                      <p className="px-4 text-[14px]">E2 VISA</p>
                    </li>
                  </Link>

                  {/*   <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">L1 VISA</p>
                  </li>
                  <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">VISA 01</p>
                  </li>
                  <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">Family Requests</p>
                  </li>
                  <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">Naturalizacion</p>
                  </li>
                  <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">United States Removal</p>
                  </li>
                  <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">IE PAROLE VISA</p>
                  </li>
                  <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">PERM</p>
                  </li>
                  <li className="hover:bg-success  w-full duration-300">
                    <p className="px-4 text-[14px]">EAD</p>
                  </li> */}
                </ul>
              </div>
            </li>
            {links.map(({ id, name, link }) => (
              <li
                key={id}
                onClick={() => setIsMenuShown(!isMenuShown)}
                className="py-2 capitalize cursor-pointer duration-300 hover:text-secondary"
              >
                <Link to={link}>{name}</Link>
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

export default Navbar_copy;
