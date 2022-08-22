import { LockOutlined, UserOutlined,FacebookOutlined,GoogleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card,Carousel} from 'antd';
import React from 'react';
import "../Component/Navbar/Navbar.css"
import Loginphto from "../asset/Images/undraw_Mobile_login_re_9ntv.png";
import Getimage from "../asset/profilepic.webp";
import Getimage2 from "../asset/profilepic_2.jpg";
import Lge from "../asset/Images/loginPage.png.png";


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
        <Button type="primary" htmlType="submit" className="login-form-button" style={{marginLeft:"1px",width:"100%"}}>
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
      {/* <img src={Loginphto} alt="" className="logn"></img> */}
      </Card>
      {/* <Card className="yegiiiiry" style={{backgroundColor:"rgb(35, 35, 133)",borderRadius:"60px",marginLeft:"9rem",paddingBottom:"30px"}}>
      <h1 style={{color:"white",fontSize:"20px"}}>"Start by doing what's necessary; <br></br>
        then do what's possible; <br></br>and suddenly you are doing the impossible."<br></br></h1>
    </Card> */}
    </div>
    

    </div>
    {/* <div className="lginra">
    <Carousel autoplay style={{ marginLeft: "35%", marginRight: "25%" }} >
          <div>
            <div style={{ display: "flex", gap: "5rem" }}>
              <img
                src={Getimage}
                style={{ borderRadius: "100%", height: "6rem", width: "6rem" }}
              />
              <div >
                <h5 style={{color:"black"}}>Latest Review For</h5>
                <h4 style={{ color: "yellow" }}>DUSENGE FABIOLA</h4>
              </div>
            </div>
            <div style={{marginTop:"2rem"}}>
              <p style={{ marginLeft: "2rem",color:"black" }}>N.I. wrote 2 days ago</p>
              <p style={{ fontSize: "15px",color:"black"}}>
                My experience have been fulfilling and healing
                <br />I like Jessica she is my therapist but i feel like she is
                my best friend
              </p>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", gap: "5rem" }}>
              <img
                src={Getimage2}
                style={{ borderRadius: "100%", height: "6rem", width: "6rem" }}
              />
              <div >
                <h5 style={{color:"black"}}>Latest Review For</h5>
                <h3 style={{ color: "yellow" }}>Hailla Jack</h3>
              </div>
            </div>
            <div style={{marginTop:"2rem"}}>
              <p style={{ marginLeft: "2rem",color:"black"}}>H.J. wrote 3 days ago</p>
              <p style={{ fontSize: "15px",color:"black"}}>
                My experience have been fulfilling and healing
                <br />I like patric! he has helped me in different aspect of my
                healing and my journey. he is my therapist but i feel like she is my best
                friend
              </p>
            </div>
          </div>
        </Carousel>
        </div> */}
     
   
    </>
  );
};


export default Login;