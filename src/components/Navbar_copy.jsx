import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoBlack from "@/assets/law-logo-black.png";
import logoWhite from "@/assets/law-logo-white.png";
import Footer from "@/components/Footer";
import styles from "../style";

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
        className={`fixed w-full h-16 text-black  z-40 ${styles.paddingX} `}
      >
        <div className="flex justify-end  md:gap-5 items-center max-w-screen-xl mx-auto  h-full">
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
        className={`z-50 fixed w-full  text-black  flex flex-col  text-2xl duration-700 ${
          styles.paddingX
        }  ${isMenuShown ? "top-16 rounded-b-2xl  " : "top-[100%]"}`}
      >
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
        <div className="my-12">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
