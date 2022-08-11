import React from "react";
import { Form, Input,Card} from 'antd';

const Form2 =()=>{
    return(
<>
<div className="form12">
            <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem" }}>
            <h3>Resume and professional background</h3>
            <h6>Professional Background</h6>
            <Form>
       <Form.Item label="Professional School">
        <Input placeholder="Professional School" />
      </Form.Item>
      <Form.Item label="Company name (optional)">
        <Input placeholder="Company name" />
        </Form.Item>
        <Form.Item label="CAQH">
        <Input placeholder="CAQH" />
      </Form.Item>
      </Form>
      </Card>
      </div>
      
      </>


    )

}

export default Form2;