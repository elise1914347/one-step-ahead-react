import React from "react";
import { Card, Radio } from 'antd';


const Question2 =()=>{
    return (
        <>
        <Card style={{width:"30%",height:"70%",marginLeft:"500px",background:"white",borderRadius:"13px"}}>
        <div style={{width:"100%",height:"22rem",fontSize:"17px",width:"34rem"}}>
            <h4>How much of your time is currently spent on administrative and/or billing related tasks?</h4>
            <formItem label="where do you currently spend most of your time">
            <Radio.Group>
      <Radio value="p">up to 10% of my time</Radio><br></br>
      <Radio value="R">10 to 30% of my time</Radio><br></br>
      <Radio value="C">more than 30% of my time</Radio><br></br>
    </Radio.Group>
    </formItem>
        </div>
        </Card>
        
        </>

    )
}
export default Question2; 