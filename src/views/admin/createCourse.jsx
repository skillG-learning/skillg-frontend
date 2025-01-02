import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const CreateCourse = ({ onSuccess, courseData, isUpdate }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isUpdate && courseData) {
      form.setFieldsValue({
        title: courseData.title,
        desc: courseData.desc,
        detail: courseData.detail,
        images: courseData.images.join(", "),  // Assuming images is an array of strings
      });
    }
  }, [isUpdate, courseData]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Prepare payload
      const payload = {
        title: values.title,
        desc: values.desc,
        detail: values.detail,
        images: values.images ? values.images.split(",").map((url) => url.trim()) : [],
      };

      let response;
      if (isUpdate) {
        // If it's an update, send PUT request
        response = await axios.put(`/update/course/${courseData._id}`, payload);
      } else {
        // If it's a create, send POST request
        response = await axios.post("/add/course", payload);
      }

      if (response.data) {
        toast.success(isUpdate ? "Course updated successfully" : "Course created successfully");
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
            rules={[{ required: true, message: "Please enter the course title" }]}
          >
            <Input placeholder="Enter course title" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Description"
            name="desc"
            rules={[{ required: true, message: "Please enter the course description" }]}
          >
            <Input.TextArea rows={3} placeholder="Enter course description" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Detail"
            name="detail"
            rules={[{ required: true, message: "Please enter the course details" }]}
          >
            <Input.TextArea rows={5} placeholder="Enter course details" />
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
              {isUpdate ? "Update Course" : "Create Course"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateCourse;