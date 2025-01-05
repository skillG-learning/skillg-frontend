
import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../../components/cards/course";
import { toast } from "react-toastify";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("/fetch/course");

                if (response.data) {
                    setCourses(response.data.data);
                } else {
                    toast.error(response.data.message || "Failed to fetch courses.");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <p>Loading courses...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="w-[80%] my-0 mx-[auto]">
            <h1 className="text-xl sm:text-3xl text-black text-center font-bold m-7">Courses</h1>
            <div className="flex flex-row flex-wrap sm:flex-nowrap">
                {courses.map((item) => (
                    <CourseCard key={item._id} course={item} />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;
