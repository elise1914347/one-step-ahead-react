import React from "react";
import { Card,Select, Form } from 'antd';


const Question5 =()=>{
    return (
        <>
        <Card style={{width:"30%",height:"70%",marginLeft:"500px",background:"white",borderRadius:"13px"}}>
        <div style={{height:"22rem",fontSize:"17px",width:"34rem"}}>
            <h2>please answer these security question </h2>
            <h4>please note, saving new question will overwrite your previous answers</h4>
            <Form.Item label="select Questions">
          <Select>
            <Select.Option value="C">To what city did you go the firstime you flew on plane</Select.Option>
            <Select.Option value="M">To what city did you go the firstime you flew on plane</Select.Option>
            <Select.Option value="M">To what city did you go the firstime you flew on plane</Select.Option>
            <Select.Option value="P">To what city did you go the firstime you flew on plane</Select.Option>
            <Select.Option value="P">To what city did you go the firstime you flew on plane</Select.Option>
          </Select>
        </Form.Item>
        </div>
        </Card>
        
        </>

    )
}
export default Question5; 