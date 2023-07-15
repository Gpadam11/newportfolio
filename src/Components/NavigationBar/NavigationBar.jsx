import React, { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar flex justify-between items-center text-white p-5 m-1rem ">
        {/* Left side */}
        <Link to="/" className="navbar-item ml-5rem sm:ml-2rem">
          <RiHomeLine className="text-2xl mr-1rem hover:text-green" />
        </Link>

        {/* Right side */}
        <div className="hidden md:flex items-center">
          <Link
            to="/about"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green"
          >
            About
          </Link>

          <Link
            to="/education"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green"
          >
            Education
          </Link>

          <Link
            to="/skills"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green"
          >
           Skills
          </Link>

          <Link
            to="/certificates"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green"
          >
            Certificates
          </Link>

          <Link
            to="/contact"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green"
          >
            Contact
          </Link>
        </div>

        {/* Dropdown menu for small devices */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button" onClick={handleMenuToggle}>
            <IoReorderThree className="w-3rem" fill="white" />
          </button>
          {isOpen && (
            <div className="absolute right-1 top-2 mt-2rem w-40 bg-gray-dark m-1rem  shadow-sm p-1">
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                About
              </Link>
              <Link
                to="/education"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Education
              </Link>
              <Link
                to="/skills"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Skills
              </Link>
              <Link
                to="/certificates"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Certificates
              </Link>

              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Contact
              </Link>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
