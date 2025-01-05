import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Card
      className="max-w-sm mx-auto shadow-lg rounded-lg"
      cover={
        <img
          alt="Course Image"
          src={course.images[0]}
          className="object-cover h-48 w-full rounded-t-lg"
        />
      }
      hoverable
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
        <p className="text-gray-600 mt-2">{course.desc}</p>
        <div className="mt-4">
          <Link to={`/course/detail/${course._id}`}>
            <Button type="primary" className="w-full bg-[#001650]">
              Know More
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
