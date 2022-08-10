import React from "react"
import { Radio } from 'antd';
import { Select, Form, Card} from 'antd';

const QuestOne =()=>{
    return (
        <div>
            <Card  style={{width:"40%",margin:"0 auto",padding:"5%",marginTop:"1rem", backgroundColor:"rgb(82, 82, 111)"}}>
            <Form style={{alignContent:"center"}}>
            <formItem label="select your gender">
            <Radio.Group >
      <Radio value="w">woman</Radio><br></br>
      <Radio value="m">man</Radio>
    </Radio.Group>
    </formItem>
    </Form>
    </Card>
        </div>
    )
}

export default QuestOne;