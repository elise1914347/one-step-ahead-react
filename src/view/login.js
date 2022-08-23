import { LockOutlined, UserOutlined,FacebookOutlined,GoogleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card,Carousel} from 'antd';
import React from 'react';
import "../Component/Navbar/Navbar.css"
import Loginphto from "../asset/Images/undraw_Mobile_login_re_9ntv.png";
import Getimage from "../asset/profilepic.webp";
import Getimage2 from "../asset/profilepic_2.jpg";
import Lge from "../asset/Images/loginPage.png.png";
import SignUp from "../view/sign-upget";


const Login= () => {
  return (
   
    <>

     <div className="requesto">
     <div  style={{width:"45%",paddingTop:"100px" }}>
   
      
     <Card style={{marginBottom:"100px",left:"30rem",bottom:"9rem"}}>
       <img src={Lge} alt="" className="pagi"></img>
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
        <a href="/signup" style={{color:"white", fontSize:"20px",marginLeft:"60%",background:"black"}}>SignUp</a>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{marginLeft:"1px",width:"100%"}}>
          Log in
        </Button>
      </Form.Item>
      </Card>
    </div>
    </div>
    </>
  );
};


export default Login;