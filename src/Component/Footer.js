// import React from "react";
// import logofooter from "../asset/Images/logo.jpg"
// import {FacebookOutlined,TwitterOutlined,InstagramOutlined,MessageOutlined,PhoneOutlined } from "@ant-design/icons"
// import "./Footer.css";

// const Footer=()=>{
//     const d = new Date();
// let year=d.getFullYear()
//     return(
//         <div className="footer-container">
//                 <div className="logo-column">
//                <img src={logofooter} alt="logo footer" className="logo-img" style={{paddingRight:"10px"}}/><br></br>
//                <div className="icons">
//                    <FacebookOutlined/>
//                    <TwitterOutlined />
//                    <InstagramOutlined />
//                    <MessageOutlined />
//                    <PhoneOutlined />
//                </div>
             
//                <p className="copyright">copyright &copy;{year} by onestepAhead
//                </p>
//            </div>
//            <div className="Home-column">
//             <h4 style={{fontSize:"12px",color:"white"}}>Home</h4>
//             <p><a href="#">Terms&condition</a></p>

//            </div>
//            <div className="ABout-column">
//             <h4 style={{fontSize:"12px",color:"white"}}>AboutUs</h4>
//             <p><a href="#">privacy and policy</a></p>

//            </div>
//            <div className="Review-column">
//             <h4 style={{fontSize:"12px",color:"white"}}>Review</h4>
//             <p><a href="#">Cookie setting</a></p>

//            </div>
//            <div className="login-column">
//             <h4 style={{fontSize:"12px",color:"white"}}>TherapistJob</h4>
//             <p><a href="#">WebAccessibility</a></p>

//            </div>
//            <div className="GetStarted-column">
//             <h4 style={{fontSize:"12px",color:"white"}}>GetStarted</h4>
//             <p><a href="#">WebAccessibility</a></p>
//            </div>    
//         </div>
//     )
// }
// export default Footer;
import React from "react";
 import logofooter from "../asset/Images/logo.jpg"
import {FacebookOutlined, TwitterOutlined, InstagramOutlined} from "@ant-design/icons";
import "./Footer.css"

const Footer=()=>{
    const date = new Date();
    let year =date.getFullYear();
    return (
        <div className="footer-content">
            <div className="logo-column">
            <img src={logofooter} alt="logo footer" className="logo-img" style={{paddingRight:"10px"}}/>
                <div className="icons">
                <FacebookOutlined />
                <TwitterOutlined />
                <InstagramOutlined />
                </div>
            
            <p className="copyright"> copyright &copy; {year} onestepAhead <span>Inc, All right reserved</span></p>
            </div>
        
        <div className="acount-column">
            <h3 className="footer-title">Follow Us</h3>
            <p>523 Remera st,,2nd floor, <span>kigali Rwanda</span></p>
            <p>tel:+250-785-234-430</p>
            <p>onestepAhead@gmail.com</p>
        </div>
        <div className="acount-column">
        <h3 className="footer-title">Subscribe </h3>
        <p>Create Account </p>
        <p>Sign-in </p>
        <p>log-in </p>
       </div>

        <div className="acount-column">
        <h3 className="footer-title">Our Services</h3>
        <p>Home </p>
        <p>about us</p>
        <p>TherapistJob</p>
        <p>GetStarted</p>
        </div>

        <div className="acount-column">
        <h3 className="footer-title">about Comment</h3>
        <p>one-Step-Ahead directory </p>
        <p>help center </p>
        <p>privacy & term </p>
        </div>
        </div>
    );
};
export default Footer;