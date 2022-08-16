import React, { useState } from "react";
import Logo from "../../asset/Images/logo.jpg"
import {Button} from "../Button";
import { Link} from "react-router-dom"
import './Navbar.css';
import Dropdown from "./Dropdown";
import {navLink } from "react-router-dom"



function Navbar(){
    const[click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)
    const onMouseEnter =()=>{
        if(window.innerWidth<960){
            setDropdown(false)
        } else{
            setDropdown(true)
        }
    };
    const onMouseLeave =()=>{
        if(window.innerWidth<960){
            setDropdown(false)
        } else{
            setDropdown(false)
        }
    };



    const [dropdown,setDropdown]=useState(false)


    return(
        <>
        <nav className="Navbar">
        <navLink to="/">
            <img src={require("../../asset/Images/logo.jpg")} alt="logo" className="navbar-logo"></img>
        </navLink>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>

            <i class="fa fa-bars" aria-hidden="true"></i>

            </div>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li className="nav-item">
                    <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                
                >
                    <Link to='/AboutUs' className="nav-links" onClick={closeMobileMenu}>
                    AboutUs <i className="fas fa-caret-down"/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className="nav-item">
                    <Link to="/contactUs" className="nav-links" onClick={closeMobileMenu}>
                    contact Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/therapist" className="nav-links" onClick={closeMobileMenu}>
                    TherapistJob
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                    Login
                    </Link>
                </li>
                
            </ul>
            
            <Button/>

        </nav>
        </>

    )

}
export default Navbar;