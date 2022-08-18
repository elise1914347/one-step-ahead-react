import React, { useState } from "react";
import { Form, Input, InputNumber, Card, Carousel } from "antd";
import QuestOne from "../Component/questions/question1";
import QuestTwo from "../Component/questions/question2";
import QuestThree from "../Component/questions/question3";
import QuestFour from "../Component/questions/question4";
import QuestFive from "../Component/questions/question5";
import QuestSix from "../Component/questions/question6";
import QuestSeven from "../Component/questions/question7";
import QuestConfirm from "../Component/questions/questconfirm";
import GetAccount from "../Component/questions/GetAccount";
import Getimage from "../asset/profilepic.webp";
import Getimage2 from "../asset/profilepic_2.jpg";
import "./Getstarted.css";

const IndividualForm = () => {
  const [questIndex, setQuestIndex] = useState(0);
  const questForm = [
    { Quest: <QuestOne /> },
    { Quest: <QuestTwo /> },
    { Quest: <QuestThree /> },
    { Quest: <QuestFour /> },
    { Quest: <QuestFive /> },
    { Quest: <QuestSix /> },
    { Quest: <QuestSeven /> },
    { Quest: <QuestConfirm /> },
    { Quest: <GetAccount /> },
  ];
  return (
    <>
      <div className="bodygetstart">
        <div
          style={{
            textAlign: "center",
            paddingLeft: "25rem",
            paddingRight: "25rem",
            gap: "2rem",
          }}
        >
          <h1 style={{color:"white"}}>
            Help us match you to the{" "}
            <span style={{ color: "yellow" }}>right therapist</span>
          </h1>
          <p style={{ fontSize: "17px",color:"black" }}>
            Please fill out this short questionnaire to provide some background
            information about you and the issues you'd like to deal with in
            therapy. It would help us match you with the most suitable therapist
            for you. Your answers will also give this therapist a good starting
            point in getting to know you.
          </p>
        </div>
        <div
          className="couple"
          style={{ background: "../asset/getstarted-bg.jpg" }}
        >
          <Card classname="couple-card">
            {questForm[questIndex].Quest}
            <Form className="couple-form">
              <div
                className="couple-input"
                style={{ display: "flex", gap: "1rem", marginLeft: "70rem" }}
              >
                <Form.Item label="">
                  <button
                    className="couple-inputB"
                    style={{
                      fontSize: "15px",
                      backgroundColor: "black",
                      color: "white",
                      width: "55px",
                      height: "23px",
                      borderRadius: "10px",
                      textAlign:"center",
                      // padding:"1rem 1rem 1rem 1rem",
                    }}
                    onClick={() => {
                      questIndex > 0 && setQuestIndex(questIndex - 1);
                    }}
                  >
                    Prev
                  </button>
                </Form.Item>
                <Form.Item label="">
                  <button
                    className="couple-inputB"
                    style={{
                      fontSize: "15px",
                      backgroundColor: "black",
                      color: "white",
                      width: "55px",
                      height: "23px",
                      borderRadius: "10px",
                      textAlign:"center",
                      // padding:"1rem 1rem 1rem 1rem",
                    }}
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
      </div>

      <div
        style={{
          align: "center",
          borderTopLeftRadius: "60% 60%",
          padding: "2rem",
          borderTopRightRadius: "60% 60%",
          borderTopColor: "#10103bf7",
          backgroundColor: "#10103bf7",
        }}
      >
        <Carousel autoplay style={{ marginLeft: "35%", marginRight: "25%" }}>
          <div>
            <div style={{ display: "flex", gap: "5rem" }}>
              <img
                src={Getimage}
                style={{ borderRadius: "100%", height: "6rem", width: "6rem" }}
              />
              <div >
                <h5 style={{color:"white"}}>Latest Review For</h5>
                <h4 style={{ color: "yellow" }}>DUSENGE FABIOLA</h4>
              </div>
            </div>
            <div style={{marginTop:"2rem"}}>
              <p style={{ marginLeft: "2rem",color:"white" }}>N.I. wrote 2 days ago</p>
              <p style={{ fontSize: "15px",color:"white"}}>
                My experience have been fulfilling and healing
                <br />I like Jessica she is my therapist but i feel like she is
                my best friend
              </p>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", gap: "5rem" }}>
              <img
                src={Getimage2}
                style={{ borderRadius: "100%", height: "6rem", width: "6rem" }}
              />
              <div >
                <h5 style={{color:"white"}}>Latest Review For</h5>
                <h3 style={{ color: "yellow" }}>Hailla Jack</h3>
              </div>
            </div>
            <div style={{marginTop:"2rem"}}>
              <p style={{ marginLeft: "2rem",color:"white"}}>H.J. wrote 3 days ago</p>
              <p style={{ fontSize: "15px",color:"white"}}>
                My experience have been fulfilling and healing
                <br />I like patric! he has helped me in different aspect of my
                healing and my journey. he is my therapist but i feel like she is my best
                friend
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default IndividualForm;
