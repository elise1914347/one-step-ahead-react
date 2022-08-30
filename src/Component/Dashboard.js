import React, { useState } from "react";
import "antd/dist/antd.css";
// import Graph from '../views/DashBoard/Graph'
// import "./DashLayout.css";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu  } from "antd";
import { useNavigate } from "react-router-dom";


const { Header, Sider, Content } = Layout;

const Dashboard = ({ children }) => {
  const navigate= useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>  
      <Sider trigger={null} collapsedWidth={0}
  collapsible collapsed={collapsed}>
        
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;