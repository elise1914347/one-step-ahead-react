import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../asset/Images/logo.jpg";
import { Button } from "antd";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    //TogglerIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <>
      <nav className="nav">
        <div className="navbar-logo">
          <img src={require("../../asset/Images/logo.jpg")} alt="logo"></img>
        </div>
        <ul className={active}>
          <li className="nav_item">
            <a href="/Home" className="nav_link">
              Home
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
            <a href="/login" className="nav_link">
              Login
            </a>
          </li>
          <li className="nav_item">
            <Button href="/GetStarted" className="nav_links">
              GetStarted
            </Button>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
