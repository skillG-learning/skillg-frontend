import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode} className="bg-[#001650]">
      <Menu.Item key="explore">Home</Menu.Item>
      <Menu.Item key="features">Courses</Menu.Item>
      <Menu.Item key="about">Our Services</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
