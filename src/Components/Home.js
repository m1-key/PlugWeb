import React, { useState } from "react";
import { Modal, Button } from "antd";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleLogin, setIsModalVisibleLogin] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModalLogin = () => {
    setIsModalVisibleLogin(true);
  };
  const handleCancelLogin = () => {
    setIsModalVisibleLogin(false);
  };
  return (
    <div>
      <div style={{ margin: "5px", borderRadius: "15px" }}>
        <Button type="primary" onClick={showModal}>
          Register
        </Button>
        <Modal
          title="Register"
          visible={isModalVisible}
          //onOk={handleOk}
          onCancel={handleCancel}
        >
          <Register />
        </Modal>
      </div>
      <div style={{ margin: "5px", borderRadius: "15px" }}>
        <Button type="primary" onClick={showModalLogin}>
          Login
        </Button>
        <Modal
          title="Login"
          animation={false}
          visible={isModalVisibleLogin}
          //onOk={handleOk}
          onCancel={handleCancelLogin}
        >
          <Login />
        </Modal>
      </div>
    </div>
  );
}
