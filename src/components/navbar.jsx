// Import necessary modules
import React from 'react';
import { Menu } from 'antd';


const Navbar = () => {
  const items = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'about',
      label: 'About',
    },
    {
      key: 'services',
      label: 'Services',
    },
    {
      key: 'contact',
      label: 'Contact',
    },
  ];

  return (
    <div className="w-full bg-gray-800">
      <Menu
        mode="horizontal"
        theme="dark"
        items={items}
        className="max-w-screen-lg mx-auto flex justify-center text-white"
      />
    </div>
  );
};

export default Navbar;
