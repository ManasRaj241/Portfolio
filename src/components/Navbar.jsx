import React, { useState } from "react";
import pic from "../../public/logo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Coding Profiles" },
    { id: 6, text: "Resume" },
    { id: 7, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900 to-slate-800/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex space-x-3 items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={pic}
                className="h-12 w-12 rounded-full relative border-2 border-green-500/50 group-hover:border-green-400 transition-colors"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg cursor-pointer group-hover:text-green-400 transition-colors">
                Manas Ranjan Satapathy
                <span className="text-green-500 text-2xl">|</span>
              </h1>
              <p className="text-xs text-green-400 font-semibold">
                Software Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div>
            <ul className="hidden md:flex space-x-1">
              {navItems.map(({ id, text }) => (
                <li key={id} className="group relative">
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="px-4 py-2 cursor-pointer font-medium text-slate-300 group-hover:text-green-400 transition-colors duration-300"
                  >
                    {text}
                  </Link>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {menu ? (
                <IoCloseSharp size={24} className="text-green-400" />
              ) : (
                <AiOutlineMenu size={24} className="text-green-400" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menu && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-xl">
            <ul className="flex flex-col space-y-2 p-6">
              {navItems.map(({ id, text }) => (
                <li key={id} className="group">
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="px-4 py-3 cursor-pointer font-semibold text-slate-300 group-hover:text-green-400 block rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
