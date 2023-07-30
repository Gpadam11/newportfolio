import React, { useState, useEffect } from "react";
import { RiHomeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <header>
        <div className="navbar flex justify-between items-center text-white p-5 m-1rem">
          {/* Left side */}
          <Link to="/" className="navbar-item ml-5rem sm:ml-1rem xs:ml-1rem">
            <RiHomeLine className="text-2xl mr-1rem hover:text-green" />
          </Link>

          {/* Right side */}
          {!isSmallScreen && !isMenuOpen ? (
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
          ) : null}

          {/* Toggle Menu Button */}
          {isSmallScreen && (
            <button className={`toggle-menu md:hidden`} onClick={toggleMenu}>
              <span></span>
            </button>
          )}
        </div>
      </header>

      {/* Menu */}
      <div id="menu" className={isMenuOpen ? "open" : "hidden"}>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={toggleMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/certificates" onClick={toggleMenu}>
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
