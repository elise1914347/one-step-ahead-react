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
              <p>what is your relationship status?</p>
              <Select placeholder="what is your relationship status?">
                <Select.Option value="C">in a relationship</Select.Option>
                <Select.Option value="M">married</Select.Option>
                <Select.Option value="M">separated</Select.Option>
                <Select.Option value="P">divorced</Select.Option>
                <Select.Option value="P">widowed</Select.Option>
                <Select.Option value="P">single</Select.Option>
                <Select.Option value="P">others</Select.Option>
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
                <b>Did you know?</b>
                <br />
                most of people in africa experience depression.(Geriatric Mental
                Health Foundation, 2008)
              </p>
            </Card>
          </Form>
        </Card>
      </div>
    </>
  );
};
export default QuestOne;
