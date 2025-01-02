import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Layout, Menu, Button } from "antd";
import {
    UserOutlined,
    PlusOutlined,
    EditOutlined,
    FileImageOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const VerticalNavbar = () => {
    const [flag, setFlag] = useState(false);
    const isAdmin = localStorage.getItem("isAdmin");

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/logout");
            localStorage.clear();
            toast.success("Logout Successful!");
            setFlag(true);
        } catch (e) {
            toast.error(e.response?.data?.error?.message || "Logout Failed!");
        }
    };

    if (flag) {
        return <Navigate to="/" />;
    }

    return (
        <Sider
            width={240}
            className="bg-[#0B192C] h-screen fixed left-0 top-0 py-6 px-5"
        >
            {/* Logo Section */}
            <div className="flex items-center mb-8">
                <div className="text-[#FF6500] text-3xl font-bold mr-3">
                    <Link to="/">SkillG</Link>
                </div>
            </div>

            {/* Sidebar Menu */}
            <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={["1"]}
                className="bg-transparent text-white"
            >
                {/* Admin Links */}
                {isAdmin && (
                    <>
                        <Menu.Item key="1" icon={<PlusOutlined />} className="menu-item">
                            <Link to="/admin/home/courses">Courses</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined />} className="menu-item">
                            <Link to="/admin/home/blogs">Blogs</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FileImageOutlined />} className="menu-item">
                            <Link to="/admin/home/addimage">Add Image</Link>
                        </Menu.Item>
                    </>
                )}

                {/* Logout Button */}
                <Menu.Item
                    key="5"
                    icon={<LogoutOutlined />}
                    className="text-red-500 hover:text-red-600 menu-item"
                >
                    <Button
                        type="text"
                        className="w-full text-left text-white"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default VerticalNavbar;
