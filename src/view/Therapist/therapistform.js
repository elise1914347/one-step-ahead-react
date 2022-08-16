import React, { useState } from "react";
import { Form,Card } from "antd";
import Question1 from "../../Component/therapistquestion/therapistQ1";
import "../../view/Therapist/therapistsform.css";
import Question2 from "../../Component/therapistquestion/therapistQ2";
import Question3 from "../../Component/therapistquestion/therapistQ3";
import Question4 from "../../Component/therapistquestion/therapistQ4";
import Form1 from "../../Component/therapistquestion/therapistF1";
import Question5 from "../../Component/therapistquestion/therapistQ5";
import Form2 from "../../Component/therapistquestion/therapistF2";

const TherapistForm = () =>{
  const [questionIndex, setQuestionIndex] = useState(0);
  const questionTherapist = [{Q1: <Question1/> }, { Q1: <Question2 /> },{Q1: <Question3/>},{Q1:<Question4/>},{Q1:<Question5/>},{Q1:<Form1/>},{Q1: <Form2/>}];
    return(
        <>
        <div className="formtherapy">
        <div 
        style={{
          textAlign: "center",
          paddingLeft: "25rem",
          paddingRight: "25rem",
          gap: "2rem",
        }}
      >
        <h1>
          Join Therapists who are earning more with One-Step-ahead{" "}
        </h1>
        <p style={{ fontSize: "17px" }}>
          Please fill out this short questions to provide some background
          information about you.
        </p>
      </div>
      <div className="quest">
        <Card classname="card">
          {questionTherapist[questionIndex].Q1}
          <Form className="form">
            <div  style={{display:"flex",marginTop:"1rem",marginLeft:"50rem"}}>
              <Form.Item label="" >
                <button
                  className="form1"
                  style={{ fontSize: "15px", color: "white",width:"200px",background:"rgb(2, 12, 68)",borderRadius:"2rem",textAlign: "center",marginLeft:"1rem"}}
                  onClick={() => {
                    questionIndex < questionTherapist.length &&
                      setQuestionIndex(questionIndex + 1);
                  }}
                >
                  Next
                </button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="form2"
                  style={{ fontSize: "15px", color: "white",width:"200px",background:"rgb(2, 12, 68)",borderRadius:"2rem", marginLeft:"36px"}} 
                  onClick={() => {
                    questionIndex > 0 && setQuestionIndex(questionIndex - 1);
                  }}
                >
                  Prev
                </button>
              </Form.Item>
            </div>
            <Form.Item
              label=""
              className="label"
              style={{ padding: "25px" }}
            ></Form.Item>
          </Form>
        </Card>
      </div>
      </div>
    </>

    )

}
export default TherapistForm;