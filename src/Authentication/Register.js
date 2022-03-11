import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Register = (props) => {
  let navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currUser) => {
    setUser(currUser);
  });
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinishRegister = async (values) => {
    setUserName(values.username);
    setPassword(values.password);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.username,
        values.password
      );
      console.log(user);
      navigate("/profile");
    } catch (err) {
      console.log(err.message);
    }
  };

  const onFinishLogin = async (values) => {
    setUserName(values.username);
    setPassword(values.password);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.username,
        values.password
      );
      //console.log(user);
      navigate("/profile");
    } catch (err) {
      console.log(err.message);
    }
  };

  const onClickLogOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div>
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={
            props.action == "register" ? onFinishRegister : onFinishLogin
          }
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
