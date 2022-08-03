import React from "react";
import depression from"../asset/depression.webp";
import stress from "../asset/stress.webp";
import relationship from "../asset/relationship.webp";
import {useNavigate} from "react-router-dom";
import "./Getstarted.css";
import {Form, Input, InputNumber,Card } from "antd";

const GetStarted =()=>{
  const navigate = useNavigate();

  const navigateToForm1 = () => {
    navigate('/couple');
  };
  const navigateToForm2 = () => {
    navigate('/individual');
  };
  const navigateToForm3 = () => {
    navigate('/decide');
  };

return(
  <>
<div className="container">
<Card classname="card">
<Form className="form">
<Form.Item label="would you allow your partern to join?" className="label"></Form.Item>
      <div className="input">
      <Form.Item label="" >
      <button className="inputB" onClick={navigateToForm1}>yes(couples Therapy)</button>
      </Form.Item>
      <Form.Item label="">
      <button className="inputB" onClick={navigateToForm2}>no(Individual Therapy)</button>
      </Form.Item>
      <Form.Item label="">
      <button className="inputB" onClick={navigateToForm3}>Not sure yet(decide later)</button>
      </Form.Item>
      </div>
      <Form.Item label="we'll match you to the Therapist that can help you" className="label"></Form.Item>
    </Form>
</Card>
<div className="image">
  <img src={depression} className="image1"/>
  <img src={stress} className="image1"/>
  <img src={relationship} className="image1"/>
</div>
</div>
</>
)
}
export default GetStarted;