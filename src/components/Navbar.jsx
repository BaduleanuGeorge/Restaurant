import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="max-w-7xl mx-auto h-[100px] flex justify-between items-center p-3">
      {/* LOGO */}
      <div className="cursor-pointer">
        <Link to="/">
          <img src={Logo} className="w-[100px]" />
        </Link>
      </div>

      {/* MENU ICONS */}
      <div onClick={toggleMenu} className="lg:hidden z-10">
        {!showMenu ? (
          <RxHamburgerMenu size={30} />
        ) : (
          <AiOutlineClose size={30} className="text-white" />
        )}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`fixed top-0 right-0 w-[350px] md:w-[400px] h-screen bg-[#023047] text-white flex flex-col items-center justify-evenly text-lg transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={toggleMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About us
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact us
          </Link>
        </li>
        <Link to="/reservation">
          <button
            className="text-white flex justify-center items-center gap-2 py-3 px-6 bg-[#c1121f] 
            rounded-lg hover:bg-[#ff0011] duration-300 mt-4 ml-6"
          >
            Book Now
          </button>
        </Link>
      </ul>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-end text-[#023047]">
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <ImPhone />
            <h3 className="text-lg">020-1234-5671</h3>
          </div>
          <ul className="gap-8 text-lg flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to="/reservation">
            <button
              className="text-white flex justify-center items-center gap-2 py-3 px-6 bg-[#c1121f] 
            rounded-lg hover:bg-[#ff0011] duration-300 mt-4 ml-6"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
