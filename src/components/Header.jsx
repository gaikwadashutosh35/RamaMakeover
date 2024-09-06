import React, { useState } from "react";
import "../ComponentsCSS/Header.css";
import logo from "../Assets/Logo.gif"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        
      </div>
      <div
        className={`menuButton ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
