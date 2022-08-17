import React from "react";
import { PlusOutlined } from '@ant-design/icons';
import {Form,Button,Upload,Select,Card,Input} from 'antd';
import "../Component/Navbar/Navbar.css"

const AploadStory=()=>{
    const { TextArea } = Input;
    return(
        <>
        <div style={{paddingTop:"80px"}}>
            <Form.Item label="upload" >
        <Upload action="/upload.do" listType="picture-card"  style={{}}>
        <div >
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,    
            }}
          >
            Upload Photo
          </div>
        </div>
      </Upload>
      </Form.Item>
      <Form.Item label="Your Story">
          <TextArea rows={4} />
        </Form.Item>
        <Button style={{marginLeft:"15rem"}}>Post</Button>
        </div>
      </>
    )
}
export default AploadStory;