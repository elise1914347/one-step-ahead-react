import React from "react";
import depression from "../asset/depression.webp";
import stress from "../asset/stress.webp";
import relationship from "../asset/relationship.webp";
import { useNavigate } from "react-router-dom";
import "./Getstarted.css";
import { Form, Input, InputNumber, Card } from "antd";

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
        <h1>Help us match you to the <span style={{color:"blueviolet"}}>right therapist</span></h1>
        <p style={{fontSize:"16px"}}>
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
          <h3>we'll match you to the Therapist that can help you"</h3>
        <div className="image">
          <div>
            <h4 style={{ color:"#06062bf7" }}>Depression</h4>
            <img src={depression} className="image1" />
          </div>
          <div>
            <h4 style={{color:"#06062bf7" }}>Stress</h4>
            <img src={stress} className="image1" />
          </div>
          <div>
            <h4 style={{color:"#06062bf7" }}>Relationship</h4>
            <img src={relationship} className="image1" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default GetStarted;
