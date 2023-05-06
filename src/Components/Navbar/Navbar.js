// import React, { Component } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/topdesignlogo.svg";
import "./navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("nav-list");
  const [toggleIcon, setToggleIcon] = useState("nav-icon");

  const handleClick = () => {
    if (active === "nav-list") {
      setActive("nav-list nav-active");
    } else {
      setActive("nav-list");
    }
    if (toggleIcon === "nav-icon") {
      setToggleIcon("nav-icon toggle");
    } else {
      setToggleIcon("nav-icon");
    }
  };
  return (
    <div className="nav-main">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={active}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/kids-zone">KIDSZONE</NavLink>
        <NavLink to="/achievements">ACHIEVEMENTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
      <div onClick={handleClick} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
