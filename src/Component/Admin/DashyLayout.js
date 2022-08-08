import React, { useState } from "react";
import "antd/dist/antd.css";
import "./DashyLayout.css"

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

const DashLayout = ({ children }) => {
  const navigate= useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsedWidth={0} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            
  
            {
              key: "1",
              icon: <UserOutlined onClick={()=>navigate("/One")}/>,
              label: <h4 onClick={()=>navigate("/signup")} style={{color:"white"}}>signup-user</h4>
            },
            {
              key: "2",
              icon: <VideoCameraOutlined  onClick={()=>navigate("/User")}/>,
              label: <h4 onClick={()=>navigate("/admin")} style={{color:"white"}}>login</h4>
            },
            {
              
              key: "3",
             icon: <UploadOutlined onClick={()=>navigate("/Therapist")}/>,
              label:<h4 onClick={()=>navigate("/request")} style={{color:"white"}}>Request-Therapist</h4>
            },
            {
              
              key: "3",
              icon: <UploadOutlined onClick={()=>navigate("/Therapist")}/>,
              label:<h4 onClick={()=>navigate("/register")} style={{color:"white"}}>Register-Therapist</h4>
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
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
export default DashLayout;