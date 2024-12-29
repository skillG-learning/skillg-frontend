import React from "react";
import { Blogs } from "./constant"; 
import BlogCard from "../../components/cards/blog";

const BlogSlider = () => {
    return (
        <div className="my-5 mx-auto w-[90%] sm:w-[75%]">
            <h1 className="text-2xl sm:text-4xl text-gray-800 text-center font-extrabold mb-10">
                Explore Our Blogs
            </h1>
            <div className="flex flex-row justify-around flex-wrap sm:flex-nowrap">
                {Blogs.map((item) => (
                    <div key={item.title} className="carousel-slide px-3">
                        <BlogCard blog={item} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BlogSlider;
