import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const CreateBlog = ({ onSuccess, blogData, isUpdate }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isUpdate && blogData) {
      form.setFieldsValue({
        title: blogData.title,
        desc: blogData.desc,
        content: blogData.content,
        images: blogData.images.join(", "),  // Assuming images is an array of strings
      });
    }
  }, [isUpdate, blogData]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const payload = {
        title: values.title,
        desc: values.desc,
        content: values.content,
        images: values.images ? values.images.split(",").map((url) => url.trim()) : [],
      };

      let response;
      if (isUpdate) {
        // Update request
        response = await axios.put(`/update/blog/${blogData._id}`, payload);
      } else {
        // Create request
        response = await axios.post("/add/blog", payload);
      }

      if (response.data.success) {
        toast.success(isUpdate ? "Blog updated successfully" : "Blog created successfully");
        form.resetFields();
        onSuccess();
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-4">
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter the blog title" }]}
          >
            <Input placeholder="Enter blog title" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Description"
            name="desc"
            rules={[{ required: true, message: "Please enter the blog description" }]}
          >
            <Input.TextArea rows={3} placeholder="Enter blog description" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please enter the blog content" }]}
          >
            <Input.TextArea rows={5} placeholder="Enter blog content" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Image URLs (comma-separated)"
            name="images"
            rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Please enter image URLs') }]}
          >
            <Input placeholder="Enter image URLs separated by commas" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              {isUpdate ? "Update Blog" : "Create Blog"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateBlog;
