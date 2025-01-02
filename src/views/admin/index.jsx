import VerticalNavbar from "./verticalNavbar";
import { useParams } from "react-router-dom";
import AllCourses from "./allCourses.jsx";
import AllBlogs from "./allBlogs.jsx";

function Admin() {
    let { subpage } = useParams();
    if (subpage == undefined) {
        subpage = "courses";
    };
    return (
        <div className='flex'>
            <VerticalNavbar />
            <div className="mx-[auto]">
                {subpage === "courses" && <AllCourses />}
                {subpage === "blogs" && <AllBlogs />}
            </div>
        </div>
    )
};


export default Admin;