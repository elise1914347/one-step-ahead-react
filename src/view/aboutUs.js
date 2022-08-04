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
      <div className="images"></div>
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

      <Carousel autoplay>
        <Carousel.Item className="anyone">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="anyone">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="anyone">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <p style={{ color: "green", textAlign: "center", fontSize: "20px" }}>
        our Success stories
      </p>
      <div className="our">
        <img src={Success} className="Success" />
        <img src={Successe} className="Success" />
        <img src={Successy} className="Success" />
        </div>
        {/* <br></br><br></br> */}
    <div className="allworld">
      <h1 className="allworld">
        "The biggest achievement I've made is, truly, fighting for myself.
        <br></br>
        Through working with Aiko and taking the time to discuss various issues
        <br></br>
        with her, I've become a bigger advocate for myself, and I'm so proud of
        <br></br>
        that."
      </h1>
      <Button style={{fontSize:"15px",textAlign:"center",float:"right",marginTop:"50px",color:"green",borderRadius:"80px"}} >ReadMore</Button>
      <h2 className="allworld">
        "I have now been working with Sheilah on BetterHelp for about 4 weeks<br></br>
        and can confidently say that I am a lot less anxious about my career
        <br></br>
        path now than when I first signed up...I am so much better off now than
        <br></br>I was before."
      </h2>
      <Button style={{fontSize:"15px",textAlign:"center",float:"right",marginTop:"50px",color:"green",borderRadius:"80px"}}>ReadMore</Button>
      <h3 className="allworld">
        "I am a totally different person now than when I signed up 19 months<br></br>
        ago. I have found my voice and can speak up for myself now....My<br></br>
        confidence level is also better than it ever has been."
      </h3>
      <Button style={{fontSize:"15px",textAlign:"center",float:"right",marginTop:"50px",color:"green",borderRadius:"80px"}}>ReadMore</Button>
      </div>
    </>
  );
};
export default About;
