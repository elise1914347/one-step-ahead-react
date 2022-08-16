import React from "react";
import { Checkbox } from "antd";
import { Input, Form } from "antd";

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
        <h3>Create your private account</h3>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="Write your name"
            style={{ width: "40rem", borderRadius: "10px" }}
          />
        </Form.Item>
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            placeholder="Enter your Email"
            style={{ width: "40rem", borderRadius: "10px" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="create your Password"
            style={{ width: "40rem", borderRadius: "10px" }}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>
            I agree to the terms and conditions and privacy policy
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <button style={{ marginLeft: "18rem" }}>Get started</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default QuestOne;
