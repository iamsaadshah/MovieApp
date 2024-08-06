import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Ensure this CSS file is created

const Navbar = () => {
  return (
    <>
    <p className="header">
        <span>🍿</span> shah movies
      </p>
    <div className="navbar">
      <nav className="navbar-menu">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#series" className="navbar-link">Series</a>
        <a href="#animation" className="navbar-link">Animation</a>
        <a href="#genres" className="navbar-link">Genres</a>
      </nav>


    </div>
    </>
  );
};

export default Navbar;
