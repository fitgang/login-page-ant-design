import { Typography } from "antd";
import React from "react";
import "./css/Header.css";

const { Title } = Typography;

export default function Header() {
  return (
    <header id="form-header">
      <Title
        style={{
          margin: 0,
        }}
      >
        Welcome Back
      </Title>
      <Title 
      level={5}
      type="secondary"
      style={{
        margin: 0
      }}
      >
        Subtitle text goes here
      </Title>
    </header>
  );
}
