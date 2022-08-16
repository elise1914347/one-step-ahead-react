import React from "react";
import { Card, Radio } from 'antd';


const Question4 =()=>{
    return (
        <>
        <Card style={{width:"30%",height:"70%",marginLeft:"500px",background:"white",borderRadius:"13px"}}>
        <div style={{width:"100%",height:"22rem",fontSize:"17px",width:"34rem"}}>
            <h4>How did you hear about One-step-ahead</h4>
            <formItem label="where do you currently spend most of your time">
            <Radio.Group>
      <Radio value="p">Internet Research</Radio><br></br>
      <Radio value="R">Other</Radio><br></br>
      <Radio value="C">Email Outreach</Radio><br></br>
      <Radio value="C">Podcast</Radio><br></br>
      <Radio value="C">Mail</Radio><br></br>
    </Radio.Group>
    </formItem>
        </div>
        </Card>
        
        </>

    )
}
export default Question4; 