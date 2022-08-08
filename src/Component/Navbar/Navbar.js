import React from "react";
import logo from "../../asset/Images/logo.jpg";
import "../Navbar/Navbar.css"


const Navbar= ()=>{
        return(
            <>
            <div className="nav">
                <div>
                 <img src={logo} alt="One step a head" className="logo-img"/></div>
                 <div style={{marginLeft:"40%",padding:"10px",fontSize:"12px"}}>
                 <ul className="nav-links">
                   <li>
                       <a href="/home" className="nav-link">
                           Home
                           </a></li>
                           <li><a href="/aboutus" className="nav-link">
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
                                           </div>
                                           
                                           </>
        )
}
export default Navbar;
// import React from "react";

// function Navbar(){

//     return(
//         <div className="Navbar">

//         </div>

//     )

// }