import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Image, Typography, Spin } from 'antd';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const CourseDetail = ({ _id }) => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await axios.get(`/fetch/course/${_id}`);
                if (response.data) {
                    setCourse(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching course details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseDetails();
    }, [_id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="p-6">
            <Card bordered={false}>
                <Row gutter={16}>
                    {/* Display all images in the images array */}
                    <Col span={24}>
                        <Row gutter={16}>
                            {course.images.map((image, index) => (
                                <Col key={index} span={8}>
                                    <Image
                                        src={image}
                                        alt={`course-image-${index}`}
                                        className="rounded-lg"
                                        style={{ width: '100%' }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col span={24} className="mt-4">
                        <Title level={2}>{course.title}</Title>
                        <Paragraph>{course.desc}</Paragraph>
                        <Paragraph>{course.detail}</Paragraph>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default CourseDetail;
