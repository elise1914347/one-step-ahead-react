import React from "react"
import { Select, Form, Card} from 'antd';
const { Option } = Select;
const QuestOne =()=>{
    return (
        <>
        <div className="request">

        <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem" }}>
       
            <Form>
    <Form.Item label="Type of Therapist">
      <Select>
        <Select.Option value="C">Clinical Social worker</Select.Option>
        <Select.Option value="M">Marriage & Family Therapist</Select.Option>
        <Select.Option value="M">Mental Health Counselor</Select.Option>
        <Select.Option value="P">Professional Counselor</Select.Option>
        <Select.Option value="P">Physcologist</Select.Option>
      </Select>
    </Form.Item>
  </Form>

  </Card>
  </div>

  </>
)

}
export default QuestOne;