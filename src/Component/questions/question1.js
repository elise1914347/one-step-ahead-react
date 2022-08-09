import React from "react"
import { Radio } from 'antd';
const QuestOne =()=>{
    return (
        <div style={{width:"100%",height:"10rem",background:"#06062bf7",color:"white",fontSize:"15px",borderRadius:"10px",width:"34rem",
        textAlign: "center"}}>
            <formItem label="select your gender">
            <Radio.Group>
      <Radio value="w">woman</Radio><br></br>
      <Radio value="m">man</Radio>
    </Radio.Group>
    </formItem>
        </div>
    )
}

export default QuestOne;