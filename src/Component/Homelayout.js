import React from "react";
import Nav from "../Component/Navbar/Navbar"
import Footer from "./Footer";
const HomeLayout = ({children})=>{
    return(
        <>
        <Nav/>
        <div style={{ minHeight:"70vh"}}>{children}</div>
        <Footer/>
        </>
    );
};
export default HomeLayout;