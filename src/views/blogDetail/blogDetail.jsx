import React, { useState, useEffect } from 'react';
import { Card, Spin, Result } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

const BlogDetail = ({ _id }) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                const response = await axios.get(`/fetch/blog/${_id}`);
                if (response.data) {
                    setBlog(response.data.data);
                } else {
                    setError(response.data.message || "An error occurred");
                }
            } catch (error) {
                setError("Failed to fetch blog detail");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetail();
    }, [_id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spin indicator={<LoadingOutlined />} size="large" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Result status="error" title="Blog Not Found" subTitle={error} />
            </div>
        );
    }

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <Card
                className="bg-white shadow-lg rounded-lg"
                title={<h1 className="text-3xl text-black font-bold text-center">{blog.title}</h1>}
                bordered={false}
            >
                {blog.images && blog.images.length > 0 && (
                    <div className="mb-4">
                        <img 
                            src={blog.images[0]} 
                            alt={blog.title} 
                            className="w-full h-auto rounded-lg" 
                        />
                    </div>
                )}
                <div className="prose mt-4">
                    <p className='text-black'>{blog.desc}</p>
                    <p className='text-black'>{blog.content}</p>
                    <p className="text-gray-500 text-sm mt-4">Published on: {new Date(blog.created).toLocaleDateString()}</p>
                </div>
            </Card>
        </div>
    );
};

export default BlogDetail;
