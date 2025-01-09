import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode} className="bg-[#001650]">
      <Menu.Item key="explore">Egdd</Menu.Item>
      <Menu.Item key="features">Features</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
