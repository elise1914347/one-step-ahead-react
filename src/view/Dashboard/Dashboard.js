
import React from "react";
// import Widgets from "../../component/widget";
import DashLayout from "../../Component/Admin/DashyLayout";
import Widgets from "../../Component/Widget/Widjet";
import Graph from './Graph'
import Chart from './Chart'
import Card from "antd/lib/card/Card";
// import '../../views/DashBoard/Chart'

const  Dashboard=()=>{

  return (
    <>
      <DashLayout>
        <div className="Widgets">
          <Widgets type="User"/>
          <Widgets type="TOTALBOOKED"/>
          <Widgets type="INCOME"/>
          <div  style={{display:"flex"}}>
          <Graph></Graph>
          <Chart></Chart></div>
        </div>
      </DashLayout>
      </>
  )
};
export default  Dashboard;