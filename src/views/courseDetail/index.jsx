import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import CourseDetail from "./courseDetail";
import { useParams } from 'react-router-dom';

function Course() {
    const { _id } = useParams();
    return (
        <div>
            <Navbar />
            <CourseDetail _id={_id} />
            <Footer />
        </div>
    )
};

export default Course;