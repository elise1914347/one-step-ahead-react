import React from "react";
import HomeLayout from "../Component/Homelayout";
import "../Component/Navbar/Navbar.css";
// import photo from "../asset/gu.jpg";
// import logo from "../asset/logo.jpg";
import { Button, Card } from 'antd';
import people from "../asset/yg.jpg";
import { Carousel } from 'antd';


const About = () => {
  return (
    <>

      <div className="images" style={{backgroundColor:"green"}}>
        <div className="nav">
        <ul className="nav-links" style={{marginTop:"397px",marginLeft:"50%",backgroundPosition:"center"}}>
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
            <a  href="Review" className="nav-link btn-link">
              GetStarted
            </a>
          </li>
        </ul>
      </div>
      </div>
      <section>
      <p style={{color:"green",textAlign:"center"}}>our mission</p><br></br>
        <p style={{textAlign:"center"}}>
          Making professional therapy accessible, affordable and convenient so<br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p> <br></br>
        <p style={{color:"green",textAlign:"center",fontSize:"20px"}}>our Therapist</p><br></br>
        <p style={{textAlign:"center"}}>
          Making professional therapy accessible, affordable and convenient so<br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p> <br></br>
      </section>
      <div className="carausel-img">
      <Carousel autoplay> 
      <Card>
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img> 
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img>
        <img src={people} alt="elize" ></img></Card>
  </Carousel> 
  </div> 
  <Button style={{marginLeft:"45%",color:"green"}}>Meet Our Therapist</Button>
  <p style={{color:"green",textAlign:"center",fontSize:"20px"}}>our Success stories</p>
  
     </>
  );
};
export default About;
