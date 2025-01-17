import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./leftMenu";
import RightMenu from "./rightMenu";
import { MenuOutlined } from "@ant-design/icons";
import './navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <h3 className="brand-font">SlillG</h3>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            {/* <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div> */}

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: -1 }}
            >
              <LeftMenu mode={"inline"} />
              {/* <RightMenu mode={"inline"} /> */}
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;