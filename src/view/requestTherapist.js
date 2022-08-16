import React from "react";
import { Form, Input,Card, Button,Radio,Select} from 'antd';
import "../Component/Navbar/Navbar.css";
const AskTherapist =()=>{
    return(
      <>
       <div className="request">

            <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem" }}>
           
                <Form>
                  
       <Form.Item label="First-Name">
        <Input  />
      </Form.Item>
      <Form.Item label="Last-Name">
        <Input  />
        </Form.Item>
        <Form.Item label="Email">
        <Input   />
      </Form.Item>
        <Form.Item label="Location">
        <Input  />
      </Form.Item>
      <Form.Item label="Status">
          <Radio.Group>
            <Radio value="S"> Single</Radio>
            <Radio value="M"> Married </Radio>
            <Radio value="T"> Teen </Radio>
          </Radio.Group>
        </Form.Item>
      <Form.Item label="Gender">
          <Radio.Group>
            <Radio value="F"> Female </Radio>
            <Radio value="F"> Male </Radio>
            <Radio value="F"> Others </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Type of Therapist">
          <Select>
            <Select.Option value="C">Clinical Social worker</Select.Option>
            <Select.Option value="M">Marriage & Family Therapist</Select.Option>
            <Select.Option value="M">Mental Health Counselor</Select.Option>
            <Select.Option value="P">Professional Counselor</Select.Option>
            <Select.Option value="P">Physcologist</Select.Option>
          </Select>
        </Form.Item>
     
      <Form.Item >
        <Button style={{background:"rgb(2, 12, 68)",color:"white"}}>Request</Button>
      </Form.Item>
      </Form>

      </Card>
      </div>
    
      </>


    )

}

export default AskTherapist;