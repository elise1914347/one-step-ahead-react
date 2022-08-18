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
          <p style={{ color: "black" }}>
            would you like to be matched with a therapist who provides
            Christian-based-therapist
          </p>
          <Radio.Group>
            <Radio value="w" style={{ color: "black" }}>
              Yes
            </Radio>
            <br></br>
            <Radio value="m" style={{ color: "black" }}>
              no
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
              <InfoCircleOutlined style={{ fontSize: "25px" }} />
              <b>Did you know?</b>
              <br />
              most of people in africa experience depression.(Geriatric Mental
              Health Foundation, 2008)
            </p>
          </Card>
        </formItem>
      </Form>
    </div>
  );
};

export default QuestOne;
