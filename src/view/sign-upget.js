import React from "react";
import { Form, Input,Card, Button,Radio} from 'antd';
import "../Component/Navbar/Navbar.css";


const Register =()=>{
    return(
<>

<div className="getstart">
            <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem" }}>
                <Form>
       <Form.Item label="First-Name">
        <Input  />
      </Form.Item>
      <Form.Item label="Last-Name">
        <Input  />
        </Form.Item>
        <Form.Item label="Email">
        <Input  />
      </Form.Item>
      <Form.Item label="Password">
        <Input  />
      </Form.Item>
      <Form.Item label="Confirm Password">
        <Input  />
      </Form.Item>
      <Form.Item label="Gender">
          <Radio.Group>
            <Radio value="apple"> Female </Radio>
            <Radio value="pear"> Male </Radio>
            <Radio value="pear"> Others </Radio>
          </Radio.Group>
        </Form.Item>
     
      <Form.Item >
        <Button style={{background:"rgb(2, 12, 68)",color:"white"}}>Get started</Button>
      </Form.Item>
      </Form>
      </Card>
      </div>
      </>


    )

}

export default Register;