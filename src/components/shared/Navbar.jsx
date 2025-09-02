import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="font-fira w-full px-4 sm:px-8 lg:px-[171px] py-4 bg-[#282C33] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
  &lt;Owakeel/&gt;<span className="text-primary">.</span>
</h1>


        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pb-1 border-b-2 transition duration-300 ${
                isActive
                  ? "border-white"
                  : "border-transparent hover:border-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `pb-1 border-b-2 transition duration-300 ${
                isActive
                  ? "border-white"
                  : "border-transparent hover:border-white"
              }`
            }
          >
            #works
          </NavLink>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              `pb-1 border-b-2 transition duration-300 ${
                isActive
                  ? "border-white"
                  : "border-transparent hover:border-white"
              }`
            }
          >
            #About-me
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `pb-1 border-b-2 transition duration-300 ${
                isActive
                  ? "border-white"
                  : "border-transparent hover:border-white"
              }`
            }
          >
            #Contacts
          </NavLink>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#282C33] pb-4">
          <ul className="flex flex-col items-center gap-4 text-white font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition duration-300 ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-white"
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition duration-300 ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-white"
                }`
              }
              onClick={toggleMenu}
            >
              #works
            </NavLink>
            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition duration-300 ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-white"
                }`
              }
              onClick={toggleMenu}
            >
              #About-me
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition duration-300 ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-white"
                }`
              }
              onClick={toggleMenu}
            >
              #Contacts
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;