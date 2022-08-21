import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card} from 'antd';
import React from 'react';
import "../Component/Navbar/Navbar.css";

const Login= () => {
  return (
   
    <>

     <div className="requesto">
     <div  style={{width:"45%",marginLeft:"40rem",paddingTop:"100px" }}>
      
     <Card style={{marginLeft:"35%",marginBottom:"100px",left:"40%",bottom:"80px"}}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{marginLeft:"1px",width:"100%"}}>
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
      </Card>

      <Card style={{borderRadius:"50px",fontSize:"2px",textAlign:"center",bottom:"50px",marginLeft:"1px"}}>
        <h1 style={{backgroundColor:"blue"}}>"The future belongs to those who believe in the beauty of their dreams."</h1>
      </Card>
   
      {/* <Card className="yegiiiiry" style={{backgroundColor:"rgb(35, 35, 133)",borderRadius:"60px",marginLeft:"9rem",paddingBottom:"30px"}}>
      <h1 style={{color:"white",fontSize:"20px"}}>"Start by doing what's necessary; <br></br>
        then do what's possible; <br></br>and suddenly you are doing the impossible."<br></br></h1>
    </Card> */}
    </div>

    </div>
   
    </>
  );
};


export default Login;