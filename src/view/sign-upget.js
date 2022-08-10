import React from "react";
import { Form, Input,Card, Button,Radio} from 'antd';
const Register =()=>{
    return(
<>
            <Card style={{width:"70%" }}>
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
        <Button style={{background:"gray"}}>Get started</Button>
      </Form.Item>
      </Form>
      </Card>
      
      </>


    )

}

export default Register;