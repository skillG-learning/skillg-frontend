import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [flag , setFlag] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const {data} = await axios.post("/admin/login", values);
            localStorage.setItem("isAdmin" , true);
            localStorage.setItem("adminToken" , data.data.token);
            setFlag(true);
        } catch (error) {
            localStorage.clear();
            message.error(
                error.response?.data?.message || "Something went wrong, please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        message.error("Please check the entered details.");
        console.log("Failed:", errorInfo);
    };

    if(flag) {
        return <Navigate to={"/admin/home"}/>
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
                <Form
                    name="login"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Please enter a valid email!" },
                        ]}
                    >
                        <Input placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full"
                            loading={loading}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
