import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/style";
import Section from "@/components/common/Section";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logovisa from "@/assets/logo-visa.png";

import { Link } from "react-router-dom";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },

    {
      id: 4,
      name: "FAQ",
      link: "/faq",
    },

    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div
      className={` ${styles.paddingX} nav fixed w-full z-40   ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}   `}>
        <div className="w-full  h-20 dark:text-white ">
          <div className="flex justify-start md:justify-end md:gap-5 items-center  mx-auto  h-full">
            <div className="mr-auto mt-2 hidden md:flex">
              <img src={logovisa} className="w-16" alt="" />
            </div>
            <div className="hidden lg:flex items-center">
              <ul className="flex gap-6 ">
                {links.map(({ id, link, name }) => (
                  <li
                    key={id}
                    className="mt-1 text-[18px] capitalize duration-300 hover:text-primary hover:font-semibold  cursor-pointer"
                  >
                    <Link to={link}>{name}</Link>
                  </li>
                ))}
                <li>
                  <div className="dropdown dropdown-bottom dropdown-hover">
                    <div
                      tabIndex={0}
                      className="mt-1 text-[18px] flex items-center   capitalize duration-300 hover:text-primary hover:font-semibold  cursor-pointer"
                    >
                      <p>Services</p>
                      <div className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <IoMdArrowDropdown />
                        </div>
                      </div>
                    </div>
                    <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                      {/* <Link to="services/open_company">
                        <li className="hover:bg-primary cursor-pointer  w-full duration-300">
                          <p className="px-4 text-[14px]">Open a Company</p>
                        </li>
                      </Link> */}
                      <Link to="services/visa_eb1">
                        <li className="hover:bg-primary  w-full duration-300">
                          <p className="px-4 text-[14px]">EB1 VISA</p>
                        </li>
                      </Link>
                      <Link to="services/visa_eb2">
                        <li className="hover:bg-primary  w-full duration-300">
                          <p className="px-4 text-[14px]">EB2 VISA</p>
                        </li>
                      </Link>
                      <Link to="services/visa_e2">
                        <li className="hover:bg-primary  w-full duration-300">
                          <p className="px-4 text-[14px]">E2 VISA</p>
                        </li>
                      </Link>
                      {/* divider */}
                      <Link to="services/visa_e2">
                        <li className="hover:bg-primary  w-full duration-300">
                          <p className="px-4 text-[14px]">xxxx VISA</p>
                        </li>
                      </Link>
                      <Link to="services/visa_e2">
                        <li className="hover:bg-primary  w-full duration-300">
                          <p className="px-4 text-[14px]">xxxx VISA</p>
                        </li>
                      </Link>
                      <Link to="services/visa_e2">
                        <li className="hover:bg-primary  w-full duration-300">
                          <p className="px-4 text-[14px]">xxxx VISA</p>
                        </li>
                      </Link>

                      {/*   <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">L1 VISA</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">VISA 01</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">Family Requests</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">Naturalizacion</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">United States Removal</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">IE PAROLE VISA</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">PERM</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">EAD</p>
                  </li> */}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div
              onClick={() => setIsMenuShown(!isMenuShown)}
              className="block lg:hidden cursor-pointer mr-4"
            >
              {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <div className="flex items-center flex-row justify-center gap-2 ">
              <div className="bg-gray-300 h-7 mr-2 w-[1px] hidden md:flex"></div>
              <div onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <MdWbSunny className="mt-1 text-2xl cursor-pointer hover:text-primary duration-300" />
                ) : (
                  <MdNightsStay className="mt-1 text-2xl cursor-pointer hover:text-primary duration-300" />
                )}
              </div>

              {/*   <a href="https://bryan95-portfolio.vercel.app/">
                <span className="hover:text-primary duration-300 text-[18px] hover:font-semibold">
                  ENG
                </span>
              </a>
              <a href="https://bryan95-portfolio-esp.vercel.app/">
                <span className="hover:text-primary duration-300 text-[18px] hover:font-semibold">
                  ESP
                </span>
              </a> */}
            </div>
            <div className="ml-auto md:hidden flex">
              {/* <img src={logo} className="w-36" alt="" /> */}
              <img src={logovisa} className="w-16" alt="" />
            </div>
          </div>
        </div>

        <div
          className={`fixed w-full  dark:text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
            isMenuShown
              ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
              : "top-[-600px]"
          }`}
        >
          <ul>
            {links.map(({ id, link, name }) => (
              <Link key={id} to={link}>
                <li
                  onClick={() => setIsMenuShown(!isMenuShown)}
                  className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary"
                >
                  {name}
                </li>
              </Link>
            ))}
            <li>
              <div className="dropdown dropdown-bottom dropdown-hover">
                <div
                  tabIndex={0}
                  className="mt-1 text-[18px] flex items-center   capitalize duration-300 hover:text-primary hover:font-semibold  cursor-pointer"
                >
                  <p>Services</p>
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                  <Link to="services/open_company">
                    <li className="hover:bg-primary cursor-pointer  w-full duration-300">
                      <p className="px-4 text-[14px]">Open a Company</p>
                    </li>
                  </Link>
                  <Link to="services/visa_eb1">
                    <li className="hover:bg-primary  w-full duration-300">
                      <p className="px-4 text-[14px]">EB1 VISA</p>
                    </li>
                  </Link>
                  <Link to="services/visa_eb2">
                    <li className="hover:bg-primary  w-full duration-300">
                      <p className="px-4 text-[14px]">EB2 VISA</p>
                    </li>
                  </Link>
                  <Link to="services/visa_e2">
                    <li className="hover:bg-primary  w-full duration-300">
                      <p className="px-4 text-[14px]">E2 VISA</p>
                    </li>
                  </Link>

                  {/*   <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">L1 VISA</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">VISA 01</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">Family Requests</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">Naturalizacion</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">United States Removal</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">IE PAROLE VISA</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">PERM</p>
                  </li>
                  <li className="hover:bg-primary  w-full duration-300">
                    <p className="px-4 text-[14px]">EAD</p>
                  </li> */}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
