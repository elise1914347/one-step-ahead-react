import React from "react";
import HomeLayout from "../Component/Homelayout";
import "../Component/Navbar/Navbar.css";
import { Button, Card, Col, Row } from "antd";

import Carousel from "react-bootstrap/Carousel";
import Success from "../asset/Images/ryan-success.jpg";
import Successe from "../asset/Images/ghita-success.jpg";
import Successy from "../asset/Images/laura-success.jpg";

const About = () => {
  
  return (
    <>
      <div className="images" style={{ backgroundColor: "green" }}></div>
      <section>
        <p style={{ color: "green", textAlign: "center", fontSize: "20px" }}>
          our mission
        </p>
        <br></br>
        <p style={{ textAlign: "center" }}>
          Making professional therapy accessible, affordable and convenient so
          <br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p>{" "}
        <br></br>
        <p style={{ color: "green", textAlign: "center", fontSize: "20px" }}>
          our Therapist
        </p>
        <br></br>
        <p style={{ textAlign: "center" }}>
          Making professional therapy accessible, affordable and convenient so
          <br></br>
          anyone who trugles with life challenges can get help, anytime and
          anywhere.
        </p>{" "}
        <br></br>
      </section>
      <Button style={{ marginLeft: "45%", color: "green" }}>
        Meet Our Therapist
      </Button>
      <p style={{ textAlign: "center" }}>
        <br></br>
        onestepAhead offers access to licensed, trained, experienced, and
        accredited psychologists (PhD / PsyD), marriage and family therapists
        <br></br>
        (LMFT), clinical social workers (LCSW / LMSW), and board licensed
        professional counselors (LPC).
      </p>
      <br></br>
     
      <Carousel  autoplay>
        <Carousel.Item className="anyone">
          <img
            className="d-block w-100"
            src="https://dy7glz37jgl0b.cloudfront.net/about/counselors/0e0ddf50996ae717b7a67eeb8f651325.jpg?v=966d54b722cb"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="anyone">
          <img
            className="d-block w-100"
            src="https://dy7glz37jgl0b.cloudfront.net/about/counselors/0db4dae3eadbb824e1a72401ec594c1f.jpg?v=966d54b722cb"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="anyone">
          <img
            className="d-block w-100"
            src="https://dy7glz37jgl0b.cloudfront.net/about/counselors/8c6830bb46988faf7ffe0d8facea38e4.jpg?v=966d54b722cb"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <p style={{ color: "green", textAlign: "center", fontSize: "20px" }}>
        our Success stories
      </p>
      <div>
        <img src={Success} className="Success" />
        
        <img src={Successe} className="Success" />
        <img src={Successy} className="Success" />

      </div>
    </>
  );
};
export default About;
