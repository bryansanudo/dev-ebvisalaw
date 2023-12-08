import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/style";
import Section from "@/components/common/Section";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logoBlue from "@/assets/logo-blue.png";

import { Link } from "react-router-dom";
import logoRedBlack from "@/assets/logo-red-black.png";
import logoRedWhite from "@/assets/logo-red-white.png";
import logoWhite from "@/assets/logo-white.png";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode, blue, setBlue }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
  ];
  const links2 = [
    {
      id: 5,
      name: "FAQ",
      link: "/faq",
    },

    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },
  ];

  const eb1 = [
    {
      id: 1,
      name: "EB-1A",
      link: "/eb1a",
    },
    {
      id: 2,
      name: "EB-1B",
      link: "/eb1b",
    },
    {
      id: 3,
      name: "EB-1C",
      link: "/eb1c",
    },
  ];

  const eb3 = [
    {
      id: 1,
      name: "EB-3A",
      link: "/eb3a",
    },
    {
      id: 2,
      name: "EB-3B",
      link: "/eb3b",
    },
    {
      id: 3,
      name: "EB-3C",
      link: "/eb3c",
    },
  ];
  const handleBlue = () => {
    setBlue(true);
  };

  const handleRed = () => {
    setBlue(false);
  };

  return (
    <div
      className={` ${styles.paddingX} ${
        isMenuShown ? "bg-accent" : ""
      }  absolute w-full z-50 ${isMenuShown ? "" : ""}  ${styles.flexCenter}  `}
    >
      <div className={`${styles.boxWidth}   `}>
        <div className="w-full h-20 dark:text-white ">
          <div className="flex justify-start   md:justify-end md:gap-5 items-center  mx-auto  h-full">
            <div className="mr-auto    hidden md:flex items-end">
              {blue ? (
                <>
                  <img
                    src={darkMode ? logoWhite : logoBlue}
                    className="w-14  object-contain"
                    alt=""
                  />
                  <p
                    className={` ${
                      darkMode
                        ? "from-primary to-[#d8b57c]"
                        : "from-primary to-[#d8b57c]"
                    } text-[38px] tangerine  text-transparent bg-clip-text  bg-gradient-to-r   `}
                  >
                    Visa Law
                  </p>
                </>
              ) : (
                <div className="flex items-end ">
                  <img
                    src={darkMode ? logoWhite : logoRedBlack}
                    className="w-14 object-contain"
                    alt=""
                  />
                  <p
                    className={` ${
                      darkMode ? "text-white" : "text-black"
                    } text-[38px] tangerine       `}
                  >
                    Visa Law
                  </p>
                </div>
              )}
            </div>
            <div className="hidden lg:flex items-center">
              <ul className="flex gap-6 ">
                <li
                  className={`mt-1 text-[18px]  capitalize duration-300    cursor-pointer ${
                    blue ? "hover:text-primary " : "  hover:text-secondary "
                  }`}
                >
                  <Link to="/">Home</Link>
                </li>

                {/* visa eb1 */}
                <li>
                  <div className="dropdown dropdown-bottom dropdown-hover">
                    <div
                      tabIndex={0}
                      className={`mt-1 text-[18px] flex items-center   capitalize duration-300  hover:font-semibold  cursor-pointer ${
                        blue ? "hover:text-primary " : "  hover:text-secondary "
                      }`}
                    >
                      <p>Visa EB-1</p>
                      <div className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <IoMdArrowDropdown />
                        </div>
                      </div>
                    </div>
                    <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                      {eb1.map(({ id, link, name }) => (
                        <Link key={id} to={link}>
                          <li
                            className={`w-full duration-300 ${
                              blue
                                ? "hover:bg-primary "
                                : "  hover:bg-secondary "
                            }`}
                          >
                            <p className="px-4 text-[14px]">{name}</p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* visa eb2 */}
                <li
                  className={`mt-1 text-[18px]  capitalize duration-300    cursor-pointer ${
                    blue ? "hover:text-primary " : "  hover:text-secondary "
                  }`}
                >
                  <Link to="/eb2">Visa EB-2</Link>
                </li>
                {/* visa eb3 */}
                <li>
                  <div className="dropdown dropdown-bottom dropdown-hover">
                    <div
                      tabIndex={0}
                      className={`mt-1 text-[18px] flex items-center   capitalize duration-300  hover:font-semibold  cursor-pointer ${
                        blue ? "hover:text-primary " : "  hover:text-secondary "
                      }`}
                    >
                      <p>Visa EB-3</p>
                      <div className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <IoMdArrowDropdown />
                        </div>
                      </div>
                    </div>
                    <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                      {eb3.map(({ id, link, name }) => (
                        <Link key={id} to={link}>
                          <li
                            className={`w-full duration-300 ${
                              blue
                                ? "hover:bg-primary "
                                : "  hover:bg-secondary "
                            }`}
                          >
                            <p className="px-4 text-[14px]">{name}</p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* faq contact */}
                {links2.map(({ id, link, name }) => (
                  <li
                    key={id}
                    className={`mt-1 text-[18px]  capitalize duration-300    cursor-pointer ${
                      blue ? "hover:text-primary " : "  hover:text-secondary "
                    }`}
                  >
                    <Link to={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              onClick={() => setIsMenuShown(!isMenuShown)}
              className="block lg:hidden cursor-pointer mr-4"
            >
              {isMenuShown ? (
                <FaTimes className="text-gray-500" size={30} />
              ) : (
                <FaBars className="text-gray-500" size={30} />
              )}
            </div>

            <div className="flex items-center flex-row justify-center gap-2 ">
              <div className="bg-gray-300 h-7 mr-2 w-[1px] hidden md:flex"></div>
              <div onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <MdWbSunny
                    className={`mt-1 text-2xl text-gray-500 md:text-white cursor-pointer duration-300 ${
                      blue ? "hover:text-primary " : "  hover:text-secondary "
                    } `}
                  />
                ) : (
                  <MdNightsStay
                    className={`mt-1 text-2xl text-gray-500 md:text-black cursor-pointer duration-300 ${
                      blue ? "hover:text-primary " : "  hover:text-secondary "
                    } `}
                  />
                )}
              </div>
              <div className="flex gap-2 ">
                <div
                  onClick={handleBlue}
                  className="h-4 w-4 border-gray-300 border-2 bg-primary cursor-pointer"
                ></div>
                <div
                  onClick={handleRed}
                  className="h-4 w-4 border-gray-300 border-2 bg-secondary cursor-pointer"
                ></div>
              </div>
            </div>
            <div className="ml-auto gap-2  md:hidden flex items-end">
              {blue ? (
                <>
                  <img
                    src={darkMode ? logoBlue : logoBlue}
                    className="w-14  object-contain"
                    alt=""
                  />
                  <p
                    className={` ${
                      darkMode
                        ? "from-primary to-[#d8b57c]"
                        : "from-primary to-[#d8b57c]"
                    } text-[38px] tangerine  text-transparent bg-clip-text  bg-gradient-to-r   `}
                  >
                    Visa Law
                  </p>
                </>
              ) : (
                <>
                  <img
                    src={darkMode ? logoRedWhite : logoRedBlack}
                    className="w-14  object-contain"
                    alt=""
                  />
                  <p
                    className={` ${
                      darkMode
                        ? "from-secondary to-white"
                        : "from-secondary to-black"
                    } text-[38px] tangerine  text-transparent bg-clip-text  bg-gradient-to-r   `}
                  >
                    Visa Law
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className={`absolute w-full  dark:text-white z-[50] left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
            isMenuShown
              ? "top-20 rounded-b-2xl bg-accent opacity-100"
              : "top-[-600px]"
          }`}
        >
          <ul>
            {links.map(({ id, link, name }) => (
              <Link key={id} to={link}>
                <li
                  onClick={() => setIsMenuShown(!isMenuShown)}
                  className="mt-1 text-[18px] capitalize duration-300 hover:scale-105 text-white hover:font-semibold  cursor-pointer "
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
