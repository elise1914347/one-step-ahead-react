import React from "react";
import { Form } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

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
        <h1>
          <CheckCircleOutlined style={{ fontSize: "25px" }} />
          you've completed the questionaire
        </h1>
      </Form>
    </div>
  );
};

export default QuestOne;
