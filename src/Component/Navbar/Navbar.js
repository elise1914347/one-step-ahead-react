




import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../asset/Images/logo.jpg"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
  };

  return (
    <nav className="nav">
      <navLink to="/">
            <img src={require("../../asset/Images/logo.jpg")} alt="logo" className="navbar-logo"></img>
        </navLink>
      <ul className={active}>
        <li className="nav_item">
          <a href="/Home" className="nav_link">
            HOME
          </a>
        </li>
        <li className="nav_item">
          <a href="/aboutus" className="nav_link">
            AboutUs
          </a>
        </li>
        <li className="nav_item">
          <a href="/contactUs" className="nav_link">
            ContactUs
          </a>
        </li>
        <li className="nav_item">
          <a href="/GetStarted" className="nav_link">
            GetStarted
          </a>
        </li>
        <li className="nav_item">
          <a href="/login" className="nav_link">
            Login
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className="nav__toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
export default Navbar;