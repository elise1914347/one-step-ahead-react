import React from "react";
import "../view/home.css";
import img from "../asset/Images/home2.jpg"

const Home=()=> {
  return (
    <>
      <div className="img">

       <img src={img} style ={{Width:"100%", Height:"100vh"}}></img>
      </div>
    
    
    </>
   
  );
}

export default Home;