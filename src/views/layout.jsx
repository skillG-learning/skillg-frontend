import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BlogSlider from "./blogs";
import AllCourses from "./courses";
import AddonFeatures from "./feature";
import Gallery from "./gallery";
import LandingPage from "./landingPage";

const Layout = ()=> {
    return(
        <>
        <Navbar />
        <LandingPage />
        <AllCourses />
        <AddonFeatures />
        <Gallery />
        <BlogSlider />
        <Footer />
        </>
    )
};

export default Layout;