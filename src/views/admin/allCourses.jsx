import React, { useEffect, useState } from "react";
import { Table, Button, Space, Modal, message } from "antd";
import axios from "axios";
import CreateCourse from "./createCourse"; 
import { toast } from "react-toastify";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courseToUpdate, setCourseToUpdate] = useState(null);

    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/fetch/course");
            if (response.data.success) {
                setCourses(response.data.data);
            } else {
                message.error("Failed to fetch courses");
            }
        } catch (error) {
            console.error(error);
            message.error("An error occurred while fetching courses");
        } finally {
            setLoading(false);
        }
    };

    const openUpdateModal = async (id) => {
        try {
            const response = await axios.get(`/fetch/course/${id}`);
            if (response.data.success) {
                setCourseToUpdate(response.data.data);  // Set the course data to the state
                setIsModalOpen(true); // Open the modal for updating
            } else {
                message.error("Failed to fetch course details for update");
            }
        } catch (error) {
            console.error(error);
            message.error("An error occurred while fetching course details");
        }
    };

    const deleteCourse = async (id) => {
        Modal.confirm({
            title: "Are you sure you want to delete this course?",
            onOk: async () => {
                try {
                    await axios.delete(`/delete/course/${id}`);
                    toast.success("Course deleted successfully");
                    fetchCourses();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to delete course");
                }
            },
            cancelButtonProps: {
                className: 'bg-red-500',
            },
        });
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setCourseToUpdate(null);  // Reset courseToUpdate when closing the modal
    };

    const handleCourseUpdateSuccess = () => {
        handleModalClose();
        fetchCourses();
    };

    const openCreateModal = () => {
        setCourseToUpdate(null);  // Clear course data
        setIsModalOpen(true);  // Open modal for creating new course
    };

    useEffect(() => {
        fetchCourses();
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
                    <Button className="bg-red-500" type="danger" onClick={() => deleteCourse(record._id)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-6 w-[110%] m-10 bg-gray-100">
            <h1 className="text-2xl text-black font-bold mb-4">All Courses</h1>
            <Button type="primary" className="mb-4" onClick={openCreateModal}>
                Create Course
            </Button>
            <Table
                dataSource={courses}
                columns={columns.map((col) => ({ ...col, className: "text-black" }))}
                rowKey="_id"
                loading={loading}
                bordered
                className="text-black"
            />
            <Modal
                title={courseToUpdate ? "Update Course" : "Create New Course"}
                visible={isModalOpen}
                onCancel={handleModalClose}
                footer={null}
            >
                <CreateCourse
                    onSuccess={handleCourseUpdateSuccess}
                    courseData={courseToUpdate} 
                    isUpdate={!!courseToUpdate}  
                />
            </Modal>
        </div>
    );
};

export default AllCourses;
