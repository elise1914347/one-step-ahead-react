
import React,{ useState,useEffect} from "react";

import depression from "../asset/depression.webp";
import stress from "../asset/stress.webp";
import relationship from "../asset/relationship.webp";
import { useNavigate } from "react-router-dom";
import "./Getstarted.css";
import { Form, Input, InputNumber, Card,Carousel,Typography,Image,Space } from "antd";
import TherapistServices from "../services/TherapistServices";
// import Therapist from "../asset/Data/therapist.json";

const {Text,Title}=Typography


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
  const [Therapist,setTherapist]=useState([])
  useEffect(()=>{
    TherapistServices.getAllTherapist().then((res)=>
    {   
        setTherapist(res?.data)
});
    },[])
  return (
    <>
    <div className="bodygetstart1">
      <div style={{textAlign:"center",paddingLeft:"25rem",paddingRight:"25rem",gap:"2rem"}} >
        <h1 style={{color:"black"}} className="right">Help us match you to the <span style={{color:"yellow"}}>right therapist</span></h1>
        {/* <p style={{fontSize:"16px",color:"black",marginTop:"30px"}} className="righte">
           {/* Please fill out this short
          questionnaire to provide some background information about you and the
          issues you'd like to deal with in therapy. It would help us match you
          with the most suitable therapist for you. Your answers will also give
          this therapist a good starting point in getting to know you.
        </p> */} 
        <marquee width="60%" direction="up" height="100px" style={{color:"black",fontSize:"20px"}}>
        questionnaire to provide some background information about you and the
          issues you'd like to deal with in therapy. It would help us match you
          with the most suitable therapist for you. Your answers will also give
          this therapist a good starting point in getting to know you.
</marquee>

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
          <marquee class="blink" style={{fontSize:"20px"}}>we'll match you to the Therapist that can help you"</marquee>
      </div>
      <div className="disya">
      <Carousel autoplay>
             {Therapist.map((Therapist)=>(
                        <Space direction="vertical">
                            {/* <Image preview={true} src={Therapist?.picture[6]} /> */}
                            <Title level={4} style={{color:"brack"}}>
                                {Therapist?.lastName.toUpperCase()}
                                </Title>
              
                                <Text type="secondary" style={{color:"white",fontSize:"15px"}} italic>{Therapist?.description}</Text>
                                
                        </Space>
                    
                    )) }
        </Carousel>
          
        </div>
      </div>
    </>
  );
};
export default GetStarted;
