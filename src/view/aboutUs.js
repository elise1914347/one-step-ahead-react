import React from "react";
import HomeLayout from "../Component/Homelayout";
import "../Component/Navbar/Navbar.css";
import photo from "../asset/therap.jpg";
import logo from "../asset/logo.jpg";
const About = () => {
  return (
    <>
      <div className="nav">
        <img src={logo} alt="One step a head" className="logo-img" />
        <ul className="nav-links">
          <li>
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/aboutus" className="nav-link">
              aboutUs
            </a>
          </li>
          <li>
            <a href="ContactUs" className="nav-link">
              ContactUs
            </a>
          </li>
          <li>
            <a href="Review" className="nav-link">
              Review
            </a>
          </li>
          <li>
            <a href="Review" className="nav-link">
              LogIn
            </a>
          </li>
          <li>
            <a href="Review" className="nav-link">
              GetStarted
            </a>
          </li>
        </ul>
      </div>

      <div>
        <img src={photo} alt="elize" className="elise" />
      </div>
      <card>
      <section>
        <p style={{ textAlign: "center" }}>our Mission</p><br></br>
        <p style={{textAlign:"center"}}>
          Making professional therapy accessible, affordable and convenient so<br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p> <br></br>
        <p style={{ textAlign: "center" }}>our Therapist</p><br></br>
        <p style={{textAlign:"center"}}>
          Making professional therapy accessible, affordable and convenient so<br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p> <br></br>
      </section>    
      </card>
    </>
  );
};
export default About;
