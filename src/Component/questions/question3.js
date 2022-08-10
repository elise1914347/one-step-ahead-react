import React from "react"
import { Select, Form, Card} from 'antd';
const { Option } = Select;
const QuestOne =()=>{
    return (
        <>
        <div className="request">

        <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem", backgroundColor:"rgb(82, 82, 111)"}}>
       
            <Form>
    <Form.Item label="what is your relationship status?">
      <Select>
        <Select.Option value="C">in a relationship</Select.Option>
        <Select.Option value="M">married</Select.Option>
        <Select.Option value="M">separated</Select.Option>
        <Select.Option value="P">divorced</Select.Option>
        <Select.Option value="P">widowed</Select.Option>
        <Select.Option value="P">single</Select.Option>
        <Select.Option value="P">others</Select.Option>
      </Select>
    </Form.Item>
  </Form>

  </Card>
  </div>

  </>
)

}
export default QuestOne;