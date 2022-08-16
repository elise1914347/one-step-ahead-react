import React from "react";
import { Select, Form, Card } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
const { Option } = Select;
const QuestOne = () => {
  return (
    <>
      <div>
        <Card
          style={{
            width: "40%",
            margin: "0 auto",
            paddingTop: "5rem",
            marginTop: "1rem",
            backgroundColor: "rgb(242, 234, 234)",
          }}
        >
          <Form>
            <Form.Item>
              <p>which religion do you identify with?</p>
              <Select
                placeholder="which religion do you identify with?"
                style={{ color: "black", fontStyle: "bold" }}
              >
                <Select.Option value="C">Christianity</Select.Option>
                <Select.Option value="M">Judaism</Select.Option>
                <Select.Option value="M">Islam</Select.Option>
                <Select.Option value="P">Others</Select.Option>
              </Select>
            </Form.Item>
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
                Therapist on one step ahead platform have diverse
                background.you'll be able to request a Christian therapist if
                needed.
              </p>
            </Card>
          </Form>
        </Card>
      </div>
    </>
  );
};
export default QuestOne;
