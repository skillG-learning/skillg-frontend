import React from "react";
import { Card } from "antd";

const BlogCard = ({ blog }) => {
  return (
    <Card
      hoverable
      className="max-w-sm rounded-lg shadow-md border border-gray-200 overflow-hidden"
      cover={
        <img
          alt={blog.title}
          src={blog.images[0]}
          className="h-48 w-full object-cover"
        />
      }
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
        <p className="text-sm text-gray-500 mt-2">Created on: {blog.created}</p>
      </div>
    </Card>
  );
};

export default BlogCard;
