import React, { useState } from "react";
import { Modal, Button } from "antd";
import Register from "../Authentication/Register";
export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div style={{margin:'5px',borderRadius:'15px'}}>
        <Button type="primary" onClick={showModal}>
          Register
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Register action='register' />
        </Modal>
      </div>
      <div style={{margin:'5px',borderRadius:'15px'}}>
        <Button type="primary" onClick={showModal}>
          Login
        </Button>
        <Modal
          title="Basic Modal"
          animation={false}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Register action='login' />
        </Modal>
      </div>
    </div>
  );
}
