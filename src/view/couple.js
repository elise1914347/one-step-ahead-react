import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, InputNumber, Card } from "antd";
import QuestOne from "../Component/questions/question1";
import QuestTwo from "../Component/questions/question2";
import "./Getstarted.css";

const CoupleForm = () => {
  const [questIndex, setQuestIndex] = useState(0);
  const questForm = [{ Quest: <QuestOne /> }, { Quest: <QuestTwo /> }];
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
      <div className="container">
        <Card classname="card">
          {questForm[questIndex].Quest}
          <Form className="form">
            <Form.Item
              label="would you allow your partern to join?"
              className="label"
            ></Form.Item>
            <div className="input">
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                  onClick={() => {
                    questIndex < questForm.length &&
                      setQuestIndex(questIndex + 1);
                  }}
                >
                  Next
                </button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                  onClick={() => {
                    questIndex > 0 && setQuestIndex(questIndex - 1);
                  }}
                >
                  Prev
                </button>
              </Form.Item>
            </div>
            <Form.Item
              label="we'll match you to the Therapist that can help you"
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
