import React from "react";
import { Form, Input,Card, Button,Radio,Select} from 'antd';
const AskTherapist =()=>{
    return(

            <Card style={{width:"70%" }}>
                <Form>
       <Form.Item label="First-Name">
        <Input  />
      </Form.Item>
      <Form.Item label="Last-Name">
        <Input  />
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
        <Button style={{background:"gray"}}>Request</Button>
      </Form.Item>
      </Form>
      </Card>
      
        


    )

}

export default AskTherapist;