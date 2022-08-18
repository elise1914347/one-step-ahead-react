import React from "react";
import { Radio, Card } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Select, Form } from "antd";

const QuestOne = () => {
  return (
    <div>
      <Form
        style={{
          alignContent: "center",
          width: "40%",
          margin: "0 auto",
          padding: "2%",
          marginTop: "1rem",
          backgroundColor: "rgb(242, 234, 234)",
        }}
      >
        <formItem>
          <p style={{ color: "black" }}>select your gender</p>
          <Radio.Group>
            <Radio value="w" style={{ color: "black" }}>
              woman
            </Radio>
            <br></br>
            <Radio value="m" style={{ color: "black" }}>
              man
            </Radio>
          </Radio.Group>
          <Card
            style={{
              backgroundColor: "rgb(206, 169, 240)",
              marginTop: "5rem",
              padding: "0px",
              height: "10rem",
            }}
          >
            <p>
              <InfoCircleOutlined style={{ fontSize: "25px" }} /> Let's walk
              through the process of finding the best therapist for you! we'll
              start off with some basic questions
            </p>
          </Card>
        </formItem>
      </Form>
    </div>
  );
};

export default QuestOne;
