import React from 'react';
import { Form, Input, Button } from 'antd';

const { Item: FormItem } = Form;

const MyForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Form errors:', errorInfo);
    };

    return (
        <Form
            className='w-[590px] bg-gray-100 p-7 rounded-[10px]'
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
                name: '',
                email: '',
                phone: '',
                age: '',
                class: '',
            }}
        >
            {/* Name Field */}
            <FormItem label="Name" name="name">
                <Input
                    className="p-2 rounded"
                    placeholder="Enter your name"
                />
            </FormItem>

            {/* Email Field */}
            <FormItem
                label="Email"
                name="email"
                rules={[{ type: 'email', message: 'Please enter a valid email!' }]}
            >
                <Input
                    className="p-2 rounded"
                    placeholder="Enter your email"
                />
            </FormItem>

            {/* Phone Field */}
            <FormItem
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Phone number is mandatory!' }]}
            >
                <Input
                    className="p-2 rounded"
                    placeholder="Enter your phone number"
                />
            </FormItem>

            {/* Age Field */}
            <FormItem label="Age" name="age">
                <Input
                    className="p-2 rounded"
                    placeholder="Enter your age"
                    type="number"
                />
            </FormItem>

            {/* Class Field */}
            <FormItem
                label="Class"
                name="class"
                rules={[{ required: true, message: 'Class is mandatory!' }]}
            >
                <Input
                    className="p-2 rounded"
                    placeholder="Enter your class"
                />
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
