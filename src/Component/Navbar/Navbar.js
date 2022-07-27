import React from "react";
import logo from "../../asset/logo.jpg";
import "./Navbar.css"

const Navbar= ()=>{
        return(
            <div className="nav">
                 <img src={logo} alt="One step a head" className="logo-img"/>
                 <ul className="nav-links">
                   <li>
                       <a href="home" className="nav-link">
                           Home
                           </a></li>
                           <li><a href="aboutus" className="nav-link">
                               aboutUs
                               </a></li>
                               <li><a href="ContactUs" className="nav-link">
                                   ContactUs
                                   </a></li>
                                   <li><a href="Review" className="nav-link">
                                           Review
                                           </a></li>
                                           <li><a href="Review" className="nav-link">
                                           LogIn
                                           </a></li>
                                           <li><a href="Review" className="nav-link">
                                           GetStarted
                                           </a></li>
                                           </ul>
                                           </div>
        )
}
export default Navbar;