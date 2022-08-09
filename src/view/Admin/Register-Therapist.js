import React from "react";
import DashLayout from "../../Component/Admin/DashyLayout";
import { Form, Input,Card, Button,Select,Upload,Checkbox} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const RegisterTherapist=()=>{
    return(
<DashLayout>
            <Card style={{width:"70%" }}>
                <h4> Thank you for your interest please create your Therapist account so we can start processing your application</h4><b></b>
                <Form>
       <Form.Item label="First-Name">
        <Input  />
      </Form.Item>
      <Form.Item label="Last-Name">
        <Input  />
        </Form.Item>
        <Form.Item label="Email address">
        <Input  />
      </Form.Item>
      <Form.Item label="Create password">
        <Input  />
      </Form.Item>
      <Form.Item label="repeate password">
        <Input  />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input  />
      </Form.Item>
        <Form.Item label="state where your licenstenced">
          <Select>
            <Select.Option value="C">Rwanda</Select.Option>
            <Select.Option value="M">Kenya</Select.Option>
            <Select.Option value="M">Uganda</Select.Option>
            <Select.Option value="P">Tanzania</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="Country where you reside">
          <Select>
            <Select.Option value="C">Rwanda</Select.Option>
            <Select.Option value="M">Kenya</Select.Option>
            <Select.Option value="M">Uganda</Select.Option>
            <Select.Option value="P">Tanzania</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Your Profile" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item name="remeber " valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>I agree to One-step-ahead Terms and Condition and data processing agreement</Checkbox>
      </Form.Item>
      <Form.Item label="licence number">
        <Input placeholder="For example, Rwanda LMFT 123456" />
        </Form.Item>
     
      <Form.Item >
        <Button style={{background:"gray"}}>Register</Button>
      </Form.Item>
      </Form>
      </Card>
      </DashLayout>


    )

}

export default RegisterTherapist;