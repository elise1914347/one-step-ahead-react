import React from "react";
import "./contact.css";
import { Card} from "antd";
import { Button, Form, Input, InputNumber } from 'antd';

const Contact = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="contact">
        <h1 className="ct">ContactUs</h1>
      </div>
     
      <h2 style={{color:"black",fontSize:"10px",marginLeft:"8%"}}>
        Do you have a question, concern, idea, feedback, or problem? Take a look
        at our frequently asked questions for some quick answers. If you still<br></br>
        need assistance, please fill out the form below and we'd be happy to
        help!
      </h2>
      <div className="cnts">
      <h3 style={{marginLeft:"5%"}}>Type of contact</h3>
      <div className="questions">
      <input type="radio" value="" name=""/> I am a registered client and I need support.
      <br></br>
      <input type="radio" value="" name="" /> I am a current onestepAhead therapist and I need support.
      <br></br>
      <input type="radio" value="" name="" /> I am a therapist interested in joining or a current applicant.
      <br></br>
      <input type="radio" value="" name="" /> I have a question about the service.
      <br></br>
      <input type="radio" value="" name="" />I have a billing related question.
      <br></br>
      <input type="radio" value="" name="" />I have a business-related inquiry.
      <br></br>
      <input type="radio" value="" name="" />I'm interested in onestepAhead for my organization.
      </div>

      
      <div className="formLabe">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <h1 style={{fontSize:"15px",marginLeft:"15rem",marginTop:"10px",color:"white"}}>FirstName</h1>
        <Input style={{width:"30rem",marginLeft:"40px"}} />
        <br></br>
      <h2 style={{fontSize:"15px",marginLeft:"15rem",marginTop:"10px",color:"white"}}>LastName</h2>
        <Input  style={{width:"30rem",marginLeft:"40px"}}/>
        <h3 style={{fontSize:"15px",marginLeft:"15rem",marginTop:"10px",color:"white"}}>Message</h3>
        <Input style={{width:"30rem",marginLeft:"40px"}}></Input>
        
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button style={{marginLeft:"1.5px",marginTop:"10px",backgroundColor:"white"}} >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>


    </>
  );
};
export default Contact;
