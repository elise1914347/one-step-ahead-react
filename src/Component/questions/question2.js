import React from "react"
import { Select, Form, Card} from 'antd';
const { Option } = Select;
const QuestOne =()=>{
    return (
        <>
        <div className="request">

        <Card style={{width:"40%",margin:"0 auto",paddingTop:"5rem",marginTop:"1rem", backgroundColor:"rgb(82, 82, 111)"}}>
       
            <Form>
    <Form.Item label="select your age">
      <Select>
        <Select.Option value="C">1</Select.Option>
        <Select.Option value="M">2</Select.Option>
        <Select.Option value="M">3</Select.Option>
        <Select.Option value="P">4</Select.Option>
        <Select.Option value="P">5</Select.Option>
        <Select.Option value="P">6</Select.Option>
        <Select.Option value="P">7</Select.Option>
        <Select.Option value="P">8</Select.Option>
        <Select.Option value="P">9</Select.Option>
        <Select.Option value="P">10</Select.Option>
      </Select>
    </Form.Item>
  </Form>

  </Card>
  </div>

  </>
)

}
export default QuestOne;