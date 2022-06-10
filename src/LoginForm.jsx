import { Checkbox, Form, Input } from "antd";
import React from "react";
import { PrimaryButton } from "./Button";
import "./css/LoginForm.css";

export default function LoginForm() {
  // Styles
  const size = "large";

  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Received values of form");
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);

      let data = {
        email: values.email,
        password: values.password,
      };

      const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify( data ),
        });

       data = await response.json();

       if (data.hasOwnProperty("token")) {
        alert("Login successful")
        console.log(data.token);
       } 
       else if (data.hasOwnProperty("error")) {
        alert(data.error);
        throw new Error(data.error)
       }

    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <Form
      form={form}
      name="login-form"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input type="email" placeholder="Email Address *" size={size} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input type="password" placeholder="Password *" size={size} />
      </Form.Item>

      <Form.Item>
        <PrimaryButton
          text="Login"
          htmlType="submit"
          className="login-form-button"
          onClick={onCheck}
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember password</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="#">
          Forgot password?
        </a>
      </Form.Item>
    </Form>
  );
}
