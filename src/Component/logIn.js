 import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import Dashboard from "../view/Admin/Dashboard";
import DashLayout from './Admin/DashyLayout';


const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <DashLayout>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
     style={{marginLeft:"1rem",background:"gray",padding:"60px",justifyContent:"center"}}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
       style={{color:"white"}}>
        <Input  style={{borderRadius:"10px"}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  style={{borderRadius:"10px", cursor:"pointer"}}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{background:"gray"}}>
          Submit
        </Button>
        <p style={{marginLeft:"40%",marginTop:"-32.5px"}}>if you have an account<Button style={{background:"blue",color:"white", boxShadow: "0 10px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)"}}>signup</Button></p>
      </Form.Item>
    </Form>
    </DashLayout>
  );
};

export default App;