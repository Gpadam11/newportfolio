import React, { useState } from "react";
import { RiHomeLine } from "react-icons/ri"; 
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {

  return (
    <header>
      <div className="navbar flex justify-between items-center text-white p-5 m-1rem  ">
        {/* Left side */}
        <Link to="/" className="navbar-item ml-5rem sm:ml-1rem xs:ml-1rem">
          <RiHomeLine className="text-2xl mr-1rem hover:text-green" />
        </Link>

        {/* Right side */}
        <div className="md:flex items-center">
          <Link
            to="/about"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green xs:text-xs sm:text-sm md:text-base"
          >
            About
          </Link>

          <Link
            to="/education"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green xs:text-xs sm:text-sm md:text-base"
          >
            Education
          </Link>

          <Link
            to="/skills"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green xs:text-xs sm:text-sm md:text-base"
          >
           Skills
          </Link>

          <Link
            to="/certificates"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green xs:text-xs sm:text-sm md:text-base"
          >
            Certificates
          </Link>

          <Link
            to="/contact"
            className="navbar-item ml-1rem mr-1rem hover-nav hover:text-green xs:text-xs sm:text-sm md:text-base"
          >
            Contact
          </Link>
        </div>

        
      </div>
    </header>
  );
};

export default NavigationBar;