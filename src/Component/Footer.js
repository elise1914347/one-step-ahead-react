import React from "react";
import logofooter from "../asset/Images/logo.jpg"
import {FacebookOutlined,TwitterOutlined,InstagramOutlined,MessageOutlined,PhoneOutlined } from "@ant-design/icons"
import "./Footer.css";

const Footer=()=>{
    const d = new Date();
let year=d.getFullYear()
    return(
        <div className="footer-container">
                <div className="logo-column">
               <img src={logofooter} alt="logo footer" className="logo-img"/><br></br>
               <div className="icons">
                   <FacebookOutlined/>
                   <TwitterOutlined />
                   <InstagramOutlined />
                   <MessageOutlined />
                   <PhoneOutlined />
               </div>
               <p className="copyright">copyright &copy;{year} by onestepAhead
               </p>
           </div>
           <div className="Home-column">
            <h4 style={{fontSize:"12px"}}>Home</h4>
            <p><a href="#">Terms&condition</a></p>

           </div>
           <div className="ABout-column">
            <h4 style={{fontSize:"12px"}}>AboutUs</h4>
            <p><a href="#">privacy and policy</a></p>

           </div>
           {/* <div className="contactus-column">
               <h3 className="footer-title">Contact-us</h3>
               <p>523 Remera ST., 3nd floor,<span>Kigali Rwanda</span></p>
               <p>
               <a href="mailto:webmaste@example.com">eliseduse@gmail.com</a>
               </p>
               <p>
               <a href="mailto:webmaste@example.com">angejoyeuse@gmail.com</a>
               </p>
               <p>
               <a href="mailto:webmaste@example.com">fabiola@gmail.com</a>
               </p>
               <p><a href="#">web Accesibility</a></p>
           </div> */}
           <div className="Review-column">
            <h4 style={{fontSize:"12px"}}>Review</h4>
            <p><a href="#">Cookie setting</a></p>

           </div>
           <div className="login-column">
            <h4 style={{fontSize:"12px"}}>Login</h4>
            <p><a href="#">WebAccessibility</a></p>

           </div>
           <div className="GetStarted-column">
            <h4 style={{fontSize:"12px"}}>GetStarted</h4>
            <p><a href="#">WebAccessibility</a></p>

           </div>
          
        </div>
    )
}
export default Footer;
