import { LockOutlined, UserOutlined,FacebookOutlined,GoogleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card,Carousel} from 'antd';
import React from 'react';
import "../Component/Navbar/Navbar.css"



const Login= () => {
  return (
   
    <>

     <div className="requesto">
     <div  style={{width:"45%",paddingTop:"100px" }}>
     <Card style={{marginBottom:"100px",left:"40rem",bottom:"5rem"}}>
       <h1 style={{marginLeft:"40%",color:"black"}}>Login</h1>
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
        <p style={{paddingTop:"30px"}}>Need An account ?</p>
      <a href="/signup" style={{fontSize:"15px",color:"blue"}}>SignUp</a>
      </Form.Item>
      </Card>
    </div>
    </div>
    </>
  );
};


export default Login;