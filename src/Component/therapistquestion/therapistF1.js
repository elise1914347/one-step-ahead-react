import React from "react";
import { Form, Input,Card, Select, Button} from 'antd';

const Form1 =()=>{
    return(
<>
<div className="form11">
            <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem" }}>
            <h3>Finally, please provide your name,email address, and the primary state you're licensed in.</h3>
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
      <Form.Item label="state where you are licensed">
          <Select>
            <Select.Option value="C">Rwanda</Select.Option>
            <Select.Option value="M">Kenya</Select.Option>
            <Select.Option value="M">Tanzania</Select.Option>
            <Select.Option value="P">Uganda</Select.Option>
            <Select.Option value="P">Burundi</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item >
        <Button style={{background:"rgb(2, 12, 68)",color:"white", width:"20%"}}>Next</Button>
      </Form.Item>
      </Form>
      </Card>
      </div>
      
      </>


    )

}

export default Form1;