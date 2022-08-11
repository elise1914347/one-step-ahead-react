import React, { useState } from "react";
import { Form, Input, InputNumber, Card } from "antd";
import QuestOne from "../Component/questions/question1";
import QuestTwo from "../Component/questions/question2";
import QuestThree from "../Component/questions/question3";

const CoupleForm = () => {
  const [questIndex, setQuestIndex] = useState(0);
  const questForm = [{ Quest: <QuestOne /> }, { Quest: <QuestTwo /> },{Quest: <QuestThree />}];
  return (
    <>
      <div
        style={{
          textAlign: "center",
          paddingLeft: "25rem",
          paddingRight: "25rem",
          gap: "2rem",
        }}
      >
        <h1>
          Help us match you to the{" "}
          <span style={{ color: "blueviolet" }}>right therapist</span>
        </h1>
        <p style={{ fontSize: "17px" }}>
          Please fill out this short questionnaire to provide some background
          information about you and the issues you'd like to deal with in
          therapy. It would help us match you with the most suitable therapist
          for you. Your answers will also give this therapist a good starting
          point in getting to know you.
        </p>
      </div>
      <div className="couple" style={{background:"../asset/getstarted-bg.jpg"}}>
        <Card classname="couple-card">
          {questForm[questIndex].Quest}
          <Form className="couple-form">
            <div className="couple-input" style={{display:"flex",gap:"1rem", marginLeft:"70rem"}}>
              
            <Form.Item label="">
                <button
                  className="couple-inputB"
                  style={{ fontSize: "12px",backgroundColor:"#06062bf7",color: "white",width:"50px",height:"20px",textAlign:"center",borderRadius:"10px"}}
                  onClick={() => {questIndex > 0 && setQuestIndex(questIndex - 1);
                  }}
                >
                  Prev
                </button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="couple-inputB"
                  style={{ fontSize: "12px",backgroundColor:"#06062bf7",color: "white",width:"50px",height:"20px",textAlign:"center",borderRadius:"10px"}}
                  onClick={() => {
                    questIndex < questForm.length &&
                      setQuestIndex(questIndex + 1);
                  }}
                >
                  Next
                </button>
              </Form.Item>
            </div>
            <Form.Item
              className="label"
              style={{ padding: "25px" }}
            ></Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};
export default CoupleForm;
