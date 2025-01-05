import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const { Item: FormItem } = Form;

const MyForm = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('/add/user', values);
            if (response.data) {
                alert('Your registration successfully');
                form.resetFields();
            } else {
                alert(response.data.message || 'Failed to register!');
            }
        } catch (error) {
            console.error('API error:', error);
            message.error('An error occurred while adding the user.');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Form errors:', errorInfo);
        message.error('Please check the form fields and try again.');
    };

    return (
        <Form
            className="w-full sm:w-[590px] bg-gray-100 p-7 rounded-[10px]"
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
                name: '',
                email: '',
                phone: '',
                age: '',
                grade: '',
            }}
        >
            {/* Name Field */}
            <FormItem label="Name" name="name" rules={[{ required: true, message: 'Name is mandatory!' }]}>
                <Input className="p-2 rounded" placeholder="Enter your name" />
            </FormItem>

            {/* Email Field */}
            <FormItem
                label="Email"
                name="email"
                rules={[{ type: 'email', message: 'Please enter a valid email!' }, { required: true, message: 'Email is mandatory!' }]}
            >
                <Input className="p-2 rounded" placeholder="Enter your email" />
            </FormItem>

            {/* Phone Field */}
            <FormItem
                label="Phone"
                name="phone"
                rules={[
                    { required: true, message: 'Phone number is mandatory!' },
                    { pattern: /^\d{10}$/, message: 'Phone number must be exactly 10 digits!' }
                ]}
            >
                <Input className="p-2 rounded" placeholder="Enter your phone number" />
            </FormItem>

            {/* Age Field */}
            <FormItem label="Age" name="age" rules={[{ required: true, message: 'Age is mandatory!' }]}>
                <Input className="p-2 rounded" placeholder="Enter your age" type="number" />
            </FormItem>

            {/* Class Field */}
            <FormItem
                label="Grade"
                name="grade"
                rules={[{ required: true, message: 'Grade is mandatory!' }]}
            >
                <Input className="p-2 rounded" placeholder="Enter your grade" />
            </FormItem>

            {/* Submit Button */}
            <FormItem>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </FormItem>
        </Form>
    );
};

export default MyForm;
