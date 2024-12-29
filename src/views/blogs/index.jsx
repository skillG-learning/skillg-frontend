import React from "react";
import { Blogs } from "./constant"; 
import BlogCard from "../../components/cards/blog";

const BlogSlider = () => {
    return (
        <div className="my-5 mx-auto w-[90%] sm:w-[75%] lg:w-[60%]">
            <h1 className=" text-xl sm:text-3xl text-black text-center font-bold m-7 ">Explore Our Blogs</h1>
            <div className="flex flex-row">
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
