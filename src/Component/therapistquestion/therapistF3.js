import React from "react";
import { PlusOutlined } from '@ant-design/icons';
import {Form,Button,Upload,Select,Card} from 'antd';

const  Form3=()=>{
    return(
      <>
<Card style={{Height:"10rem",width:"70%",margin:"0 auto"}}>
        <h2 style={{textAlign:"center",color:"black"}}>Resume</h2>
        <h3 style={{textAlign:"center",fontSize:"16px"}}>we ask for Resume to Review your work history&experienced</h3>
        <h4 style={{textAlign:"center"}}>please upload your Resume</h4>
        <Upload action="/upload.do" listType="CV-card">
            <div>
              <Button
               style={{marginLeft:"30rem",borderRadius:"20px"}}>
                Upload CV
              </Button>
            </div>
          </Upload>
        <h1 style={{textAlign:"center",fontSize:"16px"}}>please upload a professional photo of yourself for use on your profile</h1>
        <form style={{marginLeft:"30rem"}}>
            {/* <Form.Item label="Upload" valuePropName="fileList"> */}
          <Upload action="/upload.do" listType="picture-card" >
            <div>
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
        {/* </Form.Item> */}
        
        <Button style={{backgroundColor:"blue",marginLeft:"7rem"}}>Submit</Button>
        </form>
        </Card>
        </>   
    )
}
export default Form3;
