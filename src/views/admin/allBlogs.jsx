import React, { useState, useEffect } from "react";
import { Table, Button, Space, Modal, message } from "antd";
import axios from "axios";
import CreateBlog from "./createBlog"; // Assuming CreateBlog is in the same directory
import { toast } from "react-toastify";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogToUpdate, setBlogToUpdate] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/fetch/blog");
      if (response.data.success) {
        setBlogs(response.data.data);
      } else {
        message.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  const openUpdateModal = async (id) => {
    try {
      const response = await axios.get(`/fetch/blog/${id}`);
      if (response.data.success) {
        setBlogToUpdate(response.data.data);
        setIsModalOpen(true);
      } else {
        message.error("Failed to fetch blog details for update");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while fetching blog details");
    }
  };

  const deleteBlog = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this blog?",
      onOk: async () => {
        try {
          await axios.delete(`/delete/blog/${id}`);
          toast.success("Blog deleted successfully");
          fetchBlogs();
        } catch (error) {
          console.error(error);
          toast.error("Failed to delete blog");
        }
      },
      cancelButtonProps: {
        className: 'bg-red-400',
      },
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setBlogToUpdate(null);
  };

  const handleBlogUpdateSuccess = () => {
    handleModalClose();
    fetchBlogs();
  };

  const openCreateModal = () => {
    setBlogToUpdate(null);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      className: "text-black",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      className: "text-black",
    },
    {
      title: "Created Date",
      dataIndex: "created",
      key: "created",
      render: (date) => <span className="text-black">{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => openUpdateModal(record._id)}>
            Update
          </Button>
          <Button className="bg-red-500" type="danger" onClick={() => deleteBlog(record._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 w-[110%]">
      <h1 className="text-2xl text-black font-bold mb-4">All Blogs</h1>
      <Button type="primary" className="mb-4" onClick={openCreateModal}>
        Create Blog
      </Button>
      <Table
        dataSource={blogs}
        columns={columns.map((col) => ({ ...col, className: "text-black" }))}
        rowKey="_id"
        loading={loading}
        bordered
        className="text-black"
      />
      <Modal
        title={blogToUpdate ? "Update Blog" : "Create New Blog"}
        visible={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        <CreateBlog
          onSuccess={handleBlogUpdateSuccess}
          blogData={blogToUpdate}
          isUpdate={!!blogToUpdate}
        />
      </Modal>
    </div>
  );
};

export default AllBlogs;
