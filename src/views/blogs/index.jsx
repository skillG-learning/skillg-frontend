import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../../components/cards/blog";

const BlogSlider = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("/fetch/blog");
                const data = response.data;

                if (data) {
                    setBlogs(data.data);
                } else {
                    throw new Error(data.message || "Failed to fetch blogs");
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="my-5 mx-auto w-[90%] sm:w-[75%]">
            <h1 className="text-2xl sm:text-3xl text-gray-800 text-center font-extrabold mb-10">
                Explore Our Blogs
            </h1>
            {error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : (
                <div className="flex flex-row justify-around flex-wrap sm:flex-nowrap">
                    {blogs.map((item) => (
                        <div key={item.title} className="carousel-slide px-3">
                            <BlogCard blog={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogSlider;
