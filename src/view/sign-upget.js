import React, {useEffect} from "react";
import { Form, Input,Card, Button,Radio} from 'antd';
import "../Component/Navbar/Navbar.css";
import TherapistServices from "../services/TherapistServices";


const Register =()=>{
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
    const onFinish = async(values) => {
      console.log("mySignUp")
      console.log('Success:', values);
      const TherapistObj = {
        ...values,
        
      };
      console.log("Received values of form: ", values);
  
      console.log("Therapist: ", TherapistObj);
  
      const res =  await TherapistServices.createTherapist(TherapistObj);
  
      console.group("<<<<<<<<:",res)
    };

    return(
<>
<Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
<div className="getstart">
            <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem" }}>       
       <Form.Item label="First-Name" name="firstName">
        <Input  />
      </Form.Item>
      <Form.Item label="Last-Name" name="lastName">
        <Input  />
        </Form.Item>
        <Form.Item label="Email" name="email">
        <Input  />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input  />
      </Form.Item>
      <Form.Item label="Confirm Password" name="confirmpassword">
        <Input  />
      </Form.Item>
      <Form.Item label="Gender" name="gender">
          <Radio.Group>
            <Radio value="female"> Female </Radio>
            <Radio value="male"> Male </Radio>
            <Radio value="others"> Others </Radio>
          </Radio.Group>
        </Form.Item>
     
      <Form.Item >
        <Form.Item label="age" name="age">
          <Input />
        </Form.Item>
        <Form.Item label="phone" name="phone">
          <Input/>
        </Form.Item>
        <Button htmlType="submit" style={{background:"rgb(2, 12, 68)",color:"white"}}>Get started</Button>
      </Form.Item>
      </Card>
      </div>
      </Form>
      </>
    )
}
export default Register;