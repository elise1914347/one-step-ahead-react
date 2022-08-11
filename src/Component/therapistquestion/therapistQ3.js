import React from "react";
import { Card, Radio } from 'antd';


const Question3 =()=>{
    return (
        <>
        <Card style={{width:"30%",height:"70%",marginLeft:"500px",background:"white",borderRadius:"13px"}}>
        <div style={{width:"100%",height:"22rem",fontSize:"17px",width:"34rem"}}>
            <h4>What makes you most interested in One-Step-ahead</h4>
            <formItem label="where do you currently spend most of your time">
            <Radio.Group>
      <Radio value="p">to build my own private practice</Radio><br></br>
      <Radio value="R">to supplement my private practice</Radio><br></br>
      <Radio value="C">to supplement my full-time job</Radio><br></br>
      <Radio value="C">to supplement my part-time job</Radio><br></br>
      <Radio value="C">other</Radio><br></br>
    </Radio.Group>
    </formItem>
        </div>
        </Card>
        
        </>

    )
}
export default Question3; 