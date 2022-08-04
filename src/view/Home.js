import React from "react";
import HomeLayout from "../Component/Homelayout";
import "./Home.css"
import img from "../asset/Images/home2.jpg"


const Home=()=> {
  return (
    <>
      <div className="img"><img src={img} alt="" style={{width:"1079px",backgroundRepeat:"no-repeat",objectFit:"cover",backgroundSize:"cover",backgroundPosition:"center"}}></img></div>
    
    
    </>
   
  );
}

export default Home;