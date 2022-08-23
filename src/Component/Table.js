import React, { useState } from "react";
import { Space, Table, Tag, Drawer, Modal, notification } from "antd";
import Users from "../asset/Data/user.json";
import DashLayout from "../Component/Admin/DashyLayout";

import SingleUser from "../view/Admin/ViewUser";
// import Dashboardlayout from "../component/Dashboardlayout";

const Tablese = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [userSelected, setuserSelected] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      //  render:(text)=> <a>{text.split("")[0]}</a>,
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "active",
      dataIndex: "isActive",
      key: "isActive",
      render: (text) => (
        <Tag color={text ? "green" : "red"}>{text.toString()}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Activate</a>
          <a
            onClick={() => {
              setuserSelected(record);
              setVisibleModal(true);
            }}
          >
            Update
          </a>
          {/* <a
            onClick={() => {
              setVisibleDrawer(true);
            }}
          >
            views
          </a> */}
        </Space>
      ),
    },
  ];
  return (
    <>
    <DashLayout>
      <Modal
        visible={visibleModal}
        onOK={() => {
          setVisibleModal(false);
          notification.success({
            message: "user has been updated successfully.",
          })
        }}
        onCancel={() => {
          setVisibleModal(false);
          notification.warn({
            message: "you have canceled on your user update",
          })
        }}
      >
        <h2> are you sure you want to update?</h2>
      </Modal>
      <Drawer
        visible={visibleDrawer}
        onClose={() => {
          setVisibleDrawer(false);
        }}
      >
        <SingleUser data={userSelected} />
      </Drawer>
      <Table columns={columns} dataSource={Users}></Table>
      </DashLayout>
    </>
  );
};
export default Tablese;