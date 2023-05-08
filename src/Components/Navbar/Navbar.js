// import React, { Component } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../Assets/Images/topdesignlogo.svg";
import "./navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("nav-list");
  const [toggleIcon, setToggleIcon] = useState("nav-icon");

  const currentPath = useLocation().pathname;
  if (
    currentPath === "/admin/users" ||
    currentPath === "/admin/about" ||
    currentPath === "/admin/kids" ||
    currentPath === "/admin/projects" ||
    currentPath === "/admin/emails" ||
    currentPath === "/admin/events" ||
    currentPath === "/admin/team" ||
    currentPath === "/login" ||
    currentPath === "/admin/services"
  )
    return null;

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
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/achievements">EVENTS</NavLink>
        <NavLink to="/kids-zone">KIDSZONE</NavLink>
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
