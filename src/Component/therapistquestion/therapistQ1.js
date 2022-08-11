import React from "react";
import { Card, Radio } from 'antd';


const Question1 =()=>{
    return (
        <>
        <Card style={{width:"30%",height:"70%",marginLeft:"500px",background:"white",borderRadius:"13px"}}>
        <div style={{width:"100%",height:"22rem",fontSize:"17px",width:"34rem"}}>
            <h4>where do you currently spend most of your time</h4>
            <formItem label="where do you currently spend most of your time">
            <Radio.Group>
      <Radio value="p">Clinic or Hospital</Radio><br></br>
      <Radio value="R">Private Practice</Radio><br></br>
      <Radio value="C">Community mental health agency</Radio><br></br>
      <Radio value="T">teaching or counseling in academic setting </Radio><br></br>
      <Radio value="O">other clinical setting</Radio><br></br>
      <Radio value="N">not currently practicing</Radio>
    </Radio.Group>
    </formItem>
        </div>
        </Card>
        
        </>

    )
}
export default Question1; 