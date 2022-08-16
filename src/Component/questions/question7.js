import React from "react";
import { Checkbox } from "antd";
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
          <p style={{ color: "black" }}>
            Are there any specific preferences for your therapist?
          </p>
          <Checkbox style={{ fontSize: "18px" }}>Male therapist</Checkbox>
          <br />
          <Checkbox style={{ fontSize: "18px" }}>Female therapist</Checkbox>
          <br />
          <Checkbox style={{ fontSize: "18px" }}>
            Christian-based-therapist
          </Checkbox>
          <br />
          <Checkbox style={{ fontSize: "18px" }}>Old therapist</Checkbox>
          <br />
          <Checkbox style={{ fontSize: "18px" }}>
            Non-religious therapist
          </Checkbox>
          <br />
          <Checkbox style={{ fontSize: "18px" }}>Therapist of color</Checkbox>
        </formItem>
      </Form>
    </div>
  );
};

export default QuestOne;
