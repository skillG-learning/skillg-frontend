import React from "react";
import { courses } from "./constant";
import CourseCard from "../../components/cards/course";

const AllCourses = () => {
    const allcourses = courses.map((item) => {
        return (
            <CourseCard key={item.title} course={item} />
        );
    });

    return (
        <div className="w-[80%] my-0 mx-[auto]">
            <h1 className=" text-xl sm:text-3xl text-black text-center font-bold m-7 ">Courses</h1>
            <div className="flex flex-row flex-wrap sm:flex-nowrap">
                {allcourses}
            </div>
        </div>
    );
};

export default AllCourses;
