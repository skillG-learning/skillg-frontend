import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BlogDetail from "./blogDetail";
import { useParams } from 'react-router-dom';

function Blog() {
    const { _id } = useParams();
    return (
        <div>
            <Navbar />
            <BlogDetail _id={_id}/>
            <Footer />
        </div>
    )
};
 
export default Blog;