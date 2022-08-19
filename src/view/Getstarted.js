
import React from "react";

import depression from "../asset/depression.webp";
import stress from "../asset/stress.webp";
import relationship from "../asset/relationship.webp";
import { useNavigate } from "react-router-dom";
import "./Getstarted.css";
import { Form, Input, InputNumber, Card,Carousel } from "antd";


const GetStarted = () => {
  const navigate = useNavigate();

  const navigateToForm1 = () => {
    navigate("/couple");
  };
  const navigateToForm2 = () => {
    navigate("/individual");
  };
  const navigateToForm3 = () => {
    navigate("/decide");
  };

  return (
    <>
    <div className="bodygetstart1">
      <div style={{textAlign:"center",paddingLeft:"25rem",paddingRight:"25rem",gap:"2rem"}} >
        <h1 style={{color:"black"}} className="right">Help us match you to the <span style={{color:"yellow"}}>right therapist</span></h1>
        <p style={{fontSize:"16px",color:"black",marginTop:"30px"}} className="righte">
           Please fill out this short
          questionnaire to provide some background information about you and the
          issues you'd like to deal with in therapy. It would help us match you
          with the most suitable therapist for you. Your answers will also give
          this therapist a good starting point in getting to know you.
        </p>
      </div>
      <div className="container">
          <Form className="form">
            
            <div className="input">
              <Form.Item label="">
                <button
                  className="inputB"
                  onClick={navigateToForm1}
                  style={{ fontSize: "15px", color: "white" }}
                >
                  yes(couples Therapy)
                </button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  onClick={navigateToForm2}
                  style={{ fontSize: "15px", color: "white" }}
                >
                  no(Individual Therapy)
                </button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  onClick={navigateToForm3}
                  style={{ fontSize: "15px", color: "white" }}
                >
                  Not sure yet(decide later)
                </button> 
              </Form.Item>
            </div>
          </Form>
          <h3  className="thrapi">we'll match you to the Therapist that can help you"</h3>
      </div>
      <div className="disya">
      <Carousel autoplay style={{ marginLeft: "35%", marginRight: "25%" }}>
          <div>
            <div style={{ display: "flex", gap: "5rem" }}>
              <img
                src={stress}
                style={{ borderRadius: "100rem", height: "6rem", width: "6rem" }}
              />
               <h4 style={{ color:"white" }}>Stress</h4>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "5rem" }}>
              <img
                src={relationship}
                style={{ borderRadius: "100%", height: "6rem", width: "6rem" }}
              />
                <h4 style={{ color:"white" }}>Relationship</h4>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", gap: "5rem" }}>
              <img
                src={depression}
                style={{ borderRadius: "100%", height: "6rem", width: "6rem" }}
              />
             <h4 style={{ color:"white" }}>Depression</h4>
            </div>
          </div>
        </Carousel>
        </div>
      </div>
    </>
  );
};
export default GetStarted;
