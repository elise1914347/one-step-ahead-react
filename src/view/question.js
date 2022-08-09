import { TreeSelect } from 'antd';
import React, { useState } from 'react';
import "./Getstarted.css";
import { Form, Input, InputNumber, Card } from "antd";
const treeData = [
  {
    title: 'under-18',
    value: '0-0',
    children: [
      {
        title: '1-10',
        value: '0-0-1',
      },
      {
        title: '10-15',
        value: '0-0-2',
      },
      {
        title: '15-18',
        value: '0-0-3',
      },
    ],
  },
  {
    title: 'above-18',
    value: '0-1',
    children: [
        {
          title: '18-25',
          value: '0-1-1',
        },
        {
          title: '26-30',
          value: '0-1-2',
        },
        {
          title: '31-above',
          value: '0-1-3',
        },
      ],
  },
];

const Question1 = () => {
  const [value, setValue] = useState();

  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
    <div style={{textAlign:"center",paddingLeft:"25rem",paddingRight:"25rem",gap:"2rem"}}>
        <h1>Help us match you to the <span style={{color:"blueviolet"}}>right therapist</span></h1>
        <p style={{fontSize:"17px"}}>
           Please fill out this short
          questionnaire to provide some background information about you and the
          issues you'd like to deal with in therapy. It would help us match you
          with the most suitable therapist for you. Your answers will also give
          this therapist a good starting point in getting to know you.
        </p>
        </div>
        <card>
          <h5 style={{marginLeft:"70px"}}>How old are you?</h5>
    <TreeSelect
      style={{
        width: '30%',height:"2rem",color:"white",fontSize:"15px",backgroundColor:"blue",borderRadius:"10px",alignContent:"center",marginLeft:"70px"
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select your age"
      treeDefaultExpandAll
      onChange={onChange}
    /></card>
    {/* question 2 */}
    <card>
      <h5 style={{marginLeft:"70px"}}>what is your relationship status?</h5>
    <div className="input">
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >in a relationship</button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >married</button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >divorced</button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >separated</button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >widowed</button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >others</button>
              </Form.Item>
            </div>
            </card>
            {/* question3 */}

            <card>
      <h5 style={{marginLeft:"70px"}}>do you currently live with your partner?</h5>
    <div className="input">
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >yes</button>
              </Form.Item>
              <Form.Item label="">
                <button
                  className="inputB"
                  style={{ fontSize: "15px", color: "white" }}
                >no</button>
              </Form.Item>
            </div>
            </card>
    </>
  );
};

export default Question1;