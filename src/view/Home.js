import React from "react";
import img from "../asset/Images/home2.jpg";
import  "../view/Home.css";

const Home = () => {
  return (
    <>
      <div className="Header">
        <img
          src={img}
          alt=""
          style={{
            minHeight: "100vh",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            backgroundImage:
              "linear-gradient(rgba(24, 21, 21, 0.418), rgba(16, 18, 27, 0.7))",
          }}
        />  
           
      </div>
    </>
  );
};

export default Home;
