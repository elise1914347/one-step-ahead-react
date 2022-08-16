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
              <p>select your age</p>
              <Select
                placeholder="select your age"
              >
                <Select.Option value="C">1</Select.Option>
                <Select.Option value="M">2</Select.Option>
                <Select.Option value="M">3</Select.Option>
                <Select.Option value="P">4</Select.Option>
                <Select.Option value="P">5</Select.Option>
                <Select.Option value="P">6</Select.Option>
                <Select.Option value="P">7</Select.Option>
                <Select.Option value="P">8</Select.Option>
                <Select.Option value="P">9</Select.Option>
                <Select.Option value="P">10</Select.Option>
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
