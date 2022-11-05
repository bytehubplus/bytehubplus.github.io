import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] ">
      <nav className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-3xl font-bold text-gray-50">Bytehub+ </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center space-x-4">
            <li>
              <a href="#heor">Home</a>
            </li>
            <li>
              <a href="#service">Fusion</a>
            </li>
            <li>
              <a href="https://github.com/bytehubplus">Get Started</a>
            </li>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-40%]"
          }
        >
          <ul>
            <li>
              <a href="#heor">Home</a>
            </li>
            <li>
              <a href="#service">Fusion</a>
            </li>
            <li>
              <a href="https://github.com/bytehubplus">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
